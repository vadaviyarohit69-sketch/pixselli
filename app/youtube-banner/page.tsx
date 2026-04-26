"use client";

import { normalizeFileToken } from '@/lib/unifiedOutputProcessor';
import { useLanguage } from '@/components/LanguageProvider';
import { getLocaleBasePath } from '@/lib/i18n';
import { IMAGE_RESIZER_TEXT_BY_LOCALE } from '@/lib/imageResizerTranslations';
import { YOUTUBE_BANNER_TEXT_BY_LOCALE } from '@/lib/youtubeBannerTranslations';
import { useState, useRef, useCallback } from 'react';
import { AlertCircle, Upload, Download, RotateCcw, RotateCw, Image as ImageIcon, Maximize2, Minimize2, Lock, Unlock, Info, ChevronDown, ChevronUp, Shield, Check, CheckCircle, CheckCircle2, Plus, X, FolderArchive, Crop, Move, ZoomIn, ZoomOut, RefreshCw, Gauge, Percent, Ruler, Train, Calendar, Droplet, Type, Contrast, Palette, Eye, Scan, Target, Mail, FileText, Globe, MessageCircle, FlipHorizontal, FlipVertical, Zap, Youtube, Monitor, Smartphone, Tv, Camera, User, PenTool } from "lucide-react";
import JSZip from 'jszip';

interface ImageState {
  originalFile: File | null;
  originalUrl: string;
  processedUrl: string;
}

type OutputFormat = 'image/jpeg' | 'image/png' | 'image/webp';

interface OutputVariant {
  format: OutputFormat;
  label: 'JPG' | 'PNG' | 'WebP';
  extension: 'jpg' | 'png' | 'webp';
  blob: Blob;
  url: string;
}

