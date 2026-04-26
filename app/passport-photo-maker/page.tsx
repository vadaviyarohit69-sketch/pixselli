"use client";

import { normalizeFileToken } from '@/lib/unifiedOutputProcessor';
import { useLanguage } from '@/components/LanguageProvider';
import { getLocaleBasePath } from '@/lib/i18n';
import {
  PASSPORT_PHOTO_MAKER_TEXT_BY_LOCALE,
  PASSPORT_PHOTO_SIZE_LABELS_BY_LOCALE,
} from '@/lib/passportPhotoMakerTranslations';
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

      return PASSPORT_PHOTO_MAKER_TEXT_BY_LOCALE[locale]?.[en] || en;
    },
    [locale]
  );
  const localeBasePath = getLocaleBasePath(locale);
  const pagePath = localeBasePath ? `${localeBasePath}/passport-photo-maker` : '/passport-photo-maker';
  const pageUrl = `https://pixselli.com${pagePath}`;
  const homePath = localeBasePath || '/';

  const [imageState, setImageState] = useState<ImageState>({
    originalFile: null,
    originalUrl: '',
    processedUrl: '',
    originalWidth: 0,
    originalHeight: 0,
  });
  
  const [selectedSize, setSelectedSize] = useState<string>('2x2');
  const [backgroundColor, setBackgroundColor] = useState<string>('white');
  const [selectedOutputFormats, setSelectedOutputFormats] = useState<OutputFormat[]>(['image/jpeg', 'image/png']);
  const [outputVariants, setOutputVariants] = useState<OutputVariant[]>([]);
  const [processing, setProcessing] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const photoSizes: Record<string, { width: number; height: number; label: string; dpi: number }> = {
    '2x2': { width: 600, height: 600, label: '2x2 inch (US Passport)', dpi: 300 },
    '35x45': { width: 413, height: 531, label: '35x45mm (EU Passport)', dpi: 300 },
    '33x48': { width: 390, height: 567, label: '33x48mm (India Passport)', dpi: 300 },
    '51x51': { width: 600, height: 600, label: '51x51mm (UK Passport)', dpi: 300 },
  };

  const photoSizeLabelsEs: Record<string, string> = {
    '2x2': '2x2 pulgadas (Pasaporte EE.UU.)',
    '35x45': '35x45mm (Pasaporte UE)',
    '33x48': '33x48mm (Pasaporte India)',
    '51x51': '51x51mm (Pasaporte Reino Unido)',
  };

  const getPhotoSizeLabel = (key: string) => {
    if (locale === 'es') {
      return photoSizeLabelsEs[key] || photoSizes[key]?.label || key;
    }

    return PASSPORT_PHOTO_SIZE_LABELS_BY_LOCALE[locale]?.[key] || photoSizes[key]?.label || key;
  };

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const getFormatMeta = (format: OutputFormat) => {
    if (format === 'image/png') {
      return { label: 'PNG' as const, extension: 'png' as const };
    }
    if (format === 'image/webp') {
      return { label: 'WebP' as const, extension: 'webp' as const };
    }

    return { label: 'JPG' as const, extension: 'jpg' as const };
  };

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert(tx('Please select a valid image file', 'Por favor selecciona un archivo de imagen valido'));
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        setImageState({
          originalFile: file,
          originalUrl: event.target?.result as string,
          processedUrl: '',
          originalWidth: img.width,
          originalHeight: img.height,
        });
        setOutputVariants((prev) => {
          prev.forEach((variant) => URL.revokeObjectURL(variant.url));
          return [];
        });
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  }, []);

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

  const processPhoto = async (formats: OutputFormat[] = selectedOutputFormats) => {
    if (!imageState.originalUrl || !canvasRef.current) return;
    
    setProcessing(true);
    
    try {
      const img = new Image();
      img.src = imageState.originalUrl;
      
      await new Promise((resolve) => {
        img.onload = resolve;
      });
      
      const size = photoSizes[selectedSize];
      const canvas = canvasRef.current;
      canvas.width = size.width;
      canvas.height = size.height;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Fill background
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Calculate scaling to fit image
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const scaledWidth = img.width * scale;
      const scaledHeight = img.height * scale;
      const x = (canvas.width - scaledWidth) / 2;
      const y = (canvas.height - scaledHeight) / 2;
      
      // Draw image centered
      ctx.drawImage(img, x, y, scaledWidth, scaledHeight);

      const effectiveFormats: OutputFormat[] = formats.length > 0 ? formats : ['image/jpeg'];
      const nextVariants: OutputVariant[] = [];

      for (const format of effectiveFormats) {
        const blob = await new Promise<Blob | null>((resolve) => {
          if (format === 'image/png') {
            canvas.toBlob((b) => resolve(b), format);
          } else {
            canvas.toBlob((b) => resolve(b), format, 0.95);
          }
        });

        if (blob) {
          const meta = getFormatMeta(format);
          nextVariants.push({
            format,
            label: meta.label,
            extension: meta.extension,
            blob,
            url: URL.createObjectURL(blob),
          });
        }
      }

      setOutputVariants((prev) => {
        prev.forEach((variant) => URL.revokeObjectURL(variant.url));
        return nextVariants;
      });

      setImageState(prev => ({
        ...prev,
        processedUrl: nextVariants[0]?.url || '',
      }));
    } catch (error) {
      console.error('Error processing photo:', error);
      alert(tx('Failed to process photo. Please try again.', 'No se pudo procesar la foto. Intentalo de nuevo.'));
    } finally {
      setProcessing(false);
    }
  };

  const handleOutputFormatToggle = (format: OutputFormat) => {
    const isSelected = selectedOutputFormats.includes(format);
    const nextFormats = isSelected
      ? selectedOutputFormats.filter((f) => f !== format)
      : [...selectedOutputFormats, format];

    if (nextFormats.length === 0) return;

    setSelectedOutputFormats(nextFormats);

    if (imageState.processedUrl) {
      processPhoto(nextFormats);
    }
  };

  const downloadImage = async () => {
    if (outputVariants.length === 0) return;

    if (outputVariants.length === 1) {
      const single = outputVariants[0];
      const link = document.createElement('a');
      link.href = single.url;
      link.download = normalizeDownloadName(`passport-photo-${selectedSize}-downloads.zip`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    const zip = new JSZip();
    outputVariants.forEach((variant) => {
      zip.file(`passport-photo-${selectedSize}-${variant.label.toLowerCase()}.${variant.extension}`, variant.blob);
    });

    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const zipUrl = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = zipUrl;
    link.download = normalizeDownloadName(`passport-photo-${selectedSize}-downloads.zip`);
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
    setSelectedSize('2x2');
    setBackgroundColor('white');
  };

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
            "name": tx('Passport Photo Maker - Free Online Passport Photo Tool', 'Creador de Fotos para Pasaporte - Herramienta Gratis Online'),
            "description": tx('Create perfect passport photos online. Support for US, EU, India, UK passport sizes with custom backgrounds.', 'Crea fotos de pasaporte perfectas online. Soporta tamanos de EE.UU., UE, India y Reino Unido con fondos personalizados.'),
            "url": pageUrl,
            "applicationCategory": "DesignApplication",
            "operatingSystem": tx('Web Browser', 'Navegador Web'),
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              tx('US Passport size (2x2 inch)', 'Tamano pasaporte EE.UU. (2x2 pulgadas)'),
              tx('EU Passport size (35x45mm)', 'Tamano pasaporte UE (35x45mm)'),
              tx('India Passport size (33x48mm)', 'Tamano pasaporte India (33x48mm)'),
              tx('UK Passport size (51x51mm)', 'Tamano pasaporte Reino Unido (51x51mm)'),
              tx('Custom background colors', 'Colores de fondo personalizados'),
              tx('High-quality 300 DPI output', 'Salida de alta calidad a 300 DPI'),
              tx('Client-side processing', 'Procesamiento local en navegador'),
              tx('Completely free', 'Totalmente gratis')
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
            "name": tx('How to Create Passport Photos Online', 'Como Crear Fotos de Pasaporte Online'),
            "description": tx('Step-by-step guide to create passport photos using our free online tool', 'Guia paso a paso para crear fotos de pasaporte con nuestra herramienta gratis'),
            "image": "https://pixselli.com/images/how-to-passport-photo.jpg",
            "totalTime": "PT3M",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "USD",
              "value": "0"
            },
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": tx('Upload Photo', 'Subir Foto'),
                "text": tx('Click the upload area or drag and drop a clear photo with face centered and good lighting', 'Haz clic en el area de carga o arrastra una foto clara con el rostro centrado y buena iluminacion'),
                "url": `${pageUrl}#step1`
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": tx('Select Passport Size', 'Seleccionar Tamano de Pasaporte'),
                "text": tx('Choose your country\'s passport photo size (US, EU, India, or UK standard)', 'Elige el tamano de foto de pasaporte de tu pais (EE.UU., UE, India o Reino Unido)'),
                "url": `${pageUrl}#step2`
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": tx('Pick Background Color', 'Elegir Color de Fondo'),
                "text": tx('Select white, light blue, gray, or cream background based on requirements', 'Selecciona fondo blanco, azul claro, gris o crema segun requisitos'),
                "url": `${pageUrl}#step3`
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": tx('Download & Print', 'Descargar e Imprimir'),
                "text": tx('Click Create Photo to process, preview the result, and download for printing', 'Haz clic en Crear Foto para procesar, previsualizar y descargar para imprimir'),
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
                "name": tx('What passport photo sizes are supported?', 'Que tamanos de foto de pasaporte se admiten?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx('We support US (2x2 inch), EU (35x45mm), India (33x48mm), and UK (51x51mm) passport photo sizes. All photos are generated at 300 DPI for professional quality.', 'Admitimos tamanos de pasaporte de EE.UU. (2x2), UE (35x45mm), India (33x48mm) y Reino Unido (51x51mm). Todas las fotos se generan a 300 DPI para calidad profesional.')
                }
              },
              {
                "@type": "Question",
                "name": tx('What background colors can I use?', 'Que colores de fondo puedo usar?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx('You can choose from white, light blue, light gray, and cream backgrounds. Most countries require white or light-colored backgrounds for official passport photos.', 'Puedes elegir fondo blanco, azul claro, gris claro o crema. La mayoria de paises exige fondos claros para fotos oficiales de pasaporte.')
                }
              },
              {
                "@type": "Question",
                "name": tx('Can I print these photos?', 'Puedo imprimir estas fotos?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx('Yes! Our photos are generated at 300 DPI, which is professional print quality. You can print them at any photo printing service or on your home printer using photo paper.', 'Si. Nuestras fotos se generan a 300 DPI, calidad profesional de impresion. Puedes imprimirlas en un servicio fotografico o en tu impresora con papel fotografico.')
                }
              },
              {
                "@type": "Question",
                "name": tx('Is this tool free to use?', 'Esta herramienta es gratis?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx('Yes, completely free! No registration, no watermarks, and no hidden fees. Create as many passport photos as you need.', 'Si, totalmente gratis. Sin registro, sin marcas de agua y sin costos ocultos. Crea todas las fotos de pasaporte que necesites.')
                }
              }
            ]
          })
        }}
      />
      
      {/* Software Application Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": tx('Passport Photo Maker', 'Creador de Fotos para Pasaporte'),
            "url": pageUrl,
            "applicationCategory": "PhotographyApplication",
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
                <span itemProp="name" className="text-gray-900 font-medium">{tx('Passport Photo Maker', 'Creador de Fotos para Pasaporte')}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Camera className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {tx('Passport Photo Maker', 'Creador de Fotos para Pasaporte')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {tx('Create perfect passport photos for US, EU, India, and UK passports. Choose your size and background color. Fast, secure, and works entirely in your browser.', 'Crea fotos de pasaporte perfectas para EE.UU., UE, India y Reino Unido. Elige tamano y color de fondo. Rapido, seguro y funciona totalmente en tu navegador.')}
            </p>
          </header>

          {/* Main Tool Area */}
          <main>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Upload/Preview Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Upload className="w-6 h-6 text-blue-600" />
                  {tx('Upload Your Photo', 'Sube tu Foto')}
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
                        {tx('Drag & drop your photo here', 'Arrastra y suelta tu foto aqui')}
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
                      <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                        {imageState.originalWidth} × {imageState.originalHeight}
                      </div>
                    </div>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium"
                    >
                      {tx('Choose Different Photo', 'Elegir Otra Foto')}
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
                  <User className="w-6 h-6 text-blue-600" />
                  {tx('Photo Settings', 'Configuracion de Foto')}
                </h2>

                {imageState.originalUrl ? (
                  <div className="space-y-6">
                    {/* Size Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        {tx('Passport Size', 'Tamano de Pasaporte')}
                      </label>
                      <div className="grid grid-cols-1 gap-3">
                        {Object.entries(photoSizes).map(([key, size]) => (
                          <button
                            key={key}
                            onClick={() => setSelectedSize(key)}
                            className={`py-3 px-4 rounded-lg font-medium transition-all text-left ${
                              selectedSize === key
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <span>{getPhotoSizeLabel(key)}</span>
                              {selectedSize === key && <CheckCircle className="w-5 h-5" />}
                            </div>
                            <div className="text-xs mt-1 opacity-90">
                              {size.width} × {size.height} px @ {size.dpi} DPI
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Background Color */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        {tx('Background Color', 'Color de Fondo')}
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setBackgroundColor('white')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all flex items-center gap-3 ${
                            backgroundColor === 'white'
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded"></div>
                          {tx('White', 'Blanco')}
                        </button>
                        <button
                          onClick={() => setBackgroundColor('#e8f4f8')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all flex items-center gap-3 ${
                            backgroundColor === '#e8f4f8'
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <div className="w-6 h-6 rounded" style={{ backgroundColor: '#e8f4f8' }}></div>
                          {tx('Light Blue', 'Azul Claro')}
                        </button>
                        <button
                          onClick={() => setBackgroundColor('#f0f0f0')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all flex items-center gap-3 ${
                            backgroundColor === '#f0f0f0'
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <div className="w-6 h-6 bg-gray-200 rounded"></div>
                          {tx('Light Gray', 'Gris Claro')}
                        </button>
                        <button
                          onClick={() => setBackgroundColor('#fef5e7')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all flex items-center gap-3 ${
                            backgroundColor === '#fef5e7'
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <div className="w-6 h-6 rounded" style={{ backgroundColor: '#fef5e7' }}></div>
                          {tx('Cream', 'Crema')}
                        </button>
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
                          className={`py-2.5 px-3 rounded-lg font-medium transition-all ${selectedOutputFormats.includes('image/jpeg') ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                          JPG
                        </button>
                        <button
                          onClick={() => handleOutputFormatToggle('image/png')}
                          className={`py-2.5 px-3 rounded-lg font-medium transition-all ${selectedOutputFormats.includes('image/png') ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                          PNG
                        </button>
                        <button
                          onClick={() => handleOutputFormatToggle('image/webp')}
                          className={`py-2.5 px-3 rounded-lg font-medium transition-all ${selectedOutputFormats.includes('image/webp') ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                          WebP
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">{tx('Single format = single file, multiple formats = ZIP download', 'Un formato = un archivo, varios formatos = descarga ZIP')}</p>
                    </div>

                    {/* Info Box */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Camera className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-blue-900 font-medium mb-1">
                            {tx('Photo Guidelines', 'Guia para la Foto')}
                          </p>
                          <p className="text-xs text-blue-700">
                            {tx('Use a clear photo with face centered, neutral expression, and good lighting. Avoid shadows and ensure the face takes up 70-80% of the frame.', 'Usa una foto clara con el rostro centrado, expresion neutral y buena iluminacion. Evita sombras y asegura que el rostro ocupe 70-80% del encuadre.')}
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
                        onClick={() => processPhoto()}
                        disabled={processing}
                        className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {processing ? tx('Processing...', 'Procesando...') : tx('Create Photo', 'Crear Foto')}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Camera className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Ready to Create', 'Listo para Crear')}</h3>
                      <p className="text-gray-600 max-w-sm mx-auto">
                        {tx('Upload a photo to start making your passport photo', 'Sube una foto para empezar a crear tu foto de pasaporte')}
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
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">{tx('Original Photo', 'Foto Original')}</h3>
                    <div className="relative rounded-xl overflow-hidden bg-gray-100">
                      <img
                        src={imageState.originalUrl}
                        alt={tx('Original', 'Original')}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">{tx('Passport Photo', 'Foto de Pasaporte')}</h3>
                    <div className="relative rounded-xl overflow-hidden bg-gray-100 mb-4">
                      <img
                        src={imageState.processedUrl}
                        alt={tx('Passport Photo', 'Foto de Pasaporte')}
                        className="w-full h-auto"
                      />
                      <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                        {getPhotoSizeLabel(selectedSize)}
                      </div>
                    </div>
                    <button
                      onClick={downloadImage}
                      disabled={outputVariants.length === 0 || processing}
                      className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all font-bold shadow-lg flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      {outputVariants.length > 1
                        ? tx('Download Passport Photos (ZIP)', 'Descargar Fotos de Pasaporte (ZIP)')
                        : tx('Download Passport Photo', 'Descargar Foto de Pasaporte')}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About Passport Photo Maker', 'Sobre el Creador de Fotos para Pasaporte')}</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {tx('Create professional passport photos online with our free passport photo maker. Supports standard sizes for US (2x2 inch), EU (35x45mm), India (33x48mm), and UK (51x51mm) passports. Choose from multiple background colors including white, light blue, light gray, and cream to meet your country\'s requirements.', 'Crea fotos profesionales de pasaporte online con nuestra herramienta gratis. Soporta tamanos estandar para EE.UU. (2x2), UE (35x45mm), India (33x48mm) y Reino Unido (51x51mm). Elige entre varios colores de fondo para cumplir requisitos de tu pais.')}
                </p>
                <p>
                  {tx('Our tool generates high-quality 300 DPI photos suitable for printing and official use. All processing happens in your browser, ensuring your photos remain private and secure. No registration required, completely free to use.', 'Nuestra herramienta genera fotos de alta calidad a 300 DPI aptas para impresion y uso oficial. Todo el procesamiento ocurre en tu navegador, manteniendo tus fotos privadas y seguras. No requiere registro y es completamente gratis.')}
                </p>
              </div>
            </section>

            {/* Country Requirements Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md p-8 border border-blue-200 mb-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{tx('Passport Photo Requirements by Country', 'Requisitos de Foto de Pasaporte por Pais')}</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-5 rounded-xl border-l-4 border-blue-500">
                  <h3 className="font-bold text-blue-700 mb-3">{tx('United States', 'Estados Unidos')}</h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>{tx('• Size: ', '• Tamano: ')}<strong>{tx('2x2 inches', '2x2 pulgadas')}</strong> (51×51mm)</li>
                    <li>{tx('• Background: White or off-white', '• Fondo: Blanco o casi blanco')}</li>
                    <li>{tx('• Head size: 1-1⅜ inches from chin to top of head', '• Tamano de cabeza: 1-1⅜ pulgadas desde barbilla hasta parte superior')}</li>
                    <li>{tx('• Expression: Neutral, eyes open', '• Expresion: Neutral, ojos abiertos')}</li>
                    <li>{tx('• Recent: Taken within last 6 months', '• Reciente: Tomada dentro de los ultimos 6 meses')}</li>
                  </ul>
                </div>
                
                <div className="bg-white p-5 rounded-xl border-l-4 border-yellow-500">
                  <h3 className="font-bold text-yellow-700 mb-3">{tx('European Union', 'Union Europea')}</h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>{tx('• Size: ', '• Tamano: ')}<strong>35×45mm</strong></li>
                    <li>{tx('• Background: Light gray or light blue', '• Fondo: Gris claro o azul claro')}</li>
                    <li>{tx('• Head height: 32-36mm', '• Altura de cabeza: 32-36mm')}</li>
                    <li>{tx('• Expression: Neutral, mouth closed', '• Expresion: Neutral, boca cerrada')}</li>
                    <li>{tx('• No glasses in most EU countries', '• Sin gafas en la mayoria de paises UE')}</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-xl border-l-4 border-orange-500">
                  <h3 className="font-bold text-orange-700 mb-3">{tx('India', 'India')}</h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>{tx('• Size: ', '• Tamano: ')}<strong>35×45mm</strong> {tx('(passport) or 51×51mm (visa)', '(pasaporte) o 51×51mm (visa)')}</li>
                    <li>{tx('• Background: White only', '• Fondo: Solo blanco')}</li>
                    <li>{tx('• Face coverage: 70-80% of photo', '• Cobertura del rostro: 70-80% de la foto')}</li>
                    <li>{tx('• Expression: Neutral expression', '• Expresion: Neutral')}</li>
                    <li>{tx('• Both ears must be visible', '• Ambas orejas deben ser visibles')}</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-xl border-l-4 border-purple-500">
                  <h3 className="font-bold text-purple-700 mb-3">{tx('United Kingdom', 'Reino Unido')}</h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>{tx('• Size: ', '• Tamano: ')}<strong>35×45mm</strong></li>
                    <li>{tx('• Background: Light gray or cream', '• Fondo: Gris claro o crema')}</li>
                    <li>{tx('• Head height: 29-34mm', '• Altura de cabeza: 29-34mm')}</li>
                    <li>{tx('• Expression: Neutral, mouth closed', '• Expresion: Neutral, boca cerrada')}</li>
                    <li>{tx('• No glasses (since 2016)', '• Sin gafas (desde 2016)')}</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <strong>{tx('Important:', 'Importante:')}</strong> {tx('Requirements may vary. Always check your country\'s official government website for the latest passport photo specifications before submission.', 'Los requisitos pueden variar. Revisa siempre el sitio web oficial de tu gobierno para las especificaciones mas recientes antes de enviar.')}
                </p>
              </div>
            </section>

            {/* Tips for Perfect Passport Photos */}
            <section className="bg-white rounded-xl shadow-md p-8 border border-gray-200 mb-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{tx('Tips for Perfect Passport Photos', 'Consejos para Fotos de Pasaporte Perfectas')}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
                  <span className="text-green-600 text-xl">✅</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{tx('Good Lighting', 'Buena Iluminacion')}</h3>
                    <p className="text-sm text-gray-600">{tx('Use natural daylight or soft, even lighting. Avoid harsh shadows on your face.', 'Usa luz natural o iluminacion suave y uniforme. Evita sombras fuertes en el rostro.')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
                  <span className="text-green-600 text-xl">✅</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{tx('Plain Background', 'Fondo Liso')}</h3>
                    <p className="text-sm text-gray-600">{tx('Stand against a plain white or light-colored wall without patterns.', 'Colocate frente a una pared lisa blanca o de color claro sin patrones.')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
                  <span className="text-red-600 text-xl">❌</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{tx('Avoid Glasses', 'Evita Gafas')}</h3>
                    <p className="text-sm text-gray-600">{tx('Most countries no longer accept photos with glasses due to glare issues.', 'Muchos paises ya no aceptan fotos con gafas por problemas de reflejo.')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
                  <span className="text-red-600 text-xl">❌</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{tx('No Smiling', 'Sin Sonreir')}</h3>
                    <p className="text-sm text-gray-600">{tx('Keep a neutral expression with your mouth closed. No teeth showing.', 'Manten expresion neutral con la boca cerrada. Sin mostrar dientes.')}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto" aria-labelledby="features-heading">
              <h2 id="features-heading" className="sr-only">{tx('Key Features', 'Funciones Clave')}</h2>
              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Maximize2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Multiple Sizes', 'Multiples Tamanos')}</h3>
                <p className="text-gray-600">
                  {tx('Support for US, EU, India, and UK passport photo sizes with precise dimensions.', 'Soporte para tamanos de pasaporte de EE.UU., UE, India y Reino Unido con dimensiones precisas.')}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ImageIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Custom Backgrounds', 'Fondos Personalizados')}</h3>
                <p className="text-gray-600">
                  {tx('Choose from white, light blue, gray, or cream backgrounds to meet requirements.', 'Elige entre fondos blanco, azul claro, gris o crema para cumplir requisitos.')}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Print Quality', 'Calidad de Impresion')}</h3>
                <p className="text-gray-600">
                  {tx('High-quality 300 DPI output suitable for professional printing.', 'Salida de alta calidad a 300 DPI apta para impresion profesional.')}
                </p>
              </div>
            </section>

            {/* How to Use Section */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-8 border border-blue-200 max-w-4xl mx-auto mb-12" aria-labelledby="howto-heading">
              <h2 id="howto-heading" className="text-2xl font-bold text-gray-900 mb-8 text-center">{tx('How to Create Passport Photos', 'Como Crear Fotos de Pasaporte')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{tx('Upload Your Photo', 'Sube tu Foto')}</h3>
                      <p className="text-gray-600 text-sm">{tx('Click the upload area or drag and drop a clear photo with face centered and good lighting.', 'Haz clic en el area de carga o arrastra una foto clara con el rostro centrado y buena iluminacion.')}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{tx('Select Passport Size', 'Selecciona Tamano de Pasaporte')}</h3>
                      <p className="text-gray-600 text-sm">{tx('Choose your country\'s passport photo size (US, EU, India, or UK standard).', 'Elige el tamano de foto de pasaporte de tu pais (EE.UU., UE, India o Reino Unido).')}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{tx('Pick Background Color', 'Elige Color de Fondo')}</h3>
                      <p className="text-gray-600 text-sm">{tx('Select white, light blue, gray, or cream background based on requirements.', 'Selecciona fondo blanco, azul claro, gris o crema segun requisitos.')}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{tx('Download & Print', 'Descarga e Imprime')}</h3>
                      <p className="text-gray-600 text-sm">{tx('Click "Create Photo" to process, preview the result, and download for printing.', 'Haz clic en "Crear Foto" para procesar, previsualizar y descargar para imprimir.')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-sm text-blue-800">
                  <strong>{tx('Pro Tip:', 'Consejo Pro:')}</strong> {tx('Ensure your face is well-lit, centered, and takes up 70-80% of the photo. Avoid shadows, glasses glare, and smile for best results.', 'Asegura que tu rostro este bien iluminado, centrado y ocupe 70-80% de la foto. Evita sombras, reflejos de gafas y sonrisa para mejores resultados.')}
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
                    <span>{tx('What passport photo sizes are supported?', 'Que tamanos de foto de pasaporte se admiten?')}</span>
                    <svg className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 0 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaqIndex === 0 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('We support US (2x2 inch), EU (35x45mm), India (33x48mm), and UK (51x51mm) passport photo sizes. All photos are generated at 300 DPI for professional quality.', 'Admitimos tamanos de pasaporte de EE.UU. (2x2), UE (35x45mm), India (33x48mm) y Reino Unido (51x51mm). Todas las fotos se generan a 300 DPI para calidad profesional.')}</p>
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(1)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>{tx('What background colors can I use?', 'Que colores de fondo puedo usar?')}</span>
                    <svg className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 1 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaqIndex === 1 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('You can choose from white, light blue, light gray, and cream backgrounds. Most countries require white or light-colored backgrounds for official passport photos.', 'Puedes elegir fondo blanco, azul claro, gris claro o crema. La mayoria de paises exige fondos claros para fotos oficiales de pasaporte.')}</p>
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(2)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>{tx('Can I print these photos?', 'Puedo imprimir estas fotos?')}</span>
                    <svg className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 2 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaqIndex === 2 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('Yes! Our photos are generated at 300 DPI, which is professional print quality. You can print them at any photo printing service or on your home printer using photo paper.', 'Si. Nuestras fotos se generan a 300 DPI, calidad profesional de impresion. Puedes imprimirlas en un servicio fotografico o en tu impresora con papel fotografico.')}</p>
                    </div>
                  )}
                </div>

                {/* FAQ 4 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(3)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>{tx('What are the photo requirements?', 'Cuales son los requisitos de la foto?')}</span>
                    <svg className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 3 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaqIndex === 3 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('Use a clear, recent photo with face centered, neutral expression, eyes open, and good lighting. The face should take up 70-80% of the frame. Avoid shadows, glasses glare, and hats.', 'Usa una foto clara y reciente con el rostro centrado, expresion neutral, ojos abiertos y buena iluminacion. El rostro debe ocupar 70-80% del encuadre. Evita sombras, reflejos de gafas y sombreros.')}</p>
                    </div>
                  )}
                </div>

                {/* FAQ 5 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(4)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>{tx('Is this tool free to use?', 'Esta herramienta es gratis?')}</span>
                    <svg className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 4 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaqIndex === 4 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('Yes, completely free! No registration, no watermarks, and no hidden fees. Create as many passport photos as you need.', 'Si, totalmente gratis. Sin registro, sin marcas de agua y sin costos ocultos. Crea todas las fotos de pasaporte que necesites.')}</p>
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
