import { MARKETPLACE_PRESETS } from '@/lib/marketplacePresets';

export interface OutputSizePreset {
  id: string;
  name: string;
  width: number;
  height: number;
  category: string;
  note?: string;
}

export const SOCIAL_PRESET_CATEGORY = 'Social Media';

export const SOCIAL_PRESETS: OutputSizePreset[] = [
  { id: 'instagram-post', name: 'Instagram Post', width: 1080, height: 1080, category: SOCIAL_PRESET_CATEGORY },
  { id: 'instagram-story', name: 'Instagram Story', width: 1080, height: 1920, category: SOCIAL_PRESET_CATEGORY },
  { id: 'facebook-cover', name: 'Facebook Cover', width: 820, height: 312, category: SOCIAL_PRESET_CATEGORY },
  { id: 'twitter-header', name: 'Twitter Header', width: 1500, height: 500, category: SOCIAL_PRESET_CATEGORY },
  { id: 'linkedin-banner', name: 'LinkedIn Banner', width: 1584, height: 396, category: SOCIAL_PRESET_CATEGORY },
  { id: 'youtube-thumbnail', name: 'YouTube Thumbnail', width: 1280, height: 720, category: SOCIAL_PRESET_CATEGORY },
  { id: 'youtube-banner', name: 'YouTube Banner', width: 2560, height: 1440, category: SOCIAL_PRESET_CATEGORY },
];

export const OUTPUT_SIZE_PRESETS: OutputSizePreset[] = [
  ...SOCIAL_PRESETS,
  ...MARKETPLACE_PRESETS,
];
