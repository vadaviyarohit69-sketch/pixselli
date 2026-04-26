import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nach Prozent komprimieren online kostenlos - 10% bis 90% | Pixselli',
  description:
    'Bilder nach Prozent online von 10% bis 90% komprimieren – schnell und privat direkt im Browser.',
  keywords: ['nach prozent komprimieren', 'bild kompression prozent', 'bildgroesse reduzieren', 'online kompressor'],
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
    canonical: 'https://pixselli.com/de/compress-percentage',
    languages: {
      en: 'https://pixselli.com/compress-percentage',
      es: 'https://pixselli.com/es/compress-percentage',
      pt: 'https://pixselli.com/pt/compress-percentage',
      fr: 'https://pixselli.com/fr/compress-percentage',
      de: 'https://pixselli.com/de/compress-percentage',
      it: 'https://pixselli.com/it/compress-percentage',
      'x-default': 'https://pixselli.com/compress-percentage',
    },
  },
  openGraph: {
    title: 'Nach Prozent komprimieren online kostenlos - Pixselli',
    description: 'Bildgroesse prozentual reduzieren mit flexiblem Ziel und schneller Ausgabe.',
    url: 'https://pixselli.com/de/compress-percentage',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nach Prozent komprimieren Tool von Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nach Prozent komprimieren online kostenlos - Pixselli',
    description: 'Bilder prozentual von 10% bis 90% online komprimieren.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanCompressPercentageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
