"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AlertCircle, Check, ChevronDown, ChevronUp, FolderArchive, Plus, RotateCcw, Upload, X } from 'lucide-react';
import JSZip from 'jszip';
import { OUTPUT_SIZE_PRESETS, type OutputSizePreset } from '@/lib/outputSizePresets';
import { MARKETPLACE_PRESET_CATEGORY } from '@/lib/marketplacePresets';
import { normalizeFileToken, parseMarketplaceToken as parseMarketplaceOutputToken, renderUnifiedOutputFrame } from '@/lib/unifiedOutputProcessor';
import { useLanguage } from '@/components/LanguageProvider';
import type { Locale } from '@/lib/i18n';
import {
  BULK_CARD_ERROR_BY_LOCALE,
  BULK_CARD_TEXT_BY_LOCALE,
  CATEGORY_LABELS_BY_LOCALE,
  PRESET_NAME_LABELS_BY_LOCALE,
  PRESET_NOTE_LABELS_BY_LOCALE,
  QUALITY_DESCRIPTIONS_BY_LOCALE,
  QUALITY_LABELS_BY_LOCALE,
} from '@/lib/bulkImageVariantsCardTranslations';

interface ImageState {
  file: File | null;
  url: string;
  width: number;
  height: number;
  baseName: string;
  objectUrl?: string;
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

const QUALITY_PRESETS: QualityPreset[] = [
  { id: 'max', name: 'Maximum', quality: 100, description: 'Best quality' },
  { id: 'high', name: 'High', quality: 90, description: 'Great quality' },
  { id: 'good', name: 'Good', quality: 80, description: 'Recommended' },
  { id: 'medium', name: 'Medium', quality: 70, description: 'Balanced' },
  { id: 'web', name: 'Web', quality: 60, description: 'Fast loading' },
  { id: 'small', name: 'Small', quality: 50, description: 'Smaller files' },
];

const FORMAT_OPTIONS: FormatOption[] = [
  { id: 'jpg', name: 'JPG', mimeType: 'image/jpeg', extension: 'jpg' },
  { id: 'webp', name: 'WebP', mimeType: 'image/webp', extension: 'webp' },
  { id: 'png', name: 'PNG', mimeType: 'image/png', extension: 'png' },
  { id: 'avif', name: 'AVIF', mimeType: 'image/avif', extension: 'avif' },
  { id: 'gif', name: 'GIF', mimeType: 'image/gif', extension: 'gif' },
  { id: 'bmp', name: 'BMP', mimeType: 'image/bmp', extension: 'bmp' },
  { id: 'ico', name: 'ICO', mimeType: 'image/x-icon', extension: 'ico' },
  { id: 'heic', name: 'HEIC', mimeType: 'image/heic', extension: 'heic' },
];

export interface BulkImageVariantsCardProps {
  uploadTitle: string;
  accept: string;
  validateFile: (file: File) => string | null;
  defaultFormats: string[];
  defaultQualities?: string[];
  prepareFile?: (file: File) => Promise<{ url: string; objectUrlToRevoke?: string; baseName?: string }>;
  jpegFileExtension?: 'jpg' | 'jpeg';
  enableMarketplaceWorkflow?: boolean;
}

function getBaseNameFromFileName(fileName: string) {
  return fileName.replace(/\.[^/.]+$/i, '');
}

function sanitizeForFileName(value: string) {
  return normalizeFileToken(value);
}

function encodeBmp24Blob(rgba: Uint8ClampedArray, width: number, height: number): Blob {
  const bytesPerPixel = 3;
  const rowSize = Math.ceil((width * bytesPerPixel) / 4) * 4;
  const pixelDataSize = rowSize * height;
  const fileHeaderSize = 14;
  const dibHeaderSize = 40;
  const pixelDataOffset = fileHeaderSize + dibHeaderSize;
  const fileSize = pixelDataOffset + pixelDataSize;

  const buffer = new ArrayBuffer(fileSize);
  const view = new DataView(buffer);

  // BITMAPFILEHEADER
  view.setUint8(0, 0x42); // B
  view.setUint8(1, 0x4d); // M
  view.setUint32(2, fileSize, true);
  view.setUint32(6, 0, true);
  view.setUint32(10, pixelDataOffset, true);

  // BITMAPINFOHEADER
  view.setUint32(14, dibHeaderSize, true);
  view.setInt32(18, width, true);
  view.setInt32(22, height, true); // bottom-up
  view.setUint16(26, 1, true); // planes
  view.setUint16(28, 24, true); // bpp
  view.setUint32(30, 0, true); // compression BI_RGB
  view.setUint32(34, pixelDataSize, true);
  view.setInt32(38, 2835, true); // 72 DPI
  view.setInt32(42, 2835, true);
  view.setUint32(46, 0, true);
  view.setUint32(50, 0, true);

  let offset = pixelDataOffset;
  for (let y = height - 1; y >= 0; y--) {
    const rowStart = y * width * 4;
    for (let x = 0; x < width; x++) {
      const idx = rowStart + x * 4;
      const r = rgba[idx];
      const g = rgba[idx + 1];
      const b = rgba[idx + 2];
      view.setUint8(offset++, b);
      view.setUint8(offset++, g);
      view.setUint8(offset++, r);
    }
    const rowBytes = width * bytesPerPixel;
    const padding = rowSize - rowBytes;
    for (let p = 0; p < padding; p++) view.setUint8(offset++, 0);
  }

  return new Blob([buffer], { type: 'image/bmp' });
}

async function encodeIcoFromPngBlob(pngBlob: Blob, width: number, height: number): Promise<Blob> {
  const pngBytes = new Uint8Array(await pngBlob.arrayBuffer());
  const headerSize = 6;
  const entrySize = 16;
  const imageOffset = headerSize + entrySize;
  const totalSize = imageOffset + pngBytes.length;

  const buffer = new ArrayBuffer(totalSize);
  const view = new DataView(buffer);

  // ICONDIR
  view.setUint16(0, 0, true); // reserved
  view.setUint16(2, 1, true); // type = icon
  view.setUint16(4, 1, true); // count

  // ICONDIRENTRY
  view.setUint8(6, width >= 256 ? 0 : width);
  view.setUint8(7, height >= 256 ? 0 : height);
  view.setUint8(8, 0); // palette
  view.setUint8(9, 0); // reserved
  view.setUint16(10, 1, true); // planes
  view.setUint16(12, 32, true); // bitCount
  view.setUint32(14, pngBytes.length, true);
  view.setUint32(18, imageOffset, true);

  new Uint8Array(buffer, imageOffset).set(pngBytes);
  return new Blob([buffer], { type: 'image/x-icon' });
}

function canvasToBlobOrNull(canvas: HTMLCanvasElement, mimeType: string, quality: number): Promise<Blob | null> {
  return new Promise((resolve) => {
    canvas.toBlob(
      (blob) => resolve(blob),
      mimeType,
      quality
    );
  });
}

async function encodeGifBlobFromCanvas(canvas: HTMLCanvasElement): Promise<Blob> {
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get canvas context');

  const { data, width, height } = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const { GIFEncoder, quantize, applyPalette } = await import('gifenc');
  const palette = quantize(data, 256);
  const index = applyPalette(data, palette);

  const gif = GIFEncoder();
  gif.writeFrame(index, width, height, { palette });
  gif.finish();
  const bytes = gif.bytes();
  const safeBytes = new Uint8Array(bytes.length);
  safeBytes.set(bytes);
  return new Blob([safeBytes], { type: 'image/gif' });
}

export default function BulkImageVariantsCard({
  uploadTitle,
  accept,
  validateFile,
  defaultFormats,
  defaultQualities = ['good'],
  prepareFile,
  jpegFileExtension = 'jpg',
  enableMarketplaceWorkflow = false,
}: BulkImageVariantsCardProps) {
  const { locale } = useLanguage();
  const localeKey = locale as Locale;
  const isSpanish = locale === 'es';
  const localeTextMap = useMemo(() => BULK_CARD_TEXT_BY_LOCALE[localeKey] ?? {}, [localeKey]);
  const tx = useCallback(
    (english: string, spanish: string) => {
      if (isSpanish) return spanish;
      return localeTextMap[english] ?? english;
    },
    [isSpanish, localeTextMap]
  );

  const [imageState, setImageState] = useState<ImageState>({
    file: null,
    url: '',
    width: 0,
    height: 0,
    baseName: '',
  });

  const [selectedQualities, setSelectedQualities] = useState<Set<string>>(new Set(defaultQualities));
  const [selectedFormats, setSelectedFormats] = useState<Set<string>>(new Set(defaultFormats));
  const [selectedResizePresets, setSelectedResizePresets] = useState<Set<string>>(new Set());
  const [customQualities, setCustomQualities] = useState<number[]>([]);
  const [newCustomQuality, setNewCustomQuality] = useState<number>(85);
  
  interface CustomSize {
    id: string;
    name: string;
    width: number;
    height: number;
    category: string;
  }
  const [customSizes, setCustomSizes] = useState<CustomSize[]>([]);
  const [newCustomMarketplaceName, setNewCustomMarketplaceName] = useState('');
  const [newCustomWidth, setNewCustomWidth] = useState<number>(1080);
  const [newCustomHeight, setNewCustomHeight] = useState<number>(1080);
  const marketplaceNameSuggestions = ['Amazon', 'Etsy', 'eBay', 'Shopify', 'Daraz', 'Flipkart', 'AliExpress'];

  const [presetPickerCategory, setPresetPickerCategory] = useState<string>('');
  const [presetPickerId, setPresetPickerId] = useState<string>('');
  const [qualityPickerId, setQualityPickerId] = useState<string>('high');

  const presetCategoriesList = useMemo(() => Array.from(new Set(OUTPUT_SIZE_PRESETS.map((p) => p.category))), []);
  const pickerPresetsList = useMemo(() => OUTPUT_SIZE_PRESETS.filter((p) => p.category === presetPickerCategory), [presetPickerCategory]);

  useEffect(() => {
    if (presetCategoriesList.length > 0 && !presetPickerCategory) setPresetPickerCategory(presetCategoriesList[0]);
  }, [presetCategoriesList, presetPickerCategory]);

  useEffect(() => {
    if (pickerPresetsList.length > 0) setPresetPickerId(pickerPresetsList[0].id);
    else setPresetPickerId('');
  }, [pickerPresetsList]);

  const [sourceImages, setSourceImages] = useState<ImageState[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [projectName, setProjectName] = useState('');
  const [safeAreaPercent, setSafeAreaPercent] = useState(12);
  const [showSafeAreaGuide, setShowSafeAreaGuide] = useState(true);
  const [previewTargetId, setPreviewTargetId] = useState('');

  const [showQualityLevels, setShowQualityLevels] = useState(true);
  const [showOutputSizes, setShowOutputSizes] = useState(true);
  const [showCustomSizes, setShowCustomSizes] = useState(false);
  const [showMarketplaceControls, setShowMarketplaceControls] = useState(false);

  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string>('');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  const presetById = useMemo(() => {
    const map = new Map<string, OutputSizePreset>();
    OUTPUT_SIZE_PRESETS.forEach((preset) => map.set(preset.id, preset));
    return map;
  }, []);

  const formatPresetSelectedText = useCallback(
    (count: number) => {
      if (locale === 'es') return `${count} preajuste${count !== 1 ? 's' : ''} seleccionado${count !== 1 ? 's' : ''}`;
      if (locale === 'pt') return `${count} predefinicao${count !== 1 ? 'oes' : ''} selecionada${count !== 1 ? 's' : ''}`;
      if (locale === 'fr') return `${count} preconfiguration${count !== 1 ? 's' : ''} selectionnee${count !== 1 ? 's' : ''}`;
      if (locale === 'de') return `${count} Voreinstellung${count !== 1 ? 'en' : ''} ausgewahlt`;
      if (locale === 'it') return `${count} preimpostazione${count !== 1 ? 'i' : ''} selezionata${count !== 1 ? 'e' : ''}`;
      return `${count} preset${count !== 1 ? 's' : ''} selected`;
    },
    [locale]
  );

  const formatOutputFormatsSelectedText = useCallback(
    (count: number) => {
      if (locale === 'es') return `${count} formato${count !== 1 ? 's' : ''} seleccionado${count !== 1 ? 's' : ''}`;
      if (locale === 'pt') return `${count} formato${count !== 1 ? 's' : ''} selecionado${count !== 1 ? 's' : ''}`;
      if (locale === 'fr') return `${count} format${count !== 1 ? 's' : ''} selectionne${count !== 1 ? 's' : ''}`;
      if (locale === 'de') return `${count} Format${count !== 1 ? 'e' : ''} ausgewahlt`;
      if (locale === 'it') return `${count} formato${count !== 1 ? 'i' : ''} selezionato${count !== 1 ? 'i' : ''}`;
      return `${count} format${count !== 1 ? 's' : ''} selected`;
    },
    [locale]
  );

  const getCategoryLabel = useCallback((category: string) => {
    return CATEGORY_LABELS_BY_LOCALE[localeKey]?.[category] || category;
  }, [localeKey]);

  const getPresetLabel = useCallback((preset: OutputSizePreset) => {
    return PRESET_NAME_LABELS_BY_LOCALE[localeKey]?.[preset.id] || preset.name;
  }, [localeKey]);

  const getPresetNote = useCallback((preset: OutputSizePreset) => {
    if (!preset.note) return '';
    return PRESET_NOTE_LABELS_BY_LOCALE[localeKey]?.[preset.id] || preset.note;
  }, [localeKey]);

  const getQualityLabel = useCallback((preset: QualityPreset) => {
    return QUALITY_LABELS_BY_LOCALE[localeKey]?.[preset.id] || preset.name;
  }, [localeKey]);

  const getQualityDescription = useCallback((preset: QualityPreset) => {
    return QUALITY_DESCRIPTIONS_BY_LOCALE[localeKey]?.[preset.id] || preset.description;
  }, [localeKey]);

  const getTargetDisplayName = useCallback((target: { id: string; width: number; height: number; name: string }) => {
    if (target.id === 'original') return tx('Original', 'Original');
    const preset = presetById.get(target.id);
    if (preset) return getPresetLabel(preset);
    return target.name;
  }, [getPresetLabel, presetById, tx]);

  const translateErrorMessage = useCallback((message: string) => {
    if (isSpanish) {
      if (message === 'Failed to load image') return 'No se pudo cargar la imagen';
      if (message === 'Failed to prepare image') return 'No se pudo preparar la imagen';
      if (message === 'Could not get canvas context') return 'No se pudo obtener el contexto del canvas';
      if (message === 'Failed to create PNG for ICO') return 'No se pudo crear PNG para ICO';
      if (message === 'HEIC export is not supported in this browser') return 'La exportacion HEIC no es compatible en este navegador';
      if (message === 'AVIF export is not supported in this browser') return 'La exportacion AVIF no es compatible en este navegador';
      if (message === 'Failed to create blob') return 'No se pudo generar el archivo';
      if (message === 'Conversion failed. Please try again.') return 'La conversion fallo. Intenta nuevamente.';
    }
    return BULK_CARD_ERROR_BY_LOCALE[localeKey]?.[message] || message;
  }, [isSpanish, localeKey]);

  const presetsByCategory = useMemo(() => {
    const map = new Map<string, OutputSizePreset[]>();
    for (const preset of OUTPUT_SIZE_PRESETS) {
      const list = map.get(preset.category) ?? [];
      list.push(preset);
      map.set(preset.category, list);
    }
    return Array.from(map.entries());
  }, []);

  const selectedTargets = useMemo(() => {
    const sizesToProcess: { id: string; name: string; width: number; height: number; category: string }[] = [];
    if (selectedResizePresets.size > 0 || customSizes.length > 0) {
      OUTPUT_SIZE_PRESETS.forEach((preset) => {
        if (selectedResizePresets.has(preset.id)) {
          sizesToProcess.push({
            id: preset.id,
            name: sanitizeForFileName(preset.name),
            width: preset.width,
            height: preset.height,
            category: preset.category,
          });
        }
      });
      customSizes.forEach((size) => {
        sizesToProcess.push({
          id: size.id,
          name: sanitizeForFileName(size.name),
          width: size.width,
          height: size.height,
          category: size.category,
        });
      });
    } else if (imageState.width > 0 && imageState.height > 0) {
      sizesToProcess.push({ id: 'original', name: 'original', width: imageState.width, height: imageState.height, category: 'Original' });
    }
    return sizesToProcess;
  }, [selectedResizePresets, customSizes, imageState.width, imageState.height]);

  const parseMarketplaceToken = useCallback((sizeName: string, sizeId: string, category: string) => {
    return parseMarketplaceOutputToken({
      category,
      displayName: sizeName,
      fallbackId: sizeId,
      marketplaceCategory: MARKETPLACE_PRESET_CATEGORY,
    });
  }, []);

  const handleFileSelect = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      if (files.length === 0) return;

      const candidateFiles = enableMarketplaceWorkflow ? files : [files[0]];

      for (const file of candidateFiles) {
        const fileError = validateFile(file);
        if (fileError) {
          setError(fileError);
          return;
        }
      }

      setError('');
      setProcessing(false);
      setProgress(0);

      try {
        const loaded = await Promise.all(
          candidateFiles.map(
            async (file) =>
              new Promise<ImageState>(async (resolve, reject) => {
                let url: string;
                let objectUrlToRevoke: string | undefined;
                let baseName = getBaseNameFromFileName(file.name);

                try {
                  if (prepareFile) {
                    const prepared = await prepareFile(file);
                    url = prepared.url;
                    objectUrlToRevoke = prepared.objectUrlToRevoke;
                    if (prepared.baseName) baseName = prepared.baseName;
                  } else {
                    objectUrlToRevoke = URL.createObjectURL(file);
                    url = objectUrlToRevoke;
                  }

                  const img = new window.Image();
                  img.onload = () => {
                    resolve({
                      file,
                      url,
                      width: img.width,
                      height: img.height,
                      baseName,
                      objectUrl: objectUrlToRevoke,
                    });
                  };
                  img.onerror = () => {
                    if (objectUrlToRevoke) URL.revokeObjectURL(objectUrlToRevoke);
                    reject(new Error('Failed to load image'));
                  };
                  img.src = url;
                } catch {
                  reject(new Error('Failed to prepare image'));
                }
              })
          )
        );

        if (enableMarketplaceWorkflow) {
          setSourceImages((prev) => {
            const merged = [...prev, ...loaded];
            if (prev.length === 0 && merged.length > 0) {
              setImageState(merged[0]);
              setActiveImageIndex(0);
            }
            return merged;
          });
        } else {
          if (imageState.objectUrl) URL.revokeObjectURL(imageState.objectUrl);
          const first = loaded[0];
          setSourceImages([first]);
          setImageState(first);
          setActiveImageIndex(0);
        }
      } catch (err) {
        console.error(err);
        setError(err instanceof Error ? translateErrorMessage(err.message) : tx('Failed to prepare image', 'No se pudo preparar la imagen'));
      }
    },
    [prepareFile, validateFile, imageState.objectUrl, enableMarketplaceWorkflow, translateErrorMessage, tx]
  );

