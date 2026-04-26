import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HEIC to WebP Converter Online Free - Convert HEIC Images | Pixselli',
  description:
    'Convert HEIC images to WebP format online with browser-based private processing and quality controls.',
  keywords: ['heic to webp', 'convert heic to webp', 'heic webp converter', 'iphone heic converter'],
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
    canonical: 'https://pixselli.com/heic-to-webp',
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
    title: 'HEIC to WebP Converter Online Free - Pixselli',
    description: 'Convert HEIC images to WebP quickly with dependable output.',
    url: 'https://pixselli.com/heic-to-webp',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HEIC to WebP converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEIC to WebP Converter Online Free - Pixselli',
    description: 'Convert HEIC to WebP online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
