"use client";

import { normalizeFileToken } from '@/lib/unifiedOutputProcessor';
import { useLanguage } from '@/components/LanguageProvider';
import { getLocaleBasePath, type Locale } from '@/lib/i18n';
import { IMAGE_RESIZER_TEXT_BY_LOCALE } from '@/lib/imageResizerTranslations';
import { UPSC_PHOTO_TEXT_BY_LOCALE } from '@/lib/upscPhotoTranslations';
import { useState, useRef, useCallback, useEffect } from 'react';
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
        UPSC_PHOTO_TEXT_BY_LOCALE[locale]?.[en] ||
        IMAGE_RESIZER_TEXT_BY_LOCALE[locale]?.[en] ||
        en
      );
    },
    [locale]
  );
  const localeBasePath = getLocaleBasePath(locale);
  const pagePath = localeBasePath ? `${localeBasePath}/upsc-photo` : '/upsc-photo';
  const pageUrl = `https://pixselli.com${pagePath}`;
  const homePath = localeBasePath || '/';

  const [imageState, setImageState] = useState<ImageState>({
    originalFile: null,
    originalUrl: '',
    processedUrl: '',
    originalWidth: 0,
    originalHeight: 0,
  });
  
  const [processing, setProcessing] = useState(false);
  const [selectedOutputFormats, setSelectedOutputFormats] = useState<OutputFormat[]>(['image/jpeg', 'image/png']);
  const [outputVariants, setOutputVariants] = useState<OutputVariant[]>([]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // UPSC Official Requirements
  const UPSC_WIDTH_PX = 413;  // 35mm at 300 DPI
  const UPSC_HEIGHT_PX = 531; // 45mm at 300 DPI
  const UPSC_MAX_SIZE_KB = 40;
  const UPSC_MIN_SIZE_KB = 10;

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

  const formatFileSize = (bytes: number): string => {
    return (bytes / 1024).toFixed(2) + ' KB';
  };

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

      // Set UPSC standard dimensions
      canvas.width = UPSC_WIDTH_PX;
      canvas.height = UPSC_HEIGHT_PX;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Fill with white background
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Calculate scaling to cover the canvas while maintaining aspect ratio
      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );

      const scaledWidth = img.width * scale;
      const scaledHeight = img.height * scale;

      // Center the image
      const x = (canvas.width - scaledWidth) / 2;
      const y = (canvas.height - scaledHeight) / 2;

      // Draw image
      ctx.drawImage(img, x, y, scaledWidth, scaledHeight);

      // Compress JPG to meet UPSC file size requirements (10-40 KB)
      let quality = 0.92;
      let jpegBlob: Blob | null = null;
      
      while (quality > 0.3) {
        jpegBlob = await new Promise<Blob | null>((resolve) => {
          canvas.toBlob((b) => resolve(b), 'image/jpeg', quality);
        });

        if (jpegBlob && jpegBlob.size >= UPSC_MIN_SIZE_KB * 1024 && jpegBlob.size <= UPSC_MAX_SIZE_KB * 1024) {
          break;
        }

        if (jpegBlob && jpegBlob.size > UPSC_MAX_SIZE_KB * 1024) {
          quality -= 0.05;
        } else {
          quality += 0.02;
          break;
        }
      }

      const effectiveFormats: OutputFormat[] = formats.length > 0 ? formats : ['image/jpeg'];
      const variants = await Promise.all(
        effectiveFormats.map(async (format) => {
          let blob: Blob | null = null;

          if (format === 'image/jpeg') {
            blob = jpegBlob;
          } else {
            blob = await new Promise<Blob | null>((resolve) => {
              if (format === 'image/png') {
                canvas.toBlob((b) => resolve(b), format);
              } else {
                canvas.toBlob((b) => resolve(b), format, 0.95);
              }
            });
          }

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
      );

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

    } catch (error) {
      console.error('Error processing image:', error);
      setProcessing(false);
    }
  }, [imageState.originalUrl, selectedOutputFormats]);

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

    const baseName = 'upsc_photo_35x45mm';

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
    setImageState(prev => ({ ...prev, processedUrl: '' }));
  };

  const getFileSizeStatus = async (url: string): Promise<{ size: number; status: 'valid' | 'large' | 'small' }> => {
    const response = await fetch(url);
    const blob = await response.blob();
    const sizeKB = blob.size / 1024;
    
    if (sizeKB >= UPSC_MIN_SIZE_KB && sizeKB <= UPSC_MAX_SIZE_KB) {
      return { size: blob.size, status: 'valid' };
    } else if (sizeKB > UPSC_MAX_SIZE_KB) {
      return { size: blob.size, status: 'large' };
    } else {
      return { size: blob.size, status: 'small' };
    }
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
            "name": tx('UPSC Photo Tool - Free Online UPSC Exam Photo Maker', 'Herramienta de foto UPSC - Creador gratis online'),
            "description": tx(
              'Free online tool to create UPSC exam photos with exact specifications: 35×45mm, 10-40 KB, 300 DPI. Perfect for UPSC Civil Services, IAS, IPS, IFS applications.',
              'Herramienta online gratis para crear fotos de examen UPSC con especificaciones exactas: 35×45 mm, 10-40 KB y 300 DPI. Ideal para UPSC Civil Services, IAS, IPS e IFS.'
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
              tx('UPSC standard 35×45mm size', 'Tamano estandar UPSC 35×45 mm'),
              tx('10-40 KB file size compression', 'Compresion de 10-40 KB'),
              tx('300 DPI resolution', 'Resolucion de 300 DPI'),
              tx('Auto size optimization', 'Optimizacion automatica de tamano'),
              tx('JPG format output', 'Salida en formato JPG'),
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
            "name": tx('How to Create UPSC Exam Photo', 'Como crear foto para examen UPSC'),
            "description": tx(
              'Learn how to create UPSC exam photo with exact specifications online for free',
              'Aprende a crear una foto para examen UPSC con especificaciones exactas online gratis'
            ),
            "image": "https://pixselli.com/images/upsc-photo-guide.jpg",
            "totalTime": "PT2M",
            "supply": [
              {
                "@type": "HowToSupply",
                "name": tx('Passport-size Photo', 'Foto tamano pasaporte')
              }
            ],
            "tool": [
              {
                "@type": "HowToTool",
                "name": tx('Pixselli UPSC Photo Tool', 'Herramienta UPSC de Pixselli')
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": tx('Upload Photo', 'Subir foto'),
                "text": tx(
                  'Upload your passport-size photo by dragging and dropping or clicking to browse. Supports JPG, PNG formats',
                  'Sube tu foto tamano pasaporte arrastrando y soltando o haciendo clic para buscar. Compatible con JPG y PNG'
                ),
                "url": `${pageUrl}#step1`
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": tx('Auto Processing', 'Procesamiento automatico'),
                "text": tx(
                  'Tool automatically resizes to 35×45mm (413×531 pixels) at 300 DPI and compresses to 10-40 KB',
                  'La herramienta redimensiona automaticamente a 35×45 mm (413×531 pixeles) a 300 DPI y comprime a 10-40 KB'
                ),
                "url": `${pageUrl}#step2`
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": tx('Verify Specifications', 'Verificar especificaciones'),
                "text": tx(
                  'Check that photo meets all UPSC requirements: dimensions, file size, and format',
                  'Verifica que la foto cumpla todos los requisitos UPSC: dimensiones, tamano de archivo y formato'
                ),
                "url": `${pageUrl}#step3`
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": tx('Download & Upload', 'Descargar y subir'),
                "text": tx(
                  'Download your UPSC-ready photo and upload to the UPSC application portal',
                  'Descarga tu foto lista para UPSC y subela al portal de solicitud UPSC'
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
                "name": tx('What are UPSC photo requirements?', 'Cuales son los requisitos de foto para UPSC?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'UPSC photo requirements: 35mm × 45mm dimensions, 300 DPI resolution, 10-40 KB file size, JPG format, white or light background, recent color photograph with 70-80% face coverage.',
                    'Requisitos de foto UPSC: dimensiones 35 mm × 45 mm, resolucion 300 DPI, tamano de archivo 10-40 KB, formato JPG, fondo blanco o claro y rostro cubriendo 70-80%.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('What is the exact pixel size for UPSC photo?', 'Cual es el tamano exacto en pixeles para foto UPSC?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'UPSC photo pixel size is 413 × 531 pixels at 300 DPI, which equals exactly 35mm × 45mm physical dimensions required by UPSC.',
                    'El tamano de foto UPSC es 413 × 531 pixeles a 300 DPI, equivalente a 35 mm × 45 mm requeridos por UPSC.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('Can I use this photo for all UPSC exams?', 'Puedo usar esta foto para todos los examenes UPSC?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'Yes! This tool creates photos meeting standard UPSC specifications for Civil Services (IAS, IPS, IFS), Engineering Services (ESE), CAPF, CDS, NDA, and other UPSC exams.',
                    'Si. Esta herramienta crea fotos que cumplen las especificaciones UPSC para Civil Services (IAS, IPS, IFS), ESE, CAPF, CDS, NDA y otros examenes UPSC.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('Why is file size limited to 10-40 KB?', 'Por que el tamano de archivo esta limitado a 10-40 KB?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'UPSC mandates file size between 10-40 KB to ensure fast upload speeds and standardized photo quality across all applications. Our tool automatically compresses to meet this requirement.',
                    'UPSC exige entre 10-40 KB para asegurar cargas rapidas y calidad estandarizada. Nuestra herramienta comprime automaticamente para cumplir este requisito.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('Is my photo secure when using this tool?', 'Mi foto esta segura al usar esta herramienta?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'Yes! All photo processing happens locally in your browser. Your photos are never uploaded to any server, ensuring complete privacy and security for your UPSC application.',
                    'Si. Todo el procesamiento de fotos ocurre localmente en tu navegador. Tus fotos nunca se suben a ningun servidor.'
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
            "name": tx('Pixselli UPSC Photo Tool', 'Herramienta UPSC de Pixselli'),
            "applicationCategory": "MultimediaApplication",
            "applicationSubCategory": "Photo Editing",
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 py-12 px-4">
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
                  className="hover:text-orange-600 transition-colors"
                >
                  <span itemProp="name">{tx('Home', 'Inicio')}</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-gray-400">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="text-gray-900 font-medium">{tx('UPSC Photo', 'Foto UPSC')}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <FileText className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {tx('UPSC Exam Photo Maker', 'Creador de foto para examen UPSC')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {tx(
                'Create UPSC exam photos with exact specifications: 35×45mm (413×531 pixels), 10-40 KB file size, 300 DPI resolution. Perfect for UPSC Civil Services, IAS, IPS, IFS, and all other UPSC exam applications. Fast, secure, and works entirely in your browser.',
                'Crea fotos para examen UPSC con especificaciones exactas: 35×45 mm (413×531 pixeles), tamano 10-40 KB y resolucion 300 DPI. Ideal para Civil Services, IAS, IPS, IFS y otros examenes UPSC.'
              )}
            </p>
          </header>

          {/* UPSC Requirements Info */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{tx('Official UPSC Photo Requirements', 'Requisitos oficiales de foto UPSC')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white rounded-lg p-3 border border-orange-200">
                    <p className="text-gray-500 text-xs mb-1">{tx('Dimensions', 'Dimensiones')}</p>
                    <p className="font-bold text-orange-600">35mm × 45mm</p>
                    <p className="text-xs text-gray-600 mt-1">413 × 531 {tx('pixels', 'pixeles')}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-orange-200">
                    <p className="text-gray-500 text-xs mb-1">{tx('File Size', 'Tamano de archivo')}</p>
                    <p className="font-bold text-orange-600">10 - 40 KB</p>
                    <p className="text-xs text-gray-600 mt-1">{tx('Compressed JPG', 'JPG comprimido')}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-orange-200">
                    <p className="text-gray-500 text-xs mb-1">{tx('Resolution', 'Resolucion')}</p>
                    <p className="font-bold text-orange-600">300 DPI</p>
                    <p className="text-xs text-gray-600 mt-1">{tx('Print quality', 'Calidad de impresion')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - 2 Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
            
            {/* Left Column - Upload & Preview */}
            <div className="flex flex-col">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Upload className="w-6 h-6 text-orange-600" />
                  {tx('Upload Photo', 'Subir foto')}
                </h2>

                {!imageState.originalUrl ? (
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="relative border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-50 hover:to-amber-50 bg-gradient-to-br from-gray-50 to-gray-100 transition-all cursor-pointer group"
                    style={{ overflow: 'hidden' }}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {/* Decorative elements */}
                    <div className="absolute top-4 left-4 w-20 h-20 bg-orange-100 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" style={{ pointerEvents: 'none' }}></div>
                    <div className="absolute bottom-4 right-4 w-24 h-24 bg-amber-100 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" style={{ pointerEvents: 'none' }}></div>
                    
                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        <Upload className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-lg font-bold text-gray-800 mb-2">
                        {tx('Drag & drop your photo here', 'Arrastra y suelta tu foto aqui')}
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
                        {tx('Maximum file size: 10MB', 'Tamano maximo de archivo: 10MB')}
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
                        alt={tx('Original photo', 'Foto original')}
                        className="w-full h-auto"
                        style={{ maxHeight: '400px', objectFit: 'contain' }}
                      />
                      <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                        {tx('Original Photo', 'Foto original')}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <p className="text-gray-500 text-xs mb-1">{tx('Original Size', 'Tamano original')}</p>
                        <p className="font-semibold text-gray-900">{imageState.originalWidth} × {imageState.originalHeight} px</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <p className="text-gray-500 text-xs mb-1">{tx('Target Size', 'Tamano objetivo')}</p>
                        <p className="font-semibold text-gray-900">{UPSC_WIDTH_PX} × {UPSC_HEIGHT_PX} px</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Action & Info */}
            <div className="flex flex-col">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-orange-600" />
                  {tx('UPSC Specifications', 'Especificaciones UPSC')}
                </h2>

                {imageState.originalUrl ? (
                  <div className="space-y-6">
                    {/* Specifications Checklist */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{tx('Photo Dimensions', 'Dimensiones de foto')}</p>
                          <p className="text-xs text-gray-600">{tx('35mm × 45mm (413 × 531 pixels)', '35mm × 45mm (413 × 531 pixeles)')}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{tx('File Size', 'Tamano de archivo')}</p>
                          <p className="text-xs text-gray-600">{tx('Between 10 KB and 40 KB', 'Entre 10 KB y 40 KB')}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{tx('Resolution', 'Resolucion')}</p>
                          <p className="text-xs text-gray-600">{tx('300 DPI for print quality', '300 DPI para calidad de impresion')}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{tx('Format', 'Formato')}</p>
                          <p className="text-xs text-gray-600">{tx('JPG/JPEG format', 'Formato JPG/JPEG')}</p>
                        </div>
                      </div>
                    </div>

                    {/* Photo Guidelines */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h3 className="text-sm font-bold text-blue-900 mb-2">{tx('Photo Guidelines:', 'Guia de foto:')}</h3>
                      <ul className="text-xs text-blue-700 space-y-1">
                        <li>{tx('• Recent color photograph (within 3 months)', '• Foto reciente a color (dentro de 3 meses)')}</li>
                        <li>{tx('• White or light-colored background', '• Fondo blanco o de color claro')}</li>
                        <li>{tx('• Face should cover 70-80% of photo', '• El rostro debe cubrir 70-80% de la foto')}</li>
                        <li>{tx('• Both ears should be visible', '• Ambas orejas deben ser visibles')}</li>
                        <li>{tx('• No glasses or headwear (except religious)', '• Sin gafas ni gorra/sombrero (excepto por motivos religiosos)')}</li>
                      </ul>
                    </div>

                    {/* Output Format */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 mb-3">{tx('Output Formats', 'Formatos de salida')}</h3>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          onClick={() => handleOutputFormatToggle('image/jpeg')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${selectedOutputFormats.includes('image/jpeg') ? 'bg-orange-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                          type="button"
                        >
                          JPG
                        </button>
                        <button
                          onClick={() => handleOutputFormatToggle('image/png')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${selectedOutputFormats.includes('image/png') ? 'bg-orange-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                          type="button"
                        >
                          PNG
                        </button>
                        <button
                          onClick={() => handleOutputFormatToggle('image/webp')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${selectedOutputFormats.includes('image/webp') ? 'bg-orange-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                          type="button"
                        >
                          WebP
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        {tx('JPG output is optimized for UPSC size limits (10-40 KB). Multiple selections download as ZIP.', 'La salida JPG esta optimizada para limites UPSC (10-40 KB). Varias selecciones se descargan en ZIP.')}
                      </p>
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
                        className="flex-1 py-3 px-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white rounded-lg transition-all font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {processing ? tx('Processing...', 'Procesando...') : tx('Create UPSC Photo', 'Crear foto UPSC')}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-200">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <FileText className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Ready to Create', 'Listo para crear')}</h3>
                      <p className="text-gray-600 max-w-sm mx-auto mb-4">
                        {tx('Upload your photo to create UPSC-compliant exam photo', 'Sube tu foto para crear una foto de examen compatible con UPSC')}
                      </p>
                      <div className="text-xs text-gray-500 space-y-1">
                        <p>{tx('✓ Automatically resized to 35×45mm', '✓ Redimensionada automaticamente a 35×45 mm')}</p>
                        <p>{tx('✓ Compressed to 10-40 KB', '✓ Comprimida a 10-40 KB')}</p>
                        <p>{tx('✓ 300 DPI resolution', '✓ Resolucion de 300 DPI')}</p>
                      </div>
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
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">{tx('UPSC-Ready Photo', 'Foto lista para UPSC')}</h3>
                  <div className="relative rounded-xl overflow-hidden bg-gray-100 mb-4">
                    <img
                      src={imageState.processedUrl}
                      alt={tx('UPSC photo', 'Foto UPSC')}
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                      {tx('35×45mm UPSC Format', 'Formato UPSC 35×45 mm')}
                    </div>
                  </div>
                  <button
                    onClick={downloadImage}
                    className="w-full py-4 px-6 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white rounded-lg transition-all font-bold shadow-lg flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    {outputVariants.length > 1
                      ? tx('Download All Formats (ZIP)', 'Descargar todos los formatos (ZIP)')
                      : tx('Download UPSC Photo', 'Descargar foto UPSC')}
                  </button>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-700">{tx('Photo Details', 'Detalles de la foto')}</h3>
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Physical Size:', 'Tamano fisico:')}</span>
                      <span className="text-sm font-semibold text-gray-900">35 × 45 mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Pixel Dimensions:', 'Dimensiones en pixeles:')}</span>
                      <span className="text-sm font-semibold text-gray-900">{UPSC_WIDTH_PX} × {UPSC_HEIGHT_PX} px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Resolution:', 'Resolucion:')}</span>
                      <span className="text-sm font-semibold text-gray-900">300 DPI</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('File Size:', 'Tamano de archivo:')}</span>
                      <span className="text-sm font-semibold text-gray-900">
                        {imageState.processedUrl && (
                          <FileSize url={imageState.processedUrl} locale={locale} />
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Format:', 'Formato:')}</span>
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
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-emerald-900 font-medium mb-1">
                          {tx('UPSC Compliant', 'Compatible con UPSC')}
                        </p>
                        <p className="text-xs text-emerald-700">
                          {tx('Your photo meets all UPSC requirements and is ready to upload to the application portal.', 'Tu foto cumple todos los requisitos UPSC y esta lista para subir al portal de solicitud.')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-orange-900 font-medium mb-1">
                          {tx('100% Private & Secure', '100% Privada y segura')}
                        </p>
                        <p className="text-xs text-orange-700">
                          {tx('All processing happens in your browser. Your photo never leaves your device.', 'Todo el procesamiento ocurre en tu navegador. Tu foto nunca sale de tu dispositivo.')}
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About UPSC Photo Tool', 'Acerca de la herramienta de foto UPSC')}</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                {tx(
                  'Our free online UPSC photo tool helps you create exam photos that meet exact UPSC (Union Public Service Commission) specifications. Perfect for UPSC Civil Services Examination (CSE), IAS, IPS, IFS, Engineering Services Examination (ESE), Combined Defence Services (CDS), National Defence Academy (NDA), CAPF, and all other UPSC recruitment exams.',
                  'Nuestra herramienta online gratuita de foto UPSC te ayuda a crear fotos de examen que cumplen especificaciones exactas de UPSC. Es ideal para CSE, IAS, IPS, IFS, ESE, CDS, NDA, CAPF y otros examenes de reclutamiento UPSC.'
                )}
              </p>
              <p>
                {tx(
                  'Simply upload your passport-size photograph, and our tool automatically resizes it to the standard 35mm × 45mm dimensions (413 × 531 pixels at 300 DPI), compresses the file to meet the 10-40 KB requirement, and optimizes it for upload to the UPSC online application portal. All processing happens securely in your browser, ensuring your photo remains private. No registration required, completely free to use.',
                  'Solo sube tu fotografia tamano pasaporte y nuestra herramienta la redimensiona automaticamente al estandar 35 mm × 45 mm (413 × 531 pixeles a 300 DPI), comprime el archivo al rango 10-40 KB y la optimiza para el portal de UPSC.'
                )}
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto" aria-labelledby="features-heading">
            <h2 id="features-heading" className="sr-only">{tx('Key Features', 'Caracteristicas clave')}</h2>
            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-orange-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('UPSC Compliant', 'Compatible con UPSC')}</h3>
              <p className="text-gray-600">
                {tx('Meets all official UPSC photo requirements automatically.', 'Cumple automaticamente todos los requisitos oficiales de foto UPSC.')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Auto Compression', 'Compresion automatica')}</h3>
              <p className="text-gray-600">
                {tx('Automatically compresses to 10-40 KB file size range.', 'Comprime automaticamente al rango de 10-40 KB.')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('100% Secure', '100% Seguro')}</h3>
              <p className="text-gray-600">
                {tx('All processing happens locally for complete privacy.', 'Todo el procesamiento ocurre localmente para privacidad completa.')}
              </p>
            </div>
          </section>

          {/* How to Use */}
          <section className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl shadow-md p-8 border border-orange-200 max-w-4xl mx-auto mb-12" aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="text-2xl font-bold text-gray-900 mb-8 text-center">{tx('How to Create UPSC Exam Photo', 'Como crear foto para examen UPSC')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Upload Your Photo', 'Sube tu foto')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Click the upload area or drag and drop your passport-size photo. Supports JPG, PNG formats.', 'Haz clic en el area de carga o arrastra tu foto tamano pasaporte. Compatible con JPG y PNG.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Auto Processing', 'Procesamiento automatico')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Tool automatically resizes to 35×45mm at 300 DPI and compresses to 10-40 KB.', 'La herramienta redimensiona automaticamente a 35×45 mm a 300 DPI y comprime a 10-40 KB.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Verify Specifications', 'Verificar especificaciones')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Check that photo meets all UPSC requirements: dimensions, file size, and format.', 'Verifica que la foto cumpla los requisitos UPSC: dimensiones, tamano de archivo y formato.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Download & Upload', 'Descargar y subir')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Download your UPSC-ready photo and upload to the UPSC application portal.', 'Descarga tu foto lista para UPSC y subela al portal de solicitud UPSC.')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-orange-100 border border-orange-200 rounded-lg p-4 text-center">
              <p className="text-sm text-orange-800">
                <strong>{tx('Pro Tip:', 'Consejo Pro:')}</strong>{' '}
                {tx('Take photo with white/light background, face covering 70-80% of frame, both ears visible, no glasses. Recent color photograph within 3 months.', 'Toma la foto con fondo blanco/claro, rostro cubriendo 70-80% del encuadre, ambas orejas visibles y sin gafas. Foto reciente a color dentro de 3 meses.')}
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
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-orange-50 transition-colors"
                >
                  <span>{tx('What are UPSC photo requirements?', 'Cuales son los requisitos de foto UPSC?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 0 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 0 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('UPSC photo requirements: 35mm × 45mm dimensions, 300 DPI resolution, 10-40 KB file size, JPG format, white or light background, recent color photograph with 70-80% face coverage, both ears visible, no glasses or headwear (except religious).', 'Requisitos UPSC: dimensiones 35 mm × 45 mm, resolucion 300 DPI, tamano 10-40 KB, formato JPG, fondo blanco/claro, foto reciente con 70-80% del rostro, ambas orejas visibles y sin gafas o gorro (excepto religioso).')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(1)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-orange-50 transition-colors"
                >
                  <span>{tx('What is the exact pixel size for UPSC photo?', 'Cual es el tamano exacto en pixeles para foto UPSC?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 1 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 1 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('UPSC photo pixel size is 413 × 531 pixels at 300 DPI, which equals exactly 35mm × 45mm physical dimensions required by UPSC.', 'El tamano de foto UPSC es 413 × 531 pixeles a 300 DPI, equivalente a 35 mm × 45 mm requeridos por UPSC.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(2)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-orange-50 transition-colors"
                >
                  <span>{tx('Can I use this photo for all UPSC exams?', 'Puedo usar esta foto para todos los examenes UPSC?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 2 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 2 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Yes! This tool creates photos meeting standard UPSC specifications for Civil Services (IAS, IPS, IFS), Engineering Services (ESE), CAPF, CDS, NDA, and other UPSC exams.', 'Si. Esta herramienta crea fotos que cumplen especificaciones UPSC para Civil Services (IAS, IPS, IFS), ESE, CAPF, CDS, NDA y otros examenes UPSC.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(3)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-orange-50 transition-colors"
                >
                  <span>{tx('Why is file size limited to 10-40 KB?', 'Por que el tamano de archivo esta limitado a 10-40 KB?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 3 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 3 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('UPSC mandates file size between 10-40 KB to ensure fast upload speeds and standardized photo quality across all applications. Our tool automatically compresses to meet this requirement.', 'UPSC exige entre 10-40 KB para asegurar cargas rapidas y calidad estandarizada. Nuestra herramienta comprime automaticamente para cumplir este requisito.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(4)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-orange-50 transition-colors"
                >
                  <span>{tx('Is my photo secure when using this tool?', 'Mi foto esta segura al usar esta herramienta?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 4 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 4 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Yes! All photo processing happens locally in your browser. Your photos are never uploaded to any server, ensuring complete privacy and security for your UPSC application.', 'Si. Todo el procesamiento de fotos ocurre localmente en tu navegador. Tus fotos nunca se suben a ningun servidor.')}</p>
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

// Helper component to display file size
function FileSize({ url, locale }: { url: string; locale: Locale }) {
  const getLoadingText = (currentLocale: Locale) => {
    const textByLocale: Record<Locale, string> = {
      en: 'Calculating...',
      es: 'Calculando...',
      pt: 'Calculando...',
      fr: 'Calcul en cours...',
      de: 'Berechnung...',
      it: 'Calcolo in corso...',
    };

    return textByLocale[currentLocale] || 'Calculating...';
  };

  const [size, setSize] = useState<string>(getLoadingText(locale));

  useEffect(() => {
    setSize(getLoadingText(locale));
    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        const sizeKB = (blob.size / 1024).toFixed(2);
        setSize(`${sizeKB} KB`);
      });
  }, [url, locale]);

  return <span>{size}</span>;
}
