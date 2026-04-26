import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GIF Compressor Online Free - Reduce GIF File Size | Pixselli',
  description:
    'Compress GIF images online with quality-aware optimization for smaller file size and fast private browser processing.',
  keywords: ['gif-compressor', 'compress gif', 'gif optimizer', 'reduce gif size'],
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
    canonical: 'https://pixselli.com/gif-compressor',
    languages: {
      en: 'https://pixselli.com/gif-compressor',
      es: 'https://pixselli.com/es/gif-compressor',
      pt: 'https://pixselli.com/pt/gif-compressor',
      fr: 'https://pixselli.com/fr/gif-compressor',
      de: 'https://pixselli.com/de/gif-compressor',
      it: 'https://pixselli.com/it/gif-compressor',
      'x-default': 'https://pixselli.com/gif-compressor',
    },
  },
  openGraph: {
    title: 'GIF Compressor Online Free - Pixselli',
    description: 'Reduce GIF file size with fast browser-based compression.',
    url: 'https://pixselli.com/gif-compressor',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GIF compressor tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GIF Compressor Online Free - Pixselli',
    description: 'Compress GIF files and reduce size online quickly.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}