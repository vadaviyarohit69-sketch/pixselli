import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresseur JPG en Ligne Gratuit - Reduire la Taille du JPG | Pixselli',
  description:
    'Compressez des images JPG en ligne avec une qualite ajustable pour des fichiers plus legers et un traitement prive rapide dans le navigateur.',
  keywords: ['compresseur jpg', 'compresser jpg', 'optimiser jpg', 'reduire taille jpg'],
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
    canonical: 'https://pixselli.com/fr/jpg-compressor',
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
    title: 'Compresseur JPG en Ligne Gratuit - Pixselli',
    description: 'Reduisez la taille des JPG avec une compression rapide dans le navigateur.',
    url: 'https://pixselli.com/fr/jpg-compressor',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compresseur JPG en Ligne Gratuit - Pixselli',
    description: 'Compressez JPG et reduisez la taille du fichier rapidement.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchJpgCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
