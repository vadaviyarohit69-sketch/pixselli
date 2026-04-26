"use client";

import { normalizeFileToken } from '@/lib/unifiedOutputProcessor';
import { useLanguage } from '@/components/LanguageProvider';
import { getLocaleBasePath } from '@/lib/i18n';
import { IMAGE_RESIZER_TEXT_BY_LOCALE } from '@/lib/imageResizerTranslations';
import { RESIZE_TO_INCHES_TEXT_BY_LOCALE } from '@/lib/resizeToInchesTranslations';
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
        RESIZE_TO_INCHES_TEXT_BY_LOCALE[locale]?.[en] ||
        IMAGE_RESIZER_TEXT_BY_LOCALE[locale]?.[en] ||
        en
      );
    },
    [locale]
  );
  const localeBasePath = getLocaleBasePath(locale);
  const pagePath = localeBasePath ? `${localeBasePath}/resize-to-inches` : '/resize-to-inches';
  const pageUrl = `https://pixselli.com${pagePath}`;
  const homePath = localeBasePath || '/';

  const getOutputDimensionsText = useCallback(
    (width: number, height: number, resolution: number, pxWidth: number, pxHeight: number) => {
      if (locale === 'es') {
        return `${width}″ × ${height}″ a ${resolution} DPI = ${pxWidth} × ${pxHeight} pixeles`;
      }

      const templateByLocale: Record<string, string> = {
        pt: `${width}″ × ${height}″ em ${resolution} DPI = ${pxWidth} × ${pxHeight} pixels`,
        fr: `${width}″ × ${height}″ a ${resolution} DPI = ${pxWidth} × ${pxHeight} pixels`,
        de: `${width}″ × ${height}″ bei ${resolution} DPI = ${pxWidth} × ${pxHeight} Pixel`,
        it: `${width}″ × ${height}″ a ${resolution} DPI = ${pxWidth} × ${pxHeight} pixel`,
      };

      return templateByLocale[locale] || `${width}″ × ${height}″ at ${resolution} DPI = ${pxWidth} × ${pxHeight} pixels`;
    },
    [locale]
  );

  const getPrintReadyText = useCallback(
    (width: number, height: number, resolution: number) => {
      const templateByLocale: Record<string, string> = {
        es: `Tu imagen ahora tiene exactamente ${width} × ${height} pulgadas al imprimirse a ${resolution} DPI.`,
        pt: `Sua imagem agora tem exatamente ${width} × ${height} polegadas quando impressa a ${resolution} DPI.`,
        fr: `Votre image fait maintenant exactement ${width} × ${height} pouces lorsqu'elle est imprimee a ${resolution} DPI.`,
        de: `Dein Bild hat jetzt genau ${width} × ${height} Zoll bei einem Druck mit ${resolution} DPI.`,
        it: `La tua immagine ora misura esattamente ${width} × ${height} pollici quando viene stampata a ${resolution} DPI.`,
      };

      return (
        templateByLocale[locale] ||
        `Your image is now sized to exactly ${width} × ${height} inches when printed at ${resolution} DPI.`
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
  });
  
  const [widthInches, setWidthInches] = useState(8);
  const [heightInches, setHeightInches] = useState(10);
  const [dpi, setDpi] = useState(300);
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);
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

  const calculatePixels = (inches: number, resolution: number): number => {
    return Math.round(inches * resolution);
  };

  const calculateInches = (pixels: number, resolution: number): string => {
    return (pixels / resolution).toFixed(2);
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
      
      // Set initial dimensions based on image
      const initialWidthInches = img.width / dpi;
      const initialHeightInches = img.height / dpi;
      setWidthInches(Math.round(initialWidthInches * 10) / 10);
      setHeightInches(Math.round(initialHeightInches * 10) / 10);
    };

    img.src = url;
  }, [dpi, tx]);

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

  const handleWidthChange = (value: number) => {
    setWidthInches(value);
    if (maintainAspectRatio && imageState.originalWidth > 0) {
      const aspectRatio = imageState.originalHeight / imageState.originalWidth;
      setHeightInches(Math.round(value * aspectRatio * 10) / 10);
    }
  };

  const handleHeightChange = (value: number) => {
    setHeightInches(value);
    if (maintainAspectRatio && imageState.originalHeight > 0) {
      const aspectRatio = imageState.originalWidth / imageState.originalHeight;
      setWidthInches(Math.round(value * aspectRatio * 10) / 10);
    }
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

      const targetWidth = calculatePixels(widthInches, dpi);
      const targetHeight = calculatePixels(heightInches, dpi);

      canvas.width = targetWidth;
      canvas.height = targetHeight;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Draw resized image
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

      const effectiveFormats: OutputFormat[] = formats.length > 0 ? formats : ['image/png'];
      const variants = await Promise.all(
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
  }, [imageState.originalUrl, widthInches, heightInches, dpi, selectedOutputFormats]);

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

    const baseName = `${imageState.originalFile?.name.split('.')[0] || 'image'}_${widthInches}x${heightInches}in_${dpi}dpi`;

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
    if (imageState.originalWidth > 0) {
      const initialWidthInches = imageState.originalWidth / dpi;
      const initialHeightInches = imageState.originalHeight / dpi;
      setWidthInches(Math.round(initialWidthInches * 10) / 10);
      setHeightInches(Math.round(initialHeightInches * 10) / 10);
    }
    setOutputVariants((prev) => {
      prev.forEach((variant) => URL.revokeObjectURL(variant.url));
      return [];
    });
    setImageState(prev => ({ ...prev, processedUrl: '' }));
  };

  // Common presets
  const presets = [
    { name: tx('4×6 Photo', 'Foto 4×6'), width: 4, height: 6 },
    { name: tx('5×7 Photo', 'Foto 5×7'), width: 5, height: 7 },
    { name: tx('8×10 Print', 'Impresion 8×10'), width: 8, height: 10 },
    { name: tx('11×14 Print', 'Impresion 11×14'), width: 11, height: 14 },
    { name: tx('A4 (8.3×11.7)', 'A4 (8.3×11.7)'), width: 8.3, height: 11.7 },
    { name: tx('Letter (8.5×11)', 'Carta (8.5×11)'), width: 8.5, height: 11 },
  ];

  const applyPreset = (width: number, height: number) => {
    setWidthInches(width);
    setHeightInches(height);
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
            "name": tx('Resize to Inches - Free Online Image Resizing Tool', 'Redimensionar a pulgadas - Herramienta online gratis'),
            "description": tx(
              'Free online tool to resize images to exact inch dimensions with custom DPI/PPI settings. Perfect for printing photos and documents with precise physical dimensions.',
              'Herramienta online gratis para redimensionar imagenes a pulgadas exactas con configuracion DPI/PPI. Ideal para imprimir fotos y documentos con dimensiones fisicas precisas.'
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
              tx('Resize images by inches', 'Redimensionar imagenes por pulgadas'),
              tx('Custom DPI/PPI settings', 'Configuracion DPI/PPI personalizada'),
              tx('Print-ready dimensions', 'Dimensiones listas para impresion'),
              tx('Aspect ratio lock', 'Bloqueo de relacion de aspecto'),
              tx('Common size presets', 'Preajustes de tamano comun'),
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
            "name": tx('How to Resize Images to Inches', 'Como redimensionar imagenes a pulgadas'),
            "description": tx(
              'Learn how to resize images to exact inch dimensions for printing online for free',
              'Aprende a redimensionar imagenes a pulgadas exactas para impresion online gratis'
            ),
            "image": "https://pixselli.com/images/resize-inches-guide.jpg",
            "totalTime": "PT2M",
            "supply": [
              {
                "@type": "HowToSupply",
                "name": tx('Image File', 'Archivo de imagen')
              }
            ],
            "tool": [
              {
                "@type": "HowToTool",
                "name": tx('Pixselli Resize to Inches Tool', 'Herramienta de Pixselli para redimensionar a pulgadas')
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": tx('Upload Image', 'Subir imagen'),
                "text": tx(
                  'Upload your image by dragging and dropping or clicking to browse. Supports JPG, PNG, WebP formats',
                  'Sube tu imagen arrastrando y soltando o haciendo clic para buscar. Compatible con JPG, PNG y WebP'
                ),
                "url": `${pageUrl}#step1`
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": tx('Set Dimensions', 'Definir dimensiones'),
                "text": tx(
                  'Enter desired width and height in inches. Choose a preset size or enter custom dimensions',
                  'Ingresa el ancho y alto deseados en pulgadas. Elige un preajuste o introduce dimensiones personalizadas'
                ),
                "url": `${pageUrl}#step2`
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": tx('Set DPI/PPI', 'Definir DPI/PPI'),
                "text": tx(
                  'Select DPI resolution: 72 for web, 150 for draft prints, 300 for high-quality printing',
                  'Selecciona resolucion DPI: 72 para web, 150 para borradores y 300 para impresion de alta calidad'
                ),
                "url": `${pageUrl}#step3`
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": tx('Resize & Download', 'Redimensionar y descargar'),
                "text": tx(
                  "Click 'Resize Image' to process and download your print-ready image",
                  "Haz clic en 'Redimensionar imagen' para procesar y descargar tu imagen lista para impresion"
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
                "name": tx('What DPI should I use for printing?', 'Que DPI debo usar para imprimir?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'For high-quality printing, use 300 DPI. For draft prints or large posters, 150 DPI is sufficient. For web/screen display, use 72 DPI.',
                    'Para impresion de alta calidad usa 300 DPI. Para borradores o posters grandes, 150 DPI es suficiente. Para web o pantalla, usa 72 DPI.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('How do inches relate to pixels?', 'Como se relacionan las pulgadas con los pixeles?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'Pixels = Inches × DPI. For example, 8 inches at 300 DPI = 2400 pixels. The DPI setting determines how many pixels fit in one inch.',
                    'Pixeles = Pulgadas × DPI. Por ejemplo, 8 pulgadas a 300 DPI = 2400 pixeles. El ajuste DPI determina cuantos pixeles caben en una pulgada.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('Can I maintain aspect ratio while resizing?', 'Puedo mantener la relacion de aspecto al redimensionar?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    "Yes! Enable the 'Lock Aspect Ratio' option to automatically adjust height when you change width (or vice versa) to prevent distortion.",
                    "Si. Activa la opcion 'Bloquear relacion de aspecto' para ajustar automaticamente el alto cuando cambias el ancho (o viceversa) y evitar distorsion."
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('What are common print sizes?', 'Cuales son los tamanos de impresion comunes?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'Common photo print sizes include 4×6, 5×7, 8×10, and 11×14 inches. For documents, use 8.5×11 (Letter) or 8.3×11.7 (A4).',
                    'Los tamanos comunes de fotos incluyen 4×6, 5×7, 8×10 y 11×14 pulgadas. Para documentos, usa 8.5×11 (Carta) u 8.3×11.7 (A4).'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('Is my image secure when resizing?', 'Mi imagen esta segura al redimensionar?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'Yes! All processing happens locally in your browser. Your images are never uploaded to any server, ensuring complete privacy and security.',
                    'Si. Todo el procesamiento ocurre localmente en tu navegador. Tus imagenes nunca se suben a ningun servidor.'
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
            "name": tx('Pixselli Resize to Inches Tool', 'Herramienta de Pixselli para redimensionar a pulgadas'),
            "applicationCategory": "MultimediaApplication",
            "applicationSubCategory": "Image Resizing",
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
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
                  className="hover:text-blue-600 transition-colors"
                >
                  <span itemProp="name">{tx('Home', 'Inicio')}</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-gray-400">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="text-gray-900 font-medium">{tx('Resize to Inches', 'Redimensionar a pulgadas')}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Ruler className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {tx('Resize Image to Inches', 'Redimensionar imagen a pulgadas')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {tx(
                'Resize images to exact inch dimensions with custom DPI/PPI settings. Perfect for creating print-ready photos and documents with precise physical dimensions. Fast, secure, and works entirely in your browser.',
                'Redimensiona imagenes a pulgadas exactas con configuracion DPI/PPI personalizada. Ideal para crear fotos y documentos listos para impresion con medidas fisicas precisas.'
              )}
            </p>
          </header>

          {/* Main Content - 2 Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
            
            {/* Left Column - Upload & Preview */}
            <div className="flex flex-col">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Upload className="w-6 h-6 text-blue-600" />
                  {tx('Upload & Preview', 'Subir y previsualizar')}
                </h2>

                {!imageState.originalUrl ? (
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="relative border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 bg-gradient-to-br from-gray-50 to-gray-100 transition-all cursor-pointer group"
                    style={{ overflow: 'hidden' }}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {/* Decorative elements */}
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
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <p className="text-gray-500 text-xs mb-1">{tx('Current Size', 'Tamano actual')}</p>
                        <p className="font-semibold text-gray-900">{imageState.originalWidth} × {imageState.originalHeight} px</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <p className="text-gray-500 text-xs mb-1">{tx('Current (@', 'Actual (@')} {dpi} DPI)</p>
                        <p className="font-semibold text-gray-900">{calculateInches(imageState.originalWidth, dpi)} × {calculateInches(imageState.originalHeight, dpi)} in</p>
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
                  <Ruler className="w-6 h-6 text-blue-600" />
                  {tx('Resize Settings', 'Configuracion de redimensionado')}
                </h2>

                {imageState.originalUrl ? (
                  <div className="space-y-6">
                    {/* Size Presets */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        {tx('Quick Presets', 'Preajustes rapidos')}
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {presets.map((preset) => (
                          <button
                            key={preset.name}
                            onClick={() => applyPreset(preset.width, preset.height)}
                            className="py-2 px-3 bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-lg transition-colors text-xs font-medium border border-gray-200 hover:border-blue-300"
                          >
                            {preset.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Width Input */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {tx('Width (inches)', 'Ancho (pulgadas)')}
                      </label>
                      <input
                        type="number"
                        value={widthInches}
                        onChange={(e) => handleWidthChange(parseFloat(e.target.value) || 0)}
                        step="0.1"
                        min="0.1"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        = {calculatePixels(widthInches, dpi)} {tx('pixels', 'pixeles')} @ {dpi} DPI
                      </p>
                    </div>

                    {/* Height Input */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {tx('Height (inches)', 'Alto (pulgadas)')}
                      </label>
                      <input
                        type="number"
                        value={heightInches}
                        onChange={(e) => handleHeightChange(parseFloat(e.target.value) || 0)}
                        step="0.1"
                        min="0.1"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        = {calculatePixels(heightInches, dpi)} {tx('pixels', 'pixeles')} @ {dpi} DPI
                      </p>
                    </div>

                    {/* Aspect Ratio Lock */}
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="aspectRatio"
                        checked={maintainAspectRatio}
                        onChange={(e) => setMaintainAspectRatio(e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <label htmlFor="aspectRatio" className="text-sm font-medium text-gray-700 cursor-pointer">
                        {tx('Lock Aspect Ratio', 'Bloquear relacion de aspecto')}
                      </label>
                    </div>

                    {/* DPI Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {tx('DPI / PPI Resolution', 'Resolucion DPI / PPI')}
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[72, 150, 300].map((dpiValue) => (
                          <button
                            key={dpiValue}
                            onClick={() => setDpi(dpiValue)}
                            className={`py-2 px-3 rounded-lg transition-all text-sm font-medium ${
                              dpi === dpiValue
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {dpiValue}
                          </button>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        {dpi === 72 && tx('72 DPI - Web/Screen display', '72 DPI - Visualizacion web/pantalla')}
                        {dpi === 150 && tx('150 DPI - Draft prints', '150 DPI - Impresiones de borrador')}
                        {dpi === 300 && tx('300 DPI - High-quality printing', '300 DPI - Impresion de alta calidad')}
                      </p>
                    </div>

                    {/* Output Format */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 mb-3">{tx('Output Formats', 'Formatos de salida')}</h3>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          onClick={() => handleOutputFormatToggle('image/jpeg')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${selectedOutputFormats.includes('image/jpeg') ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                          type="button"
                        >
                          JPG
                        </button>
                        <button
                          onClick={() => handleOutputFormatToggle('image/png')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${selectedOutputFormats.includes('image/png') ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                          type="button"
                        >
                          PNG
                        </button>
                        <button
                          onClick={() => handleOutputFormatToggle('image/webp')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${selectedOutputFormats.includes('image/webp') ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                          type="button"
                        >
                          WebP
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        {tx('Select one or more formats. Multiple selections download as ZIP.', 'Selecciona uno o mas formatos. Varias selecciones se descargan en ZIP.')}
                      </p>
                    </div>

                    {/* Info Box */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Ruler className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-blue-900 font-medium mb-1">
                            {tx('Output Dimensions', 'Dimensiones de salida')}
                          </p>
                          <p className="text-xs text-blue-700">
                            {getOutputDimensionsText(
                              widthInches,
                              heightInches,
                              dpi,
                              calculatePixels(widthInches, dpi),
                              calculatePixels(heightInches, dpi)
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
                        className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {processing ? tx('Resizing...', 'Redimensionando...') : tx('Resize Image', 'Redimensionar imagen')}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Ruler className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Ready to Resize', 'Listo para redimensionar')}</h3>
                      <p className="text-gray-600 max-w-sm mx-auto">
                        {tx('Upload an image to start resizing to exact inch dimensions', 'Sube una imagen para comenzar a redimensionar a pulgadas exactas')}
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
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">{tx('Resized Image', 'Imagen redimensionada')}</h3>
                  <div className="relative rounded-xl overflow-hidden bg-gray-100 mb-4">
                    <img
                      src={imageState.processedUrl}
                      alt={tx('Resized image', 'Imagen redimensionada')}
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                      {widthInches}″ × {heightInches}″
                    </div>
                  </div>
                  <button
                    onClick={downloadImage}
                    className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all font-bold shadow-lg flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    {outputVariants.length > 1
                      ? tx('Download All Formats (ZIP)', 'Descargar todos los formatos (ZIP)')
                      : tx('Download Resized Image', 'Descargar imagen redimensionada')}
                  </button>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-700">{tx('Resize Details', 'Detalles del redimensionado')}</h3>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Physical Size:', 'Tamano fisico:')}</span>
                      <span className="text-sm font-semibold text-gray-900">{widthInches}″ × {heightInches}″</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Pixel Dimensions:', 'Dimensiones en pixeles:')}</span>
                      <span className="text-sm font-semibold text-gray-900">{calculatePixels(widthInches, dpi)} × {calculatePixels(heightInches, dpi)} px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Resolution:', 'Resolucion:')}</span>
                      <span className="text-sm font-semibold text-gray-900">{dpi} DPI</span>
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
                      <Maximize2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-emerald-900 font-medium mb-1">
                          {tx('Print-Ready', 'Lista para impresion')}
                        </p>
                        <p className="text-xs text-emerald-700">
                          {getPrintReadyText(widthInches, heightInches, dpi)}
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
                          {tx('All processing happens in your browser. Your images never leave your device.', 'Todo el procesamiento ocurre en tu navegador. Tus imagenes nunca salen de tu dispositivo.')}
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About Resize to Inches Tool', 'Acerca de la herramienta para redimensionar a pulgadas')}</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                {tx(
                  'Our free online resize to inches tool helps you resize images to exact inch dimensions with custom DPI/PPI settings. Perfect for creating print-ready photos and documents with precise physical dimensions for printing on paper, canvas, or other media.',
                  'Nuestra herramienta online gratuita para redimensionar a pulgadas te ayuda a cambiar imagenes a medidas exactas con DPI/PPI personalizado. Es ideal para fotos y documentos listos para imprimir en papel, lienzo u otros medios.'
                )}
              </p>
              <p>
                {tx(
                  'Simply upload your image, enter your desired dimensions in inches, select the appropriate DPI resolution (72 for web, 150 for draft, 300 for high-quality printing), and resize. The tool automatically calculates the exact pixel dimensions needed. All processing happens in your browser, ensuring your images remain private and secure. No registration required, completely free to use.',
                  'Solo sube tu imagen, introduce las dimensiones deseadas en pulgadas, selecciona la resolucion DPI adecuada (72 para web, 150 para borrador, 300 para alta calidad) y redimensiona. La herramienta calcula automaticamente los pixeles exactos necesarios. Todo el procesamiento ocurre en tu navegador y no requiere registro.'
                )}
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto" aria-labelledby="features-heading">
            <h2 id="features-heading" className="sr-only">{tx('Key Features', 'Caracteristicas clave')}</h2>
            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Ruler className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Exact Dimensions', 'Dimensiones exactas')}</h3>
              <p className="text-gray-600">
                {tx('Resize to precise inch dimensions with custom DPI settings.', 'Redimensiona a pulgadas exactas con ajustes DPI personalizados.')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Maximize2 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Print-Ready', 'Lista para impresion')}</h3>
              <p className="text-gray-600">
                {tx('Create images ready for professional printing with proper DPI.', 'Crea imagenes listas para impresion profesional con DPI adecuado.')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('100% Secure', '100% Seguro')}</h3>
              <p className="text-gray-600">
                {tx('All processing happens locally in your browser for privacy.', 'Todo el procesamiento ocurre localmente en tu navegador para mayor privacidad.')}
              </p>
            </div>
          </section>

          {/* How to Use */}
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-8 border border-blue-200 max-w-4xl mx-auto mb-12" aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="text-2xl font-bold text-gray-900 mb-8 text-center">{tx('How to Use Resize to Inches Tool', 'Como usar la herramienta para redimensionar a pulgadas')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Upload Your Image', 'Sube tu imagen')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Click the upload area or drag and drop your photo. Supports JPG, PNG, WebP formats.', 'Haz clic en el area de subida o arrastra tu foto. Compatible con JPG, PNG y WebP.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Set Dimensions', 'Definir dimensiones')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Enter width and height in inches. Use presets or enter custom dimensions.', 'Ingresa ancho y alto en pulgadas. Usa preajustes o dimensiones personalizadas.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Set DPI/PPI', 'Definir DPI/PPI')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Choose 72 for web, 150 for draft, or 300 DPI for high-quality printing.', 'Elige 72 para web, 150 para borrador o 300 DPI para impresion de alta calidad.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Resize & Download', 'Redimensionar y descargar')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Click "Resize Image" to process and download your print-ready image.', 'Haz clic en "Redimensionar imagen" para procesar y descargar tu imagen lista para impresion.')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 text-center">
              <p className="text-sm text-blue-800">
                <strong>{tx('Pro Tip:', 'Consejo Pro:')}</strong>{' '}
                {tx('For professional photo printing, use 300 DPI. For large posters or banners, 150 DPI is often sufficient and reduces file size.', 'Para impresion profesional de fotos, usa 300 DPI. Para posters o banners grandes, 150 DPI suele ser suficiente y reduce el tamano del archivo.')}
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
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span>{tx('What DPI should I use for printing?', 'Que DPI debo usar para imprimir?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 0 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 0 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('For high-quality printing, use 300 DPI. For draft prints or large posters, 150 DPI is sufficient. For web/screen display, use 72 DPI.', 'Para impresion de alta calidad usa 300 DPI. Para borradores o posters grandes, 150 DPI es suficiente. Para web o pantalla, usa 72 DPI.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(1)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span>{tx('How do inches relate to pixels?', 'Como se relacionan las pulgadas con los pixeles?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 1 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 1 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Pixels = Inches × DPI. For example, 8 inches at 300 DPI = 2400 pixels. The DPI setting determines how many pixels fit in one inch.', 'Pixeles = Pulgadas × DPI. Por ejemplo, 8 pulgadas a 300 DPI = 2400 pixeles. El ajuste DPI determina cuantos pixeles caben en una pulgada.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(2)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span>{tx('Can I maintain aspect ratio while resizing?', 'Puedo mantener la relacion de aspecto al redimensionar?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 2 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 2 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Yes! Enable the \"Lock Aspect Ratio\" option to automatically adjust height when you change width (or vice versa) to prevent distortion.', 'Si. Activa la opcion "Bloquear relacion de aspecto" para ajustar automaticamente el alto cuando cambias el ancho (o viceversa) y evitar distorsion.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(3)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span>{tx('What are common print sizes?', 'Cuales son los tamanos de impresion comunes?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 3 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 3 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Common photo print sizes include 4×6, 5×7, 8×10, and 11×14 inches. For documents, use 8.5×11 (Letter) or 8.3×11.7 (A4).', 'Los tamanos comunes de impresion de fotos incluyen 4×6, 5×7, 8×10 y 11×14 pulgadas. Para documentos, usa 8.5×11 (Carta) u 8.3×11.7 (A4).')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(4)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span>{tx('Is my image secure when resizing?', 'Mi imagen esta segura al redimensionar?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 4 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 4 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Yes! All processing happens locally in your browser. Your images are never uploaded to any server, ensuring complete privacy and security.', 'Si. Todo el procesamiento ocurre localmente en tu navegador. Tus imagenes nunca se suben a ningun servidor.')}</p>
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
