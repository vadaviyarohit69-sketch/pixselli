import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PNG Compressor Online Free - Reduce PNG File Size | Pixselli',
  description:
    'Compress PNG images online with quality-aware optimization for smaller file size and fast private browser processing.',
  keywords: ['png-compressor', 'compress png', 'png optimizer', 'reduce png size'],
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
    canonical: 'https://pixselli.com/png-compressor',
    languages: {
      en: 'https://pixselli.com/png-compressor',
      es: 'https://pixselli.com/es/png-compressor',
      pt: 'https://pixselli.com/pt/png-compressor',
      fr: 'https://pixselli.com/fr/png-compressor',
      de: 'https://pixselli.com/de/png-compressor',
      it: 'https://pixselli.com/it/png-compressor',
      'x-default': 'https://pixselli.com/png-compressor',
    },
  },
  openGraph: {
    title: 'PNG Compressor Online Free - Pixselli',
    description: 'Reduce PNG image size with fast browser-based compression.',
    url: 'https://pixselli.com/png-compressor',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PNG compressor tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNG Compressor Online Free - Pixselli',
    description: 'Compress PNG images and reduce file size online quickly.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}