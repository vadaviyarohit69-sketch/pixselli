import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BMP to JPG Converter Online Free - Convert BMP Images | Pixselli',
  description:
    'Convert BMP images to JPG format online with browser-based private processing and quality controls.',
  keywords: ['bmp to jpg', 'convert bmp to jpg', 'bmp jpg converter', 'jpg converter'],
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
    canonical: 'https://pixselli.com/bmp-to-jpg',
    languages: {
      en: 'https://pixselli.com/bmp-to-jpg',
      es: 'https://pixselli.com/es/bmp-to-jpg',
      pt: 'https://pixselli.com/pt/bmp-to-jpg',
      fr: 'https://pixselli.com/fr/bmp-to-jpg',
      de: 'https://pixselli.com/de/bmp-to-jpg',
      it: 'https://pixselli.com/it/bmp-to-jpg',
      'x-default': 'https://pixselli.com/bmp-to-jpg',
    },
  },
  openGraph: {
    title: 'BMP to JPG Converter Online Free - Pixselli',
    description: 'Convert BMP images to JPG quickly with dependable output.',
    url: 'https://pixselli.com/bmp-to-jpg',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BMP to JPG converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMP to JPG Converter Online Free - Pixselli',
    description: 'Convert BMP to JPG online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
