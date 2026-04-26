import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur JPG vers BMP en Ligne Gratuit - Convertir des Images JPG | Pixselli',
  description:
    'Convertissez des images JPG en BMP en ligne avec traitement prive dans le navigateur et controles de qualite.',
  keywords: ['jpg vers bmp', 'convertir jpg en bmp', 'convertisseur jpg bmp', 'convertisseur bmp'],
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
    canonical: 'https://pixselli.com/fr/jpg-to-bmp',
    languages: {
      en: 'https://pixselli.com/jpg-to-bmp',
      es: 'https://pixselli.com/es/jpg-to-bmp',
      pt: 'https://pixselli.com/pt/jpg-to-bmp',
      fr: 'https://pixselli.com/fr/jpg-to-bmp',
      de: 'https://pixselli.com/de/jpg-to-bmp',
      it: 'https://pixselli.com/it/jpg-to-bmp',
      'x-default': 'https://pixselli.com/jpg-to-bmp',
    },
  },
  openGraph: {
    title: 'Convertisseur JPG vers BMP en Ligne Gratuit - Pixselli',
    description: 'Convertissez JPG en BMP rapidement avec une sortie fiable.',
    url: 'https://pixselli.com/fr/jpg-to-bmp',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertisseur JPG vers BMP en Ligne Gratuit - Pixselli',
    description: 'Convertissez JPG en BMP en ligne rapidement et en toute securite.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchJpgToBmpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
