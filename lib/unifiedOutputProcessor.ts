export const DEFAULT_MARKETPLACE_MIN_SAFE_AREA = 10;

export interface UnifiedSourceRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface UnifiedLayoutParams {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  image: HTMLImageElement;
  targetWidth: number;
  targetHeight: number;
  category?: string;
  marketplaceCategory: string;
  safeAreaPercent: number;
  minimumMarketplaceSafeArea?: number;
  applyUnifiedLayout: boolean;
  paddingColor?: string;
  showGuides?: boolean;
  guideColor?: string;
  guideDash?: number[];
  sourceRect?: UnifiedSourceRect;
  forceBackgroundFill?: boolean;
}

export interface UnifiedLayoutResult {
  effectiveSafeAreaPercent: number;
  safeRect: { x: number; y: number; width: number; height: number };
  drawRect: { x: number; y: number; width: number; height: number };
}

export function normalizeFileToken(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9\s-]/g, ' ')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function parseMarketplaceToken(params: {
  category: string;
  displayName: string;
  fallbackId: string;
  marketplaceCategory: string;
}): string {
  const { category, displayName, fallbackId, marketplaceCategory } = params;
  if (category !== marketplaceCategory) {
    return normalizeFileToken(displayName || fallbackId);
  }
  const parts = displayName
    .split('-')
    .map((part) => part.trim())
    .filter(Boolean);
  const marketplace = normalizeFileToken(parts[0] || displayName || fallbackId);
  return marketplace || normalizeFileToken(fallbackId);
}

export function renderUnifiedOutputFrame(params: UnifiedLayoutParams): UnifiedLayoutResult {
  const {
    canvas,
    ctx,
    image,
    targetWidth,
    targetHeight,
    category = '',
    marketplaceCategory,
    safeAreaPercent,
    minimumMarketplaceSafeArea = DEFAULT_MARKETPLACE_MIN_SAFE_AREA,
    applyUnifiedLayout,
    paddingColor = '#FFFFFF',
    showGuides = false,
    guideColor = 'rgba(147, 51, 234, 0.9)',
    guideDash = [10, 8],
    sourceRect,
    forceBackgroundFill = false,
  } = params;

  canvas.width = targetWidth;
  canvas.height = targetHeight;

  const minimumMargin = category === marketplaceCategory ? minimumMarketplaceSafeArea : 0;
  const effectiveSafeAreaPercent = applyUnifiedLayout ? Math.max(safeAreaPercent, minimumMargin) : 0;

  const safeMarginX = Math.round((targetWidth * effectiveSafeAreaPercent) / 100);
  const safeMarginY = Math.round((targetHeight * effectiveSafeAreaPercent) / 100);
  const safeWidth = targetWidth - safeMarginX * 2;
  const safeHeight = targetHeight - safeMarginY * 2;

  const sourceWidth = sourceRect?.width ?? image.width;
  const sourceHeight = sourceRect?.height ?? image.height;

  const fitScale = applyUnifiedLayout
    ? Math.min(safeWidth / sourceWidth, safeHeight / sourceHeight)
    : Math.min(targetWidth / sourceWidth, targetHeight / sourceHeight);

  const drawWidth = Math.max(1, Math.round(sourceWidth * fitScale));
  const drawHeight = Math.max(1, Math.round(sourceHeight * fitScale));
  const drawX = Math.round((targetWidth - drawWidth) / 2);
  const drawY = Math.round((targetHeight - drawHeight) / 2);

  if (forceBackgroundFill) {
    ctx.fillStyle = paddingColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  if (sourceRect) {
    ctx.drawImage(
      image,
      sourceRect.x,
      sourceRect.y,
      sourceRect.width,
      sourceRect.height,
      drawX,
      drawY,
      drawWidth,
      drawHeight
    );
  } else {
    ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
  }

  if (applyUnifiedLayout && showGuides) {
    ctx.strokeStyle = guideColor;
    ctx.lineWidth = Math.max(2, Math.round(Math.min(targetWidth, targetHeight) * 0.006));
    ctx.setLineDash(guideDash);
    ctx.strokeRect(safeMarginX, safeMarginY, safeWidth, safeHeight);
    ctx.setLineDash([]);
  }

  return {
    effectiveSafeAreaPercent,
    safeRect: {
      x: safeMarginX,
      y: safeMarginY,
      width: safeWidth,
      height: safeHeight,
    },
    drawRect: {
      x: drawX,
      y: drawY,
      width: drawWidth,
      height: drawHeight,
    },
  };
}
