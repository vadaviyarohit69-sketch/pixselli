import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WebP to HEIC Converter Online Free - Convert WebP Images | Pixselli',
  description:
    'Convert WebP images to HEIC format online with browser-based private processing and quality controls.',
  keywords: ['webp to heic', 'convert webp to heic', 'webp heic converter', 'heic converter'],
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
    canonical: 'https://pixselli.com/webp-to-heic',
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
    title: 'WebP to HEIC Converter Online Free - Pixselli',
    description: 'Convert WebP images to HEIC quickly with dependable output.',
    url: 'https://pixselli.com/webp-to-heic',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WebP to HEIC converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebP to HEIC Converter Online Free - Pixselli',
    description: 'Convert WebP to HEIC online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
