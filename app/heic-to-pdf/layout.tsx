import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HEIC to PDF Converter Online Free - Convert HEIC Photos | Pixselli',
  description:
    'Convert HEIC photos to PDF online with page size, orientation, margin, and merge controls using browser-based private processing.',
  keywords: ['heic to pdf', 'heif to pdf', 'convert heic to pdf', 'iphone photo to pdf', 'merge heic to pdf'],
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
    canonical: 'https://pixselli.com/heic-to-pdf',
    languages: {
      en: 'https://pixselli.com/heic-to-pdf',
      es: 'https://pixselli.com/es/heic-to-pdf',
      pt: 'https://pixselli.com/pt/heic-to-pdf',
      fr: 'https://pixselli.com/fr/heic-to-pdf',
      de: 'https://pixselli.com/de/heic-to-pdf',
      it: 'https://pixselli.com/it/heic-to-pdf',
      'x-default': 'https://pixselli.com/heic-to-pdf',
    },
  },
  openGraph: {
    title: 'HEIC to PDF Converter Online Free - Pixselli',
    description: 'Convert HEIC photos to PDF quickly with advanced page controls.',
    url: 'https://pixselli.com/heic-to-pdf',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HEIC to PDF converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEIC to PDF Converter Online Free - Pixselli',
    description: 'Convert HEIC to PDF online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function HEICtoPDFLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
