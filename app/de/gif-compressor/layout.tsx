import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GIF Kompressor Online Kostenlos - GIF Dateigrosse Reduzieren | Pixselli',
  description:
    'Komprimieren Sie GIF Bilder online mit qualitatsbewusster Optimierung fur kleinere Dateien und schnelle private Verarbeitung im Browser.',
  keywords: ['gif kompressor', 'gif komprimieren', 'gif optimieren', 'gif grosse reduzieren'],
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
    canonical: 'https://pixselli.com/de/gif-compressor',
    languages: {
      en: 'https://pixselli.com/gif-compressor',
      es: 'https://pixselli.com/es/gif-compressor',
      pt: 'https://pixselli.com/pt/gif-compressor',
      fr: 'https://pixselli.com/fr/gif-compressor',
      de: 'https://pixselli.com/de/gif-compressor',
      it: 'https://pixselli.com/it/gif-compressor',
      'x-default': 'https://pixselli.com/gif-compressor',
    },
  },
  openGraph: {
    title: 'GIF Kompressor Online Kostenlos - Pixselli',
    description: 'Reduzieren Sie die GIF Dateigrosse mit schneller Browser Komprimierung.',
    url: 'https://pixselli.com/de/gif-compressor',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GIF Kompressor Tool von Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GIF Kompressor Online Kostenlos - Pixselli',
    description: 'GIF Dateien komprimieren und Dateigrosse schnell reduzieren.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanGifCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
