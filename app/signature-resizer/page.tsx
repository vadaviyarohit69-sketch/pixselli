"use client";

import { normalizeFileToken } from '@/lib/unifiedOutputProcessor';
import { useLanguage } from '@/components/LanguageProvider';
import { getLocaleBasePath } from '@/lib/i18n';
import { IMAGE_RESIZER_TEXT_BY_LOCALE } from '@/lib/imageResizerTranslations';
import { SIGNATURE_RESIZER_TEXT_BY_LOCALE } from '@/lib/signatureResizerTranslations';
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
        SIGNATURE_RESIZER_TEXT_BY_LOCALE[locale]?.[en] ||
        IMAGE_RESIZER_TEXT_BY_LOCALE[locale]?.[en] ||
        en
      );
    },
    [locale]
  );
  const localeBasePath = getLocaleBasePath(locale);
  const pagePath = localeBasePath ? `${localeBasePath}/signature-resizer` : '/signature-resizer';
  const pageUrl = `https://pixselli.com${pagePath}`;
  const homePath = localeBasePath || '/';

  const [imageState, setImageState] = useState<ImageState>({
    originalFile: null,
    originalUrl: '',
    processedUrl: '',
    originalWidth: 0,
    originalHeight: 0,
  });
  
  const [widthPx, setWidthPx] = useState(300);
  const [heightPx, setHeightPx] = useState(100);
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('transparent');
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
      
      // Set initial dimensions based on image with max 300px width
      const scale = Math.min(300 / img.width, 1);
      setWidthPx(Math.round(img.width * scale));
      setHeightPx(Math.round(img.height * scale));
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

  const handleWidthChange = (value: number) => {
    setWidthPx(value);
    if (maintainAspectRatio && imageState.originalWidth > 0) {
      const aspectRatio = imageState.originalHeight / imageState.originalWidth;
      setHeightPx(Math.round(value * aspectRatio));
    }
  };

  const handleHeightChange = (value: number) => {
    setHeightPx(value);
    if (maintainAspectRatio && imageState.originalHeight > 0) {
      const aspectRatio = imageState.originalWidth / imageState.originalHeight;
      setWidthPx(Math.round(value * aspectRatio));
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

      canvas.width = widthPx;
      canvas.height = heightPx;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set background color
      if (backgroundColor !== 'transparent') {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Draw resized signature
      ctx.drawImage(img, 0, 0, widthPx, heightPx);

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
  }, [imageState.originalUrl, widthPx, heightPx, backgroundColor, selectedOutputFormats]);

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

    const baseName = `signature_${widthPx}x${heightPx}`;

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
      const scale = Math.min(300 / imageState.originalWidth, 1);
      setWidthPx(Math.round(imageState.originalWidth * scale));
      setHeightPx(Math.round(imageState.originalHeight * scale));
    }
    setOutputVariants((prev) => {
      prev.forEach((variant) => URL.revokeObjectURL(variant.url));
      return [];
    });
    setImageState(prev => ({ ...prev, processedUrl: '' }));
  };

  // Common signature presets for documents
  const presets = [
    { name: tx('Small', 'Pequeno'), width: 200, height: 80, desc: tx('Email signatures', 'Firmas de correo') },
    { name: tx('Medium', 'Mediano'), width: 300, height: 100, desc: tx('Standard forms', 'Formularios estandar') },
    { name: tx('Large', 'Grande'), width: 400, height: 120, desc: tx('Legal documents', 'Documentos legales') },
    { name: tx('Wide', 'Ancho'), width: 500, height: 100, desc: tx('Wide format', 'Formato ancho') },
    { name: tx('Square', 'Cuadrado'), width: 150, height: 150, desc: tx('Avatar style', 'Estilo avatar') },
    { name: tx('Custom', 'Personalizado'), width: widthPx, height: heightPx, desc: tx('Your size', 'Tu tamano') },
  ];

  const applyPreset = (width: number, height: number) => {
    setWidthPx(width);
    setHeightPx(height);
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
            "name": tx('Signature Resizer - Free Online Signature Image Resizer', 'Redimensionador de firmas - Herramienta gratis online'),
            "description": tx(
              'Free online tool to resize signature images for forms, documents, emails, and legal papers. Supports transparent backgrounds and custom dimensions.',
              'Herramienta online gratis para redimensionar firmas para formularios, documentos, correos y tramites legales. Soporta fondo transparente y dimensiones personalizadas.'
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
              tx('Resize signature images', 'Redimensionar imagenes de firma'),
              tx('Transparent background support', 'Soporte de fondo transparente'),
              tx('Custom dimensions', 'Dimensiones personalizadas'),
              tx('Document presets', 'Preajustes para documentos'),
              tx('PNG and JPG output', 'Salida en PNG y JPG'),
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
            "name": tx('How to Resize Signature Images', 'Como redimensionar imagenes de firma'),
            "description": tx(
              'Learn how to resize signature images for documents and forms online for free',
              'Aprende a redimensionar imagenes de firma para documentos y formularios gratis online'
            ),
            "image": "https://pixselli.com/images/signature-resizer-guide.jpg",
            "totalTime": "PT2M",
            "supply": [
              {
                "@type": "HowToSupply",
                "name": tx('Signature Image File', 'Archivo de imagen de firma')
              }
            ],
            "tool": [
              {
                "@type": "HowToTool",
                "name": tx('Pixselli Signature Resizer Tool', 'Herramienta de firma de Pixselli')
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": tx('Upload Signature', 'Subir firma'),
                "text": tx(
                  'Upload your signature image by dragging and dropping or clicking to browse. Supports PNG, JPG formats',
                  'Sube tu firma arrastrando y soltando o haciendo clic para buscar. Compatible con PNG y JPG'
                ),
                "url": `${pageUrl}#step1`
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": tx('Choose Size', 'Elegir tamano'),
                "text": tx(
                  'Select a preset size or enter custom dimensions in pixels. Enable aspect ratio lock to prevent distortion',
                  'Selecciona un tamano predefinido o ingresa dimensiones personalizadas en pixeles. Activa el bloqueo de proporcion para evitar deformaciones'
                ),
                "url": `${pageUrl}#step2`
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": tx('Set Background', 'Definir fondo'),
                "text": tx(
                  'Choose transparent background for PNG or white/custom color for JPG format',
                  'Elige fondo transparente para PNG o color blanco/personalizado para JPG'
                ),
                "url": `${pageUrl}#step3`
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": tx('Resize & Download', 'Redimensionar y descargar'),
                "text": tx(
                  "Click 'Resize Signature' to process and download your document-ready signature",
                  "Haz clic en 'Redimensionar firma' para procesar y descargar tu firma lista para documentos"
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
                "name": tx('What size should a signature be for documents?', 'Que tamano debe tener una firma para documentos?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'Standard signature sizes: 200×80px for emails, 300×100px for forms, 400×120px for legal documents. The ideal size depends on your document type and requirements.',
                    'Tamanos estandar: 200×80 px para correos, 300×100 px para formularios y 400×120 px para documentos legales. El tamano ideal depende del tipo de documento.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('Should I use PNG or JPG for signature images?', 'Debo usar PNG o JPG para firmas?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    "Use PNG with transparent background for most documents and emails. Use JPG with white background for forms that don't support transparency or require smaller file sizes.",
                    'Usa PNG con fondo transparente para la mayoria de documentos y correos. Usa JPG con fondo blanco para formularios que no admiten transparencia o requieren menor peso.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('How do I maintain signature quality when resizing?', 'Como mantener la calidad de la firma al redimensionar?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    "Enable 'Lock Aspect Ratio' to prevent distortion. Start with a high-resolution signature scan. Our tool uses high-quality scaling to preserve signature clarity.",
                    "Activa 'Bloquear proporcion' para evitar distorsion. Comienza con una firma de alta resolucion. La herramienta usa escalado de alta calidad para conservar nitidez."
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('Can I remove background from my signature?', 'Puedo quitar el fondo de mi firma?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    "If your signature already has a transparent background (PNG), select 'Transparent' option. For signatures with white backgrounds, you may need to remove the background first using an image editor.",
                    "Si tu firma ya tiene fondo transparente (PNG), selecciona 'Transparente'. Si tiene fondo blanco, puede que necesites quitar el fondo primero con un editor."
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('Is my signature secure when using this tool?', 'Mi firma esta segura al usar esta herramienta?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'Yes! All signature processing happens locally in your browser. Your signature images are never uploaded to any server, ensuring complete privacy and security.',
                    'Si. Todo el procesamiento ocurre localmente en tu navegador. Tus firmas nunca se suben a ningun servidor.'
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
            "name": tx('Pixselli Signature Resizer Tool', 'Herramienta de firma de Pixselli'),
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
                <span itemProp="name" className="text-gray-900 font-medium">{tx('Signature Resizer', 'Redimensionador de firma')}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <PenTool className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {tx('Signature Image Resizer', 'Redimensionador de imagen de firma')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {tx(
                'Resize signature images for forms, documents, emails, and legal papers. Supports transparent backgrounds, custom dimensions, and document presets. Perfect for digital signatures, email signatures, and online forms. Fast, secure, and works entirely in your browser.',
                'Redimensiona firmas para formularios, documentos, correos y tramites legales. Soporta fondo transparente, dimensiones personalizadas y preajustes para documentos. Rapido, seguro y funciona en tu navegador.'
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
                  {tx('Upload Signature', 'Subir firma')}
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
                    <div className="absolute bottom-4 right-4 w-24 h-24 bg-indigo-100 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" style={{ pointerEvents: 'none' }}></div>
                    
                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        <Upload className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-lg font-bold text-gray-800 mb-2">
                        {tx('Drag & drop your signature here', 'Arrastra y suelta tu firma aqui')}
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
                    <div className="relative rounded-xl overflow-hidden bg-gray-100 border-2 border-dashed border-gray-300 p-4">
                      <img
                        src={imageState.originalUrl}
                        alt={tx('Original signature', 'Firma original')}
                        className="w-full h-auto"
                        style={{ maxHeight: '300px', objectFit: 'contain' }}
                      />
                      <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                        {tx('Original', 'Original')}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <p className="text-gray-500 text-xs mb-1">{tx('Original Size', 'Tamano original')}</p>
                        <p className="font-semibold text-gray-900">{imageState.originalWidth} × {imageState.originalHeight} px</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <p className="text-gray-500 text-xs mb-1">{tx('Target Size', 'Tamano objetivo')}</p>
                        <p className="font-semibold text-gray-900">{widthPx} × {heightPx} px</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Controls */}
            <div className="flex flex-col">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Maximize2 className="w-6 h-6 text-blue-600" />
                  {tx('Resize Settings', 'Ajustes de redimensionado')}
                </h2>

                {imageState.originalUrl ? (
                  <div className="space-y-6">
                    {/* Size Presets */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        {tx('Size Presets', 'Preajustes de tamano')}
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {presets.slice(0, 5).map((preset) => (
                          <button
                            key={preset.name}
                            onClick={() => applyPreset(preset.width, preset.height)}
                            className="py-2 px-3 bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-lg transition-colors text-xs font-medium border border-gray-200 hover:border-blue-300"
                          >
                            <div className="font-semibold">{preset.name}</div>
                            <div className="text-xs text-gray-500">{preset.width}×{preset.height}px</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Width Input */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {tx('Width (pixels)', 'Ancho (pixeles)')}
                      </label>
                      <input
                        type="number"
                        value={widthPx}
                        onChange={(e) => handleWidthChange(parseInt(e.target.value) || 0)}
                        step="10"
                        min="10"
                        max="2000"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    {/* Height Input */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {tx('Height (pixels)', 'Alto (pixeles)')}
                      </label>
                      <input
                        type="number"
                        value={heightPx}
                        onChange={(e) => handleHeightChange(parseInt(e.target.value) || 0)}
                        step="10"
                        min="10"
                        max="2000"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
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
                        {tx('Lock Aspect Ratio', 'Bloquear proporcion')}
                      </label>
                    </div>

                    {/* Background Color */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {tx('Background', 'Fondo')}
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          onClick={() => setBackgroundColor('transparent')}
                          className={`py-2 px-3 rounded-lg transition-all text-sm font-medium border-2 ${
                            backgroundColor === 'transparent'
                              ? 'bg-blue-50 text-blue-600 border-blue-500'
                              : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                          }`}
                        >
                          {tx('Transparent', 'Transparente')}
                        </button>
                        <button
                          onClick={() => setBackgroundColor('#FFFFFF')}
                          className={`py-2 px-3 rounded-lg transition-all text-sm font-medium border-2 ${
                            backgroundColor === '#FFFFFF'
                              ? 'bg-blue-50 text-blue-600 border-blue-500'
                              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {tx('White', 'Blanco')}
                        </button>
                        <button
                          onClick={() => setBackgroundColor('#F3F4F6')}
                          className={`py-2 px-3 rounded-lg transition-all text-sm font-medium border-2 ${
                            backgroundColor === '#F3F4F6'
                              ? 'bg-blue-50 text-blue-600 border-blue-500'
                              : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                          }`}
                        >
                          {tx('Gray', 'Gris')}
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        {backgroundColor === 'transparent' && tx('PNG format with transparency', 'Formato PNG con transparencia')}
                        {backgroundColor === '#FFFFFF' && tx('JPG format with white background', 'Formato JPG con fondo blanco')}
                        {backgroundColor === '#F3F4F6' && tx('JPG format with gray background', 'Formato JPG con fondo gris')}
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
                        <PenTool className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-blue-900 font-medium mb-1">
                            {tx('Document Ready', 'Listo para documentos')}
                          </p>
                          <p className="text-xs text-blue-700">
                            {tx('Your signature will be resized to', 'Tu firma se redimensionara a')} {widthPx} × {heightPx} {tx('pixels, perfect for documents and forms.', 'pixeles, ideal para documentos y formularios.')}
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
                        {processing ? tx('Resizing...', 'Redimensionando...') : tx('Resize Signature', 'Redimensionar firma')}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <PenTool className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Ready to Resize', 'Listo para redimensionar')}</h3>
                      <p className="text-gray-600 max-w-sm mx-auto">
                        {tx('Upload your signature image to start resizing for documents and forms', 'Sube tu imagen de firma para comenzar a redimensionar para documentos y formularios')}
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
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">{tx('Resized Signature', 'Firma redimensionada')}</h3>
                  <div className="relative rounded-xl overflow-hidden bg-gray-100 border-2 border-dashed border-gray-300 p-8 mb-4">
                    <img
                      src={imageState.processedUrl}
                      alt={tx('Resized signature', 'Firma redimensionada')}
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                      {widthPx} × {heightPx} px
                    </div>
                  </div>
                  <button
                    onClick={downloadImage}
                    className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all font-bold shadow-lg flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    {outputVariants.length > 1
                      ? tx('Download All Formats (ZIP)', 'Descargar todos los formatos (ZIP)')
                      : tx('Download Signature', 'Descargar firma')}
                  </button>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-700">{tx('Signature Details', 'Detalles de la firma')}</h3>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Width:', 'Ancho:')}</span>
                      <span className="text-sm font-semibold text-gray-900">{widthPx} {tx('pixels', 'pixeles')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Height:', 'Alto:')}</span>
                      <span className="text-sm font-semibold text-gray-900">{heightPx} {tx('pixels', 'pixeles')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Background:', 'Fondo:')}</span>
                      <span className="text-sm font-semibold text-gray-900">
                        {backgroundColor === 'transparent' ? tx('Transparent', 'Transparente') : tx('Solid Color', 'Color solido')}
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
                      <PenTool className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-emerald-900 font-medium mb-1">
                          {tx('Perfect for Documents', 'Perfecto para documentos')}
                        </p>
                        <p className="text-xs text-emerald-700">
                          {tx('Your signature is optimized for forms, emails, contracts, and legal documents.', 'Tu firma esta optimizada para formularios, correos, contratos y documentos legales.')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-blue-900 font-medium mb-1">
                          {tx('100% Private', '100% Privada')}
                        </p>
                        <p className="text-xs text-blue-700">
                          {tx('All processing happens in your browser. Your signature never leaves your device.', 'Todo el procesamiento ocurre en tu navegador. Tu firma nunca sale de tu dispositivo.')}
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About Signature Resizer Tool', 'Acerca de la herramienta de redimensionar firma')}</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                {tx(
                  'Our free online signature resizer tool helps you resize signature images to the perfect dimensions for forms, documents, emails, and legal papers. Whether you need a small signature for email templates, a medium-sized signature for online forms, or a larger signature for legal documents, our tool makes it easy.',
                  'Nuestra herramienta gratuita para redimensionar firmas te ayuda a ajustar la firma al tamano ideal para formularios, documentos, correos y tramites legales. Ya sea una firma pequena para email, mediana para formularios o grande para documentos legales, aqui lo haces facilmente.'
                )}
              </p>
              <p>
                {tx(
                  'Simply upload your signature image, choose from preset sizes (200×80px for emails, 300×100px for forms, 400×120px for legal documents) or enter custom dimensions, select transparent or solid background, and download your resized signature. The tool maintains signature quality while reducing or enlarging to your exact specifications. All processing happens securely in your browser, ensuring your signature remains private. No registration required, completely free to use.',
                  'Solo sube tu firma, elige un preajuste (200×80 px para correos, 300×100 px para formularios, 400×120 px para documentos legales) o usa medidas personalizadas, define fondo transparente o solido y descarga. El procesamiento es local y privado, sin registro y totalmente gratis.'
                )}
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto" aria-labelledby="features-heading">
            <h2 id="features-heading" className="sr-only">{tx('Key Features', 'Caracteristicas clave')}</h2>
            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <PenTool className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Document Presets', 'Preajustes para documentos')}</h3>
              <p className="text-gray-600">
                {tx('Quick presets for emails, forms, and legal documents.', 'Preajustes rapidos para correos, formularios y documentos legales.')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Maximize2 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Transparent BG', 'Fondo transparente')}</h3>
              <p className="text-gray-600">
                {tx('Supports transparent backgrounds for PNG format.', 'Soporta fondos transparentes en formato PNG.')}
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
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-8 border border-blue-200 max-w-4xl mx-auto mb-12" aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="text-2xl font-bold text-gray-900 mb-8 text-center">{tx('How to Resize Signature Images', 'Como redimensionar imagenes de firma')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Upload Signature', 'Subir firma')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Click the upload area or drag and drop your signature image. Supports PNG, JPG formats.', 'Haz clic en el area de carga o arrastra tu firma. Compatible con PNG y JPG.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Choose Size', 'Elegir tamano')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Select a preset size or enter custom dimensions. Enable aspect ratio lock to prevent distortion.', 'Selecciona un preajuste o ingresa dimensiones personalizadas. Activa el bloqueo de proporcion para evitar distorsion.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Set Background', 'Definir fondo')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Choose transparent background for PNG or white/custom color for JPG format.', 'Elige fondo transparente para PNG o fondo blanco/personalizado para JPG.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Resize & Download', 'Redimensionar y descargar')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Click "Resize Signature" to process and download your document-ready signature.', 'Haz clic en "Redimensionar firma" para procesar y descargar tu firma lista para documentos.')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 text-center">
              <p className="text-sm text-blue-800">
                <strong>{tx('Pro Tip:', 'Consejo Pro:')}</strong>{' '}
                {tx('Use 200×80px for email signatures, 300×100px for standard forms, and 400×120px for legal documents. Always keep a high-resolution backup of your original signature.', 'Usa 200×80 px para firmas de correo, 300×100 px para formularios y 400×120 px para documentos legales. Conserva siempre un respaldo en alta resolucion de tu firma original.')}
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
                  <span>{tx('What size should a signature be for documents?', 'Que tamano debe tener una firma para documentos?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 0 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 0 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Standard signature sizes: 200×80px for emails, 300×100px for forms, 400×120px for legal documents. The ideal size depends on your document type and requirements.', 'Tamanos estandar: 200×80 px para correos, 300×100 px para formularios y 400×120 px para documentos legales. El tamano ideal depende del tipo de documento y sus requisitos.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(1)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span>{tx('Should I use PNG or JPG for signature images?', 'Debo usar PNG o JPG para firmas?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 1 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 1 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Use PNG with transparent background for most documents and emails. Use JPG with white background for forms that don\'t support transparency or require smaller file sizes.', 'Usa PNG con fondo transparente para la mayoria de documentos y correos. Usa JPG con fondo blanco para formularios que no admiten transparencia o requieren menor tamano.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(2)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span>{tx('How do I maintain signature quality when resizing?', 'Como mantener la calidad de la firma al redimensionar?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 2 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 2 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Enable "Lock Aspect Ratio" to prevent distortion. Start with a high-resolution signature scan. Our tool uses high-quality scaling to preserve signature clarity.', 'Activa "Bloquear proporcion" para evitar distorsion. Empieza con una firma en alta resolucion. La herramienta usa escalado de alta calidad para conservar nitidez.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(3)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span>{tx('Can I remove background from my signature?', 'Puedo quitar el fondo de mi firma?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 3 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 3 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('If your signature already has a transparent background (PNG), select "Transparent" option. For signatures with white backgrounds, you may need to remove the background first using an image editor.', 'Si tu firma ya tiene fondo transparente (PNG), selecciona la opcion "Transparente". Si tiene fondo blanco, quizas necesites quitar el fondo antes con un editor.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(4)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span>{tx('Is my signature secure when using this tool?', 'Mi firma esta segura al usar esta herramienta?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 4 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 4 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Yes! All signature processing happens locally in your browser. Your signature images are never uploaded to any server, ensuring complete privacy and security.', 'Si. Todo el procesamiento de firmas ocurre localmente en tu navegador. Las imagenes nunca se suben a ningun servidor.')}</p>
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
