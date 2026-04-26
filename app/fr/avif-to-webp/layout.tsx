import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur AVIF vers WebP en Ligne Gratuit - Convertir des Images AVIF | Pixselli',
  description:
    'Convertissez des images AVIF en WebP en ligne avec traitement prive dans le navigateur et controle de qualite.',
  keywords: ['avif vers webp', 'convertir avif en webp', 'convertisseur avif webp', 'convertisseur webp'],
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
    canonical: 'https://pixselli.com/fr/avif-to-webp',
    languages: {
      en: 'https://pixselli.com/avif-to-webp',
      es: 'https://pixselli.com/es/avif-to-webp',
      pt: 'https://pixselli.com/pt/avif-to-webp',
      fr: 'https://pixselli.com/fr/avif-to-webp',
      de: 'https://pixselli.com/de/avif-to-webp',
      it: 'https://pixselli.com/it/avif-to-webp',
      'x-default': 'https://pixselli.com/avif-to-webp',
    },
  },
  openGraph: {
    title: 'Convertisseur AVIF vers WebP en Ligne Gratuit - Pixselli',
    description: 'Convertissez AVIF en WebP rapidement avec une sortie fiable.',
    url: 'https://pixselli.com/fr/avif-to-webp',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertisseur AVIF vers WebP en Ligne Gratuit - Pixselli',
    description: 'Convertissez AVIF en WebP en ligne rapidement et en toute securite.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchAvifToWebpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
