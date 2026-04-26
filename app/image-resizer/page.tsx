"use client";

import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { AlertCircle, Upload, Download, RotateCcw, Image as ImageIcon, Maximize2, Minimize2, Lock, Unlock, Info, ChevronDown, ChevronUp, Shield, Check, Plus, X, FolderArchive, Crop, Move, ZoomIn, ZoomOut, CheckCircle2, RefreshCw, Gauge, Percent, Ruler, Train, Calendar, Droplet, Type, Contrast, Palette, Eye, Scan, Target, Pencil } from 'lucide-react';
import JSZip from 'jszip';
import { MARKETPLACE_PRESETS, MARKETPLACE_PRESET_CATEGORY } from '@/lib/marketplacePresets';
import { normalizeFileToken, parseMarketplaceToken as parseMarketplaceOutputToken, renderUnifiedOutputFrame } from '@/lib/unifiedOutputProcessor';
import { useLanguage } from '@/components/LanguageProvider';
import { getLocaleBasePath } from '@/lib/i18n';
import {
  IMAGE_RESIZER_CATEGORY_LABELS_BY_LOCALE,
  IMAGE_RESIZER_PRESET_NAME_LABELS_BY_LOCALE,
  IMAGE_RESIZER_PRESET_NOTE_LABELS_BY_LOCALE,
  IMAGE_RESIZER_TEXT_BY_LOCALE,
} from '@/lib/imageResizerTranslations';

interface ImageState {
  originalFile: File | null;
  originalUrl: string;
  originalWidth: number;
  originalHeight: number;
  aspectRatio: number;
}

interface SizePreset {
  id: string;
  name: string;
  width: number;
  height: number;
  category: string;
  note?: string;
}

interface CustomSize {
  id: string;
  name: string;
  width: number;
  height: number;
}

interface ExportSizeTarget {
  id: string;
  name: string;
  width: number;
  height: number;
  category: string;
}

