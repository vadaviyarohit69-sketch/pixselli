import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compress for Web Online Free - Website Image Optimizer | Pixselli',
  description:
    'Compress images for website use with web-friendly dimensions and quality settings. Fast client-side optimization for JPG and WebP.',
  keywords: ['compress-for-web', 'web image optimizer', 'website image compression', 'reduce image size'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://pixselli.com/compress-for-web',
    languages: {
      en: 'https://pixselli.com/compress-for-web',
      es: 'https://pixselli.com/es/compress-for-web',
      pt: 'https://pixselli.com/pt/compress-for-web',
      fr: 'https://pixselli.com/fr/compress-for-web',
      de: 'https://pixselli.com/de/compress-for-web',
      it: 'https://pixselli.com/it/compress-for-web',
      'x-default': 'https://pixselli.com/compress-for-web',
    },
  },
  openGraph: {
    title: 'Compress for Web Online Free - Pixselli',
    description: 'Optimize website images with balanced size and quality for faster pages.',
    url: 'https://pixselli.com/compress-for-web',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Compress for web tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress for Web Online Free - Pixselli',
    description: 'Prepare images for websites with web-focused compression settings.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
