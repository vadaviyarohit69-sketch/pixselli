"use client";

import { useLanguage } from '@/components/LanguageProvider';
import { getLocaleBasePath } from '@/lib/i18n';
import { IMAGE_RESIZER_TEXT_BY_LOCALE } from '@/lib/imageResizerTranslations';
import { COMPRESS_TO_KB_TEXT_BY_LOCALE } from '@/lib/compressToKbTranslations';
import { normalizeFileToken } from '@/lib/unifiedOutputProcessor';
import { useState, useRef, useCallback } from 'react';
import { AlertCircle, Upload, Download, RotateCcw, Image as ImageIcon, ChevronDown, Shield, Target } from 'lucide-react';
import JSZip from 'jszip';

interface ImageState {
  originalFile: File | null;
  originalUrl: string;
  processedUrl: string;
  originalSize: number;
  compressedSize: number;
  originalWidth: number;
  originalHeight: number;
}

type OutputFormat = 'image/jpeg' | 'image/webp';

interface OutputVariant {
  format: OutputFormat;
  label: 'JPG' | 'WebP';
  extension: 'jpg' | 'webp';
  size: number;
  blob: Blob;
  url: string;
}

const TOLERANCE_BYTES = 200; // +/- 200 bytes tolerance

function normalizeDownloadName(fileName: string) {
  const dotIndex = fileName.lastIndexOf('.');
  if (dotIndex <= 0) return normalizeFileToken(fileName);
  const baseName = fileName.slice(0, dotIndex);
  const extension = fileName.slice(dotIndex + 1).toLowerCase();
  return `${normalizeFileToken(baseName)}.${extension}`;
}

type CompressToKbToolPageProps = {
  targetSizeKB: number;
};

