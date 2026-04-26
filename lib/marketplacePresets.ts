export interface MarketplacePreset {
  id: string;
  name: string;
  width: number;
  height: number;
  category: string;
  note?: string;
}

export const MARKETPLACE_PRESET_CATEGORY = 'Ecommerce / Marketplace Sizes';

// Central place to add/edit marketplace presets so all tools stay consistent.
export const MARKETPLACE_PRESETS: MarketplacePreset[] = [
  {
    id: 'amazon-product-image',
    name: 'Amazon',
    width: 2000,
    height: 2000,
    category: MARKETPLACE_PRESET_CATEGORY,
    note: 'Use for both main and gallery images. White background (#FFFFFF), product fill ~85%.',
  },
  {
    id: 'mercado-libre-1200',
    name: 'Mercado Libre',
    width: 1200,
    height: 1200,
    category: MARKETPLACE_PRESET_CATEGORY,
    note: 'Avoid logos, text, and watermarks.',
  },
  {
    id: 'walmart-2000',
    name: 'Walmart',
    width: 2000,
    height: 2000,
    category: MARKETPLACE_PRESET_CATEGORY,
    note: 'Centered product. White background required.',
  },
  {
    id: 'shopify-2048',
    name: 'Shopify',
    width: 2048,
    height: 2048,
    category: MARKETPLACE_PRESET_CATEGORY,
    note: 'Square product format recommended.',
  },
  {
    id: 'tiktok-shop-product-image-1080',
    name: 'TikTok Shop',
    width: 1080,
    height: 1080,
    category: MARKETPLACE_PRESET_CATEGORY,
    note: 'Square (1:1). Recommended to upload at least 1080×1080 for best clarity.',
  },
];
