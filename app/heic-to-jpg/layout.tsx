import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HEIC to JPG Converter Online Free - Convert iPhone HEIC Images | Pixselli',
  description:
    'Convert HEIC images to JPG online with browser-based private processing for better compatibility across devices and apps.',
  keywords: ['heic to jpg', 'convert heic to jpg', 'iphone heic converter', 'heic jpg converter'],
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
    canonical: 'https://pixselli.com/heic-to-jpg',
    languages: {
      en: 'https://pixselli.com/heic-to-jpg',
      es: 'https://pixselli.com/es/heic-to-jpg',
      pt: 'https://pixselli.com/pt/heic-to-jpg',
      fr: 'https://pixselli.com/fr/heic-to-jpg',
      de: 'https://pixselli.com/de/heic-to-jpg',
      it: 'https://pixselli.com/it/heic-to-jpg',
      'x-default': 'https://pixselli.com/heic-to-jpg',
    },
  },
  openGraph: {
    title: 'HEIC to JPG Converter Online Free - Pixselli',
    description: 'Convert iPhone HEIC photos to JPG quickly for wider compatibility.',
    url: 'https://pixselli.com/heic-to-jpg',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HEIC to JPG converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEIC to JPG Converter Online Free - Pixselli',
    description: 'Convert HEIC to JPG online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