export default function CompressToKbToolPage({ targetSizeKB }: CompressToKbToolPageProps) {
  const { locale } = useLanguage();
  const tx = useCallback(
    (en: string, es: string) => {
      if (locale === 'es') {
        return es;
      }

      const normalizedKey = en.replaceAll(`${targetSizeKB}`, '{size}');
      const translated =
        COMPRESS_TO_KB_TEXT_BY_LOCALE[locale]?.[normalizedKey] ||
        COMPRESS_TO_KB_TEXT_BY_LOCALE[locale]?.[en] ||
        IMAGE_RESIZER_TEXT_BY_LOCALE[locale]?.[en] ||
        en;

      return translated.replaceAll('{size}', `${targetSizeKB}`);
    },
    [locale, targetSizeKB]
  );

  const basePath = `/compress-${targetSizeKB}kb`;
  const localeBasePath = getLocaleBasePath(locale);
  const pagePath = localeBasePath ? `${localeBasePath}${basePath}` : basePath;
  const pageUrl = `https://pixselli.com${pagePath}`;
  const homePath = localeBasePath || '/';

  const targetSizeBytes = targetSizeKB * 1024;

  const [imageState, setImageState] = useState<ImageState>({
    originalFile: null,
    originalUrl: '',
    processedUrl: '',
    originalSize: 0,
    compressedSize: 0,
    originalWidth: 0,
    originalHeight: 0,
  });

  const [processing, setProcessing] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedOutputFormats, setSelectedOutputFormats] = useState<OutputFormat[]>(['image/jpeg', 'image/webp']);
  const [outputVariants, setOutputVariants] = useState<OutputVariant[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const formatFileSize = (bytes: number): string => {
    return (bytes / 1024).toFixed(2) + ' KB';
  };

  const getFormatMeta = (format: OutputFormat) => {
    if (format === 'image/webp') {
      return { label: 'WebP' as const, extension: 'webp' as const };
    }

    return { label: 'JPG' as const, extension: 'jpg' as const };
  };

  const processImageToTargetSize = useCallback(async (
    img: HTMLImageElement,
    file: File,
    formats: OutputFormat[] = selectedOutputFormats
  ) => {
    setProcessing(true);

    try {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const effectiveFormats: OutputFormat[] = formats.length > 0 ? formats : ['image/jpeg'];

      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);

      const nextVariants: OutputVariant[] = [];

      for (const format of effectiveFormats) {
        let quality = 0.9;
        let blob: Blob | null = null;
        let attempts = 0;
        const maxAttempts = 20;

        while (attempts < maxAttempts) {
          blob = await new Promise<Blob | null>((resolve) => {
            canvas.toBlob((b) => resolve(b), format, quality);
          });

          if (!blob) break;

          const diff = blob.size - targetSizeBytes;

          if (Math.abs(diff) <= TOLERANCE_BYTES) {
            break;
          }

          if (diff > 0) {
            quality -= 0.05;
          } else {
            quality += 0.02;
          }

          quality = Math.max(0.1, Math.min(1.0, quality));
          attempts++;
        }

        if (blob) {
          const meta = getFormatMeta(format);
          nextVariants.push({
            format,
            label: meta.label,
            extension: meta.extension,
            size: blob.size,
            blob,
            url: URL.createObjectURL(blob),
          });
        }
      }

      setOutputVariants((prev) => {
        prev.forEach((variant) => URL.revokeObjectURL(variant.url));
        return nextVariants;
      });

      if (nextVariants.length > 0) {
        setImageState((prev) => ({
          ...prev,
          processedUrl: nextVariants[0].url,
          compressedSize: nextVariants[0].size,
        }));
      } else {
        setImageState((prev) => ({
          ...prev,
          processedUrl: '',
          compressedSize: 0,
        }));
      }

      setProcessing(false);
    } catch (error) {
      console.error('Error processing image:', error);
      setProcessing(false);
    }
  }, [selectedOutputFormats, targetSizeBytes]);

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
      setImageState({
        originalFile: file,
        originalUrl: url,
        processedUrl: '',
        originalSize: file.size,
        compressedSize: 0,
        originalWidth: img.width,
        originalHeight: img.height,
      });
      setOutputVariants((prev) => {
        prev.forEach((variant) => URL.revokeObjectURL(variant.url));
        return [];
      });

      processImageToTargetSize(img, file, selectedOutputFormats);
    };

    img.src = url;
  }, [processImageToTargetSize, selectedOutputFormats, tx]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const input = fileInputRef.current;
      if (input) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        input.files = dataTransfer.files;
        handleFileSelect({ target: input } as React.ChangeEvent<HTMLInputElement>);
      }
    }
  }, [handleFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const downloadImage = async () => {
    if (outputVariants.length === 0) return;

    if (outputVariants.length === 1) {
      const single = outputVariants[0];
      const link = document.createElement('a');
      link.href = single.url;
      link.download = normalizeDownloadName(`compressed_${targetSizeKB}kb.${single.extension}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    const zip = new JSZip();
    outputVariants.forEach((variant) => {
      zip.file(`compressed_${targetSizeKB}kb_${variant.label.toLowerCase()}.${variant.extension}`, variant.blob);
    });

    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const zipUrl = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = zipUrl;
    link.download = normalizeDownloadName(`compressed_${targetSizeKB}kb_outputs.zip`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(zipUrl);
  };

  const handleOutputFormatToggle = (format: OutputFormat) => {
    const isSelected = selectedOutputFormats.includes(format);
    const nextFormats = isSelected
      ? selectedOutputFormats.filter((f) => f !== format)
      : [...selectedOutputFormats, format];

    if (nextFormats.length === 0) return;

    setSelectedOutputFormats(nextFormats);
    setImageState((prev) => ({
      ...prev,
      processedUrl: '',
      compressedSize: 0,
    }));

    if (!imageState.originalUrl || !imageState.originalFile) return;

    const img = new Image();
    img.onload = () => {
      processImageToTargetSize(img, imageState.originalFile!, nextFormats);
    };
    img.src = imageState.originalUrl;
  };

  const resetAll = () => {
    setOutputVariants((prev) => {
      prev.forEach((variant) => URL.revokeObjectURL(variant.url));
      return [];
    });

    setImageState({
      originalFile: null,
      originalUrl: '',
      processedUrl: '',
      originalSize: 0,
      compressedSize: 0,
      originalWidth: 0,
      originalHeight: 0,
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const isTargetAchieved = () => {
    if (!imageState.compressedSize) return false;
    return Math.abs(imageState.compressedSize - targetSizeBytes) <= TOLERANCE_BYTES;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: tx(
              `Compress Image to ${targetSizeKB}KB - Free Online Tool`,
              `Comprimir imagen a ${targetSizeKB}KB - Herramienta online gratis`
            ),
            description: tx(
              `Free online tool to compress images to exactly ${targetSizeKB}KB. Perfect for file size requirements, email attachments, and web optimization.`,
              `Herramienta online gratis para comprimir imagenes a ${targetSizeKB}KB exactos. Ideal para requisitos de tamano, adjuntos de correo y optimizacion web.`
            ),
            url: pageUrl,
            inLanguage: locale,
            applicationCategory: 'MultimediaApplication',
            operatingSystem: 'Any',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          }),
        }}
      />

      <article>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
          <main className="max-w-7xl mx-auto">
            <nav aria-label={tx('Breadcrumb', 'Miga de pan')} className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-gray-600" itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <a href={homePath} itemProp="item" className="hover:text-purple-600 transition-colors">
                    <span itemProp="name">{tx('Home', 'Inicio')}</span>
                  </a>
                  <meta itemProp="position" content="1" />
                </li>
                <li className="text-gray-400">/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span itemProp="name" className="text-gray-900 font-medium">
                    {tx(`Compress to ${targetSizeKB}KB`, `Comprimir a ${targetSizeKB}KB`)}
                  </span>
                  <meta itemProp="position" content="2" />
                </li>
              </ol>
            </nav>

            <header className="text-center mb-12">
              <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {tx(`Compress Image to ${targetSizeKB}KB`, `Comprimir imagen a ${targetSizeKB}KB`)}
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {tx(
                  `Compress images to exactly ${targetSizeKB}KB file size. Perfect for file size requirements, email attachments, and web optimization. Fast, secure, and works entirely in your browser.`,
                  `Comprime imagenes a ${targetSizeKB}KB exactos. Ideal para requisitos de tamano, adjuntos de correo y optimizacion web. Rapido, seguro y funciona totalmente en tu navegador.`
                )}
              </p>
            </header>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {tx('Target Size', 'Tamano objetivo')}: {targetSizeKB}KB
                  </h3>
                  <p className="text-sm text-gray-700">
                    {tx(
                      `Our smart compression algorithm will automatically compress your image to exactly ${targetSizeKB}KB (+/-200 bytes). The tool adjusts quality iteratively to hit the precise target size while maintaining visual quality.`,
                      `Nuestro algoritmo de compresion comprimira tu imagen automaticamente a ${targetSizeKB}KB exactos (+/-200 bytes). Ajusta la calidad de forma iterativa para alcanzar el tamano objetivo manteniendo buena calidad visual.`
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 mb-12 max-w-4xl mx-auto">
              {!imageState.originalUrl ? (
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  className="relative border-2 border-dashed border-gray-300 rounded-xl p-16 text-center hover:border-purple-400 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 bg-gradient-to-br from-gray-50 to-gray-100 transition-all cursor-pointer group"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="absolute top-4 left-4 w-20 h-20 bg-purple-100 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" style={{ pointerEvents: 'none' }} />
                  <div className="absolute bottom-4 right-4 w-24 h-24 bg-pink-100 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" style={{ pointerEvents: 'none' }} />

                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                      <Upload className="w-9 h-9 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-gray-800 mb-3">
                      {tx(`Upload Image to Compress to ${targetSizeKB}KB`, `Sube imagen para comprimir a ${targetSizeKB}KB`)}
                    </p>
                    <p className="text-base text-gray-600 mb-6">{tx('Drag & drop or click to browse', 'Arrastra y suelta o haz clic para buscar')}</p>
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
                      <div className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                        <ImageIcon className="w-4 h-4 text-blue-500" />
                        <span className="text-xs sm:text-sm font-medium text-gray-600">JPG</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                        <ImageIcon className="w-4 h-4 text-purple-500" />
                        <span className="text-xs sm:text-sm font-medium text-gray-600">PNG</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                        <ImageIcon className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs sm:text-sm font-medium text-gray-600">WebP</span>
                      </div>
                    </div>
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
                <div className="space-y-6">
                  <div className="relative rounded-xl overflow-hidden bg-gray-100 border-2 border-purple-300">
                    {imageState.processedUrl ? (
                      <img
                        src={imageState.processedUrl}
                        alt={tx('Compressed image', 'Imagen comprimida')}
                        className="w-full h-auto"
                        style={{ maxHeight: '400px', objectFit: 'contain' }}
                      />
                    ) : (
                      <div className="flex items-center justify-center h-64">
                        <p className="text-gray-400">{tx('Processing...', 'Procesando...')}</p>
                      </div>
                    )}
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <p className="text-sm font-bold text-gray-900 mb-3">{tx('Output Formats', 'Formatos de salida')}</p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => handleOutputFormatToggle('image/jpeg')}
                        className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-colors ${selectedOutputFormats.includes('image/jpeg') ? 'bg-purple-600 border-purple-600 text-white' : 'bg-white border-gray-300 text-gray-700 hover:border-purple-400'}`}
                      >
                        JPG
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOutputFormatToggle('image/webp')}
                        className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-colors ${selectedOutputFormats.includes('image/webp') ? 'bg-purple-600 border-purple-600 text-white' : 'bg-white border-gray-300 text-gray-700 hover:border-purple-400'}`}
                      >
                        WebP
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      {tx(
                        'One format selected = single download. Multiple selected = ZIP download.',
                        'Un formato seleccionado = descarga unica. Multiples formatos = descarga ZIP.'
                      )}
                    </p>
                  </div>

                  {imageState.compressedSize > 0 && (
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200 text-center">
                        <p className="text-xs text-blue-600 font-medium mb-1">{tx('Original', 'Original')}</p>
                        <p className="text-lg font-bold text-blue-900">{formatFileSize(imageState.originalSize)}</p>
                      </div>
                      <div className={`bg-gradient-to-br ${isTargetAchieved() ? 'from-green-50 to-green-100 border-green-200' : 'from-purple-50 to-purple-100 border-purple-200'} rounded-lg p-4 border text-center`}>
                        <p className={`text-xs font-medium mb-1 ${isTargetAchieved() ? 'text-green-600' : 'text-purple-600'}`}>{tx('Compressed', 'Comprimido')}</p>
                        <p className={`text-lg font-bold ${isTargetAchieved() ? 'text-green-900' : 'text-purple-900'}`}>{formatFileSize(imageState.compressedSize)}</p>
                      </div>
                      <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-4 border border-amber-200 text-center">
                        <p className="text-xs text-amber-600 font-medium mb-1">{tx('Target', 'Objetivo')}</p>
                        <p className="text-lg font-bold text-amber-900">{targetSizeKB} KB</p>
                      </div>
                    </div>
                  )}

                  {outputVariants.length > 0 && (
                    <div className="bg-white border border-gray-200 rounded-xl p-4">
                      <p className="text-sm font-bold text-gray-900 mb-2">{tx('Generated Outputs', 'Salidas generadas')}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {outputVariants.map((variant) => (
                          <div key={variant.format} className="px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-800">{variant.label}</span>
                            <span className="text-sm text-gray-600">{formatFileSize(variant.size)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {imageState.compressedSize > 0 && (
                    <div className={`${isTargetAchieved() ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'} border rounded-lg p-4`}>
                      <div className="flex items-start gap-3">
                        <AlertCircle className={`w-5 h-5 ${isTargetAchieved() ? 'text-green-600' : 'text-amber-600'} flex-shrink-0 mt-0.5`} />
                        <div>
                          <p className={`text-sm font-medium mb-1 ${isTargetAchieved() ? 'text-green-900' : 'text-amber-900'}`}>
                            {isTargetAchieved() ? tx('Target Achieved!', 'Objetivo alcanzado!') : tx('Close to Target', 'Cerca del objetivo')}
                          </p>
                          <p className={`text-xs ${isTargetAchieved() ? 'text-green-700' : 'text-amber-700'}`}>
                            {isTargetAchieved()
                              ? tx(
                                'Successfully compressed to {current} (within +/-200 bytes of {size}KB target).',
                                'Comprimido correctamente a {current} (dentro de +/-200 bytes del objetivo de {size}KB).'
                              )
                                .replaceAll('{current}', formatFileSize(imageState.compressedSize))
                              : tx(
                                'Compressed to {current}. Very close to {size}KB target.',
                                'Comprimido a {current}. Muy cerca del objetivo de {size}KB.'
                              )
                                .replaceAll('{current}', formatFileSize(imageState.compressedSize))}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <button
                      onClick={resetAll}
                      className="flex-1 py-4 px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors font-bold flex items-center justify-center gap-2"
                    >
                      <RotateCcw className="w-5 h-5" />
                      {tx('Upload New Image', 'Subir nueva imagen')}
                    </button>
                    <button
                      onClick={downloadImage}
                      disabled={outputVariants.length === 0 || processing}
                      className="flex-1 py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl transition-all font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      {outputVariants.length > 1
                        ? tx(`Download ${targetSizeKB}KB Outputs (ZIP)`, `Descargar salidas de ${targetSizeKB}KB (ZIP)`)
                        : tx(`Download ${targetSizeKB}KB Image`, `Descargar imagen de ${targetSizeKB}KB`)}
                    </button>
                  </div>
                </div>
              )}
            </div>

            <section className="bg-white rounded-xl shadow-md p-8 border border-gray-200 mb-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {tx(`About Compress to ${targetSizeKB}KB Tool`, `Sobre la herramienta para comprimir a ${targetSizeKB}KB`)}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {tx(
                    `Our free online tool compresses images to exactly ${targetSizeKB}KB with precision. It is made for strict file-size limits where exact size matters.`,
                    `Nuestra herramienta online gratuita comprime imagenes a ${targetSizeKB}KB exactos con precision. Esta pensada para limites estrictos de tamano donde el valor exacto importa.`
                  )}
                </p>
                <p>
                  {tx(
                    `Many forms reject files that are even slightly larger. If the rule is under ${targetSizeKB}KB, this tool helps you hit that target reliably.`,
                    `Muchos formularios rechazan archivos aunque sean solo un poco mas grandes. Si la regla es menos de ${targetSizeKB}KB, esta herramienta te ayuda a alcanzar ese objetivo de forma confiable.`
                  )}
                </p>
                <p>
                  {tx(
                    `All processing stays inside your browser for speed and privacy. No registration and no server upload required.`,
                    `Todo el procesamiento se realiza en tu navegador para mayor velocidad y privacidad. Sin registro y sin subir archivos al servidor.`
                  )}
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-md p-8 border border-purple-100 mb-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {tx(`Common Uses for ${targetSizeKB}KB Images`, `Usos comunes de imagenes de ${targetSizeKB}KB`)}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-xl">📝</span> {tx('Government Forms', 'Formularios gubernamentales')}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {tx(
                      'Many official portals require small photos to reduce upload size and speed up processing.',
                      'Muchos portales oficiales requieren fotos pequenas para reducir peso de carga y acelerar el procesamiento.'
                    )}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-xl">🎓</span> {tx('University Admissions', 'Admisiones universitarias')}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {tx(
                      'Education applications often ask for strict photo size limits in online forms.',
                      'Las solicitudes educativas suelen pedir limites estrictos de tamano de foto en formularios online.'
                    )}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-xl">💼</span> {tx('Job Applications', 'Solicitudes de empleo')}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {tx(
                      'Recruitment systems frequently require passport-style photos under fixed size caps.',
                      'Los sistemas de reclutamiento piden con frecuencia fotos tipo pasaporte bajo limites de tamano fijos.'
                    )}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-xl">✉️</span> {tx('Email Signatures', 'Firmas de correo')}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {tx(
                      'Tiny images load quickly in professional signatures and keep messages lightweight.',
                      'Las imagenes pequenas cargan rapido en firmas profesionales y mantienen los correos ligeros.'
                    )}
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-md p-8 border border-gray-200 mb-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {tx(`Tips for Best ${targetSizeKB}KB Compression Results`, `Consejos para mejores resultados al comprimir a ${targetSizeKB}KB`)}
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{tx('Start with a Well-Lit Photo', 'Empieza con una foto bien iluminada')}</h3>
                    <p className="text-sm text-gray-600">
                      {tx(
                        'Good lighting reduces noise, which helps preserve visual quality at small file sizes.',
                        'Una buena iluminacion reduce el ruido y ayuda a conservar mejor calidad visual en tamanos pequenos.'
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{tx('Crop Before Compressing', 'Recorta antes de comprimir')}</h3>
                    <p className="text-sm text-gray-600">
                      {tx(
                        `Remove unnecessary background so more quality budget stays on the main subject at ${targetSizeKB}KB.`,
                        `Elimina fondo innecesario para conservar mas calidad en el sujeto principal a ${targetSizeKB}KB.`
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{tx('Use Appropriate Dimensions', 'Usa dimensiones adecuadas')}</h3>
                    <p className="text-sm text-gray-600">
                      {tx(
                        'If a portal requires specific width/height, resize first for better final results.',
                        'Si un portal exige ancho/alto especifico, redimensiona primero para mejores resultados finales.'
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{tx('Prefer Simple Backgrounds', 'Prefiere fondos simples')}</h3>
                    <p className="text-sm text-gray-600">
                      {tx(
                        'Plain backgrounds compress more efficiently than highly detailed scenes.',
                        'Los fondos lisos se comprimen mejor que escenas con mucho detalle.'
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tx(`Exact ${targetSizeKB}KB`, `${targetSizeKB}KB exactos`)}</h3>
                <p className="text-gray-600">{tx(`Precise compression to hit ${targetSizeKB}KB target size.`, `Compresion precisa para alcanzar ${targetSizeKB}KB.`)}</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-pink-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ImageIcon className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Smart Algorithm', 'Algoritmo inteligente')}</h3>
                <p className="text-gray-600">{tx('Iterative compression maintains quality.', 'La compresion iterativa mantiene la calidad.')}</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-indigo-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('100% Secure', '100% Seguro')}</h3>
                <p className="text-gray-600">{tx('All processing happens in your browser.', 'Todo el procesamiento ocurre en tu navegador.')}</p>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-md p-8 border border-gray-200 mb-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {tx(`How to Compress Image to ${targetSizeKB}KB`, `Como comprimir imagen a ${targetSizeKB}KB`)}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Upload Your Image', 'Sube tu imagen')}</h3>
                    <p className="text-gray-600">{tx('Click the upload box or drag and drop your image file (JPG, PNG).', 'Haz clic en la caja de carga o arrastra tu imagen (JPG, PNG).')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Auto Processing', 'Procesamiento automatico')}</h3>
                    <p className="text-gray-600">{tx(`Our algorithm automatically compresses to exactly ${targetSizeKB}KB.`, `Nuestro algoritmo comprime automaticamente a ${targetSizeKB}KB exactos.`)}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Verify Target Size', 'Verifica el tamano objetivo')}</h3>
                    <p className="text-gray-600">{tx(`Check the stats to see the compressed size hits ${targetSizeKB}KB target.`, `Revisa las estadisticas para confirmar que el comprimido alcanza ${targetSizeKB}KB.`)}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{tx(`Download ${targetSizeKB}KB Image`, `Descarga la imagen de ${targetSizeKB}KB`)}</h3>
                    <p className="text-gray-600">{tx(`Click download to save your compressed ${targetSizeKB}KB image file.`, `Haz clic en descargar para guardar tu imagen comprimida de ${targetSizeKB}KB.`)}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <p className="text-sm text-purple-800">
                  <strong>{tx('Pro Tip:', 'Consejo pro:')}</strong>{' '}
                  {tx(
                    `For applications with strict ${targetSizeKB}KB file size requirements, this tool ensures exact targeting. For quality-based compression, use our Image Compressor tool.`,
                    `Para aplicaciones con requisito estricto de ${targetSizeKB}KB, esta herramienta apunta al tamano exacto. Para compresion basada en calidad, usa nuestro compresor de imagen general.`
                  )}
                </p>
              </div>
            </section>

            <section className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{tx('Frequently Asked Questions', 'Preguntas frecuentes')}</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(0)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                  >
                    <span>{tx(`How does exact ${targetSizeKB}KB compression work?`, `Como funciona la compresion exacta a ${targetSizeKB}KB?`)}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 0 ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaqIndex === 0 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx(`Our algorithm iteratively adjusts quality to reach ${targetSizeKB}KB with a +/-200 bytes tolerance.`, `Nuestro algoritmo ajusta la calidad de forma iterativa para alcanzar ${targetSizeKB}KB con tolerancia de +/-200 bytes.`)}</p>
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(1)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                  >
                    <span>{tx('Will my image quality be affected?', 'Se vera afectada la calidad de mi imagen?')}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 1 ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaqIndex === 1 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('Quality depends on your original image. The tool preserves as much detail as possible while meeting size limits.', 'La calidad depende de tu imagen original. La herramienta conserva el mayor detalle posible mientras cumple el limite de tamano.')}</p>
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(2)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                  >
                    <span>{tx(`What if my image cannot reach exactly ${targetSizeKB}KB?`, `Que pasa si mi imagen no puede llegar exactamente a ${targetSizeKB}KB?`)}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 2 ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaqIndex === 2 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx(`The tool aims for the closest possible result within +/-200 bytes of ${targetSizeKB}KB.`, `La herramienta busca el resultado mas cercano posible dentro de +/-200 bytes de ${targetSizeKB}KB.`)}</p>
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(3)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                  >
                    <span>{tx('Can I compress to other sizes?', 'Puedo comprimir a otros tamanos?')}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 3 ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaqIndex === 3 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('Yes. We provide multiple exact-size tools like 10KB, 20KB, 30KB and more.', 'Si. Ofrecemos varias herramientas de tamano exacto como 10KB, 20KB, 30KB y mas.')}</p>
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(4)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                  >
                    <span>{tx('Is my image secure and private?', 'Mi imagen es segura y privada?')}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 4 ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaqIndex === 4 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('Yes. Compression happens locally in your browser. Files are not uploaded to servers.', 'Si. La compresion ocurre localmente en tu navegador. Los archivos no se suben a servidores.')}</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </main>
        </div>

        <canvas ref={canvasRef} className="hidden" />
      </article>
    </>
  );
}
