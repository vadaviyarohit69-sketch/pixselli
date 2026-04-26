import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verlustfreie Komprimierung online kostenlos - Qualitaet behalten | Pixselli',
  description:
    'Komprimieren Sie Bilder verlustfrei, um die Dateigroesse zu reduzieren und die Bildqualitaet zu erhalten – privat im Browser.',
  keywords: ['verlustfreie komprimierung', 'lossless kompression', 'bildgroesse reduzieren', 'online kompressor'],
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
    canonical: 'https://pixselli.com/de/lossless-compression',
    languages: {
      en: 'https://pixselli.com/lossless-compression',
      es: 'https://pixselli.com/es/lossless-compression',
      pt: 'https://pixselli.com/pt/lossless-compression',
      fr: 'https://pixselli.com/fr/lossless-compression',
      de: 'https://pixselli.com/de/lossless-compression',
      it: 'https://pixselli.com/it/lossless-compression',
      'x-default': 'https://pixselli.com/lossless-compression',
    },
  },
  openGraph: {
    title: 'Verlustfreie Komprimierung online kostenlos - Pixselli',
    description: 'Bilder verlustfrei optimieren und hohe Qualitaet beibehalten.',
    url: 'https://pixselli.com/de/lossless-compression',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tool fuer verlustfreie Komprimierung von Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verlustfreie Komprimierung online kostenlos - Pixselli',
    description: 'Dateigroesse reduzieren und Qualitaet erhalten mit verlustfreier Komprimierung.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanLosslessCompressionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
