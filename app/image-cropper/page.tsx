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
import { IMAGE_CROPPER_TEXT_BY_LOCALE } from '@/lib/imageCropperTranslations';

interface CropArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ImageState {
  originalFile: File | null;
  originalUrl: string;
  processedUrl: string;
  originalWidth: number;
  originalHeight: number;
}

interface OutputSizePreset {
  id: string;
  name: string;
  width: number;
  height: number;
  category: string;
  note?: string;
}

interface OutputTarget {
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

const OUTPUT_SIZE_PRESETS: OutputSizePreset[] = [
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
  const tx = useCallback(
    (english: string, spanish: string) => {
      if (locale === 'es') {
        return spanish;
      }

      return (
        IMAGE_CROPPER_TEXT_BY_LOCALE[locale]?.[english] ||
        IMAGE_RESIZER_TEXT_BY_LOCALE[locale]?.[english] ||
        english
      );
    },
    [locale]
  );
  const localeBasePath = getLocaleBasePath(locale);
  const pagePath = localeBasePath ? `${localeBasePath}/image-cropper` : '/image-cropper';
  const pageUrl = `https://pixselli.com${pagePath}`;
  const homePath = localeBasePath || '/';

  const [imageState, setImageState] = useState<ImageState>({
    originalFile: null,
    originalUrl: '',
    processedUrl: '',
    originalWidth: 0,
    originalHeight: 0,
  });
  
  const [cropArea, setCropArea] = useState<CropArea>({
    x: 0,
    y: 0,
    width: 200,
    height: 200,
  });
  
  const [aspectRatio, setAspectRatio] = useState<string>('free');
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showMobilePreview, setShowMobilePreview] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const [selectedOutputPresets, setSelectedOutputPresets] = useState<Set<string>>(new Set());
  const [outputFormat, setOutputFormat] = useState<'png' | 'jpeg' | 'webp'>('png');
  const [outputQuality, setOutputQuality] = useState(0.92);
  const [sourceImages, setSourceImages] = useState<ImageState[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [projectName, setProjectName] = useState('');
  const [safeAreaPercent, setSafeAreaPercent] = useState(12);
  const [showSafeAreaGuide, setShowSafeAreaGuide] = useState(true);
  const [previewTargetId, setPreviewTargetId] = useState('');
  const [customSizes, setCustomSizes] = useState<CustomSize[]>([]);
  const [newCustomMarketplaceName, setNewCustomMarketplaceName] = useState('');
  const [newCustomWidth, setNewCustomWidth] = useState<number>(1080);
  const [newCustomHeight, setNewCustomHeight] = useState<number>(1080);
  const [recentMarketplaceNames, setRecentMarketplaceNames] = useState<string[]>([]);
  const [editingCustomSizeId, setEditingCustomSizeId] = useState<string | null>(null);
  const [editingCustomMarketplaceName, setEditingCustomMarketplaceName] = useState('');
  const [editingCustomWidth, setEditingCustomWidth] = useState<number>(0);
  const [editingCustomHeight, setEditingCustomHeight] = useState<number>(0);
  const [presetPickerCategory, setPresetPickerCategory] = useState('');
  const [presetPickerId, setPresetPickerId] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

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

  const presetCategories = useMemo(() => [...new Set(OUTPUT_SIZE_PRESETS.map((preset) => preset.category))], []);
  const pickerPresets = useMemo(
    () => OUTPUT_SIZE_PRESETS.filter((preset) => preset.category === presetPickerCategory),
    [presetPickerCategory]
  );

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
              const img = new Image();
              img.onload = () => {
                resolve({
                  originalFile: file,
                  originalUrl: event.target?.result as string,
                  processedUrl: '',
                  originalWidth: img.width,
                  originalHeight: img.height,
                });
              };
              img.onerror = () => reject(new Error('Failed to parse image'));
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
        const cropSize = Math.min(merged[0].originalWidth, merged[0].originalHeight) * 0.6;
        setCropArea({
          x: (merged[0].originalWidth - cropSize) / 2,
          y: (merged[0].originalHeight - cropSize) / 2,
          width: cropSize,
          height: cropSize,
        });
      }
      return merged;
    });
  }, []);

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

  const applyAspectRatio = (ratio: string) => {
    setAspectRatio(ratio);
    
    if (ratio === 'free') return;
    
    let newWidth = cropArea.width;
    let newHeight = cropArea.height;
    
    switch (ratio) {
      case '1:1':
        newHeight = newWidth;
        break;
      case '4:3':
        newHeight = (newWidth * 3) / 4;
        break;
      case '16:9':
        newHeight = (newWidth * 9) / 16;
        break;
      case '3:2':
        newHeight = (newWidth * 2) / 3;
        break;
    }
    
    // Ensure crop area stays within image bounds
    if (cropArea.x + newWidth > imageState.originalWidth) {
      newWidth = imageState.originalWidth - cropArea.x;
    }
    if (cropArea.y + newHeight > imageState.originalHeight) {
      newHeight = imageState.originalHeight - cropArea.y;
    }
    
    setCropArea({ ...cropArea, width: newWidth, height: newHeight });
  };

  const getCategoryLabel = (category: string) => {
    if (locale === 'es') {
      if (category === MARKETPLACE_PRESET_CATEGORY) {
        return 'Tamano para Ecommerce / Marketplace';
      }

      return CATEGORY_LABELS_ES[category] ?? category;
    }

    const localizedCategory = IMAGE_RESIZER_CATEGORY_LABELS_BY_LOCALE[locale]?.[category];
    if (localizedCategory) {
      return category === MARKETPLACE_PRESET_CATEGORY ? `${localizedCategory} / Ecommerce` : localizedCategory;
    }

    return category === MARKETPLACE_PRESET_CATEGORY ? 'Ecommerce / Marketplace Sizes' : category;
  };

  const getPresetLabel = (preset: OutputSizePreset) => {
    if (locale === 'es') {
      return PRESET_NAME_LABELS_ES[preset.id] ?? preset.name;
    }

    return IMAGE_RESIZER_PRESET_NAME_LABELS_BY_LOCALE[locale]?.[preset.id] ?? preset.name;
  };

  const getPresetNote = (preset: OutputSizePreset) => {
    if (!preset.note) {
      return '';
    }

    if (locale === 'es') {
      return PRESET_NOTE_LABELS_ES[preset.id] ?? preset.note;
    }

    return IMAGE_RESIZER_PRESET_NOTE_LABELS_BY_LOCALE[locale]?.[preset.id] ?? preset.note;
  };

  const getTargetDisplayName = (target: OutputTarget) => {
    if (target.id.startsWith('custom-')) {
      return `${target.name} (${target.width}x${target.height})`;
    }

    if (locale === 'es') {
      return PRESET_NAME_LABELS_ES[target.id] ?? target.name;
    }

    return IMAGE_RESIZER_PRESET_NAME_LABELS_BY_LOCALE[locale]?.[target.id] ?? target.name;
  };

  const toggleOutputPreset = (presetId: string) => {
    setSelectedOutputPresets(prev => {
      const next = new Set(prev);
      if (next.has(presetId)) next.delete(presetId);
      else next.add(presetId);
      return next;
    });
  };

  const addOutputPresetFromPicker = () => {
    if (!presetPickerId) return;

    setSelectedOutputPresets((prev) => {
      const next = new Set(prev);
      next.add(presetPickerId);
      return next;
    });
  };

  const getTotalOutputCount = () => {
    const explicitCount = selectedOutputPresets.size + customSizes.length;
    return explicitCount > 0 ? explicitCount : 1;
  };

  const getSelectedTargets = useCallback((): OutputTarget[] => {
    const selectedPresets = OUTPUT_SIZE_PRESETS.filter((preset) => selectedOutputPresets.has(preset.id));
    const targets: OutputTarget[] = selectedPresets.map((preset) => ({
      id: preset.id,
      name: preset.name,
      width: preset.width,
      height: preset.height,
      category: preset.category,
    }));

    customSizes.forEach((size) => {
      targets.push({
        id: size.id,
        name: size.name,
        width: size.width,
        height: size.height,
        category: MARKETPLACE_PRESET_CATEGORY,
      });
    });

    if (targets.length > 0) {
      return targets;
    }

    if (cropArea.width > 0 && cropArea.height > 0) {
      return [
        {
          id: 'original-crop',
          name: 'Original Crop',
          width: Math.round(cropArea.width),
          height: Math.round(cropArea.height),
          category: 'Crop',
        },
      ];
    }

    return [];
  }, [selectedOutputPresets, customSizes, cropArea.width, cropArea.height]);

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

  const normalizeText = (value: string) => {
    return normalizeFileToken(value);
  };

  const parseMarketplaceToken = (target: OutputTarget) => {
    return parseMarketplaceOutputToken({
      category: target.category,
      displayName: target.name,
      fallbackId: target.id,
      marketplaceCategory: MARKETPLACE_PRESET_CATEGORY,
    });
  };

  const removeSourceImage = (index: number) => {
    setSourceImages((prev) => {
      const next = prev.filter((_, i) => i !== index);
      if (next.length === 0) {
        setImageState({
          originalFile: null,
          originalUrl: '',
          processedUrl: '',
          originalWidth: 0,
          originalHeight: 0,
        });
        setActiveImageIndex(0);
        return next;
      }

      const nextIndex = Math.max(0, Math.min(activeImageIndex, next.length - 1));
      setActiveImageIndex(nextIndex);
      setImageState(next[nextIndex]);
      const cropSize = Math.min(next[nextIndex].originalWidth, next[nextIndex].originalHeight) * 0.6;
      setCropArea({
        x: (next[nextIndex].originalWidth - cropSize) / 2,
        y: (next[nextIndex].originalHeight - cropSize) / 2,
        width: cropSize,
        height: cropSize,
      });
      return next;
    });
  };

  const removeCustomSize = (id: string) => {
    setCustomSizes((prev) => prev.filter((size) => size.id !== id));
    if (editingCustomSizeId === id) {
      cancelEditCustomSize();
    }
  };

  const getCropRectForTargetRatio = (targetRatio: number) => {
    const centerX = cropArea.x + cropArea.width / 2;
    const centerY = cropArea.y + cropArea.height / 2;

    let rectWidth = cropArea.width;
    let rectHeight = cropArea.height;

    const currentRatio = rectWidth / rectHeight;
    if (currentRatio > targetRatio) {
      rectWidth = rectHeight * targetRatio;
    } else {
      rectHeight = rectWidth / targetRatio;
    }

    let x = centerX - rectWidth / 2;
    let y = centerY - rectHeight / 2;

    x = Math.max(0, Math.min(x, imageState.originalWidth - rectWidth));
    y = Math.max(0, Math.min(y, imageState.originalHeight - rectHeight));

    return {
      x: Math.round(x),
      y: Math.round(y),
      width: Math.round(rectWidth),
      height: Math.round(rectHeight),
    };
  };

  const cropToBlob = async (
    img: HTMLImageElement,
    canvas: HTMLCanvasElement,
    sourceRect: { x: number; y: number; width: number; height: number },
    targetWidth: number,
    targetHeight: number,
    options?: { showGuides?: boolean; targetCategory?: string }
  ): Promise<Blob> => {
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');

    const mimeType = outputFormat === 'png' ? 'image/png' : outputFormat === 'webp' ? 'image/webp' : 'image/jpeg';

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
      sourceRect,
      forceBackgroundFill: mimeType === 'image/jpeg',
      paddingColor: '#FFFFFF',
    });

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (blob) resolve(blob);
          else reject(new Error('Failed to create blob'));
        },
        mimeType,
        outputQuality
      );
    });
  };

  const renderPreview = useCallback(async () => {
    if (!previewCanvasRef.current || !imageState.originalUrl) return;

    const targets = getSelectedTargets();
    const target = targets.find((item) => item.id === previewTargetId) || targets[0];
    if (!target) return;

    const ratio = target.width / target.height;
    const rect = getCropRectForTargetRatio(ratio);

    const img = new Image();
    img.src = imageState.originalUrl;
    await new Promise((resolve) => {
      img.onload = resolve;
    });

    try {
      await cropToBlob(img, previewCanvasRef.current, rect, target.width, target.height, {
        showGuides: showSafeAreaGuide,
        targetCategory: target.category,
      });
    } catch {
      // Keep editing flow responsive when preview fails.
    }
  }, [imageState.originalUrl, previewTargetId, showSafeAreaGuide, getSelectedTargets, cropArea, safeAreaPercent]);

  useEffect(() => {
    renderPreview();
  }, [renderPreview]);

  useEffect(() => {
    const selectedTargets = getSelectedTargets();

    if (selectedTargets.length === 0) {
      if (previewTargetId) {
        setPreviewTargetId('');
      }
      return;
    }

    const hasPreviewTarget = selectedTargets.some((target) => target.id === previewTargetId);
    if (!hasPreviewTarget) {
      setPreviewTargetId(selectedTargets[0].id);
    }
  }, [getSelectedTargets, previewTargetId]);

  const processCrop = async () => {
    if (sourceImages.length === 0 || !canvasRef.current) return;

    setProcessing(true);
    setProgress(0);

    try {
      const canvas = canvasRef.current;
      const zip = new JSZip();
      const normalizedProjectName = normalizeText(projectName);
      const extension = outputFormat === 'png' ? 'png' : outputFormat === 'webp' ? 'webp' : 'jpg';

      const presetsToProcess = getSelectedTargets();
      const totalJobs = sourceImages.length * presetsToProcess.length;
      let doneJobs = 0;
      const usedNames = new Map<string, number>();

      for (let imageIndex = 0; imageIndex < sourceImages.length; imageIndex++) {
        const source = sourceImages[imageIndex];
        const img = new Image();
        img.src = source.originalUrl;
        await new Promise((resolve) => {
          img.onload = resolve;
        });

        for (let i = 0; i < presetsToProcess.length; i++) {
          const preset = presetsToProcess[i];
          const ratio = preset.width / preset.height;
          const rect = getCropRectForTargetRatio(ratio);

          const blob = await cropToBlob(img, canvas, rect, preset.width, preset.height, {
            targetCategory: preset.category,
          });

          const sequenceToken = `image${imageIndex + 1}`;
          const targetToken = parseMarketplaceToken(preset);
          const prefix = normalizedProjectName ? `${normalizedProjectName}-` : '';
          const rawBaseName = `${prefix}${sequenceToken}-${targetToken}`;
          const seenCount = usedNames.get(rawBaseName) || 0;
          usedNames.set(rawBaseName, seenCount + 1);
          const uniqueBaseName = seenCount === 0 ? rawBaseName : `${rawBaseName}-${seenCount + 1}`;

          zip.file(`${uniqueBaseName}.${extension}`, blob);

          doneJobs += 1;
          setProgress(Math.round((doneJobs / totalJobs) * 100));
        }
      }

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const downloadUrl = URL.createObjectURL(zipBlob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      const zipBaseName = normalizedProjectName || 'cropped-images';
      link.download = normalizeDownloadName(`${zipBaseName}-marketplace-exports.zip`);
      link.click();
      URL.revokeObjectURL(downloadUrl);

      // Keep preview behavior (shows the currently configured crop area)
      const previewCanvas = canvas;
      const previewRect = {
        x: Math.round(cropArea.x),
        y: Math.round(cropArea.y),
        width: Math.round(cropArea.width),
        height: Math.round(cropArea.height),
      };
      previewCanvas.width = previewRect.width;
      previewCanvas.height = previewRect.height;
      const ctx = previewCanvas.getContext('2d');
      if (ctx) {
        const previewImg = new Image();
        previewImg.src = imageState.originalUrl;
        await new Promise((resolve) => {
          previewImg.onload = resolve;
        });
        ctx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
        ctx.drawImage(
          previewImg,
          previewRect.x,
          previewRect.y,
          previewRect.width,
          previewRect.height,
          0,
          0,
          previewRect.width,
          previewRect.height
        );
        const processedUrl = previewCanvas.toDataURL('image/png');
        setImageState(prev => ({ ...prev, processedUrl }));
      }
    } catch (error) {
      console.error('Error cropping image:', error);
      alert(tx('Failed to crop image. Please try again.', 'No se pudo recortar la imagen. Intentalo de nuevo.'));
    } finally {
      setProcessing(false);
      setProgress(0);
    }
  };

  const downloadImage = () => {
    if (!imageState.processedUrl) return;
    
    const link = document.createElement('a');
    link.href = imageState.processedUrl;
    link.download = normalizeDownloadName(`cropped-${Date.now()}.png`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetToOriginal = () => {
    setImageState(prev => ({ ...prev, processedUrl: '' }));
    const cropSize = Math.min(imageState.originalWidth, imageState.originalHeight) * 0.6;
    setCropArea({
      x: (imageState.originalWidth - cropSize) / 2,
      y: (imageState.originalHeight - cropSize) / 2,
      width: cropSize,
      height: cropSize,
    });
    setAspectRatio('free');
    setSelectedOutputPresets(new Set());
    setOutputFormat('png');
    setOutputQuality(0.92);
    setProjectName('');
    setSafeAreaPercent(12);
    setShowSafeAreaGuide(true);
    setPreviewTargetId('');
    setCustomSizes([]);
    setNewCustomMarketplaceName('');
    setNewCustomWidth(1080);
    setNewCustomHeight(1080);
    cancelEditCustomSize();
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
            "name": tx('Image Cropper - Free Online Image Crop Tool', 'Recortador de Imagen - Herramienta Gratis Online'),
            "description": tx('Free online image cropper tool. Crop images with custom aspect ratios. Fast, secure, and works entirely in your browser.', 'Herramienta gratis online para recortar imagenes con relaciones de aspecto personalizadas. Rapida, segura y funciona totalmente en tu navegador.'),
            "url": pageUrl,
            "applicationCategory": "DesignApplication",
            "operatingSystem": tx('Web Browser', 'Navegador Web'),
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              tx('Custom crop areas', 'Area de recorte personalizada'),
              tx('Multiple aspect ratios (1:1, 4:3, 16:9, 3:2)', 'Multiples relaciones de aspecto (1:1, 4:3, 16:9, 3:2)'),
              tx('Free aspect ratio mode', 'Modo libre de relacion de aspecto'),
              tx('Drag to reposition crop area', 'Arrastrar para reposicionar el area de recorte'),
              tx('Client-side processing for privacy', 'Procesamiento local para privacidad'),
              tx('No file size limits', 'Sin limites de tamano de archivo'),
              tx('No registration required', 'Sin registro'),
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
            "name": tx('How to Crop Images Online', 'Como Recortar Imagenes Online'),
            "description": tx('Step-by-step guide to crop images using our free online tool', 'Guia paso a paso para recortar imagenes usando nuestra herramienta gratis'),
            "image": "https://pixselli.com/images/how-to-crop.jpg",
            "totalTime": "PT2M",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "USD",
              "value": "0"
            },
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
                "name": tx('Select Aspect Ratio', 'Seleccionar Relacion de Aspecto'),
                "text": tx('Choose from preset ratios (1:1, 4:3, 16:9, 3:2) or select Free for custom cropping', 'Elige entre relaciones predefinidas (1:1, 4:3, 16:9, 3:2) o usa Libre para recorte personalizado'),
                "url": `${pageUrl}#step2`
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": tx('Apply Crop', 'Aplicar Recorte'),
                "text": tx('Click Crop Image to apply the crop area centered on your image', 'Haz clic en Recortar Imagen para aplicar el area de recorte centrada en tu imagen'),
                "url": `${pageUrl}#step3`
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": tx('Download', 'Descargar'),
                "text": tx('Preview the cropped image and download it to your device', 'Previsualiza la imagen recortada y descargala en tu dispositivo'),
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
                "name": tx('What aspect ratios are supported?', 'Que relaciones de aspecto son compatibles?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx('We support multiple preset aspect ratios including 1:1 (square), 4:3, 16:9, and 3:2. You can also use free-form cropping for complete control over the crop area.', 'Admitimos multiples relaciones predefinidas incluyendo 1:1 (cuadrado), 4:3, 16:9 y 3:2. Tambien puedes usar recorte libre para control total del area.')
                }
              },
              {
                "@type": "Question",
                "name": tx('Is my image data secure?', 'Mis datos de imagen son seguros?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx('Yes, absolutely. All image processing happens locally in your browser. Your images never leave your device or get uploaded to any server.', 'Si, totalmente. Todo el procesamiento ocurre localmente en tu navegador. Tus imagenes nunca salen de tu dispositivo ni se suben a servidores.')
                }
              },
              {
                "@type": "Question",
                "name": tx('What image formats can I crop?', 'Que formatos de imagen puedo recortar?'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": tx('You can crop any image format supported by modern browsers, including JPG, PNG, WebP, GIF, and more. The cropped image is saved as PNG to preserve quality.', 'Puedes recortar cualquier formato compatible con navegadores modernos, incluyendo JPG, PNG, WebP, GIF y mas. La imagen recortada se guarda como PNG para preservar calidad.')
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
            "name": tx('Image Cropper', 'Recortador de Imagen'),
            "url": pageUrl,
            "applicationCategory": "DesignApplication",
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
                <span itemProp="name" className="text-gray-900 font-medium">{tx('Image Cropper', 'Recortador de Imagen')}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <header className="text-center mb-12">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Crop className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {tx('Image Cropper', 'Recortador de Imagen')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {tx('Crop your images with precision. Choose from multiple aspect ratios or use free-form cropping. Fast, secure, and works entirely in your browser.', 'Recorta tus imagenes con precision. Elige multiples relaciones de aspecto o usa recorte libre. Rapido, seguro y funciona totalmente en tu navegador.')}
            </p>
          </header>

          {/* Main Tool Area */}
          <main>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Upload/Preview Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Upload className="w-6 h-6 text-blue-600" />
                  {tx('Upload Your Image', 'Sube tu Imagen')}
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
                        {tx('Drag & drop your image here', 'Arrastra y suelta tu imagen aqui')}
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
                        {tx('Supports all major image formats. You can upload multiple images.', 'Admite todos los formatos principales. Puedes subir multiples imagenes.')}
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
                        ref={imageRef}
                        src={imageState.originalUrl}
                        alt={tx('Original', 'Original')}
                        className="w-full h-auto"
                        style={{ maxHeight: '500px', objectFit: 'contain' }}
                      />
                      {/* Crop overlay visualization */}
                      <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                        {imageState.originalWidth} × {imageState.originalHeight}
                      </div>
                    </div>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium"
                    >
                      {tx('Add More Images', 'Agregar mas imagenes')}
                    </button>
                    {sourceImages.length > 1 && (
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-2">{tx('Uploaded Images', 'Imagenes Subidas')} ({sourceImages.length})</p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {sourceImages.map((source, index) => (
                            <div key={`${source.originalFile?.name || 'image'}-${index}`} className="relative">
                              <button
                                type="button"
                                onClick={() => {
                                  setActiveImageIndex(index);
                                  setImageState(source);
                                  const cropSize = Math.min(source.originalWidth, source.originalHeight) * 0.6;
                                  setCropArea({
                                    x: (source.originalWidth - cropSize) / 2,
                                    y: (source.originalHeight - cropSize) / 2,
                                    width: cropSize,
                                    height: cropSize,
                                  });
                                }}
                                className={`w-full border-2 rounded-lg overflow-hidden ${activeImageIndex === index ? 'border-blue-500' : 'border-gray-200'}`}
                              >
                                <img src={source.originalUrl} alt={`${tx('Uploaded', 'Subida')} ${index + 1}`} className="w-full h-16 object-cover" />
                              </button>
                              <button
                                type="button"
                                onClick={() => removeSourceImage(index)}
                                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center shadow"
                                aria-label={`${tx('Remove image', 'Eliminar imagen')} ${index + 1}`}
                              >
                                <X className="w-3 h-3" />
                              </button>
                              <div className="text-[10px] text-center mt-1 text-gray-500">{tx('Image', 'Imagen')} {index + 1}</div>
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
                              const selectedTarget = getSelectedTargets().find((target) => target.id === previewTargetId);
                              return selectedTarget ? getTargetDisplayName(selectedTarget) : tx('Selected', 'Seleccionado');
                            })()}
                          </span>
                        )}
                      </div>
                      <canvas ref={previewCanvasRef} className="w-full rounded-lg border border-blue-100 bg-white" />
                      <p className="text-[11px] text-blue-700 mt-2">
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
                  </div>
                )}
              </div>

              {/* Controls Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Crop className="w-6 h-6 text-blue-600" />
                  {tx('Crop Settings', 'Configuracion de Recorte')}
                </h2>

                {imageState.originalUrl ? (
                  <div className="space-y-6">
                    {/* Aspect Ratio Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        {tx('Aspect Ratio', 'Relacion de Aspecto')}
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        <button
                          onClick={() => applyAspectRatio('free')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${
                            aspectRatio === 'free'
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {tx('Free', 'Libre')}
                        </button>
                        <button
                          onClick={() => applyAspectRatio('1:1')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${
                            aspectRatio === '1:1'
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          1:1
                        </button>
                        <button
                          onClick={() => applyAspectRatio('4:3')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${
                            aspectRatio === '4:3'
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          4:3
                        </button>
                        <button
                          onClick={() => applyAspectRatio('16:9')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${
                            aspectRatio === '16:9'
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          16:9
                        </button>
                        <button
                          onClick={() => applyAspectRatio('3:2')}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${
                            aspectRatio === '3:2'
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          3:2
                        </button>
                      </div>
                    </div>

                    {/* Crop Dimensions */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-3 border border-blue-200 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 shadow-sm">
                      <div className="flex items-center gap-2 pl-1">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-blue-100">
                          <Crop className="w-4 h-4 text-blue-600" />
                        </div>
                        <h3 className="text-sm font-bold text-gray-800">{tx('Crop Area', 'Area de Recorte')}</h3>
                      </div>
                      <div className="flex flex-1 sm:flex-none gap-2 w-full sm:w-auto">
                        <div className="flex-1 sm:flex-none bg-white px-3 py-2 rounded-lg border border-blue-100 flex items-center justify-between gap-3 shadow-sm min-w-[110px]">
                          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">{tx('Width', 'Ancho')}</span>
                          <span className="text-sm font-black text-blue-700 font-mono">
                            {Math.round(cropArea.width)}<span className="text-[10px] font-medium text-blue-400 ml-0.5">px</span>
                          </span>
                        </div>
                        <div className="flex-1 sm:flex-none bg-white px-3 py-2 rounded-lg border border-blue-100 flex items-center justify-between gap-3 shadow-sm min-w-[110px]">
                          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">{tx('Height', 'Alto')}</span>
                          <span className="text-sm font-black text-blue-700 font-mono">
                            {Math.round(cropArea.height)}<span className="text-[10px] font-medium text-blue-400 ml-0.5">px</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Info Box */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Move className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-blue-900 font-medium mb-1">
                            {tx('How to Crop', 'Como Recortar')}
                          </p>
                          <p className="text-xs text-blue-700">
                            {tx('Select an aspect ratio above, then click "Crop Image" to apply. The crop will be centered on your image.', 'Selecciona una relacion de aspecto arriba y haz clic en "Recortar Imagen" para aplicar. El recorte se centrara en tu imagen.')}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Output Size Presets */}
                    <div className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-semibold text-gray-700">{tx('Select Output Sizes', 'Seleccionar Tamanos de Salida')}</h3>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-2">
                            <FolderArchive className="w-4 h-4 text-blue-600" />
                            <span className="text-xs font-semibold text-gray-600">
                              {sourceImages.length} {tx('image', 'imagen')}{sourceImages.length !== 1 ? tx('s', 'es') : ''} × {getTotalOutputCount()} {tx('size', 'tamano')}{getTotalOutputCount() !== 1 ? tx('s', 's') : ''}
                            </span>
                          </div>
                        </div>
                      </div>

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
                          onClick={addOutputPresetFromPicker}
                          disabled={!presetPickerId}
                          className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          <Plus className="w-4 h-4" />
                          {tx('Add Selected Preset', 'Agregar Preset Seleccionado')}
                        </button>

                        {presetPickerId && (() => {
                          const selectedPreview = OUTPUT_SIZE_PRESETS.find((preset) => preset.id === presetPickerId);
                          if (!selectedPreview) return null;

                          return (
                            <p className="text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                              {tx('Selected', 'Seleccionado')}: {getPresetLabel(selectedPreview)} ({selectedPreview.width}x{selectedPreview.height})
                              {getPresetNote(selectedPreview) ? ` - ${getPresetNote(selectedPreview)}` : ''}
                            </p>
                          );
                        })()}

                        {selectedOutputPresets.size > 0 && (
                          <div className="pt-2 border-t border-gray-100">
                            <p className="text-xs font-semibold text-gray-700 mb-2">
                              {tx('Added Presets', 'Presets Agregados')} ({selectedOutputPresets.size})
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {Array.from(selectedOutputPresets).map((presetId) => {
                                const preset = OUTPUT_SIZE_PRESETS.find((item) => item.id === presetId);
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
                                      onClick={() => toggleOutputPreset(preset.id)}
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

                      <p className="text-xs text-gray-500 mt-2">
                        {selectedOutputPresets.size + customSizes.length === 0
                          ? tx('No preset selected - exports the current crop size.', 'No hay preset seleccionado: se exportara el tamano actual del recorte.')
                          : `${selectedOutputPresets.size + customSizes.length} ${tx('preset', 'preset')}${selectedOutputPresets.size + customSizes.length !== 1 ? 's' : ''} ${tx('selected', 'seleccionados')}`}
                      </p>
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
                          onChange={(e) => setNewCustomWidth(parseInt(e.target.value, 10) || 0)}
                          placeholder={tx('Width', 'Ancho')}
                          className="px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                          min="1"
                        />
                        <input
                          type="number"
                          value={newCustomHeight}
                          onChange={(e) => setNewCustomHeight(parseInt(e.target.value, 10) || 0)}
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

                    {/* Output Format */}
                    <div className="border border-gray-200 rounded-xl p-4">
                      <h3 className="text-sm font-semibold text-gray-700 mb-3">{tx('Output Format', 'Formato de Salida')}</h3>
                      <div className="flex flex-wrap gap-2">
                        {(['png', 'jpeg', 'webp'] as const).map((fmt) => (
                          <button
                            key={fmt}
                            onClick={() => setOutputFormat(fmt)}
                            className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                              outputFormat === fmt
                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                : 'border-gray-200 hover:border-gray-300 bg-gray-50 text-gray-700'
                            }`}
                          >
                            {fmt.toUpperCase()}
                          </button>
                        ))}
                      </div>

                      {(outputFormat === 'jpeg' || outputFormat === 'webp') && (
                        <div className="mt-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">{tx('Quality', 'Calidad')}</span>
                            <span className="text-sm font-semibold text-blue-600">{Math.round(outputQuality * 100)}%</span>
                          </div>
                          <input
                            type="range"
                            min="0.1"
                            max="1"
                            step="0.01"
                            value={outputQuality}
                            onChange={(e) => setOutputQuality(parseFloat(e.target.value))}
                            className="w-full"
                          />
                        </div>
                      )}
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
                        onClick={processCrop}
                        disabled={processing || sourceImages.length === 0}
                        className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {processing ? `${tx('Processing...', 'Procesando...')} ${progress}%` : tx('Export Marketplace ZIP', 'Exportar ZIP para Marketplace')}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Crop className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Ready to Crop', 'Listo para Recortar')}</h3>
                      <p className="text-gray-600 max-w-sm mx-auto">
                        {tx('Upload an image to start cropping', 'Sube una imagen para empezar a recortar')}
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
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">{tx('Original Image', 'Imagen Original')}</h3>
                    <div className="relative rounded-xl overflow-hidden bg-gray-100">
                      <img
                        src={imageState.originalUrl}
                        alt={tx('Original', 'Original')}
                        className="w-full h-auto"
                      />
                      <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                        {imageState.originalWidth} × {imageState.originalHeight}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">{tx('Cropped Image', 'Imagen Recortada')}</h3>
                    <div className="relative rounded-xl overflow-hidden bg-gray-100 mb-4">
                      <img
                        src={imageState.processedUrl}
                        alt={tx('Cropped', 'Recortada')}
                        className="w-full h-auto"
                      />
                      <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                        {Math.round(cropArea.width)} × {Math.round(cropArea.height)}
                      </div>
                    </div>
                    <button
                      onClick={downloadImage}
                      className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all font-bold shadow-lg flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      {tx('Download Cropped Image', 'Descargar Imagen Recortada')}
                    </button>
                  </div>
                </div>
              </div>
            )}

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

            {/* About Section */}
            <section className="bg-white rounded-xl shadow-md p-8 border border-gray-200 mb-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{tx('About Image Cropper', 'Sobre el Recortador de Imagen')}</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {tx('Pixselli Image Cropper is a simple online tool that helps you cut out exactly the part of the picture you need. You can quickly remove unwanted edges, focus on a face or product, or make images ready for social media and websites.', 'Pixselli Recortador de Imagen es una herramienta online sencilla que te ayuda a recortar exactamente la parte de la imagen que necesitas. Puedes eliminar bordes no deseados, enfocar un rostro o producto, y preparar imagenes para redes sociales y sitios web.')}
                </p>
                <p>
                  {tx('Just upload your photo, pick a size like 1:1 (square), 4:3, 16:9, 3:2, or use free-size cropping, then crop and download. Everything works inside your browser, so your images stay on your device. No signup, no limits, and completely free to use.', 'Solo sube tu foto, elige un tamano como 1:1 (cuadrado), 4:3, 16:9, 3:2, o usa recorte libre, luego recorta y descarga. Todo funciona dentro de tu navegador, asi que tus imagenes se quedan en tu dispositivo. Sin registro, sin limites y totalmente gratis.')}
                </p>
              </div>
            </section>

            {/* Why Crop Images Section */}
            <section className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-md p-8 border border-purple-200 mb-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{tx('Why Crop Your Images?', 'Por Que Recortar tus Imagenes?')}</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-5 rounded-xl">
                  <h3 className="font-bold text-purple-700 mb-3">{tx('📱 Social Media Ready', '📱 Listo para Redes Sociales')}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tx('Each social platform has specific image dimensions. Cropping ensures your photos look perfect without awkward cuts or letterboxing. Square for Instagram, 16:9 for YouTube, etc.', 'Cada plataforma social tiene dimensiones especificas. Recortar asegura que tus fotos se vean perfectas sin cortes incomodos ni bandas. Cuadrado para Instagram, 16:9 para YouTube, etc.')}
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-xl">
                  <h3 className="font-bold text-purple-700 mb-3">{tx('🎯 Focus on What Matters', '🎯 Enfoca lo Importante')}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tx('Remove distracting backgrounds, center your subject, or eliminate unwanted elements from the edges. Cropping directs viewer attention to the important part.', 'Elimina fondos distractores, centra tu sujeto, o quita elementos no deseados de los bordes. El recorte dirige la atencion a la parte importante.')}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl">
                  <h3 className="font-bold text-purple-700 mb-3">{tx('📏 Perfect Composition', '📏 Composicion Perfecta')}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tx('Apply the rule of thirds or other composition techniques by cropping. Position your subject along visual guidelines for more professional-looking photos.', 'Aplica la regla de tercios u otras tecnicas de composicion mediante recorte. Posiciona tu sujeto en guias visuales para lograr fotos mas profesionales.')}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl">
                  <h3 className="font-bold text-purple-700 mb-3">{tx('💾 Smaller File Sizes', '💾 Menor Tamano de Archivo')}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tx('Cropping removes unnecessary pixels, reducing file size. This is especially useful for web images where every kilobyte affects loading speed.', 'Recortar elimina pixeles innecesarios y reduce el peso del archivo. Es especialmente util para imagenes web donde cada kilobyte afecta la velocidad de carga.')}
                  </p>
                </div>
              </div>
            </section>

            {/* Aspect Ratio Guide */}
            <section className="bg-white rounded-xl shadow-md p-8 border border-gray-200 mb-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{tx('Aspect Ratio Guide', 'Guia de Relacion de Aspecto')}</h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-purple-50 border-b-2 border-purple-200">
                      <th className="text-left py-3 px-4 font-bold text-gray-900">{tx('Aspect Ratio', 'Relacion de Aspecto')}</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">{tx('Best For', 'Ideal Para')}</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">{tx('Example Dimensions', 'Dimensiones de Ejemplo')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3 px-4 font-semibold text-purple-600">{tx('1:1 (Square)', '1:1 (Cuadrado)')}</td>
                      <td className="py-3 px-4">{tx('Instagram posts, profile photos, product images', 'Publicaciones de Instagram, fotos de perfil, imagenes de producto')}</td>
                      <td className="py-3 px-4 font-mono text-sm">1080×1080, 500×500</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-purple-600">4:3</td>
                      <td className="py-3 px-4">{tx('Standard photos, presentations, older TVs', 'Fotos estandar, presentaciones, televisores antiguos')}</td>
                      <td className="py-3 px-4 font-mono text-sm">1200×900, 800×600</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-purple-600">16:9</td>
                      <td className="py-3 px-4">{tx('YouTube thumbnails, videos, modern displays', 'Miniaturas de YouTube, videos, pantallas modernas')}</td>
                      <td className="py-3 px-4 font-mono text-sm">1920×1080, 1280×720</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-purple-600">3:2</td>
                      <td className="py-3 px-4">{tx('Photography prints, DSLR native format', 'Impresiones fotograficas, formato nativo DSLR')}</td>
                      <td className="py-3 px-4 font-mono text-sm">1200×800, 900×600</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-purple-600">{tx('Free', 'Libre')}</td>
                      <td className="py-3 px-4">{tx('Custom crops, specific requirements', 'Recortes personalizados, requisitos especificos')}</td>
                      <td className="py-3 px-4 font-mono text-sm">{tx('Any dimensions', 'Cualquier dimension')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <strong>{tx('💡 Pro Tip:', '💡 Consejo Pro:')}</strong> {tx("When cropping for social media, always check the platform's current recommended dimensions-they change occasionally. A tightly cropped image may get cut off on some devices.", 'Al recortar para redes sociales, revisa siempre las dimensiones recomendadas actuales de cada plataforma; cambian ocasionalmente. Un recorte muy ajustado puede cortarse en algunos dispositivos.')}
                </p>
              </div>
            </section>

            {/* Features Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto" aria-labelledby="features-heading">
              <h2 id="features-heading" className="sr-only">{tx('Key Features', 'Funciones Clave')}</h2>
              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Maximize2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Multiple Ratios', 'Multiples Relaciones')}</h3>
                <p className="text-gray-600">
                  {tx('Choose from 1:1, 4:3, 16:9, 3:2 aspect ratios or use free-form cropping.', 'Elige relaciones 1:1, 4:3, 16:9, 3:2 o usa recorte libre.')}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Crop className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Precision Cropping', 'Recorte de Precision')}</h3>
                <p className="text-gray-600">
                  {tx('Crop your images with pixel-perfect accuracy for professional results.', 'Recorta tus imagenes con precision de pixel para resultados profesionales.')}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ZoomIn className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tx('Instant Preview', 'Vista Previa Instantanea')}</h3>
                <p className="text-gray-600">
                  {tx('See your cropped image immediately before downloading.', 'Mira tu imagen recortada al instante antes de descargarla.')}
                </p>
              </div>
            </section>

            {/* How to Use Section */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-8 border border-blue-200 max-w-4xl mx-auto mb-12" aria-labelledby="howto-heading">
              <h2 id="howto-heading" className="text-2xl font-bold text-gray-900 mb-8 text-center">{tx('How to Use Image Cropper', 'Como Usar el Recortador de Imagen')}</h2>
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
                      <h3 className="font-bold text-gray-900 mb-2">{tx('Select Aspect Ratio', 'Selecciona Relacion de Aspecto')}</h3>
                      <p className="text-gray-600 text-sm">{tx('Choose from preset ratios (1:1, 4:3, 16:9, 3:2) or select "Free" for custom cropping.', 'Elige relaciones predefinidas (1:1, 4:3, 16:9, 3:2) o selecciona "Libre" para recorte personalizado.')}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{tx('Apply Crop', 'Aplicar Recorte')}</h3>
                      <p className="text-gray-600 text-sm">{tx('Click "Crop Image" to apply the crop. The crop area will be centered on your image.', 'Haz clic en "Recortar Imagen" para aplicar el recorte. El area se centrara en tu imagen.')}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{tx('Download Result', 'Descargar Resultado')}</h3>
                      <p className="text-gray-600 text-sm">{tx('Preview the cropped image and download it instantly to your device.', 'Previsualiza la imagen recortada y descargala al instante en tu dispositivo.')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-sm text-blue-800">
                  <strong>{tx('Pro Tip:', 'Consejo Pro:')}</strong> {tx('Use 1:1 ratio for Instagram posts, 16:9 for YouTube thumbnails, and 4:3 for standard displays. Choose the right aspect ratio for your platform.', 'Usa relacion 1:1 para Instagram, 16:9 para miniaturas de YouTube y 4:3 para pantallas estandar. Elige la relacion correcta para tu plataforma.')}
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
                    <span>{tx('What aspect ratios are supported?', 'Que relaciones de aspecto son compatibles?')}</span>
                    <svg className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 0 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaqIndex === 0 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('We support multiple preset aspect ratios including 1:1 (square for Instagram), 4:3 (standard photos), 16:9 (widescreen for YouTube), and 3:2 (photography prints). You can also use free-form cropping for complete control over your crop dimensions.', 'Admitimos relaciones predefinidas como 1:1 (Instagram), 4:3 (fotos estandar), 16:9 (panoramico para YouTube) y 3:2 (impresiones fotograficas). Tambien puedes usar recorte libre para control total.')}</p>
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
                    <svg className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 1 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaqIndex === 1 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('Yes, absolutely. All image processing happens locally in your browser using JavaScript and HTML5 Canvas. Your images never leave your device or get uploaded to any server. This makes our tool 100% private and secure.', 'Si, totalmente. Todo el procesamiento se realiza localmente en tu navegador con JavaScript y HTML5 Canvas. Tus imagenes nunca salen de tu dispositivo ni se suben a servidores. Es 100% privado y seguro.')}</p>
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(2)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>{tx('What image formats can I crop?', 'Que formatos de imagen puedo recortar?')}</span>
                    <svg className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 2 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaqIndex === 2 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('You can crop any image format supported by modern browsers, including JPG/JPEG, PNG, WebP, GIF, BMP, and more. The cropped image is saved as PNG to preserve quality and support transparency if present in the original.', 'Puedes recortar cualquier formato compatible con navegadores modernos, incluyendo JPG/JPEG, PNG, WebP, GIF, BMP y mas. La imagen recortada se guarda como PNG para preservar calidad y transparencia si existe en el original.')}</p>
                    </div>
                  )}
                </div>

                {/* FAQ 4 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(3)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>{tx('What size should I crop for Instagram?', 'Que tamano debo usar para Instagram?')}</span>
                    <svg className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 3 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaqIndex === 3 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('For Instagram posts, use 1:1 (square) at 1080x1080 pixels. For Instagram Stories and Reels, use 9:16 vertical at 1080x1920. For landscape posts, 1.91:1 ratio works well. Our 1:1 preset is perfect for standard Instagram posts.', 'Para publicaciones de Instagram usa 1:1 (cuadrado) a 1080x1080. Para Stories y Reels usa 9:16 vertical a 1080x1920. Para publicaciones horizontales funciona 1.91:1. Nuestro preset 1:1 es ideal para publicaciones estandar.')}</p>
                    </div>
                  )}
                </div>

                {/* FAQ 5 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(4)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>{tx('Will cropping reduce my image quality?', 'Recortar reducira la calidad de imagen?')}</span>
                    <svg className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 4 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaqIndex === 4 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('Cropping itself doesn\'t reduce quality-it simply removes pixels from the edges. The cropped portion maintains its original resolution. However, if you crop too tightly on a small image and then enlarge it, you may see quality loss.', 'El recorte por si mismo no reduce calidad: solo elimina pixeles de los bordes. La parte recortada mantiene su resolucion original. Sin embargo, si recortas demasiado una imagen pequena y luego la amplias, puedes notar perdida de calidad.')}</p>
                    </div>
                  )}
                </div>

                {/* FAQ 6 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(5)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>{tx("What's the difference between cropping and resizing?", 'Cual es la diferencia entre recortar y redimensionar?')}</span>
                    <svg className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 5 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaqIndex === 5 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>{tx('Cropping removes parts of the image to change composition or aspect ratio-like cutting the edges off a photo. Resizing changes the pixel dimensions of the entire image (making it larger or smaller). Often you\'ll want to crop first, then resize to your target dimensions.', 'Recortar elimina partes de la imagen para cambiar composicion o relacion de aspecto, como cortar bordes de una foto. Redimensionar cambia las dimensiones de toda la imagen (hacerla mas grande o pequena). Normalmente conviene recortar primero y luego redimensionar al tamano objetivo.')}</p>
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
