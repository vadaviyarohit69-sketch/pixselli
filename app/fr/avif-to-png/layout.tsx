import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur AVIF vers PNG en Ligne Gratuit - Convertir des Images AVIF | Pixselli',
  description:
    'Convertissez des images AVIF en PNG en ligne avec traitement prive dans le navigateur et sortie de haute qualite.',
  keywords: ['avif vers png', 'convertir avif en png', 'convertisseur avif png', 'convertisseur png'],
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
    canonical: 'https://pixselli.com/fr/avif-to-png',
    languages: {
      en: 'https://pixselli.com/avif-to-png',
      es: 'https://pixselli.com/es/avif-to-png',
      pt: 'https://pixselli.com/pt/avif-to-png',
      fr: 'https://pixselli.com/fr/avif-to-png',
      de: 'https://pixselli.com/de/avif-to-png',
      it: 'https://pixselli.com/it/avif-to-png',
      'x-default': 'https://pixselli.com/avif-to-png',
    },
  },
  openGraph: {
    title: 'Convertisseur AVIF vers PNG en Ligne Gratuit - Pixselli',
    description: 'Convertissez AVIF en PNG rapidement avec une sortie fiable.',
    url: 'https://pixselli.com/fr/avif-to-png',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertisseur AVIF vers PNG en Ligne Gratuit - Pixselli',
    description: 'Convertissez AVIF en PNG en ligne rapidement et en toute securite.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchAvifToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
