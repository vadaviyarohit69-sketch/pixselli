"use client";

import { normalizeFileToken } from '@/lib/unifiedOutputProcessor';
import { useLanguage } from '@/components/LanguageProvider';
import { getLocaleBasePath } from '@/lib/i18n';
import { IMAGE_RESIZER_TEXT_BY_LOCALE } from '@/lib/imageResizerTranslations';
import { ROTATE_IMAGE_TEXT_BY_LOCALE } from '@/lib/rotateImageTranslations';
import { useState, useRef, useCallback } from 'react';
import { Upload, Download, RotateCcw, RotateCw, Image as ImageIcon, ChevronDown, Shield, Zap, Eye } from "lucide-react";
import JSZip from 'jszip';

interface ImageState {
  originalFile: File | null;
  originalUrl: string;
  processedUrl: string;
  originalWidth: number;
  originalHeight: number;
}

type OutputFormat = 'image/jpeg' | 'image/png' | 'image/webp';

interface OutputVariant {
  format: OutputFormat;
  label: 'JPG' | 'PNG' | 'WebP';
  extension: 'jpg' | 'png' | 'webp';
  blob: Blob;
  url: string;
}

function normalizeDownloadName(fileName: string) {
  const dotIndex = fileName.lastIndexOf('.');
  if (dotIndex <= 0) return normalizeFileToken(fileName);
  const baseName = fileName.slice(0, dotIndex);
  const extension = fileName.slice(dotIndex + 1).toLowerCase();
  return `${normalizeFileToken(baseName)}.${extension}`;
}

function clampAngle(value: number) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(-180, Math.min(180, value));
}