  const removeSourceImage = useCallback((index: number) => {
    setSourceImages((prev) => {
      const removed = prev[index];
      if (removed?.objectUrl) URL.revokeObjectURL(removed.objectUrl);
      const next = prev.filter((_, i) => i !== index);
      if (next.length === 0) {
        setImageState({ file: null, url: '', width: 0, height: 0, baseName: '' });
        setActiveImageIndex(0);
        return next;
      }

      const nextIndex = Math.max(0, Math.min(activeImageIndex, next.length - 1));
      setActiveImageIndex(nextIndex);
      setImageState(next[nextIndex]);
      return next;
    });
  }, [activeImageIndex]);

  const toggleQuality = (qualityId: string) => {
    setSelectedQualities(prev => {
      const next = new Set(prev);
      if (next.has(qualityId)) next.delete(qualityId);
      else next.add(qualityId);
      return next;
    });
  };

  const toggleFormat = (formatId: string) => {
    setSelectedFormats(prev => {
      const next = new Set(prev);
      if (next.has(formatId)) {
        if (next.size > 1) next.delete(formatId);
      } else {
        next.add(formatId);
      }
      return next;
    });
  };

  const selectAllFormats = () => {
    setSelectedFormats(prev => {
      if (prev.size === FORMAT_OPTIONS.length) return new Set(defaultFormats);
      return new Set(FORMAT_OPTIONS.map(f => f.id));
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
      const next = new Set(prev);
      if (next.has(presetId)) next.delete(presetId);
      else next.add(presetId);
      return next;
    });
  };

