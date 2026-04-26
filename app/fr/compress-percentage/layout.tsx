import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresser par pourcentage en ligne gratuit - 10% a 90% | Pixselli',
  description:
    'Compressez des images par pourcentage en ligne de 10% a 90% avec un traitement rapide et prive dans le navigateur.',
  keywords: ['compresser par pourcentage', 'compression par pourcentage', 'reduire taille', 'compresseur en ligne'],
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
    canonical: 'https://pixselli.com/fr/compress-percentage',
    languages: {
      en: 'https://pixselli.com/compress-percentage',
      es: 'https://pixselli.com/es/compress-percentage',
      pt: 'https://pixselli.com/pt/compress-percentage',
      fr: 'https://pixselli.com/fr/compress-percentage',
      de: 'https://pixselli.com/de/compress-percentage',
      it: 'https://pixselli.com/it/compress-percentage',
      'x-default': 'https://pixselli.com/compress-percentage',
    },
  },
  openGraph: {
    title: 'Compresser par pourcentage en ligne gratuit - Pixselli',
    description: 'Reduisez la taille d image par pourcentage avec un reglage flexible et une sortie rapide.',
    url: 'https://pixselli.com/fr/compress-percentage',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Outil de compression par pourcentage Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compresser par pourcentage en ligne gratuit - Pixselli',
    description: 'Compressez des images par pourcentage de 10% a 90% en ligne.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchCompressPercentageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
