import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AVIF zu WebP Konverter Online Kostenlos - AVIF Bilder umwandeln | Pixselli',
  description:
    'Konvertiere AVIF-Bilder online in WebP mit privater Browser-Verarbeitung und Qualitatskontrolle.',
  keywords: ['avif zu webp', 'avif in webp umwandeln', 'avif webp konverter', 'webp konverter'],
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
    canonical: 'https://pixselli.com/de/avif-to-webp',
    languages: {
      en: 'https://pixselli.com/avif-to-webp',
      es: 'https://pixselli.com/es/avif-to-webp',
      pt: 'https://pixselli.com/pt/avif-to-webp',
      fr: 'https://pixselli.com/fr/avif-to-webp',
      de: 'https://pixselli.com/de/avif-to-webp',
      it: 'https://pixselli.com/it/avif-to-webp',
      'x-default': 'https://pixselli.com/avif-to-webp',
    },
  },
  openGraph: {
    title: 'AVIF zu WebP Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere AVIF zu WebP schnell mit zuverlassiger Ausgabe.',
    url: 'https://pixselli.com/de/avif-to-webp',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVIF zu WebP Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere AVIF zu WebP online schnell und sicher.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanAvifToWebpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
