import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AVIF zu JPG Konverter Online Kostenlos - AVIF Bilder umwandeln | Pixselli',
  description:
    'Konvertiere AVIF-Bilder online in JPG mit privater Browser-Verarbeitung und Qualitatskontrolle.',
  keywords: ['avif zu jpg', 'avif in jpg umwandeln', 'avif jpg konverter', 'jpg konverter'],
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
    canonical: 'https://pixselli.com/de/avif-to-jpg',
    languages: {
      en: 'https://pixselli.com/avif-to-jpg',
      es: 'https://pixselli.com/es/avif-to-jpg',
      pt: 'https://pixselli.com/pt/avif-to-jpg',
      fr: 'https://pixselli.com/fr/avif-to-jpg',
      de: 'https://pixselli.com/de/avif-to-jpg',
      it: 'https://pixselli.com/it/avif-to-jpg',
      'x-default': 'https://pixselli.com/avif-to-jpg',
    },
  },
  openGraph: {
    title: 'AVIF zu JPG Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere AVIF zu JPG schnell mit zuverlassiger Ausgabe.',
    url: 'https://pixselli.com/de/avif-to-jpg',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVIF zu JPG Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere AVIF zu JPG online schnell und sicher.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanAvifToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
