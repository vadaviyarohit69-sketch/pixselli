import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur JPG vers AVIF en Ligne Gratuit - Convertir des Images JPG | Pixselli',
  description:
    'Convertissez des images JPG en AVIF en ligne avec traitement prive dans le navigateur et controle de qualite.',
  keywords: ['jpg vers avif', 'convertir jpg en avif', 'convertisseur jpg avif', 'convertisseur avif'],
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
    canonical: 'https://pixselli.com/fr/jpg-to-avif',
    languages: {
      en: 'https://pixselli.com/jpg-to-avif',
      es: 'https://pixselli.com/es/jpg-to-avif',
      pt: 'https://pixselli.com/pt/jpg-to-avif',
      fr: 'https://pixselli.com/fr/jpg-to-avif',
      de: 'https://pixselli.com/de/jpg-to-avif',
      it: 'https://pixselli.com/it/jpg-to-avif',
      'x-default': 'https://pixselli.com/jpg-to-avif',
    },
  },
  openGraph: {
    title: 'Convertisseur JPG vers AVIF en Ligne Gratuit - Pixselli',
    description: 'Convertissez JPG en AVIF rapidement avec une sortie fiable.',
    url: 'https://pixselli.com/fr/jpg-to-avif',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertisseur JPG vers AVIF en Ligne Gratuit - Pixselli',
    description: 'Convertissez JPG en AVIF en ligne rapidement et en toute securite.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchJpgToAvifLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
