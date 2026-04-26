import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresseur PNG en Ligne Gratuit - Reduire la Taille du PNG | Pixselli',
  description:
    'Compressez des images PNG en ligne avec une optimisation de qualite pour des fichiers plus legers et un traitement prive rapide dans le navigateur.',
  keywords: ['compresseur png', 'compresser png', 'optimiser png', 'reduire taille png'],
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
    canonical: 'https://pixselli.com/fr/png-compressor',
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
    title: 'Compresseur PNG en Ligne Gratuit - Pixselli',
    description: 'Reduisez la taille des PNG avec une compression rapide dans le navigateur.',
    url: 'https://pixselli.com/fr/png-compressor',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compresseur PNG en Ligne Gratuit - Pixselli',
    description: 'Compressez PNG et reduisez la taille du fichier rapidement.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchPngCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