  const selectAllResizePresetsInCategory = (category: string) => {
    const ids = OUTPUT_SIZE_PRESETS.filter(p => p.category === category).map(p => p.id);
    setSelectedResizePresets(prev => {
      const next = new Set(prev);
      ids.forEach(id => next.add(id));
      return next;
    });
  };

  const clearResizePresetsInCategory = (category: string) => {
    const ids = new Set(OUTPUT_SIZE_PRESETS.filter(p => p.category === category).map(p => p.id));
    setSelectedResizePresets(prev => {
      const next = new Set(prev);
      ids.forEach(id => next.delete(id));
      return next;
    });
  };

  const addCustomSize = () => {
    if (newCustomWidth > 0 && newCustomHeight > 0) {
      const name = newCustomMarketplaceName.trim() || 'Custom';
      const newSize: CustomSize = {
        id: `custom-${Date.now()}`,
        name,
        width: newCustomWidth,
        height: newCustomHeight,
        category: 'Custom',
      };
      setCustomSizes((prev) => [...prev, newSize]);
      setNewCustomMarketplaceName('');
    }
  };

  const removeCustomSize = (id: string) => {
    setCustomSizes((prev) => prev.filter((size) => size.id !== id));
  };

  const addOutputPresetFromPicker = () => {
    if (presetPickerId) {
      setSelectedResizePresets(prev => {
        const next = new Set(prev);
        next.add(presetPickerId);
        return next;
      });
    }
  };

