import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur ICO vers PNG en Ligne Gratuit - Convertir des Fichiers ICO | Pixselli',
  description:
    'Convertissez des fichiers ICO en PNG en ligne avec traitement prive dans le navigateur et sortie de haute qualite.',
  keywords: ['ico vers png', 'convertir ico en png', 'convertisseur ico png', 'convertisseur png'],
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
    canonical: 'https://pixselli.com/fr/ico-to-png',
    languages: {
      en: 'https://pixselli.com/ico-to-png',
      es: 'https://pixselli.com/es/ico-to-png',
      pt: 'https://pixselli.com/pt/ico-to-png',
      fr: 'https://pixselli.com/fr/ico-to-png',
      de: 'https://pixselli.com/de/ico-to-png',
      it: 'https://pixselli.com/it/ico-to-png',
      'x-default': 'https://pixselli.com/ico-to-png',
    },
  },
  openGraph: {
    title: 'Convertisseur ICO vers PNG en Ligne Gratuit - Pixselli',
    description: 'Convertissez ICO en PNG rapidement avec une sortie fiable.',
    url: 'https://pixselli.com/fr/ico-to-png',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertisseur ICO vers PNG en Ligne Gratuit - Pixselli',
    description: 'Convertissez ICO en PNG en ligne rapidement et en toute securite.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchIcoToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
