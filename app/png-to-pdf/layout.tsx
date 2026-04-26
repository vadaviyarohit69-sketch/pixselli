import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PNG to PDF Converter Online Free - Convert PNG Images | Pixselli',
  description:
    'Convert PNG images to PDF online with page size, orientation, margin, and merge controls using browser-based private processing.',
  keywords: ['png to pdf', 'convert png to pdf', 'image to pdf', 'merge png to pdf', 'transparent png to pdf'],
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
    canonical: 'https://pixselli.com/png-to-pdf',
    languages: {
      en: 'https://pixselli.com/png-to-pdf',
      es: 'https://pixselli.com/es/png-to-pdf',
      pt: 'https://pixselli.com/pt/png-to-pdf',
      fr: 'https://pixselli.com/fr/png-to-pdf',
      de: 'https://pixselli.com/de/png-to-pdf',
      it: 'https://pixselli.com/it/png-to-pdf',
      'x-default': 'https://pixselli.com/png-to-pdf',
    },
  },
  openGraph: {
    title: 'PNG to PDF Converter Online Free - Pixselli',
    description: 'Convert PNG images to PDF quickly with advanced page controls.',
    url: 'https://pixselli.com/png-to-pdf',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PNG to PDF converter tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNG to PDF Converter Online Free - Pixselli',
    description: 'Convert PNG to PDF online quickly and securely.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PNGtoPDFLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
