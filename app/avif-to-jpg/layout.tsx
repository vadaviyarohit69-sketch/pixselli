import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AVIF to JPG Converter Online Free - Convert AVIF Images | Pixselli',
  description:
    'Convert AVIF images to JPG format online with browser-based private processing and quality controls.',
  keywords: ['avif to jpg', 'convert avif to jpg', 'avif jpg converter', 'jpg converter'],
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
    canonical: 'https://pixselli.com/avif-to-jpg',
    languages: {
      en: 'https://pixselli.com/avif-to-jpg',
      es: 'https://pixselli.com/es/avif-to-jpg',
      pt: 'https://pixselli.com/pt/avif-to-jpg',
      fr: 'https://pixselli.com/fr/avif-to-jpg',
      de: 'https://pixselli.com/de/avif-to-jpg',
      it: 'https://pixselli.com/it/avif-to-jpg',
      'x-default': 'https://pixselli.com/avif-to-jpg',
    },
  },
  openGraph: {
    title: 'AVIF to JPG Converter Online Free - Pixselli',
    description: 'Convert AVIF images to JPG quickly with dependable output.',
    url: 'https://pixselli.com/avif-to-jpg',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AVIF to JPG converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVIF to JPG Converter Online Free - Pixselli',
    description: 'Convert AVIF to JPG online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
