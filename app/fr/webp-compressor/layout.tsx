import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresseur WebP en Ligne Gratuit - Reduire la Taille du WebP | Pixselli',
  description:
    'Compressez des images WebP en ligne avec une optimisation de qualite pour des fichiers plus legers et un traitement prive rapide dans le navigateur.',
  keywords: ['compresseur webp', 'compresser webp', 'optimiser webp', 'reduire taille webp'],
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
    canonical: 'https://pixselli.com/fr/webp-compressor',
    languages: {
      en: 'https://pixselli.com/webp-compressor',
      es: 'https://pixselli.com/es/webp-compressor',
      pt: 'https://pixselli.com/pt/webp-compressor',
      fr: 'https://pixselli.com/fr/webp-compressor',
      de: 'https://pixselli.com/de/webp-compressor',
      it: 'https://pixselli.com/it/webp-compressor',
      'x-default': 'https://pixselli.com/webp-compressor',
    },
  },
  openGraph: {
    title: 'Compresseur WebP en Ligne Gratuit - Pixselli',
    description: 'Reduisez la taille des images WebP avec une compression rapide dans le navigateur.',
    url: 'https://pixselli.com/fr/webp-compressor',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compresseur WebP en Ligne Gratuit - Pixselli',
    description: 'Compressez WebP et reduisez la taille du fichier rapidement.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchWebpCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
