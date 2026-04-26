import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JPEG Compressor Online Free - Reduce JPEG File Size | Pixselli',
  description:
    'Compress JPEG images online with adjustable quality for smaller file size and fast private processing in browser.',
  keywords: ['jpeg-compressor', 'compress jpeg', 'jpeg optimizer', 'reduce jpeg size'],
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
    canonical: 'https://pixselli.com/jpeg-compressor',
    languages: {
      en: 'https://pixselli.com/jpeg-compressor',
      es: 'https://pixselli.com/es/jpeg-compressor',
      pt: 'https://pixselli.com/pt/jpeg-compressor',
      fr: 'https://pixselli.com/fr/jpeg-compressor',
      de: 'https://pixselli.com/de/jpeg-compressor',
      it: 'https://pixselli.com/it/jpeg-compressor',
      'x-default': 'https://pixselli.com/jpeg-compressor',
    },
  },
  openGraph: {
    title: 'JPEG Compressor Online Free - Pixselli',
    description: 'Reduce JPEG image size with quality control and fast output.',
    url: 'https://pixselli.com/jpeg-compressor',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JPEG compressor tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPEG Compressor Online Free - Pixselli',
    description: 'Compress JPEG images and reduce file size online quickly.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
