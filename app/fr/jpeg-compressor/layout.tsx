import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresseur JPEG en ligne gratuit - Reduire la taille JPEG | Pixselli',
  description:
    'Compressez des images JPEG en ligne avec une qualite ajustable pour des fichiers plus legers et un traitement prive rapide dans le navigateur.',
  keywords: ['compresseur jpeg', 'compresser jpeg', 'optimiser jpeg', 'reduire taille jpeg'],
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
    canonical: 'https://pixselli.com/fr/jpeg-compressor',
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
    title: 'Compresseur JPEG en ligne gratuit - Pixselli',
    description: 'Reduisez la taille des JPEG avec une compression rapide dans le navigateur.',
    url: 'https://pixselli.com/fr/jpeg-compressor',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compresseur JPEG en ligne gratuit - Pixselli',
    description: 'Compressez des JPEG et reduisez la taille du fichier rapidement.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchJpegCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
