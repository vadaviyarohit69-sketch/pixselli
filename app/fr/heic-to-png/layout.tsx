import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur HEIC vers PNG en Ligne Gratuit - Convertir des Images HEIC | Pixselli',
  description:
    'Convertissez des images HEIC en PNG en ligne avec traitement prive dans le navigateur et sortie haute qualite.',
  keywords: ['heic vers png', 'convertir heic en png', 'convertisseur heic png', 'heic iphone'],
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
    canonical: 'https://pixselli.com/fr/heic-to-png',
    languages: {
      en: 'https://pixselli.com/heic-to-png',
      es: 'https://pixselli.com/es/heic-to-png',
      pt: 'https://pixselli.com/pt/heic-to-png',
      fr: 'https://pixselli.com/fr/heic-to-png',
      de: 'https://pixselli.com/de/heic-to-png',
      it: 'https://pixselli.com/it/heic-to-png',
      'x-default': 'https://pixselli.com/heic-to-png',
    },
  },
  openGraph: {
    title: 'Convertisseur HEIC vers PNG en Ligne Gratuit - Pixselli',
    description: 'Convertissez HEIC en PNG rapidement avec une sortie fiable.',
    url: 'https://pixselli.com/fr/heic-to-png',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertisseur HEIC vers PNG en Ligne Gratuit - Pixselli',
    description: 'Convertissez HEIC en PNG en ligne rapidement et en toute securite.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchHeicToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
