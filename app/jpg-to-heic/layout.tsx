import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JPG to HEIC Converter Online Free - Convert JPG Images | Pixselli',
  description:
    'Convert JPG images to HEIC format online with browser-based private processing and quality controls.',
  keywords: ['jpg to heic', 'convert jpg to heic', 'jpg heic converter', 'heic converter'],
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
    canonical: 'https://pixselli.com/jpg-to-heic',
    languages: {
      en: 'https://pixselli.com/jpg-to-heic',
      es: 'https://pixselli.com/es/jpg-to-heic',
      pt: 'https://pixselli.com/pt/jpg-to-heic',
      fr: 'https://pixselli.com/fr/jpg-to-heic',
      de: 'https://pixselli.com/de/jpg-to-heic',
      it: 'https://pixselli.com/it/jpg-to-heic',
      'x-default': 'https://pixselli.com/jpg-to-heic',
    },
  },
  openGraph: {
    title: 'JPG to HEIC Converter Online Free - Pixselli',
    description: 'Convert JPG images to HEIC quickly with browser-based processing.',
    url: 'https://pixselli.com/jpg-to-heic',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JPG to HEIC converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG to HEIC Converter Online Free - Pixselli',
    description: 'Convert JPG to HEIC online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
