"use client";

import { normalizeFileToken } from "@/lib/unifiedOutputProcessor";
import { useLanguage } from "@/components/LanguageProvider";
import { getLocaleBasePath } from "@/lib/i18n";
import { IMAGE_RESIZER_TEXT_BY_LOCALE } from "@/lib/imageResizerTranslations";
import { ADD_WATERMARK_TEXT_BY_LOCALE } from "@/lib/addWatermarkTranslations";
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

interface LogoState {
  file: File | null;
  url: string;
  width: number;
  height: number;
}

type OutputFormat = "image/jpeg" | "image/png" | "image/webp";
type WatermarkPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center";

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
        ADD_WATERMARK_TEXT_BY_LOCALE[locale]?.[en] ||
        IMAGE_RESIZER_TEXT_BY_LOCALE[locale]?.[en] ||
        en
      );
    },
    [locale],
  );
  const localeBasePath = getLocaleBasePath(locale);
  const pagePath = localeBasePath
    ? `${localeBasePath}/add-watermark`
    : "/add-watermark";
  const pageUrl = `https://pixselli.com${pagePath}`;
  const homePath = localeBasePath || "/";
  const defaultWatermarkText = tx("© Your Watermark", "© Tu marca de agua");

  const [imageState, setImageState] = useState<ImageState>({
    originalFile: null,
    originalUrl: "",
    processedUrl: "",
    originalWidth: 0,
    originalHeight: 0,
  });

  const [watermarkText, setWatermarkText] = useState(defaultWatermarkText);
  const [fontSize, setFontSize] = useState(48);
  const [opacity, setOpacity] = useState(0.5);
  const [position, setPosition] = useState<WatermarkPosition>("bottom-right");
  const [textColor, setTextColor] = useState("#333333");
  const [fontSizeInput, setFontSizeInput] = useState("48");
  const [opacityInput, setOpacityInput] = useState("50");
  const [watermarkMode, setWatermarkMode] = useState<"text" | "logo" | "both">(
    "text",
  );
  const [logoState, setLogoState] = useState<LogoState>({
    file: null,
    url: "",
    width: 0,
    height: 0,
  });
  const [logoOpacity, setLogoOpacity] = useState(0.4);
  const [logoSizePercent, setLogoSizePercent] = useState(20);
  const [logoOpacityInput, setLogoOpacityInput] = useState("40");
  const [logoSizeInput, setLogoSizeInput] = useState("20");
  const [isDraggingLogo, setIsDraggingLogo] = useState(false);
  const [logoOffset, setLogoOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [previewMetrics, setPreviewMetrics] = useState<{
    scaleX: number;
    scaleY: number;
    offsetLeft: number;
    offsetTop: number;
    renderedWidth: number;
    renderedHeight: number;
  } | null>(null);
  const QUICK_COLORS = [
    "#ffffff",
    "#000000",
    "#333333",
    "#2563eb",
    "#7c3aed",
    "#dc2626",
    "#16a34a",
  ];
  const [selectedOutputFormats, setSelectedOutputFormats] = useState<
    OutputFormat[]
  >(["image/png", "image/jpeg"]);
  const [outputVariants, setOutputVariants] = useState<OutputVariant[]>([]);
  const [processing, setProcessing] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewImageRef = useRef<HTMLImageElement>(null);
  const previewContainerRef = useRef<HTMLDivElement>(null);
  const dragSessionRef = useRef<{
    startClientX: number;
    startClientY: number;
    startOffsetX: number;
    startOffsetY: number;
  } | null>(null);

  const getPositionLabel = (value: WatermarkPosition) => {
    switch (value) {
      case "top-left":
        return tx("Top Left", "Superior izquierda");
      case "top-right":
        return tx("Top Right", "Superior derecha");
      case "bottom-left":
        return tx("Bottom Left", "Inferior izquierda");
      case "bottom-right":
        return tx("Bottom Right", "Inferior derecha");
      case "center":
        return tx("Center", "Centro");
      default:
        return value;
    }
  };

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleFontSizeSlider = (value: number) => {
    setFontSize(value);
    setFontSizeInput(String(value));
  };

  const handleFontSizeInputChange = (value: string) => {
    setFontSizeInput(value);
    const parsed = parseInt(value, 10);
    if (!Number.isNaN(parsed)) {
      const clamped = Math.min(120, Math.max(12, parsed));
      setFontSize(clamped);
    }
  };

  const handleFontSizeInputBlur = () => {
    const parsed = parseInt(fontSizeInput, 10);
    const clamped = Number.isNaN(parsed)
      ? fontSize
      : Math.min(120, Math.max(12, parsed));
    setFontSize(clamped);
    setFontSizeInput(String(clamped));
  };

  const handleOpacitySlider = (value: number) => {
    setOpacity(value);
    setOpacityInput(String(Math.round(value * 100)));
  };

  const handleOpacityInputChange = (value: string) => {
    setOpacityInput(value);
    const parsed = parseInt(value, 10);
    if (!Number.isNaN(parsed)) {
      const clampedPercent = Math.min(100, Math.max(10, parsed));
      setOpacity(clampedPercent / 100);
    }
  };

  const handleOpacityInputBlur = () => {
    const parsed = parseInt(opacityInput, 10);
    const currentPercent = Math.round(opacity * 100);
    const clampedPercent = Number.isNaN(parsed)
      ? currentPercent
      : Math.min(100, Math.max(10, parsed));
    setOpacity(clampedPercent / 100);
    setOpacityInput(String(clampedPercent));
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

      img.onload = () => {
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

  const handleLogoSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      if (!file.type.startsWith("image/")) {
        alert(
          tx(
            "Please select a valid logo image file",
            "Por favor selecciona un archivo de logo valido",
          ),
        );
        return;
      }

      const logo = new Image();
      const logoUrl = URL.createObjectURL(file);

      logo.onload = () => {
        if (logoState.url) {
          URL.revokeObjectURL(logoState.url);
        }

        setLogoState({
          file,
          url: logoUrl,
          width: logo.width,
          height: logo.height,
        });
      };

      logo.src = logoUrl;
    },
    [logoState.url, tx],
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const updatePreviewMetrics = useCallback(() => {
    const container = previewContainerRef.current;
    const image = previewImageRef.current;

    if (
      !container ||
      !image ||
      !imageState.originalWidth ||
      !imageState.originalHeight
    ) {
      setPreviewMetrics(null);
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const renderedWidth = image.clientWidth;
    const renderedHeight = image.clientHeight;

    if (!renderedWidth || !renderedHeight) {
      setPreviewMetrics(null);
      return;
    }

    const offsetLeft = (containerRect.width - renderedWidth) / 2;
    const offsetTop = (containerRect.height - renderedHeight) / 2;

    const scaleX = imageState.originalWidth / renderedWidth;
    const scaleY = imageState.originalHeight / renderedHeight;

    setPreviewMetrics({
      scaleX,
      scaleY,
      offsetLeft,
      offsetTop,
      renderedWidth,
      renderedHeight,
    });
  }, [imageState.originalHeight, imageState.originalWidth]);

  const getBaseLogoRect = useCallback(
    (
      canvasWidth: number,
      canvasHeight: number,
      logoWidth: number,
      logoHeight: number,
    ) => {
      const padding = 20;

      switch (position) {
        case "top-left":
          return { x: padding, y: padding };
        case "top-right":
          return { x: canvasWidth - logoWidth - padding, y: padding };
        case "bottom-left":
          return { x: padding, y: canvasHeight - logoHeight - padding };
        case "bottom-right":
          return {
            x: canvasWidth - logoWidth - padding,
            y: canvasHeight - logoHeight - padding,
          };
        case "center":
          return {
            x: (canvasWidth - logoWidth) / 2,
            y: (canvasHeight - logoHeight) / 2,
          };
        default:
          return { x: padding, y: padding };
      }
    },
    [position],
  );

  const handleLogoDragStart = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (
        !(watermarkMode === "logo" || watermarkMode === "both") ||
        !logoState.url
      )
        return;

      e.preventDefault();
      e.currentTarget.setPointerCapture(e.pointerId);
      setIsDraggingLogo(true);
      dragSessionRef.current = {
        startClientX: e.clientX,
        startClientY: e.clientY,
        startOffsetX: logoOffset.x,
        startOffsetY: logoOffset.y,
      };
    },
    [logoOffset.x, logoOffset.y, logoState.url, watermarkMode],
  );

  const handleLogoDragMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDraggingLogo || !dragSessionRef.current || !previewMetrics) return;

      const dxScreen = e.clientX - dragSessionRef.current.startClientX;
      const dyScreen = e.clientY - dragSessionRef.current.startClientY;

      const dxImage = dxScreen * previewMetrics.scaleX;
      const dyImage = dyScreen * previewMetrics.scaleY;

      setLogoOffset({
        x: Math.round(dragSessionRef.current.startOffsetX + dxImage),
        y: Math.round(dragSessionRef.current.startOffsetY + dyImage),
      });
    },
    [isDraggingLogo, previewMetrics],
  );

  const handleLogoDragEnd = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
      dragSessionRef.current = null;
      setIsDraggingLogo(false);
    },
    [],
  );

  const processImage = useCallback(
    async (formats: OutputFormat[] = selectedOutputFormats) => {
      if (!imageState.originalUrl) return;

      setProcessing(true);

      try {
        const img = new Image();
        img.crossOrigin = "anonymous";

        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
          img.src = imageState.originalUrl;
        });

        let logoImg: HTMLImageElement | null = null;
        if (
          (watermarkMode === "logo" || watermarkMode === "both") &&
          logoState.url
        ) {
          logoImg = new Image();
          logoImg.crossOrigin = "anonymous";
          await new Promise((resolve, reject) => {
            if (!logoImg) return resolve(null);
            logoImg.onload = resolve;
            logoImg.onerror = reject;
            logoImg.src = logoState.url;
          });
        }

        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Draw original image
        ctx.drawImage(img, 0, 0);

        const padding = 20;

        // Draw text watermark
        if (
          (watermarkMode === "text" || watermarkMode === "both") &&
          watermarkText.trim()
        ) {
          ctx.font = `${fontSize}px Arial`;
          ctx.fillStyle = textColor;
          ctx.globalAlpha = opacity;

          const textMetrics = ctx.measureText(watermarkText);
          const textWidth = textMetrics.width;
          const textHeight = fontSize;

          let x = 0;
          let y = 0;

          switch (position) {
            case "top-left":
              x = padding;
              y = padding + textHeight;
              break;
            case "top-right":
              x = canvas.width - textWidth - padding;
              y = padding + textHeight;
              break;
            case "bottom-left":
              x = padding;
              y = canvas.height - padding;
              break;
            case "bottom-right":
              x = canvas.width - textWidth - padding;
              y = canvas.height - padding;
              break;
            case "center":
              x = (canvas.width - textWidth) / 2;
              y = (canvas.height + textHeight) / 2;
              break;
          }

          ctx.fillText(watermarkText, x, y);
        }

        // Draw logo watermark
        if ((watermarkMode === "logo" || watermarkMode === "both") && logoImg) {
          const ratio = logoImg.naturalWidth / logoImg.naturalHeight;
          const targetWidth = Math.max(
            24,
            Math.round((canvas.width * logoSizePercent) / 100),
          );
          const targetHeight = Math.max(24, Math.round(targetWidth / ratio));

          const baseLogo = getBaseLogoRect(
            canvas.width,
            canvas.height,
            targetWidth,
            targetHeight,
          );

          const minX = 0;
          const minY = 0;
          const maxX = canvas.width - targetWidth;
          const maxY = canvas.height - targetHeight;

          const logoX = Math.min(
            maxX,
            Math.max(minX, baseLogo.x + logoOffset.x),
          );
          const logoY = Math.min(
            maxY,
            Math.max(minY, baseLogo.y + logoOffset.y),
          );

          ctx.globalAlpha = logoOpacity;
          ctx.drawImage(logoImg, logoX, logoY, targetWidth, targetHeight);
        }

        ctx.globalAlpha = 1;

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
      logoState.url,
      watermarkMode,
      watermarkText,
      fontSize,
      opacity,
      logoOpacity,
      logoSizePercent,
      logoOffset.x,
      logoOffset.y,
      position,
      textColor,
      selectedOutputFormats,
      getBaseLogoRect,
    ],
  );

  // Live preview effect
  useEffect(() => {
    if (imageState.originalUrl) {
      processImage();
    }
  }, [
    imageState.originalUrl,
    logoState.url,
    watermarkMode,
    watermarkText,
    fontSize,
    opacity,
    logoOpacity,
    logoSizePercent,
    position,
    textColor,
    processImage,
  ]);

  useEffect(() => {
    updatePreviewMetrics();
    const onResize = () => updatePreviewMetrics();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [
    imageState.originalUrl,
    logoState.url,
    logoSizePercent,
    updatePreviewMetrics,
  ]);

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

    const baseName = `${imageState.originalFile?.name.split(".")[0] || "image"}_watermarked`;

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
      zip.file(
        `${baseName}_${variant.label.toLowerCase()}.${variant.extension}`,
        variant.blob,
      );
    });

    const zipBlob = await zip.generateAsync({ type: "blob" });
    const zipUrl = URL.createObjectURL(zipBlob);
    const link = document.createElement("a");
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
    setImageState((prev) => ({ ...prev, processedUrl: "" }));
    setWatermarkText(defaultWatermarkText);
    setFontSize(48);
    setFontSizeInput("48");
    setOpacity(0.5);
    setOpacityInput("50");
    setWatermarkMode("text");
    if (logoState.url) {
      URL.revokeObjectURL(logoState.url);
    }
    setLogoState({
      file: null,
      url: "",
      width: 0,
      height: 0,
    });
    setLogoOpacity(0.4);
    setLogoOpacityInput("40");
    setLogoSizePercent(20);
    setLogoSizeInput("20");
    setIsDraggingLogo(false);
    setLogoOffset({ x: 0, y: 0 });
    setPosition("bottom-right");
    setTextColor("#333333");
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
            name: tx(
              "Add Watermark - Free Online Watermark Tool",
              "Agregar Marca de Agua - Herramienta Gratis Online",
            ),
            description: tx(
              "Free online watermark tool. Add text watermarks to images with custom text, font size, opacity, color, and positioning. Protect your images and add copyright information instantly.",
              "Herramienta online gratis para agregar marca de agua. Agrega texto con tamano, opacidad, color y posicion personalizados para proteger tus imagenes.",
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
              tx(
                "Custom text watermarks",
                "Marcas de agua de texto personalizadas",
              ),
              tx(
                "Adjustable font size and opacity",
                "Tamano de fuente y opacidad ajustables",
              ),
              tx("Multiple position options", "Multiples opciones de posicion"),
              tx("Color customization", "Personalizacion de color"),
              tx(
                "Client-side processing for privacy",
                "Procesamiento local para mayor privacidad",
              ),
              tx("No registration required", "No requiere registro"),
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
              "How to Add Watermark to Images",
              "Como agregar marca de agua a imagenes",
            ),
            description: tx(
              "Learn how to add watermarks to your images online for free",
              "Aprende a agregar marcas de agua a tus imagenes online gratis",
            ),
            image: "https://pixselli.com/images/add-watermark-guide.jpg",
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
                  "Pixselli Watermark Tool",
                  "Herramienta de marca de agua de Pixselli",
                ),
              },
            ],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: tx("Upload Image", "Subir imagen"),
                text: tx(
                  "Upload your image by dragging and dropping or clicking to browse from your device",
                  "Sube tu imagen arrastrando y soltando o haciendo clic para explorar desde tu dispositivo",
                ),
                url: `${pageUrl}#step1`,
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: tx(
                  "Enter Watermark Text",
                  "Escribe el texto de la marca de agua",
                ),
                text: tx(
                  "Type your watermark text, such as copyright information or your brand name",
                  "Escribe el texto de tu marca de agua, como informacion de copyright o nombre de marca",
                ),
                url: `${pageUrl}#step2`,
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: tx("Customize Appearance", "Personaliza la apariencia"),
                text: tx(
                  "Adjust font size, opacity, color, and position to match your preferences",
                  "Ajusta tamano, opacidad, color y posicion segun tus preferencias",
                ),
                url: `${pageUrl}#step3`,
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: tx("Apply & Download", "Aplicar y descargar"),
                text: tx(
                  "Click 'Add Watermark' to apply and download your watermarked image",
                  "Haz clic en 'Agregar marca de agua' para aplicar y descargar tu imagen",
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
                  "Can I add custom text as a watermark?",
                  "Puedo agregar texto personalizado como marca de agua?",
                ),
                acceptedAnswer: {
                  "@type": "Answer",
                  text: tx(
                    "Yes! You can add any custom text as a watermark, including copyright symbols (©), your name, brand, or any other text you want to protect your images with.",
                    "Si. Puedes agregar cualquier texto personalizado como marca de agua, incluyendo simbolos de copyright (©), tu nombre o tu marca.",
                  ),
                },
              },
              {
                "@type": "Question",
                name: tx(
                  "Can I control the watermark opacity?",
                  "Puedo controlar la opacidad de la marca de agua?",
                ),
                acceptedAnswer: {
                  "@type": "Answer",
                  text: tx(
                    "Absolutely. You can adjust the opacity from fully transparent to fully opaque, allowing you to create subtle or prominent watermarks based on your needs.",
                    "Si. Puedes ajustar la opacidad desde muy transparente hasta totalmente visible, segun lo que necesites.",
                  ),
                },
              },
              {
                "@type": "Question",
                name: tx(
                  "What positions are available for watermarks?",
                  "Que posiciones hay disponibles para la marca de agua?",
                ),
                acceptedAnswer: {
                  "@type": "Answer",
                  text: tx(
                    "You can place watermarks in five positions: top-left, top-right, bottom-left, bottom-right, or center of the image.",
                    "Puedes colocar la marca de agua en cinco posiciones: superior izquierda, superior derecha, inferior izquierda, inferior derecha o centro.",
                  ),
                },
              },
              {
                "@type": "Question",
                name: tx(
                  "Will watermarking reduce image quality?",
                  "Agregar marca de agua reduce la calidad de la imagen?",
                ),
                acceptedAnswer: {
                  "@type": "Answer",
                  text: tx(
                    "No, the watermark is applied as an overlay without compressing or reducing the original image quality. The output maintains high quality.",
                    "No. La marca de agua se aplica como una capa sin comprimir ni reducir la calidad original de la imagen.",
                  ),
                },
              },
              {
                "@type": "Question",
                name: tx(
                  "Is my image secure when adding watermarks?",
                  "Mi imagen esta segura al agregar marcas de agua?",
                ),
                acceptedAnswer: {
                  "@type": "Answer",
                  text: tx(
                    "Yes! All watermark processing happens locally in your browser. Your images are never uploaded to any server, ensuring complete privacy and security.",
                    "Si. Todo el procesamiento se realiza localmente en tu navegador. Tus imagenes nunca se suben a ningun servidor.",
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
              "Pixselli Add Watermark Tool",
              "Herramienta Pixselli para agregar marca de agua",
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
                    {tx("Add Watermark", "Agregar marca de agua")}
                  </span>
                  <meta itemProp="position" content="2" />
                </li>
              </ol>
            </nav>

            {/* Page Header */}
            <header className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Droplet className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {tx("Add Watermark", "Agregar marca de agua")}
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {tx(
                  "Add text watermarks to your images with custom styling. Protect your photos with copyright information. Fast, secure, and works entirely in your browser.",
                  "Agrega marcas de agua de texto a tus imagenes con estilo personalizado. Protege tus fotos con informacion de copyright. Rapido, seguro y totalmente en tu navegador.",
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
                    {tx("Upload & Preview", "Subir y previsualizar")}
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
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                          <Upload className="w-7 h-7 text-white" />
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
                      <div
                        ref={previewContainerRef}
                        className="relative rounded-xl overflow-hidden bg-gray-100 border border-gray-200"
                      >
                        <img
                          ref={previewImageRef}
                          src={
                            imageState.processedUrl || imageState.originalUrl
                          }
                          alt={tx(
                            "Watermarked image preview",
                            "Vista previa con marca de agua",
                          )}
                          className="w-full h-auto"
                          style={{ maxHeight: "500px", objectFit: "contain" }}
                          onLoad={updatePreviewMetrics}
                        />

                        {(watermarkMode === "logo" ||
                          watermarkMode === "both") &&
                          logoState.url &&
                          previewMetrics && (
                            <div
                              className="absolute pointer-events-none"
                              style={{
                                left: `${previewMetrics.offsetLeft}px`,
                                top: `${previewMetrics.offsetTop}px`,
                                width: `${previewMetrics.renderedWidth}px`,
                                height: `${previewMetrics.renderedHeight}px`,
                              }}
                            >
                              <div
                                role="button"
                                tabIndex={0}
                                className={`absolute pointer-events-auto border-2 border-dashed rounded-md ${
                                  isDraggingLogo
                                    ? "border-amber-600 shadow-lg"
                                    : "border-amber-400/80 hover:border-amber-600"
                                } bg-amber-100/20 cursor-move transition-colors`}
                                style={{
                                  width: `${Math.max(
                                    16,
                                    (imageState.originalWidth *
                                      (logoSizePercent / 100)) /
                                      previewMetrics.scaleX,
                                  )}px`,
                                  height: `${Math.max(
                                    16,
                                    (imageState.originalWidth *
                                      (logoSizePercent / 100)) /
                                      (logoState.width /
                                        Math.max(1, logoState.height)) /
                                      previewMetrics.scaleY,
                                  )}px`,
                                  left: `${Math.max(
                                    0,
                                    Math.min(
                                      previewMetrics.renderedWidth,
                                      (() => {
                                        const ratio =
                                          logoState.width /
                                          Math.max(1, logoState.height);
                                        const previewW =
                                          Math.max(
                                            24,
                                            Math.round(
                                              (imageState.originalWidth *
                                                logoSizePercent) /
                                                100,
                                            ),
                                          ) / previewMetrics.scaleX;
                                        const previewH =
                                          Math.max(
                                            24,
                                            Math.round(previewW / ratio),
                                          ) / previewMetrics.scaleY;
                                        const base = (() => {
                                          const padding = 20;
                                          switch (position) {
                                            case "top-left":
                                              return { x: padding, y: padding };
                                            case "top-right":
                                              return {
                                                x:
                                                  imageState.originalWidth -
                                                  Math.max(
                                                    24,
                                                    Math.round(
                                                      (imageState.originalWidth *
                                                        logoSizePercent) /
                                                        100,
                                                    ),
                                                  ) -
                                                  padding,
                                                y: padding,
                                              };
                                            case "bottom-left":
                                              return {
                                                x: padding,
                                                y:
                                                  imageState.originalHeight -
                                                  Math.max(
                                                    24,
                                                    Math.round(
                                                      Math.max(
                                                        24,
                                                        Math.round(
                                                          (imageState.originalWidth *
                                                            logoSizePercent) /
                                                            100,
                                                        ),
                                                      ) / ratio,
                                                    ),
                                                  ) -
                                                  padding,
                                              };
                                            case "bottom-right":
                                              return {
                                                x:
                                                  imageState.originalWidth -
                                                  Math.max(
                                                    24,
                                                    Math.round(
                                                      (imageState.originalWidth *
                                                        logoSizePercent) /
                                                        100,
                                                    ),
                                                  ) -
                                                  padding,
                                                y:
                                                  imageState.originalHeight -
                                                  Math.max(
                                                    24,
                                                    Math.round(
                                                      Math.max(
                                                        24,
                                                        Math.round(
                                                          (imageState.originalWidth *
                                                            logoSizePercent) /
                                                            100,
                                                        ),
                                                      ) / ratio,
                                                    ),
                                                  ) -
                                                  padding,
                                              };
                                            case "center":
                                              return {
                                                x:
                                                  (imageState.originalWidth -
                                                    Math.max(
                                                      24,
                                                      Math.round(
                                                        (imageState.originalWidth *
                                                          logoSizePercent) /
                                                          100,
                                                      ),
                                                    )) /
                                                  2,
                                                y:
                                                  (imageState.originalHeight -
                                                    Math.max(
                                                      24,
                                                      Math.round(
                                                        Math.max(
                                                          24,
                                                          Math.round(
                                                            (imageState.originalWidth *
                                                              logoSizePercent) /
                                                              100,
                                                          ),
                                                        ) / ratio,
                                                      ),
                                                    )) /
                                                  2,
                                              };
                                            default:
                                              return { x: padding, y: padding };
                                          }
                                        })();
                                        return (
                                          (base.x + logoOffset.x) /
                                          previewMetrics.scaleX
                                        );
                                      })(),
                                    ),
                                  )}px`,
                                  top: `${Math.max(
                                    0,
                                    Math.min(
                                      previewMetrics.renderedHeight,
                                      (() => {
                                        const ratio =
                                          logoState.width /
                                          Math.max(1, logoState.height);
                                        const previewW =
                                          Math.max(
                                            24,
                                            Math.round(
                                              (imageState.originalWidth *
                                                logoSizePercent) /
                                                100,
                                            ),
                                          ) / previewMetrics.scaleX;
                                        const previewH =
                                          Math.max(
                                            24,
                                            Math.round(previewW / ratio),
                                          ) / previewMetrics.scaleY;
                                        const base = (() => {
                                          const padding = 20;
                                          switch (position) {
                                            case "top-left":
                                              return { x: padding, y: padding };
                                            case "top-right":
                                              return {
                                                x:
                                                  imageState.originalWidth -
                                                  Math.max(
                                                    24,
                                                    Math.round(
                                                      (imageState.originalWidth *
                                                        logoSizePercent) /
                                                        100,
                                                    ),
                                                  ) -
                                                  padding,
                                                y: padding,
                                              };
                                            case "bottom-left":
                                              return {
                                                x: padding,
                                                y:
                                                  imageState.originalHeight -
                                                  Math.max(
                                                    24,
                                                    Math.round(
                                                      Math.max(
                                                        24,
                                                        Math.round(
                                                          (imageState.originalWidth *
                                                            logoSizePercent) /
                                                            100,
                                                        ),
                                                      ) / ratio,
                                                    ),
                                                  ) -
                                                  padding,
                                              };
                                            case "bottom-right":
                                              return {
                                                x:
                                                  imageState.originalWidth -
                                                  Math.max(
                                                    24,
                                                    Math.round(
                                                      (imageState.originalWidth *
                                                        logoSizePercent) /
                                                        100,
                                                    ),
                                                  ) -
                                                  padding,
                                                y:
                                                  imageState.originalHeight -
                                                  Math.max(
                                                    24,
                                                    Math.round(
                                                      Math.max(
                                                        24,
                                                        Math.round(
                                                          (imageState.originalWidth *
                                                            logoSizePercent) /
                                                            100,
                                                        ),
                                                      ) / ratio,
                                                    ),
                                                  ) -
                                                  padding,
                                              };
                                            case "center":
                                              return {
                                                x:
                                                  (imageState.originalWidth -
                                                    Math.max(
                                                      24,
                                                      Math.round(
                                                        (imageState.originalWidth *
                                                          logoSizePercent) /
                                                          100,
                                                      ),
                                                    )) /
                                                  2,
                                                y:
                                                  (imageState.originalHeight -
                                                    Math.max(
                                                      24,
                                                      Math.round(
                                                        Math.max(
                                                          24,
                                                          Math.round(
                                                            (imageState.originalWidth *
                                                              logoSizePercent) /
                                                              100,
                                                          ),
                                                        ) / ratio,
                                                      ),
                                                    )) /
                                                  2,
                                              };
                                            default:
                                              return { x: padding, y: padding };
                                          }
                                        })();
                                        return (
                                          (base.y + logoOffset.y) /
                                          previewMetrics.scaleY
                                        );
                                      })(),
                                    ),
                                  )}px`,
                                }}
                                onPointerDown={handleLogoDragStart}
                                onPointerMove={handleLogoDragMove}
                                onPointerUp={handleLogoDragEnd}
                                onPointerCancel={handleLogoDragEnd}
                                aria-label={tx(
                                  "Drag logo watermark to reposition",
                                  "Arrastra el logo para reposicionarlo",
                                )}
                              />
                            </div>
                          )}

                        <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg">
                          {imageState.originalWidth} ×{" "}
                          {imageState.originalHeight}
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
                    <Type className="w-6 h-6 text-blue-600" />
                    {tx("Watermark Settings", "Configuracion de marca de agua")}
                  </h2>

                  {imageState.originalUrl ? (
                    <div className="space-y-6">
                      {/* Watermark Mode */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          {tx("Watermark Type", "Tipo de marca de agua")}
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          <button
                            type="button"
                            onClick={() => setWatermarkMode("text")}
                            className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                              watermarkMode === "text"
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {tx("Text", "Texto")}
                          </button>
                          <button
                            type="button"
                            onClick={() => setWatermarkMode("logo")}
                            className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                              watermarkMode === "logo"
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {tx("Logo", "Logo")}
                          </button>
                          <button
                            type="button"
                            onClick={() => setWatermarkMode("both")}
                            className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                              watermarkMode === "both"
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {tx("Both", "Ambos")}
                          </button>
                        </div>
                      </div>

                      {/* Watermark Text */}
                      {(watermarkMode === "text" ||
                        watermarkMode === "both") && (
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {tx("Watermark Text", "Texto de la marca de agua")}
                          </label>
                          <input
                            type="text"
                            value={watermarkText}
                            onChange={(e) => setWatermarkText(e.target.value)}
                            placeholder={tx(
                              "© Your Watermark",
                              "© Tu marca de agua",
                            )}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                          />
                        </div>
                      )}

                      {/* Logo Watermark */}
                      {(watermarkMode === "logo" ||
                        watermarkMode === "both") && (
                        <div className="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-3 space-y-3">
                          <div className="flex items-center justify-between">
                            <label className="text-sm font-semibold text-gray-800">
                              {tx("Logo Watermark", "Marca de agua de logo")}
                            </label>
                            <button
                              type="button"
                              onClick={() => logoInputRef.current?.click()}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-amber-300 text-amber-700 text-xs font-medium hover:bg-amber-100 transition-colors"
                            >
                              <Upload className="w-3.5 h-3.5" />
                              {logoState.url
                                ? tx("Change Logo", "Cambiar logo")
                                : tx("Upload Logo", "Subir logo")}
                            </button>
                          </div>

                          <input
                            ref={logoInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleLogoSelect}
                            className="hidden"
                          />

                          {logoState.url ? (
                            <>
                              <div className="flex items-center gap-3">
                                <img
                                  src={logoState.url}
                                  alt={tx("Uploaded logo", "Logo subido")}
                                  className="w-12 h-12 rounded-md object-contain bg-white border border-amber-200"
                                />
                                <div className="text-xs text-gray-600">
                                  {logoState.width} × {logoState.height}
                                </div>
                              </div>

                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <label className="text-sm font-medium text-gray-700">
                                    {tx("Logo Size", "Tamano del logo")}
                                  </label>
                                  <div className="flex items-center gap-1">
                                    <input
                                      type="number"
                                      min="5"
                                      max="60"
                                      value={logoSizeInput}
                                      onChange={(e) => {
                                        setLogoSizeInput(e.target.value);
                                        const parsed = parseInt(
                                          e.target.value,
                                          10,
                                        );
                                        if (!Number.isNaN(parsed)) {
                                          const clamped = Math.min(
                                            60,
                                            Math.max(5, parsed),
                                          );
                                          setLogoSizePercent(clamped);
                                        }
                                      }}
                                      onBlur={() => {
                                        const parsed = parseInt(
                                          logoSizeInput,
                                          10,
                                        );
                                        const clamped = Number.isNaN(parsed)
                                          ? logoSizePercent
                                          : Math.min(60, Math.max(5, parsed));
                                        setLogoSizePercent(clamped);
                                        setLogoSizeInput(String(clamped));
                                      }}
                                      className="w-16 px-2 py-1.5 text-sm border border-amber-200 rounded-md focus:border-amber-500 focus:outline-none text-right"
                                    />
                                    <span className="text-xs text-gray-600">
                                      %
                                    </span>
                                  </div>
                                </div>
                                <input
                                  type="range"
                                  min="5"
                                  max="60"
                                  value={logoSizePercent}
                                  onChange={(e) => {
                                    const value = parseInt(e.target.value, 10);
                                    setLogoSizePercent(value);
                                    setLogoSizeInput(String(value));
                                  }}
                                  className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer accent-amber-600"
                                />
                              </div>

                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <label className="text-sm font-medium text-gray-700">
                                    {tx("Logo Opacity", "Opacidad del logo")}
                                  </label>
                                  <div className="flex items-center gap-1">
                                    <input
                                      type="number"
                                      min="10"
                                      max="100"
                                      value={logoOpacityInput}
                                      onChange={(e) => {
                                        setLogoOpacityInput(e.target.value);
                                        const parsed = parseInt(
                                          e.target.value,
                                          10,
                                        );
                                        if (!Number.isNaN(parsed)) {
                                          const clamped = Math.min(
                                            100,
                                            Math.max(10, parsed),
                                          );
                                          setLogoOpacity(clamped / 100);
                                        }
                                      }}
                                      onBlur={() => {
                                        const parsed = parseInt(
                                          logoOpacityInput,
                                          10,
                                        );
                                        const currentPercent = Math.round(
                                          logoOpacity * 100,
                                        );
                                        const clamped = Number.isNaN(parsed)
                                          ? currentPercent
                                          : Math.min(100, Math.max(10, parsed));
                                        setLogoOpacity(clamped / 100);
                                        setLogoOpacityInput(String(clamped));
                                      }}
                                      className="w-16 px-2 py-1.5 text-sm border border-amber-200 rounded-md focus:border-amber-500 focus:outline-none text-right"
                                    />
                                    <span className="text-xs text-gray-600">
                                      %
                                    </span>
                                  </div>
                                </div>
                                <input
                                  type="range"
                                  min="0.1"
                                  max="1"
                                  step="0.05"
                                  value={logoOpacity}
                                  onChange={(e) => {
                                    const value = parseFloat(e.target.value);
                                    setLogoOpacity(value);
                                    setLogoOpacityInput(
                                      String(Math.round(value * 100)),
                                    );
                                  }}
                                  className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer accent-amber-600"
                                />
                              </div>
                            </>
                          ) : (
                            <p className="text-xs text-gray-600">
                              {tx(
                                "Upload a transparent PNG logo for best results.",
                                "Sube un logo PNG transparente para mejores resultados.",
                              )}
                            </p>
                          )}
                        </div>
                      )}

                      {/* Compact Controls - Stacked */}
                      {(watermarkMode === "text" ||
                        watermarkMode === "both") && (
                        <div className="space-y-3">
                          {/* Font Size */}
                          <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-3">
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                              <div className="flex items-center justify-between sm:block sm:shrink-0 sm:w-20">
                                <label className="text-sm font-semibold text-gray-800">
                                  {tx("Font Size", "Tamano")}
                                </label>
                                <div className="flex items-center gap-1 sm:hidden">
                                  <input
                                    type="number"
                                    min="12"
                                    max="120"
                                    value={fontSizeInput}
                                    onChange={(e) =>
                                      handleFontSizeInputChange(e.target.value)
                                    }
                                    onBlur={handleFontSizeInputBlur}
                                    className="w-16 px-2 py-1.5 text-sm border border-blue-200 rounded-md focus:border-blue-500 focus:outline-none text-right"
                                  />
                                  <span className="text-xs font-medium text-gray-600">
                                    px
                                  </span>
                                </div>
                              </div>
                              <input
                                type="range"
                                value={fontSize}
                                onChange={(e) =>
                                  handleFontSizeSlider(parseInt(e.target.value))
                                }
                                className="w-full sm:flex-1 h-2 bg-white rounded-lg appearance-none cursor-pointer accent-blue-600"
                                min="12"
                                max="120"
                              />
                              <div className="hidden sm:flex items-center gap-1 shrink-0">
                                <input
                                  type="number"
                                  min="12"
                                  max="120"
                                  value={fontSizeInput}
                                  onChange={(e) =>
                                    handleFontSizeInputChange(e.target.value)
                                  }
                                  onBlur={handleFontSizeInputBlur}
                                  className="w-16 px-2 py-1.5 text-sm border border-blue-200 rounded-md focus:border-blue-500 focus:outline-none text-right"
                                />
                                <span className="text-xs font-medium text-gray-600">
                                  px
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Opacity */}
                          <div className="rounded-xl border border-purple-100 bg-gradient-to-br from-purple-50 to-fuchsia-50 p-3">
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                              <div className="flex items-center justify-between sm:block sm:shrink-0 sm:w-20">
                                <label className="text-sm font-semibold text-gray-800">
                                  {tx("Opacity", "Opacidad")}
                                </label>
                                <div className="flex items-center gap-1 sm:hidden">
                                  <input
                                    type="number"
                                    min="10"
                                    max="100"
                                    value={opacityInput}
                                    onChange={(e) =>
                                      handleOpacityInputChange(e.target.value)
                                    }
                                    onBlur={handleOpacityInputBlur}
                                    className="w-16 px-2 py-1.5 text-sm border border-purple-200 rounded-md focus:border-purple-500 focus:outline-none text-right"
                                  />
                                  <span className="text-xs font-medium text-gray-600">
                                    %
                                  </span>
                                </div>
                              </div>
                              <input
                                type="range"
                                value={opacity}
                                onChange={(e) =>
                                  handleOpacitySlider(
                                    parseFloat(e.target.value),
                                  )
                                }
                                className="w-full sm:flex-1 h-2 bg-white rounded-lg appearance-none cursor-pointer accent-purple-600"
                                min="0.1"
                                max="1"
                                step="0.05"
                              />
                              <div className="hidden sm:flex items-center gap-1 shrink-0">
                                <input
                                  type="number"
                                  min="10"
                                  max="100"
                                  value={opacityInput}
                                  onChange={(e) =>
                                    handleOpacityInputChange(e.target.value)
                                  }
                                  onBlur={handleOpacityInputBlur}
                                  className="w-16 px-2 py-1.5 text-sm border border-purple-200 rounded-md focus:border-purple-500 focus:outline-none text-right"
                                />
                                <span className="text-xs font-medium text-gray-600">
                                  %
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Text Color */}
                          <div className="rounded-xl border border-emerald-200/70 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-3 shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                              <label className="block text-sm font-semibold text-gray-800">
                                {tx("Text Color", "Color")}
                              </label>
                              <div className="flex items-center gap-2 rounded-full bg-white/80 border border-emerald-200 px-2.5 py-1">
                                <span className="text-[11px] font-semibold text-gray-600">
                                  {tx("Live", "Vista")}
                                </span>
                                <span
                                  className="w-4 h-4 rounded-full border border-gray-300 shadow-inner"
                                  style={{ backgroundColor: textColor }}
                                />
                              </div>
                            </div>

                            <div className="flex items-center gap-2 mb-2.5">
                              <div className="relative w-11 h-10 shrink-0 rounded-lg border border-emerald-300 bg-white shadow-sm overflow-hidden">
                                <input
                                  type="color"
                                  value={textColor}
                                  onChange={(e) => setTextColor(e.target.value)}
                                  className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                                  aria-label={tx("Pick color", "Elegir color")}
                                />
                                <div
                                  className="w-full h-full"
                                  style={{ backgroundColor: textColor }}
                                />
                              </div>
                              <input
                                type="text"
                                value={textColor}
                                onChange={(e) => setTextColor(e.target.value)}
                                className="flex-1 px-3 py-2 text-sm border border-emerald-300 rounded-lg bg-white/90 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-all font-mono uppercase tracking-wide"
                              />
                            </div>

                            <div className="grid grid-cols-7 gap-0">
                              {QUICK_COLORS.map((color) => (
                                <button
                                  key={color}
                                  type="button"
                                  onClick={() => setTextColor(color)}
                                  className={`relative h-9 w-9 rounded-full transition-all ${
                                    textColor.toLowerCase() ===
                                    color.toLowerCase()
                                      ? "ring-2 ring-gray-900 ring-offset-1 scale-105"
                                      : "hover:scale-105"
                                  }`}
                                  style={{ backgroundColor: color }}
                                  aria-label={`${tx("Select color", "Seleccionar color")}: ${color}`}
                                  title={color}
                                >
                                  {textColor.toLowerCase() ===
                                    color.toLowerCase() && (
                                    <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-white drop-shadow">
                                      ✓
                                    </span>
                                  )}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Position */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          {tx("Position", "Posicion")}
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          <button
                            onClick={() => setPosition("top-left")}
                            className={`py-3 px-4 rounded-lg font-medium transition-all ${
                              position === "top-left"
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {tx("Top Left", "Superior izquierda")}
                          </button>
                          <button
                            onClick={() => setPosition("top-right")}
                            className={`py-3 px-4 rounded-lg font-medium transition-all ${
                              position === "top-right"
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {tx("Top Right", "Superior derecha")}
                          </button>
                          <button
                            onClick={() => setPosition("center")}
                            className={`py-3 px-4 rounded-lg font-medium transition-all ${
                              position === "center"
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {tx("Center", "Centro")}
                          </button>
                          <button
                            onClick={() => setPosition("bottom-left")}
                            className={`py-3 px-4 rounded-lg font-medium transition-all col-start-1 ${
                              position === "bottom-left"
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {tx("Bottom Left", "Inferior izquierda")}
                          </button>
                          <button
                            onClick={() => setPosition("bottom-right")}
                            className={`py-3 px-4 rounded-lg font-medium transition-all ${
                              position === "bottom-right"
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {tx("Bottom Right", "Inferior derecha")}
                          </button>
                        </div>
                      </div>

                      {/* Download Formats */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          {tx("Download Formats", "Formatos de descarga")}
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          <button
                            onClick={() =>
                              handleOutputFormatToggle("image/jpeg")
                            }
                            className={`py-3 px-4 rounded-lg font-medium transition-all ${selectedOutputFormats.includes("image/jpeg") ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                          >
                            JPG
                          </button>
                          <button
                            onClick={() =>
                              handleOutputFormatToggle("image/png")
                            }
                            className={`py-3 px-4 rounded-lg font-medium transition-all ${selectedOutputFormats.includes("image/png") ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                          >
                            PNG
                          </button>
                          <button
                            onClick={() =>
                              handleOutputFormatToggle("image/webp")
                            }
                            className={`py-3 px-4 rounded-lg font-medium transition-all ${selectedOutputFormats.includes("image/webp") ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                          >
                            WebP
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          {tx(
                            "Single format = single file, multiple formats = ZIP download",
                            "Formato unico = archivo unico, varios formatos = descarga ZIP",
                          )}
                        </p>
                      </div>

                      {/* Info Box */}
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Droplet className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-blue-900 font-medium mb-1">
                              {tx(
                                "How to Add Watermark",
                                "Como agregar marca de agua",
                              )}
                            </p>
                            <p className="text-xs text-blue-700">
                              {tx(
                                'Customize your watermark text, appearance, and position above, then click "Add Watermark" to apply.',
                                'Personaliza el texto, la apariencia y la posicion de tu marca de agua arriba y luego haz clic en "Agregar marca de agua".',
                              )}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col gap-3 pt-6">
                        <button
                          onClick={downloadImage}
                          disabled={outputVariants.length === 0 || processing}
                          className="w-full py-4 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all font-bold shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                        >
                          <Download className="w-6 h-6" />
                          {processing
                            ? tx("Processing...", "Procesando...")
                            : outputVariants.length > 1
                              ? tx(
                                  "Download Watermarked Images (ZIP)",
                                  "Descargar imagenes (ZIP)",
                                )
                              : tx(
                                  "Download Watermarked Image",
                                  "Descargar imagen",
                                )}
                        </button>
                        <button
                          onClick={resetToOriginal}
                          className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium flex items-center justify-center gap-2"
                        >
                          <RotateCcw className="w-5 h-5" />
                          {tx(
                            "Start Over / Reset",
                            "Comenzar de nuevo / Restablecer",
                          )}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Droplet className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {tx(
                            "Ready to Add Watermark",
                            "Listo para agregar marca de agua",
                          )}
                        </h3>
                        <p className="text-gray-600 max-w-sm mx-auto">
                          {tx(
                            "Upload an image to start adding watermarks",
                            "Sube una imagen para comenzar a agregar marcas de agua",
                          )}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* About Section */}
            <section className="bg-white rounded-xl shadow-md p-8 border border-gray-200 mb-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {tx(
                  "About Add Watermark Tool",
                  "Acerca de la herramienta para agregar marca de agua",
                )}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {tx(
                    "Pixselli Add Watermark is a simple online tool that helps you put your name, logo, or copyright text on any picture. It is perfect for protecting your photos from misuse and showing that the image belongs to you.",
                    "Pixselli Add Watermark es una herramienta online sencilla que te ayuda a poner tu nombre, logo o texto de copyright en cualquier imagen. Es perfecta para proteger tus fotos y mostrar autoria.",
                  )}
                </p>
                <p>
                  {tx(
                    "Just upload your image, type your text, choose the size, color, opacity, and position, then apply and download. Everything runs inside your browser, so your images stay on your device. No signup, no limits, and completely free to use.",
                    "Solo sube tu imagen, escribe el texto, elige tamano, color, opacidad y posicion, luego aplica y descarga. Todo funciona en tu navegador, asi que tus imagenes se quedan en tu dispositivo. Sin registro, sin limites y gratis.",
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
                  <Type className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {tx("Custom Text", "Texto personalizado")}
                </h3>
                <p className="text-gray-600">
                  {tx(
                    "Add any text as watermark with full customization options.",
                    "Agrega cualquier texto como marca de agua con opciones de personalizacion completas.",
                  )}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Droplet className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {tx("Adjustable Opacity", "Opacidad ajustable")}
                </h3>
                <p className="text-gray-600">
                  {tx(
                    "Control watermark transparency from subtle to prominent.",
                    "Controla la transparencia de la marca de agua, de sutil a destacada.",
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
                  "How to Use Add Watermark Tool",
                  "Como usar la herramienta para agregar marca de agua",
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
                          "Click the upload area or drag and drop your image file. Supports JPG, PNG, WebP formats.",
                          "Haz clic en el area de subida o arrastra y suelta tu archivo de imagen. Compatible con JPG, PNG y WebP.",
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
                          "Enter Watermark Text",
                          "Escribe el texto de la marca de agua",
                        )}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {tx(
                          "Type your watermark text, such as copyright information, your name, or brand.",
                          "Escribe el texto de tu marca de agua, como informacion de copyright, tu nombre o marca.",
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
                          "Customize Appearance",
                          "Personaliza la apariencia",
                        )}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {tx(
                          "Adjust font size, opacity, color, and choose from 5 position options for your watermark.",
                          "Ajusta tamano, opacidad y color, y elige entre 5 posiciones para tu marca de agua.",
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
                          'Click "Add Watermark" to apply. Preview the result and download your protected image.',
                          'Haz clic en "Agregar marca de agua" para aplicar. Previsualiza el resultado y descarga tu imagen protegida.',
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
                    "Use white text with 50% opacity for a professional, subtle watermark that doesn't distract from your image.",
                    "Usa texto blanco con 50% de opacidad para una marca de agua sutil y profesional que no distraiga de tu imagen.",
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
                        "Can I add custom text as a watermark?",
                        "Puedo agregar texto personalizado como marca de agua?",
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
                          "Yes! You can add any custom text as a watermark, including copyright symbols (©), your name, brand, or any other text you want to protect your images with.",
                          "Si. Puedes agregar cualquier texto personalizado como marca de agua, incluyendo simbolos de copyright (©), tu nombre o marca.",
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
                        "Can I control the watermark opacity?",
                        "Puedo controlar la opacidad de la marca de agua?",
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
                          "Absolutely. You can adjust the opacity from fully transparent to fully opaque, allowing you to create subtle or prominent watermarks based on your needs.",
                          "Si. Puedes ajustar la opacidad desde muy transparente hasta totalmente visible, segun lo que necesites.",
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
                        "What positions are available for watermarks?",
                        "Que posiciones hay disponibles para la marca de agua?",
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
                          "You can place watermarks in five positions: top-left, top-right, bottom-left, bottom-right, or center of the image.",
                          "Puedes colocar la marca de agua en cinco posiciones: superior izquierda, superior derecha, inferior izquierda, inferior derecha o centro.",
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
                        "Will watermarking reduce image quality?",
                        "Agregar marca de agua reduce la calidad de la imagen?",
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
                          "No, the watermark is applied as an overlay without compressing or reducing the original image quality. The output maintains high quality.",
                          "No. La marca de agua se aplica como una capa sin comprimir ni reducir la calidad original de la imagen.",
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
                        "Is my image secure when adding watermarks?",
                        "Mi imagen esta segura al agregar marcas de agua?",
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
                          "Yes! All watermark processing happens locally in your browser. Your images are never uploaded to any server, ensuring complete privacy and security.",
                          "Si. Todo el procesamiento se realiza localmente en tu navegador. Tus imagenes nunca se suben a ningun servidor.",
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
