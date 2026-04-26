"use client";

import { normalizeFileToken } from '@/lib/unifiedOutputProcessor';
import { useLanguage } from '@/components/LanguageProvider';
import { getLocaleBasePath } from '@/lib/i18n';
import { IMAGE_RESIZER_TEXT_BY_LOCALE } from '@/lib/imageResizerTranslations';
import { REDUCE_SIZE_TEXT_BY_LOCALE } from '@/lib/reduceSizeTranslations';
import { useState, useRef, useCallback } from 'react';
import { AlertCircle, Upload, Download, RotateCcw, RotateCw, Image as ImageIcon, Maximize2, Minimize2, Lock, Unlock, Info, ChevronDown, ChevronUp, Shield, Check, CheckCircle, CheckCircle2, Plus, X, FolderArchive, Crop, Move, ZoomIn, ZoomOut, RefreshCw, Gauge, Percent, Ruler, Train, Calendar, Droplet, Type, Contrast, Palette, Eye, Scan, Target, Mail, FileText, Globe, MessageCircle, FlipHorizontal, FlipVertical, Zap, Youtube, Monitor, Smartphone, Tv, Camera, User, PenTool } from "lucide-react";
import JSZip from 'jszip';

interface ImageState {
  originalFile: File | null;
  originalUrl: string;
  processedUrl: string;
  originalWidth: number;
  originalHeight: number;
  originalSize: number;
  compressedSize: number;
}

type OutputFormat = 'image/jpeg' | 'image/png' | 'image/webp';

