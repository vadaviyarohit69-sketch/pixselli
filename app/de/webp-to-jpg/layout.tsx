import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WebP zu JPG Konverter Online Kostenlos - WebP Bilder umwandeln | Pixselli',
  description:
    'Wandle WebP-Bilder online in JPG um, mit privater Verarbeitung im Browser und qualitativem Ergebnis.',
  keywords: ['webp zu jpg', 'webp in jpg umwandeln', 'webp jpg konverter', 'webp zu jpeg'],
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
    canonical: 'https://pixselli.com/de/webp-to-jpg',
    languages: {
      en: 'https://pixselli.com/webp-to-jpg',
      es: 'https://pixselli.com/es/webp-to-jpg',
      pt: 'https://pixselli.com/pt/webp-to-jpg',
      fr: 'https://pixselli.com/fr/webp-to-jpg',
      de: 'https://pixselli.com/de/webp-to-jpg',
      it: 'https://pixselli.com/it/webp-to-jpg',
      'x-default': 'https://pixselli.com/webp-to-jpg',
    },
  },
  openGraph: {
    title: 'WebP zu JPG Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere WebP-Dateien schnell in JPG mit zuverlassiger Ausgabe.',
    url: 'https://pixselli.com/de/webp-to-jpg',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebP zu JPG Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere WebP zu JPG online schnell und sicher.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanWebpToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
