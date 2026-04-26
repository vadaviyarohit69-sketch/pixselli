import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ICO to PNG Converter Online Free - Convert ICO Files | Pixselli',
  description:
    'Convert ICO files to PNG format online with browser-based private processing and high-quality output.',
  keywords: ['ico to png', 'convert ico to png', 'ico png converter', 'png converter'],
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
    canonical: 'https://pixselli.com/ico-to-png',
    languages: {
      en: 'https://pixselli.com/ico-to-png',
      es: 'https://pixselli.com/es/ico-to-png',
      pt: 'https://pixselli.com/pt/ico-to-png',
      fr: 'https://pixselli.com/fr/ico-to-png',
      de: 'https://pixselli.com/de/ico-to-png',
      it: 'https://pixselli.com/it/ico-to-png',
      'x-default': 'https://pixselli.com/ico-to-png',
    },
  },
  openGraph: {
    title: 'ICO to PNG Converter Online Free - Pixselli',
    description: 'Convert ICO files to PNG quickly with dependable output.',
    url: 'https://pixselli.com/ico-to-png',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ICO to PNG converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICO to PNG Converter Online Free - Pixselli',
    description: 'Convert ICO to PNG online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
