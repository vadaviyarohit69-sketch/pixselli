"use client";

import { normalizeFileToken } from '@/lib/unifiedOutputProcessor';
import { useLanguage } from '@/components/LanguageProvider';
import { getLocaleBasePath } from '@/lib/i18n';
import { IMAGE_RESIZER_TEXT_BY_LOCALE } from '@/lib/imageResizerTranslations';
import { ADD_DATE_TEXT_BY_LOCALE } from '@/lib/addDateTranslations';
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
type DateFormatType = 'full' | 'short' | 'numeric' | 'custom';
type DatePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

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
        ADD_DATE_TEXT_BY_LOCALE[locale]?.[en] ||
        IMAGE_RESIZER_TEXT_BY_LOCALE[locale]?.[en] ||
        en
      );
    },
    [locale]
  );
  const dateLocaleByLocale: Record<string, string> = {
    es: 'es-ES',
    pt: 'pt-PT',
    fr: 'fr-FR',
    de: 'de-DE',
    it: 'it-IT',
  };
  const dateLocale = dateLocaleByLocale[locale] || 'en-US';
  const localeBasePath = getLocaleBasePath(locale);
  const pagePath = localeBasePath ? `${localeBasePath}/add-date` : '/add-date';
  const pageUrl = `https://pixselli.com${pagePath}`;
  const homePath = localeBasePath || '/';

  const getLocalizedDateByFormat = (format: DateFormatType) => {
    const today = new Date();

    switch (format) {
      case 'full':
        return today.toLocaleDateString(dateLocale, { year: 'numeric', month: 'long', day: 'numeric' });
      case 'short':
        return today.toLocaleDateString(dateLocale, { year: 'numeric', month: 'short', day: 'numeric' });
      case 'numeric':
        return today.toLocaleDateString(dateLocale);
      case 'custom':
      default:
        return '';
    }
  };

  const [imageState, setImageState] = useState<ImageState>({
    originalFile: null,
    originalUrl: '',
    processedUrl: '',
    originalWidth: 0,
    originalHeight: 0,
  });
  
  const [dateText, setDateText] = useState(() => getLocalizedDateByFormat('full'));
  const [fontSize, setFontSize] = useState(36);
  const [opacity, setOpacity] = useState(0.8);
  const [position, setPosition] = useState<DatePosition>('bottom-right');
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [dateFormat, setDateFormat] = useState<DateFormatType>('full');
  const [selectedOutputFormats, setSelectedOutputFormats] = useState<OutputFormat[]>(['image/png', 'image/jpeg']);
  const [outputVariants, setOutputVariants] = useState<OutputVariant[]>([]);
  const [processing, setProcessing] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const getPositionLabel = (value: DatePosition) => {
    switch (value) {
      case 'top-left':
        return tx('Top Left', 'Superior izquierda');
      case 'top-right':
        return tx('Top Right', 'Superior derecha');
      case 'bottom-left':
        return tx('Bottom Left', 'Inferior izquierda');
      case 'bottom-right':
        return tx('Bottom Right', 'Inferior derecha');
      default:
        return value;
    }
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

  const handleDateFormatChange = (format: DateFormatType) => {
    setDateFormat(format);

    if (format !== 'custom') {
      setDateText(getLocalizedDateByFormat(format));
    }
  };

  useEffect(() => {
    if (dateFormat !== 'custom') {
      setDateText(getLocalizedDateByFormat(dateFormat));
    }
  }, [locale, dateFormat]);

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

      // Draw original image
      ctx.drawImage(img, 0, 0);

      // Setup date text
      ctx.font = `bold ${fontSize}px Arial`;
      ctx.fillStyle = textColor;
      ctx.globalAlpha = opacity;

      const textMetrics = ctx.measureText(dateText);
      const textWidth = textMetrics.width;
      const textHeight = fontSize;
      const padding = 20;

      let x = 0;
      let y = 0;

      // Calculate position
      switch (position) {
        case 'top-left':
          x = padding;
          y = padding + textHeight;
          break;
        case 'top-right':
          x = canvas.width - textWidth - padding;
          y = padding + textHeight;
          break;
        case 'bottom-left':
          x = padding;
          y = canvas.height - padding;
          break;
        case 'bottom-right':
          x = canvas.width - textWidth - padding;
          y = canvas.height - padding;
          break;
      }

      // Draw date with shadow for better visibility
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.fillText(dateText, x, y);

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
  }, [imageState.originalUrl, dateText, fontSize, opacity, position, textColor, selectedOutputFormats]);

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

    const baseName = `${imageState.originalFile?.name.split('.')[0] || 'image'}_dated`;

    if (outputVariants.length === 1) {
      const single = outputVariants[0];
      const link = document.createElement('a');
      link.href = single.url;
      link.download = normalizeDownloadName(`${baseName}_downloads.zip`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    const zip = new JSZip();
    outputVariants.forEach((variant) => {
      zip.file(`${baseName}_${variant.label.toLowerCase()}.${variant.extension}`, variant.blob);
    });

    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const zipUrl = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = zipUrl;
    link.download = normalizeDownloadName(`${baseName}_downloads.zip`);
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
    setDateText(getLocalizedDateByFormat('full'));
    setFontSize(36);
    setOpacity(0.8);
    setPosition('bottom-right');
    setTextColor('#FFFFFF');
    setDateFormat('full');
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
            "name": tx('Add Date - Free Online Date Stamp Tool', 'Agregar fecha - Herramienta online gratis para sello de fecha'),
            "description": tx(
              'Free online tool to add date stamps to images. Add current date or custom date text to photos with adjustable styling, position, and format options.',
              'Herramienta online gratis para agregar sellos de fecha a imagenes. Agrega fecha actual o texto personalizado con estilo, posicion y formato ajustables.'
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
              tx('Add date stamps to images', 'Agregar sellos de fecha a imagenes'),
              tx('Multiple date formats', 'Multiples formatos de fecha'),
              tx('Adjustable font size and opacity', 'Tamano de fuente y opacidad ajustables'),
              tx('Four position options', 'Cuatro opciones de posicion'),
              tx('Color customization', 'Personalizacion de color'),
              tx('Client-side processing for privacy', 'Procesamiento local para privacidad')
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
            "name": tx('How to Add Date Stamp to Images', 'Como agregar sello de fecha a imagenes'),
            "description": tx(
              'Learn how to add date stamps to your photos online for free',
              'Aprende a agregar sellos de fecha a tus fotos online gratis'
            ),
            "image": "https://pixselli.com/images/add-date-guide.jpg",
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
                "name": tx('Pixselli Add Date Tool', 'Herramienta Pixselli para agregar fecha')
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": tx('Upload Image', 'Subir imagen'),
                "text": tx(
                  'Upload your image by dragging and dropping or clicking to browse from your device',
                  'Sube tu imagen arrastrando y soltando o haciendo clic para explorar desde tu dispositivo'
                ),
                "url": `${pageUrl}#step1`
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": tx('Choose Date Format', 'Elegir formato de fecha'),
                "text": tx(
                  'Select from full date, short date, numeric, or enter custom date text',
                  'Selecciona fecha completa, corta, numerica o ingresa texto personalizado'
                ),
                "url": `${pageUrl}#step2`
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": tx('Customize Appearance', 'Personalizar apariencia'),
                "text": tx(
                  'Adjust font size, opacity, color, and position of the date stamp',
                  'Ajusta tamano, opacidad, color y posicion del sello de fecha'
                ),
                "url": `${pageUrl}#step3`
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": tx('Apply & Download', 'Aplicar y descargar'),
                "text": tx(
                  "Click 'Add Date' to apply the date stamp and download your image",
                  "Haz clic en 'Agregar fecha' para aplicar el sello y descargar tu imagen"
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
                "name": tx('Can I add a custom date to my images?', 'Puedo agregar una fecha personalizada a mis imagenes?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'Yes! You can choose from preset date formats (full, short, numeric) or enter any custom text you want as your date stamp.',
                    'Si. Puedes elegir formatos predefinidos (completo, corto, numerico) o escribir cualquier texto personalizado para tu sello de fecha.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('What date formats are available?', 'Que formatos de fecha estan disponibles?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'We offer Full Date (January 1, 2024), Short Date (Jan 1, 2024), Numeric (1/1/2024), and Custom format where you can enter any text.',
                    'Ofrecemos fecha completa, fecha corta, formato numerico y formato personalizado donde puedes escribir cualquier texto.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('Can I control where the date appears on the image?', 'Puedo controlar donde aparece la fecha en la imagen?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'Absolutely! You can place the date stamp in four positions: top-left, top-right, bottom-left, or bottom-right corner of your image.',
                    'Si. Puedes colocar el sello de fecha en cuatro posiciones: superior izquierda, superior derecha, inferior izquierda o inferior derecha.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('Will the date stamp be visible on any image?', 'El sello de fecha sera visible en cualquier imagen?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'Yes, the date includes a subtle shadow effect to ensure visibility on both light and dark backgrounds. You can also adjust the color and opacity.',
                    'Si. La fecha incluye una sombra sutil para asegurar visibilidad en fondos claros y oscuros. Tambien puedes ajustar color y opacidad.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('Is my image secure when adding dates?', 'Mi imagen esta segura al agregar fechas?'),
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
            "name": tx('Pixselli Add Date Tool', 'Herramienta Pixselli para agregar fecha'),
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
                <span itemProp="name" className="text-gray-900 font-medium">{tx('Add Date', 'Agregar fecha')}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Calendar className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {tx('Add Date to Image', 'Agregar fecha a imagen')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {tx(
                'Add date stamps to your photos with custom formatting and styling. Perfect for documenting events, memories, or organizing your photo collection. Fast, secure, and works entirely in your browser.',
                'Agrega sellos de fecha a tus fotos con formato y estilo personalizados. Ideal para documentar eventos, recuerdos u organizar tu galeria. Rapido, seguro y totalmente en tu navegador.'
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
                        style={{ maxHeight: '500px', objectFit: 'contain' }}
                      />
                      <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                        {imageState.originalWidth} × {imageState.originalHeight}
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
                  <Calendar className="w-6 h-6 text-blue-600" />
                  {tx('Date Settings', 'Configuracion de fecha')}
                </h2>

                {imageState.originalUrl ? (
                  <div className="space-y-6">
                    {/* Date Format Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        {tx('Date Format', 'Formato de fecha')}
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => handleDateFormatChange('full')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all text-sm ${
                            dateFormat === 'full'
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {tx('Full Date', 'Fecha completa')}
                        </button>
                        <button
                          onClick={() => handleDateFormatChange('short')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all text-sm ${
                            dateFormat === 'short'
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {tx('Short Date', 'Fecha corta')}
                        </button>
                        <button
                          onClick={() => handleDateFormatChange('numeric')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all text-sm ${
                            dateFormat === 'numeric'
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {tx('Numeric', 'Numerico')}
                        </button>
                        <button
                          onClick={() => handleDateFormatChange('custom')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all text-sm ${
                            dateFormat === 'custom'
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {tx('Custom', 'Personalizado')}
                        </button>
                      </div>
                    </div>

                    {/* Date Text Input */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {tx('Date Text', 'Texto de fecha')}
                      </label>
                      <input
                        type="text"
                        value={dateText}
                        onChange={(e) => {
                          setDateText(e.target.value);
                          setDateFormat('custom');
                        }}
                        placeholder={tx('Enter date text', 'Escribe el texto de fecha')}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Font Size */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {tx('Font Size', 'Tamano de fuente')} ({fontSize}px)
                      </label>
                      <input
                        type="range"
                        value={fontSize}
                        onChange={(e) => setFontSize(parseInt(e.target.value))}
                        className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                        min="16"
                        max="80"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>16px</span>
                        <span>80px</span>
                      </div>
                    </div>

                    {/* Opacity */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {tx('Opacity', 'Opacidad')} ({Math.round(opacity * 100)}%)
                      </label>
                      <input
                        type="range"
                        value={opacity}
                        onChange={(e) => setOpacity(parseFloat(e.target.value))}
                        className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                        min="0.3"
                        max="1"
                        step="0.1"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>30%</span>
                        <span>100%</span>
                      </div>
                    </div>

                    {/* Text Color */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {tx('Text Color', 'Color del texto')}
                      </label>
                      <div className="flex gap-3">
                        <input
                          type="color"
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
                          className="w-16 h-12 rounded-lg border-2 border-gray-200 cursor-pointer"
                        />
                        <input
                          type="text"
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
                          className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors font-mono"
                        />
                      </div>
                    </div>

                    {/* Position */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        {tx('Position', 'Posicion')}
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setPosition('top-left')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${
                            position === 'top-left'
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {tx('Top Left', 'Superior izquierda')}
                        </button>
                        <button
                          onClick={() => setPosition('top-right')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${
                            position === 'top-right'
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {tx('Top Right', 'Superior derecha')}
                        </button>
                        <button
                          onClick={() => setPosition('bottom-left')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${
                            position === 'bottom-left'
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {tx('Bottom Left', 'Inferior izquierda')}
                        </button>
                        <button
                          onClick={() => setPosition('bottom-right')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${
                            position === 'bottom-right'
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {tx('Bottom Right', 'Inferior derecha')}
                        </button>
                      </div>
                    </div>

                    {/* Download Formats */}
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
                        {tx(
                          'Single format = single file, multiple formats = ZIP download',
                          'Formato unico = archivo unico, varios formatos = descarga ZIP'
                        )}
                      </p>
                    </div>

                    {/* Info Box */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-blue-900 font-medium mb-1">
                            {tx('How to Add Date', 'Como agregar fecha')}
                          </p>
                          <p className="text-xs text-blue-700">
                            {tx(
                              'Choose a date format or enter custom text, adjust the appearance, then click "Add Date" to apply.',
                              'Elige un formato de fecha o escribe texto personalizado, ajusta la apariencia y haz clic en "Agregar fecha".'
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
                        {processing ? tx('Processing...', 'Procesando...') : tx('Add Date', 'Agregar fecha')}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Calendar className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Ready to Add Date', 'Listo para agregar fecha')}</h3>
                      <p className="text-gray-600 max-w-sm mx-auto">
                        {tx('Upload an image to start adding date stamps', 'Sube una imagen para comenzar a agregar sellos de fecha')}
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
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">{tx('Image with Date', 'Imagen con fecha')}</h3>
                  <div className="relative rounded-xl overflow-hidden bg-gray-100 mb-4">
                    <img
                      src={imageState.processedUrl}
                      alt={tx('Image with date stamp', 'Imagen con sello de fecha')}
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                      {tx('Date Added', 'Fecha agregada')}
                    </div>
                  </div>
                  <button
                    onClick={downloadImage}
                    disabled={outputVariants.length === 0 || processing}
                    className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all font-bold shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Download className="w-5 h-5" />
                    {outputVariants.length > 1
                      ? tx('Download Images with Date (ZIP)', 'Descargar imagenes con fecha (ZIP)')
                      : tx('Download Image with Date', 'Descargar imagen con fecha')}
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
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-700">{tx('Date Stamp Details', 'Detalles del sello de fecha')}</h3>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Date Text:', 'Texto de fecha:')}</span>
                      <span className="text-sm font-semibold text-gray-900">{dateText}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Font Size:', 'Tamano:')}</span>
                      <span className="text-sm font-semibold text-gray-900">{fontSize}px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Opacity:', 'Opacidad:')}</span>
                      <span className="text-sm font-semibold text-gray-900">{Math.round(opacity * 100)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{tx('Position:', 'Posicion:')}</span>
                      <span className="text-sm font-semibold text-gray-900">{getPositionLabel(position)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{tx('Color:', 'Color:')}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded border-2 border-gray-300" style={{ backgroundColor: textColor }}></div>
                        <span className="text-sm font-semibold text-gray-900">{textColor}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-green-900 font-medium mb-1">
                          {tx('100% Private', '100% Privado')}
                        </p>
                        <p className="text-xs text-green-700">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About Add Date Tool', 'Acerca de la herramienta para agregar fecha')}</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                {tx(
                  'Our free online date stamp tool allows you to add date information to your photos instantly. Perfect for documenting events, organizing photo collections, or adding timestamps to memories. Choose from multiple date formats or enter custom text.',
                  'Nuestra herramienta online gratuita te permite agregar informacion de fecha a tus fotos al instante. Es ideal para documentar eventos, organizar colecciones o poner marcas de tiempo en recuerdos.'
                )}
              </p>
              <p>
                {tx(
                  'Customize every aspect including font size, opacity, color, and position. The date stamp includes a subtle shadow effect for visibility on any background. All processing happens in your browser, ensuring your images remain private and secure. No registration required, completely free to use.',
                  'Personaliza todo: tamano de fuente, opacidad, color y posicion. El sello de fecha incluye una sombra sutil para verse bien en cualquier fondo. Todo se procesa en tu navegador para mantener privacidad y seguridad.'
                )}
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto" aria-labelledby="features-heading">
            <h2 id="features-heading" className="sr-only">{tx('Key Features', 'Caracteristicas clave')}</h2>
            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Multiple Formats', 'Multiples formatos')}</h3>
              <p className="text-gray-600">
                {tx('Choose from full, short, numeric date formats or enter custom text.', 'Elige formato completo, corto, numerico o escribe texto personalizado.')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Full Customization', 'Personalizacion completa')}</h3>
              <p className="text-gray-600">
                {tx('Adjust size, opacity, color, and position for perfect results.', 'Ajusta tamano, opacidad, color y posicion para obtener el mejor resultado.')}
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
            <h2 id="howto-heading" className="text-2xl font-bold text-gray-900 mb-8 text-center">{tx('How to Use Add Date Tool', 'Como usar la herramienta para agregar fecha')}</h2>
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
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Choose Date Format', 'Elige el formato de fecha')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Select from full date, short date, numeric, or enter your own custom text.', 'Selecciona fecha completa, fecha corta, numerica o escribe tu propio texto personalizado.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Customize Appearance', 'Personaliza la apariencia')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Adjust font size, opacity, color, and choose from 4 position options.', 'Ajusta tamano de fuente, opacidad, color y elige entre 4 posiciones.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Apply & Download', 'Aplicar y descargar')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Click "Add Date" to apply the date stamp. Preview and download your image instantly.', 'Haz clic en "Agregar fecha" para aplicar el sello. Previsualiza y descarga tu imagen al instante.')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 text-center">
              <p className="text-sm text-blue-800">
                <strong>{tx('Pro Tip:', 'Consejo Pro:')}</strong>{' '}
                {tx(
                  "Use white text with 80% opacity for a professional date stamp that's visible but not distracting.",
                  'Usa texto blanco con 80% de opacidad para un sello de fecha profesional, visible pero sin distraer.'
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
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span>{tx('Can I add a custom date to my images?', 'Puedo agregar una fecha personalizada a mis imagenes?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 0 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 0 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Yes! You can choose from preset date formats (full, short, numeric) or enter any custom text you want as your date stamp.', 'Si. Puedes elegir formatos predefinidos (completo, corto, numerico) o escribir cualquier texto personalizado para el sello de fecha.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(1)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span>{tx('What date formats are available?', 'Que formatos de fecha estan disponibles?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 1 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 1 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('We offer Full Date (January 1, 2024), Short Date (Jan 1, 2024), Numeric (1/1/2024), and Custom format where you can enter any text.', 'Ofrecemos fecha completa, fecha corta, formato numerico y formato personalizado donde puedes escribir cualquier texto.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(2)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span>{tx('Can I control where the date appears on the image?', 'Puedo controlar donde aparece la fecha en la imagen?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 2 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 2 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Absolutely! You can place the date stamp in four positions: top-left, top-right, bottom-left, or bottom-right corner of your image.', 'Si. Puedes colocar el sello de fecha en cuatro posiciones: superior izquierda, superior derecha, inferior izquierda o inferior derecha.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(3)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span>{tx('Will the date stamp be visible on any image?', 'El sello de fecha sera visible en cualquier imagen?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 3 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 3 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Yes, the date includes a subtle shadow effect to ensure visibility on both light and dark backgrounds. You can also adjust the color and opacity.', 'Si. La fecha incluye una sombra sutil para asegurar visibilidad en fondos claros y oscuros. Tambien puedes ajustar color y opacidad.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(4)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span>{tx('Is my image secure when adding dates?', 'Mi imagen esta segura al agregar fechas?')}</span>
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
