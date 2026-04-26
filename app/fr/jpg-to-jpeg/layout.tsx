import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur JPG vers JPEG en Ligne Gratuit - Convertir des Fichiers JPG | Pixselli',
  description:
    'Convertissez le format JPG en JPEG en ligne avec traitement rapide dans le navigateur et sortie de haute qualite.',
  keywords: ['jpg vers jpeg', 'convertir jpg en jpeg', 'convertisseur jpg jpeg', 'convertisseur jpeg'],
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
    canonical: 'https://pixselli.com/fr/jpg-to-jpeg',
    languages: {
      en: 'https://pixselli.com/jpg-to-jpeg',
      es: 'https://pixselli.com/es/jpg-to-jpeg',
      pt: 'https://pixselli.com/pt/jpg-to-jpeg',
      fr: 'https://pixselli.com/fr/jpg-to-jpeg',
      de: 'https://pixselli.com/de/jpg-to-jpeg',
      it: 'https://pixselli.com/it/jpg-to-jpeg',
      'x-default': 'https://pixselli.com/jpg-to-jpeg',
    },
  },
  openGraph: {
    title: 'Convertisseur JPG vers JPEG en Ligne Gratuit - Pixselli',
    description: 'Convertissez des fichiers JPG en JPEG rapidement et en toute securite.',
    url: 'https://pixselli.com/fr/jpg-to-jpeg',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertisseur JPG vers JPEG en Ligne Gratuit - Pixselli',
    description: 'Convertissez JPG vers JPEG en ligne avec sortie rapide et privee.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchJpgToJpegLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
