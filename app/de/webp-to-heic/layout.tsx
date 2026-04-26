import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WebP zu HEIC Konverter Online Kostenlos - WebP Bilder umwandeln | Pixselli',
  description:
    'Konvertiere WebP-Bilder online in HEIC mit privater Browser-Verarbeitung und Qualitatskontrolle.',
  keywords: ['webp zu heic', 'webp in heic umwandeln', 'webp heic konverter', 'heic konverter'],
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
    canonical: 'https://pixselli.com/de/webp-to-heic',
    languages: {
      en: 'https://pixselli.com/webp-to-heic',
      es: 'https://pixselli.com/es/webp-to-heic',
      pt: 'https://pixselli.com/pt/webp-to-heic',
      fr: 'https://pixselli.com/fr/webp-to-heic',
      de: 'https://pixselli.com/de/webp-to-heic',
      it: 'https://pixselli.com/it/webp-to-heic',
      'x-default': 'https://pixselli.com/webp-to-heic',
    },
  },
  openGraph: {
    title: 'WebP zu HEIC Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere WebP zu HEIC schnell mit zuverlassiger Ausgabe.',
    url: 'https://pixselli.com/de/webp-to-heic',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebP zu HEIC Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere WebP zu HEIC online schnell und sicher.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanWebpToHeicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
