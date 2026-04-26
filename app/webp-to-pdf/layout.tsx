import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WebP to PDF Converter Online Free - Convert WebP Images | Pixselli',
  description:
    'Convert WebP images to PDF online with page size, orientation, margin, and merge controls using browser-based private processing.',
  keywords: ['webp to pdf', 'convert webp to pdf', 'image to pdf', 'merge webp to pdf'],
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
    canonical: 'https://pixselli.com/webp-to-pdf',
    languages: {
      en: 'https://pixselli.com/webp-to-pdf',
      es: 'https://pixselli.com/es/webp-to-pdf',
      pt: 'https://pixselli.com/pt/webp-to-pdf',
      fr: 'https://pixselli.com/fr/webp-to-pdf',
      de: 'https://pixselli.com/de/webp-to-pdf',
      it: 'https://pixselli.com/it/webp-to-pdf',
      'x-default': 'https://pixselli.com/webp-to-pdf',
    },
  },
  openGraph: {
    title: 'WebP to PDF Converter Online Free - Pixselli',
    description: 'Convert WebP images to PDF quickly with advanced page controls.',
    url: 'https://pixselli.com/webp-to-pdf',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WebP to PDF converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebP to PDF Converter Online Free - Pixselli',
    description: 'Convert WebP to PDF online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function WEBPtoPDFLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
