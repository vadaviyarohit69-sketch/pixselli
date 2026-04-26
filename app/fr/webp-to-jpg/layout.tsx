import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur WebP vers JPG en Ligne Gratuit - Convertir des Images WebP | Pixselli',
  description:
    'Convertissez des images WebP en JPG en ligne avec traitement prive dans le navigateur et resultat de qualite.',
  keywords: ['webp vers jpg', 'convertir webp en jpg', 'convertisseur webp jpg', 'webp vers jpeg'],
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
    canonical: 'https://pixselli.com/fr/webp-to-jpg',
    languages: {
      en: 'https://pixselli.com/webp-to-jpg',
      es: 'https://pixselli.com/es/webp-to-jpg',
      pt: 'https://pixselli.com/pt/webp-to-jpg',
      fr: 'https://pixselli.com/fr/webp-to-jpg',
      de: 'https://pixselli.com/de/webp-to-jpg',
      it: 'https://pixselli.com/it/webp-to-jpg',
      'x-default': 'https://pixselli.com/webp-to-jpg',
    },
  },
  openGraph: {
    title: 'Convertisseur WebP vers JPG en Ligne Gratuit - Pixselli',
    description: 'Convertissez des fichiers WebP en JPG rapidement avec une sortie fiable.',
    url: 'https://pixselli.com/fr/webp-to-jpg',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertisseur WebP vers JPG en Ligne Gratuit - Pixselli',
    description: 'Convertissez WebP en JPG en ligne rapidement et en toute securite.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchWebpToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
