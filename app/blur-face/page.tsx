"use client";

import { normalizeFileToken } from "@/lib/unifiedOutputProcessor";
import { useLanguage } from "@/components/LanguageProvider";
import { getLocaleBasePath } from "@/lib/i18n";
import { IMAGE_RESIZER_TEXT_BY_LOCALE } from "@/lib/imageResizerTranslations";
import { BLUR_FACE_TEXT_BY_LOCALE } from "@/lib/blurFaceTranslations";
import { useState, useRef, useCallback, useEffect } from "react";
import {
  AlertCircle,
  Upload,
  Download,
  RotateCcw,
  RotateCw,
  Image as ImageIcon,
  Maximize2,
  Minimize2,
  Lock,
  Unlock,
  Info,
  ChevronDown,
  ChevronUp,
  Shield,
  Check,
  CheckCircle,
  CheckCircle2,
  Plus,
  X,
  FolderArchive,
  Crop,
  Move,
  ZoomIn,
  ZoomOut,
  RefreshCw,
  Gauge,
  Percent,
  Ruler,
  Train,
  Calendar,
  Droplet,
  Type,
  Contrast,
  Palette,
  Eye,
  Scan,
  Target,
  Mail,
  FileText,
  Globe,
  MessageCircle,
  FlipHorizontal,
  FlipVertical,
  Zap,
  Youtube,
  Monitor,
  Smartphone,
  Tv,
  Camera,
  User,
  PenTool,
} from "lucide-react";
import JSZip from "jszip";

interface ImageState {
  originalFile: File | null;
  originalUrl: string;
  processedUrl: string;
  originalWidth: number;
  originalHeight: number;
}

