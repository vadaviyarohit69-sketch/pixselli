import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur PNG vers HEIC en Ligne Gratuit - Convertir des Images PNG | Pixselli',
  description:
    'Convertissez des images PNG en HEIC en ligne avec traitement prive dans le navigateur et controle de qualite.',
  keywords: ['png vers heic', 'convertir png en heic', 'convertisseur png heic', 'heic converter'],
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
    canonical: 'https://pixselli.com/fr/png-to-heic',
    languages: {
      en: 'https://pixselli.com/png-to-heic',
      es: 'https://pixselli.com/es/png-to-heic',
      pt: 'https://pixselli.com/pt/png-to-heic',
      fr: 'https://pixselli.com/fr/png-to-heic',
      de: 'https://pixselli.com/de/png-to-heic',
      it: 'https://pixselli.com/it/png-to-heic',
      'x-default': 'https://pixselli.com/png-to-heic',
    },
  },
  openGraph: {
    title: 'Convertisseur PNG vers HEIC en Ligne Gratuit - Pixselli',
    description: 'Convertissez PNG en HEIC rapidement avec sortie fiable.',
    url: 'https://pixselli.com/fr/png-to-heic',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertisseur PNG vers HEIC en Ligne Gratuit - Pixselli',
    description: 'Convertissez PNG en HEIC en ligne rapidement et en toute securite.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchPngToHeicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
