import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BMP zu JPG Konverter Online Kostenlos - BMP Bilder umwandeln | Pixselli',
  description:
    'Konvertiere BMP-Bilder online in JPG mit privater Browser-Verarbeitung und Qualitatskontrolle.',
  keywords: ['bmp zu jpg', 'bmp in jpg umwandeln', 'bmp jpg konverter', 'jpg konverter'],
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
    canonical: 'https://pixselli.com/de/bmp-to-jpg',
    languages: {
      en: 'https://pixselli.com/bmp-to-jpg',
      es: 'https://pixselli.com/es/bmp-to-jpg',
      pt: 'https://pixselli.com/pt/bmp-to-jpg',
      fr: 'https://pixselli.com/fr/bmp-to-jpg',
      de: 'https://pixselli.com/de/bmp-to-jpg',
      it: 'https://pixselli.com/it/bmp-to-jpg',
      'x-default': 'https://pixselli.com/bmp-to-jpg',
    },
  },
  openGraph: {
    title: 'BMP zu JPG Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere BMP zu JPG schnell mit zuverlassiger Ausgabe.',
    url: 'https://pixselli.com/de/bmp-to-jpg',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMP zu JPG Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere BMP zu JPG online schnell und sicher.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanBmpToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
