import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WebP Kompressor Online Kostenlos - WebP Dateigrosse Reduzieren | Pixselli',
  description:
    'Komprimieren Sie WebP Bilder online mit qualitatsbewusster Optimierung fur kleinere Dateien und schnelle private Verarbeitung im Browser.',
  keywords: ['webp kompressor', 'webp komprimieren', 'webp optimieren', 'webp grosse reduzieren'],
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
    canonical: 'https://pixselli.com/de/webp-compressor',
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
    title: 'WebP Kompressor Online Kostenlos - Pixselli',
    description: 'Reduzieren Sie die WebP Dateigrosse mit schneller Browser Komprimierung.',
    url: 'https://pixselli.com/de/webp-compressor',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebP Kompressor Online Kostenlos - Pixselli',
    description: 'WebP Bilder komprimieren und Dateigrosse schnell reduzieren.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanWebpCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