  const addQualityPresetFromPicker = () => {
    if (qualityPickerId) {
      setSelectedQualities(prev => {
        const next = new Set(prev);
        next.add(qualityPickerId);
        return next;
      });
    }
  };

  const getTotalOutputCount = () => {
    const qualityCount = selectedQualities.size + customQualities.length;
    const sizeCount = (selectedResizePresets.size + customSizes.length) > 0 ? (selectedResizePresets.size + customSizes.length) : 1;
    const imageCount = enableMarketplaceWorkflow ? Math.max(sourceImages.length, imageState.file ? 1 : 0) : (imageState.file ? 1 : 0);
    return qualityCount * selectedFormats.size * sizeCount * imageCount;
  };

  const convertImage = async (
    img: HTMLImageElement,
    canvas: HTMLCanvasElement,
    quality: number,
    format: FormatOption,
    targetWidth: number,
    targetHeight: number,
    options?: {
      showGuides?: boolean;
      category?: string;
    }
  ): Promise<Blob> => {
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');

    const forceBackgroundFill =
      format.mimeType === 'image/jpeg' ||
      format.mimeType === 'image/bmp' ||
      format.mimeType === 'image/gif' ||
      format.mimeType === 'image/heic';

    renderUnifiedOutputFrame({
      canvas,
      ctx,
      image: img,
      targetWidth,
      targetHeight,
      category: options?.category,
      marketplaceCategory: MARKETPLACE_PRESET_CATEGORY,
      safeAreaPercent,
      applyUnifiedLayout: enableMarketplaceWorkflow,
      showGuides: options?.showGuides,
      forceBackgroundFill,
      paddingColor: '#FFFFFF',
    });

    const qualityFloat = quality / 100;

    if (format.mimeType === 'image/gif') {
      return encodeGifBlobFromCanvas(canvas);
    }

    if (format.mimeType === 'image/bmp') {
      const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
      return encodeBmp24Blob(data, canvas.width, canvas.height);
    }

    if (format.mimeType === 'image/x-icon') {
      const pngBlob = await canvasToBlobOrNull(canvas, 'image/png', 1);
      if (!pngBlob) throw new Error('Failed to create PNG for ICO');
      return encodeIcoFromPngBlob(pngBlob, canvas.width, canvas.height);
    }

    if (format.mimeType === 'image/heic') {
      // Best-effort export: only works in browsers that implement HEIC/HEIF encoding in canvas.
      const blobHeic = await canvasToBlobOrNull(canvas, 'image/heic', qualityFloat);
      if (blobHeic) return blobHeic;
      const blobHeif = await canvasToBlobOrNull(canvas, 'image/heif', qualityFloat);
      if (blobHeif) return blobHeif;
      throw new Error('HEIC export is not supported in this browser');
    }

    const blob = await canvasToBlobOrNull(canvas, format.mimeType, qualityFloat);
    if (blob) return blob;
    if (format.mimeType === 'image/avif') throw new Error('AVIF export is not supported in this browser');
    throw new Error('Failed to create blob');
  };

