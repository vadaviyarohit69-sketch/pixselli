import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AVIF zu PNG Konverter Online Kostenlos - AVIF Bilder umwandeln | Pixselli',
  description:
    'Konvertiere AVIF-Bilder online in PNG mit privater Browser-Verarbeitung und hochwertiger Ausgabe.',
  keywords: ['avif zu png', 'avif in png umwandeln', 'avif png konverter', 'png konverter'],
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
    canonical: 'https://pixselli.com/de/avif-to-png',
    languages: {
      en: 'https://pixselli.com/avif-to-png',
      es: 'https://pixselli.com/es/avif-to-png',
      pt: 'https://pixselli.com/pt/avif-to-png',
      fr: 'https://pixselli.com/fr/avif-to-png',
      de: 'https://pixselli.com/de/avif-to-png',
      it: 'https://pixselli.com/it/avif-to-png',
      'x-default': 'https://pixselli.com/avif-to-png',
    },
  },
  openGraph: {
    title: 'AVIF zu PNG Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere AVIF zu PNG schnell mit zuverlassiger Ausgabe.',
    url: 'https://pixselli.com/de/avif-to-png',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVIF zu PNG Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere AVIF zu PNG online schnell und sicher.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanAvifToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
