import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JPEG Kompressor kostenlos online - JPEG Dateigrosse reduzieren | Pixselli',
  description:
    'Komprimieren Sie JPEG Bilder online mit einstellbarer Qualitat fur kleinere Dateien und schnelle private Verarbeitung im Browser.',
  keywords: ['jpeg kompressor', 'jpeg komprimieren', 'jpeg optimieren', 'jpeg grosse reduzieren'],
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
    canonical: 'https://pixselli.com/de/jpeg-compressor',
    languages: {
      en: 'https://pixselli.com/jpeg-compressor',
      es: 'https://pixselli.com/es/jpeg-compressor',
      pt: 'https://pixselli.com/pt/jpeg-compressor',
      fr: 'https://pixselli.com/fr/jpeg-compressor',
      de: 'https://pixselli.com/de/jpeg-compressor',
      it: 'https://pixselli.com/it/jpeg-compressor',
      'x-default': 'https://pixselli.com/jpeg-compressor',
    },
  },
  openGraph: {
    title: 'JPEG Kompressor kostenlos online - Pixselli',
    description: 'JPEG Dateigrosse reduzieren mit schneller Browser-Komprimierung.',
    url: 'https://pixselli.com/de/jpeg-compressor',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPEG Kompressor kostenlos online - Pixselli',
    description: 'JPEG komprimieren und Dateigrosse schnell reduzieren.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanJpegCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
