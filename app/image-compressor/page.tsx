"use client";

import { useLanguage } from '@/components/LanguageProvider';
import { getLocaleBasePath } from '@/lib/i18n';
import { IMAGE_RESIZER_TEXT_BY_LOCALE } from '@/lib/imageResizerTranslations';
import { IMAGE_COMPRESSOR_TEXT_BY_LOCALE } from '@/lib/imageCompressorTranslations';
import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { AlertCircle, Upload, Download, RotateCcw, Image as ImageIcon, Maximize2, Minimize2, Lock, Unlock, Info, ChevronDown, ChevronUp, Shield, Check, Plus, X, FolderArchive, Crop, Move, ZoomIn, ZoomOut, CheckCircle2, RefreshCw, Gauge, Percent, Ruler, Train, Calendar, Droplet, Type, Contrast, Palette, Eye, Scan, Target, Pencil } from 'lucide-react';
import JSZip from 'jszip';
import { MARKETPLACE_PRESETS, MARKETPLACE_PRESET_CATEGORY } from '@/lib/marketplacePresets';
import { normalizeFileToken, parseMarketplaceToken as parseMarketplaceOutputToken, renderUnifiedOutputFrame } from '@/lib/unifiedOutputProcessor';

interface ImageState {
  originalFile: File | null;
  originalUrl: string;
  originalSize: number;
  originalWidth: number;
  originalHeight: number;
}

interface QualityPreset {
  id: string;
  name: string;
  quality: number;
  description: string;
}

interface FormatOption {
  id: string;
  name: string;
  mimeType: string;
  extension: string;
}

interface ResizePreset {
  id: string;
  name: string;
  width: number;
  height: number;
  category: string;
  note?: string;
}

interface ResizeTarget {
  id: string;
  name: string;
  width: number;
  height: number;
  category: string;
}

interface CustomSize {
  id: string;
  name: string;
  width: number;
  height: number;
}

const QUALITY_PRESETS: QualityPreset[] = [
  { id: 'max', name: 'Maximum', quality: 95, description: 'Best quality, minimal compression' },
  { id: 'high', name: 'High', quality: 85, description: 'Great quality, good compression' },
  { id: 'medium', name: 'Medium', quality: 75, description: 'Balanced quality & size' },
  { id: 'good', name: 'Good', quality: 65, description: 'Smaller files, good quality' },
  { id: 'web', name: 'Web Optimized', quality: 55, description: 'Ideal for websites' },
  { id: 'small', name: 'Small', quality: 45, description: 'Very small files' },
  { id: 'tiny', name: 'Tiny', quality: 30, description: 'Smallest possible' },
];

const FORMAT_OPTIONS: FormatOption[] = [
  { id: 'jpeg', name: 'JPEG', mimeType: 'image/jpeg', extension: 'jpg' },
  { id: 'png', name: 'PNG', mimeType: 'image/png', extension: 'png' },
  { id: 'webp', name: 'WebP', mimeType: 'image/webp', extension: 'webp' },
];

