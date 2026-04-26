import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PDF to WebP Converter Online Free - Convert PDF Pages | Pixselli',
  description:
    'Convert PDF pages to WebP images online with quality and resolution controls using browser-based private processing.',
  keywords: ['pdf to webp', 'convert pdf to webp', 'extract pdf pages', 'pdf pages to webp', 'pdf image converter'],
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
    canonical: 'https://pixselli.com/pdf-to-webp',
    languages: {
      en: 'https://pixselli.com/pdf-to-webp',
      es: 'https://pixselli.com/es/pdf-to-webp',
      pt: 'https://pixselli.com/pt/pdf-to-webp',
      fr: 'https://pixselli.com/fr/pdf-to-webp',
      de: 'https://pixselli.com/de/pdf-to-webp',
      it: 'https://pixselli.com/it/pdf-to-webp',
      'x-default': 'https://pixselli.com/pdf-to-webp',
    },
  },
  openGraph: {
    title: 'PDF to WebP Converter Online Free - Pixselli',
    description: 'Convert PDF pages to WebP images with modern compression controls.',
    url: 'https://pixselli.com/pdf-to-webp',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PDF to WebP converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF to WebP Converter Online Free - Pixselli',
    description: 'Convert PDF to WebP online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PDFtoWebPLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
