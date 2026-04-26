import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JPG zu PNG Konverter Online Kostenlos - JPG Bilder umwandeln | Pixselli',
  description:
    'Wandle JPG-Bilder online in PNG um, mit privater Verarbeitung im Browser und hochwertiger Ausgabe.',
  keywords: ['jpg zu png', 'jpg in png umwandeln', 'jpg zu png konverter', 'jpeg zu png'],
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
    canonical: 'https://pixselli.com/de/jpg-to-png',
    languages: {
      en: 'https://pixselli.com/jpg-to-png',
      es: 'https://pixselli.com/es/jpg-to-png',
      pt: 'https://pixselli.com/pt/jpg-to-png',
      fr: 'https://pixselli.com/fr/jpg-to-png',
      de: 'https://pixselli.com/de/jpg-to-png',
      it: 'https://pixselli.com/it/jpg-to-png',
      'x-default': 'https://pixselli.com/jpg-to-png',
    },
  },
  openGraph: {
    title: 'JPG zu PNG Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere JPG zu PNG schnell mit hochwertiger Ausgabe.',
    url: 'https://pixselli.com/de/jpg-to-png',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG zu PNG Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere JPG-Dateien schnell und sicher online zu PNG.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanJpgToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
