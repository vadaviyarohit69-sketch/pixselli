import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AVIF to PDF Converter Online Free - Convert AVIF Images | Pixselli',
  description:
    'Convert AVIF images to PDF online with page size, orientation, margin, and merge controls using browser-based private processing.',
  keywords: ['avif to pdf', 'convert avif to pdf', 'image to pdf', 'merge avif to pdf', 'avif pdf converter'],
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
    canonical: 'https://pixselli.com/avif-to-pdf',
    languages: {
      en: 'https://pixselli.com/avif-to-pdf',
      es: 'https://pixselli.com/es/avif-to-pdf',
      pt: 'https://pixselli.com/pt/avif-to-pdf',
      fr: 'https://pixselli.com/fr/avif-to-pdf',
      de: 'https://pixselli.com/de/avif-to-pdf',
      it: 'https://pixselli.com/it/avif-to-pdf',
      'x-default': 'https://pixselli.com/avif-to-pdf',
    },
  },
  openGraph: {
    title: 'AVIF to PDF Converter Online Free - Pixselli',
    description: 'Convert AVIF images to PDF quickly with advanced page controls.',
    url: 'https://pixselli.com/avif-to-pdf',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AVIF to PDF converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVIF to PDF Converter Online Free - Pixselli',
    description: 'Convert AVIF to PDF online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function AVIFtoPDFLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
