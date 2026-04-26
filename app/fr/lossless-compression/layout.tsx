import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compression sans perte en ligne gratuit - Garder la qualite | Pixselli',
  description:
    'Compressez des images avec des reglages sans perte pour reduire la taille tout en preservant la qualite, en traitement prive dans le navigateur.',
  keywords: ['compression sans perte', 'compression lossless', 'reduire taille sans perte', 'compresseur en ligne'],
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
    canonical: 'https://pixselli.com/fr/lossless-compression',
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
    title: 'Compression sans perte en ligne gratuit - Pixselli',
    description: 'Optimisez des images avec compression sans perte en conservant une haute qualite.',
    url: 'https://pixselli.com/fr/lossless-compression',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Outil de compression sans perte Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compression sans perte en ligne gratuit - Pixselli',
    description: 'Reduisez la taille des images sans perdre de qualite avec une compression sans perte.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchLosslessCompressionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
