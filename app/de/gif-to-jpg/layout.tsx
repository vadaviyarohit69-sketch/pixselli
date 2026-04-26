import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GIF zu JPG Konverter Online Kostenlos - GIF Bilder umwandeln | Pixselli',
  description:
    'Konvertiere GIF-Bilder online in JPG mit privater Browser-Verarbeitung und Qualitatskontrolle.',
  keywords: ['gif zu jpg', 'gif in jpg umwandeln', 'gif jpg konverter', 'jpg konverter'],
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
    canonical: 'https://pixselli.com/de/gif-to-jpg',
    languages: {
      en: 'https://pixselli.com/gif-to-jpg',
      es: 'https://pixselli.com/es/gif-to-jpg',
      pt: 'https://pixselli.com/pt/gif-to-jpg',
      fr: 'https://pixselli.com/fr/gif-to-jpg',
      de: 'https://pixselli.com/de/gif-to-jpg',
      it: 'https://pixselli.com/it/gif-to-jpg',
      'x-default': 'https://pixselli.com/gif-to-jpg',
    },
  },
  openGraph: {
    title: 'GIF zu JPG Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere GIF zu JPG schnell mit zuverlassiger Ausgabe.',
    url: 'https://pixselli.com/de/gif-to-jpg',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GIF zu JPG Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere GIF zu JPG online schnell und sicher.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanGifToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
