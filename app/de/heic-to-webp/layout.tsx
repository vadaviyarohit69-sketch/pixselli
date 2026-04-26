import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HEIC zu WebP Konverter Online Kostenlos - HEIC Bilder umwandeln | Pixselli',
  description:
    'Konvertiere HEIC-Bilder online in WebP mit privater Browser-Verarbeitung und Qualitatskontrolle.',
  keywords: ['heic zu webp', 'heic in webp umwandeln', 'heic webp konverter', 'iphone heic'],
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
    canonical: 'https://pixselli.com/de/heic-to-webp',
    languages: {
      en: 'https://pixselli.com/heic-to-webp',
      es: 'https://pixselli.com/es/heic-to-webp',
      pt: 'https://pixselli.com/pt/heic-to-webp',
      fr: 'https://pixselli.com/fr/heic-to-webp',
      de: 'https://pixselli.com/de/heic-to-webp',
      it: 'https://pixselli.com/it/heic-to-webp',
      'x-default': 'https://pixselli.com/heic-to-webp',
    },
  },
  openGraph: {
    title: 'HEIC zu WebP Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere HEIC zu WebP schnell mit zuverlassiger Ausgabe.',
    url: 'https://pixselli.com/de/heic-to-webp',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEIC zu WebP Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere HEIC zu WebP online schnell und sicher.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanHeicToWebpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
