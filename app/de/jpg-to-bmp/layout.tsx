import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JPG zu BMP Konverter Online Kostenlos - JPG Bilder umwandeln | Pixselli',
  description:
    'Konvertiere JPG-Bilder online in BMP mit privater Browser-Verarbeitung und Qualitatskontrollen.',
  keywords: ['jpg zu bmp', 'jpg in bmp umwandeln', 'jpg bmp konverter', 'bmp konverter'],
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
    canonical: 'https://pixselli.com/de/jpg-to-bmp',
    languages: {
      en: 'https://pixselli.com/jpg-to-bmp',
      es: 'https://pixselli.com/es/jpg-to-bmp',
      pt: 'https://pixselli.com/pt/jpg-to-bmp',
      fr: 'https://pixselli.com/fr/jpg-to-bmp',
      de: 'https://pixselli.com/de/jpg-to-bmp',
      it: 'https://pixselli.com/it/jpg-to-bmp',
      'x-default': 'https://pixselli.com/jpg-to-bmp',
    },
  },
  openGraph: {
    title: 'JPG zu BMP Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere JPG zu BMP schnell mit zuverlassiger Ausgabe.',
    url: 'https://pixselli.com/de/jpg-to-bmp',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG zu BMP Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere JPG zu BMP online schnell und sicher.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanJpgToBmpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
