import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JPG to AVIF Converter Online Free - Convert JPG Images | Pixselli',
  description:
    'Convert JPG images to AVIF format online with browser-based private processing and quality controls.',
  keywords: ['jpg to avif', 'convert jpg to avif', 'jpg avif converter', 'avif converter'],
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
    canonical: 'https://pixselli.com/jpg-to-avif',
    languages: {
      en: 'https://pixselli.com/jpg-to-avif',
      es: 'https://pixselli.com/es/jpg-to-avif',
      pt: 'https://pixselli.com/pt/jpg-to-avif',
      fr: 'https://pixselli.com/fr/jpg-to-avif',
      de: 'https://pixselli.com/de/jpg-to-avif',
      it: 'https://pixselli.com/it/jpg-to-avif',
      'x-default': 'https://pixselli.com/jpg-to-avif',
    },
  },
  openGraph: {
    title: 'JPG to AVIF Converter Online Free - Pixselli',
    description: 'Convert JPG images to AVIF quickly with dependable output.',
    url: 'https://pixselli.com/jpg-to-avif',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JPG to AVIF converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG to AVIF Converter Online Free - Pixselli',
    description: 'Convert JPG to AVIF online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
