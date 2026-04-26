"use client";

import { normalizeFileToken } from '@/lib/unifiedOutputProcessor';
import { useLanguage } from '@/components/LanguageProvider';
import { getLocaleBasePath } from '@/lib/i18n';
import { IMAGE_RESIZER_TEXT_BY_LOCALE } from '@/lib/imageResizerTranslations';
import { FLIP_IMAGE_TEXT_BY_LOCALE } from '@/lib/flipImageTranslations';
import { useState, useRef, useCallback } from 'react';
import { AlertCircle, Upload, Download, RotateCcw, RotateCw, Image as ImageIcon, Maximize2, Minimize2, Lock, Unlock, Info, ChevronDown, ChevronUp, Shield, Check, CheckCircle, CheckCircle2, Plus, X, FolderArchive, Crop, Move, ZoomIn, ZoomOut, RefreshCw, Gauge, Percent, Ruler, Train, Calendar, Droplet, Type, Contrast, Palette, Eye, Scan, Target, Mail, FileText, Globe, MessageCircle, FlipHorizontal, FlipVertical, Zap, Youtube, Monitor, Smartphone, Tv, Camera, User, PenTool } from "lucide-react";
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

export default function Page() {
  const { locale } = useLanguage();
  const tx = useCallback(
    (en: string, es: string) => {
      if (locale === 'es') {
        return es;
      }

      return (
        FLIP_IMAGE_TEXT_BY_LOCALE[locale]?.[en] ||
        IMAGE_RESIZER_TEXT_BY_LOCALE[locale]?.[en] ||
        en
      );
    },
    [locale]
  );
  const localeBasePath = getLocaleBasePath(locale);
  const pagePath = localeBasePath ? `${localeBasePath}/flip-image` : '/flip-image';
  const pageUrl = `https://pixselli.com${pagePath}`;
  const homePath = localeBasePath || '/';

  const [imageState, setImageState] = useState<ImageState>({
    originalFile: null,
    originalUrl: '',
    processedUrl: '',
    originalWidth: 0,
    originalHeight: 0,
  });
  
  const [flipMode, setFlipMode] = useState<'horizontal' | 'vertical' | 'both'>('horizontal');
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

  const processImage = useCallback((formats: OutputFormat[] = selectedOutputFormats) => {
    if (!imageState.originalUrl || !canvasRef.current) return;

    setProcessing(true);

    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext('2d')!;
      
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.save();

      if (flipMode === 'horizontal') {
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
      } else if (flipMode === 'vertical') {
        ctx.translate(0, canvas.height);
        ctx.scale(1, -1);
      } else if (flipMode === 'both') {
        ctx.translate(canvas.width, canvas.height);
        ctx.scale(-1, -1);
      }

      ctx.drawImage(img, 0, 0);
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

        setImageState(prev => ({
          ...prev,
          processedUrl: nextVariants[0]?.url || '',
        }));
        setProcessing(false);
      });
    };

    img.src = imageState.originalUrl;
  }, [imageState.originalUrl, flipMode, selectedOutputFormats]);

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
    const baseName = fileName.replace(/\.[^/.]+$/, '') + '_flipped';

    if (outputVariants.length === 1) {
      const single = outputVariants[0];
      const link = document.createElement('a');
      link.download = normalizeDownloadName(`${baseName}_downloads.zip`);
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
    link.download = normalizeDownloadName(`${baseName}_downloads.zip`);
    link.href = zipUrl;
    link.click();
    URL.revokeObjectURL(zipUrl);
  }, [imageState.originalFile, outputVariants]);

  const resetToOriginal = useCallback(() => {
    setOutputVariants((prev) => {
      prev.forEach((variant) => URL.revokeObjectURL(variant.url));
      return [];
    });
    setImageState(prev => ({ ...prev, processedUrl: '' }));
    setFlipMode('horizontal');
  }, []);

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
            "name": tx('Flip Image', 'Voltear Imagen'),
            "description": tx('Flip images horizontally, vertically, or both ways instantly. Free online image flipper tool with instant preview.', 'Voltea imagenes horizontal, vertical o en ambos sentidos al instante. Herramienta gratis online con vista previa inmediata.'),
            "url": pageUrl,
            "applicationCategory": "DesignApplication",
            "operatingSystem": tx('Web Browser', 'Navegador Web'),
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
            "name": tx('How to Flip an Image', 'Como Voltear una Imagen'),
            "description": tx('Learn how to flip images horizontally, vertically, or both ways using our free online tool.', 'Aprende a voltear imagenes horizontal, vertical o en ambos sentidos con nuestra herramienta gratis.'),
            "step": [
              {
                "@type": "HowToStep",
                "name": tx('Upload Image', 'Subir Imagen'),
                "text": tx('Upload your image by clicking the upload area or dragging and dropping your file.', 'Sube tu imagen haciendo clic en el area de carga o arrastrando tu archivo.'),
                "url": `${pageUrl}#step1`
              },
              {
                "@type": "HowToStep",
                "name": tx('Select Flip Direction', 'Seleccionar Direccion de Volteo'),
                "text": tx('Choose to flip horizontally (mirror), vertically (upside down), or both ways.', 'Elige voltear horizontalmente (espejo), verticalmente (de arriba abajo) o ambos sentidos.'),
                "url": `${pageUrl}#step2`
              },
              {
                "@type": "HowToStep",
                "name": tx('Apply Flip', 'Aplicar Volteo'),
                "text": tx('Click the Flip Image button to apply the transformation with instant preview.', 'Haz clic en Voltear Imagen para aplicar la transformacion con vista previa inmediata.'),
                "url": `${pageUrl}#step3`
              },
              {
                "@type": "HowToStep",
                "name": tx('Download Result', 'Descargar Resultado'),
                "text": tx('Download your flipped image in PNG format with preserved quality.', 'Descarga tu imagen volteada en formato PNG con calidad preservada.'),
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
                "name": tx('What is the difference between horizontal and vertical flip?', 'Cual es la diferencia entre volteo horizontal y vertical?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx('Horizontal flip (mirror) creates a left-right reflection of your image, like looking in a mirror. Vertical flip turns your image upside down. Both flip applies both transformations.', 'El volteo horizontal (espejo) crea un reflejo izquierda-derecha. El volteo vertical pone la imagen de arriba abajo. Ambos aplica ambas transformaciones.')
                }
              },
              {
                "@type": "Question",
                "name": tx('Does flipping reduce image quality?', 'Voltear reduce la calidad de imagen?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx('No, flipping is a lossless transformation that doesn\'t reduce image quality. Your flipped image maintains the same resolution and clarity as the original.', 'No, voltear es una transformacion sin perdida que no reduce calidad. Tu imagen volteada mantiene la misma resolucion y claridad que la original.')
                }
              },
              {
                "@type": "Question",
                "name": tx('What image formats can I flip?', 'Que formatos de imagen puedo voltear?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx('You can flip JPG, PNG, WebP, GIF, and other common image formats. The output is saved as PNG to preserve quality.', 'Puedes voltear JPG, PNG, WebP, GIF y otros formatos comunes. La salida se guarda como PNG para preservar calidad.')
                }
              },
              {
                "@type": "Question",
                "name": tx('Is this tool free to use?', 'Esta herramienta es gratis?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx('Yes, completely free! No registration, no watermarks, and no hidden fees. Flip as many images as you need.', 'Si, totalmente gratis. Sin registro, sin marcas de agua y sin costos ocultos. Voltea todas las imagenes que necesites.')
                }
              },
              {
                "@type": "Question",
                "name": tx('Is my image data secure?', 'Mis datos de imagen son seguros?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx('Absolutely! All processing happens locally in your browser. Your images are never uploaded to any server, ensuring complete privacy and security.', 'Si. Todo el procesamiento ocurre localmente en tu navegador. Tus imagenes nunca se suben a servidores, asegurando privacidad y seguridad total.')
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
            "name": tx('Flip Image', 'Voltear Imagen'),
            "url": pageUrl,
            "applicationCategory": "DesignApplication",
            "operatingSystem": tx('Web Browser', 'Navegador Web'),
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
                <span itemProp="name" className="text-gray-900 font-medium">{tx('Flip Image', 'Voltear Imagen')}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <FlipHorizontal className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {tx('Flip Image', 'Voltear Imagen')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {tx('Flip your images horizontally, vertically, or both. Fast, secure, and works entirely in your browser.', 'Voltea tus imagenes horizontal, vertical o en ambos sentidos. Rapido, seguro y funciona totalmente en tu navegador.')}
            </p>
          </header>

          {/* Main Tool Area */}
          <main>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Upload/Preview Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Upload className="w-6 h-6 text-blue-600" />
                  {tx('Upload Your Image', 'Sube tu Imagen')}
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
                        {tx('Supports all major image formats', 'Admite todos los formatos principales de imagen')}
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
                      {/* Dimension preview overlay */}
                      <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                        {imageState.originalWidth} × {imageState.originalHeight}
                      </div>
                    </div>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium"
                    >
                      {tx('Choose Different Image', 'Elegir Otra Imagen')}
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
                  <FlipHorizontal className="w-6 h-6 text-blue-600" />
                  {tx('Flip Settings', 'Configuracion de Volteo')}
                </h2>

                {imageState.originalUrl ? (
                  <div className="space-y-6">
                    {/* Flip Direction Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        {tx('Flip Direction', 'Direccion de Volteo')}
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        <button
                          onClick={() => setFlipMode('horizontal')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                            flipMode === 'horizontal'
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <FlipHorizontal className="w-5 h-5" />
                          {tx('Horizontal', 'Horizontal')}
                        </button>
                        <button
                          onClick={() => setFlipMode('vertical')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                            flipMode === 'vertical'
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <FlipVertical className="w-5 h-5" />
                          {tx('Vertical', 'Vertical')}
                        </button>
                        <button
                          onClick={() => setFlipMode('both')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                            flipMode === 'both'
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <RotateCw className="w-5 h-5" />
                          {tx('Both', 'Ambos')}
                        </button>
                      </div>
                    </div>

                    {/* Current Flip Mode */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                      <h3 className="text-sm font-semibold text-gray-700 mb-4">{tx('Current Mode', 'Modo Actual')}</h3>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600 capitalize">{flipMode === 'horizontal' ? tx('Horizontal', 'Horizontal') : flipMode === 'vertical' ? tx('Vertical', 'Vertical') : tx('Both', 'Ambos')}</p>
                        <p className="text-xs text-gray-600 mt-2">
                          {flipMode === 'horizontal' && tx('Mirrors image left to right', 'Refleja la imagen de izquierda a derecha')}
                          {flipMode === 'vertical' && tx('Mirrors image top to bottom', 'Refleja la imagen de arriba hacia abajo')}
                          {flipMode === 'both' && tx('Mirrors image both ways', 'Refleja la imagen en ambos sentidos')}
                        </p>
                      </div>
                    </div>

                    {/* Output Formats */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        {tx('Download Formats', 'Formatos de Descarga')}
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
                      <p className="text-xs text-gray-500 mt-2">{tx('Single format = single file, multiple formats = ZIP download', 'Un formato = un archivo, varios formatos = descarga ZIP')}</p>
                    </div>

                    {/* Info Box */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <FlipHorizontal className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-blue-900 font-medium mb-1">
                            {tx('How to Flip', 'Como Voltear')}
                          </p>
                          <p className="text-xs text-blue-700">
                            {tx('Select a flip direction above, then click "Flip Image" to apply. You can reset anytime.', 'Selecciona una direccion de volteo arriba y haz clic en "Voltear Imagen" para aplicar. Puedes reiniciar en cualquier momento.')}
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
                        {processing ? tx('Processing...', 'Procesando...') : tx('Flip Image', 'Voltear Imagen')}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <FlipHorizontal className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Ready to Flip', 'Listo para Voltear')}</h3>
                      <p className="text-gray-600 max-w-sm mx-auto">
                        {tx('Upload an image to start flipping', 'Sube una imagen para empezar a voltear')}
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
                  {tx('Preview & Download', 'Vista Previa y Descarga')}
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">{tx('Original Image', 'Imagen Original')}</h3>
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
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">{tx('Flipped Image', 'Imagen Volteada')}</h3>
                    <div className="relative rounded-xl overflow-hidden bg-gray-100 mb-4">
                      <img
                        src={imageState.processedUrl}
                        alt={tx('Flipped', 'Volteada')}
                        className="w-full h-auto"
                      />
                      <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg capitalize">
                        {flipMode === 'horizontal' ? tx('Horizontal Flip', 'Volteo Horizontal') : flipMode === 'vertical' ? tx('Vertical Flip', 'Volteo Vertical') : tx('Both Directions', 'Ambas Direcciones')}
                      </div>
                    </div>
                    <button
                      onClick={downloadImage}
                      disabled={outputVariants.length === 0 || processing}
                      className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all font-bold shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Download className="w-5 h-5" />
                      {outputVariants.length > 1 ? tx('Download Flipped Images (ZIP)', 'Descargar Imagenes Volteadas (ZIP)') : tx('Download Flipped Image', 'Descargar Imagen Volteada')}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About Flip Image Tool', 'Sobre la Herramienta de Volteo')}</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {tx('Our free online image flip tool allows you to flip images horizontally, vertically, or both with just one click. Perfect for creating mirror effects, correcting photo orientation, or adding creative effects to your images.', 'Nuestra herramienta gratis online te permite voltear imagenes horizontal, vertical o en ambos sentidos con un clic. Ideal para crear efecto espejo, corregir orientacion o agregar efectos creativos.')}
                </p>
                <p>
                  {tx('Choose from three flip modes: horizontal (mirror left to right), vertical (mirror top to bottom), or both ways. All processing happens instantly in your browser, ensuring your images remain private and secure. No registration required, completely free to use.', 'Elige entre tres modos: horizontal (espejo izquierda-derecha), vertical (espejo arriba-abajo) o ambos sentidos. Todo el procesamiento ocurre al instante en tu navegador, manteniendo tus imagenes privadas y seguras. Sin registro y totalmente gratis.')}
                </p>
              </div>
            </section>

            {/* Features Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto" aria-labelledby="features-heading">
              <h2 id="features-heading" className="sr-only">{tx('Key Features', 'Funciones Clave')}</h2>
              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Lightning Fast', 'Super Rapido')}</h3>
                <p className="text-gray-600">
                  {tx('Flip images instantly in your browser. No uploads, no waiting.', 'Voltea imagenes al instante en tu navegador. Sin esperas.')}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FlipHorizontal className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Quick Flipping', 'Volteo Rapido')}</h3>
                <p className="text-gray-600">
                  {tx('Flip your images horizontally or vertically with a single click.', 'Voltea tus imagenes horizontal o verticalmente con un solo clic.')}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Instant Preview', 'Vista Previa Instantanea')}</h3>
                <p className="text-gray-600">
                  {tx('See your flipped image immediately before downloading.', 'Mira tu imagen volteada al instante antes de descargarla.')}
                </p>
              </div>
            </section>

            {/* How to Use Section */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-8 border border-blue-200 max-w-4xl mx-auto mb-12" aria-labelledby="howto-heading">
              <h2 id="howto-heading" className="text-2xl font-bold text-gray-900 mb-8 text-center">{tx('How to Flip an Image', 'Como Voltear una Imagen')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{tx('Upload Your Image', 'Sube tu Imagen')}</h3>
                      <p className="text-gray-600 text-sm">{tx('Click the upload area or drag and drop your image file. Supports JPG, PNG, WebP, and other formats.', 'Haz clic en el area de carga o arrastra tu archivo. Soporta JPG, PNG, WebP y otros formatos.')}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{tx('Select Flip Direction', 'Selecciona Direccion de Volteo')}</h3>
                      <p className="text-gray-600 text-sm">{tx('Choose horizontal, vertical, or both directions based on your need.', 'Elige horizontal, vertical o ambas direcciones segun tu necesidad.')}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{tx('Apply Flip', 'Aplica el Volteo')}</h3>
                      <p className="text-gray-600 text-sm">{tx('Click "Flip Image" to apply the transformation with instant preview.', 'Haz clic en "Voltear Imagen" para aplicar la transformacion con vista previa inmediata.')}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{tx('Download Result', 'Descarga el Resultado')}</h3>
                      <p className="text-gray-600 text-sm">{tx('Preview the flipped image and download it instantly to your device.', 'Previsualiza la imagen volteada y descargala al instante en tu dispositivo.')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-sm text-blue-800">
                  <strong>{tx('Pro Tip:', 'Consejo Pro:')}</strong> {tx('Use horizontal flip for mirror effects, vertical flip for upside-down correction, and both for complete inversion.', 'Usa volteo horizontal para efecto espejo, vertical para invertir arriba-abajo y ambos para inversion completa.')}
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-4xl mx-auto" aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="text-2xl font-bold text-gray-900 mb-6 text-center">{tx('Frequently Asked Questions', 'Preguntas Frecuentes')}</h2>
              <div className="space-y-4">
                {/* FAQ 1 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(0)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>{tx('What is the difference between horizontal and vertical flip?', 'Cual es la diferencia entre volteo horizontal y vertical?')}</span>
                    <svg className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 0 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaqIndex === 0 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('Horizontal flip creates a left-right mirror effect, while vertical flip turns the image upside down. Both applies both transformations at once.', 'El volteo horizontal crea un efecto espejo izquierda-derecha, mientras que el vertical pone la imagen de arriba abajo. Ambos aplica ambas transformaciones.')}</p>
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(1)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>{tx('Does flipping reduce image quality?', 'Voltear reduce la calidad de imagen?')}</span>
                    <svg className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 1 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaqIndex === 1 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('No. Flipping is a lossless transformation, so your image keeps the same resolution and clarity as the original.', 'No. Voltear es una transformacion sin perdida, por lo que tu imagen mantiene la misma resolucion y claridad.')}</p>
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(2)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>{tx('What image formats can I flip?', 'Que formatos de imagen puedo voltear?')}</span>
                    <svg className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 2 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaqIndex === 2 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('You can flip JPG, PNG, WebP, GIF, and other common image formats.', 'Puedes voltear JPG, PNG, WebP, GIF y otros formatos comunes de imagen.')}</p>
                    </div>
                  )}
                </div>

                {/* FAQ 4 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(3)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>{tx('Is this tool free to use?', 'Esta herramienta es gratis?')}</span>
                    <svg className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 3 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaqIndex === 3 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('Yes, completely free. No registration, no watermark, and no hidden fees.', 'Si, totalmente gratis. Sin registro, sin marca de agua y sin costos ocultos.')}</p>
                    </div>
                  )}
                </div>

                {/* FAQ 5 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(4)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>{tx('Is my image data secure?', 'Mis datos de imagen son seguros?')}</span>
                    <svg className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 4 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaqIndex === 4 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('Absolutely. All processing happens locally in your browser and your images are never uploaded to servers.', 'Si. Todo el procesamiento ocurre localmente en tu navegador y tus imagenes nunca se suben a servidores.')}</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </main>
        </div>
      </article>
    </>
  );
}
