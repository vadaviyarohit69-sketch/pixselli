"use client";

import { useState, useRef, useCallback } from 'react';
import JSZip from 'jszip';
import { Upload, Download, RotateCcw, Image as ImageIcon, Globe, Shield, ChevronDown, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import { translateReactNode } from '@/lib/translateReactNode';
import { COMPRESS_FOR_WEB_TEXT_BY_LOCALE } from '@/lib/compressForWebTranslations';

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

// Web optimization settings
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;
const TARGET_QUALITY = 0.85;

export default function CompressForWebPage() {
  const { locale } = useLanguage();
  const dict = COMPRESS_FOR_WEB_TEXT_BY_LOCALE[locale] ?? {};

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

      // Calculate web-optimized dimensions
      let width = img.width;
      let height = img.height;

      if (width > MAX_WIDTH || height > MAX_HEIGHT) {
        const ratio = Math.min(MAX_WIDTH / width, MAX_HEIGHT / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, width, height);

      const nextVariants: OutputVariant[] = [];

      for (const format of effectiveFormats) {
        const blob = await new Promise<Blob | null>((resolve) => {
          canvas.toBlob((b) => resolve(b), format, TARGET_QUALITY);
        });

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
  }, [selectedOutputFormats]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file');
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
      
      // Auto-process to target size
      processImageToTargetSize(img, file, selectedOutputFormats);
    };

    img.src = url;
  }, [processImageToTargetSize, selectedOutputFormats]);

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

  const downloadImage = async () => {
    if (outputVariants.length === 0) return;

    if (outputVariants.length === 1) {
      const single = outputVariants[0];
      const link = document.createElement('a');
      link.href = single.url;
      link.download = `web_optimized_image.${single.extension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    const zip = new JSZip();
    outputVariants.forEach((variant) => {
      zip.file(`web_optimized_${variant.label.toLowerCase()}.${variant.extension}`, variant.blob);
    });

    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const zipUrl = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = zipUrl;
    link.download = 'web_optimized_outputs.zip';
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

  const calculateSavings = (): string => {
    if (imageState.originalSize === 0 || imageState.compressedSize === 0) return '0';
    const savings = ((imageState.originalSize - imageState.compressedSize) / imageState.originalSize) * 100;
    return savings.toFixed(1);
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
            "name": "Compress for Web - Image Optimizer",
            "description": "Optimize images for fast website loading with automatic resizing to 1920x1080 and 85% quality compression.",
            "url": "https://pixselli.com/compress-for-web",
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
                <a href="/" itemProp="item" className="hover:text-purple-600 transition-colors">
                  <span itemProp="name">Home</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-gray-400">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="text-gray-900 font-medium">Compress for Web</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="text-center mb-12">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Globe className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Compress for Web
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Optimize images for fast website loading with automatic resizing and compression. Fast, secure, and works entirely in your browser.
            </p>
          </header>

          {/* Target Info Banner */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <Globe className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Web-Optimized Settings</h3>
                <p className="text-sm text-gray-700">
                  Automatically resizes to web-friendly dimensions (max 1920×1080) and applies 85% quality compression - the perfect balance for fast loading websites while maintaining excellent visual quality.
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
                    Upload Image to Optimize for Web
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
              <div className="space-y-6">
                {/* Image Preview */}
                <div className="relative rounded-xl overflow-hidden bg-gray-100 border-2 border-purple-300">
                  {imageState.processedUrl ? (
                    <img
                      src={imageState.processedUrl}
                      alt="Compressed"
                      className="w-full h-auto"
                      style={{ maxHeight: '400px', objectFit: 'contain' }}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-64">
                      <p className="text-gray-400">Processing...</p>
                    </div>
                  )}
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
                    <div className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 rounded-lg p-4 border text-center">
                      <p className="text-xs font-medium mb-1 text-green-600">Web-Optimized</p>
                      <p className="text-lg font-bold text-green-900">{formatFileSize(imageState.compressedSize)}</p>
                    </div>
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-4 border border-amber-200 text-center">
                      <p className="text-xs text-amber-600 font-medium mb-1">Savings</p>
                      <p className="text-lg font-bold text-amber-900">{calculateSavings()}%</p>
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

                {/* Success Status */}
                {imageState.compressedSize > 0 && (
                  <div className="bg-green-50 border-green-200 border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium mb-1 text-green-900">
                          ✓ Web-Optimized Successfully!
                        </p>
                        <p className="text-xs text-green-700">
                          Compressed to {formatFileSize(imageState.compressedSize)} with 85% quality. Perfect for fast website loading while maintaining excellent visual quality.
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
                    {outputVariants.length > 1 ? 'Download Web-Optimized Outputs (ZIP)' : 'Download Web-Optimized Image'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* About Section */}
          <section className="bg-white rounded-xl shadow-md p-8 border border-gray-200 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About Compress for Web Tool</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our free online tool optimizes images for fast website loading. It automatically resizes large images to web-friendly dimensions (max 1920×1080) and applies 85% quality compression - the sweet spot for balancing file size and visual quality on websites.
              </p>
              <p>
                Perfect for website owners, bloggers, and developers who need to optimize images for fast page load times without sacrificing too much quality. All processing happens securely in your browser. No registration required, completely free to use.
              </p>
            </div>
          </section>

          {/* Why Web Optimization Matters Section */}
          <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-md p-8 border border-purple-200 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Web Image Optimization Matters</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-5 rounded-xl">
                <h3 className="font-bold text-purple-700 mb-3">🚀 Faster Page Load</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Images often account for 50-80% of a webpage's total size. Optimized images can reduce 
                  page load time by 2-5 seconds, significantly improving user experience.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-xl">
                <h3 className="font-bold text-purple-700 mb-3">📈 Better SEO Rankings</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Google uses page speed as a ranking factor. Faster loading pages rank higher in search 
                  results and get more organic traffic. Core Web Vitals directly measure image performance.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl">
                <h3 className="font-bold text-purple-700 mb-3">💰 Lower Hosting Costs</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Smaller images mean less bandwidth usage. High-traffic websites can save significantly 
                  on hosting and CDN costs by serving optimized images.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl">
                <h3 className="font-bold text-purple-700 mb-3">📱 Mobile Performance</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Over 60% of web traffic is mobile. Optimized images load faster on cellular connections 
                  and consume less of users' data plans.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-purple-100">
                    <th className="text-left py-3 px-4 font-bold text-gray-900">Impact Area</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900">Before Optimization</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900">After Optimization</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 px-4 font-medium">Average Image Size</td>
                    <td className="py-3 px-4 text-red-600">1-5 MB</td>
                    <td className="py-3 px-4 text-green-600">100-300 KB</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 font-medium">Page Load Time</td>
                    <td className="py-3 px-4 text-red-600">5-10 seconds</td>
                    <td className="py-3 px-4 text-green-600">1-3 seconds</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Bounce Rate</td>
                    <td className="py-3 px-4 text-red-600">Higher</td>
                    <td className="py-3 px-4 text-green-600">Lower</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 font-medium">Google Rankings</td>
                    <td className="py-3 px-4 text-orange-600">Penalized</td>
                    <td className="py-3 px-4 text-green-600">Improved</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Features */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Web-Optimized</h3>
              <p className="text-gray-600">Perfect balance for fast loading websites.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-pink-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Resizing</h3>
              <p className="text-gray-600">Auto-resize to 1920×1080 max dimensions.</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Optimize Images for Web</h2>
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Auto Optimization</h3>
                  <p className="text-gray-600">Smart resize to 1920×1080 max and 85% quality compression.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Review Results</h3>
                  <p className="text-gray-600">Check file size reduction and quality for your website needs.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Download & Use</h3>
                  <p className="text-gray-600">Download your web-optimized image ready for your website.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-sm text-purple-800">
                <strong>Pro Tip:</strong> This tool is perfect for blog posts, product images, and general website content. The 85% quality provides excellent visuals while ensuring fast page load times.
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
                  <span>What makes this different from regular compression?</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 0 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 0 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>This tool is specifically optimized for web usage. It automatically resizes oversized images to web-friendly dimensions (max 1920×1080) and applies 85% quality compression - the sweet spot for balancing file size and visual quality on websites.</p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(1)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>Why 85% quality?</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 1 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 1 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>85% quality is considered the optimal balance for web images. It provides significant file size reduction while maintaining excellent visual quality that's virtually indistinguishable from the original to most users. This helps websites load faster without sacrificing appearance.</p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(2)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>Will my image be resized?</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 2 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 2 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>Only if necessary. Images larger than 1920×1080 pixels will be resized to fit within these dimensions while maintaining the original aspect ratio. Smaller images keep their original dimensions. This prevents unnecessarily large images from slowing down your website.</p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(3)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>What file format is the output?</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 3 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 3 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>You can download JPG, WebP, or both (as a ZIP) depending on the output formats you select.</p>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(4)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>Is my image secure and private?</span>
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