const RESIZE_PRESETS: ResizePreset[] = [
  // Social Media
  { id: 'instagram-post', name: 'Instagram Post', width: 1080, height: 1080, category: 'Social Media' },
  { id: 'instagram-story', name: 'Instagram Story', width: 1080, height: 1920, category: 'Social Media' },
  { id: 'facebook-cover', name: 'Facebook Cover', width: 820, height: 312, category: 'Social Media' },
  { id: 'twitter-header', name: 'Twitter Header', width: 1500, height: 500, category: 'Social Media' },
  { id: 'linkedin-banner', name: 'LinkedIn Banner', width: 1584, height: 396, category: 'Social Media' },
  { id: 'youtube-thumbnail', name: 'YouTube Thumbnail', width: 1280, height: 720, category: 'Social Media' },
  { id: 'youtube-banner', name: 'YouTube Banner', width: 2560, height: 1440, category: 'Social Media' },

  // Ecommerce / Marketplace Sizes (shared)
  ...MARKETPLACE_PRESETS,

  // Standard Resolutions
  { id: 'hd', name: 'HD (720p)', width: 1280, height: 720, category: 'Resolution' },
  { id: 'full-hd', name: 'Full HD (1080p)', width: 1920, height: 1080, category: 'Resolution' },
  { id: '2k', name: '2K', width: 2560, height: 1440, category: 'Resolution' },
  { id: '4k', name: '4K', width: 3840, height: 2160, category: 'Resolution' },
  // Web Sizes
  { id: 'web-small', name: 'Web Small', width: 640, height: 480, category: 'Web' },
  { id: 'web-medium', name: 'Web Medium', width: 1024, height: 768, category: 'Web' },
  { id: 'web-large', name: 'Web Large', width: 1920, height: 1080, category: 'Web' },
  // Common Sizes
  { id: 'thumbnail', name: 'Thumbnail', width: 150, height: 150, category: 'Common' },
  { id: 'icon', name: 'Icon', width: 256, height: 256, category: 'Common' },
  { id: 'avatar', name: 'Avatar', width: 400, height: 400, category: 'Common' },
];

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
        IMAGE_COMPRESSOR_TEXT_BY_LOCALE[locale]?.[en] ||
        IMAGE_RESIZER_TEXT_BY_LOCALE[locale]?.[en] ||
        en
      );
    },
    [locale]
  );
  const localeBasePath = getLocaleBasePath(locale);
  const pagePath = localeBasePath ? `${localeBasePath}/image-compressor` : '/image-compressor';
  const pageUrl = `https://pixselli.com${pagePath}`;
  const homePath = localeBasePath || '/';
  const localizePath = (path: string) => (localeBasePath ? `${localeBasePath}${path}` : path);

  const [imageState, setImageState] = useState<ImageState>({
    originalFile: null,
    originalUrl: '',
    originalSize: 0,
    originalWidth: 0,
    originalHeight: 0,
  });
  
  const [selectedQualities, setSelectedQualities] = useState<Set<string>>(new Set());
  const [selectedFormats, setSelectedFormats] = useState<Set<string>>(new Set(['jpeg']));
  const [selectedResizePresets, setSelectedResizePresets] = useState<Set<string>>(new Set());
  const [sourceImages, setSourceImages] = useState<ImageState[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [customQualities, setCustomQualities] = useState<number[]>([]);
  const [newCustomQuality, setNewCustomQuality] = useState<number>(70);
  const [customSizes, setCustomSizes] = useState<CustomSize[]>([]);
  const [newCustomMarketplaceName, setNewCustomMarketplaceName] = useState('');
  const [newCustomWidth, setNewCustomWidth] = useState<number>(800);
  const [newCustomHeight, setNewCustomHeight] = useState<number>(600);
  const [recentMarketplaceNames, setRecentMarketplaceNames] = useState<string[]>([]);
  const [editingCustomSizeId, setEditingCustomSizeId] = useState<string | null>(null);
  const [editingCustomMarketplaceName, setEditingCustomMarketplaceName] = useState('');
  const [editingCustomWidth, setEditingCustomWidth] = useState<number>(0);
  const [editingCustomHeight, setEditingCustomHeight] = useState<number>(0);
  const [presetPickerCategory, setPresetPickerCategory] = useState('');
  const [presetPickerId, setPresetPickerId] = useState('');
  const [projectName, setProjectName] = useState('');
  const [safeAreaPercent, setSafeAreaPercent] = useState(12);
  const [showSafeAreaGuide, setShowSafeAreaGuide] = useState(true);
  const [previewTargetId, setPreviewTargetId] = useState('');
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showMobilePreview, setShowMobilePreview] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  const presetCategories = useMemo(() => [...new Set(RESIZE_PRESETS.map((p) => p.category))], []);
  const pickerPresets = useMemo(
    () => RESIZE_PRESETS.filter((preset) => preset.category === presetPickerCategory),
    [presetPickerCategory]
  );
  const baseMarketplaceSuggestions = useMemo(
    () => [...new Set(MARKETPLACE_PRESETS.map((preset) => preset.name.split('-')[0].trim()).filter(Boolean))],
    []
  );
  const marketplaceNameSuggestions = useMemo(() => {
    const combined = [...recentMarketplaceNames, ...baseMarketplaceSuggestions]
      .map((name) => name.trim())
      .filter(Boolean);
    return [...new Set(combined)].slice(0, 12);
  }, [recentMarketplaceNames, baseMarketplaceSuggestions]);

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  useEffect(() => {
    if (!presetPickerCategory && presetCategories.length > 0) {
      setPresetPickerCategory(presetCategories[0]);
    }
  }, [presetPickerCategory, presetCategories]);

  useEffect(() => {
    if (!presetPickerCategory) {
      setPresetPickerId('');
      return;
    }
    if (!pickerPresets.some((preset) => preset.id === presetPickerId)) {
      setPresetPickerId(pickerPresets[0]?.id ?? '');
    }
  }, [presetPickerCategory, pickerPresets, presetPickerId]);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  const handleFileSelect = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const imageFiles = files.filter((file) => file.type.startsWith('image/'));
    if (imageFiles.length === 0) {
      alert(tx('Please select valid image files', 'Por favor selecciona archivos de imagen validos'));
      return;
    }

    const parsedImages = await Promise.all(
      imageFiles.map(
        (file) =>
          new Promise<ImageState>((resolve, reject) => {
            const img = new window.Image();
            const url = URL.createObjectURL(file);
            img.onload = () => {
              resolve({
                originalFile: file,
                originalUrl: url,
                originalSize: file.size,
                originalWidth: img.width,
                originalHeight: img.height,
              });
            };
            img.onerror = () => reject(new Error('Failed to load image'));
            img.src = url;
          })
      )
    );

    setSourceImages((prev) => {
      const merged = [...prev, ...parsedImages];
      if (prev.length === 0 && merged.length > 0) {
        setImageState(merged[0]);
        setActiveImageIndex(0);
      }
      return merged;
    });
  }, [tx]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const input = fileInputRef.current;
      if (input) {
        const dataTransfer = new DataTransfer();
        Array.from(files).forEach((file) => {
          if (file.type.startsWith('image/')) {
            dataTransfer.items.add(file);
          }
        });
        input.files = dataTransfer.files;
        handleFileSelect({ target: input } as any);
      }
    }
  }, [handleFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const toggleQuality = (qualityId: string) => {
    setSelectedQualities(prev => {
      const newSet = new Set(prev);
      if (newSet.has(qualityId)) {
        newSet.delete(qualityId);
      } else {
        newSet.add(qualityId);
      }
      return newSet;
    });
  };

  const toggleFormat = (formatId: string) => {
    setSelectedFormats(prev => {
      const newSet = new Set(prev);
      if (newSet.has(formatId)) {
        if (newSet.size > 1) newSet.delete(formatId);
      } else {
        newSet.add(formatId);
      }
      return newSet;
    });
  };

  const addCustomQuality = () => {
    if (newCustomQuality >= 10 && newCustomQuality <= 100 && !customQualities.includes(newCustomQuality)) {
      setCustomQualities(prev => [...prev, newCustomQuality].sort((a, b) => b - a));
    }
  };

  const removeCustomQuality = (quality: number) => {
    setCustomQualities(prev => prev.filter(q => q !== quality));
  };

  const selectAllQualities = () => {
    setSelectedQualities(new Set(QUALITY_PRESETS.map(q => q.id)));
  };

  const clearAllQualities = () => {
    setSelectedQualities(new Set());
    setCustomQualities([]);
  };

  const toggleResizePreset = (presetId: string) => {
    setSelectedResizePresets(prev => {
      const newSet = new Set(prev);
      if (newSet.has(presetId)) {
        newSet.delete(presetId);
      } else {
        newSet.add(presetId);
      }
      return newSet;
    });
  };

  const selectAllResizeInCategory = (category: string) => {
    const categoryPresets = RESIZE_PRESETS.filter(p => p.category === category);
    setSelectedResizePresets(prev => {
      const newSet = new Set(prev);
      categoryPresets.forEach(p => newSet.add(p.id));
      return newSet;
    });
  };

  const clearResizeInCategory = (category: string) => {
    const categoryPresets = RESIZE_PRESETS.filter(p => p.category === category);
    setSelectedResizePresets(prev => {
      const newSet = new Set(prev);
      categoryPresets.forEach(p => newSet.delete(p.id));
      return newSet;
    });
  };

  const addPresetFromPicker = () => {
    if (!presetPickerId) return;
    setSelectedResizePresets((prev) => {
      const next = new Set(prev);
      next.add(presetPickerId);
      return next;
    });
  };

  const addCustomSize = () => {
    const marketplaceName = newCustomMarketplaceName.trim();
    if (!marketplaceName) {
      alert(tx('Please enter marketplace name', 'Ingresa el nombre del marketplace'));
      return;
    }
    if (newCustomWidth <= 0 || newCustomHeight <= 0) {
      alert(tx('Please enter valid dimensions', 'Ingresa dimensiones validas'));
      return;
    }
    const duplicateExists = customSizes.some(
      (size) =>
        normalizeFileToken(size.name) === normalizeFileToken(marketplaceName) &&
        size.width === newCustomWidth &&
        size.height === newCustomHeight
    );
    if (duplicateExists) {
      alert(tx('This marketplace size already exists', 'Este tamano de marketplace ya existe'));
      return;
    }
    setCustomSizes((prev) => [
      ...prev,
      { id: `custom-${Date.now()}`, name: marketplaceName, width: newCustomWidth, height: newCustomHeight },
    ]);
    setRecentMarketplaceNames((prev) => [marketplaceName, ...prev.filter((name) => name.toLowerCase() !== marketplaceName.toLowerCase())].slice(0, 8));
    setNewCustomMarketplaceName('');
  };

  const startEditCustomSize = (size: CustomSize) => {
    setEditingCustomSizeId(size.id);
    setEditingCustomMarketplaceName(size.name);
    setEditingCustomWidth(size.width);
    setEditingCustomHeight(size.height);
  };

  const cancelEditCustomSize = () => {
    setEditingCustomSizeId(null);
    setEditingCustomMarketplaceName('');
    setEditingCustomWidth(0);
    setEditingCustomHeight(0);
  };

  const saveEditCustomSize = () => {
    if (!editingCustomSizeId) return;
    const nextName = editingCustomMarketplaceName.trim();
    if (!nextName) {
      alert(tx('Please enter marketplace name', 'Ingresa el nombre del marketplace'));
      return;
    }
    if (editingCustomWidth <= 0 || editingCustomHeight <= 0) {
      alert(tx('Please enter valid dimensions', 'Ingresa dimensiones validas'));
      return;
    }
    const duplicateExists = customSizes.some(
      (size) =>
        size.id !== editingCustomSizeId &&
        normalizeFileToken(size.name) === normalizeFileToken(nextName) &&
        size.width === editingCustomWidth &&
        size.height === editingCustomHeight
    );
    if (duplicateExists) {
      alert(tx('This marketplace size already exists', 'Este tamano de marketplace ya existe'));
      return;
    }
    setCustomSizes((prev) =>
      prev.map((size) =>
        size.id === editingCustomSizeId
          ? { ...size, name: nextName, width: editingCustomWidth, height: editingCustomHeight }
          : size
      )
    );
    setRecentMarketplaceNames((prev) => [nextName, ...prev.filter((name) => name.toLowerCase() !== nextName.toLowerCase())].slice(0, 8));
    cancelEditCustomSize();
  };

  const removeCustomSize = (id: string) => {
    setCustomSizes(prev => prev.filter(size => size.id !== id));
    if (editingCustomSizeId === id) {
      cancelEditCustomSize();
    }
  };

  const removeSourceImage = (index: number) => {
    setSourceImages((prev) => {
      const next = prev.filter((_, i) => i !== index);

      if (next.length === 0) {
        setImageState({
          originalFile: null,
          originalUrl: '',
          originalSize: 0,
          originalWidth: 0,
          originalHeight: 0,
        });
        setActiveImageIndex(0);
        return next;
      }

      const nextIndex = Math.max(0, Math.min(activeImageIndex, next.length - 1));
      setActiveImageIndex(nextIndex);
      setImageState(next[nextIndex]);
      return next;
    });
  };

  const normalizeText = (value: string) => {
    return normalizeFileToken(value);
  };

  const getSelectedResizeTargets = useCallback((): ResizeTarget[] => {
    const targets: ResizeTarget[] = [];

    RESIZE_PRESETS.forEach((preset) => {
      if (selectedResizePresets.has(preset.id)) {
        targets.push({
          id: preset.id,
          name: preset.name,
          width: preset.width,
          height: preset.height,
          category: preset.category,
        });
      }
    });

    customSizes.forEach((size) => {
      targets.push({
        id: size.id,
        name: size.name,
        width: size.width,
        height: size.height,
        category: MARKETPLACE_PRESET_CATEGORY,
      });
    });

    if (targets.length === 0 && imageState.originalWidth > 0 && imageState.originalHeight > 0) {
      targets.push({
        id: 'original',
        name: 'Original',
        width: imageState.originalWidth,
        height: imageState.originalHeight,
        category: 'Original',
      });
    }

    return targets;
  }, [selectedResizePresets, customSizes, imageState.originalWidth, imageState.originalHeight]);

  const parseMarketplaceToken = (target: ResizeTarget) => {
    return parseMarketplaceOutputToken({
      category: target.category,
      displayName: target.name,
      fallbackId: target.id,
      marketplaceCategory: MARKETPLACE_PRESET_CATEGORY,
    });
  };

  const getTotalOutputCount = () => {
    const qualityCount = selectedQualities.size + customQualities.length;
    const sizeCount = selectedResizePresets.size + customSizes.length;
    const effectiveSizeCount = sizeCount > 0 ? sizeCount : 1;
    return qualityCount * selectedFormats.size * effectiveSizeCount;
  };

  const compressImage = async (
    img: HTMLImageElement,
    canvas: HTMLCanvasElement,
    quality: number,
    mimeType: string,
    targetWidth: number,
    targetHeight: number,
    options?: {
      showGuides?: boolean;
      targetCategory?: string;
    }
  ): Promise<Blob> => {
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');

    renderUnifiedOutputFrame({
      canvas,
      ctx,
      image: img,
      targetWidth,
      targetHeight,
      category: options?.targetCategory,
      marketplaceCategory: MARKETPLACE_PRESET_CATEGORY,
      safeAreaPercent,
      applyUnifiedLayout: true,
      showGuides: options?.showGuides,
      guideColor: 'rgba(147, 51, 234, 0.9)',
      forceBackgroundFill: true,
      paddingColor: '#FFFFFF',
    });

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (blob) resolve(blob);
          else reject(new Error('Failed to create blob'));
        },
        mimeType,
        quality / 100
      );
    });
  };

  const renderPreview = useCallback(async () => {
    if (!previewCanvasRef.current || !imageState.originalUrl) return;

    const targets = getSelectedResizeTargets();
    const target = targets.find((item) => item.id === previewTargetId) || targets[0];
    if (!target) return;

    const format = FORMAT_OPTIONS.find((item) => selectedFormats.has(item.id)) || FORMAT_OPTIONS[0];
    const qualityPreset = QUALITY_PRESETS.find((preset) => selectedQualities.has(preset.id));
    const qualityValue = customQualities[0] || qualityPreset?.quality || 85;

    const img = new window.Image();
    img.src = imageState.originalUrl;
    await new Promise((resolve) => {
      img.onload = resolve;
    });

    try {
      await compressImage(
        img,
        previewCanvasRef.current,
        qualityValue,
        format.mimeType,
        target.width,
        target.height,
        { showGuides: showSafeAreaGuide, targetCategory: target.category }
      );
    } catch {
      // Keep UI responsive if preview fails.
    }
  }, [previewTargetId, imageState.originalUrl, selectedFormats, selectedQualities, customQualities, getSelectedResizeTargets, showSafeAreaGuide, safeAreaPercent]);

  useEffect(() => {
    renderPreview();
  }, [renderPreview]);

  const processAllVariants = async () => {
    if (sourceImages.length === 0 || !canvasRef.current) return;
    if (getTotalOutputCount() === 0) {
      alert(tx('Please select at least one quality level', 'Selecciona al menos un nivel de calidad'));
      return;
    }

    setProcessing(true);
    setProgress(0);

    try {
      const canvas = canvasRef.current;
      const zip = new JSZip();
      const normalizedProjectName = normalizeText(projectName);
      const sizesToProcess = getSelectedResizeTargets();

      // Build list of all variants to process
      const variants: { quality: number; qualityName: string; format: FormatOption; size: ResizeTarget }[] = [];

      // Add preset qualities
      QUALITY_PRESETS.forEach(preset => {
        if (selectedQualities.has(preset.id)) {
          FORMAT_OPTIONS.filter(f => selectedFormats.has(f.id)).forEach(format => {
            sizesToProcess.forEach(size => {
              variants.push({ quality: preset.quality, qualityName: preset.name.toLowerCase(), format, size });
            });
          });
        }
      });

      // Add custom qualities
      customQualities.forEach(quality => {
        FORMAT_OPTIONS.filter(f => selectedFormats.has(f.id)).forEach(format => {
          sizesToProcess.forEach(size => {
            variants.push({ quality, qualityName: `q${quality}`, format, size });
          });
        });
      });

      const totalJobs = sourceImages.length * variants.length;
      let doneJobs = 0;
      const usedNames = new Map<string, number>();

      for (let imageIndex = 0; imageIndex < sourceImages.length; imageIndex++) {
        const source = sourceImages[imageIndex];
        const img = new window.Image();
        img.src = source.originalUrl;
        await new Promise((resolve) => {
          img.onload = resolve;
        });

        for (let i = 0; i < variants.length; i++) {
          const { quality, qualityName, format, size } = variants[i];
          const blob = await compressImage(
            img,
            canvas,
            quality,
            format.mimeType,
            size.width,
            size.height,
            { targetCategory: size.category }
          );

          const sequenceToken = `image${imageIndex + 1}`;
          const marketplaceToken = parseMarketplaceToken(size);
          const prefix = normalizedProjectName ? `${normalizedProjectName}-` : '';
          const rawBaseName = `${prefix}${sequenceToken}-${marketplaceToken}-${qualityName}`;
          const seenCount = usedNames.get(rawBaseName) || 0;
          usedNames.set(rawBaseName, seenCount + 1);
          const uniqueName = seenCount === 0 ? rawBaseName : `${rawBaseName}-${seenCount + 1}`;

          zip.file(`${uniqueName}.${format.extension}`, blob);

          doneJobs += 1;
          setProgress(Math.round((doneJobs / totalJobs) * 100));
        }
      }

      // Generate and download ZIP
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const downloadUrl = URL.createObjectURL(zipBlob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      const zipBaseName = normalizedProjectName || 'compressed-images';
      link.download = normalizeDownloadName(`${zipBaseName}-marketplace-exports.zip`);
      link.click();
      URL.revokeObjectURL(downloadUrl);

    } catch (error) {
      console.error('Error processing images:', error);
      alert(tx('Error processing images. Please try again.', 'Error al procesar imagenes. Intentalo de nuevo.'));
    } finally {
      setProcessing(false);
      setProgress(0);
    }
  };

  const resetAll = () => {
    setImageState({
      originalFile: null,
      originalUrl: '',
      originalSize: 0,
      originalWidth: 0,
      originalHeight: 0,
    });
    setSelectedQualities(new Set());
    setSelectedFormats(new Set(['jpeg']));
    setSelectedResizePresets(new Set());
    setCustomQualities([]);
    setCustomSizes([]);
    setSourceImages([]);
    setActiveImageIndex(0);
    setProjectName('');
    setSafeAreaPercent(12);
    setShowSafeAreaGuide(true);
    setPreviewTargetId('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
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
            "name": tx('Image Compressor - Free Online Image Compression Tool', 'Compresor de imagen - Herramienta gratis online'),
            "description": tx(
              'Free online image compressor to reduce image file size without losing quality. Compress JPG, PNG, WebP images with adjustable quality settings.',
              'Compresor de imagen online gratis para reducir el tamano sin perder calidad. Comprime JPG, PNG y WebP con ajustes de calidad.'
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
              tx('Compress JPG images', 'Comprimir imagenes JPG'),
              tx('Compress PNG images', 'Comprimir imagenes PNG'),
              tx('Compress WebP images', 'Comprimir imagenes WebP'),
              tx('Adjustable quality slider', 'Control deslizante de calidad'),
              tx('Real-time compression preview', 'Vista previa en tiempo real'),
              tx('Batch compression support', 'Soporte de compresion por lotes')
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
            "name": tx('How to Compress Images Online', 'Como comprimir imagenes online'),
            "description": tx(
              'Learn how to compress images without losing quality using free online tool',
              'Aprende a comprimir imagenes sin perder calidad con una herramienta online gratis'
            ),
            "image": "https://pixselli.com/images/compress-guide.jpg",
            "totalTime": "PT1M",
            "supply": [
              {
                "@type": "HowToSupply",
                "name": tx('Image File (JPG, PNG, WebP)', 'Archivo de imagen (JPG, PNG, WebP)')
              }
            ],
            "tool": [
              {
                "@type": "HowToTool",
                "name": tx('Pixselli Image Compressor', 'Compresor de imagen de Pixselli')
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
                "name": tx('Adjust Quality', 'Ajustar calidad'),
                "text": tx(
                  'Use the quality slider to adjust compression level from 10% to 100%. Higher quality means larger file size',
                  'Usa el control de calidad para ajustar la compresion de 10% a 100%. Mayor calidad significa mayor tamano de archivo'
                ),
                "url": `${pageUrl}#step2`
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": tx('Preview Results', 'Previsualizar resultados'),
                "text": tx(
                  'Compare original and compressed image size in real-time. See exact file size savings percentage',
                  'Compara el tamano original y comprimido en tiempo real. Mira el porcentaje exacto de ahorro'
                ),
                "url": `${pageUrl}#step3`
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": tx('Download Compressed Image', 'Descargar imagen comprimida'),
                "text": tx(
                  'Download your compressed image with optimal quality and smaller file size',
                  'Descarga tu imagen comprimida con calidad optima y menor tamano de archivo'
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
                "name": tx('What is image compression?', 'Que es la compresion de imagen?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'Image compression reduces file size by removing redundant data while maintaining visual quality. Our tool uses smart compression algorithms to optimize JPG, PNG, and WebP images without noticeable quality loss.',
                    'La compresion de imagen reduce el tamano eliminando datos redundantes mientras mantiene la calidad visual. Nuestra herramienta optimiza JPG, PNG y WebP sin perdida notable de calidad.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('What quality setting should I use?', 'Que ajuste de calidad debo usar?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'For web images: 70-85% quality provides best balance. For printing: 85-95% quality recommended. For social media: 70-80% quality is sufficient. Lower quality = smaller file size but may show artifacts.',
                    'Para web: 70-85% ofrece el mejor equilibrio. Para impresion: 85-95% recomendado. Para redes sociales: 70-80% suele ser suficiente.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('Does compression reduce image dimensions?', 'La compresion reduce las dimensiones de imagen?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'No, compression only reduces file size, not pixel dimensions. Your image width and height remain unchanged. Use our Image Resizer tool if you need to change dimensions.',
                    'No, la compresion solo reduce el tamano del archivo, no las dimensiones en pixeles. El ancho y alto permanecen igual.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('Can I compress images without quality loss?', 'Puedo comprimir imagenes sin perder calidad?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'Yes! Set quality to 90-100% for minimal quality loss. Our tool uses smart compression that removes only unnecessary data while preserving visual quality. Results depend on original image complexity.',
                    'Si. Configura calidad en 90-100% para perdida minima. Los resultados dependen de la complejidad de la imagen original.'
                  )
                }
              },
              {
                "@type": "Question",
                "name": tx('Is image compression secure and private?', 'La compresion de imagen es segura y privada?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx(
                    'Absolutely! All compression happens locally in your browser using client-side JavaScript. Your images never leave your device or get uploaded to any server, ensuring complete privacy.',
                    'Si. Toda la compresion ocurre localmente en tu navegador. Tus imagenes nunca salen de tu dispositivo ni se suben a servidores.'
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
            "name": tx('Pixselli Image Compressor', 'Compresor de imagen de Pixselli'),
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
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
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
                <span itemProp="name" className="text-gray-900 font-medium">{tx('Image Compressor', 'Compresor de imagen')}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="text-center mb-12">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Minimize2 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {tx('Image Compressor', 'Compresor de imagen')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {tx('Make your images smaller in size while they still look clear. Compress JPG, PNG, and WebP files with a simple quality slider—perfect for websites, emails, and faster loading pages. Everything works in your browser and your images stay on your device.', 'Haz tus imagenes mas ligeras manteniendo buena claridad. Comprime JPG, PNG y WebP con un control simple de calidad, ideal para web, correo y carga rapida.')}
            </p>
          </header>

          {/* Main Upload Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 mb-12 max-w-4xl mx-auto">
            {!imageState.originalUrl ? (
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="relative border-2 border-dashed border-gray-300 rounded-xl p-16 text-center hover:border-purple-400 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 bg-gradient-to-br from-gray-50 to-gray-100 transition-all cursor-pointer group"
                style={{ overflow: 'hidden' }}
                onClick={() => fileInputRef.current?.click()}
              >
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-20 h-20 bg-purple-100 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" style={{ pointerEvents: 'none' }}></div>
                <div className="absolute bottom-4 right-4 w-24 h-24 bg-pink-100 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" style={{ pointerEvents: 'none' }}></div>
                
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Upload className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-gray-800 mb-3">
                    {tx('Drag & drop your image here', 'Arrastra y suelta tu imagen aqui')}
                  </p>
                  <p className="text-base text-gray-600 mb-6">
                    {tx('or click to choose a file from your device', 'o haz clic para elegir un archivo desde tu dispositivo')}
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
                  <p className="text-sm text-gray-500">
                    {tx('Maximum file size: 10MB per image. You can upload multiple images.', 'Tamano maximo: 10MB por imagen. Puedes subir varias imagenes.')}
                  </p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>
            ) : (
              <div className="space-y-6">
                {/* Image Preview & Info */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Original Image */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">{tx('Your Image', 'Tu imagen')}</h3>
                    <div className="relative rounded-xl overflow-hidden bg-gray-100 border-2 border-gray-300">
                      <img
                        src={imageState.originalUrl}
                        alt={tx('Original image', 'Imagen original')}
                        className="w-full h-auto"
                        style={{ maxHeight: '250px', objectFit: 'contain' }}
                      />
                    </div>
                    <div className="mt-3 bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{tx('File Size:', 'Tamano de archivo:')}</span>
                        <span className="font-semibold text-gray-900">{formatFileSize(imageState.originalSize)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{tx('Dimensions:', 'Dimensiones:')}</span>
                        <span className="font-semibold text-gray-900">{imageState.originalWidth} × {imageState.originalHeight} px</span>
                      </div>
                    </div>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full mt-3 py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium text-sm"
                    >
                      {tx('Add More Images', 'Agregar mas imagenes')}
                    </button>
                    {sourceImages.length > 1 && (
                      <div className="mt-3">
                        <p className="text-xs font-semibold text-gray-600 mb-2">{tx('Uploaded Images', 'Imagenes subidas')} ({sourceImages.length})</p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {sourceImages.map((source, index) => (
                            <div key={`${source.originalFile?.name || 'image'}-${index}`} className="relative">
                              <button
                                type="button"
                                onClick={() => {
                                  setActiveImageIndex(index);
                                  setImageState(source);
                                }}
                                className={`w-full border-2 rounded-lg overflow-hidden ${activeImageIndex === index ? 'border-purple-500' : 'border-gray-200'}`}
                              >
                                <img src={source.originalUrl} alt={`Uploaded ${index + 1}`} className="w-full h-16 object-cover" />
                              </button>
                              <button
                                type="button"
                                onClick={() => removeSourceImage(index)}
                                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center shadow"
                                aria-label={tx('Remove image', 'Eliminar imagen') + ` ${index + 1}`}
                              >
                                <X className="w-3 h-3" />
                              </button>
                              <div className="text-[10px] text-center mt-1 text-gray-500">{tx('Image', 'Imagen')} {index + 1}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-4 border border-purple-200 bg-purple-50 rounded-xl p-3">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-semibold text-purple-800">{tx('Format Preview', 'Vista previa de formato')}</p>
                        {previewTargetId && (
                          <span className="text-[10px] px-2 py-1 bg-white border border-purple-200 rounded-full text-purple-700">
                            {getSelectedResizeTargets().find((target) => target.id === previewTargetId)?.name || tx('Selected', 'Seleccionado')}
                          </span>
                        )}
                      </div>
                      <canvas ref={previewCanvasRef} className="w-full rounded-lg border border-purple-100 bg-white" />
                      <p className="text-[11px] text-purple-700 mt-2">
                        {tx('Preview shows auto-fit output with safe area guide.', 'La vista previa muestra salida autoajustada con guia de area segura.')}
                      </p>
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                  </div>                   {/* Compression Options */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <Minimize2 className="w-4 h-4 text-purple-600" />
                      {tx('Select Output Sizes', 'Selecciona Tamanos de Salida')}
                    </h3>



                    {/* Quick Preset Picker */}
                    <div className="border border-gray-200 rounded-xl p-3 md:p-4 space-y-3 mb-4">
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                        {tx('Quick Preset Picker', 'Selector Rapido de Presets')}
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                            {tx('Category', 'Categoria')}
                          </label>
                          <select
                            value={presetPickerCategory}
                            onChange={(e) => setPresetPickerCategory(e.target.value)}
                            className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-sm"
                          >
                            {presetCategories.map((category) => (
                              <option key={category} value={category}>
                                {category}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                            {tx('Size Preset', 'Tamano Preset')}
                          </label>
                          <select
                            value={presetPickerId}
                            onChange={(e) => setPresetPickerId(e.target.value)}
                            className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-sm"
                          >
                            {pickerPresets.map((preset) => (
                              <option key={preset.id} value={preset.id}>
                                {preset.name} ({preset.width}x{preset.height})
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <button
                        onClick={addPresetFromPicker}
                        disabled={!presetPickerId}
                        className="w-full sm:w-auto px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        <Plus className="w-4 h-4" />
                        {tx('Add Selected Preset', 'Agregar Preset Seleccionado')}
                      </button>

                      {presetPickerId && (() => {
                        const selectedPreview = RESIZE_PRESETS.find((preset) => preset.id === presetPickerId);
                        if (!selectedPreview) return null;
                        return (
                          <p className="text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                            {tx('Selected', 'Seleccionado')}: {selectedPreview.name} ({selectedPreview.width}x{selectedPreview.height})
                            {selectedPreview.note ? ` - ${selectedPreview.note}` : ''}
                          </p>
                        );
                      })()}

                      {selectedResizePresets.size > 0 && (
                        <div className="pt-2 border-t border-gray-100">
                          <p className="text-xs font-semibold text-gray-700 mb-2">
                            {tx('Added Presets', 'Presets Agregados')} ({selectedResizePresets.size})
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {Array.from(selectedResizePresets).map((presetId) => {
                              const preset = RESIZE_PRESETS.find((item) => item.id === presetId);
                              if (!preset) return null;
                              return (
                                <div
                                  key={preset.id}
                                  className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-lg"
                                >
                                  <Check className="w-3.5 h-3.5 text-purple-600" />
                                  <span className="text-xs font-medium text-purple-700">
                                    {preset.name} ({preset.width}x{preset.height})
                                  </span>
                                  <button
                                    onClick={() => toggleResizePreset(preset.id)}
                                    className="text-purple-500 hover:text-red-500 transition-colors"
                                    type="button"
                                    aria-label={`${tx('Remove preset', 'Eliminar preset')} ${preset.name}`}
                                  >
                                    <X className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Custom Marketplace Sizes */}
                    <div className="border border-gray-200 rounded-xl p-3 md:p-4 mb-4">
                      <h3 className="font-semibold text-gray-800 mb-3 text-sm md:text-base">{tx('Custom Marketplace Sizes', 'Tamanos Personalizados de Marketplace')}</h3>

                      {/* Add Custom Marketplace Size */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                        <input
                          type="text"
                          value={newCustomMarketplaceName}
                          onChange={(e) => setNewCustomMarketplaceName(e.target.value)}
                          placeholder={tx('Marketplace Name (e.g. Etsy, Daraz)', 'Nombre del Marketplace (ej. Etsy, Daraz)')}
                          className="sm:col-span-2 px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-sm"
                        />
                        <input
                          type="number"
                          value={newCustomWidth}
                          onChange={(e) => setNewCustomWidth(parseInt(e.target.value) || 0)}
                          placeholder={tx('Width', 'Ancho')}
                          className="px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-sm"
                          min="1"
                        />
                        <input
                          type="number"
                          value={newCustomHeight}
                          onChange={(e) => setNewCustomHeight(parseInt(e.target.value) || 0)}
                          placeholder={tx('Height', 'Alto')}
                          className="px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-sm"
                          min="1"
                        />
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <button
                          onClick={addCustomSize}
                          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-1"
                        >
                          <Plus className="w-4 h-4" />
                          <span className="text-sm">{tx('Add Marketplace Size', 'Agregar Tamano de Marketplace')}</span>
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">
                        {tx('Create your own marketplace profile with custom name and dimensions.', 'Crea tu propio perfil de marketplace con nombre y dimensiones personalizadas.')}
                      </p>
                      {marketplaceNameSuggestions.length > 0 && (
                        <div className="mb-3">
                          <p className="text-xs font-semibold text-gray-700 mb-2">
                            {tx('Suggested / Recent Names', 'Nombres Sugeridos / Recientes')}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {marketplaceNameSuggestions.slice(0, 6).map((name) => (
                              <button
                                key={name}
                                type="button"
                                onClick={() => setNewCustomMarketplaceName(name)}
                                className="px-2.5 py-1 text-xs rounded-full border border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100"
                              >
                                {name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Custom Size List */}
                      {customSizes.length > 0 && (
                        <div className="space-y-2">
                          {customSizes.map(size => (
                            <div
                              key={size.id}
                              className="px-3 py-2 bg-green-50 border border-green-200 rounded-lg"
                            >
                              {editingCustomSizeId === size.id ? (
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                  <input
                                    type="text"
                                    value={editingCustomMarketplaceName}
                                    onChange={(e) => setEditingCustomMarketplaceName(e.target.value)}
                                    className="sm:col-span-3 px-2.5 py-2 border border-green-300 rounded-lg text-sm focus:outline-none focus:border-purple-500"
                                    placeholder={tx('Marketplace Name', 'Nombre del Marketplace')}
                                  />
                                  <input
                                    type="number"
                                    value={editingCustomWidth}
                                    onChange={(e) => setEditingCustomWidth(parseInt(e.target.value, 10) || 0)}
                                    className="px-2.5 py-2 border border-green-300 rounded-lg text-sm focus:outline-none focus:border-purple-500"
                                    placeholder={tx('Width', 'Ancho')}
                                    min="1"
                                  />
                                  <input
                                    type="number"
                                    value={editingCustomHeight}
                                    onChange={(e) => setEditingCustomHeight(parseInt(e.target.value, 10) || 0)}
                                    className="px-2.5 py-2 border border-green-300 rounded-lg text-sm focus:outline-none focus:border-purple-500"
                                    placeholder={tx('Height', 'Alto')}
                                    min="1"
                                  />
                                  <div className="flex gap-2">
                                    <button
                                      type="button"
                                      onClick={saveEditCustomSize}
                                      className="px-3 py-2 text-xs font-semibold bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                                    >
                                      {tx('Save', 'Guardar')}
                                    </button>
                                    <button
                                      type="button"
                                      onClick={cancelEditCustomSize}
                                      className="px-3 py-2 text-xs font-semibold bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                                    >
                                      {tx('Cancel', 'Cancelar')}
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <div className="flex items-center gap-2">
                                  <Check className="w-4 h-4 text-green-600" />
                                  <span className="text-sm font-medium text-green-700 flex-1">
                                    {size.name} ({size.width}×{size.height})
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => startEditCustomSize(size)}
                                    className="p-1 text-gray-500 hover:text-purple-600 transition-colors"
                                    aria-label={`${tx('Edit', 'Editar')} ${size.name}`}
                                  >
                                    <Pencil className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => removeCustomSize(size.id)}
                                    className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                                    type="button"
                                    aria-label={`${tx('Remove', 'Eliminar')} ${size.name}`}
                                  >
                                    <X className="w-4 h-4" />
                                  </button>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Marketplace Export Controls */}
                    <div className="border border-gray-200 rounded-xl p-3 md:p-4 mb-4 space-y-4">
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base">{tx('Marketplace Export Controls', 'Controles de Exportacion para Marketplace')}</h3>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{tx('Project Name (Optional)', 'Nombre del proyecto (opcional)')}</label>
                        <input
                          type="text"
                          value={projectName}
                          onChange={(e) => setProjectName(e.target.value)}
                          placeholder={tx('e.g. muvit utensils', 'ej. muvit utensils')}
                          className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-sm"
                        />
                        <p className="text-xs text-gray-500 mt-1">{tx('Used in filenames with lowercase-hyphen format.', 'Se usa en nombres de archivo con formato en minusculas y guiones.')}</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          {tx('Safe Area Margin', 'Margen de area segura')} ({safeAreaPercent}%)
                        </label>
                        <input
                          type="range"
                          value={safeAreaPercent}
                          onChange={(e) => setSafeAreaPercent(parseInt(e.target.value, 10))}
                          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                          min="10"
                          max="30"
                          step="1"
                        />
                        <p className="text-xs text-gray-500 mt-1">{tx('10-15% recommended to avoid content cropping.', 'Se recomienda 10-15% para evitar recortes de contenido.')}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">{tx('Preview Target', 'Objetivo de vista previa')}</label>
                          <select
                            value={previewTargetId}
                            onChange={(e) => setPreviewTargetId(e.target.value)}
                            className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-sm"
                          >
                            <option value="">{tx('Select a size', 'Selecciona un tamano')}</option>
                            {getSelectedResizeTargets().map((target) => (
                              <option key={target.id} value={target.id}>
                                {target.name} ({target.width}x{target.height})
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="flex items-end">
                          <button
                            type="button"
                            onClick={() => setShowSafeAreaGuide((prev) => !prev)}
                            className={`w-full py-2 px-3 rounded-lg border-2 text-sm font-medium transition-colors ${showSafeAreaGuide ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                          >
                            {showSafeAreaGuide
                              ? tx('Hide Safe Area Guide', 'Ocultar guia de area segura')
                              : tx('Show Safe Area Guide', 'Mostrar guia de area segura')}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Output Formats */}
                    <div className="border border-gray-200 rounded-xl p-3">
                      <span className="text-xs font-semibold text-gray-600 uppercase block mb-3">{tx('Output Formats', 'Formatos de salida')}</span>
                      <div className="flex flex-wrap gap-2">
                        {FORMAT_OPTIONS.map(format => (
                          <button
                            key={format.id}
                            onClick={() => toggleFormat(format.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${
                              selectedFormats.has(format.id)
                                ? 'border-purple-500 bg-purple-50 text-purple-700'
                                : 'border-gray-200 hover:border-gray-300 bg-gray-50 text-gray-700'
                            }`}
                          >
                            <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${
                              selectedFormats.has(format.id)
                                ? 'bg-purple-500 text-white'
                                : 'border-2 border-gray-300 bg-white'
                            }`}>
                              {selectedFormats.has(format.id) && <Check className="w-3 h-3" />}
                            </div>
                            <span className="text-sm font-medium">{format.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Section */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <FolderArchive className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-semibold text-gray-700">
                        {sourceImages.length} {sourceImages.length !== 1 ? tx('images', 'imagenes') : tx('image', 'imagen')} × {getTotalOutputCount()} {getTotalOutputCount() !== 1 ? tx('variants', 'variantes') : tx('variant', 'variante')}
                      </span>
                    </div>
                    <button
                      onClick={resetAll}
                      className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>{tx('Reset', 'Restablecer')}</span>
                    </button>
                  </div>

                  {/* Progress Bar */}
                  {processing && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>{tx('Compressing...', 'Comprimiendo...')}</span>
                        <span>{progress}%</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-2.5 shadow-inner">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <button
                    onClick={processAllVariants}
                    disabled={processing || getTotalOutputCount() === 0 || sourceImages.length === 0}
                    className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl transition-all font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    {processing ? tx('Processing...', 'Procesando...') : tx('Export Marketplace ZIP', 'Exportar ZIP de marketplace')}
                  </button>
                </div>
              </div>
            )}
          </div>

          {imageState.originalUrl && showMobilePreview && (
            <div
              className="lg:hidden fixed inset-x-3 bottom-3 z-30"
              style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 0.25rem)' }}
            >
              <div className="rounded-xl border border-purple-200 bg-white/95 backdrop-blur p-4 shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-bold text-gray-900">{tx('Quick Preview Controls', 'Controles Rapidos de Vista Previa')}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-purple-700 bg-purple-50 border border-purple-200 rounded-full px-2 py-1">
                      {safeAreaPercent}%
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowMobilePreview(false)}
                      className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      aria-label={tx('Close preview controls', 'Cerrar controles de vista previa')}
                    >
                      <X className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  {tx('Safe Area Margin', 'Margen de Area Segura')}
                </label>
                <input
                  type="range"
                  value={safeAreaPercent}
                  onChange={(e) => setSafeAreaPercent(parseInt(e.target.value, 10))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  min="10"
                  max="30"
                  step="1"
                />

                <button
                  onClick={() => setShowSafeAreaGuide((prev) => !prev)}
                  className={`mt-3 w-full py-2 px-3 rounded-lg border-2 text-sm font-medium transition-colors ${showSafeAreaGuide ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                  type="button"
                >
                  {showSafeAreaGuide ? tx('Hide Safe Area Guide', 'Ocultar Guia de Area Segura') : tx('Show Safe Area Guide', 'Mostrar Guia de Area Segura')}
                </button>
              </div>
            </div>
          )}

          {imageState.originalUrl && !showMobilePreview && (
            <div
              className="lg:hidden fixed right-3 bottom-3 z-30"
              style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 0.25rem)' }}
            >
              <button
                type="button"
                onClick={() => setShowMobilePreview(true)}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg flex items-center justify-center hover:from-purple-700 hover:to-purple-800 transition-all"
                aria-label={tx('Open preview controls', 'Abrir controles de vista previa')}
              >
                <Eye className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* About Section - Enhanced for AdSense */}
          <section className="bg-white rounded-xl shadow-md p-8 border border-gray-200 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About Image Compressor', 'Acerca del compresor de imagen')}</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                {tx('Pixselli Image Compressor is a powerful online tool that reduces image file sizes while preserving visual quality. Select multiple quality levels and formats, then download all compressed versions in a single ZIP file. Perfect for websites, emails, and social media.', 'El compresor de imagen de Pixselli es una herramienta potente que reduce el tamano de archivo manteniendo la calidad visual. Selecciona multiples niveles y formatos, y descarga todas las versiones comprimidas en un solo ZIP.')}
              </p>
              <p>
                <strong className="text-gray-900">{tx('How Image Compression Works:', 'Como funciona la compresion de imagen:')}</strong>{' '}
                {tx('Digital images contain millions of pixels, each storing color information. Compression algorithms analyze this data to identify patterns and redundancies. By intelligently encoding repeated information and removing data that humans can\'t perceive, we can dramatically reduce file sizes, often by 60-80%, while maintaining images that look identical to the originals.', 'Las imagenes digitales contienen millones de pixeles. Los algoritmos de compresion analizan patrones y redundancias para reducir tamano, a menudo entre 60-80%, manteniendo una apariencia muy similar a la original.')}
              </p>
              <p>
                {tx('Our tool uses adaptive compression that adjusts based on image content. Photos with complex textures compress differently than graphics with flat colors. This smart approach ensures optimal results for every image type.', 'La herramienta usa compresion adaptativa segun el contenido de la imagen. Las fotos con texturas complejas se comprimen distinto que los graficos de color plano, logrando resultados optimos.')}
              </p>
            </div>
          </section>

          {/* Why Compress Images Section */}
          <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-md p-8 border border-purple-100 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{tx('Why Compress Images?', 'Por que comprimir imagenes?')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">🚀</span> {tx('Faster Website Loading', 'Carga web mas rapida')}
                </h3>
                <p className="text-sm text-gray-600">{tx('Large images are the #1 cause of slow websites. Compressed images load 3-5x faster, improving user experience and reducing bounce rates. Google considers page speed in search rankings.', 'Las imagenes pesadas son una causa principal de sitios lentos. Las imagenes comprimidas cargan 3-5 veces mas rapido y mejoran la experiencia de usuario.')}</p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">💾</span> {tx('Save Storage Space', 'Ahorra espacio de almacenamiento')}
                </h3>
                <p className="text-sm text-gray-600">{tx('Reduce storage costs on cloud services. A 5MB photo compressed to 500KB means 10x more photos in the same space. Essential for large photo libraries and backups.', 'Reduce costos de almacenamiento en la nube. Una foto de 5MB comprimida a 500KB permite guardar muchas mas imagenes en el mismo espacio.')}</p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">📧</span> {tx('Email Attachments', 'Adjuntos de correo')}
                </h3>
                <p className="text-sm text-gray-600">{tx('Most email providers limit attachment sizes to 10-25MB. Compressed images easily fit within limits and download faster for recipients.', 'Muchos proveedores de correo limitan adjuntos a 10-25MB. Las imagenes comprimidas entran facilmente en el limite y descargan mas rapido.')}</p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">📱</span> {tx('Mobile Data Savings', 'Ahorro de datos moviles')}
                </h3>
                <p className="text-sm text-gray-600">{tx('Over 50% of web traffic is mobile. Smaller images mean less data consumption for your visitors, especially important in regions with limited or expensive mobile data.', 'Mas del 50% del trafico web es movil. Imagenes mas ligeras significan menos consumo de datos para tus visitantes.')}</p>
              </div>
            </div>
          </section>

          {/* Compression Types Explained */}
          <section className="bg-white rounded-xl shadow-md p-8 border border-gray-200 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{tx('Understanding Compression Types', 'Entender tipos de compresion')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-purple-200 rounded-xl p-6 bg-purple-50">
                <h3 className="font-bold text-purple-900 text-lg mb-3">{tx('Lossy Compression', 'Compresion con perdida')}</h3>
                <p className="text-gray-700 text-sm mb-3">
                  {tx('Permanently removes some image data to achieve smaller file sizes. Best for photographs where minor quality loss is imperceptible.', 'Elimina parte de los datos para reducir tamano. Ideal para fotos donde una perdida minima no se nota.')}
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Reduction: 60-90% smaller files</li>
                  <li>• Best for: Photos, web images</li>
                  <li>• Formats: JPG, WebP</li>
                </ul>
              </div>
              <div className="border-2 border-emerald-200 rounded-xl p-6 bg-emerald-50">
                <h3 className="font-bold text-emerald-900 text-lg mb-3">{tx('Lossless Compression', 'Compresion sin perdida')}</h3>
                <p className="text-gray-700 text-sm mb-3">
                  {tx('Reduces file size without any quality loss. Original image can be perfectly reconstructed. Better for graphics and text.', 'Reduce tamano sin perdida de calidad. La imagen original puede reconstruirse perfectamente. Mejor para graficos y texto.')}
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Reduction: 20-50% smaller files</li>
                  <li>• Best for: Logos, screenshots, graphics</li>
                  <li>• Formats: PNG, WebP (lossless mode)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto" aria-labelledby="features-heading">
            <h2 id="features-heading" className="sr-only">{tx('Key Features', 'Caracteristicas clave')}</h2>
            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Minimize2 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Smart Compression', 'Compresion inteligente')}</h3>
              <p className="text-gray-600">
                {tx('Shrink image size a lot while keeping it looking clear to the eye.', 'Reduce mucho el tamano manteniendo buena claridad visual.')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-pink-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Quality Control', 'Control de calidad')}</h3>
              <p className="text-gray-600">
                {tx('Use a simple slider to choose the right balance between file size and picture quality.', 'Usa un control simple para equilibrar tamano de archivo y calidad de imagen.')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-indigo-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('100% Private', '100% Privado')}</h3>
              <p className="text-gray-600">
                {tx('Your images are processed only in your browser and are never uploaded to a server.', 'Tus imagenes se procesan solo en tu navegador y nunca se suben a un servidor.')}
              </p>
            </div>
          </section>

          {/* How to Use */}
          <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-md p-8 border border-purple-200 max-w-4xl mx-auto mb-12" aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="text-2xl font-bold text-gray-900 mb-8 text-center">{tx('How to Compress Images', 'Como comprimir imagenes')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Upload Your Image', 'Sube tu imagen')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Click the upload box or drag and drop your picture. You can use JPG, PNG, or WebP files up to 10MB.', 'Haz clic en la caja de carga o arrastra tu imagen. Puedes usar JPG, PNG o WebP hasta 10MB.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Adjust Quality', 'Ajustar calidad')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Move the slider to choose how strong the compression should be. Higher quality means a bigger file, lower quality means a smaller file.', 'Mueve el control para definir la compresion. Mayor calidad implica archivo mas grande; menor calidad, mas pequeno.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Preview Results', 'Previsualizar resultados')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Look at the original and compressed images side by side and check how much size you have saved.', 'Compara la imagen original y la comprimida lado a lado y revisa cuanto tamano has ahorrado.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Download Compressed', 'Descargar comprimida')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Download your new smaller image and use it anywhere you like while keeping good quality.', 'Descarga tu nueva imagen mas ligera y usala donde quieras manteniendo buena calidad.')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-purple-100 border border-purple-200 rounded-lg p-4 text-center">
              <p className="text-sm text-purple-800">
                <strong>{tx('Pro Tip:', 'Consejo Pro:')}</strong>{' '}
                {tx('For websites, try 70–85% quality. For printing, use 85–95%. For social media, 70–80% usually looks great.', 'Para sitios web, prueba 70–85% de calidad. Para impresion, usa 85–95%. Para redes sociales, 70–80% suele verse muy bien.')}
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
                  <span>{tx('What is image compression?', 'Que es la compresion de imagen?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 0 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 0 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Image compression reduces file size by removing redundant data while maintaining visual quality. Our tool uses smart compression algorithms to optimize JPG, PNG, and WebP images without noticeable quality loss.', 'La compresion de imagen reduce el tamano eliminando datos redundantes y manteniendo calidad visual. La herramienta optimiza JPG, PNG y WebP con perdida minima.')}</p>
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
                    <p>{tx('For web images: 70-85% quality provides best balance. For printing: 85-95% quality recommended. For social media: 70-80% quality is sufficient. Lower quality = smaller file size but may show artifacts.', 'Para web, 70-85% da buen equilibrio. Para impresion, 85-95% recomendado. Para redes, 70-80% suele ser suficiente.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(2)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>{tx('Does compression reduce image dimensions?', 'La compresion reduce las dimensiones de imagen?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 2 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 2 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('No, compression only reduces file size, not pixel dimensions. Your image width and height remain unchanged. Use our Image Resizer tool if you need to change dimensions.', 'No, la compresion solo reduce el tamano del archivo, no los pixeles. El ancho y alto no cambian.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(3)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>{tx('Can I compress images without quality loss?', 'Puedo comprimir imagenes sin perder calidad?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 3 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 3 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Yes! Set quality to 90-100% for minimal quality loss. Our tool uses smart compression that removes only unnecessary data while preserving visual quality. Results depend on original image complexity.', 'Si. Configura calidad en 90-100% para una perdida minima. Los resultados dependen de la complejidad de la imagen original.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(4)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>{tx('Is image compression secure and private?', 'La compresion es segura y privada?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 4 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 4 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Absolutely! All compression happens locally in your browser using client-side JavaScript. Your images never leave your device or get uploaded to any server, ensuring complete privacy.', 'Si. Toda la compresion ocurre localmente en tu navegador. Tus imagenes nunca salen del dispositivo ni se suben a servidores.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 6 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(5)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>{tx('What\'s the difference between lossy and lossless compression?', 'Cual es la diferencia entre compresion con y sin perdida?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 5 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 5 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Lossy compression permanently removes some image data to achieve smaller files (60-90% reduction). Lossless compression preserves all original data with smaller reductions (20-50%). JPG uses lossy compression; PNG can use lossless. Our tool applies the appropriate method based on your image format.', 'La compresion con perdida elimina parte de los datos para archivos mas pequenos (60-90%). La compresion sin perdida mantiene los datos originales con reduccion menor (20-50%).')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 7 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(6)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>{tx('Why is image compression important for SEO?', 'Por que la compresion es importante para SEO?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 6 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 6 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Google uses page speed as a ranking factor. Large images slow down your website, increasing bounce rates and hurting SEO. Compressed images load faster, improving Core Web Vitals scores. Studies show a 1-second delay in page load can reduce conversions by 7%.', 'Google considera la velocidad de pagina para el ranking. Imagenes grandes ralentizan tu sitio; imagenes comprimidas cargan mas rapido y mejoran Core Web Vitals.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 8 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(7)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span>{tx('How much can I reduce my image file size?', 'Cuanto puedo reducir el tamano de archivo?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 7 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 7 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Results vary by image content. Photographs typically compress 60-80% without noticeable quality loss. Graphics with solid colors may compress even more. A 5MB photo can often be reduced to under 500KB. Use our preview to find the optimal balance for your specific image.', 'Los resultados varian segun el contenido. Las fotos suelen comprimirse 60-80% sin perdida notable. Usa la vista previa para encontrar el mejor equilibrio para tu imagen.')}</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Related Tools Section */}
          <section className="max-w-4xl mx-auto mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{tx('Related Image Tools', 'Herramientas de imagen relacionadas')}</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href={localizePath('/compress-for-web')} className="group p-4 bg-white border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 mb-1">{tx('Compress for Web', 'Comprimir para web')}</h3>
                <p className="text-sm text-gray-600">{tx('Optimize images specifically for fast website loading', 'Optimiza imagenes para una carga web rapida')}</p>
              </a>
              <a href={localizePath('/lossless-compression')} className="group p-4 bg-white border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 mb-1">{tx('Lossless Compression', 'Compresion sin perdida')}</h3>
                <p className="text-sm text-gray-600">{tx('Compress without any quality loss', 'Comprime sin perdida de calidad')}</p>
              </a>
              <a href={localizePath('/image-resizer')} className="group p-4 bg-white border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 mb-1">{tx('Image Resizer', 'Redimensionador de imagen')}</h3>
                <p className="text-sm text-gray-600">{tx('Change image dimensions for smaller files', 'Cambia dimensiones para archivos mas ligeros')}</p>
              </a>
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
