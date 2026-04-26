import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GIF to JPG Converter Online Free - Convert GIF Images | Pixselli',
  description:
    'Convert GIF images to JPG format online with browser-based private processing and quality controls.',
  keywords: ['gif to jpg', 'convert gif to jpg', 'gif jpg converter', 'jpg converter'],
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
    canonical: 'https://pixselli.com/gif-to-jpg',
    languages: {
      en: 'https://pixselli.com/gif-to-jpg',
      es: 'https://pixselli.com/es/gif-to-jpg',
      pt: 'https://pixselli.com/pt/gif-to-jpg',
      fr: 'https://pixselli.com/fr/gif-to-jpg',
      de: 'https://pixselli.com/de/gif-to-jpg',
      it: 'https://pixselli.com/it/gif-to-jpg',
      'x-default': 'https://pixselli.com/gif-to-jpg',
    },
  },
  openGraph: {
    title: 'GIF to JPG Converter Online Free - Pixselli',
    description: 'Convert GIF images to JPG quickly with dependable output.',
    url: 'https://pixselli.com/gif-to-jpg',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GIF to JPG converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GIF to JPG Converter Online Free - Pixselli',
    description: 'Convert GIF to JPG online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
