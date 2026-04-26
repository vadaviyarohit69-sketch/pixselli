import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur JPG vers PNG en Ligne Gratuit - Convertir des Images JPG | Pixselli',
  description:
    'Convertissez des images JPG en PNG en ligne avec traitement prive dans le navigateur et sortie de haute qualite.',
  keywords: ['jpg vers png', 'convertir jpg en png', 'convertisseur jpg vers png', 'jpeg vers png'],
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
    canonical: 'https://pixselli.com/fr/jpg-to-png',
    languages: {
      en: 'https://pixselli.com/jpg-to-png',
      es: 'https://pixselli.com/es/jpg-to-png',
      pt: 'https://pixselli.com/pt/jpg-to-png',
      fr: 'https://pixselli.com/fr/jpg-to-png',
      de: 'https://pixselli.com/de/jpg-to-png',
      it: 'https://pixselli.com/it/jpg-to-png',
      'x-default': 'https://pixselli.com/jpg-to-png',
    },
  },
  openGraph: {
    title: 'Convertisseur JPG vers PNG en Ligne Gratuit - Pixselli',
    description: 'Convertissez JPG en PNG rapidement avec sortie de haute qualite.',
    url: 'https://pixselli.com/fr/jpg-to-png',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertisseur JPG vers PNG en Ligne Gratuit - Pixselli',
    description: 'Convertissez des fichiers JPG en PNG en ligne rapidement et en toute securite.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchJpgToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