interface BlurArea {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface DraftBlurArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

type OutputFormat = "image/jpeg" | "image/png" | "image/webp";

interface OutputVariant {
  format: OutputFormat;
  label: "JPG" | "PNG" | "WebP";
  extension: "jpg" | "png" | "webp";
  blob: Blob;
  url: string;
}

function normalizeDownloadName(fileName: string) {
  const dotIndex = fileName.lastIndexOf(".");
  if (dotIndex <= 0) return normalizeFileToken(fileName);
  const baseName = fileName.slice(0, dotIndex);
  const extension = fileName.slice(dotIndex + 1).toLowerCase();
  return `${normalizeFileToken(baseName)}.${extension}`;
}

export default function Page() {
  const { locale } = useLanguage();
  const tx = useCallback(
    (en: string, es: string) => {
      if (locale === "es") {
        return es;
      }

      return (
        BLUR_FACE_TEXT_BY_LOCALE[locale]?.[en] ||
        IMAGE_RESIZER_TEXT_BY_LOCALE[locale]?.[en] ||
        en
      );
    },
    [locale],
  );
  const localeBasePath = getLocaleBasePath(locale);
  const pagePath = localeBasePath
    ? `${localeBasePath}/blur-face`
    : "/blur-face";
  const pageUrl = `https://pixselli.com${pagePath}`;
  const homePath = localeBasePath || "/";

  const [imageState, setImageState] = useState<ImageState>({
    originalFile: null,
    originalUrl: "",
    processedUrl: "",
    originalWidth: 0,
    originalHeight: 0,
  });

  const [blurIntensity, setBlurIntensity] = useState(20);
  const [blurAreas, setBlurAreas] = useState<BlurArea[]>([]);
  const [selectedOutputFormats, setSelectedOutputFormats] = useState<
    OutputFormat[]
  >(["image/png", "image/jpeg"]);
  const [outputVariants, setOutputVariants] = useState<OutputVariant[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentArea, setCurrentArea] = useState<DraftBlurArea | null>(null);
  const [processing, setProcessing] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [sourceImageLoaded, setSourceImageLoaded] = useState(false);
  const [imageLoadError, setImageLoadError] = useState<string | null>(null);
  const [selectedAreaId, setSelectedAreaId] = useState<string | null>(null);
  const [draggingAreaId, setDraggingAreaId] = useState<string | null>(null);
  const [resizingAreaId, setResizingAreaId] = useState<string | null>(null);
  const [history, setHistory] = useState<BlurArea[][]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [canvasScale, setCanvasScale] = useState(1);
  const pinchStateRef = useRef<{
    initialDistance: number;
    initialScale: number;
    isPinching: boolean;
  }>({
    initialDistance: 0,
    initialScale: 1,
    isPinching: false,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const displayCanvasRef = useRef<HTMLCanvasElement>(null);
  const sourceImageRef = useRef<HTMLImageElement | null>(null);
  const areaInteractionRef = useRef<{
    startX: number;
    startY: number;
    original: BlurArea | null;
    mode: "move" | "resize" | null;
    handle: "nw" | "ne" | "sw" | "se" | null;
  }>({
    startX: 0,
    startY: 0,
    original: null,
    mode: null,
    handle: null,
  });

  const blurLevelLabel =
    blurIntensity < 15
      ? tx("Light", "Suave")
      : blurIntensity < 30
        ? tx("Medium", "Medio")
        : tx("Heavy", "Fuerte");

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const getFormatMeta = (format: OutputFormat) => {
    if (format === "image/jpeg") {
      return { label: "JPG" as const, extension: "jpg" as const };
    }
    if (format === "image/webp") {
      return { label: "WebP" as const, extension: "webp" as const };
    }

    return { label: "PNG" as const, extension: "png" as const };
  };

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      if (!file.type.startsWith("image/")) {
        alert(
          tx(
            "Please select a valid image file",
            "Por favor selecciona un archivo de imagen valido",
          ),
        );
        return;
      }

      const img = new Image();
      const url = URL.createObjectURL(file);

      setImageLoadError(null);

      img.onload = () => {
        sourceImageRef.current = img;
        setSourceImageLoaded(true);
        setImageLoadError(null);
        setOutputVariants((prev) => {
          prev.forEach((variant) => URL.revokeObjectURL(variant.url));
          return [];
        });
        setImageState({
          originalFile: file,
          originalUrl: url,
          processedUrl: "",
          originalWidth: img.width,
          originalHeight: img.height,
        });
        setBlurAreas([]);
        setSelectedAreaId(null);
        setCurrentArea(null);
        setIsDrawing(false);
        setDraggingAreaId(null);
        setResizingAreaId(null);
        setHistory([]);
        setHistoryIndex(-1);
        setCanvasScale(1);

        // Draw original image on display canvas
        const displayCanvas = displayCanvasRef.current;
        if (displayCanvas) {
          const ctx = displayCanvas.getContext("2d");
          if (ctx) {
            displayCanvas.width = img.width;
            displayCanvas.height = img.height;
            ctx.clearRect(0, 0, displayCanvas.width, displayCanvas.height);
            ctx.drawImage(img, 0, 0);
          }
        }
      };

      img.onerror = () => {
        setSourceImageLoaded(false);
        setImageLoadError(
          tx(
            "Could not load this image. Please try another file.",
            "No se pudo cargar esta imagen. Prueba con otro archivo.",
          ),
        );
      };

      img.src = url;
    },
    [tx],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith("image/")) {
        const input = fileInputRef.current;
        if (input) {
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(file);
          input.files = dataTransfer.files;
          handleFileSelect({ target: input } as any);
        }
      }
    },
    [handleFileSelect],
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const getCanvasCoords = (
    clientX: number,
    clientY: number,
    canvas: HTMLCanvasElement,
  ) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  };

  const getTouchDistance = (touches: React.TouchList) => {
    if (touches.length < 2) return 0;
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.hypot(dx, dy);
  };

  const clampScale = (value: number) => Math.min(3, Math.max(0.5, value));

  const handleDrawStart = (clientX: number, clientY: number) => {
    const canvas = displayCanvasRef.current;
    if (!canvas) return;

    const { x, y } = getCanvasCoords(clientX, clientY, canvas);
    setIsDrawing(true);
    setCurrentArea({ x, y, width: 0, height: 0 });
  };

  const handleDrawMove = (clientX: number, clientY: number) => {
    if (!isDrawing || !currentArea) return;

    const canvas = displayCanvasRef.current;
    if (!canvas) return;

    const { x: currentX, y: currentY } = getCanvasCoords(
      clientX,
      clientY,
      canvas,
    );

    const newArea = {
      x: Math.min(currentArea.x, currentX),
      y: Math.min(currentArea.y, currentY),
      width: Math.abs(currentX - currentArea.x),
      height: Math.abs(currentY - currentArea.y),
    };

    setCurrentArea(newArea);
  };

  const handleDrawEnd = () => {
    if (currentArea && currentArea.width > 10 && currentArea.height > 10) {
      const nextArea: BlurArea = {
        ...currentArea,
        id: `area_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
      };
      setBlurAreas((prev) => [...prev, nextArea]);
      setSelectedAreaId(nextArea.id);
    }
    setIsDrawing(false);
    setCurrentArea(null);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    handleDrawStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    handleDrawMove(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    handleDrawEnd();
  };

  const handleCanvasTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length >= 2) {
      e.preventDefault();
      pinchStateRef.current = {
        initialDistance: getTouchDistance(e.touches),
        initialScale: canvasScale,
        isPinching: true,
      };
      setIsDrawing(false);
      setCurrentArea(null);
      return;
    }

    if (!e.touches[0]) return;
    e.preventDefault();
    pinchStateRef.current.isPinching = false;
    handleCanvasPointerDown(e.touches[0].clientX, e.touches[0].clientY, true);
  };

  const handleCanvasTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length >= 2 && pinchStateRef.current.isPinching) {
      e.preventDefault();
      const currentDistance = getTouchDistance(e.touches);
      if (!pinchStateRef.current.initialDistance) return;
      const ratio = currentDistance / pinchStateRef.current.initialDistance;
      setCanvasScale(clampScale(pinchStateRef.current.initialScale * ratio));
      return;
    }

    if (!e.touches[0]) return;
    e.preventDefault();
    handleCanvasPointerMove(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleCanvasTouchEnd = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();

    if (pinchStateRef.current.isPinching) {
      if (e.touches.length < 2) {
        pinchStateRef.current = {
          initialDistance: 0,
          initialScale: canvasScale,
          isPinching: false,
        };
      }
      return;
    }

    handleCanvasPointerUp();
  };

  const redrawCanvas = useCallback(() => {
    const canvas = displayCanvasRef.current;
    const sourceImage = sourceImageRef.current;

    if (!canvas || !sourceImage || !sourceImageLoaded) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (
      canvas.width !== sourceImage.naturalWidth ||
      canvas.height !== sourceImage.naturalHeight
    ) {
      canvas.width = sourceImage.naturalWidth;
      canvas.height = sourceImage.naturalHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(sourceImage, 0, 0);

    // Draw existing blur areas
    blurAreas.forEach((area) => {
      const isSelected = area.id === selectedAreaId;
      ctx.strokeStyle = isSelected ? "#F59E0B" : "#3B82F6";
      ctx.lineWidth = isSelected ? 3.5 : 3;
      ctx.strokeRect(area.x, area.y, area.width, area.height);
      ctx.fillStyle = isSelected
        ? "rgba(245, 158, 11, 0.16)"
        : "rgba(59, 130, 246, 0.1)";
      ctx.fillRect(area.x, area.y, area.width, area.height);

      if (isSelected) {
        const handleSize = 10;
        const handles = [
          { x: area.x - handleSize / 2, y: area.y - handleSize / 2 }, // nw
          {
            x: area.x + area.width - handleSize / 2,
            y: area.y - handleSize / 2,
          }, // ne
          {
            x: area.x - handleSize / 2,
            y: area.y + area.height - handleSize / 2,
          }, // sw
          {
            x: area.x + area.width - handleSize / 2,
            y: area.y + area.height - handleSize / 2,
          }, // se
        ];
        ctx.fillStyle = "#ffffff";
        ctx.strokeStyle = "#F59E0B";
        ctx.lineWidth = 2;
        handles.forEach((h) => {
          ctx.fillRect(h.x, h.y, handleSize, handleSize);
          ctx.strokeRect(h.x, h.y, handleSize, handleSize);
        });
      }
    });

    // Draw current area being drawn
    if (currentArea) {
      ctx.strokeRect(
        currentArea.x,
        currentArea.y,
        currentArea.width,
        currentArea.height,
      );
      ctx.fillStyle = "rgba(59, 130, 246, 0.1)";
      ctx.fillRect(
        currentArea.x,
        currentArea.y,
        currentArea.width,
        currentArea.height,
      );
    }
  }, [blurAreas, currentArea, sourceImageLoaded, selectedAreaId]);

  const processImage = useCallback(
    async (formats: OutputFormat[] = selectedOutputFormats) => {
      if (!imageState.originalUrl || blurAreas.length === 0) {
        alert(
          tx(
            "Please select at least one area to blur",
            "Por favor selecciona al menos un area para difuminar",
          ),
        );
        return;
      }

      setProcessing(true);

      try {
        const img = new Image();
        img.crossOrigin = "anonymous";

        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
          img.src = imageState.originalUrl;
        });

        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Draw original image
        ctx.drawImage(img, 0, 0);

        // Apply blur to each area
        blurAreas.forEach((area) => {
          // Get the image data for this area
          const imageData = ctx.getImageData(
            area.x,
            area.y,
            area.width,
            area.height,
          );

          // Apply pixelation/blur effect
          const pixelSize = Math.max(1, Math.floor(blurIntensity / 2));

          for (let y = 0; y < imageData.height; y += pixelSize) {
            for (let x = 0; x < imageData.width; x += pixelSize) {
              // Get color of current pixel
              const pixelIndex = (y * imageData.width + x) * 4;
              const r = imageData.data[pixelIndex];
              const g = imageData.data[pixelIndex + 1];
              const b = imageData.data[pixelIndex + 2];

              // Fill block with same color
              for (
                let dy = 0;
                dy < pixelSize && y + dy < imageData.height;
                dy++
              ) {
                for (
                  let dx = 0;
                  dx < pixelSize && x + dx < imageData.width;
                  dx++
                ) {
                  const blockIndex =
                    ((y + dy) * imageData.width + (x + dx)) * 4;
                  imageData.data[blockIndex] = r;
                  imageData.data[blockIndex + 1] = g;
                  imageData.data[blockIndex + 2] = b;
                }
              }
            }
          }

          // Put the blurred image data back
          ctx.putImageData(imageData, area.x, area.y);
        });

        const effectiveFormats: OutputFormat[] =
          formats.length > 0 ? formats : ["image/png"];
        const variants = await Promise.all(
          effectiveFormats.map(async (format) => {
            const blob = await new Promise<Blob | null>((resolve) => {
              if (format === "image/png") {
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
          }),
        );

        const nextVariants = variants.filter(
          (variant): variant is OutputVariant => Boolean(variant),
        );

        setOutputVariants((prev) => {
          prev.forEach((variant) => URL.revokeObjectURL(variant.url));
          return nextVariants;
        });

        setImageState((prev) => ({
          ...prev,
          processedUrl: nextVariants[0]?.url || "",
        }));

        setProcessing(false);
      } catch (error) {
        console.error("Error processing image:", error);
        setProcessing(false);
      }
    },
    [
      imageState.originalUrl,
      blurAreas,
      blurIntensity,
      selectedOutputFormats,
      tx,
    ],
  );

  const handleOutputFormatToggle = useCallback(
    (format: OutputFormat) => {
      const isSelected = selectedOutputFormats.includes(format);
      const nextFormats = isSelected
        ? selectedOutputFormats.filter((f) => f !== format)
        : [...selectedOutputFormats, format];

      if (nextFormats.length === 0) return;

      setSelectedOutputFormats(nextFormats);

      if (imageState.processedUrl) {
        processImage(nextFormats);
      }
    },
    [imageState.processedUrl, processImage, selectedOutputFormats],
  );

  const downloadImage = async () => {
    if (outputVariants.length === 0) return;

    const baseName = `${imageState.originalFile?.name.split(".")[0] || "image"}_blurred`;

    if (outputVariants.length === 1) {
      const single = outputVariants[0];
      const link = document.createElement("a");
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

    const zipBlob = await zip.generateAsync({ type: "blob" });
    const zipUrl = URL.createObjectURL(zipBlob);
    const link = document.createElement("a");
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
    setImageState((prev) => ({ ...prev, processedUrl: "" }));
    setBlurAreas([]);
    setSelectedAreaId(null);
    setCurrentArea(null);
    setIsDrawing(false);
    setDraggingAreaId(null);
    setResizingAreaId(null);
    setBlurIntensity(20);
    setHistory([[]]);
    setHistoryIndex(0);
    setCanvasScale(1);
  };

  const clearAllAreas = () => {
    setBlurAreas([]);
    setSelectedAreaId(null);
    setCurrentArea(null);
  };

  const removeSelectedArea = () => {
    if (!selectedAreaId) return;
    setBlurAreas((prev) => prev.filter((area) => area.id !== selectedAreaId));
    setSelectedAreaId(null);
  };

  const commitAreasToHistory = useCallback(
    (areas: BlurArea[]) => {
      setHistory((prev) => {
        const snapshot = areas.map((a) => ({ ...a }));
        const truncated = prev.slice(0, historyIndex + 1);
        const next = [...truncated, snapshot];
        if (next.length > 100) {
          return next.slice(next.length - 100);
        }
        return next;
      });
      setHistoryIndex((prev) => Math.min(prev + 1, 99));
    },
    [historyIndex],
  );

  const undoAreas = () => {
    if (historyIndex <= 0) return;
    const nextIndex = historyIndex - 1;
    const snapshot = history[nextIndex] || [];
    setBlurAreas(snapshot.map((a) => ({ ...a })));
    setHistoryIndex(nextIndex);
    if (selectedAreaId && !snapshot.some((a) => a.id === selectedAreaId)) {
      setSelectedAreaId(null);
    }
  };

  const redoAreas = () => {
    if (historyIndex >= history.length - 1) return;
    const nextIndex = historyIndex + 1;
    const snapshot = history[nextIndex] || [];
    setBlurAreas(snapshot.map((a) => ({ ...a })));
    setHistoryIndex(nextIndex);
    if (selectedAreaId && !snapshot.some((a) => a.id === selectedAreaId)) {
      setSelectedAreaId(null);
    }
  };

  const hitTestSelectedAreaHandle = (
    x: number,
    y: number,
    area: BlurArea,
  ): "nw" | "ne" | "sw" | "se" | null => {
    const handleSize = 16;
    const half = handleSize / 2;
    const handles: Array<{
      key: "nw" | "ne" | "sw" | "se";
      x: number;
      y: number;
    }> = [
      { key: "nw", x: area.x, y: area.y },
      { key: "ne", x: area.x + area.width, y: area.y },
      { key: "sw", x: area.x, y: area.y + area.height },
      { key: "se", x: area.x + area.width, y: area.y + area.height },
    ];

    for (const h of handles) {
      if (
        x >= h.x - half &&
        x <= h.x + half &&
        y >= h.y - half &&
        y <= h.y + half
      ) {
        return h.key;
      }
    }

    return null;
  };

  const handleCanvasPointerDown = (
    clientX: number,
    clientY: number,
    fromTouch = false,
  ) => {
    const canvas = displayCanvasRef.current;
    if (!canvas) return;
    const { x, y } = getCanvasCoords(clientX, clientY, canvas);

    const selected = blurAreas.find((a) => a.id === selectedAreaId) || null;

    if (selected) {
      const hitHandle = hitTestSelectedAreaHandle(x, y, selected);
      if (hitHandle) {
        areaInteractionRef.current = {
          startX: x,
          startY: y,
          original: { ...selected },
          mode: "resize",
          handle: hitHandle,
        };
        setResizingAreaId(selected.id);
        setDraggingAreaId(null);
        setIsDrawing(false);
        setCurrentArea(null);
        return;
      }

      const insideSelected =
        x >= selected.x &&
        x <= selected.x + selected.width &&
        y >= selected.y &&
        y <= selected.y + selected.height;

      if (insideSelected) {
        areaInteractionRef.current = {
          startX: x,
          startY: y,
          original: { ...selected },
          mode: "move",
          handle: null,
        };
        setDraggingAreaId(selected.id);
        setResizingAreaId(null);
        setIsDrawing(false);
        setCurrentArea(null);
        return;
      }
    }

    const topHit = [...blurAreas]
      .reverse()
      .find(
        (area) =>
          x >= area.x &&
          x <= area.x + area.width &&
          y >= area.y &&
          y <= area.y + area.height,
      );

    if (topHit && !fromTouch) {
      setSelectedAreaId(topHit.id);
      return;
    }

    setSelectedAreaId(null);
    handleDrawStart(clientX, clientY);
  };

  const handleCanvasPointerMove = (clientX: number, clientY: number) => {
    const canvas = displayCanvasRef.current;
    if (!canvas) return;
    const { x, y } = getCanvasCoords(clientX, clientY, canvas);

    if (resizingAreaId && areaInteractionRef.current.original) {
      const original = areaInteractionRef.current.original;
      const handle = areaInteractionRef.current.handle;
      if (!handle) return;

      let left = original.x;
      let top = original.y;
      let right = original.x + original.width;
      let bottom = original.y + original.height;

      if (handle.includes("n")) top = y;
      if (handle.includes("s")) bottom = y;
      if (handle.includes("w")) left = x;
      if (handle.includes("e")) right = x;

      const minSize = 12;
      if (right - left < minSize) {
        if (handle.includes("w")) left = right - minSize;
        else right = left + minSize;
      }
      if (bottom - top < minSize) {
        if (handle.includes("n")) top = bottom - minSize;
        else bottom = top + minSize;
      }

      const clampedLeft = Math.max(0, Math.min(left, canvas.width - minSize));
      const clampedTop = Math.max(0, Math.min(top, canvas.height - minSize));
      const clampedRight = Math.max(
        clampedLeft + minSize,
        Math.min(right, canvas.width),
      );
      const clampedBottom = Math.max(
        clampedTop + minSize,
        Math.min(bottom, canvas.height),
      );

      setBlurAreas((prev) =>
        prev.map((area) =>
          area.id === resizingAreaId
            ? {
                ...area,
                x: clampedLeft,
                y: clampedTop,
                width: clampedRight - clampedLeft,
                height: clampedBottom - clampedTop,
              }
            : area,
        ),
      );
      return;
    }

    if (draggingAreaId && areaInteractionRef.current.original) {
      const original = areaInteractionRef.current.original;
      const dx = x - areaInteractionRef.current.startX;
      const dy = y - areaInteractionRef.current.startY;

      const nextX = Math.max(
        0,
        Math.min(canvas.width - original.width, original.x + dx),
      );
      const nextY = Math.max(
        0,
        Math.min(canvas.height - original.height, original.y + dy),
      );

      setBlurAreas((prev) =>
        prev.map((area) =>
          area.id === draggingAreaId ? { ...area, x: nextX, y: nextY } : area,
        ),
      );
      return;
    }

    handleDrawMove(clientX, clientY);
  };

  const handleCanvasPointerUp = () => {
    if (draggingAreaId || resizingAreaId) {
      setDraggingAreaId(null);
      setResizingAreaId(null);
      areaInteractionRef.current = {
        startX: 0,
        startY: 0,
        original: null,
        mode: null,
        handle: null,
      };
      return;
    }
    handleDrawEnd();
  };

  useEffect(() => {
    redrawCanvas();
  }, [redrawCanvas]);

  useEffect(() => {
    if (historyIndex === -1 && blurAreas.length === 0) {
      setHistory([[]]);
      setHistoryIndex(0);
    }
  }, [historyIndex, blurAreas.length]);

  useEffect(() => {
    if (!isDrawing && !draggingAreaId && !resizingAreaId) {
      if (historyIndex === -1) return;
      const current = history[historyIndex] || [];
      const currentJson = JSON.stringify(current);
      const nextJson = JSON.stringify(blurAreas);
      if (currentJson !== nextJson) {
        commitAreasToHistory(blurAreas);
      }
    }
  }, [
    blurAreas,
    isDrawing,
    draggingAreaId,
    resizingAreaId,
    history,
    historyIndex,
    commitAreasToHistory,
  ]);

  useEffect(() => {
    const onMouseUpGlobal = () => {
      if (isDrawing || draggingAreaId || resizingAreaId) {
        handleCanvasPointerUp();
      }
    };
    window.addEventListener("mouseup", onMouseUpGlobal);
    window.addEventListener("touchend", onMouseUpGlobal);
    return () => {
      window.removeEventListener("mouseup", onMouseUpGlobal);
      window.removeEventListener("touchend", onMouseUpGlobal);
    };
  }, [isDrawing, draggingAreaId, resizingAreaId]);

  return (
    <>
      {/* SEO Structured Data - WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: tx(
              "Blur Face - Free Online Face Blur Tool",
              "Difuminar rostro - Herramienta online gratis",
            ),
            description: tx(
              "Free online tool to blur faces and sensitive areas in images. Protect privacy by blurring faces, license plates, or any sensitive information with adjustable intensity.",
              "Herramienta online gratis para difuminar rostros y areas sensibles en imagenes. Protege la privacidad difuminando rostros, matriculas u otra informacion sensible.",
            ),
            url: pageUrl,
            applicationCategory: "MultimediaApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            featureList: [
              tx("Blur faces in images", "Difuminar rostros en imagenes"),
              tx("Manual area selection", "Seleccion manual de areas"),
              tx(
                "Adjustable blur intensity",
                "Intensidad de difuminado ajustable",
              ),
              tx("Multiple blur areas", "Multiples areas de difuminado"),
              tx("Privacy protection", "Proteccion de privacidad"),
              tx("Client-side processing", "Procesamiento local"),
            ],
          }),
        }}
      />

      {/* SEO Structured Data - HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: tx(
              "How to Blur Faces in Images",
              "Como difuminar rostros en imagenes",
            ),
            description: tx(
              "Learn how to blur faces and sensitive areas in photos online for free",
              "Aprende a difuminar rostros y areas sensibles en fotos online gratis",
            ),
            image: "https://pixselli.com/images/blur-face-guide.jpg",
            totalTime: "PT2M",
            supply: [
              {
                "@type": "HowToSupply",
                name: tx("Image File", "Archivo de imagen"),
              },
            ],
            tool: [
              {
                "@type": "HowToTool",
                name: tx(
                  "Pixselli Blur Face Tool",
                  "Herramienta Pixselli para difuminar rostro",
                ),
              },
            ],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: tx("Upload Image", "Subir imagen"),
                text: tx(
                  "Upload your image containing faces or sensitive information by dragging and dropping or clicking to browse",
                  "Sube tu imagen con rostros o informacion sensible arrastrando y soltando o haciendo clic para explorar",
                ),
                url: `${pageUrl}#step1`,
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: tx("Select Areas", "Seleccionar areas"),
                text: tx(
                  "Click and drag on the image to select areas you want to blur, such as faces or license plates",
                  "Haz clic y arrastra en la imagen para seleccionar areas que quieras difuminar, como rostros o matriculas",
                ),
                url: `${pageUrl}#step2`,
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: tx(
                  "Adjust Blur Intensity",
                  "Ajustar intensidad de difuminado",
                ),
                text: tx(
                  "Use the slider to adjust how strong the blur effect should be",
                  "Usa el control deslizante para ajustar la intensidad del difuminado",
                ),
                url: `${pageUrl}#step3`,
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: tx("Apply & Download", "Aplicar y descargar"),
                text: tx(
                  "Click 'Apply Blur' to process the image and download your privacy-protected photo",
                  "Haz clic en 'Aplicar difuminado' para procesar la imagen y descargar tu foto protegida",
                ),
                url: `${pageUrl}#step4`,
              },
            ],
          }),
        }}
      />

      {/* SEO Structured Data - FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: tx(
                  "Can I blur multiple faces in one image?",
                  "Puedo difuminar varios rostros en una imagen?",
                ),
                acceptedAnswer: {
                  "@type": "Answer",
                  text: tx(
                    "Yes! You can select and blur as many areas as you need. Simply draw a selection box around each face or area you want to blur.",
                    "Si. Puedes seleccionar y difuminar tantas areas como necesites. Solo dibuja un cuadro de seleccion alrededor de cada rostro o area.",
                  ),
                },
              },
              {
                "@type": "Question",
                name: tx(
                  "How do I select the area to blur?",
                  "Como selecciono el area para difuminar?",
                ),
                acceptedAnswer: {
                  "@type": "Answer",
                  text: tx(
                    "Click and drag on the image to create a selection box around the area you want to blur. You can create multiple selections for different faces or sensitive areas.",
                    "Haz clic y arrastra en la imagen para crear un cuadro de seleccion alrededor del area que quieres difuminar. Puedes crear multiples selecciones.",
                  ),
                },
              },
              {
                "@type": "Question",
                name: tx(
                  "Can I adjust how strong the blur effect is?",
                  "Puedo ajustar que tan fuerte es el efecto de difuminado?",
                ),
                acceptedAnswer: {
                  "@type": "Answer",
                  text: tx(
                    "Absolutely! Use the blur intensity slider to control how strong the blur effect is. Higher values create stronger pixelation effects.",
                    "Si. Usa el control de intensidad para definir que tan fuerte sera el difuminado. Valores altos crean un efecto mas intenso.",
                  ),
                },
              },
              {
                "@type": "Question",
                name: tx(
                  "What can I blur besides faces?",
                  "Que puedo difuminar ademas de rostros?",
                ),
                acceptedAnswer: {
                  "@type": "Answer",
                  text: tx(
                    "You can blur any sensitive information including license plates, phone numbers, addresses, signatures, or any other private data in your images.",
                    "Puedes difuminar cualquier informacion sensible, como matriculas, numeros de telefono, direcciones, firmas u otros datos privados.",
                  ),
                },
              },
              {
                "@type": "Question",
                name: tx(
                  "Is my image secure when blurring faces?",
                  "Mi imagen esta segura al difuminar rostros?",
                ),
                acceptedAnswer: {
                  "@type": "Answer",
                  text: tx(
                    "Yes! All processing happens locally in your browser. Your images are never uploaded to any server, ensuring complete privacy and security.",
                    "Si. Todo el procesamiento ocurre localmente en tu navegador. Tus imagenes nunca se suben a ningun servidor.",
                  ),
                },
              },
            ],
          }),
        }}
      />

      {/* SEO Structured Data - SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: tx(
              "Pixselli Blur Face Tool",
              "Herramienta Pixselli para difuminar rostro",
            ),
            applicationCategory: "MultimediaApplication",
            applicationSubCategory: "Image Editing",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />

      <article>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
          <main className="max-w-7xl mx-auto">
            {/* Breadcrumb Navigation */}
            <nav aria-label={tx("Breadcrumb", "Miga de pan")} className="mb-8">
              <ol
                className="flex items-center gap-2 text-sm text-gray-600"
                itemScope
                itemType="https://schema.org/BreadcrumbList"
              >
                <li
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <a
                    href={homePath}
                    itemProp="item"
                    className="hover:text-blue-600 transition-colors"
                  >
                    <span itemProp="name">{tx("Home", "Inicio")}</span>
                  </a>
                  <meta itemProp="position" content="1" />
                </li>
                <li className="text-gray-400">/</li>
                <li
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <span itemProp="name" className="text-gray-900 font-medium">
                    {tx("Blur Face", "Difuminar rostro")}
                  </span>
                  <meta itemProp="position" content="2" />
                </li>
              </ol>
            </nav>

            {/* Page Header */}
            <header className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Eye className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {tx(
                  "Blur Face & Privacy Tool",
                  "Difuminar rostro y privacidad",
                )}
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {tx(
                  "Protect privacy by blurring faces, license plates, or sensitive information in your images. Select areas manually with adjustable blur intensity. Fast, secure, and works entirely in your browser.",
                  "Protege la privacidad difuminando rostros, matriculas o informacion sensible en tus imagenes. Selecciona areas manualmente y ajusta la intensidad del difuminado.",
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
                    {tx("Upload & Select Areas", "Subir y seleccionar areas")}
                  </h2>

                  {!imageState.originalUrl ? (
                    <div
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      className="relative border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 bg-gradient-to-br from-gray-50 to-gray-100 transition-all cursor-pointer group"
                      style={{ overflow: "hidden" }}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      {/* Decorative elements */}
                      <div
                        className="absolute top-4 left-4 w-20 h-20 bg-blue-100 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"
                        style={{ pointerEvents: "none" }}
                      ></div>
                      <div
                        className="absolute bottom-4 right-4 w-24 h-24 bg-purple-100 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"
                        style={{ pointerEvents: "none" }}
                      ></div>

                      <div className="relative z-10">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                          <Upload className="w-10 h-10 text-white" />
                        </div>
                        <p className="text-lg font-bold text-gray-800 mb-2">
                          {tx(
                            "Drag & drop your image here",
                            "Arrastra y suelta tu imagen aqui",
                          )}
                        </p>
                        <p className="text-sm text-gray-600 mb-4">
                          {tx(
                            "or click to browse files",
                            "o haz clic para buscar archivos",
                          )}
                        </p>
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <div className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-full shadow-sm border border-gray-200">
                            <ImageIcon className="w-4 h-4 text-blue-500" />
                            <span className="text-xs font-medium text-gray-600">
                              JPG
                            </span>
                          </div>
                          <div className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-full shadow-sm border border-gray-200">
                            <ImageIcon className="w-4 h-4 text-purple-500" />
                            <span className="text-xs font-medium text-gray-600">
                              PNG
                            </span>
                          </div>
                          <div className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-full shadow-sm border border-gray-200">
                            <ImageIcon className="w-4 h-4 text-emerald-500" />
                            <span className="text-xs font-medium text-gray-600">
                              WebP
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">
                          {tx(
                            "Maximum file size: 50MB",
                            "Tamano maximo de archivo: 50MB",
                          )}
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
                        <canvas
                          ref={displayCanvasRef}
                          onMouseDown={(e) =>
                            handleCanvasPointerDown(e.clientX, e.clientY)
                          }
                          onMouseMove={(e) =>
                            handleCanvasPointerMove(e.clientX, e.clientY)
                          }
                          onMouseUp={handleCanvasPointerUp}
                          onMouseLeave={handleCanvasPointerUp}
                          onTouchStart={handleCanvasTouchStart}
                          onTouchMove={handleCanvasTouchMove}
                          onTouchEnd={handleCanvasTouchEnd}
                          onTouchCancel={handleCanvasTouchEnd}
                          className="w-full h-auto touch-none"
                          style={{
                            maxHeight: "500px",
                            objectFit: "contain",
                            touchAction: "none",
                            transform: `scale(${canvasScale})`,
                            transformOrigin: "center center",
                            cursor: resizingAreaId
                              ? "nwse-resize"
                              : draggingAreaId
                                ? "move"
                                : "crosshair",
                          }}
                        />
                        <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                          {blurAreas.length}{" "}
                          {blurAreas.length === 1
                            ? tx("area selected", "area seleccionada")
                            : tx("areas selected", "areas seleccionadas")}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <button
                          onClick={clearAllAreas}
                          className="py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium"
                        >
                          {tx("Clear All", "Borrar todo")}
                        </button>
                        <button
                          onClick={removeSelectedArea}
                          disabled={!selectedAreaId}
                          className="py-2 px-4 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-lg transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {tx("Delete Selected", "Eliminar seleccionada")}
                        </button>
                        <button
                          onClick={undoAreas}
                          disabled={historyIndex <= 0}
                          className="py-2 px-4 bg-indigo-100 hover:bg-indigo-200 text-indigo-800 rounded-lg transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {tx("Undo", "Deshacer")}
                        </button>
                        <button
                          onClick={redoAreas}
                          disabled={historyIndex >= history.length - 1}
                          className="py-2 px-4 bg-violet-100 hover:bg-violet-200 text-violet-800 rounded-lg transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {tx("Redo", "Rehacer")}
                        </button>
                      </div>
                      <div className="rounded-lg border border-sky-200 bg-sky-50 px-3 py-2">
                        <div className="flex items-center justify-between gap-3">
                          <label className="text-sm font-medium text-sky-900">
                            {tx("Canvas Zoom", "Zoom del lienzo")} (
                            {Math.round(canvasScale * 100)}%)
                          </label>
                          <button
                            onClick={() => setCanvasScale(1)}
                            className="text-xs px-2 py-1 rounded bg-white border border-sky-300 text-sky-800 hover:bg-sky-100 transition-colors"
                            type="button"
                          >
                            {tx("Reset Zoom", "Restablecer zoom")}
                          </button>
                        </div>
                        <input
                          type="range"
                          min="0.6"
                          max="2"
                          step="0.1"
                          value={canvasScale}
                          onChange={(e) =>
                            setCanvasScale(parseFloat(e.target.value))
                          }
                          className="w-full h-2 mt-2 bg-white rounded-lg appearance-none cursor-pointer accent-sky-600"
                        />
                      </div>
                      {imageLoadError && (
                        <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                          {imageLoadError}
                        </div>
                      )}
                      {!sourceImageLoaded &&
                        imageState.originalUrl &&
                        !imageLoadError && (
                          <div className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm text-blue-700">
                            {tx("Image loading...", "Cargando imagen...")}
                          </div>
                        )}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - Controls */}
              <div className="flex flex-col">
                {/* Controls Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 flex-1 flex flex-col">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Scan className="w-6 h-6 text-blue-600" />
                    {tx("Blur Settings", "Configuracion de difuminado")}
                  </h2>

                  {imageState.originalUrl ? (
                    <div className="space-y-6">
                      {/* Blur Intensity */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          {tx("Blur Intensity", "Intensidad de difuminado")} (
                          {blurIntensity}px)
                        </label>
                        <input
                          type="range"
                          value={blurIntensity}
                          onChange={(e) =>
                            setBlurIntensity(parseInt(e.target.value))
                          }
                          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                          min="5"
                          max="50"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>{tx("Light (5px)", "Suave (5px)")}</span>
                          <span>{tx("Heavy (50px)", "Fuerte (50px)")}</span>
                        </div>
                      </div>

                      {/* Selection Info */}
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                        <h3 className="text-sm font-semibold text-gray-700 mb-4">
                          {tx("Selection Info", "Informacion de seleccion")}
                        </h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">
                              {tx("Areas Selected:", "Areas seleccionadas:")}
                            </span>
                            <span className="text-sm font-semibold text-gray-900">
                              {blurAreas.length}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">
                              {tx("Selected Area:", "Area seleccionada:")}
                            </span>
                            <span className="text-sm font-semibold text-gray-900">
                              {selectedAreaId
                                ? tx("Yes", "Si")
                                : tx("No", "No")}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">
                              {tx("Blur Level:", "Nivel de difuminado:")}
                            </span>
                            <span className="text-sm font-semibold text-gray-900">
                              {blurLevelLabel}
                            </span>
                          </div>
                          <p className="text-xs text-blue-700 pt-1">
                            {tx(
                              "Tip: Tap/click a box to select it. Drag selected box to move. Drag corner handles to resize.",
                              "Consejo: Toca/haz clic en un cuadro para seleccionarlo. Arrastra el cuadro para moverlo. Arrastra las esquinas para cambiar su tamano.",
                            )}
                          </p>
                        </div>
                      </div>

                      {/* Output Format */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-3">
                          {tx("Output Formats", "Formatos de salida")}
                        </h3>
                        <div className="grid grid-cols-3 gap-2">
                          <button
                            onClick={() =>
                              handleOutputFormatToggle("image/jpeg")
                            }
                            className={`py-3 px-4 rounded-lg font-medium transition-all ${selectedOutputFormats.includes("image/jpeg") ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                            type="button"
                          >
                            JPG
                          </button>
                          <button
                            onClick={() =>
                              handleOutputFormatToggle("image/png")
                            }
                            className={`py-3 px-4 rounded-lg font-medium transition-all ${selectedOutputFormats.includes("image/png") ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                            type="button"
                          >
                            PNG
                          </button>
                          <button
                            onClick={() =>
                              handleOutputFormatToggle("image/webp")
                            }
                            className={`py-3 px-4 rounded-lg font-medium transition-all ${selectedOutputFormats.includes("image/webp") ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                            type="button"
                          >
                            WebP
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          {tx(
                            "Select one or more formats. Multiple selections download as ZIP.",
                            "Selecciona uno o mas formatos. Varias selecciones se descargan en ZIP.",
                          )}
                        </p>
                      </div>

                      {/* Info Box */}
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Scan className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-blue-900 font-medium mb-1">
                              {tx("How to Blur Areas", "Como difuminar areas")}
                            </p>
                            <p className="text-xs text-blue-700">
                              {tx(
                                'Click and drag on the image to select faces or sensitive areas. Adjust blur intensity, then click "Apply Blur".',
                                'Haz clic y arrastra en la imagen para seleccionar rostros o areas sensibles. Ajusta la intensidad y luego haz clic en "Aplicar difuminado".',
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
                          {tx("Reset", "Restablecer")}
                        </button>
                        <button
                          onClick={() => processImage()}
                          disabled={processing || blurAreas.length === 0}
                          className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {processing
                            ? tx("Processing...", "Procesando...")
                            : tx("Apply Blur", "Aplicar difuminado")}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Eye className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {tx("Ready to Blur", "Listo para difuminar")}
                        </h3>
                        <p className="text-gray-600 max-w-sm mx-auto">
                          {tx(
                            "Upload an image to start blurring faces and sensitive areas",
                            "Sube una imagen para empezar a difuminar rostros y areas sensibles",
                          )}
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
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">
                      {tx("Blurred Image", "Imagen difuminada")}
                    </h3>
                    <div className="relative rounded-xl overflow-hidden bg-gray-100 mb-4">
                      <img
                        src={imageState.processedUrl}
                        alt={tx("Blurred image", "Imagen difuminada")}
                        className="w-full h-auto"
                      />
                      <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                        {tx("Privacy Protected", "Privacidad protegida")}
                      </div>
                    </div>
                    <button
                      onClick={downloadImage}
                      className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all font-bold shadow-lg flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      {outputVariants.length > 1
                        ? tx(
                            "Download All Formats (ZIP)",
                            "Descargar todos los formatos (ZIP)",
                          )
                        : tx(
                            "Download Protected Image",
                            "Descargar imagen protegida",
                          )}
                    </button>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-gray-700">
                      {tx("Blur Details", "Detalles del difuminado")}
                    </h3>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">
                          {tx("Areas Blurred:", "Areas difuminadas:")}
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                          {blurAreas.length}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">
                          {tx("Blur Intensity:", "Intensidad:")}
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                          {blurIntensity}px
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">
                          {tx("Original Size:", "Tamano original:")}
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                          {imageState.originalWidth} ×{" "}
                          {imageState.originalHeight}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">
                          {tx("Format:", "Formato:")}
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                          {outputVariants
                            .map((variant) => variant.label)
                            .join(", ") || tx("N/A", "N/D")}
                        </span>
                      </div>
                    </div>
                    {outputVariants.length > 0 && (
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">
                          {tx("Generated Outputs", "Salidas generadas")}
                        </p>
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
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-green-900 font-medium mb-1">
                            {tx("100% Private", "100% Privado")}
                          </p>
                          <p className="text-xs text-green-700">
                            {tx(
                              "All processing happens in your browser. Your images never leave your device.",
                              "Todo el procesamiento ocurre en tu navegador. Tus imagenes nunca salen de tu dispositivo.",
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {tx(
                  "About Blur Face Tool",
                  "Acerca de la herramienta para difuminar rostro",
                )}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {tx(
                    "Our free online blur face tool helps you protect privacy by blurring faces, license plates, or any sensitive information in your images. Perfect for sharing photos publicly while protecting identities or censoring sensitive data.",
                    "Nuestra herramienta online gratuita te ayuda a proteger la privacidad difuminando rostros, matriculas o informacion sensible en tus imagenes. Ideal para compartir fotos publicamente sin exponer identidades.",
                  )}
                </p>
                <p>
                  {tx(
                    "Simply select the areas you want to blur by clicking and dragging, adjust the blur intensity to your preference, and apply. All processing happens in your browser, ensuring your images remain private and secure. No registration required, completely free to use.",
                    "Solo selecciona las areas que quieres difuminar con clic y arrastre, ajusta la intensidad y aplica. Todo el procesamiento ocurre en tu navegador para mantener privacidad y seguridad.",
                  )}
                </p>
              </div>
            </section>

            {/* Features Section */}
            <section
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
              aria-labelledby="features-heading"
            >
              <h2 id="features-heading" className="sr-only">
                {tx("Key Features", "Caracteristicas clave")}
              </h2>
              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Scan className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {tx("Manual Selection", "Seleccion manual")}
                </h3>
                <p className="text-gray-600">
                  {tx(
                    "Select any area to blur with precise click-and-drag control.",
                    "Selecciona cualquier area para difuminar con control preciso de clic y arrastre.",
                  )}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {tx("Privacy Protection", "Proteccion de privacidad")}
                </h3>
                <p className="text-gray-600">
                  {tx(
                    "Blur faces, license plates, or any sensitive information easily.",
                    "Difumina rostros, matriculas o cualquier informacion sensible facilmente.",
                  )}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {tx("100% Secure", "100% Seguro")}
                </h3>
                <p className="text-gray-600">
                  {tx(
                    "All processing happens locally in your browser for privacy.",
                    "Todo el procesamiento ocurre localmente en tu navegador para mayor privacidad.",
                  )}
                </p>
              </div>
            </section>

            {/* How to Use */}
            <section
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-8 border border-blue-200 max-w-4xl mx-auto mb-12"
              aria-labelledby="howto-heading"
            >
              <h2
                id="howto-heading"
                className="text-2xl font-bold text-gray-900 mb-8 text-center"
              >
                {tx(
                  "How to Use Blur Face Tool",
                  "Como usar la herramienta de difuminar rostro",
                )}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        {tx("Upload Your Image", "Sube tu imagen")}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {tx(
                          "Click the upload area or drag and drop your photo. Supports JPG, PNG, WebP formats.",
                          "Haz clic en el area de subida o arrastra tu foto. Compatible con JPG, PNG y WebP.",
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        {tx(
                          "Select Areas to Blur",
                          "Selecciona areas para difuminar",
                        )}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {tx(
                          "Click and drag on faces or sensitive areas. Create multiple selections as needed.",
                          "Haz clic y arrastra sobre rostros o areas sensibles. Crea multiples selecciones segun sea necesario.",
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        {tx(
                          "Adjust Blur Intensity",
                          "Ajusta la intensidad del difuminado",
                        )}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {tx(
                          "Use the slider to control how strong the blur effect should be.",
                          "Usa el control deslizante para definir que tan fuerte sera el difuminado.",
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        {tx("Apply & Download", "Aplicar y descargar")}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {tx(
                          'Click "Apply Blur" to process. Preview and download your privacy-protected image.',
                          'Haz clic en "Aplicar difuminado" para procesar. Previsualiza y descarga tu imagen protegida.',
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 text-center">
                <p className="text-sm text-blue-800">
                  <strong>{tx("Pro Tip:", "Consejo Pro:")}</strong>{" "}
                  {tx(
                    "Use medium blur intensity (20-30px) for effective privacy protection while maintaining some image quality.",
                    "Usa una intensidad media (20-30px) para proteger la privacidad manteniendo buena calidad de imagen.",
                  )}
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section
              className="max-w-4xl mx-auto"
              aria-labelledby="faq-heading"
            >
              <h2
                id="faq-heading"
                className="text-2xl font-bold text-gray-900 mb-6 text-center"
              >
                {tx("Frequently Asked Questions", "Preguntas frecuentes")}
              </h2>
              <div className="space-y-4">
                {/* FAQ 1 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(0)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>
                      {tx(
                        "Can I blur multiple faces in one image?",
                        "Puedo difuminar varios rostros en una imagen?",
                      )}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 0 ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaqIndex === 0 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>
                        {tx(
                          "Yes! You can select and blur as many areas as you need. Simply draw a selection box around each face or area you want to blur.",
                          "Si. Puedes seleccionar y difuminar tantas areas como necesites. Dibuja un cuadro de seleccion alrededor de cada rostro o area.",
                        )}
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(1)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>
                      {tx(
                        "How do I select the area to blur?",
                        "Como selecciono el area para difuminar?",
                      )}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 1 ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaqIndex === 1 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>
                        {tx(
                          "Click and drag on the image to create a selection box around the area you want to blur. You can create multiple selections for different faces or sensitive areas.",
                          "Haz clic y arrastra en la imagen para crear un cuadro de seleccion sobre el area que quieres difuminar. Puedes crear multiples selecciones.",
                        )}
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(2)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>
                      {tx(
                        "Can I adjust how strong the blur effect is?",
                        "Puedo ajustar que tan fuerte es el efecto de difuminado?",
                      )}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 2 ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaqIndex === 2 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>
                        {tx(
                          "Absolutely! Use the blur intensity slider to control how strong the blur effect is. Higher values create stronger pixelation effects.",
                          "Si. Usa el control de intensidad para ajustar la fuerza del difuminado. Valores altos crean un efecto mas intenso.",
                        )}
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 4 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(3)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>
                      {tx(
                        "What can I blur besides faces?",
                        "Que puedo difuminar ademas de rostros?",
                      )}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 3 ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaqIndex === 3 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>
                        {tx(
                          "You can blur any sensitive information including license plates, phone numbers, addresses, signatures, or any other private data in your images.",
                          "Puedes difuminar cualquier informacion sensible, incluyendo matriculas, numeros de telefono, direcciones, firmas u otros datos privados.",
                        )}
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 5 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(4)}
                    className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span>
                      {tx(
                        "Is my image secure when blurring faces?",
                        "Mi imagen esta segura al difuminar rostros?",
                      )}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === 4 ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaqIndex === 4 && (
                    <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100">
                      <p>
                        {tx(
                          "Yes! All processing happens locally in your browser. Your images are never uploaded to any server, ensuring complete privacy and security.",
                          "Si. Todo el procesamiento ocurre localmente en tu navegador. Tus imagenes nunca se suben a ningun servidor.",
                        )}
                      </p>
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
