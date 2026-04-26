import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signature Resizer Online Free - Resize Signature for Documents | Pixselli',
  description:
    'Resize signature images online with custom dimensions and transparent background support. Perfect for forms, email signatures, and legal documents.',
  keywords: ['signature resizer', 'resize signature', 'signature size for documents', 'email signature size', 'digital signature image'],
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
    canonical: 'https://pixselli.com/signature-resizer',
    languages: {
      en: 'https://pixselli.com/signature-resizer',
      es: 'https://pixselli.com/es/signature-resizer',
      'x-default': 'https://pixselli.com/signature-resizer',
      pt: 'https://pixselli.com/pt/signature-resizer',
      fr: 'https://pixselli.com/fr/signature-resizer',
      de: 'https://pixselli.com/de/signature-resizer',
      it: 'https://pixselli.com/it/signature-resizer',
    },
  },
  openGraph: {
    title: 'Signature Resizer Online Free - Pixselli',
    description:
      'Create document-ready signature images with custom width/height, transparent background, and multi-format export.',
    url: 'https://pixselli.com/signature-resizer',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Signature Resizer by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Signature Resizer Online Free - Pixselli',
    description: 'Resize signature images for forms and documents instantly with transparent background support.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}