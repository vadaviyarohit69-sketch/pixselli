import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JPG to PNG Converter Online Free - Convert JPG Images | Pixselli',
  description:
    'Convert JPG images to PNG format online with browser-based private processing and high-quality output.',
  keywords: ['jpg to png', 'convert jpg to png', 'jpg to png converter', 'jpeg to png'],
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
  openGraph: {
    title: 'JPG to PNG Converter Online Free - Pixselli',
    description: 'Convert JPG to PNG quickly with high-quality output.',
    url: 'https://pixselli.com/jpg-to-png',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JPG to PNG converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG to PNG Converter Online Free - Pixselli',
    description: 'Convert JPG files to PNG online fast and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://pixselli.com/jpg-to-png',
    languages: {
      en: 'https://pixselli.com/jpg-to-png',
      es: 'https://pixselli.com/es/jpg-to-png',
      pt: 'https://pixselli.com/pt/jpg-to-png',
      fr: 'https://pixselli.com/fr/jpg-to-png',
      de: 'https://pixselli.com/de/jpg-to-png',
      it: 'https://pixselli.com/it/jpg-to-png',
      'x-default': 'https://pixselli.com/jpg-to-png',
    },
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}