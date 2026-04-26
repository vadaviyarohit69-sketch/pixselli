import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur HEIC vers WebP en Ligne Gratuit - Convertir des Images HEIC | Pixselli',
  description:
    'Convertissez des images HEIC en WebP en ligne avec traitement prive dans le navigateur et controle de qualite.',
  keywords: ['heic vers webp', 'convertir heic en webp', 'convertisseur heic webp', 'heic iphone'],
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
    canonical: 'https://pixselli.com/fr/heic-to-webp',
    languages: {
      en: 'https://pixselli.com/heic-to-webp',
      es: 'https://pixselli.com/es/heic-to-webp',
      pt: 'https://pixselli.com/pt/heic-to-webp',
      fr: 'https://pixselli.com/fr/heic-to-webp',
      de: 'https://pixselli.com/de/heic-to-webp',
      it: 'https://pixselli.com/it/heic-to-webp',
      'x-default': 'https://pixselli.com/heic-to-webp',
    },
  },
  openGraph: {
    title: 'Convertisseur HEIC vers WebP en Ligne Gratuit - Pixselli',
    description: 'Convertissez HEIC en WebP rapidement avec une sortie fiable.',
    url: 'https://pixselli.com/fr/heic-to-webp',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertisseur HEIC vers WebP en Ligne Gratuit - Pixselli',
    description: 'Convertissez HEIC en WebP en ligne rapidement et en toute securite.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchHeicToWebpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