interface OutputVariant {
  format: OutputFormat;
  label: 'JPG' | 'PNG' | 'WebP';
  extension: 'jpg' | 'png' | 'webp';
  blob: Blob;
  url: string;
  size: number;
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
        REDUCE_SIZE_TEXT_BY_LOCALE[locale]?.[en] ||
        IMAGE_RESIZER_TEXT_BY_LOCALE[locale]?.[en] ||
        en
      );
    },
    [locale]
  );
  const localeBasePath = getLocaleBasePath(locale);
  const pagePath = localeBasePath ? `${localeBasePath}/reduce-size` : '/reduce-size';
  const pageUrl = `https://pixselli.com${pagePath}`;
  const homePath = localeBasePath || '/';

  const getSizeReductionLabel = useCallback(
    (reduction: number) => {
      const suffixByLocale: Record<string, string> = {
        es: 'menos',
        pt: 'menor',
        fr: 'plus petit',
        de: 'kleiner',
        it: 'piu piccolo',
      };
      const suffix = suffixByLocale[locale] || 'smaller';
      return `${reduction}% ${suffix}`;
    },
    [locale]
  );

  const getCompressionSummaryText = useCallback(
    (reduction: number, qualityValue: number) => {
      const summaryByLocale: Record<string, string> = {
        es: `El tamano de tu imagen se redujo en ${reduction}% manteniendo ${qualityValue}% de calidad.`,
        pt: `O tamanho da sua imagem foi reduzido em ${reduction}% mantendo ${qualityValue}% de qualidade.`,
        fr: `La taille de votre image a ete reduite de ${reduction}% en conservant ${qualityValue}% de qualite.`,
        de: `Die Dateigroesse deines Bildes wurde um ${reduction}% reduziert und dabei ${qualityValue}% Qualitaet beibehalten.`,
        it: `La dimensione della tua immagine e stata ridotta del ${reduction}% mantenendo il ${qualityValue}% di qualita.`,
      };

      return (
        summaryByLocale[locale] ||
        `Your image file size has been reduced by ${reduction}% while maintaining ${qualityValue}% quality.`
      );
    },
    [locale]
  );

  const [imageState, setImageState] = useState<ImageState>({
    originalFile: null,
    originalUrl: '',
    processedUrl: '',
    originalWidth: 0,
    originalHeight: 0,
    originalSize: 0,
    compressedSize: 0,
  });
  
  const [quality, setQuality] = useState(80);
  const [selectedOutputFormats, setSelectedOutputFormats] = useState<OutputFormat[]>(['image/jpeg', 'image/png']);
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

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  const calculateReduction = (): number => {
    if (imageState.originalSize === 0 || imageState.compressedSize === 0) return 0;
    return Math.round(((imageState.originalSize - imageState.compressedSize) / imageState.originalSize) * 100);
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
        originalSize: file.size,
        compressedSize: 0,
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

  const processImage = useCallback(async (formats: OutputFormat[] = selectedOutputFormats) => {
    if (!imageState.originalUrl) return;

    setProcessing(true);

    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = imageState.originalUrl;
      });

      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Draw image
      ctx.drawImage(img, 0, 0);

      const effectiveFormats: OutputFormat[] = formats.length > 0 ? formats : ['image/jpeg'];
      const variants = await Promise.all(
        effectiveFormats.map(async (format) => {
          const blob = await new Promise<Blob | null>((resolve) => {
            if (format === 'image/png') {
              canvas.toBlob((b) => resolve(b), format);
            } else {
              canvas.toBlob((b) => resolve(b), format, quality / 100);
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
            size: blob.size,
          } as OutputVariant;
        })
      );

      const nextVariants = variants.filter((variant): variant is OutputVariant => Boolean(variant));

      setOutputVariants((prev) => {
        prev.forEach((variant) => URL.revokeObjectURL(variant.url));
        return nextVariants;
      });

      setImageState(prev => ({
        ...prev,
        processedUrl: nextVariants[0]?.url || '',
        compressedSize: nextVariants[0]?.size || 0,
      }));

      setProcessing(false);

    } catch (error) {
      console.error('Error processing image:', error);
      setProcessing(false);
    }
  }, [imageState.originalUrl, quality, selectedOutputFormats]);

  const handleOutputFormatToggle = useCallback((format: OutputFormat) => {
    const isSelected = selectedOutputFormats.includes(format);
    const nextFormats = isSelected
      ? selectedOutputFormats.filter((f) => f !== format)
      : [...selectedOutputFormats, format];

    if (nextFormats.length === 0) return;

    setSelectedOutputFormats(nextFormats);

    if (imageState.processedUrl) {
      processImage(nextFormats);
    }
  }, [imageState.processedUrl, processImage, selectedOutputFormats]);

  const downloadImage = async () => {
    if (outputVariants.length === 0) return;

    const baseName = `${imageState.originalFile?.name.split('.')[0] || 'image'}_compressed`;

    if (outputVariants.length === 1) {
      const single = outputVariants[0];
      const link = document.createElement('a');
      link.href = single.url;
      link.download = normalizeDownloadName(`${baseName}.${single.extension}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    const zip = new JSZip();
    outputVariants.forEach((variant) => {
      zip.file(`${baseName}.${variant.extension}`, variant.blob);
    });

    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const zipUrl = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = zipUrl;
    link.download = normalizeDownloadName(`${baseName}_formats.zip`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(zipUrl);
  };

  const resetToOriginal = () => {
    setOutputVariants((prev) => {
      prev.forEach((variant) => URL.revokeObjectURL(variant.url));
      return [];
    });
    setImageState(prev => ({ ...prev, processedUrl: '', compressedSize: 0 }));
    setQuality(80);
  };

  const getQualityLabel = (): string => {
    if (quality >= 90) return tx('Maximum Quality', 'Calidad maxima');
    if (quality >= 75) return tx('High Quality', 'Calidad alta');
    if (quality >= 60) return tx('Good Quality', 'Buena calidad');
    if (quality >= 40) return tx('Medium Quality', 'Calidad media');
    return tx('Low Quality', 'Calidad baja');
  };

  const getQualityColor = (): string => {
    if (quality >= 90) return 'text-emerald-600';
    if (quality >= 75) return 'text-blue-600';
    if (quality >= 60) return 'text-yellow-600';
    if (quality >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <>
      {/* SEO Structured Data - WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": tx('Reduce Size - Free Online Image Compression Tool', 'Reducir tamano - Herramienta online gratis de compresion'),
            "description": tx(
              'Free online tool to reduce image file size while maintaining quality. Compress JPG, PNG, WebP images with adjustable quality settings for optimal file size reduction.',
              'Herramienta online gratis para reducir el tamano de imagen manteniendo calidad. Comprime JPG, PNG y WebP con ajuste de calidad.'
            ),
            "url": pageUrl,
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              tx('Reduce image file size', 'Reducir tamano de imagen'),
              tx('Quality-preserving compression', 'Compresion con preservacion de calidad'),
              tx('Adjustable quality settings', 'Ajustes de calidad ajustables'),
              tx('Before/after comparison', 'Comparacion antes y despues'),
              tx('File size reduction statistics', 'Estadisticas de reduccion de tamano'),
              tx('Client-side processing', 'Procesamiento local')
            ]
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
            "name": tx('How to Reduce Image File Size', 'Como reducir el tamano de un archivo de imagen'),
            "description": tx(
              'Learn how to compress and reduce image file size while maintaining quality online for free',
              'Aprende a comprimir y reducir el tamano de imagen manteniendo calidad online gratis'
            ),
            "image": "https://pixselli.com/images/reduce-size-guide.jpg",
            "totalTime": "PT1M",
            "supply": [
              {
                "@type": "HowToSupply",
                "name": tx('Image File', 'Archivo de imagen')
              }
            ],
            "tool": [
              {
                "@type": "HowToTool",
                "name": tx('Pixselli Reduce Size Tool', 'Herramienta Pixselli para reducir tamano')
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": tx('Upload Image', 'Subir imagen'),
                "text": tx(
                  'Upload your image by dragging and dropping or clicking to browse. Supports JPG, PNG, and WebP formats',
                  'Sube tu imagen arrastrando y soltando o haciendo clic para explorar. Compatible con JPG, PNG y WebP'
                ),
                "url": `${pageUrl}#step1`
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": tx('Set Quality Level', 'Definir nivel de calidad'),
                "text": tx(
                  'Adjust the quality slider to balance between file size and image quality. Higher quality means larger file size',
                  'Ajusta el control de calidad para equilibrar tamano y calidad. Mayor calidad implica mayor tamano de archivo'
                ),
                "url": `${pageUrl}#step2`
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": tx('Compress Image', 'Comprimir imagen'),
                "text": tx(
                  "Click 'Compress Image' to reduce the file size with your selected quality settings",
                  "Haz clic en 'Comprimir imagen' para reducir el tamano con la calidad seleccionada"
                ),
                "url": `${pageUrl}#step3`
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": tx('Download Compressed', 'Descargar comprimida'),
                "text": tx(
                  'Preview the results and download your compressed image with reduced file size',
                  'Previsualiza el resultado y descarga tu imagen comprimida con menor tamano'
                ),
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
                "name": tx('How much can I reduce my image file size?', 'Cuanto puedo reducir el tamano de mi imagen?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'Depending on the quality setting, you can typically reduce image file size by 50-90%. Higher compression (lower quality) results in smaller file sizes but may reduce image quality.',
                    'Segun la calidad seleccionada, normalmente puedes reducir el tamano entre 50% y 90%. Mayor compresion reduce mas el tamano pero puede afectar la calidad.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('What quality setting should I use?', 'Que ajuste de calidad debo usar?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'For web use, 70-80% quality is recommended as it provides a good balance between file size and visual quality. For print or high-quality needs, use 85-95% quality.',
                    'Para web, se recomienda 70-80% porque ofrece buen equilibrio entre tamano y calidad visual. Para impresion o alta calidad, usa 85-95%.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('Will compressing reduce image quality?', 'Comprimir reducira la calidad de imagen?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'Yes, compression reduces file size by removing some image data. However, with quality settings above 70%, the difference is often imperceptible to the human eye.',
                    'Si, la compresion reduce tamano eliminando parte de los datos. Con calidad por encima de 70%, la diferencia suele ser casi imperceptible.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('What format is best for compression?', 'Que formato es mejor para comprimir?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'JPEG format is excellent for photos and complex images with compression. For images with transparency or graphics, PNG or WebP formats work better.',
                    'JPEG es excelente para fotos e imagenes complejas. Para imagenes con transparencia o graficos, PNG o WebP suelen funcionar mejor.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('Is my image secure when compressing?', 'Mi imagen esta segura al comprimir?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'Yes! All compression happens locally in your browser. Your images are never uploaded to any server, ensuring complete privacy and security.',
                    'Si. Toda la compresion ocurre localmente en tu navegador. Tus imagenes nunca se suben a ningun servidor.'
                  )
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
            "name": tx('Pixselli Reduce Size Tool', 'Herramienta Pixselli para reducir tamano'),
            "applicationCategory": "MultimediaApplication",
            "applicationSubCategory": "Image Compression",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />

    <article>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-12 px-4">
        <main className="max-w-7xl mx-auto">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label={tx('Breadcrumb', 'Miga de pan')} className="mb-8">
            <ol
              className="flex items-center gap-2 text-sm text-gray-600"
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a
                  href={homePath}
                  itemProp="item"
                  className="hover:text-purple-600 transition-colors"
                >
                  <span itemProp="name">{tx('Home', 'Inicio')}</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-gray-400">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="text-gray-900 font-medium">{tx('Reduce Size', 'Reducir tamano')}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Gauge className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {tx('Reduce Image File Size', 'Reducir tamano de archivo de imagen')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {tx(
                'Compress and reduce image file size while maintaining quality. Adjust compression levels to find the perfect balance between file size and image quality. Fast, secure, and works entirely in your browser.',
                'Comprime y reduce el tamano de imagen manteniendo calidad. Ajusta la compresion para encontrar el mejor equilibrio entre tamano y calidad visual.'
              )}
            </p>
          </header>

          {/* Main Content - 2 Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
            
            {/* Left Column - Upload & Preview */}
            <div className="flex flex-col">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Upload className="w-6 h-6 text-purple-600" />
                  {tx('Upload & Preview', 'Subir y previsualizar')}
                </h2>

                {!imageState.originalUrl ? (
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="relative border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-purple-400 hover:bg-gradient-to-br hover:from-purple-50 hover:to-indigo-50 bg-gradient-to-br from-gray-50 to-gray-100 transition-all cursor-pointer group"
                    style={{ overflow: 'hidden' }}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {/* Decorative elements */}
                    <div className="absolute top-4 left-4 w-20 h-20 bg-purple-100 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" style={{ pointerEvents: 'none' }}></div>
                    <div className="absolute bottom-4 right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" style={{ pointerEvents: 'none' }}></div>
                    
                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        <Upload className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-lg font-bold text-gray-800 mb-2">
                        {tx('Drag & drop your image here', 'Arrastra y suelta tu imagen aqui')}
                      </p>
                      <p className="text-sm text-gray-600 mb-4">
                        {tx('or click to browse files', 'o haz clic para buscar archivos')}
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
                        {tx('Maximum file size: 50MB', 'Tamano maximo de archivo: 50MB')}
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
                        alt={tx('Original image', 'Imagen original')}
                        className="w-full h-auto"
                        style={{ maxHeight: '400px', objectFit: 'contain' }}
                      />
                      <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                        {tx('Original', 'Original')}
                      </div>
                      <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                        {formatFileSize(imageState.originalSize)}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <p className="text-gray-500 text-xs mb-1">{tx('Dimensions', 'Dimensiones')}</p>
                        <p className="font-semibold text-gray-900">{imageState.originalWidth} × {imageState.originalHeight}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <p className="text-gray-500 text-xs mb-1">{tx('File Size', 'Tamano de archivo')}</p>
                        <p className="font-semibold text-gray-900">{formatFileSize(imageState.originalSize)}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Controls */}
            <div className="flex flex-col">
              {/* Controls Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Gauge className="w-6 h-6 text-purple-600" />
                  {tx('Compression Settings', 'Configuracion de compresion')}
                </h2>

                {imageState.originalUrl ? (
                  <div className="space-y-6">
                    {/* Quality Slider */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          {tx('Quality Level', 'Nivel de calidad')}
                        </label>
                        <span className={`text-sm font-bold ${getQualityColor()}`}>
                          {quality}%
                        </span>
                      </div>
                      <input
                        type="range"
                        value={quality}
                        onChange={(e) => setQuality(parseInt(e.target.value))}
                        className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                        min="10"
                        max="100"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>{tx('Low (10%)', 'Baja (10%)')}</span>
                        <span className={`font-semibold ${getQualityColor()}`}>{getQualityLabel()}</span>
                        <span>{tx('Max (100%)', 'Max (100%)')}</span>
                      </div>
                    </div>

                    {/* Quality Info */}
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
                      <h3 className="text-sm font-semibold text-gray-700 mb-4">{tx('Compression Info', 'Informacion de compresion')}</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">{tx('Quality Setting:', 'Calidad seleccionada:')}</span>
                          <span className={`text-sm font-semibold ${getQualityColor()}`}>{quality}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">{tx('Quality Level:', 'Nivel de calidad:')}</span>
                          <span className={`text-sm font-semibold ${getQualityColor()}`}>{getQualityLabel()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">{tx('Output Format:', 'Formato de salida:')}</span>
                          <span className="text-sm font-semibold text-gray-900">
                            {selectedOutputFormats.map((format) => getFormatMeta(format).label).join(', ')}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Output Format */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 mb-3">{tx('Output Formats', 'Formatos de salida')}</h3>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          onClick={() => handleOutputFormatToggle('image/jpeg')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${selectedOutputFormats.includes('image/jpeg') ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                          type="button"
                        >
                          JPG
                        </button>
                        <button
                          onClick={() => handleOutputFormatToggle('image/png')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${selectedOutputFormats.includes('image/png') ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                          type="button"
                        >
                          PNG
                        </button>
                        <button
                          onClick={() => handleOutputFormatToggle('image/webp')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${selectedOutputFormats.includes('image/webp') ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                          type="button"
                        >
                          WebP
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        {tx(
                          'Select one or more formats. Multiple selections download as ZIP.',
                          'Selecciona uno o mas formatos. Varias selecciones se descargan en ZIP.'
                        )}
                      </p>
                    </div>

                    {/* Info Box */}
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Percent className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-purple-900 font-medium mb-1">
                            {tx('Quality Recommendation', 'Recomendacion de calidad')}
                          </p>
                          <p className="text-xs text-purple-700">
                            {tx(
                              'For web use: 70-80% quality. For print: 85-95% quality. Lower quality = smaller file size.',
                              'Para web: calidad 70-80%. Para impresion: 85-95%. Menor calidad = menor tamano de archivo.'
                            )}
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
                        {tx('Reset', 'Restablecer')}
                      </button>
                      <button
                        onClick={() => processImage()}
                        disabled={processing}
                        className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg transition-all font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {processing ? tx('Compressing...', 'Comprimiendo...') : tx('Compress Image', 'Comprimir imagen')}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Gauge className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Ready to Compress', 'Listo para comprimir')}</h3>
                      <p className="text-gray-600 max-w-sm mx-auto">
                        {tx('Upload an image to start reducing file size while maintaining quality', 'Sube una imagen para comenzar a reducir su tamano manteniendo calidad')}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Preview and Download Section */}
          {imageState.processedUrl && (
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 mb-12 max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">{tx('Compressed Image', 'Imagen comprimida')}</h3>
                  <div className="relative rounded-xl overflow-hidden bg-gray-100 mb-4">
                    <img
                      src={imageState.processedUrl}
                      alt={tx('Compressed image', 'Imagen comprimida')}
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                      {tx('Compressed', 'Comprimida')}
                    </div>
                      <div className="absolute bottom-3 right-3 bg-emerald-600 text-white text-xs px-3 py-1.5 rounded-lg font-semibold">
                        {getSizeReductionLabel(calculateReduction())}
                      </div>
                  </div>
                  <button
                    onClick={downloadImage}
                    className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg transition-all font-bold shadow-lg flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    {outputVariants.length > 1
                      ? tx('Download All Formats (ZIP)', 'Descargar todos los formatos (ZIP)')
                      : tx('Download Compressed Image', 'Descargar imagen comprimida')}
                  </button>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-700">{tx('Compression Results', 'Resultados de compresion')}</h3>
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Original Size:', 'Tamano original:')}</span>
                      <span className="text-sm font-semibold text-gray-900">{formatFileSize(imageState.originalSize)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Compressed Size:', 'Tamano comprimido:')}</span>
                      <span className="text-sm font-semibold text-emerald-600">{formatFileSize(imageState.compressedSize)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Size Reduction:', 'Reduccion de tamano:')}</span>
                      <span className="text-sm font-semibold text-purple-600">{calculateReduction()}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Quality Used:', 'Calidad usada:')}</span>
                      <span className="text-sm font-semibold text-gray-900">{quality}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Output Format:', 'Formato de salida:')}</span>
                      <span className="text-sm font-semibold text-gray-900">
                        {outputVariants.map((variant) => variant.label).join(', ') || tx('N/A', 'N/D')}
                      </span>
                    </div>
                  </div>
                  {outputVariants.length > 0 && (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">{tx('Generated Outputs', 'Salidas generadas')}</p>
                      <div className="flex flex-wrap gap-2">
                        {outputVariants.map((variant) => (
                          <span
                            key={variant.format}
                            className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700"
                          >
                            {variant.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Gauge className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-emerald-900 font-medium mb-1">
                          {tx('Excellent Compression!', 'Excelente compresion!')}
                        </p>
                        <p className="text-xs text-emerald-700">
                          {getCompressionSummaryText(calculateReduction(), quality)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-blue-900 font-medium mb-1">
                          {tx('100% Private', '100% Privado')}
                        </p>
                        <p className="text-xs text-blue-700">
                          {tx(
                            'All processing happens in your browser. Your images never leave your device.',
                            'Todo el procesamiento ocurre en tu navegador. Tus imagenes nunca salen de tu dispositivo.'
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* About Section */}
          <section className="bg-white rounded-xl shadow-md p-8 border border-gray-200 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About Reduce Size Tool', 'Acerca de la herramienta para reducir tamano')}</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                {tx(
                  'Our free online reduce size tool helps you compress and reduce image file size while maintaining quality. Perfect for optimizing images for web use, email attachments, or reducing storage space without sacrificing visual appeal.',
                  'Nuestra herramienta online gratuita te ayuda a comprimir y reducir el tamano de imagen manteniendo calidad. Es ideal para optimizar imagenes para web, correo o ahorro de espacio.'
                )}
              </p>
              <p>
                {tx(
                  'Simply upload your image, adjust the quality slider to balance between file size and image quality, and compress. Our tool uses smart compression algorithms to reduce file size efficiently. All processing happens in your browser, ensuring your images remain private and secure. No registration required, completely free to use.',
                  'Solo sube tu imagen, ajusta el control de calidad para equilibrar tamano y calidad, y comprime. La herramienta usa algoritmos inteligentes para reducir tamano de forma eficiente. Todo se procesa en tu navegador para mantener privacidad y seguridad.'
                )}
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto" aria-labelledby="features-heading">
            <h2 id="features-heading" className="sr-only">{tx('Key Features', 'Caracteristicas clave')}</h2>
            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Gauge className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Quality Control', 'Control de calidad')}</h3>
              <p className="text-gray-600">
                {tx('Adjust compression quality to find the perfect balance for your needs.', 'Ajusta la calidad de compresion para lograr el equilibrio perfecto segun tus necesidades.')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Percent className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Size Reduction', 'Reduccion de tamano')}</h3>
              <p className="text-gray-600">
                {tx('Reduce file size by up to 90% while maintaining visual quality.', 'Reduce el tamano de archivo hasta un 90% manteniendo calidad visual.')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('100% Secure', '100% Seguro')}</h3>
              <p className="text-gray-600">
                {tx('All processing happens locally in your browser for privacy.', 'Todo el procesamiento ocurre localmente en tu navegador para mayor privacidad.')}
              </p>
            </div>
          </section>

          {/* How to Use */}
          <section className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl shadow-md p-8 border border-purple-200 max-w-4xl mx-auto mb-12" aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="text-2xl font-bold text-gray-900 mb-8 text-center">{tx('How to Use Reduce Size Tool', 'Como usar la herramienta para reducir tamano')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Upload Your Image', 'Sube tu imagen')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Click the upload area or drag and drop your photo. Supports JPG, PNG, WebP formats.', 'Haz clic en el area de subida o arrastra tu foto. Compatible con JPG, PNG y WebP.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Set Quality Level', 'Define el nivel de calidad')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Adjust the quality slider to balance between file size and image quality.', 'Ajusta el control de calidad para equilibrar tamano de archivo y calidad visual.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Compress Image', 'Comprimir imagen')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Click "Compress Image" to reduce the file size with your selected quality settings.', 'Haz clic en "Comprimir imagen" para reducir el tamano con la calidad seleccionada.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Download Compressed', 'Descargar comprimida')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Preview the results and download your compressed image with reduced file size.', 'Previsualiza los resultados y descarga tu imagen comprimida con menor tamano.')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-purple-100 border border-purple-200 rounded-lg p-4 text-center">
              <p className="text-sm text-purple-800">
                <strong>{tx('Pro Tip:', 'Consejo Pro:')}</strong>{' '}
                {tx(
                  'For web use, 70-80% quality offers the best balance between file size and visual quality, often reducing file size by 60-80%.',
                  'Para web, una calidad de 70-80% ofrece el mejor equilibrio entre tamano y calidad visual, reduciendo el archivo frecuentemente entre 60-80%.'
                )}
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="max-w-4xl mx-auto" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-gray-900 mb-6 text-center">{tx('Frequently Asked Questions', 'Preguntas frecuentes')}</h2>
            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(0)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>{tx('How much can I reduce my image file size?', 'Cuanto puedo reducir el tamano de mi imagen?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 0 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 0 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Depending on the quality setting, you can typically reduce image file size by 50-90%. Higher compression (lower quality) results in smaller file sizes but may reduce image quality.', 'Segun la calidad seleccionada, normalmente puedes reducir el tamano entre 50% y 90%. Mayor compresion reduce mas el tamano pero puede afectar la calidad.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(1)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>{tx('What quality setting should I use?', 'Que ajuste de calidad debo usar?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 1 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 1 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('For web use, 70-80% quality is recommended as it provides a good balance between file size and visual quality. For print or high-quality needs, use 85-95% quality.', 'Para web, se recomienda 70-80% porque ofrece buen equilibrio entre tamano y calidad visual. Para impresion o alta calidad, usa 85-95%.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(2)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>{tx('Will compressing reduce image quality?', 'Comprimir reducira la calidad de imagen?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 2 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 2 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Yes, compression reduces file size by removing some image data. However, with quality settings above 70%, the difference is often imperceptible to the human eye.', 'Si, la compresion reduce tamano eliminando parte de los datos. Con calidad por encima de 70%, la diferencia suele ser casi imperceptible.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(3)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>{tx('What format is best for compression?', 'Que formato es mejor para comprimir?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 3 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 3 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('JPEG format is excellent for photos and complex images with compression. For images with transparency or graphics, PNG or WebP formats work better.', 'JPEG es excelente para fotos e imagenes complejas. Para imagenes con transparencia o graficos, PNG o WebP suelen funcionar mejor.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(4)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>{tx('Is my image secure when compressing?', 'Mi imagen esta segura al comprimir?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 4 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 4 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Yes! All compression happens locally in your browser. Your images are never uploaded to any server, ensuring complete privacy and security.', 'Si. Toda la compresion ocurre localmente en tu navegador. Tus imagenes nunca se suben a ningun servidor.')}</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Hidden Canvas for Processing */}
      <canvas ref={canvasRef} className="hidden" />
    </article>
    </>
  );
}
