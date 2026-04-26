import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HEIC zu JPG Konverter Online Kostenlos - HEIC Fotos umwandeln | Pixselli',
  description:
    'Konvertiere HEIC-Bilder online in JPG mit privater Browser-Verarbeitung fur bessere Kompatibilitat.',
  keywords: ['heic zu jpg', 'heic in jpg umwandeln', 'iphone heic konverter', 'heic jpg konverter'],
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
    canonical: 'https://pixselli.com/de/heic-to-jpg',
    languages: {
      en: 'https://pixselli.com/heic-to-jpg',
      es: 'https://pixselli.com/es/heic-to-jpg',
      pt: 'https://pixselli.com/pt/heic-to-jpg',
      fr: 'https://pixselli.com/fr/heic-to-jpg',
      de: 'https://pixselli.com/de/heic-to-jpg',
      it: 'https://pixselli.com/it/heic-to-jpg',
      'x-default': 'https://pixselli.com/heic-to-jpg',
    },
  },
  openGraph: {
    title: 'HEIC zu JPG Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere iPhone-HEIC-Fotos schnell zu JPG.',
    url: 'https://pixselli.com/de/heic-to-jpg',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEIC zu JPG Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere HEIC zu JPG online schnell und sicher.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanHeicToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
