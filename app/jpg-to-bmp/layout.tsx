import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JPG to BMP Converter Online Free - Convert JPG Images | Pixselli',
  description:
    'Convert JPG images to BMP format online with browser-based private processing and quality controls.',
  keywords: ['jpg to bmp', 'convert jpg to bmp', 'jpg bmp converter', 'bmp converter'],
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
    canonical: 'https://pixselli.com/jpg-to-bmp',
    languages: {
      en: 'https://pixselli.com/jpg-to-bmp',
      es: 'https://pixselli.com/es/jpg-to-bmp',
      pt: 'https://pixselli.com/pt/jpg-to-bmp',
      fr: 'https://pixselli.com/fr/jpg-to-bmp',
      de: 'https://pixselli.com/de/jpg-to-bmp',
      it: 'https://pixselli.com/it/jpg-to-bmp',
      'x-default': 'https://pixselli.com/jpg-to-bmp',
    },
  },
  openGraph: {
    title: 'JPG to BMP Converter Online Free - Pixselli',
    description: 'Convert JPG images to BMP quickly with dependable output.',
    url: 'https://pixselli.com/jpg-to-bmp',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JPG to BMP converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG to BMP Converter Online Free - Pixselli',
    description: 'Convert JPG to BMP online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