export default function Page() {
  const { locale } = useLanguage();
  const tx = useCallback(
    (en: string, es: string) => {
      if (locale === 'es') {
        return es;
      }

      return (
        ROTATE_IMAGE_TEXT_BY_LOCALE[locale]?.[en] ||
        IMAGE_RESIZER_TEXT_BY_LOCALE[locale]?.[en] ||
        en
      );
    },
    [locale]
  );
  const localeBasePath = getLocaleBasePath(locale);
  const pagePath = localeBasePath ? `${localeBasePath}/rotate-image` : '/rotate-image';
  const pageUrl = `https://pixselli.com${pagePath}`;
  const homePath = localeBasePath || '/';

  const [imageState, setImageState] = useState<ImageState>({
    originalFile: null,
    originalUrl: '',
    processedUrl: '',
    originalWidth: 0,
    originalHeight: 0,
  });

  const [rotateAngle, setRotateAngle] = useState(90);
  const [selectedOutputFormats, setSelectedOutputFormats] = useState<OutputFormat[]>(['image/png', 'image/jpeg']);
  const [outputVariants, setOutputVariants] = useState<OutputVariant[]>([]);
  const [processing, setProcessing] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const getFormatMeta = (format: OutputFormat) => {
    if (format === 'image/jpeg') {
      return { label: 'JPG' as const, extension: 'jpg' as const };
    }
    if (format === 'image/webp') {
      return { label: 'WebP' as const, extension: 'webp' as const };
    }

    return { label: 'PNG' as const, extension: 'png' as const };
  };

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert(tx('Please select a valid image file', 'Por favor selecciona un archivo de imagen valido'));
      return;
    }

    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      setOutputVariants((prev) => {
        prev.forEach((variant) => URL.revokeObjectURL(variant.url));
        return [];
      });
      setImageState({
        originalFile: file,
        originalUrl: url,
        processedUrl: '',
        originalWidth: img.width,
        originalHeight: img.height,
      });
    };

    img.src = url;
  }, [tx]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const input = fileInputRef.current;
      if (input) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        input.files = dataTransfer.files;
        handleFileSelect({ target: input } as any);
      }
    }
  }, [handleFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const handleAngleInput = (value: number) => {
    setRotateAngle(clampAngle(value));
  };

  const processImage = useCallback((formats: OutputFormat[] = selectedOutputFormats) => {
    if (!imageState.originalUrl || !canvasRef.current) return;

    setProcessing(true);

    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext('2d')!;

      const radians = (rotateAngle * Math.PI) / 180;
      const absCos = Math.abs(Math.cos(radians));
      const absSin = Math.abs(Math.sin(radians));

      const newWidth = Math.max(1, Math.ceil(img.width * absCos + img.height * absSin));
      const newHeight = Math.max(1, Math.ceil(img.width * absSin + img.height * absCos));

      canvas.width = newWidth;
      canvas.height = newHeight;

      ctx.clearRect(0, 0, newWidth, newHeight);
      ctx.save();
      ctx.translate(newWidth / 2, newHeight / 2);
      ctx.rotate(radians);
      ctx.drawImage(img, -img.width / 2, -img.height / 2);
      ctx.restore();

      const effectiveFormats: OutputFormat[] = formats.length > 0 ? formats : ['image/png'];

      Promise.all(
        effectiveFormats.map(async (format) => {
          const blob = await new Promise<Blob | null>((resolve) => {
            if (format === 'image/png') {
              canvas.toBlob((b) => resolve(b), format);
            } else {
              canvas.toBlob((b) => resolve(b), format, 0.95);
            }
          });

          if (!blob) return null;

          const meta = getFormatMeta(format);
          return {
            format,
            label: meta.label,
            extension: meta.extension,
            blob,
            url: URL.createObjectURL(blob),
          } as OutputVariant;
        })
      ).then((variants) => {
        const nextVariants = variants.filter((variant): variant is OutputVariant => Boolean(variant));

        setOutputVariants((prev) => {
          prev.forEach((variant) => URL.revokeObjectURL(variant.url));
          return nextVariants;
        });

        setImageState((prev) => ({
          ...prev,
          processedUrl: nextVariants[0]?.url || '',
        }));
        setProcessing(false);
      });
    };

    img.src = imageState.originalUrl;
  }, [imageState.originalUrl, rotateAngle, selectedOutputFormats]);

  const handleOutputFormatToggle = useCallback((format: OutputFormat) => {
    const isSelected = selectedOutputFormats.includes(format);
    const nextFormats = isSelected
      ? selectedOutputFormats.filter((f) => f !== format)
      : [...selectedOutputFormats, format];

    if (nextFormats.length === 0) return;

    setSelectedOutputFormats(nextFormats);

    if (imageState.originalUrl) {
      processImage(nextFormats);
    }
  }, [imageState.originalUrl, processImage, selectedOutputFormats]);

  const downloadImage = useCallback(async () => {
    if (outputVariants.length === 0) return;

    const fileName = imageState.originalFile?.name || 'image';
    const stem = fileName.replace(/\.[^/.]+$/, '');
    const angleToken = rotateAngle.toString().replace('-', 'neg');
    const baseName = `${stem}_rotated_${angleToken}`;

    if (outputVariants.length === 1) {
      const single = outputVariants[0];
      const link = document.createElement('a');
      link.download = normalizeDownloadName(`${baseName}.${single.extension}`);
      link.href = single.url;
      link.click();
      return;
    }

    const zip = new JSZip();
    outputVariants.forEach((variant) => {
      zip.file(`${baseName}_${variant.label.toLowerCase()}.${variant.extension}`, variant.blob);
    });

    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const zipUrl = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.download = normalizeDownloadName(`${baseName}_formats.zip`);
    link.href = zipUrl;
    link.click();
    URL.revokeObjectURL(zipUrl);
  }, [imageState.originalFile, outputVariants, rotateAngle]);

  const resetToOriginal = useCallback(() => {
    setOutputVariants((prev) => {
      prev.forEach((variant) => URL.revokeObjectURL(variant.url));
      return [];
    });
    setImageState((prev) => ({ ...prev, processedUrl: '' }));
    setRotateAngle(90);
  }, []);

  const anglePresets = [-90, -45, 0, 45, 90, 180];

  return (
    <>
      <canvas ref={canvasRef} className="hidden" />

      {/* SEO Structured Data - WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": tx('Rotate Image - Free Online Image Rotator', 'Rotar imagen - Herramienta gratis online'),
            "description": tx('Rotate images by any angle online instantly. Free browser-based image rotation tool with live preview and high-quality output.', 'Rota imagenes por cualquier angulo al instante. Herramienta gratis en navegador con vista previa y salida de alta calidad.'),
            "url": pageUrl,
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web Browser",
            "featureList": [
              tx('Rotate by any angle', 'Rotar por cualquier angulo'),
              tx('Live preview', 'Vista previa en vivo'),
              tx('No quality loss workflow', 'Flujo sin perdida de calidad'),
              tx('Multiple output formats', 'Multiples formatos de salida'),
              tx('Client-side processing', 'Procesamiento local')
            ],
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />

      {/* SEO Structured Data - HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": tx('How to Rotate an Image', 'Como rotar una imagen'),
            "description": tx('Learn how to rotate images by custom angle using our free online rotate image tool.', 'Aprende a rotar imagenes con angulo personalizado usando nuestra herramienta gratis.'),
            "step": [
              {
                "@type": "HowToStep",
                "name": tx('Upload Image', 'Subir imagen'),
                "text": tx('Upload your image by clicking or dragging it into the upload area.', 'Sube tu imagen haciendo clic o arrastrandola al area de carga.'),
                "url": `${pageUrl}#step1`
              },
              {
                "@type": "HowToStep",
                "name": tx('Set Rotation Angle', 'Definir angulo de rotacion'),
                "text": tx('Choose a preset angle or set a custom value between -180 and 180 degrees.', 'Elige un angulo predefinido o define un valor personalizado entre -180 y 180 grados.'),
                "url": `${pageUrl}#step2`
              },
              {
                "@type": "HowToStep",
                "name": tx('Apply Rotation', 'Aplicar rotacion'),
                "text": tx('Click Rotate Image to process your image with the selected angle.', 'Haz clic en Rotar imagen para procesar tu imagen con el angulo seleccionado.'),
                "url": `${pageUrl}#step3`
              },
              {
                "@type": "HowToStep",
                "name": tx('Download Result', 'Descargar resultado'),
                "text": tx('Download the rotated image in your preferred output format.', 'Descarga la imagen rotada en tu formato de salida preferido.'),
                "url": `${pageUrl}#step4`
              }
            ]
          })
        }}
      />

      {/* SEO Structured Data - FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": tx('Can I rotate images by custom angles?', 'Puedo rotar imagenes con angulos personalizados?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx('Yes. You can rotate from -180 degrees to 180 degrees and use quick presets for common angles.', 'Si. Puedes rotar desde -180 hasta 180 grados y usar preajustes rapidos para angulos comunes.')
                }
              },
              {
                "@type": "Question",
                "name": tx('Will rotating reduce image quality?', 'Rotar reduce la calidad de imagen?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx('Rotation is processed in high quality on your device. Output quality is preserved for normal editing workflows.', 'La rotacion se procesa en alta calidad en tu dispositivo. La calidad de salida se conserva para flujos de edicion normales.')
                }
              },
              {
                "@type": "Question",
                "name": tx('What formats are supported?', 'Que formatos son compatibles?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx('You can upload common image formats and download as PNG, JPG, or WebP.', 'Puedes subir formatos comunes de imagen y descargar en PNG, JPG o WebP.')
                }
              },
              {
                "@type": "Question",
                "name": tx('Is this rotate image tool free?', 'Esta herramienta para rotar imagenes es gratis?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx('Yes. The tool is completely free and works directly in your browser.', 'Si. La herramienta es completamente gratis y funciona directamente en tu navegador.')
                }
              },
              {
                "@type": "Question",
                "name": tx('Are my images uploaded to a server?', 'Mis imagenes se suben a un servidor?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx('No. All processing happens locally in your browser for privacy and security.', 'No. Todo el procesamiento ocurre localmente en tu navegador para mayor privacidad y seguridad.')
                }
              }
            ]
          })
        }}
      />

      {/* SEO Structured Data - SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": tx('Rotate Image Tool', 'Herramienta para rotar imagen'),
            "url": pageUrl,
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />

      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8" aria-label={tx('Breadcrumb', 'Migas de pan')}>
            <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex items-center gap-2 text-sm text-gray-600">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a
                  itemProp="item"
                  href={homePath}
                  className="hover:text-blue-600 transition-colors"
                >
                  <span itemProp="name">{tx('Home', 'Inicio')}</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-gray-400">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="text-gray-900 font-medium">{tx('Rotate Image', 'Rotar imagen')}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <RotateCw className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {tx('Rotate Image', 'Rotar imagen')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {tx('Rotate images by any angle with instant preview. Fast, secure, and works entirely in your browser.', 'Rota imagenes con cualquier angulo con vista previa instantanea. Rapido, seguro y funciona totalmente en tu navegador.')}
            </p>
          </header>

          {/* Main Tool Area */}
          <main>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Upload/Preview Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Upload className="w-6 h-6 text-blue-600" />
                  {tx('Upload Your Image', 'Sube tu imagen')}
                </h2>

                {!imageState.originalUrl ? (
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="relative border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 bg-gradient-to-br from-gray-50 to-gray-100 transition-all cursor-pointer group"
                    style={{ overflow: 'hidden' }}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <div className="absolute top-4 left-4 w-20 h-20 bg-blue-100 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" style={{ pointerEvents: 'none' }}></div>
                    <div className="absolute bottom-4 right-4 w-24 h-24 bg-purple-100 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" style={{ pointerEvents: 'none' }}></div>

                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        <Upload className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-lg font-bold text-gray-800 mb-2">
                        {tx('Drag & drop your image here', 'Arrastra y suelta tu imagen aqui')}
                      </p>
                      <p className="text-sm text-gray-600 mb-4">
                        {tx('or click to browse files', 'o haz clic para explorar archivos')}
                      </p>
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <div className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-full shadow-sm border border-gray-200">
                          <ImageIcon className="w-4 h-4 text-blue-500" />
                          <span className="text-xs font-medium text-gray-600">JPG</span>
                        </div>
                        <div className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-full shadow-sm border border-gray-200">
                          <ImageIcon className="w-4 h-4 text-purple-500" />
                          <span className="text-xs font-medium text-gray-600">PNG</span>
                        </div>
                        <div className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-full shadow-sm border border-gray-200">
                          <ImageIcon className="w-4 h-4 text-emerald-500" />
                          <span className="text-xs font-medium text-gray-600">WebP</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">
                        {tx('Supports all major image formats', 'Compatible con los formatos principales de imagen')}
                      </p>
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="relative rounded-xl overflow-hidden bg-gray-100">
                      <img
                        src={imageState.originalUrl}
                        alt={tx('Original', 'Original')}
                        className="w-full h-auto"
                        style={{ maxHeight: '500px', objectFit: 'contain' }}
                      />
                      <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                        {imageState.originalWidth} × {imageState.originalHeight}
                      </div>
                    </div>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium"
                    >
                      {tx('Choose Different Image', 'Elegir otra imagen')}
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                  </div>
                )}
              </div>

              {/* Controls Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <RotateCw className="w-6 h-6 text-blue-600" />
                  {tx('Rotate Settings', 'Configuracion de rotacion')}
                </h2>

                {imageState.originalUrl ? (
                  <div className="space-y-6">
                    {/* Angle Slider */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        {tx('Rotation Angle', 'Angulo de rotacion')}: <span className="text-blue-600">{rotateAngle}°</span>
                      </label>
                      <input
                        type="range"
                        min="-180"
                        max="180"
                        step="1"
                        value={rotateAngle}
                        onChange={(e) => handleAngleInput(parseInt(e.target.value, 10))}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>-180°</span>
                        <span>0°</span>
                        <span>180°</span>
                      </div>
                    </div>

                    {/* Angle Input */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {tx('Custom Angle (degrees)', 'Angulo personalizado (grados)')}
                      </label>
                      <input
                        type="number"
                        min="-180"
                        max="180"
                        value={rotateAngle}
                        onChange={(e) => handleAngleInput(parseInt(e.target.value, 10) || 0)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    {/* Angle Presets */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        {tx('Quick Presets', 'Preajustes rapidos')}
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {anglePresets.map((preset) => (
                          <button
                            key={preset}
                            onClick={() => setRotateAngle(preset)}
                            className={`py-2 px-3 rounded-lg font-medium transition-all ${rotateAngle === preset ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                          >
                            {preset}°
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Output Formats */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        {tx('Download Formats', 'Formatos de descarga')}
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        <button
                          onClick={() => handleOutputFormatToggle('image/jpeg')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${selectedOutputFormats.includes('image/jpeg') ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                          JPG
                        </button>
                        <button
                          onClick={() => handleOutputFormatToggle('image/png')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${selectedOutputFormats.includes('image/png') ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                          PNG
                        </button>
                        <button
                          onClick={() => handleOutputFormatToggle('image/webp')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${selectedOutputFormats.includes('image/webp') ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                          WebP
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        {tx('Single format = single file, multiple formats = ZIP download', 'Un formato = un archivo, varios formatos = descarga ZIP')}
                      </p>
                    </div>

                    {/* Info Box */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <RotateCw className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-blue-900 font-medium mb-1">
                            {tx('Current Rotation', 'Rotacion actual')}
                          </p>
                          <p className="text-xs text-blue-700">
                            {tx('Your image will be rotated by', 'Tu imagen se rotara')} {rotateAngle}°.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-6">
                      <button
                        onClick={resetToOriginal}
                        className="flex-1 py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium flex items-center justify-center gap-2"
                      >
                        <RotateCcw className="w-5 h-5" />
                        {tx('Reset', 'Reiniciar')}
                      </button>
                      <button
                        onClick={() => processImage()}
                        disabled={processing}
                        className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {processing ? tx('Processing...', 'Procesando...') : tx('Rotate Image', 'Rotar imagen')}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <RotateCw className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Ready to Rotate', 'Listo para rotar')}</h3>
                      <p className="text-gray-600 max-w-sm mx-auto">
                        {tx('Upload an image to start rotating', 'Sube una imagen para comenzar a rotar')}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Preview and Download Section */}
            {imageState.processedUrl && (
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Download className="w-6 h-6 text-blue-600" />
                  {tx('Preview & Download', 'Vista previa y descarga')}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">{tx('Original Image', 'Imagen original')}</h3>
                    <div className="relative rounded-xl overflow-hidden bg-gray-100">
                      <img
                        src={imageState.originalUrl}
                        alt={tx('Original', 'Original')}
                        className="w-full h-auto"
                      />
                      <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                        {imageState.originalWidth} × {imageState.originalHeight}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">{tx('Rotated Image', 'Imagen rotada')}</h3>
                    <div className="relative rounded-xl overflow-hidden bg-gray-100 mb-4">
                      <img
                        src={imageState.processedUrl}
                        alt={tx('Rotated', 'Rotada')}
                        className="w-full h-auto"
                      />
                      <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                        {rotateAngle}°
                      </div>
                    </div>
                    <button
                      onClick={downloadImage}
                      disabled={outputVariants.length === 0 || processing}
                      className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all font-bold shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Download className="w-5 h-5" />
                      {outputVariants.length > 1 ? tx('Download Rotated Images (ZIP)', 'Descargar imagenes rotadas (ZIP)') : tx('Download Rotated Image', 'Descargar imagen rotada')}
                    </button>
                    {outputVariants.length > 0 && (
                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {outputVariants.map((variant) => (
                          <div key={variant.format} className="px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-700 text-center font-medium">
                            {variant.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* About Section */}
            <section className="bg-white rounded-xl shadow-md p-8 border border-gray-200 mb-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About Rotate Image Tool', 'Acerca de la herramienta para rotar imagen')}</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {tx('Our free online rotate image tool lets you rotate images by any custom angle with instant preview. It is useful for fixing orientation issues, making creative edits, and preparing photos for social media or documents.', 'Nuestra herramienta gratis para rotar imagen te permite rotar imagenes con cualquier angulo personalizado y vista previa instantanea. Es util para corregir orientacion, hacer ediciones creativas y preparar fotos para redes o documentos.')}
                </p>
                <p>
                  {tx('Choose a preset or enter a custom degree value from -180 to 180. All processing happens locally in your browser to keep your images private and secure. No registration required and completely free to use.', 'Elige un preajuste o ingresa un valor personalizado entre -180 y 180. Todo el procesamiento ocurre localmente en tu navegador para mantener tus imagenes privadas y seguras. Sin registro y totalmente gratis.')}
                </p>
              </div>
            </section>

            {/* Features Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto" aria-labelledby="features-heading">
              <h2 id="features-heading" className="sr-only">{tx('Key Features', 'Funciones clave')}</h2>
              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Fast Processing', 'Procesamiento rapido')}</h3>
                <p className="text-gray-600">
                  {tx('Rotate images instantly in your browser with no uploads required.', 'Rota imagenes al instante en tu navegador sin subidas necesarias.')}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <RotateCw className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Any Angle Rotation', 'Rotacion en cualquier angulo')}</h3>
                <p className="text-gray-600">
                  {tx('Use presets or choose any angle between -180 and 180 degrees.', 'Usa preajustes o elige cualquier angulo entre -180 y 180 grados.')}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Live Preview', 'Vista previa en vivo')}</h3>
                <p className="text-gray-600">
                  {tx('Preview rotated output before downloading in your preferred format.', 'Previsualiza la salida rotada antes de descargar en tu formato preferido.')}
                </p>
              </div>
            </section>

            {/* How to Use Section */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-8 border border-blue-200 max-w-4xl mx-auto mb-12" aria-labelledby="howto-heading">
              <h2 id="howto-heading" className="text-2xl font-bold text-gray-900 mb-8 text-center">{tx('How to Rotate an Image', 'Como rotar una imagen')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{tx('Upload Your Image', 'Sube tu imagen')}</h3>
                      <p className="text-gray-600 text-sm">{tx('Click upload or drag and drop your image file.', 'Haz clic en subir o arrastra y suelta tu archivo de imagen.')}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{tx('Set Rotation Angle', 'Define el angulo de rotacion')}</h3>
                      <p className="text-gray-600 text-sm">{tx('Use presets or set a custom value from -180 to 180 degrees.', 'Usa preajustes o define un valor personalizado de -180 a 180 grados.')}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{tx('Apply Rotation', 'Aplica la rotacion')}</h3>
                      <p className="text-gray-600 text-sm">{tx('Click Rotate Image to process with your selected angle.', 'Haz clic en Rotar imagen para procesar con el angulo seleccionado.')}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{tx('Download Result', 'Descarga el resultado')}</h3>
                      <p className="text-gray-600 text-sm">{tx('Preview and download your rotated image in PNG, JPG, or WebP.', 'Previsualiza y descarga tu imagen rotada en PNG, JPG o WebP.')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-sm text-blue-800">
                  <strong>{tx('Pro Tip:', 'Consejo Pro:')}</strong>{' '}
                  {tx('Use 90 or -90 degrees for quick orientation fixes and smaller custom angles for creative edits.', 'Usa 90 o -90 grados para correcciones rapidas de orientacion y angulos menores para ediciones creativas.')}
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-4xl mx-auto" aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="text-2xl font-bold text-gray-900 mb-6 text-center">{tx('Frequently Asked Questions', 'Preguntas frecuentes')}</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(0)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>{tx('Can I rotate images by custom angles?', 'Puedo rotar imagenes con angulos personalizados?')}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 0 ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaqIndex === 0 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('Yes, choose any angle between -180 and 180 degrees using the slider or number input.', 'Si, elige cualquier angulo entre -180 y 180 grados usando el control o el campo numerico.')}</p>
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(1)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>{tx('Will rotating reduce image quality?', 'Rotar reduce la calidad de imagen?')}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 1 ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaqIndex === 1 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('The tool uses high-quality canvas processing. In normal usage, quality remains suitable for documents, web, and social media.', 'La herramienta usa procesamiento de alta calidad. En uso normal, la calidad se mantiene adecuada para documentos, web y redes sociales.')}</p>
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(2)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>{tx('What image formats are supported?', 'Que formatos de imagen son compatibles?')}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 2 ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaqIndex === 2 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('Upload common image formats and export in PNG, JPG, and WebP.', 'Sube formatos comunes de imagen y exporta en PNG, JPG y WebP.')}</p>
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(3)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>{tx('Is this tool free to use?', 'Esta herramienta es gratis?')}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 3 ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaqIndex === 3 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('Yes. It is completely free, with no registration and no hidden charges.', 'Si. Es completamente gratis, sin registro y sin cargos ocultos.')}</p>
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(4)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>{tx('Is my image data secure?', 'Mis datos de imagen son seguros?')}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 4 ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaqIndex === 4 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('Yes. All processing happens locally in your browser and your files are never uploaded.', 'Si. Todo el procesamiento ocurre localmente en tu navegador y tus archivos nunca se suben.')}</p>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Trust Footer Box */}
            <section className="max-w-4xl mx-auto mt-10">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-blue-900 font-medium mb-1">
                      {tx('100% Private & Secure', '100% Privado y seguro')}
                    </p>
                    <p className="text-xs text-blue-700">
                      {tx('All processing happens in your browser. Your images never leave your device.', 'Todo el procesamiento ocurre en tu navegador. Tus imagenes nunca salen de tu dispositivo.')}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </article>
    </>
  );
}
