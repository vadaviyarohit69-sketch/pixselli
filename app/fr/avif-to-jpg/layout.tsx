import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur AVIF vers JPG en Ligne Gratuit - Convertir des Images AVIF | Pixselli',
  description:
    'Convertissez des images AVIF en JPG en ligne avec traitement prive dans le navigateur et controle de qualite.',
  keywords: ['avif vers jpg', 'convertir avif en jpg', 'convertisseur avif jpg', 'convertisseur jpg'],
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
    canonical: 'https://pixselli.com/fr/avif-to-jpg',
    languages: {
      en: 'https://pixselli.com/avif-to-jpg',
      es: 'https://pixselli.com/es/avif-to-jpg',
      pt: 'https://pixselli.com/pt/avif-to-jpg',
      fr: 'https://pixselli.com/fr/avif-to-jpg',
      de: 'https://pixselli.com/de/avif-to-jpg',
      it: 'https://pixselli.com/it/avif-to-jpg',
      'x-default': 'https://pixselli.com/avif-to-jpg',
    },
  },
  openGraph: {
    title: 'Convertisseur AVIF vers JPG en Ligne Gratuit - Pixselli',
    description: 'Convertissez AVIF en JPG rapidement avec une sortie fiable.',
    url: 'https://pixselli.com/fr/avif-to-jpg',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertisseur AVIF vers JPG en Ligne Gratuit - Pixselli',
    description: 'Convertissez AVIF en JPG en ligne rapidement et en toute securite.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchAvifToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
