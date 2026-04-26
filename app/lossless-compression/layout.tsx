import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lossless Compression Online Free - Keep Image Quality | Pixselli',
  description:
    'Compress images with lossless settings online to reduce size while preserving visual quality using private browser processing.',
  keywords: ['lossless-compression', 'lossless image compression', 'reduce image size', 'online compressor'],
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
    canonical: 'https://pixselli.com/lossless-compression',
    languages: {
      en: 'https://pixselli.com/lossless-compression',
      es: 'https://pixselli.com/es/lossless-compression',
      pt: 'https://pixselli.com/pt/lossless-compression',
      fr: 'https://pixselli.com/fr/lossless-compression',
      de: 'https://pixselli.com/de/lossless-compression',
      it: 'https://pixselli.com/it/lossless-compression',
      'x-default': 'https://pixselli.com/lossless-compression',
    },
  },
  openGraph: {
    title: 'Lossless Compression Online Free - Pixselli',
    description: 'Optimize images with lossless compression and keep high quality output.',
    url: 'https://pixselli.com/lossless-compression',
    siteName: 'Pixselli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lossless compression tool by Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lossless Compression Online Free - Pixselli',
    description: 'Reduce image file size while preserving quality with lossless compression.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
