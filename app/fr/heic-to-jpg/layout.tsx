import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur HEIC vers JPG en Ligne Gratuit - Convertir des Photos HEIC | Pixselli',
  description:
    'Convertissez des images HEIC en JPG en ligne avec traitement prive dans le navigateur pour une meilleure compatibilite.',
  keywords: ['heic vers jpg', 'convertir heic en jpg', 'convertisseur heic iphone', 'convertisseur heic jpg'],
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
    canonical: 'https://pixselli.com/fr/heic-to-jpg',
    languages: {
      en: 'https://pixselli.com/heic-to-jpg',
      es: 'https://pixselli.com/es/heic-to-jpg',
      pt: 'https://pixselli.com/pt/heic-to-jpg',
      fr: 'https://pixselli.com/fr/heic-to-jpg',
      de: 'https://pixselli.com/de/heic-to-jpg',
      it: 'https://pixselli.com/it/heic-to-jpg',
      'x-default': 'https://pixselli.com/heic-to-jpg',
    },
  },
  openGraph: {
    title: 'Convertisseur HEIC vers JPG en Ligne Gratuit - Pixselli',
    description: 'Convertissez des photos HEIC d iPhone en JPG rapidement.',
    url: 'https://pixselli.com/fr/heic-to-jpg',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertisseur HEIC vers JPG en Ligne Gratuit - Pixselli',
    description: 'Convertissez HEIC en JPG en ligne rapidement et en toute securite.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchHeicToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
