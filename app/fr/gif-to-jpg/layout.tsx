import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur GIF vers JPG en Ligne Gratuit - Convertir des Images GIF | Pixselli',
  description:
    'Convertissez des images GIF en JPG en ligne avec traitement prive dans le navigateur et controle de qualite.',
  keywords: ['gif vers jpg', 'convertir gif en jpg', 'convertisseur gif jpg', 'convertisseur jpg'],
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
    canonical: 'https://pixselli.com/fr/gif-to-jpg',
    languages: {
      en: 'https://pixselli.com/gif-to-jpg',
      es: 'https://pixselli.com/es/gif-to-jpg',
      pt: 'https://pixselli.com/pt/gif-to-jpg',
      fr: 'https://pixselli.com/fr/gif-to-jpg',
      de: 'https://pixselli.com/de/gif-to-jpg',
      it: 'https://pixselli.com/it/gif-to-jpg',
      'x-default': 'https://pixselli.com/gif-to-jpg',
    },
  },
  openGraph: {
    title: 'Convertisseur GIF vers JPG en Ligne Gratuit - Pixselli',
    description: 'Convertissez GIF en JPG rapidement avec une sortie fiable.',
    url: 'https://pixselli.com/fr/gif-to-jpg',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertisseur GIF vers JPG en Ligne Gratuit - Pixselli',
    description: 'Convertissez GIF en JPG en ligne rapidement et en toute securite.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchGifToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
