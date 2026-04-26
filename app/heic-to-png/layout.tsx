import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HEIC to PNG Converter Online Free - Convert HEIC Images | Pixselli',
  description:
    'Convert HEIC images to PNG format online with browser-based private processing and high-quality output.',
  keywords: ['heic to png', 'convert heic to png', 'heic png converter', 'iphone heic converter'],
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
    canonical: 'https://pixselli.com/heic-to-png',
    languages: {
      en: 'https://pixselli.com/heic-to-png',
      es: 'https://pixselli.com/es/heic-to-png',
      pt: 'https://pixselli.com/pt/heic-to-png',
      fr: 'https://pixselli.com/fr/heic-to-png',
      de: 'https://pixselli.com/de/heic-to-png',
      it: 'https://pixselli.com/it/heic-to-png',
      'x-default': 'https://pixselli.com/heic-to-png',
    },
  },
  openGraph: {
    title: 'HEIC to PNG Converter Online Free - Pixselli',
    description: 'Convert HEIC images to PNG quickly with dependable quality.',
    url: 'https://pixselli.com/heic-to-png',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HEIC to PNG converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEIC to PNG Converter Online Free - Pixselli',
    description: 'Convert HEIC to PNG online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
