import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PDF to PNG Converter Online Free - Convert PDF Pages | Pixselli',
  description:
    'Convert PDF pages to PNG images online with resolution controls using browser-based private processing.',
  keywords: ['pdf to png', 'convert pdf to png', 'extract pdf pages', 'pdf pages to png', 'pdf image converter'],
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
    canonical: 'https://pixselli.com/pdf-to-png',
    languages: {
      en: 'https://pixselli.com/pdf-to-png',
      es: 'https://pixselli.com/es/pdf-to-png',
      pt: 'https://pixselli.com/pt/pdf-to-png',
      fr: 'https://pixselli.com/fr/pdf-to-png',
      de: 'https://pixselli.com/de/pdf-to-png',
      it: 'https://pixselli.com/it/pdf-to-png',
      'x-default': 'https://pixselli.com/pdf-to-png',
    },
  },
  openGraph: {
    title: 'PDF to PNG Converter Online Free - Pixselli',
    description: 'Convert PDF pages to PNG images with high-fidelity rendering.',
    url: 'https://pixselli.com/pdf-to-png',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PDF to PNG converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF to PNG Converter Online Free - Pixselli',
    description: 'Convert PDF to PNG online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PDFtoPNGLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
