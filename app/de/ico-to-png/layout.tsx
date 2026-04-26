import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ICO zu PNG Konverter Online Kostenlos - ICO Dateien umwandeln | Pixselli',
  description:
    'Konvertiere ICO-Dateien online in PNG mit privater Browser-Verarbeitung und hochwertiger Ausgabe.',
  keywords: ['ico zu png', 'ico in png umwandeln', 'ico png konverter', 'png konverter'],
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
    canonical: 'https://pixselli.com/de/ico-to-png',
    languages: {
      en: 'https://pixselli.com/ico-to-png',
      es: 'https://pixselli.com/es/ico-to-png',
      pt: 'https://pixselli.com/pt/ico-to-png',
      fr: 'https://pixselli.com/fr/ico-to-png',
      de: 'https://pixselli.com/de/ico-to-png',
      it: 'https://pixselli.com/it/ico-to-png',
      'x-default': 'https://pixselli.com/ico-to-png',
    },
  },
  openGraph: {
    title: 'ICO zu PNG Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere ICO zu PNG schnell mit zuverlassiger Ausgabe.',
    url: 'https://pixselli.com/de/ico-to-png',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICO zu PNG Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere ICO zu PNG online schnell und sicher.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanIcoToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
