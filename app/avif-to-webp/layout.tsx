import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AVIF to WebP Converter Online Free - Convert AVIF Images | Pixselli',
  description:
    'Convert AVIF images to WebP format online with browser-based private processing and quality controls.',
  keywords: ['avif to webp', 'convert avif to webp', 'avif webp converter', 'webp converter'],
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
    canonical: 'https://pixselli.com/avif-to-webp',
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
    title: 'AVIF to WebP Converter Online Free - Pixselli',
    description: 'Convert AVIF images to WebP quickly with dependable output.',
    url: 'https://pixselli.com/avif-to-webp',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AVIF to WebP converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVIF to WebP Converter Online Free - Pixselli',
    description: 'Convert AVIF to WebP online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