const SIZE_PRESETS: SizePreset[] = [
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

const CATEGORY_LABELS_ES: Record<string, string> = {
  'Social Media': 'Redes Sociales',
  [MARKETPLACE_PRESET_CATEGORY]: 'Tamano para Marketplace',
  Resolution: 'Resolucion',
  Web: 'Web',
  Common: 'Comun',
};

const PRESET_NAME_LABELS_ES: Record<string, string> = {
  'instagram-post': 'Publicacion de Instagram',
  'instagram-story': 'Historia de Instagram',
  'facebook-cover': 'Portada de Facebook',
  'twitter-header': 'Cabecera de X/Twitter',
  'linkedin-banner': 'Banner de LinkedIn',
  'youtube-thumbnail': 'Miniatura de YouTube',
  'youtube-banner': 'Banner de YouTube',
  hd: 'HD (720p)',
  'full-hd': 'Full HD (1080p)',
  '2k': '2K',
  '4k': '4K',
  'web-small': 'Web Pequeno',
  'web-medium': 'Web Mediano',
  'web-large': 'Web Grande',
  thumbnail: 'Miniatura',
  icon: 'Icono',
  avatar: 'Avatar',
  'amazon-product-image': 'Amazon',
  'mercado-libre-1200': 'Mercado Libre',
  'walmart-2000': 'Walmart',
  'shopify-2048': 'Shopify',
  'tiktok-shop-product-image-1080': 'TikTok Shop',
};

const PRESET_NOTE_LABELS_ES: Record<string, string> = {
  'amazon-product-image': 'Usar para imagen principal y galeria. Fondo blanco (#FFFFFF), producto ~85%.',
  'mercado-libre-1200': 'Evita logos, texto y marcas de agua.',
  'walmart-2000': 'Producto centrado. Fondo blanco obligatorio.',
  'shopify-2048': 'Se recomienda formato cuadrado de producto.',
  'tiktok-shop-product-image-1080': 'Formato cuadrado (1:1). Se recomienda al menos 1080x1080.',
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
  const isSpanish = locale === 'es';
  const tx = useCallback(
    (english: string, spanish: string) => {
      if (locale === 'es') {
        return spanish;
      }

      return IMAGE_RESIZER_TEXT_BY_LOCALE[locale]?.[english] || english;
    },
    [locale]
  );
  const localeBasePath = getLocaleBasePath(locale);
  const pagePath = localeBasePath ? `${localeBasePath}/image-resizer` : '/image-resizer';
  const pageUrl = `https://pixselli.com${pagePath}`;
  const homePath = localeBasePath || '/';

  const [imageState, setImageState] = useState<ImageState>({
    originalFile: null,
    originalUrl: '',
    originalWidth: 0,
    originalHeight: 0,
    aspectRatio: 1,
  });
  const [selectedPresets, setSelectedPresets] = useState<Set<string>>(new Set());
  const [sourceImages, setSourceImages] = useState<ImageState[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [customSizes, setCustomSizes] = useState<CustomSize[]>([]);
  const [newCustomMarketplaceName, setNewCustomMarketplaceName] = useState('');
  const [newCustomWidth, setNewCustomWidth] = useState<number>(800);
  const [newCustomHeight, setNewCustomHeight] = useState<number>(600);
  const [recentMarketplaceNames, setRecentMarketplaceNames] = useState<string[]>([]);
  const [editingCustomSizeId, setEditingCustomSizeId] = useState<string | null>(null);
  const [editingCustomMarketplaceName, setEditingCustomMarketplaceName] = useState('');
  const [editingCustomWidth, setEditingCustomWidth] = useState<number>(0);
  const [editingCustomHeight, setEditingCustomHeight] = useState<number>(0);
  const [projectName, setProjectName] = useState('');
  const [safeAreaPercent, setSafeAreaPercent] = useState(12);
  const [showSafeAreaGuide, setShowSafeAreaGuide] = useState(true);
  const [previewTargetId, setPreviewTargetId] = useState<string>('');
  const [quality, setQuality] = useState(0.92);
  const [format, setFormat] = useState<'png' | 'jpeg' | 'webp'>('jpeg');
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showMobilePreview, setShowMobilePreview] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [presetPickerCategory, setPresetPickerCategory] = useState('');
  const [presetPickerId, setPresetPickerId] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  const presetCategories = useMemo(() => [...new Set(SIZE_PRESETS.map((p) => p.category))], []);
  const pickerPresets = useMemo(
    () => SIZE_PRESETS.filter((preset) => preset.category === presetPickerCategory),
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

  const handleFileSelect = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const imageFiles = files.filter((file) => file.type.startsWith('image/'));
    if (imageFiles.length === 0) {
      alert(tx('Please select valid image files', 'Selecciona archivos de imagen validos'));
      return;
    }

    const parsedImages = await Promise.all(
      imageFiles.map(
        (file) =>
          new Promise<ImageState>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
              const img = new window.Image();
              img.onload = () => {
                const aspectRatio = img.width / img.height;
                resolve({
                  originalFile: file,
                  originalUrl: event.target?.result as string,
                  originalWidth: img.width,
                  originalHeight: img.height,
                  aspectRatio,
                });
              };
              img.onerror = () => reject(new Error('Failed to read image'));
              img.src = event.target?.result as string;
            };
            reader.onerror = () => reject(new Error('Failed to read file'));
            reader.readAsDataURL(file);
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

    if (!previewTargetId && selectedPresets.size > 0) {
      setPreviewTargetId(Array.from(selectedPresets)[0]);
    }
  }, [previewTargetId, selectedPresets, tx]);

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

  const togglePreset = (presetId: string) => {
    setSelectedPresets(prev => {
      const newSet = new Set(prev);
      if (newSet.has(presetId)) {
        newSet.delete(presetId);
      } else {
        newSet.add(presetId);
      }
      return newSet;
    });
  };

  const addPresetFromPicker = () => {
    if (!presetPickerId) return;

    setSelectedPresets((prev) => {
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
      {
        id: `custom-${Date.now()}`,
        name: marketplaceName,
        width: newCustomWidth,
        height: newCustomHeight,
      },
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
          ? {
              ...size,
              name: nextName,
              width: editingCustomWidth,
              height: editingCustomHeight,
            }
          : size
      )
    );
    setRecentMarketplaceNames((prev) => [nextName, ...prev.filter((name) => name.toLowerCase() !== nextName.toLowerCase())].slice(0, 8));
    cancelEditCustomSize();
  };

  const removeSourceImage = (index: number) => {
    setSourceImages((prev) => {
      const next = prev.filter((_, i) => i !== index);
      if (next.length === 0) {
        setImageState({
          originalFile: null,
          originalUrl: '',
          originalWidth: 0,
          originalHeight: 0,
          aspectRatio: 1,
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

  const parseMarketplaceToken = (target: ExportSizeTarget) => {
    return parseMarketplaceOutputToken({
      category: target.category,
      displayName: target.name,
      fallbackId: target.id,
      marketplaceCategory: MARKETPLACE_PRESET_CATEGORY,
    });
  };

  const getSelectedTargets = useCallback((): ExportSizeTarget[] => {
    const targets: ExportSizeTarget[] = [];

    SIZE_PRESETS.forEach((preset) => {
      if (selectedPresets.has(preset.id)) {
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
  }, [selectedPresets, customSizes, imageState.originalWidth, imageState.originalHeight]);

  const getCategoryLabel = useCallback(
    (category: string) => {
      if (locale === 'es') {
        return CATEGORY_LABELS_ES[category] || category;
      }

      return IMAGE_RESIZER_CATEGORY_LABELS_BY_LOCALE[locale]?.[category] || category;
    },
    [locale]
  );

  const getPresetLabel = useCallback(
    (preset: SizePreset) => {
      if (locale === 'es') {
        return PRESET_NAME_LABELS_ES[preset.id] || preset.name;
      }

      return IMAGE_RESIZER_PRESET_NAME_LABELS_BY_LOCALE[locale]?.[preset.id] || preset.name;
    },
    [locale]
  );

  const getPresetNote = useCallback(
    (preset: SizePreset) => {
      if (!preset.note) {
        return '';
      }

      if (locale === 'es') {
        return PRESET_NOTE_LABELS_ES[preset.id] || preset.note;
      }

      return IMAGE_RESIZER_PRESET_NOTE_LABELS_BY_LOCALE[locale]?.[preset.id] || preset.note;
    },
    [locale]
  );

  const getTargetDisplayName = useCallback(
    (target: ExportSizeTarget) => {
      if (target.id === 'original') {
        return tx('Original', 'Original');
      }

      if (target.id.startsWith('custom-')) {
        return `${target.name} (${target.width}x${target.height})`;
      }

      const matchedPreset = SIZE_PRESETS.find((preset) => preset.id === target.id);
      if (!matchedPreset) {
        return target.name;
      }

      return getPresetLabel(matchedPreset);
    },
    [getPresetLabel, tx]
  );

  useEffect(() => {
    if (!imageState.originalUrl) {
      if (previewTargetId) setPreviewTargetId('');
      return;
    }

    const targets = getSelectedTargets();
    if (targets.length === 0) {
      if (previewTargetId) setPreviewTargetId('');
      return;
    }

    if (!previewTargetId || !targets.some((target) => target.id === previewTargetId)) {
      setPreviewTargetId(targets[0].id);
    }
  }, [imageState.originalUrl, previewTargetId, getSelectedTargets]);

  const removeCustomSize = (id: string) => {
    setCustomSizes(prev => prev.filter(size => size.id !== id));
    if (editingCustomSizeId === id) {
      cancelEditCustomSize();
    }
  };

  const selectAllInCategory = (category: string) => {
    const categoryPresets = SIZE_PRESETS.filter(p => p.category === category);
    setSelectedPresets(prev => {
      const newSet = new Set(prev);
      categoryPresets.forEach(p => newSet.add(p.id));
      return newSet;
    });
  };

  const deselectAllInCategory = (category: string) => {
    const categoryPresets = SIZE_PRESETS.filter(p => p.category === category);
    setSelectedPresets(prev => {
      const newSet = new Set(prev);
      categoryPresets.forEach(p => newSet.delete(p.id));
      return newSet;
    });
  };

  const getTotalSelectedCount = () => selectedPresets.size + customSizes.length;

  const resizeImageToSize = async (
    img: HTMLImageElement,
    targetWidth: number,
    targetHeight: number,
    canvas: HTMLCanvasElement,
    options?: {
      showGuides?: boolean;
      outputFormat?: 'png' | 'jpeg' | 'webp';
      qualityValue?: number;
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
      guideColor: 'rgba(37, 99, 235, 0.9)',
      forceBackgroundFill: true,
      paddingColor: '#FFFFFF',
    });

    const outputFormat = options?.outputFormat || format;
    const qualityValue = options?.qualityValue ?? quality;
    const mimeType = outputFormat === 'png' ? 'image/png' : outputFormat === 'webp' ? 'image/webp' : 'image/jpeg';
    
    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (blob) resolve(blob);
          else reject(new Error('Failed to create blob'));
        },
        mimeType,
        qualityValue
      );
    });
  };

  const renderFormatPreview = useCallback(async () => {
    if (!imageState.originalUrl || !previewCanvasRef.current) return;

    const targets = getSelectedTargets();
    const target = targets.find((item) => item.id === previewTargetId) || targets[0];
    if (!target) return;

    const img = new window.Image();
    img.src = imageState.originalUrl;
    await new Promise((resolve) => {
      img.onload = resolve;
    });

    try {
      await resizeImageToSize(img, target.width, target.height, previewCanvasRef.current, {
        showGuides: showSafeAreaGuide,
        outputFormat: format,
        qualityValue: quality,
        targetCategory: target.category,
      });
    } catch {
      // Ignore preview render errors to avoid interrupting editing flow.
    }
  }, [imageState.originalUrl, previewTargetId, showSafeAreaGuide, format, quality, getSelectedTargets, safeAreaPercent]);

  useEffect(() => {
    renderFormatPreview();
  }, [renderFormatPreview]);

  const processAllSizes = async () => {
    if (sourceImages.length === 0 || !canvasRef.current) return;
    if (getTotalSelectedCount() === 0) {
      alert(tx('Please select at least one output size', 'Selecciona al menos un tamano de salida'));
      return;
    }

    setProcessing(true);
    setProgress(0);

    try {
      const canvas = canvasRef.current;
      const zip = new JSZip();
      const extension = format === 'png' ? 'png' : format === 'webp' ? 'webp' : 'jpg';
      const normalizedProjectName = normalizeText(projectName);

      // Get all sizes to process
      const sizesToProcess = getSelectedTargets();

      if (!previewTargetId && sizesToProcess.length > 0) {
        setPreviewTargetId(sizesToProcess[0].id);
      }

      // Process each size
      const totalJobs = sourceImages.length * sizesToProcess.length;
      let completedJobs = 0;

      const usedNames = new Map<string, number>();

      for (let imageIndex = 0; imageIndex < sourceImages.length; imageIndex++) {
        const source = sourceImages[imageIndex];
        const sourceImg = new window.Image();
        sourceImg.src = source.originalUrl;
        await new Promise((resolve) => {
          sourceImg.onload = resolve;
        });

        for (let i = 0; i < sizesToProcess.length; i++) {
          const size = sizesToProcess[i];
          const blob = await resizeImageToSize(sourceImg, size.width, size.height, canvas, {
            outputFormat: format,
            qualityValue: quality,
            targetCategory: size.category,
          });

          const sequenceToken = `image${imageIndex + 1}`;
          const targetToken = parseMarketplaceToken(size);
          const prefix = normalizedProjectName ? `${normalizedProjectName}-` : '';
          const rawBaseName = `${prefix}${sequenceToken}-${targetToken}`;
          const seenCount = usedNames.get(rawBaseName) || 0;
          usedNames.set(rawBaseName, seenCount + 1);
          const uniqueBaseName = seenCount === 0 ? rawBaseName : `${rawBaseName}-${seenCount + 1}`;
          const fileName = `${uniqueBaseName}.${extension}`;

          zip.file(fileName, blob);

          completedJobs += 1;
          setProgress(Math.round((completedJobs / totalJobs) * 100));
        }
      }

      // Generate and download ZIP
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const downloadUrl = URL.createObjectURL(zipBlob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      const zipBaseName = normalizedProjectName || 'resized-images';
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
    setSelectedPresets(new Set());
    setCustomSizes([]);
    setPreviewTargetId('');
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
            "name": tx('Image Resizer - Free Online Tool', 'Redimensionador de Imagen - Herramienta Gratis Online'),
            "url": pageUrl,
            "description": tx(
              'Free online image resizer tool. Resize images by pixels or percentage, maintain aspect ratio, convert formats (JPEG, PNG, WebP), and adjust quality. All processing happens in your browser for complete privacy.',
              'Herramienta gratis online para redimensionar imagenes. Cambia tamano por pixeles o porcentaje, manten relacion de aspecto, convierte formatos (JPEG, PNG, WebP) y ajusta calidad. Todo se procesa en tu navegador para total privacidad.'
            ),
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Any",
            "browserRequirements": tx('Requires JavaScript. Modern browser recommended.', 'Requiere JavaScript. Se recomienda navegador moderno.'),
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              tx('Resize by pixels or percentage', 'Redimensionar por pixeles o porcentaje'),
              tx('Maintain aspect ratio', 'Mantener relacion de aspecto'),
              tx('Convert between JPEG, PNG, and WebP', 'Convertir entre JPEG, PNG y WebP'),
              tx('Adjust image quality', 'Ajustar calidad de imagen'),
              tx('Client-side processing for privacy', 'Procesamiento local para privacidad'),
              tx('No file size limits', 'Sin limites de tamano de archivo'),
              tx('No registration required', 'Sin registro'),
              tx('Completely free', 'Totalmente gratis')
            ],
            "screenshot": "https://pixselli.com/screenshots/image-resizer.jpg"
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
            "name": tx('How to Resize Images Online', 'Como Redimensionar Imagenes Online'),
            "description": tx('Step-by-step guide to resize images using our free online tool', 'Guia paso a paso para redimensionar imagenes con nuestra herramienta gratis'),
            "image": "https://pixselli.com/images/how-to-resize.jpg",
            "totalTime": "PT2M",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "USD",
              "value": "0"
            },
            "tool": [
              {
                "@type": "HowToTool",
                "name": tx('Web Browser', 'Navegador Web')
              },
              {
                "@type": "HowToTool",
                "name": tx('Image File', 'Archivo de Imagen')
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": tx('Upload Image', 'Subir Imagen'),
                "text": tx('Upload your image by dragging and dropping or clicking to browse from your device', 'Sube tu imagen arrastrando y soltando o haciendo clic para buscarla en tu dispositivo'),
                "url": `${pageUrl}#step1`
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": tx('Set Dimensions', 'Definir Dimensiones'),
                "text": tx('Choose resize mode (pixels or percentage) and enter your desired dimensions', 'Elige el modo de redimensionar (pixeles o porcentaje) e introduce las dimensiones deseadas'),
                "url": `${pageUrl}#step2`
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": tx('Adjust Settings', 'Ajustar Configuracion'),
                "text": tx('Adjust advanced options like format and quality if needed', 'Ajusta opciones avanzadas como formato y calidad si es necesario'),
                "url": `${pageUrl}#step3`
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": tx('Download', 'Descargar'),
                "text": tx("Click 'Resize Image' and download your resized file", "Haz clic en 'Redimensionar Imagen' y descarga tu archivo"),
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
                "name": tx('What image formats are supported?', 'Que formatos de imagen son compatibles?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx('Our tool supports JPEG, JPG, PNG, and WebP formats. You can upload any of these formats and convert to any other supported format.', 'Nuestra herramienta admite JPEG, JPG, PNG y WebP. Puedes subir cualquiera de estos formatos y convertirlos a otro compatible.')
                }
              },
              {
                "@type": "Question",
                "name": tx('Does resizing reduce image quality?', 'Redimensionar reduce la calidad?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx('Our tool uses high-quality algorithms to minimize quality loss. When resizing down, quality is well-preserved. When enlarging, some quality loss is inevitable, but we use advanced smoothing techniques.', 'Nuestra herramienta usa algoritmos de alta calidad para minimizar la perdida. Al reducir tamano la calidad se conserva bien. Al ampliar puede haber perdida, pero aplicamos tecnicas avanzadas de suavizado.')
                }
              },
              {
                "@type": "Question",
                "name": tx('What is aspect ratio and should I lock it?', 'Que es la relacion de aspecto y debo bloquearla?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx('Aspect ratio is the proportional relationship between width and height. Locking it prevents image distortion by automatically adjusting one dimension when you change the other.', 'La relacion de aspecto es la proporcion entre ancho y alto. Bloquearla evita deformaciones ajustando automaticamente una dimension cuando cambias la otra.')
                }
              },
              {
                "@type": "Question",
                "name": tx('Can I resize multiple images at once?', 'Puedo redimensionar varias imagenes a la vez?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx('Yes. You can upload multiple images in one action and export all selected marketplace sizes in a single ZIP download.', 'Si. Puedes subir varias imagenes en una sola accion y exportar todos los tamanos seleccionados en un unico ZIP.')
                }
              },
              {
                "@type": "Question",
                "name": tx('Is my image data secure?', 'Mis datos de imagen son seguros?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx('Absolutely! All processing happens locally in your browser. Your images are never uploaded to any server, ensuring complete privacy and security.', 'Absolutamente. Todo el procesamiento ocurre localmente en tu navegador. Tus imagenes nunca se suben a servidores, garantizando privacidad y seguridad total.')
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
            "name": tx('Pixselli Image Resizer', 'Pixselli Redimensionador de Imagen'),
            "url": pageUrl,
            "applicationCategory": "MultimediaApplication",
            "applicationSubCategory": tx('Image Editing', 'Edicion de Imagen'),
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
                <span itemProp="name" className="text-gray-900 font-medium">{tx('Image Resizer', 'Redimensionador de Imagen')}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="text-center mb-12">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Maximize2 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {tx('Image Resizer', 'Redimensionador de Imagen')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {tx(
                'Resize your images to any dimensions while maintaining quality. Fast, secure, and works entirely in your browser.',
                'Redimensiona tus imagenes a cualquier tamano manteniendo la calidad. Rapido, seguro y funciona completamente en tu navegador.'
              )}
            </p>
          </header>

            {/* Main Tool Area */}
          <main>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 ${imageState.originalUrl ? 'pb-40 sm:pb-0' : ''}`}>
            {/* Upload/Preview Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Upload className="w-6 h-6 text-blue-600" />
                {tx('Upload Your Image', 'Sube tu Imagen')}
              </h2>              {!imageState.originalUrl ? (
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
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <Upload className="w-7 h-7 text-white" />
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
                      {tx(
                        'Supports all major image formats. You can upload multiple images at once.',
                        'Admite todos los formatos principales. Puedes subir varias imagenes a la vez.'
                      )}
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
                <div className="space-y-4">
                  <div className="relative rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={imageState.originalUrl}
                      alt={tx('Original', 'Original')}
                      className="w-full h-auto"
                    />
                    <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                      {imageState.originalWidth} × {imageState.originalHeight}
                    </div>
                  </div>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium"
                  >
                    {tx('Add More Images', 'Agregar Mas Imagenes')}
                  </button>
                  {sourceImages.length > 1 && (
                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-2">
                        {tx('Uploaded Images', 'Imagenes Subidas')} ({sourceImages.length})
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {sourceImages.map((source, index) => (
                          <div key={`${source.originalFile?.name || 'image'}-${index}`} className="relative">
                            <button
                              onClick={() => {
                                setActiveImageIndex(index);
                                setImageState(source);
                              }}
                              className={`w-full border-2 rounded-lg overflow-hidden ${activeImageIndex === index ? 'border-blue-500' : 'border-gray-200'}`}
                              type="button"
                            >
                              <img src={source.originalUrl} alt={`${tx('Uploaded', 'Subida')} ${index + 1}`} className="w-full h-20 object-cover" />
                            </button>
                            <button
                              onClick={() => removeSourceImage(index)}
                              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center shadow"
                              type="button"
                              aria-label={`${tx('Remove image', 'Eliminar imagen')} ${index + 1}`}
                            >
                              <X className="w-3 h-3" />
                            </button>
                            <div className="text-[10px] text-center mt-1 text-gray-500">
                              {tx('Image', 'Imagen')} {index + 1}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="border border-blue-200 bg-blue-50 rounded-xl p-3">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-semibold text-blue-800">{tx('Format Preview', 'Vista Previa de Formato')}</p>
                      {previewTargetId && (
                        <span className="text-[10px] px-2 py-1 bg-white border border-blue-200 rounded-full text-blue-700">
                          {(() => {
                            const target = getSelectedTargets().find((item) => item.id === previewTargetId);
                            return target ? getTargetDisplayName(target) : tx('Selected', 'Seleccionado');
                          })()}
                        </span>
                      )}
                    </div>
                    <canvas ref={previewCanvasRef} className="w-full max-h-[52vh] rounded-lg border border-blue-100 bg-white" />
                    <p className="text-[11px] text-blue-700 mt-2">
                      {tx('Preview shows auto-fit output with safe area guide.', 'La vista previa muestra salida auto-ajustada con guia de area segura.')}
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
              )}
            </div>

            {/* Controls Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Maximize2 className="w-6 h-6 text-blue-600" />
                {tx('Select Output Sizes', 'Selecciona Tamanos de Salida')}
              </h2>

              {imageState.originalUrl ? (
                <div className="space-y-4">
                  {/* Compact Preset Picker */}
                  <div className="border border-gray-200 rounded-xl p-3 md:p-4 space-y-3">
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
                          className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                        >
                          {presetCategories.map((category) => (
                            <option key={category} value={category}>
                              {getCategoryLabel(category)}
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
                          className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                        >
                          {pickerPresets.map((preset) => (
                            <option key={preset.id} value={preset.id}>
                              {getPresetLabel(preset)} ({preset.width}x{preset.height})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <button
                      onClick={addPresetFromPicker}
                      disabled={!presetPickerId}
                      className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      {tx('Add Selected Preset', 'Agregar Preset Seleccionado')}
                    </button>

                    {presetPickerId && (() => {
                      const selectedPreview = SIZE_PRESETS.find((preset) => preset.id === presetPickerId);
                      if (!selectedPreview) return null;

                      return (
                        <p className="text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                          {tx('Selected', 'Seleccionado')}: {getPresetLabel(selectedPreview)} ({selectedPreview.width}x{selectedPreview.height})
                          {getPresetNote(selectedPreview) ? ` - ${getPresetNote(selectedPreview)}` : ''}
                        </p>
                      );
                    })()}

                    {selectedPresets.size > 0 && (
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-xs font-semibold text-gray-700 mb-2">
                          {tx('Added Presets', 'Presets Agregados')} ({selectedPresets.size})
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {Array.from(selectedPresets).map((presetId) => {
                            const preset = SIZE_PRESETS.find((item) => item.id === presetId);
                            if (!preset) return null;

                            return (
                              <div
                                key={preset.id}
                                className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg"
                              >
                                <Check className="w-3.5 h-3.5 text-blue-600" />
                                <span className="text-xs font-medium text-blue-700">
                                  {getPresetLabel(preset)} ({preset.width}x{preset.height})
                                </span>
                                <button
                                  onClick={() => togglePreset(preset.id)}
                                  className="text-blue-500 hover:text-red-500 transition-colors"
                                  type="button"
                                  aria-label={`${tx('Remove preset', 'Eliminar preset')} ${getPresetLabel(preset)}`}
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
                  <div className="border border-gray-200 rounded-xl p-3 md:p-4">
                    <h3 className="font-semibold text-gray-800 mb-3 text-sm md:text-base">{tx('Custom Marketplace Sizes', 'Tamanos Personalizados de Marketplace')}</h3>
                    
                    {/* Add Custom Marketplace Size */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                      <input
                        type="text"
                        value={newCustomMarketplaceName}
                        onChange={(e) => setNewCustomMarketplaceName(e.target.value)}
                        placeholder={tx('Marketplace Name (e.g. Etsy, Daraz)', 'Nombre del Marketplace (ej. Etsy, Daraz)')}
                        className="sm:col-span-2 px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                      />
                      <input
                        type="number"
                        value={newCustomWidth}
                        onChange={(e) => setNewCustomWidth(parseInt(e.target.value) || 0)}
                        placeholder={tx('Width', 'Ancho')}
                        className="px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                        min="1"
                      />
                      <input
                        type="number"
                        value={newCustomHeight}
                        onChange={(e) => setNewCustomHeight(parseInt(e.target.value) || 0)}
                        placeholder={tx('Height', 'Alto')}
                        className="px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                        min="1"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <button
                        onClick={addCustomSize}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1"
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
                                  className="sm:col-span-3 px-2.5 py-2 border border-green-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                                  placeholder={tx('Marketplace Name', 'Nombre del Marketplace')}
                                />
                                <input
                                  type="number"
                                  value={editingCustomWidth}
                                  onChange={(e) => setEditingCustomWidth(parseInt(e.target.value, 10) || 0)}
                                  className="px-2.5 py-2 border border-green-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                                  placeholder={tx('Width', 'Ancho')}
                                  min="1"
                                />
                                <input
                                  type="number"
                                  value={editingCustomHeight}
                                  onChange={(e) => setEditingCustomHeight(parseInt(e.target.value, 10) || 0)}
                                  className="px-2.5 py-2 border border-green-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                                  placeholder={tx('Height', 'Alto')}
                                  min="1"
                                />
                                <div className="flex gap-2">
                                  <button
                                    type="button"
                                    onClick={saveEditCustomSize}
                                    className="px-3 py-2 text-xs font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700"
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
                                  className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
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
                  <div className="border border-gray-200 rounded-xl p-3 md:p-4 space-y-4">
                    <h3 className="font-semibold text-gray-800 text-sm md:text-base">{tx('Marketplace Export Controls', 'Controles de Exportacion para Marketplace')}</h3>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {tx('Project Name (Optional)', 'Nombre del Proyecto (Opcional)')}
                      </label>
                      <input
                        type="text"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        placeholder={tx('e.g. muvit utensils', 'ej. muvit utensils')}
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                      />
                      <p className="text-xs text-gray-500 mt-1">{tx('Used in filenames as lowercase-hyphen format.', 'Se usa en nombres de archivo con formato minusculas-guion.')}</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {tx('Safe Area Margin', 'Margen de Area Segura')} ({safeAreaPercent}%)
                      </label>
                      <input
                        type="range"
                        value={safeAreaPercent}
                        onChange={(e) => setSafeAreaPercent(parseInt(e.target.value, 10))}
                        className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                        min="10"
                        max="30"
                        step="1"
                      />
                      <p className="text-xs text-gray-500 mt-1">{tx('10-15% recommended to avoid logo/text cropping.', 'Se recomienda 10-15% para evitar cortes de logo/texto.')}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{tx('Preview Target', 'Objetivo de Vista Previa')}</label>
                        <select
                          value={previewTargetId}
                          onChange={(e) => setPreviewTargetId(e.target.value)}
                          className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                        >
                          <option value="">{tx('Select a size', 'Selecciona un tamano')}</option>
                          {getSelectedTargets().map((target) => (
                            <option key={target.id} value={target.id}>
                              {getTargetDisplayName(target)} ({target.width}x{target.height})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex items-end">
                        <button
                          onClick={() => setShowSafeAreaGuide((prev) => !prev)}
                          className={`w-full py-2 px-3 rounded-lg border-2 text-sm font-medium transition-colors ${showSafeAreaGuide ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                          type="button"
                        >
                          {showSafeAreaGuide ? tx('Hide Safe Area Guide', 'Ocultar Guia de Area Segura') : tx('Show Safe Area Guide', 'Mostrar Guia de Area Segura')}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Advanced Options */}
                  <div className="border border-gray-200 rounded-xl p-3 md:p-4">
                    <button
                      onClick={() => setShowAdvanced(!showAdvanced)}
                      className="flex items-center justify-between w-full text-left"
                    >
                      <span className="text-sm font-semibold text-gray-700">{tx('Advanced Options', 'Opciones Avanzadas')}</span>
                      {showAdvanced ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>

                    {showAdvanced && (
                      <div className="space-y-4 mt-4 pt-4 border-t">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {tx('Output Format', 'Formato de Salida')}
                          </label>
                          <select
                            value={format}
                            onChange={(e) => setFormat(e.target.value as any)}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                          >
                            <option value="jpeg">JPEG</option>
                            <option value="png">PNG</option>
                            <option value="webp">WebP</option>
                          </select>
                        </div>

                        {format !== 'png' && (
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              {tx('Quality', 'Calidad')} ({Math.round(quality * 100)}%)
                            </label>
                            <input
                              type="range"
                              value={quality}
                              onChange={(e) => setQuality(parseFloat(e.target.value))}
                              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                              min="0.1"
                              max="1"
                              step="0.01"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Selected Count & Actions */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <FolderArchive className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-semibold text-gray-700">
                          {sourceImages.length} {tx('image', 'imagen')}{sourceImages.length !== 1 ? tx('s', 'es') : ''} × {getTotalSelectedCount()} {tx('size', 'tamano')}{getTotalSelectedCount() !== 1 ? tx('s', 's') : ''}
                        </span>
                      </div>
                      {getTotalSelectedCount() > 0 && (
                        <button
                          onClick={resetAll}
                          className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
                        >
                          <RotateCcw className="w-4 h-4" />
                          <span>{tx('Clear', 'Limpiar')}</span>
                        </button>
                      )}
                    </div>

                    {/* Progress Bar */}
                    {processing && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>{tx('Processing...', 'Procesando...')}</span>
                          <span>{progress}%</span>
                        </div>
                        <div className="w-full bg-white rounded-full h-2.5 shadow-inner">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    <button
                      onClick={processAllSizes}
                      disabled={processing || getTotalSelectedCount() === 0 || sourceImages.length === 0}
                      className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      {processing ? tx('Processing...', 'Procesando...') : tx('Export Marketplace ZIP', 'Exportar ZIP de Marketplace')}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <ImageIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Ready to Resize', 'Listo para Redimensionar')}</h3>
                    <p className="text-gray-600 max-w-sm mx-auto">
                      {tx('Upload one or more images to export marketplace-ready sizes', 'Sube una o varias imagenes para exportar tamanos listos para marketplace')}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {imageState.originalUrl && showMobilePreview && (
            <div
              className="lg:hidden fixed inset-x-3 bottom-3 z-30"
              style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 0.25rem)' }}
            >
              <div className="rounded-xl border border-blue-200 bg-white/95 backdrop-blur p-4 shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-bold text-gray-900">{tx('Quick Preview Controls', 'Controles Rapidos de Vista Previa')}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-2 py-1">
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
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  min="10"
                  max="30"
                  step="1"
                />

                <button
                  onClick={() => setShowSafeAreaGuide((prev) => !prev)}
                  className={`mt-3 w-full py-2 px-3 rounded-lg border-2 text-sm font-medium transition-colors ${showSafeAreaGuide ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
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
                className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all"
                aria-label={tx('Open preview controls', 'Abrir controles de vista previa')}
              >
                <Eye className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* About Image Resizer */}
          <section className="bg-white rounded-xl shadow-md p-8 border border-gray-200 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About Image Resizer', 'Sobre el Redimensionador de Imagen')}</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                {tx(
                  'Our free online image resizer tool allows you to resize images to multiple sizes instantly and download them all in one ZIP file. Perfect for social media, websites, email attachments, or printing - this tool provides a fast and efficient solution for all your image resizing needs.',
                  'Nuestra herramienta gratuita te permite redimensionar imagenes a multiples tamanos al instante y descargarlas en un solo archivo ZIP. Es ideal para redes sociales, sitios web, correo o impresion, y ofrece una solucion rapida y eficiente para todas tus necesidades.'
                )}
              </p>
              <p>
                {tx(
                  'Select from preset sizes for popular platforms like Instagram, YouTube, Facebook, and more, or add your own custom dimensions. All processing happens in your browser, ensuring complete privacy and security. No registration required, completely free to use.',
                  'Selecciona tamanos predefinidos para plataformas populares como Instagram, YouTube y Facebook, o agrega dimensiones personalizadas. Todo el procesamiento ocurre en tu navegador para garantizar privacidad y seguridad. Sin registro y totalmente gratis.'
                )}
              </p>
            </div>
          </section>

          {/* Image Resizing Guide Section */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md p-8 border border-blue-200 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{tx('Image Resizing Guide', 'Guia de Redimensionamiento de Imagen')}</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-5 rounded-xl">
                <h3 className="font-bold text-blue-700 mb-3">{tx('Understanding Pixels', 'Entender los Pixeles')}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tx(
                    'Pixels are the tiny dots that make up digital images. An image measuring 1920×1080 pixels has 1920 dots across and 1080 dots down. More pixels = higher resolution = more detail, but also larger file size. For web use, 72-96 PPI (pixels per inch) is standard.',
                    'Los pixeles son los pequenos puntos que forman una imagen digital. Una imagen de 1920x1080 tiene 1920 puntos de ancho y 1080 de alto. Mas pixeles = mas resolucion y detalle, pero tambien mayor peso. Para web, 72-96 PPI suele ser estandar.'
                  )}
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-xl">
                <h3 className="font-bold text-blue-700 mb-3">{tx('Aspect Ratio Explained', 'Relacion de Aspecto Explicada')}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tx(
                    'Aspect ratio is the proportional relationship between width and height. Common ratios: 16:9 (widescreen), 4:3 (standard), 1:1 (square for Instagram). Keeping aspect ratio locked prevents distortion when resizing.',
                    'La relacion de aspecto es la proporcion entre ancho y alto. Relaciones comunes: 16:9 (panoramico), 4:3 (estandar), 1:1 (cuadrado para Instagram). Mantenerla bloqueada evita deformaciones al redimensionar.'
                  )}
                </p>
              </div>
            </div>

            <h3 className="font-bold text-gray-900 mb-4">{tx('Common Image Sizes', 'Tamanos de Imagen Comunes')}</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="text-left py-3 px-4 font-bold text-gray-900">{tx('Use Case', 'Uso')}</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900">{tx('Recommended Size', 'Tamano Recomendado')}</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900">{tx('Aspect Ratio', 'Relacion de Aspecto')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 px-4">{tx('Instagram Post', 'Publicacion de Instagram')}</td>
                    <td className="py-3 px-4 font-mono text-blue-600">1080 × 1080 px</td>
                    <td className="py-3 px-4">{tx('1:1 (Square)', '1:1 (Cuadrado)')}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4">{tx('Instagram Story', 'Historia de Instagram')}</td>
                    <td className="py-3 px-4 font-mono text-blue-600">1080 × 1920 px</td>
                    <td className="py-3 px-4">{tx('9:16 (Vertical)', '9:16 (Vertical)')}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">{tx('Facebook Cover', 'Portada de Facebook')}</td>
                    <td className="py-3 px-4 font-mono text-blue-600">820 × 312 px</td>
                    <td className="py-3 px-4">2.63:1</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4">{tx('Twitter Header', 'Cabecera de X/Twitter')}</td>
                    <td className="py-3 px-4 font-mono text-blue-600">1500 × 500 px</td>
                    <td className="py-3 px-4">3:1</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">{tx('YouTube Thumbnail', 'Miniatura de YouTube')}</td>
                    <td className="py-3 px-4 font-mono text-blue-600">1280 × 720 px</td>
                    <td className="py-3 px-4">16:9</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4">{tx('LinkedIn Banner', 'Banner de LinkedIn')}</td>
                    <td className="py-3 px-4 font-mono text-blue-600">1584 × 396 px</td>
                    <td className="py-3 px-4">4:1</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">{tx('Full HD Desktop', 'Escritorio Full HD')}</td>
                    <td className="py-3 px-4 font-mono text-blue-600">1920 × 1080 px</td>
                    <td className="py-3 px-4">16:9</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4">{tx('4K Resolution', 'Resolucion 4K')}</td>
                    <td className="py-3 px-4 font-mono text-blue-600">3840 × 2160 px</td>
                    <td className="py-3 px-4">16:9</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Resizing Tips Section */}
          <section className="bg-white rounded-xl shadow-md p-8 border border-gray-200 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{tx('Image Resizing Tips', 'Consejos para Redimensionar Imagenes')}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
                <span className="text-green-600 text-xl">✅</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{tx('Do: Keep Aspect Ratio', 'Haz: Mantener la Relacion de Aspecto')}</h3>
                  <p className="text-sm text-gray-600">{tx('Lock aspect ratio to prevent image distortion and stretching', 'Bloquea la relacion para evitar deformacion y estiramiento')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
                <span className="text-red-600 text-xl">❌</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{tx("Don't: Upscale Excessively", 'Evita: Ampliar en Exceso')}</h3>
                  <p className="text-sm text-gray-600">{tx('Enlarging small images causes blurriness-AI upscaling tools are better', 'Ampliar imagenes pequenas genera borrosidad; para eso es mejor usar herramientas de IA')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
                <span className="text-green-600 text-xl">✅</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{tx('Do: Start with High-Res', 'Haz: Empieza con Alta Resolucion')}</h3>
                  <p className="text-sm text-gray-600">{tx('Always resize from the largest available source image', 'Siempre redimensiona desde la imagen fuente mas grande disponible')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
                <span className="text-red-600 text-xl">❌</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{tx("Don't: Over-Compress", 'Evita: Sobrecomprimir')}</h3>
                  <p className="text-sm text-gray-600">{tx('Using too low quality settings creates visible artifacts', 'Usar calidad demasiado baja crea artefactos visibles')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <span className="text-blue-600 text-xl">💡</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{tx('Tip: Use Percentage Mode', 'Consejo: Usa el Modo Porcentaje')}</h3>
                  <p className="text-sm text-gray-600">{tx('50% is a quick way to halve dimensions while keeping proportions', '50% es una forma rapida de reducir dimensiones a la mitad manteniendo proporciones')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl border border-purple-200">
                <span className="text-purple-600 text-xl">🖥️</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{tx('Tip: Match Display Size', 'Consejo: Ajusta al Tamano de Pantalla')}</h3>
                  <p className="text-sm text-gray-600">{tx('Resize to actual display size for optimal web performance', 'Redimensiona al tamano real de visualizacion para mejor rendimiento web')}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto" aria-labelledby="features-heading">
            <h2 id="features-heading" className="sr-only">{tx('Key Features', 'Funciones Clave')}</h2>
            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('100% Secure', '100% Seguro')}</h3>
              <p className="text-gray-600">
                {tx('All processing happens in your browser. Your images never leave your device.', 'Todo el procesamiento ocurre en tu navegador. Tus imagenes nunca salen de tu dispositivo.')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('High Quality', 'Alta Calidad')}</h3>
              <p className="text-gray-600">
                {tx('Maintains image quality while resizing with advanced algorithms.', 'Mantiene la calidad de imagen al redimensionar con algoritmos avanzados.')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('No Signup Required', 'Sin Registro')}</h3>
              <p className="text-gray-600">
                {tx('Start resizing images immediately without registration.', 'Empieza a redimensionar imagenes inmediatamente sin registro.')}
              </p>
            </div>
          </section>

          {/* How to Use */}
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-8 border border-blue-200 max-w-4xl mx-auto mb-12" aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="text-2xl font-bold text-gray-900 mb-8 text-center">{tx('How to Use Image Resizer', 'Como Usar el Redimensionador')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Upload Your Image', 'Sube tu Imagen')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Click the upload area or drag and drop your image file. Supports JPG, PNG, WebP, and other formats.', 'Haz clic en el area de carga o arrastra y suelta tu archivo. Admite JPG, PNG, WebP y otros formatos.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Choose Resize Mode', 'Elige el Modo de Redimensionamiento')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Select pixels for exact dimensions or percentage to scale proportionally. Toggle aspect ratio lock if needed.', 'Selecciona pixeles para dimensiones exactas o porcentaje para escalar proporcionalmente. Activa el bloqueo de relacion de aspecto si lo necesitas.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Adjust Advanced Options', 'Ajusta Opciones Avanzadas')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Set output format (JPG/PNG/WebP) and quality level. Higher quality means larger file size.', 'Define formato de salida (JPG/PNG/WebP) y nivel de calidad. Mayor calidad implica mayor tamano de archivo.')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tx('Resize & Download', 'Redimensiona y Descarga')}</h3>
                    <p className="text-gray-600 text-sm">{tx('Click "Resize Image" to process. Preview the result and download your resized image instantly.', 'Haz clic en "Redimensionar Imagen" para procesar. Previsualiza el resultado y descarga al instante.')}</p>
                  </div>
                </div>
              </div>
            </div>
              <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-sm text-blue-800">
                  <strong>{tx('Pro Tip:', 'Consejo Pro:')}</strong> {tx('For best results, maintain aspect ratio when resizing to avoid image distortion. Use percentage mode for proportional scaling.', 'Para mejores resultados, manten la relacion de aspecto al redimensionar y evita deformaciones. Usa modo porcentaje para escalado proporcional.')}
                </p>
              </div>
            </section>          {/* FAQ Section */}
          <section className="max-w-4xl mx-auto" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-gray-900 mb-6 text-center">{tx('Frequently Asked Questions', 'Preguntas Frecuentes')}</h2>
            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(0)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span>{tx('What image formats are supported?', 'Que formatos de imagen son compatibles?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 0 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 0 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('We support all major image formats including JPG/JPEG, PNG, WebP, GIF, BMP, and more. You can also convert between formats while resizing-for example, resize a PNG and save as JPG.', 'Admitimos todos los formatos principales como JPG/JPEG, PNG, WebP, GIF, BMP y mas. Tambien puedes convertir entre formatos mientras redimensionas, por ejemplo de PNG a JPG.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(1)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span>{tx('Is my image data secure?', 'Mis datos de imagen son seguros?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 1 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 1 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Yes, absolutely. All image processing happens locally in your browser using JavaScript and HTML5 Canvas. Your images never leave your device or get uploaded to any server. This is 100% private and secure.', 'Si, totalmente. Todo el procesamiento ocurre localmente en tu navegador con JavaScript y HTML5 Canvas. Tus imagenes nunca salen de tu dispositivo ni se suben a servidores. Es 100% privado y seguro.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(2)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span>{tx("What's the difference between pixels and percentage mode?", 'Cual es la diferencia entre modo pixeles y porcentaje?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 2 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 2 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Pixels mode lets you set exact dimensions (e.g., 800x600 px). Percentage mode scales proportionally from the original size (e.g., 50% makes a 1000px image into 500px). Use pixels for specific requirements like social media, and percentage for quick proportional scaling.', 'El modo pixeles permite definir dimensiones exactas (ej. 800x600 px). El modo porcentaje escala proporcionalmente desde el tamano original (ej. 50% convierte 1000px en 500px). Usa pixeles para requisitos especificos y porcentaje para escalado rapido proporcional.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(3)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span>{tx('Will resizing affect image quality?', 'Redimensionar afectara la calidad de imagen?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 3 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 3 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('Reducing image size maintains quality well. However, enlarging (upscaling) small images can cause blurriness since new pixels must be created. Our tool uses high-quality bilinear/bicubic interpolation, but it\'s best to start with the largest source image available.', 'Reducir el tamano mantiene bien la calidad. Sin embargo, ampliar imagenes pequenas puede generar borrosidad porque se crean pixeles nuevos. Nuestra herramienta usa interpolacion bilineal/bicubica de alta calidad, pero lo ideal es partir de la imagen original mas grande posible.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(4)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span>{tx("What's the maximum image size I can resize?", 'Cual es el tamano maximo de imagen que puedo redimensionar?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 4 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 4 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('The maximum size depends on your browser and device memory. Most modern browsers can handle images up to 50-100 MB. Very large images (8K resolution or higher) may be slow to process on older devices.', 'El tamano maximo depende de tu navegador y memoria del dispositivo. La mayoria de navegadores modernos manejan imagenes de hasta 50-100 MB. Imagenes muy grandes (8K o mas) pueden procesarse lento en dispositivos antiguos.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 6 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(5)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span>{tx('What does aspect ratio lock do?', 'Que hace el bloqueo de relacion de aspecto?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 5 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 5 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('When aspect ratio is locked, changing the width automatically adjusts the height proportionally (and vice versa). This prevents image distortion. Unlock it only if you intentionally want to stretch or squish the image to specific non-proportional dimensions.', 'Cuando la relacion de aspecto esta bloqueada, al cambiar el ancho se ajusta el alto proporcionalmente (y viceversa). Esto evita deformaciones. Desbloqueala solo si quieres estirar o comprimir la imagen a dimensiones no proporcionales.')}</p>
                  </div>
                )}
              </div>

              {/* FAQ 7 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(6)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span>{tx('How do I resize images for email attachments?', 'Como redimensiono imagenes para adjuntos de correo?')}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 6 ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === 6 && (
                  <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                    <p>{tx('For email, resize to around 1200px on the longest side and use JPG format with 80-85% quality. This typically creates files under 500KB that display well on all devices. Most email services limit attachments to 25MB, so smaller files also upload faster.', 'Para email, redimensiona a unos 1200px en el lado mas largo y usa formato JPG con calidad 80-85%. Normalmente genera archivos menores a 500KB que se ven bien en todos los dispositivos. La mayoria de servicios limita adjuntos a 25MB, por eso archivos pequenos tambien suben mas rapido.')}</p>
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