  const processAllVariants = async () => {
    if (!imageState.url || !canvasRef.current) return;
    if (getTotalOutputCount() === 0) {
      setError(tx('Please select at least one quality level and format', 'Selecciona al menos un nivel de calidad y formato'));
      return;
    }

    setProcessing(true);
    setProgress(0);
    setError('');

    try {
      const canvas = canvasRef.current;
      const zip = new JSZip();
      const normalizedProjectName = sanitizeForFileName(projectName);

      const sizesToProcess = selectedTargets;

      const formats = FORMAT_OPTIONS.filter(f => selectedFormats.has(f.id));

      const variants: {
        quality: number;
        qualityName: string;
        format: FormatOption;
        size: { id: string; name: string; width: number; height: number; category: string };
      }[] = [];

      QUALITY_PRESETS.forEach(preset => {
        if (selectedQualities.has(preset.id)) {
          formats.forEach(format => {
            sizesToProcess.forEach(size => {
              variants.push({ quality: preset.quality, qualityName: preset.name.toLowerCase(), format, size });
            });
          });
        }
      });

      customQualities.forEach(quality => {
        formats.forEach(format => {
          sizesToProcess.forEach(size => {
            variants.push({ quality, qualityName: `q${quality}`, format, size });
          });
        });
      });

      const imagesToProcess = enableMarketplaceWorkflow && sourceImages.length > 0 ? sourceImages : [imageState];
      const totalJobs = imagesToProcess.length * variants.length;
      let doneJobs = 0;
      const usedNames = new Map<string, number>();

      for (let imageIndex = 0; imageIndex < imagesToProcess.length; imageIndex++) {
        const source = imagesToProcess[imageIndex];
        const img = new window.Image();
        img.src = source.url;
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });

        for (let i = 0; i < variants.length; i++) {
          const { quality, qualityName, format, size } = variants[i];
          const blob = await convertImage(img, canvas, quality, format, size.width, size.height, {
            category: size.category,
          });

          const extension = format.mimeType === 'image/jpeg' ? jpegFileExtension : format.extension;
          const sequenceToken = `image${imageIndex + 1}`;
          const targetToken = parseMarketplaceToken(size.name, size.id, size.category);
          const prefix = normalizedProjectName ? `${normalizedProjectName}-` : '';
          const rawBaseName = enableMarketplaceWorkflow
            ? `${prefix}${sequenceToken}-${targetToken}-${qualityName}`
            : `${sanitizeForFileName(source.baseName || 'image')}-${size.name}-${qualityName}-${quality}`;

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
      const fallbackName = sanitizeForFileName(imageState.baseName || 'image');
      const zipBase = enableMarketplaceWorkflow ? (normalizedProjectName || 'marketplace-exports') : `${fallbackName}-converted`;
      link.download = `${zipBase}.zip`;
      link.click();
      URL.revokeObjectURL(downloadUrl);
    } catch (err) {
      console.error('Error processing images:', err);
      setError(
        err instanceof Error
          ? translateErrorMessage(err.message)
          : tx('Conversion failed. Please try again.', 'La conversion fallo. Intenta nuevamente.')
      );
    } finally {
      setProcessing(false);
      setProgress(0);
    }
  };

