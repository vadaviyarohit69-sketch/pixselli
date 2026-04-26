import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur BMP vers JPG en Ligne Gratuit - Convertir des Images BMP | Pixselli',
  description:
    'Convertissez des images BMP en JPG en ligne avec traitement prive dans le navigateur et controle de qualite.',
  keywords: ['bmp vers jpg', 'convertir bmp en jpg', 'convertisseur bmp jpg', 'convertisseur jpg'],
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
    canonical: 'https://pixselli.com/fr/bmp-to-jpg',
    languages: {
      en: 'https://pixselli.com/bmp-to-jpg',
      es: 'https://pixselli.com/es/bmp-to-jpg',
      pt: 'https://pixselli.com/pt/bmp-to-jpg',
      fr: 'https://pixselli.com/fr/bmp-to-jpg',
      de: 'https://pixselli.com/de/bmp-to-jpg',
      it: 'https://pixselli.com/it/bmp-to-jpg',
      'x-default': 'https://pixselli.com/bmp-to-jpg',
    },
  },
  openGraph: {
    title: 'Convertisseur BMP vers JPG en Ligne Gratuit - Pixselli',
    description: 'Convertissez BMP en JPG rapidement avec une sortie fiable.',
    url: 'https://pixselli.com/fr/bmp-to-jpg',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertisseur BMP vers JPG en Ligne Gratuit - Pixselli',
    description: 'Convertissez BMP en JPG en ligne rapidement et en toute securite.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchBmpToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
