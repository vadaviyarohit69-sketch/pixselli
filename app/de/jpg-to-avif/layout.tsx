import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JPG zu AVIF Konverter Online Kostenlos - JPG Bilder umwandeln | Pixselli',
  description:
    'Konvertiere JPG-Bilder online in AVIF mit privater Browser-Verarbeitung und Qualitatskontrolle.',
  keywords: ['jpg zu avif', 'jpg in avif umwandeln', 'jpg avif konverter', 'avif konverter'],
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
    canonical: 'https://pixselli.com/de/jpg-to-avif',
    languages: {
      en: 'https://pixselli.com/jpg-to-avif',
      es: 'https://pixselli.com/es/jpg-to-avif',
      pt: 'https://pixselli.com/pt/jpg-to-avif',
      fr: 'https://pixselli.com/fr/jpg-to-avif',
      de: 'https://pixselli.com/de/jpg-to-avif',
      it: 'https://pixselli.com/it/jpg-to-avif',
      'x-default': 'https://pixselli.com/jpg-to-avif',
    },
  },
  openGraph: {
    title: 'JPG zu AVIF Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere JPG zu AVIF schnell mit zuverlassiger Ausgabe.',
    url: 'https://pixselli.com/de/jpg-to-avif',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG zu AVIF Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere JPG zu AVIF online schnell und sicher.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanJpgToAvifLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