  const resetConverter = useCallback(() => {
    sourceImages.forEach((source) => {
      if (source.objectUrl) URL.revokeObjectURL(source.objectUrl);
    });
    if (sourceImages.length === 0 && imageState.objectUrl) {
      URL.revokeObjectURL(imageState.objectUrl);
    }
    setImageState({ file: null, url: '', width: 0, height: 0, baseName: '' });
    setSourceImages([]);
    setActiveImageIndex(0);
    setSelectedQualities(new Set(defaultQualities));
    setSelectedFormats(new Set(defaultFormats));
    setSelectedResizePresets(new Set());
    setCustomQualities([]);
    setProjectName('');
    setSafeAreaPercent(12);
    setShowSafeAreaGuide(true);
    setPreviewTargetId('');
    setError('');
    setProcessing(false);
    setProgress(0);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }, [defaultFormats, defaultQualities, imageState.objectUrl, sourceImages]);

  useEffect(() => {
    const renderPreview = async () => {
      if (!enableMarketplaceWorkflow || !previewCanvasRef.current || !imageState.url) return;

      const target = selectedTargets.find((size) => size.id === previewTargetId) || selectedTargets[0];
      if (!target) return;

      const previewFormat = FORMAT_OPTIONS.find((item) => selectedFormats.has(item.id)) || FORMAT_OPTIONS[0];
      const presetQuality = QUALITY_PRESETS.find((preset) => selectedQualities.has(preset.id));
      const qualityValue = customQualities[0] || presetQuality?.quality || 85;

      try {
        const img = new window.Image();
        img.src = imageState.url;
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });

        await convertImage(img, previewCanvasRef.current, qualityValue, previewFormat, target.width, target.height, {
          showGuides: showSafeAreaGuide,
          category: target.category,
        });
      } catch {
        // Ignore preview failures to avoid blocking export flow.
      }
    };

