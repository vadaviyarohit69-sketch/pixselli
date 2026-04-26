import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur JPG vers GIF en Ligne Gratuit - Convertir des Images JPG | Pixselli',
  description:
    'Convertissez des images JPG en GIF en ligne avec traitement prive dans le navigateur et controle de qualite.',
  keywords: ['jpg vers gif', 'convertir jpg en gif', 'convertisseur jpg gif', 'convertisseur gif'],
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
    canonical: 'https://pixselli.com/fr/jpg-to-gif',
    languages: {
      en: 'https://pixselli.com/jpg-to-gif',
      es: 'https://pixselli.com/es/jpg-to-gif',
      pt: 'https://pixselli.com/pt/jpg-to-gif',
      fr: 'https://pixselli.com/fr/jpg-to-gif',
      de: 'https://pixselli.com/de/jpg-to-gif',
      it: 'https://pixselli.com/it/jpg-to-gif',
      'x-default': 'https://pixselli.com/jpg-to-gif',
    },
  },
  openGraph: {
    title: 'Convertisseur JPG vers GIF en Ligne Gratuit - Pixselli',
    description: 'Convertissez JPG en GIF rapidement avec une sortie fiable.',
    url: 'https://pixselli.com/fr/jpg-to-gif',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertisseur JPG vers GIF en Ligne Gratuit - Pixselli',
    description: 'Convertissez JPG en GIF en ligne rapidement et en toute securite.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchJpgToGifLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
