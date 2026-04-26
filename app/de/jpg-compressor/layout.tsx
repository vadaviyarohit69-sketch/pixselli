import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JPG Kompressor Online Kostenlos - JPG Dateigrosse Reduzieren | Pixselli',
  description:
    'Komprimieren Sie JPG Bilder online mit anpassbarer Qualitat fur kleinere Dateien und schnelle private Verarbeitung im Browser.',
  keywords: ['jpg kompressor', 'jpg komprimieren', 'jpg optimieren', 'jpg grosse reduzieren'],
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
    canonical: 'https://pixselli.com/de/jpg-compressor',
    languages: {
      en: 'https://pixselli.com/jpg-compressor',
      es: 'https://pixselli.com/es/jpg-compressor',
      pt: 'https://pixselli.com/pt/jpg-compressor',
      fr: 'https://pixselli.com/fr/jpg-compressor',
      de: 'https://pixselli.com/de/jpg-compressor',
      it: 'https://pixselli.com/it/jpg-compressor',
      'x-default': 'https://pixselli.com/jpg-compressor',
    },
  },
  openGraph: {
    title: 'JPG Kompressor Online Kostenlos - Pixselli',
    description: 'JPG Dateigrosse mit schneller Browser Komprimierung reduzieren.',
    url: 'https://pixselli.com/de/jpg-compressor',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG Kompressor Online Kostenlos - Pixselli',
    description: 'JPG komprimieren und Dateigrosse schnell reduzieren.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanJpgCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
