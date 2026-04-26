import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur WebP vers HEIC en Ligne Gratuit - Convertir des Images WebP | Pixselli',
  description:
    'Convertissez des images WebP en HEIC en ligne avec traitement prive dans le navigateur et controle de qualite.',
  keywords: ['webp vers heic', 'convertir webp en heic', 'convertisseur webp heic', 'convertisseur heic'],
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
    canonical: 'https://pixselli.com/fr/webp-to-heic',
    languages: {
      en: 'https://pixselli.com/webp-to-heic',
      es: 'https://pixselli.com/es/webp-to-heic',
      pt: 'https://pixselli.com/pt/webp-to-heic',
      fr: 'https://pixselli.com/fr/webp-to-heic',
      de: 'https://pixselli.com/de/webp-to-heic',
      it: 'https://pixselli.com/it/webp-to-heic',
      'x-default': 'https://pixselli.com/webp-to-heic',
    },
  },
  openGraph: {
    title: 'Convertisseur WebP vers HEIC en Ligne Gratuit - Pixselli',
    description: 'Convertissez WebP en HEIC rapidement avec une sortie fiable.',
    url: 'https://pixselli.com/fr/webp-to-heic',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertisseur WebP vers HEIC en Ligne Gratuit - Pixselli',
    description: 'Convertissez WebP en HEIC en ligne rapidement et en toute securite.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchWebpToHeicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
