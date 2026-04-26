import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compressore GIF Online Gratis - Riduci Dimensione GIF | Pixselli',
  description:
    'Comprimi immagini GIF online con ottimizzazione della qualita per file piu leggeri e un elaborazione privata veloce nel browser.',
  keywords: ['compressore gif', 'comprimere gif', 'ottimizzare gif', 'ridurre dimensione gif'],
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
    canonical: 'https://pixselli.com/it/gif-compressor',
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
    title: 'Compressore GIF Online Gratis - Pixselli',
    description: 'Riduci la dimensione dei file GIF con compressione rapida nel browser.',
    url: 'https://pixselli.com/it/gif-compressor',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Strumento compressore GIF di Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compressore GIF Online Gratis - Pixselli',
    description: 'Comprimi GIF e riduci la dimensione del file rapidamente.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianGifCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
