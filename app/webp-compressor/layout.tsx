import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WebP Compressor Online Free - Reduce WebP File Size | Pixselli',
  description:
    'Compress WebP images online with quality-aware optimization for smaller file size and fast private browser processing.',
  keywords: ['webp-compressor', 'compress webp', 'webp optimizer', 'reduce webp size'],
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
    canonical: 'https://pixselli.com/webp-compressor',
    languages: {
      en: 'https://pixselli.com/webp-compressor',
      es: 'https://pixselli.com/es/webp-compressor',
      pt: 'https://pixselli.com/pt/webp-compressor',
      fr: 'https://pixselli.com/fr/webp-compressor',
      de: 'https://pixselli.com/de/webp-compressor',
      it: 'https://pixselli.com/it/webp-compressor',
      'x-default': 'https://pixselli.com/webp-compressor',
    },
  },
  openGraph: {
    title: 'WebP Compressor Online Free - Pixselli',
    description: 'Reduce WebP image size with fast browser-based compression.',
    url: 'https://pixselli.com/webp-compressor',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WebP compressor tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebP Compressor Online Free - Pixselli',
    description: 'Compress WebP images and reduce file size online quickly.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}