import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HEIC zu PNG Konverter Online Kostenlos - HEIC Bilder umwandeln | Pixselli',
  description:
    'Konvertiere HEIC-Bilder online in PNG mit privater Browser-Verarbeitung und hoher Ausgabequalitat.',
  keywords: ['heic zu png', 'heic in png umwandeln', 'heic png konverter', 'iphone heic'],
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
    canonical: 'https://pixselli.com/de/heic-to-png',
    languages: {
      en: 'https://pixselli.com/heic-to-png',
      es: 'https://pixselli.com/es/heic-to-png',
      pt: 'https://pixselli.com/pt/heic-to-png',
      fr: 'https://pixselli.com/fr/heic-to-png',
      de: 'https://pixselli.com/de/heic-to-png',
      it: 'https://pixselli.com/it/heic-to-png',
      'x-default': 'https://pixselli.com/heic-to-png',
    },
  },
  openGraph: {
    title: 'HEIC zu PNG Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere HEIC zu PNG schnell mit zuverlassiger Ausgabe.',
    url: 'https://pixselli.com/de/heic-to-png',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEIC zu PNG Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere HEIC zu PNG online schnell und sicher.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanHeicToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
