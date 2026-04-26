"use client";

import { useState, useRef, useCallback } from 'react';
import JSZip from 'jszip';
import { Upload, Download, RotateCcw, Image as ImageIcon, Percent, Shield, ChevronDown, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import { translateReactNode } from '@/lib/translateReactNode';
import { COMPRESS_PERCENTAGE_TEXT_BY_LOCALE } from '@/lib/compressPercentageTranslations';

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

export default function CompressByPercentagePage() {
  const { locale } = useLanguage();
  const dict = COMPRESS_PERCENTAGE_TEXT_BY_LOCALE[locale] ?? {};
  const homeHref = locale === 'en' ? '/' : `/${locale}`;
  const toolPath = locale === 'en' ? '/compress-percentage' : `/${locale}/compress-percentage`;
  const canonicalUrl = `https://pixselli.com${toolPath}`;

  const t = (key: string) => dict[key] ?? key;
  const formatTemplate = (template: string, vars: Record<string, string | number>) => {
    return template.replace(/\{(\w+)\}/g, (_, name: string) => String(vars[name] ?? `{${name}}`));
  };
  const tt = (key: string, vars: Record<string, string | number>) => formatTemplate(t(key), vars);

  const [imageState, setImageState] = useState<ImageState>({
    originalFile: null,
    originalUrl: '',
    processedUrl: '',
    originalSize: 0,
    compressedSize: 0,
    originalWidth: 0,
    originalHeight: 0,
  });
  
  const [percentage, setPercentage] = useState(50); // Default 50% reduction
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

  const calculateTargetSize = (originalSize: number, reductionPercent: number): number => {
    return Math.floor(originalSize * (1 - reductionPercent / 100));
  };

  const getFormatMeta = (format: OutputFormat) => {
    if (format === 'image/webp') {
      return { label: 'WebP' as const, extension: 'webp' as const };
    }

    return { label: 'JPG' as const, extension: 'jpg' as const };
  };

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert(t('Please select a valid image file'));
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
      
      // Auto-process with current percentage
      processImageByPercentage(img, file, percentage, selectedOutputFormats);
    };

    img.src = url;
  }, [percentage, selectedOutputFormats]);

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

  const handlePercentageChange = (newPercentage: number) => {
    setPercentage(newPercentage);
    setImageState(prev => ({
      ...prev,
      processedUrl: '',
      compressedSize: 0,
    }));
    if (imageState.originalUrl && imageState.originalFile) {
      const img = new Image();
      img.onload = () => {
        processImageByPercentage(img, imageState.originalFile!, newPercentage, selectedOutputFormats);
      };
      img.src = imageState.originalUrl;
    }
  };

  const processImageByPercentage = async (
    img: HTMLImageElement,
    file: File,
    reductionPercent: number,
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

      const targetSize = calculateTargetSize(file.size, reductionPercent);
      const tolerance = Math.max(targetSize * 0.05, 1024); // 5% tolerance or 1KB

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

          const diff = blob.size - targetSize;

          // Check if we're within tolerance
          if (Math.abs(diff) <= tolerance) {
            break;
          }

          // Adjust quality based on how far we are from target
          if (diff > 0) {
            // File too large, reduce quality
            quality -= 0.05;
          } else {
            // File too small, increase quality slightly
            quality += 0.02;
          }

          // Clamp quality between 0.1 and 1.0
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
        setImageState(prev => ({
          ...prev,
          processedUrl: nextVariants[0].url,
          compressedSize: nextVariants[0].size,
        }));
      } else {
        setImageState(prev => ({
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
  };

  const downloadImage = async () => {
    if (outputVariants.length === 0) return;

    if (outputVariants.length === 1) {
      const single = outputVariants[0];
      const link = document.createElement('a');
      link.href = single.url;
      link.download = `compressed_${percentage}percent_image.${single.extension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    const zip = new JSZip();
    outputVariants.forEach((variant) => {
      zip.file(`compressed_${percentage}percent_${variant.label.toLowerCase()}.${variant.extension}`, variant.blob);
    });

    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const zipUrl = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = zipUrl;
    link.download = `compressed_${percentage}percent_outputs.zip`;
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
    setImageState(prev => ({
      ...prev,
      processedUrl: '',
      compressedSize: 0,
    }));

    if (!imageState.originalUrl || !imageState.originalFile) return;

    const img = new Image();
    img.onload = () => {
      processImageByPercentage(img, imageState.originalFile!, percentage, nextFormats);
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

  const getActualReduction = (): string => {
    if (!imageState.originalSize || !imageState.compressedSize) return '0';
    return ((imageState.originalSize - imageState.compressedSize) / imageState.originalSize * 100).toFixed(1);
  };

  const isTargetAchieved = () => {
    if (!imageState.compressedSize) return false;
    const actualReduction = parseFloat(getActualReduction());
    return Math.abs(actualReduction - percentage) <= 5; // 5% tolerance
  };

  const page = (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Compress Image by Percentage - Free Online Tool",
            "description": "Free online tool to reduce image size by custom percentage. Choose exact reduction percentage from 10% to 90% for optimal file size control.",
            "url": canonicalUrl,
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />

    <article>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
        <main className="max-w-7xl mx-auto">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-600" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a href={homeHref} itemProp="item" className="hover:text-purple-600 transition-colors">
                  <span itemProp="name">Home</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-gray-400">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="text-gray-900 font-medium">Compress by Percentage</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="text-center mb-12">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Percent className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Compress Image by Percentage
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reduce image file size by custom percentage. Choose from 10% to 90% reduction for optimal file size control. Fast, secure, and works entirely in your browser.
            </p>
          </header>

          {/* Percentage Info Banner */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <Percent className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Current Reduction: {percentage}%</h3>
                <p className="text-sm text-gray-700">
                  Our smart compression algorithm will reduce your image file size by approximately {percentage}% while maintaining visual quality. 
                  Adjust the slider below to choose your desired reduction percentage.
                </p>
              </div>
            </div>
          </div>

          {/* Main Upload Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 mb-12 max-w-4xl mx-auto">
            {!imageState.originalUrl ? (
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="relative border-2 border-dashed border-gray-300 rounded-xl p-16 text-center hover:border-purple-400 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 bg-gradient-to-br from-gray-50 to-gray-100 transition-all cursor-pointer group"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="absolute top-4 left-4 w-20 h-20 bg-purple-100 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" style={{ pointerEvents: 'none' }}></div>
                <div className="absolute bottom-4 right-4 w-24 h-24 bg-pink-100 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" style={{ pointerEvents: 'none' }}></div>
                
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Upload className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-gray-800 mb-3">
                    Upload Image to Compress
                  </p>
                  <p className="text-base text-gray-600 mb-6">
                    Drag & drop or click to browse
                  </p>
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
              <div className="space-y-6 pb-28 sm:pb-0">
                {/* Image Preview */}
                <div className="relative rounded-xl overflow-hidden bg-gray-100 border-2 border-purple-300">
                  {imageState.processedUrl ? (
                    <img
                      src={imageState.processedUrl}
                      alt="Compressed"
                      className="w-full h-auto"
                      style={{ maxHeight: 'clamp(240px, 52vh, 400px)', objectFit: 'contain' }}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-64">
                      <p className="text-gray-400">Processing...</p>
                    </div>
                  )}
                </div>

                {/* Percentage Slider */}
                <div className="hidden sm:block bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-base font-bold text-gray-900">
                      <Percent className="w-5 h-5 inline mr-2 text-purple-600" />
                      Reduction Percentage
                    </label>
                    <span className="text-2xl font-bold text-purple-600">{percentage}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="90"
                    value={percentage}
                    onChange={(e) => handlePercentageChange(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                    style={{
                      background: `linear-gradient(to right, #9333ea 0%, #9333ea ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-2">
                    <span>10%<br/>({t('Minimal')})</span>
                    <span className="text-center">50%<br/>({t('Balanced')})</span>
                    <span className="text-right">90%<br/>({t('Maximum')})</span>
                  </div>
                </div>

                {/* Mobile Sticky Percentage Slider */}
                <div
                  className="sm:hidden fixed inset-x-3 bottom-3 z-30"
                  style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 0.25rem)' }}
                >
                  <div className="bg-white/95 backdrop-blur border border-purple-200 rounded-xl p-4 shadow-xl">
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-bold text-gray-900">
                        <Percent className="w-4 h-4 inline mr-1.5 text-purple-600" />
                        Reduction Percentage
                      </label>
                      <span className="text-xl font-bold text-purple-600">{percentage}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="90"
                      value={percentage}
                      onChange={(e) => handlePercentageChange(Number(e.target.value))}
                      className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                      style={{
                        background: `linear-gradient(to right, #9333ea 0%, #9333ea ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`
                      }}
                    />
                    <div className="flex justify-between text-[11px] text-gray-600 mt-2">
                      <span>10% ({t('Minimal')})</span>
                      <span>50% ({t('Balanced')})</span>
                      <span>90% ({t('Maximum')})</span>
                    </div>
                  </div>
                </div>

                {/* Output Formats */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <p className="text-sm font-bold text-gray-900 mb-3">Output Formats</p>
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
                  <p className="text-xs text-gray-600 mt-2">One format selected = single download. Multiple selected = ZIP download.</p>
                </div>

                {/* Size Comparison */}
                {imageState.compressedSize > 0 && (
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200 text-center">
                      <p className="text-xs text-blue-600 font-medium mb-1">Original</p>
                      <p className="text-lg font-bold text-blue-900">{formatFileSize(imageState.originalSize)}</p>
                    </div>
                    <div className={`bg-gradient-to-br ${isTargetAchieved() ? 'from-green-50 to-green-100 border-green-200' : 'from-purple-50 to-purple-100 border-purple-200'} rounded-lg p-4 border text-center`}>
                      <p className={`text-xs font-medium mb-1 ${isTargetAchieved() ? 'text-green-600' : 'text-purple-600'}`}>Compressed</p>
                      <p className={`text-lg font-bold ${isTargetAchieved() ? 'text-green-900' : 'text-purple-900'}`}>{formatFileSize(imageState.compressedSize)}</p>
                    </div>
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-4 border border-amber-200 text-center">
                      <p className="text-xs text-amber-600 font-medium mb-1">Reduced</p>
                      <p className="text-lg font-bold text-amber-900">{getActualReduction()}%</p>
                    </div>
                  </div>
                )}

                {/* Generated Outputs */}
                {outputVariants.length > 0 && (
                  <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <p className="text-sm font-bold text-gray-900 mb-2">Generated Outputs</p>
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

                {/* Target Status */}
                {imageState.compressedSize > 0 && (
                  <div className={`${isTargetAchieved() ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'} border rounded-lg p-4`}>
                    <div className="flex items-start gap-3">
                      <AlertCircle className={`w-5 h-5 ${isTargetAchieved() ? 'text-green-600' : 'text-amber-600'} flex-shrink-0 mt-0.5`} />
                      <div>
                        <p className={`text-sm font-medium mb-1 ${isTargetAchieved() ? 'text-green-900' : 'text-amber-900'}`}>
                          {isTargetAchieved() ? t('✓ Target Achieved!') : t('⚠ Close to Target')}
                        </p>
                        <p className={`text-xs ${isTargetAchieved() ? 'text-green-700' : 'text-amber-700'}`}>
                          {isTargetAchieved() 
                            ? tt('Successfully reduced by {actual}% (target: {target}%)', { actual: getActualReduction(), target: percentage })
                            : tt('Reduced by {actual}% (target: {target}%). Very close to desired reduction.', { actual: getActualReduction(), target: percentage })
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={resetAll}
                    className="flex-1 py-4 px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors font-bold flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Upload New Image
                  </button>
                  <button
                    onClick={downloadImage}
                    disabled={outputVariants.length === 0 || processing}
                    className="flex-1 py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl transition-all font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    {outputVariants.length > 1 ? 'Download Compressed Outputs (ZIP)' : 'Download Compressed Image'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* About Section */}
          <section className="bg-white rounded-xl shadow-md p-8 border border-gray-200 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About Compress by Percentage Tool</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our free online tool reduces image file size by your chosen percentage. Perfect for when you need precise control over file size reduction for websites, email attachments, storage optimization, and bandwidth management.
              </p>
              <p>
                Simply upload your image, choose your desired reduction percentage (10% to 90%), and our smart algorithm automatically compresses while maintaining visual quality. All processing happens securely in your browser. No registration required, completely free to use.
              </p>
            </div>
          </section>

          {/* Features */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Percent className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Percentage</h3>
              <p className="text-gray-600">Choose exact reduction from 10% to 90%.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-pink-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Algorithm</h3>
              <p className="text-gray-600">Maintains quality while reducing size.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-indigo-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">100% Secure</h3>
              <p className="text-gray-600">All processing happens in your browser.</p>
            </div>
          </section>

          {/* How to Use Section */}
          <section className="bg-white rounded-xl shadow-md p-8 border border-gray-200 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Compress Image by Percentage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Upload Your Image</h3>
                  <p className="text-gray-600">Click the upload box or drag and drop your image file (JPG, PNG, WebP).</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Choose Percentage</h3>
                  <p className="text-gray-600">Adjust the slider to select your desired reduction percentage (10%-90%).</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Preview Results</h3>
                  <p className="text-gray-600">View the compressed image and check the actual reduction achieved.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Download Image</h3>
                  <p className="text-gray-600">Click download to save your compressed image with percentage in filename.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-sm text-purple-800">
                <strong>Pro Tip:</strong> For web optimization, 50-70% reduction works best. For email attachments, try 60-80% reduction. Adjust the slider in real-time to find your perfect balance!
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(0)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>How does percentage-based compression work?</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 0 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 0 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>Our algorithm calculates the target file size based on your chosen percentage reduction, then iteratively adjusts compression quality to achieve that target. For example, choosing 50% reduction will aim to make your file approximately half its original size.</p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(1)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>What percentage should I choose?</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 1 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 1 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>For web images: 50-70% reduction is ideal. For social media: 60-80% works well. For professional use: 30-50% reduction maintains high quality. For email attachments: 70-80% reduction is sufficient. You can adjust the slider in real-time to see the results!</p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(2)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>Will high percentage reduction affect quality?</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 2 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 2 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>Higher reduction percentages (70-90%) will reduce file size significantly but may show some quality loss. Our algorithm optimizes compression to minimize visible artifacts. For best results, preview the compressed image before downloading to ensure it meets your quality requirements.</p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(3)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>Can I adjust the percentage after upload?</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 3 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 3 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>Yes! After uploading, you can move the percentage slider to any value between 10% and 90%. The image will automatically recompress with the new percentage, allowing you to find the perfect balance between file size and quality.</p>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(4)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>Is percentage compression secure?</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 4 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 4 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>Absolutely! All image compression happens entirely in your browser using client-side processing. Your images never leave your device or get uploaded to any server. This ensures complete privacy and security. No data is stored or transmitted.</p>
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

  return translateReactNode(page, dict);
}