const YOUTUBE_DIMENSIONS = {
  width: 2560,
  height: 1440,
  safeWidth: 1546,
  safeHeight: 423,
};

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
        YOUTUBE_BANNER_TEXT_BY_LOCALE[locale]?.[en] ||
        IMAGE_RESIZER_TEXT_BY_LOCALE[locale]?.[en] ||
        en
      );
    },
    [locale]
  );
  const localeBasePath = getLocaleBasePath(locale);
  const pagePath = localeBasePath ? `${localeBasePath}/youtube-banner` : '/youtube-banner';
  const pageUrl = `https://pixselli.com${pagePath}`;
  const homePath = localeBasePath || '/';

  const [imageState, setImageState] = useState<ImageState>({
    originalFile: null,
    originalUrl: '',
    processedUrl: '',
  });
  
  const [processing, setProcessing] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [showGuides, setShowGuides] = useState(true);
  const [selectedOutputFormats, setSelectedOutputFormats] = useState<OutputFormat[]>(['image/png', 'image/jpeg']);
  const [outputVariants, setOutputVariants] = useState<OutputVariant[]>([]);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

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
      });
      processImageToCanvas(img);
    };

    img.src = url;
  }, [tx]);

  const processImageToCanvas = (img: HTMLImageElement) => {
    const canvas = previewCanvasRef.current;
    if (!canvas) return;

    canvas.width = YOUTUBE_DIMENSIONS.width;
    canvas.height = YOUTUBE_DIMENSIONS.height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fill with white background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Calculate scaling to cover entire canvas
    const scale = Math.max(
      canvas.width / img.width,
      canvas.height / img.height
    );

    const scaledWidth = img.width * scale;
    const scaledHeight = img.height * scale;

    const x = (canvas.width - scaledWidth) / 2;
    const y = (canvas.height - scaledHeight) / 2;

    // Draw image
    ctx.drawImage(img, x, y, scaledWidth, scaledHeight);

    // Draw guides if enabled
    if (showGuides) {
      drawGuides(ctx);
    }
  };

  const drawGuides = (ctx: CanvasRenderingContext2D) => {
    const centerX = YOUTUBE_DIMENSIONS.width / 2;
    const centerY = YOUTUBE_DIMENSIONS.height / 2;
    
    const safeX = (YOUTUBE_DIMENSIONS.width - YOUTUBE_DIMENSIONS.safeWidth) / 2;
    const safeY = (YOUTUBE_DIMENSIONS.height - YOUTUBE_DIMENSIONS.safeHeight) / 2;

    // Draw safe area rectangle
    ctx.strokeStyle = 'rgba(255, 0, 0, 0.6)';
    ctx.lineWidth = 3;
    ctx.setLineDash([10, 5]);
    ctx.strokeRect(safeX, safeY, YOUTUBE_DIMENSIONS.safeWidth, YOUTUBE_DIMENSIONS.safeHeight);

    // Draw center lines
    ctx.strokeStyle = 'rgba(0, 255, 0, 0.4)';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    
    // Vertical center line
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, YOUTUBE_DIMENSIONS.height);
    ctx.stroke();

    // Horizontal center line
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(YOUTUBE_DIMENSIONS.width, centerY);
    ctx.stroke();

    // Reset line dash
    ctx.setLineDash([]);

    // Add labels
    ctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
    ctx.font = 'bold 24px Arial';
    ctx.fillText(tx('SAFE AREA (1546×423)', 'AREA SEGURA (1546×423)'), safeX + 20, safeY + 40);
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillText(tx('Full Size: 2560×1440', 'Tamano completo: 2560×1440'), 20, 40);
  };

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

  const toggleGuides = () => {
    setShowGuides(!showGuides);
    if (imageState.originalUrl) {
      const img = new Image();
      img.onload = () => processImageToCanvas(img);
      img.src = imageState.originalUrl;
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

      canvas.width = YOUTUBE_DIMENSIONS.width;
      canvas.height = YOUTUBE_DIMENSIONS.height;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Fill with white background
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Calculate scaling to cover entire canvas
      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );

      const scaledWidth = img.width * scale;
      const scaledHeight = img.height * scale;

      const x = (canvas.width - scaledWidth) / 2;
      const y = (canvas.height - scaledHeight) / 2;

      // Draw image without guides
      ctx.drawImage(img, x, y, scaledWidth, scaledHeight);

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

      setImageState(prev => ({
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

    const baseName = 'youtube-banner-2560x1440';

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
    setImageState({ originalFile: null, originalUrl: '', processedUrl: '' });
    setShowGuides(true);
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
            "name": tx('YouTube Banner Maker - Free Online Tool', 'Creador de banner de YouTube - Herramienta gratis online'),
            "description": tx(
              'Free online tool to create YouTube channel banners with perfect dimensions (2560x1440). Features safe area guides and automatic sizing for optimal display across all devices.',
              'Herramienta online gratis para crear banners de canal de YouTube con dimensiones perfectas (2560x1440). Incluye guias de area segura y ajuste automatico para todos los dispositivos.'
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
              tx('YouTube banner creator', 'Creador de banner para YouTube'),
              tx('2560x1440 optimal dimensions', 'Dimensiones optimas 2560x1440'),
              tx('Safe area guides', 'Guias de area segura'),
              tx('Device preview guides', 'Guias de vista por dispositivo'),
              tx('Automatic image scaling', 'Escalado automatico de imagen'),
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
            "name": tx('How to Create YouTube Channel Banner', 'Como crear un banner de canal de YouTube'),
            "description": tx(
              'Learn how to create perfectly sized YouTube channel banners with safe area guides online for free',
              'Aprende a crear banners de canal de YouTube con tamano perfecto y guias de area segura online gratis'
            ),
            "image": "https://pixselli.com/images/youtube-banner-guide.jpg",
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
                "name": tx('Pixselli YouTube Banner Maker', 'Creador de banners de YouTube de Pixselli')
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": tx('Upload Image', 'Subir imagen'),
                "text": tx(
                  'Upload your banner image by dragging and dropping or clicking to browse. Any size image works',
                  'Sube tu imagen de banner arrastrando y soltando o haciendo clic para buscar. Cualquier tamano funciona'
                ),
                "url": `${pageUrl}#step1`
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": tx('Preview with Guides', 'Vista previa con guias'),
                "text": tx(
                  'View safe area guides showing where your content will be visible on all devices',
                  'Visualiza guias de area segura que muestran donde sera visible tu contenido en todos los dispositivos'
                ),
                "url": `${pageUrl}#step2`
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": tx('Generate Banner', 'Generar banner'),
                "text": tx(
                  "Click 'Create Banner' to generate your YouTube banner at perfect 2560x1440 dimensions",
                  "Haz clic en 'Crear banner' para generar tu banner de YouTube en dimensiones perfectas de 2560x1440"
                ),
                "url": `${pageUrl}#step3`
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": tx('Download & Upload', 'Descargar y subir'),
                "text": tx(
                  'Download your banner and upload it to your YouTube channel settings',
                  'Descarga tu banner y subelo en la configuracion de tu canal de YouTube'
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
                "name": tx('What size should a YouTube banner be?', 'Que tamano debe tener un banner de YouTube?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'YouTube recommends 2560x1440 pixels for channel banners. The safe area (visible on all devices) is 1546x423 pixels in the center.',
                    'YouTube recomienda 2560x1440 pixeles para banners de canal. El area segura (visible en todos los dispositivos) es 1546x423 pixeles en el centro.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('What is the YouTube banner safe area?', 'Que es el area segura del banner de YouTube?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    "The safe area is the central 1546x423 pixel region that's guaranteed to be visible on all devices (desktop, mobile, TV). Important content like text and logos should be placed here.",
                    'El area segura es la region central de 1546x423 pixeles que se ve en todos los dispositivos (escritorio, movil y TV). El contenido importante debe colocarse ahi.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('Can I use any image for my YouTube banner?', 'Puedo usar cualquier imagen para mi banner de YouTube?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'Yes! Upload any image and our tool will automatically scale and position it to fit the YouTube banner dimensions perfectly.',
                    'Si. Sube cualquier imagen y nuestra herramienta la escalara y posicionara automaticamente para ajustarla al banner de YouTube.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('How do I upload my banner to YouTube?', 'Como subo mi banner a YouTube?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    "Go to YouTube Studio > Customization > Branding, click 'Upload' under Banner image, and select your downloaded banner file.",
                    "Ve a YouTube Studio > Personalizacion > Marca, haz clic en 'Subir' en Imagen del banner y selecciona tu archivo descargado."
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('Is my image secure when creating a YouTube banner?', 'Mi imagen es segura al crear un banner de YouTube?'),
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
            "name": tx('Pixselli YouTube Banner Maker', 'Creador de banners de YouTube de Pixselli'),
            "applicationCategory": "MultimediaApplication",
            "applicationSubCategory": "Image Editing",
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 py-12 px-4">
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
                  className="hover:text-red-600 transition-colors"
                >
                  <span itemProp="name">{tx('Home', 'Inicio')}</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-gray-400">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="text-gray-900 font-medium">{tx('YouTube Banner', 'Banner de YouTube')}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Youtube className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {tx('YouTube Banner Maker', 'Creador de banners de YouTube')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {tx(
                'Create perfect YouTube channel banners with optimal dimensions (2560×1440). Features safe area guides to ensure your content looks great on desktop, mobile, and TV. Fast, secure, and works entirely in your browser.',
                'Crea banners perfectos para tu canal de YouTube con dimensiones optimas (2560×1440). Incluye guias de area segura para escritorio, movil y TV. Rapido, seguro y funciona totalmente en tu navegador.'
              )}
            </p>
          </header>

          {/* Main Content - 2 Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
            
            {/* Left Column - Upload & Preview */}
            <div className="flex flex-col">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Upload className="w-6 h-6 text-red-600" />
                  {tx('Upload & Preview', 'Subir y previsualizar')}
                </h2>

                {!imageState.originalUrl ? (
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="relative border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-red-400 hover:bg-gradient-to-br hover:from-red-50 hover:to-orange-50 bg-gradient-to-br from-gray-50 to-gray-100 transition-all cursor-pointer group"
                    style={{ overflow: 'hidden' }}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {/* Decorative elements */}
                    <div className="absolute top-4 left-4 w-20 h-20 bg-red-100 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" style={{ pointerEvents: 'none' }}></div>
                    <div className="absolute bottom-4 right-4 w-24 h-24 bg-orange-100 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" style={{ pointerEvents: 'none' }}></div>
                    
                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
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
                    <div className="relative rounded-xl overflow-hidden bg-gray-900">
                      <canvas
                        ref={previewCanvasRef}
                        className="w-full h-auto"
                        style={{ maxHeight: '400px', objectFit: 'contain' }}
                      />
                    </div>
                    <button
                      onClick={toggleGuides}
                      className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium"
                    >
                      {showGuides ? tx('Hide Guides', 'Ocultar guias') : tx('Show Guides', 'Mostrar guias')}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Controls */}
            <div className="flex flex-col">
              {/* Controls Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Youtube className="w-6 h-6 text-red-600" />
                  {tx('Banner Settings', 'Configuracion del banner')}
                </h2>

                {imageState.originalUrl ? (
                  <div className="space-y-6">
                    {/* Dimensions Info */}
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                      <h3 className="text-sm font-semibold text-gray-700 mb-4">{tx('YouTube Dimensions', 'Dimensiones de YouTube')}</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">{tx('Full Size:', 'Tamano completo:')}</span>
                          <span className="text-sm font-semibold text-gray-900">2560 × 1440 px</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">{tx('Safe Area:', 'Area segura:')}</span>
                          <span className="text-sm font-semibold text-red-600">1546 × 423 px</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">{tx('File Format:', 'Formato de archivo:')}</span>
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
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${selectedOutputFormats.includes('image/jpeg') ? 'bg-red-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                          type="button"
                        >
                          JPG
                        </button>
                        <button
                          onClick={() => handleOutputFormatToggle('image/png')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${selectedOutputFormats.includes('image/png') ? 'bg-red-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                          type="button"
                        >
                          PNG
                        </button>
                        <button
                          onClick={() => handleOutputFormatToggle('image/webp')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${selectedOutputFormats.includes('image/webp') ? 'bg-red-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                          type="button"
                        >
                          WebP
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        {tx('Select one or more formats. Multiple selections download as ZIP.', 'Selecciona uno o mas formatos. Varias selecciones se descargan en ZIP.')}
                      </p>
                    </div>

                    {/* Device Visibility Info */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold text-gray-700">{tx('Device Visibility', 'Visibilidad por dispositivo')}</h3>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Monitor className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-blue-900 font-medium">{tx('Desktop', 'Escritorio')}</p>
                            <p className="text-xs text-blue-700">{tx('Full banner visible (2560×1440)', 'Banner completo visible (2560×1440)')}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Smartphone className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-emerald-900 font-medium">{tx('Mobile', 'Movil')}</p>
                            <p className="text-xs text-emerald-700">{tx('Safe area visible (1546×423)', 'Area segura visible (1546×423)')}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Tv className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-purple-900 font-medium">TV</p>
                            <p className="text-xs text-purple-700">{tx('Extended view (2560×1440)', 'Vista extendida (2560×1440)')}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Info Box */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Youtube className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-red-900 font-medium mb-1">
                            {tx('Safe Area Guide', 'Guia de area segura')}
                          </p>
                          <p className="text-xs text-red-700">
                            {tx('Keep important content (text, logos) within the red safe area to ensure visibility on all devices.', 'Manten el contenido importante (texto, logos) dentro del area roja segura para asegurar visibilidad en todos los dispositivos.')}
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
                        className="flex-1 py-3 px-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg transition-all font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {processing ? tx('Creating...', 'Creando...') : tx('Create Banner', 'Crear banner')}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Youtube className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Ready to Create', 'Listo para crear')}</h3>
                      <p className="text-gray-600 max-w-sm mx-auto">
                        {tx('Upload an image to create your perfect YouTube channel banner', 'Sube una imagen para crear tu banner perfecto de canal de YouTube')}
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
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">{tx('YouTube Banner (2560×1440)', 'Banner de YouTube (2560×1440)')}</h3>
                  <div className="relative rounded-xl overflow-hidden bg-gray-100 mb-4">
                    <img
                      src={imageState.processedUrl}
                      alt={tx('YouTube Banner', 'Banner de YouTube')}
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                      2560 × 1440 px
                    </div>
                  </div>
                  <button
                    onClick={downloadImage}
                    className="w-full py-4 px-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg transition-all font-bold shadow-lg flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    {outputVariants.length > 1
                      ? tx('Download All Formats (ZIP)', 'Descargar todos los formatos (ZIP)')
                      : tx('Download YouTube Banner', 'Descargar banner de YouTube')}
                  </button>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-700">{tx('Banner Details', 'Detalles del banner')}</h3>
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Dimensions:', 'Dimensiones:')}</span>
                      <span className="text-sm font-semibold text-gray-900">2560 × 1440 px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Safe Area:', 'Area segura:')}</span>
                      <span className="text-sm font-semibold text-red-600">1546 × 423 px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Format:', 'Formato:')}</span>
                      <span className="text-sm font-semibold text-gray-900">
                        {outputVariants.map((variant) => variant.label).join(', ') || tx('N/A', 'N/D')}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Quality:', 'Calidad:')}</span>
                      <span className="text-sm font-semibold text-emerald-600">{tx('High', 'Alta')}</span>
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
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Youtube className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-blue-900 font-medium mb-1">
                          {tx('How to Upload', 'Como subirlo')}
                        </p>
                        <p className="text-xs text-blue-700">
                          {tx(
                            'Go to YouTube Studio → Customization → Branding → Upload under "Banner image"',
                            'Ve a YouTube Studio → Personalizacion → Marca → Subir en "Imagen del banner"'
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-emerald-900 font-medium mb-1">
                          {tx('100% Private', '100% Privado')}
                        </p>
                        <p className="text-xs text-emerald-700">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About YouTube Banner Maker', 'Acerca del creador de banners de YouTube')}</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                {tx(
                  'Pixselli YouTube Banner Maker is a simple online tool that helps you create channel art in the right size. It makes sure your banner looks clean and professional on desktop, mobile, and TV.',
                  'El creador de banners de YouTube de Pixselli es una herramienta simple que te ayuda a crear arte de canal con el tamano correcto para escritorio, movil y TV.'
                )}
              </p>
              <p>
                {tx(
                  'Just upload your image and the tool automatically fits it to 2560×1440 pixels. The red safe area shows where to keep your text and logo so they are always visible. Everything runs in your browser, your images stay on your device, and the tool is completely free with no signup.',
                  'Solo sube tu imagen y la herramienta la ajusta automaticamente a 2560×1440 pixeles. El area roja segura muestra donde colocar texto y logo para que siempre sean visibles. Todo funciona en tu navegador y es totalmente gratis.'
                )}
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto" aria-labelledby="features-heading">
            <h2 id="features-heading" className="sr-only">{tx('Key Features', 'Caracteristicas clave')}</h2>
            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-red-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Youtube className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Perfect Dimensions', 'Dimensiones perfectas')}</h3>
              <p className="text-gray-600">
                {tx('Automatic sizing to YouTube\'s recommended 2560×1440 pixels.', 'Ajuste automatico al tamano recomendado por YouTube de 2560×1440 pixeles.')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Safe Area Guides', 'Guias de area segura')}</h3>
              <p className="text-gray-600">
                {tx('Visual guides show where content is visible on all devices.', 'Las guias visuales muestran donde se ve el contenido en todos los dispositivos.')}
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
          <section className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl shadow-md p-8 border border-red-200 max-w-4xl mx-auto mb-12" aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="text-2xl font-bold text-gray-900 mb-8 text-center">{tx('How to Use YouTube Banner Maker', 'Como usar el creador de banners de YouTube')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Upload Your Image', 'Sube tu imagen')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Click the upload area or drag and drop your banner image. Any size works.', 'Haz clic en el area de carga o arrastra tu imagen de banner. Cualquier tamano funciona.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Preview with Guides', 'Vista previa con guias')}</h3>
                    <p className="text-gray-600 text-sm">{tx('View safe area guides showing where content will be visible on all devices.', 'Mira las guias de area segura para saber donde sera visible el contenido en todos los dispositivos.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Generate Banner', 'Generar banner')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Click "Create Banner" to generate your perfectly sized YouTube banner.', 'Haz clic en "Crear banner" para generar tu banner de YouTube con tamano perfecto.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Download & Upload', 'Descargar y subir')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Download your banner and upload it to YouTube Studio under channel customization.', 'Descarga tu banner y subelo en YouTube Studio dentro de la personalizacion del canal.')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-red-100 border border-red-200 rounded-lg p-4 text-center">
              <p className="text-sm text-red-800">
                <strong>{tx('Pro Tip:', 'Consejo Pro:')}</strong>{' '}
                {tx('Keep important content like channel name and logos within the safe area (1546×423px center) for visibility on all devices.', 'Mantiene contenido importante como nombre del canal y logos dentro del area segura (centro 1546×423 px) para que se vea en todos los dispositivos.')}
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
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-red-50 transition-colors"
                >
                  <span>{tx('What size should a YouTube banner be?', 'Que tamano debe tener un banner de YouTube?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 0 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 0 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('YouTube recommends 2560x1440 pixels for channel banners. The safe area (visible on all devices) is 1546x423 pixels in the center.', 'YouTube recomienda 2560x1440 pixeles para banners de canal. El area segura (visible en todos los dispositivos) es 1546x423 pixeles en el centro.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(1)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-red-50 transition-colors"
                >
                  <span>{tx('What is the YouTube banner safe area?', 'Que es el area segura del banner de YouTube?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 1 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 1 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('The safe area is the central 1546x423 pixel region that\'s guaranteed to be visible on all devices (desktop, mobile, TV). Important content like text and logos should be placed here.', 'El area segura es la region central de 1546x423 pixeles que se ve en todos los dispositivos (escritorio, movil y TV). El contenido importante como texto y logos debe colocarse ahi.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(2)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-red-50 transition-colors"
                >
                  <span>{tx('Can I use any image for my YouTube banner?', 'Puedo usar cualquier imagen para mi banner de YouTube?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 2 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 2 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Yes! Upload any image and our tool will automatically scale and position it to fit the YouTube banner dimensions perfectly.', 'Si. Sube cualquier imagen y nuestra herramienta la escalara y posicionara automaticamente para ajustarse al banner de YouTube.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(3)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-red-50 transition-colors"
                >
                  <span>{tx('How do I upload my banner to YouTube?', 'Como subo mi banner a YouTube?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 3 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 3 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx("Go to YouTube Studio → Customization → Branding, click 'Upload' under Banner image, and select your downloaded banner file.", "Ve a YouTube Studio → Personalizacion → Marca, haz clic en 'Subir' en Imagen del banner y selecciona tu archivo descargado.")}</p>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(4)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-red-50 transition-colors"
                >
                  <span>{tx('Is my image secure when creating a YouTube banner?', 'Mi imagen es segura al crear un banner de YouTube?')}</span>
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
