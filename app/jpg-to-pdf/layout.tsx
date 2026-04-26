import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JPG to PDF Converter Online Free - Convert JPG Images | Pixselli',
  description:
    'Convert JPG images to PDF online with page size, orientation, margin, and merge controls using browser-based private processing.',
  keywords: ['jpg to pdf', 'jpeg to pdf', 'convert jpg to pdf', 'image to pdf', 'merge jpg to pdf'],
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
    canonical: 'https://pixselli.com/jpg-to-pdf',
    languages: {
      en: 'https://pixselli.com/jpg-to-pdf',
      es: 'https://pixselli.com/es/jpg-to-pdf',
      pt: 'https://pixselli.com/pt/jpg-to-pdf',
      fr: 'https://pixselli.com/fr/jpg-to-pdf',
      de: 'https://pixselli.com/de/jpg-to-pdf',
      it: 'https://pixselli.com/it/jpg-to-pdf',
      'x-default': 'https://pixselli.com/jpg-to-pdf',
    },
  },
  openGraph: {
    title: 'JPG to PDF Converter Online Free - Pixselli',
    description: 'Convert JPG images to PDF quickly with advanced page controls.',
    url: 'https://pixselli.com/jpg-to-pdf',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JPG to PDF converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG to PDF Converter Online Free - Pixselli',
    description: 'Convert JPG to PDF online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function JPGtoPDFLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
