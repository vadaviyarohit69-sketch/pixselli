import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WebP to JPG Converter Online Free - Convert WebP Images | Pixselli',
  description:
    'Convert WebP images to JPG format online with fast browser-based private processing and quality output.',
  keywords: ['webp to jpg', 'convert webp to jpg', 'webp jpg converter', 'webp to jpeg'],
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
    title: 'WebP to JPG Converter Online Free - Pixselli',
    description: 'Convert WebP files to JPG quickly with reliable output.',
    url: 'https://pixselli.com/webp-to-jpg',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WebP to JPG converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebP to JPG Converter Online Free - Pixselli',
    description: 'Convert WebP to JPG online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://pixselli.com/webp-to-jpg',
    languages: {
      en: 'https://pixselli.com/webp-to-jpg',
      es: 'https://pixselli.com/es/webp-to-jpg',
      pt: 'https://pixselli.com/pt/webp-to-jpg',
      fr: 'https://pixselli.com/fr/webp-to-jpg',
      de: 'https://pixselli.com/de/webp-to-jpg',
      it: 'https://pixselli.com/it/webp-to-jpg',
      'x-default': 'https://pixselli.com/webp-to-jpg',
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