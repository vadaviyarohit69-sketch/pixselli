import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PDF to JPG Converter Online Free - Convert PDF Pages | Pixselli',
  description:
    'Convert PDF pages to JPG images online with quality and resolution controls using browser-based private processing.',
  keywords: ['pdf to jpg', 'pdf to jpeg', 'convert pdf to jpg', 'extract pdf pages', 'pdf pages to image'],
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
    canonical: 'https://pixselli.com/pdf-to-jpg',
    languages: {
      en: 'https://pixselli.com/pdf-to-jpg',
      es: 'https://pixselli.com/es/pdf-to-jpg',
      pt: 'https://pixselli.com/pt/pdf-to-jpg',
      fr: 'https://pixselli.com/fr/pdf-to-jpg',
      de: 'https://pixselli.com/de/pdf-to-jpg',
      it: 'https://pixselli.com/it/pdf-to-jpg',
      'x-default': 'https://pixselli.com/pdf-to-jpg',
    },
  },
  openGraph: {
    title: 'PDF to JPG Converter Online Free - Pixselli',
    description: 'Convert PDF pages to JPG images with quality controls.',
    url: 'https://pixselli.com/pdf-to-jpg',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PDF to JPG converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF to JPG Converter Online Free - Pixselli',
    description: 'Convert PDF to JPG online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PDFtoJPGLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
