import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JPG Compressor Online Free - Reduce JPG File Size | Pixselli',
  description:
    'Compress JPG images online with adjustable quality for smaller file size and fast private processing in browser.',
  keywords: ['jpg-compressor', 'compress jpg', 'jpg optimizer', 'reduce jpg size'],
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
    canonical: 'https://pixselli.com/jpg-compressor',
    languages: {
      en: 'https://pixselli.com/jpg-compressor',
      es: 'https://pixselli.com/es/jpg-compressor',
      pt: 'https://pixselli.com/pt/jpg-compressor',
      fr: 'https://pixselli.com/fr/jpg-compressor',
      de: 'https://pixselli.com/de/jpg-compressor',
      it: 'https://pixselli.com/it/jpg-compressor',
      'x-default': 'https://pixselli.com/jpg-compressor',
    },
  },
  openGraph: {
    title: 'JPG Compressor Online Free - Pixselli',
    description: 'Reduce JPG image size with quality control and fast output.',
    url: 'https://pixselli.com/jpg-compressor',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JPG compressor tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG Compressor Online Free - Pixselli',
    description: 'Compress JPG images and reduce file size online quickly.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
