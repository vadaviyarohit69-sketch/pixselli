import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PNG Kompressor Online Kostenlos - PNG Dateigrosse Reduzieren | Pixselli',
  description:
    'Komprimieren Sie PNG Bilder online mit qualitatsbewusster Optimierung fur kleinere Dateien und schnelle private Verarbeitung im Browser.',
  keywords: ['png kompressor', 'png komprimieren', 'png optimieren', 'png grosse reduzieren'],
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
    canonical: 'https://pixselli.com/de/png-compressor',
    languages: {
      en: 'https://pixselli.com/png-compressor',
      es: 'https://pixselli.com/es/png-compressor',
      pt: 'https://pixselli.com/pt/png-compressor',
      fr: 'https://pixselli.com/fr/png-compressor',
      de: 'https://pixselli.com/de/png-compressor',
      it: 'https://pixselli.com/it/png-compressor',
      'x-default': 'https://pixselli.com/png-compressor',
    },
  },
  openGraph: {
    title: 'PNG Kompressor Online Kostenlos - Pixselli',
    description: 'Reduzieren Sie die PNG Dateigrosse mit schneller Browser Komprimierung.',
    url: 'https://pixselli.com/de/png-compressor',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNG Kompressor Online Kostenlos - Pixselli',
    description: 'PNG Bilder komprimieren und Dateigrosse schnell reduzieren.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanPngCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