    renderPreview();
  }, [
    enableMarketplaceWorkflow,
    previewTargetId,
    imageState.url,
    selectedTargets,
    selectedFormats,
    selectedQualities,
    customQualities,
    showSafeAreaGuide,
    safeAreaPercent,
  ]);

  useEffect(() => {
    if (!enableMarketplaceWorkflow) return;
    if (selectedTargets.length === 0) {
      if (previewTargetId !== '') setPreviewTargetId('');
      return;
    }
    if (!previewTargetId || !selectedTargets.some((target) => target.id === previewTargetId)) {
      setPreviewTargetId(selectedTargets[0].id);
    }
  }, [enableMarketplaceWorkflow, previewTargetId, selectedTargets]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12">
      {!imageState.file ? (
        <div
          className="relative border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-purple-400 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 bg-gradient-to-br from-gray-50 to-gray-100 transition-all cursor-pointer group"
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="absolute top-4 left-4 w-20 h-20 bg-purple-100 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" style={{ pointerEvents: 'none' }}></div>
          <div className="absolute bottom-4 right-4 w-24 h-24 bg-pink-100 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" style={{ pointerEvents: 'none' }}></div>

          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Upload className="w-8 h-8 text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-800 mb-3">{uploadTitle}</p>
            <p className="text-base text-gray-600 mb-6">{tx('Drag and drop or click to browse', 'Arrastra y suelta o haz clic para buscar')}</p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                <FolderArchive className="w-4 h-4 text-purple-500" />
                <span className="text-xs sm:text-sm font-medium text-gray-600">{tx('ZIP Export', 'Exportar ZIP')}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                <Check className="w-4 h-4 text-pink-500" />
                <span className="text-xs sm:text-sm font-medium text-gray-600">{tx('Presets', 'Preajustes')}</span>
              </div>
            </div>
          </div>

        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">{tx('Original', 'Original')}</h3>
              <div className="relative rounded-xl overflow-hidden border-2 border-gray-200 bg-gray-50">
                <img src={imageState.url} alt={tx('Original', 'Original')} className="w-full h-auto" />
              </div>
              <p className="text-xs text-gray-500 mt-2">{imageState.file.name}</p>
              <p className="text-xs text-gray-400 mt-1">{imageState.width}×{imageState.height}</p>
            </div>
            <div className="space-y-4">
              {enableMarketplaceWorkflow && sourceImages.length > 0 && selectedTargets.length > 0 && (
                <div className="rounded-xl border border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 p-4">
                  <h3 className="text-sm font-semibold text-purple-800 mb-3">{tx('Live Preview', 'Vista previa en vivo')}</h3>
                  <canvas ref={previewCanvasRef} className="w-full rounded-lg border border-purple-100 bg-white" />
                  <p className="text-xs text-purple-700 mt-2">{tx('Preview shows auto-fit output with safe area guide.', 'La vista previa muestra ajuste automatico con guia de area segura.')}</p>
                </div>
              )}
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-gray-700">{tx('Output Summary', 'Resumen de salida')}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  {enableMarketplaceWorkflow && (
                    <div className="flex items-center gap-1.5">
                      <span>{tx('Images', 'Imagenes')}:</span>
                      <span className="font-bold text-gray-900">{sourceImages.length}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5">
                    <span>{tx('Total files', 'Archivos totales')}:</span>
                    <span className="font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full shadow-sm">{getTotalOutputCount()}</span>
                  </div>
                </div>
                {processing && (
                  <div className="w-full text-right">
                    <p className="text-sm font-bold text-purple-700">{tx('Processing', 'Procesando')}: {progress}%</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {enableMarketplaceWorkflow && sourceImages.length > 0 && (
            <div className="space-y-4 rounded-xl border border-gray-200 p-4 bg-gray-50">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-gray-700">{tx('Uploaded Images', 'Imagenes subidas')} ({sourceImages.length})</h3>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-purple-300 text-purple-700 bg-white hover:bg-purple-50 text-sm font-medium"
                >
                  <Upload className="w-4 h-4" />
                  {tx('Add More Images', 'Agregar mas imagenes')}
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {sourceImages.map((source, index) => (
                  <div key={`${source.baseName}-${index}`} className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveImageIndex(index);
                        setImageState(source);
                      }}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        activeImageIndex === index ? 'border-purple-500' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img src={source.url} alt={`${tx('Source', 'Fuente')} ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                    <button
                      type="button"
                      onClick={() => removeSourceImage(index)}
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border border-gray-300 text-gray-600 hover:text-red-600 hover:border-red-300 flex items-center justify-center"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4">
            <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl">
              <button
                type="button"
                onClick={() => setShowQualityLevels(!showQualityLevels)}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-sm font-semibold text-gray-800">{tx('Select Quality Levels', 'Selecciona niveles de calidad')}</h3>
                {showQualityLevels ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
              </button>
              
              {showQualityLevels && (
                <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    {tx('Quality Preset', 'Preajuste de Calidad')}
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={qualityPickerId}
                      onChange={(e) => setQualityPickerId(e.target.value)}
                      className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-sm"
                    >
                      {QUALITY_PRESETS.map((q) => (
                        <option key={q.id} value={q.id}>
                          {getQualityLabel(q)} ({q.quality}%)
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={addQualityPresetFromPicker}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      {tx('Add', 'Agregar')}
                    </button>
                  </div>
                </div>
              </div>

              {(selectedQualities.size > 0 || customQualities.length > 0) && (
                <div className="pt-2 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs font-semibold text-gray-700">
                      {tx('Added Qualities', 'Calidades Agregadas')} ({selectedQualities.size + customQualities.length})
                    </p>
                    <button onClick={clearAllQualities} className="text-xs text-gray-500 hover:text-red-500 font-medium">
                      {tx('Clear All', 'Limpiar Todo')}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(selectedQualities).map((qid) => {
                      const q = QUALITY_PRESETS.find(p => p.id === qid);
                      if (!q) return null;
                      return (
                        <div key={q.id} className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-lg">
                          <Check className="w-3.5 h-3.5 text-purple-600" />
                          <span className="text-xs font-medium text-purple-700">
                            {getQualityLabel(q)} ({q.quality}%)
                          </span>
                          <button onClick={() => toggleQuality(q.id)} className="text-purple-500 hover:text-red-500 transition-colors">
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      );
                    })}
                    {customQualities.map((cq) => (
                      <div key={`custom-${cq}`} className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-lg">
                        <Check className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-xs font-medium text-green-700">
                          {tx('Custom', 'Personalizado')} ({cq}%)
                        </span>
                        <button onClick={() => removeCustomQuality(cq)} className="text-green-500 hover:text-red-500 transition-colors">
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-3 mt-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={newCustomQuality}
                    onChange={(e) => setNewCustomQuality(Math.min(100, Math.max(1, parseInt(e.target.value) || 1)))}
                    className="w-24 px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-sm text-center"
                    min="1"
                    max="100"
                    placeholder="85%"
                  />
                  <button
                    onClick={addCustomQuality}
                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1 text-sm font-medium"
                  >
                    <Plus className="w-4 h-4 text-purple-600" />
                    {tx('Add Custom %', 'Agregar % Personalizado')}
                  </button>
                </div>
              </div>
              </div>
              )}
            </div>

            {/* Output Sizes */}
            {enableMarketplaceWorkflow && (
              <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                <button
                  type="button"
                  onClick={() => setShowOutputSizes(!showOutputSizes)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h3 className="text-sm font-semibold text-gray-800">{tx('Select Output Sizes', 'Seleccionar Tamanos de Salida')}</h3>
                  {showOutputSizes ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </button>

                {showOutputSizes && (
                  <div className="space-y-4 mt-4 pt-4 border-t border-gray-200">
                    <div className="border border-gray-200 rounded-xl p-3 md:p-4 space-y-3 bg-white">
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
                        {presetCategoriesList.map((category) => (
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
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-sm"
                      >
                        {pickerPresetsList.map((preset) => (
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
                    className="w-full sm:w-auto px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    {tx('Add Selected Preset', 'Agregar Preset Seleccionado')}
                  </button>

                  {selectedResizePresets.size > 0 && (
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-xs font-semibold text-gray-700 mb-2">
                        {tx('Added Presets', 'Presets Agregados')} ({selectedResizePresets.size})
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {Array.from(selectedResizePresets).map((presetId) => {
                          const preset = OUTPUT_SIZE_PRESETS.find((item) => item.id === presetId);
                          if (!preset) return null;

                          return (
                            <div key={preset.id} className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-lg">
                              <Check className="w-3.5 h-3.5 text-purple-600" />
                              <span className="text-xs font-medium text-purple-700">
                                {getPresetLabel(preset)} ({preset.width}x{preset.height})
                              </span>
                              <button onClick={() => toggleResizePreset(preset.id)} className="text-purple-500 hover:text-red-500 transition-colors">
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
                <div className="border border-gray-200 rounded-xl p-3 md:p-4 bg-white">
                  <button
                    type="button"
                    onClick={() => setShowCustomSizes(!showCustomSizes)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h3 className="font-semibold text-gray-800 text-sm md:text-base">{tx('Custom Marketplace Sizes', 'Tamanos Personalizados de Marketplace')}</h3>
                    {showCustomSizes ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                  </button>
                  {showCustomSizes && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                        <input
                      type="text"
                      value={newCustomMarketplaceName}
                      onChange={(e) => setNewCustomMarketplaceName(e.target.value)}
                      placeholder={tx('Marketplace Name (e.g. Etsy)', 'Nombre de Marketplace (ej. Etsy)')}
                      className="sm:col-span-2 px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-sm"
                    />
                    <input
                      type="number"
                      value={newCustomWidth}
                      onChange={(e) => setNewCustomWidth(parseInt(e.target.value, 10) || 0)}
                      placeholder={tx('Width', 'Ancho')}
                      className="px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-sm"
                      min="1"
                    />
                    <input
                      type="number"
                      value={newCustomHeight}
                      onChange={(e) => setNewCustomHeight(parseInt(e.target.value, 10) || 0)}
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
                      <span className="text-sm">{tx('Add Custom Size', 'Agregar Tamano Personalizado')}</span>
                    </button>
                  </div>
                  {marketplaceNameSuggestions.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-gray-700 mb-2">
                        {tx('Suggested / Recent Names', 'Nombres Sugeridos / Recientes')}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {marketplaceNameSuggestions.slice(0, 6).map((name) => (
                          <button
                            key={name}
                            onClick={() => setNewCustomMarketplaceName(name)}
                            className="px-2 py-1 text-[11px] font-medium bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-md transition-colors"
                          >
                            {name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {customSizes.length > 0 && (
                    <div className="pt-3 border-t border-gray-200">
                      <p className="text-xs font-semibold text-gray-700 mb-2">{tx('Added Custom Sizes', 'Tamanos Personalizados Agregados')} ({customSizes.length})</p>
                      <div className="flex flex-wrap gap-2">
                        {customSizes.map((size) => (
                          <div key={size.id} className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-lg">
                            <Check className="w-3.5 h-3.5 text-green-600" />
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-green-800">{size.name}</span>
                              <span className="text-[10px] text-green-600">{size.width}x{size.height}px</span>
                            </div>
                            <button onClick={() => removeCustomSize(size.id)} className="ml-1 text-green-600 hover:text-red-500 transition-colors">
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                    </div>
                  )}
                </div>
                  </div>
                )}
              </div>
            )}

            {enableMarketplaceWorkflow && (
              <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                <button
                  type="button"
                  onClick={() => setShowMarketplaceControls(!showMarketplaceControls)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h3 className="text-sm font-semibold text-gray-800">{tx('Marketplace Export Controls', 'Controles de exportacion para Marketplace')}</h3>
                  {showMarketplaceControls ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </button>

                {showMarketplaceControls && (
                  <div className="space-y-4 mt-4 pt-4 border-t border-gray-200">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{tx('Project Name (Optional)', 'Nombre del proyecto (opcional)')}</label>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder={tx('e.g. brand-catalog', 'ej. catalogo-marca')}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-1">{tx('Used in filenames as lowercase-hyphen format.', 'Se usa en nombres de archivo en formato minusculas-con-guiones.')}</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{tx('Safe Area Margin', 'Margen de area segura')} ({safeAreaPercent}%)</label>
                  <input
                    type="range"
                    value={safeAreaPercent}
                    onChange={(e) => setSafeAreaPercent(parseInt(e.target.value, 10))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                    min="10"
                    max="30"
                    step="1"
                  />
                  <p className="text-xs text-gray-500 mt-1">{tx('10-15% recommended to avoid logo/text clipping.', 'Se recomienda 10-15% para evitar recorte de logo/texto.')}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{tx('Preview Target', 'Objetivo de vista previa')}</label>
                    <select
                      value={previewTargetId}
                      onChange={(e) => setPreviewTargetId(e.target.value)}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-sm"
                    >
                      {selectedTargets.map((target) => (
                        <option key={target.id} value={target.id}>
                          {getTargetDisplayName(target)} ({target.width}x{target.height})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-end">
                    <button
                      type="button"
                      onClick={() => setShowSafeAreaGuide((prev) => !prev)}
                      className={`w-full py-2 px-3 rounded-lg border-2 text-sm font-medium transition-colors ${
                        showSafeAreaGuide
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {showSafeAreaGuide ? tx('Hide Safe Area Guide', 'Ocultar guia de area segura') : tx('Show Safe Area Guide', 'Mostrar guia de area segura')}
                    </button>
                  </div>
                </div>
                  </div>
                )}
              </div>
            )}

            {/* Output Formats */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-purple-700 uppercase">{tx('Select Output Formats', 'Selecciona formatos de salida')}</span>
                <button onClick={selectAllFormats} className="text-xs text-purple-600 hover:text-purple-800 font-medium">
                  {selectedFormats.size === FORMAT_OPTIONS.length ? tx('Deselect All', 'Deseleccionar todo') : tx('Select All', 'Seleccionar todo')}
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {FORMAT_OPTIONS.map(format => (
                  <button
                    key={format.id}
                    onClick={() => toggleFormat(format.id)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                      selectedFormats.has(format.id)
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    {format.name}
                  </button>
                ))}
              </div>

              <p className="text-xs text-purple-700 mt-2">
                {formatOutputFormatsSelectedText(selectedFormats.size)}
              </p>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <button
                onClick={processAllVariants}
                disabled={processing}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
              >
                {processing ? (
                  <> <FolderArchive className="w-5 h-5" /> {tx('Creating ZIP...', 'Creando ZIP...')} {progress}% </>
                ) : (
                  <> <FolderArchive className="w-5 h-5" /> {enableMarketplaceWorkflow ? tx('Export Marketplace ZIP', 'Exportar ZIP de Marketplace') : tx('Convert and Download ZIP', 'Convertir y descargar ZIP')} </>
                )}
              </button>
              <button
                onClick={resetConverter}
                disabled={processing}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all disabled:opacity-50"
              >
                <span className="inline-flex items-center gap-2"><RotateCcw className="w-4 h-4" /> {tx('Reset', 'Restablecer')}</span>
              </button>
            </div>
          </div>

          <canvas ref={canvasRef} className="hidden" />
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={enableMarketplaceWorkflow}
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
}
