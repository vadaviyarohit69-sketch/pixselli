import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresseur GIF en Ligne Gratuit - Reduire la Taille du GIF | Pixselli',
  description:
    'Compressez des images GIF en ligne avec une optimisation de qualite pour des fichiers plus legers et un traitement prive rapide dans le navigateur.',
  keywords: ['compresseur gif', 'compresser gif', 'optimiser gif', 'reduire taille gif'],
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
    canonical: 'https://pixselli.com/fr/gif-compressor',
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
    title: 'Compresseur GIF Gratuit en Ligne - Pixselli',
    description: 'Reduisez la taille des fichiers GIF avec une compression rapide dans le navigateur.',
    url: 'https://pixselli.com/fr/gif-compressor',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Outil compresseur GIF Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compresseur GIF en Ligne Gratuit - Pixselli',
    description: 'Compressez des GIF et reduisez la taille du fichier rapidement.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchGifCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
