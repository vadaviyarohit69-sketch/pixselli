import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pixselli.com';

  const nonToolPages = [
    'about',
    'contact',
    'privacy',
    'terms',
    'disclaimer',
    'blog',
    'blog/how-to-compress-images-without-losing-quality',
    'blog/how-to-convert-png-to-jpg-online-fast-free',
    'blog/instagram-image-size-guide-posts-reels-stories-2025',
    'blog/jpg-vs-png-vs-webp-which-image-format-should-you-use',
    'blog/the-complete-beginners-guide-to-image-optimization',
    'blog/what-is-heic-format-complete-guide',
    'blog/why-image-compression-is-important-for-seo-and-page-speed',
  ];

  const getNonToolPageMeta = (page: string) => {
    if (page === 'about') {
      return { changeFrequency: 'monthly' as const, priority: 0.7 };
    }

    if (page === 'contact') {
      return { changeFrequency: 'monthly' as const, priority: 0.6 };
    }

    if (page === 'privacy' || page === 'terms' || page === 'disclaimer') {
      return { changeFrequency: 'yearly' as const, priority: 0.5 };
    }

    if (page === 'blog') {
      return { changeFrequency: 'weekly' as const, priority: 0.8 };
    }

    return { changeFrequency: 'monthly' as const, priority: 0.75 };
  };
  
  // All actual tool pages
  const tools = [
    // Image Editing Tools
    'image-resizer',
    'image-cropper',
    'passport-photo-maker',
    'flip-image',
    'add-watermark',
    'black-and-white',
    'add-date',
    'blur-face',
    'reduce-size',
    'youtube-banner',
    'resize-to-inches',
    'resize-to-mm',
    'upsc-photo',
    'signature-resizer',
    'rrb-photo',
    
    // Image Compression Tools
    'image-compressor',
    'compress-10kb',
    'compress-20kb',
    'compress-30kb',
    'compress-40kb',
    'compress-50kb',
    'compress-60kb',
    'compress-70kb',
    'compress-80kb',
    'compress-90kb',
    'compress-100kb',
    'compress-200kb',
    'compress-percentage',
    'lossless-compression',
    'compress-for-web',
    'compress-for-email',
    'compress-for-whatsapp',
    'compress-for-forms',
    'jpeg-compressor',
    'jpg-compressor',
    'png-compressor',
    'webp-compressor',
    'gif-compressor',
    
    // Image Format Converters
    'png-to-jpg',
    'jpg-to-png',
    'jpg-to-jpeg',
    'webp-to-jpg',
    'jpg-to-webp',
    'png-to-webp',
    'webp-to-png',
    'heic-to-jpg',
    'jpg-to-heic',
    'heic-to-png',
    'png-to-heic',
    'heic-to-webp',
    'webp-to-heic',
    'avif-to-jpg',
    'jpg-to-avif',
    'avif-to-png',
    'avif-to-webp',
    'gif-to-jpg',
    'jpg-to-gif',
    'bmp-to-jpg',
    'jpg-to-bmp',
    'ico-to-png',
    'png-to-ico',
    
    // PDF Tools
    'jpg-to-pdf',
    'png-to-pdf',
    'webp-to-pdf',
    'heic-to-pdf',
    'avif-to-pdf',
    'pdf-to-jpg',
    'pdf-to-png',
    'pdf-to-webp',
  ];

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/pt`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/fr`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/de`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/it`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ];

  const defaultNonToolPages = nonToolPages.map((page) => {
    const meta = getNonToolPageMeta(page);

    return {
      url: `${baseUrl}/${page}`,
      lastModified: new Date(),
      changeFrequency: meta.changeFrequency,
      priority: meta.priority,
    };
  });

  const localizedNonToolPages = nonToolPages.map((page) => {
    const meta = getNonToolPageMeta(page);

    return {
      url: `${baseUrl}/es/${page}`,
      lastModified: new Date(),
      changeFrequency: meta.changeFrequency,
      priority: meta.priority,
    };
  });

  // Tool pages - correct URLs without /tools/ prefix
  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/${tool}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const localizedToolPages = tools.map((tool) => ({
    url: `${baseUrl}/es/${tool}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const blogPages = nonToolPages.filter((page) => page === 'blog' || page.startsWith('blog/'));
  const extraLocaleBlogPages = ['pt', 'fr', 'de', 'it'].flatMap((locale) =>
    blogPages.map((page) => {
      const meta = getNonToolPageMeta(page);
      return {
        url: `${baseUrl}/${locale}/${page}`,
        lastModified: new Date(),
        changeFrequency: meta.changeFrequency,
        priority: meta.priority,
      };
    })
  );

  const extraLocaleImageResizerPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/image-resizer`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleImageCropperPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/image-cropper`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocalePassportPhotoMakerPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/passport-photo-maker`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleFlipImagePages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/flip-image`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleAddWatermarkPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/add-watermark`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleBlackAndWhitePages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/black-and-white`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleAddDatePages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/add-date`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleBlurFacePages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/blur-face`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleReduceSizePages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/reduce-size`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleYoutubeBannerPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/youtube-banner`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleResizeToInchesPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/resize-to-inches`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleResizeToMmPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/resize-to-mm`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleSignatureResizerPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/signature-resizer`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleUpscPhotoPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/upsc-photo`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleRotateImagePages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/rotate-image`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleRrbPhotoPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/rrb-photo`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleImageCompressorPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/image-compressor`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleCompress10KbPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/compress-10kb`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleCompress20KbPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/compress-20kb`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleCompress30KbPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/compress-30kb`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleCompress40KbPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/compress-40kb`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleCompress50KbPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/compress-50kb`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleCompress60KbPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/compress-60kb`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleCompress70KbPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/compress-70kb`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleCompress80KbPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/compress-80kb`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleCompress90KbPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/compress-90kb`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleCompress100KbPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/compress-100kb`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleCompress200KbPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/compress-200kb`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleCompressPercentagePages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/compress-percentage`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleLosslessCompressionPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/lossless-compression`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleCompressForWebPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/compress-for-web`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleCompressForEmailPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/compress-for-email`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleCompressForWhatsappPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/compress-for-whatsapp`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleCompressForFormsPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/compress-for-forms`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleGifCompressorPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/gif-compressor`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleWebpCompressorPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/webp-compressor`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocalePngCompressorPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/png-compressor`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleJpgCompressorPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/jpg-compressor`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleJpegCompressorPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/jpeg-compressor`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleHeicToJpgPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/heic-to-jpg`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleHeicToPngPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/heic-to-png`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocalePngToHeicPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/png-to-heic`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleHeicToWebpPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/heic-to-webp`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleWebpToHeicPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/webp-to-heic`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleAvifToJpgPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/avif-to-jpg`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleAvifToPngPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/avif-to-png`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleAvifToWebpPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/avif-to-webp`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleGifToJpgPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/gif-to-jpg`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleJpgToGifPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/jpg-to-gif`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleBmpToJpgPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/bmp-to-jpg`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleJpgToBmpPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/jpg-to-bmp`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleIcoToPngPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/ico-to-png`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocalePngToIcoPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/png-to-ico`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleJpgToAvifPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/jpg-to-avif`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleJpgToHeicPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/jpg-to-heic`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocalePngToJpgPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/png-to-jpg`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleJpgToPngPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/jpg-to-png`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleJpgToJpegPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/jpg-to-jpeg`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleWebpToJpgPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/webp-to-jpg`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleJpgToWebpPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/jpg-to-webp`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocalePngToWebpPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/png-to-webp`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleWebpToPngPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/webp-to-png`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleJpgToPdfPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/jpg-to-pdf`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocalePngToPdfPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/png-to-pdf`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleWebpToPdfPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/webp-to-pdf`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleHeicToPdfPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/heic-to-pdf`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleAvifToPdfPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/avif-to-pdf`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocaleAboutPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/about`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const extraLocaleContactPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/contact`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const extraLocalePrivacyPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/privacy`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  const extraLocaleTermsPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/terms`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  const extraLocaleDisclaimerPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/disclaimer`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  const extraLocalePdfToJpgPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/pdf-to-jpg`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocalePdfToPngPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/pdf-to-png`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const extraLocalePdfToWebpPages = ['pt', 'fr', 'de', 'it'].map((locale) => ({
    url: `${baseUrl}/${locale}/pdf-to-webp`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [
    ...staticPages,
    ...defaultNonToolPages,
    ...localizedNonToolPages,
    ...toolPages,
    ...localizedToolPages,
    ...extraLocaleImageResizerPages,
    ...extraLocaleImageCropperPages,
    ...extraLocalePassportPhotoMakerPages,
    ...extraLocaleFlipImagePages,
    ...extraLocaleAddWatermarkPages,
    ...extraLocaleBlackAndWhitePages,
    ...extraLocaleAddDatePages,
    ...extraLocaleBlurFacePages,
    ...extraLocaleReduceSizePages,
    ...extraLocaleYoutubeBannerPages,
    ...extraLocaleResizeToInchesPages,
    ...extraLocaleResizeToMmPages,
    ...extraLocaleSignatureResizerPages,
    ...extraLocaleUpscPhotoPages,
    ...extraLocaleRotateImagePages,
    ...extraLocaleRrbPhotoPages,
    ...extraLocaleImageCompressorPages,
    ...extraLocaleCompress10KbPages,
    ...extraLocaleCompress20KbPages,
    ...extraLocaleCompress30KbPages,
    ...extraLocaleCompress40KbPages,
    ...extraLocaleCompress50KbPages,
    ...extraLocaleCompress60KbPages,
    ...extraLocaleCompress70KbPages,
    ...extraLocaleCompress80KbPages,
    ...extraLocaleCompress90KbPages,
    ...extraLocaleCompress100KbPages,
    ...extraLocaleCompress200KbPages,
    ...extraLocaleCompressPercentagePages,
    ...extraLocaleLosslessCompressionPages,
    ...extraLocaleCompressForWebPages,
    ...extraLocaleCompressForEmailPages,
    ...extraLocaleCompressForWhatsappPages,
    ...extraLocaleCompressForFormsPages,
    ...extraLocaleGifCompressorPages,
    ...extraLocaleWebpCompressorPages,
    ...extraLocalePngCompressorPages,
    ...extraLocaleJpgCompressorPages,
    ...extraLocaleJpegCompressorPages,
    ...extraLocaleHeicToJpgPages,
    ...extraLocaleHeicToPngPages,
    ...extraLocalePngToHeicPages,
    ...extraLocaleHeicToWebpPages,
    ...extraLocaleWebpToHeicPages,
    ...extraLocaleAvifToJpgPages,
    ...extraLocaleAvifToPngPages,
    ...extraLocaleAvifToWebpPages,
    ...extraLocaleGifToJpgPages,
    ...extraLocaleJpgToGifPages,
    ...extraLocaleBmpToJpgPages,
    ...extraLocaleJpgToBmpPages,
    ...extraLocaleIcoToPngPages,
    ...extraLocalePngToIcoPages,
    ...extraLocaleJpgToAvifPages,
    ...extraLocaleJpgToHeicPages,
    ...extraLocalePngToJpgPages,
    ...extraLocaleJpgToPngPages,
    ...extraLocaleJpgToJpegPages,
    ...extraLocaleWebpToJpgPages,
    ...extraLocaleJpgToWebpPages,
    ...extraLocalePngToWebpPages,
    ...extraLocaleWebpToPngPages,
    ...extraLocaleJpgToPdfPages,
    ...extraLocalePngToPdfPages,
    ...extraLocaleWebpToPdfPages,
    ...extraLocaleHeicToPdfPages,
    ...extraLocaleAvifToPdfPages,
    ...extraLocalePdfToJpgPages,
    ...extraLocalePdfToPngPages,
    ...extraLocalePdfToWebpPages,
    ...extraLocaleAboutPages,
    ...extraLocaleContactPages,
    ...extraLocalePrivacyPages,
    ...extraLocaleTermsPages,
    ...extraLocaleDisclaimerPages,
    ...extraLocaleBlogPages,
  ];
}
