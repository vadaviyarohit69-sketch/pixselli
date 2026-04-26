import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WebP to PNG Converter Online Free - Convert WebP Images | Pixselli',
  description:
    'Convert WebP images to PNG format online with quality-aware browser processing and fast output.',
  keywords: ['webp to png', 'convert webp to png', 'webp png converter', 'png converter'],
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
    canonical: 'https://pixselli.com/webp-to-png',
    languages: {
      en: 'https://pixselli.com/webp-to-png',
      es: 'https://pixselli.com/es/webp-to-png',
      pt: 'https://pixselli.com/pt/webp-to-png',
      fr: 'https://pixselli.com/fr/webp-to-png',
      de: 'https://pixselli.com/de/webp-to-png',
      it: 'https://pixselli.com/it/webp-to-png',
      'x-default': 'https://pixselli.com/webp-to-png',
    },
  },
  openGraph: {
    title: 'WebP to PNG Converter Online Free - Pixselli',
    description: 'Convert WebP images to PNG quickly with dependable output.',
    url: 'https://pixselli.com/webp-to-png',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WebP to PNG converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebP to PNG Converter Online Free - Pixselli',
    description: 'Convert WebP to PNG online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
