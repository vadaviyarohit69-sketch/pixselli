import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur PNG vers JPG en Ligne Gratuit - Convertir des Images PNG | Pixselli',
  description:
    'Convertissez des images PNG en JPG en ligne avec controle de qualite et traitement prive dans le navigateur.',
  keywords: ['png vers jpg', 'convertir png en jpg', 'convertisseur png vers jpg', 'png vers jpeg'],
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
    canonical: 'https://pixselli.com/fr/png-to-jpg',
    languages: {
      en: 'https://pixselli.com/png-to-jpg',
      es: 'https://pixselli.com/es/png-to-jpg',
      pt: 'https://pixselli.com/pt/png-to-jpg',
      fr: 'https://pixselli.com/fr/png-to-jpg',
      de: 'https://pixselli.com/de/png-to-jpg',
      it: 'https://pixselli.com/it/png-to-jpg',
      'x-default': 'https://pixselli.com/png-to-jpg',
    },
  },
  openGraph: {
    title: 'Convertisseur PNG vers JPG en Ligne Gratuit - Pixselli',
    description: 'Convertissez PNG en JPG rapidement avec controle de qualite.',
    url: 'https://pixselli.com/fr/png-to-jpg',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertisseur PNG vers JPG en Ligne Gratuit - Pixselli',
    description: 'Convertissez des fichiers PNG en JPG en ligne rapidement et en toute securite.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchPngToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
