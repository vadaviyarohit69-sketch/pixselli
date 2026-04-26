import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur PNG vers ICO en Ligne Gratuit - Convertir des Images PNG | Pixselli',
  description:
    'Convertissez des images PNG en ICO en ligne avec traitement prive dans le navigateur et controle de qualite.',
  keywords: ['png vers ico', 'convertir png en ico', 'convertisseur png ico', 'convertisseur ico'],
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
    canonical: 'https://pixselli.com/fr/png-to-ico',
    languages: {
      en: 'https://pixselli.com/png-to-ico',
      es: 'https://pixselli.com/es/png-to-ico',
      pt: 'https://pixselli.com/pt/png-to-ico',
      fr: 'https://pixselli.com/fr/png-to-ico',
      de: 'https://pixselli.com/de/png-to-ico',
      it: 'https://pixselli.com/it/png-to-ico',
      'x-default': 'https://pixselli.com/png-to-ico',
    },
  },
  openGraph: {
    title: 'Convertisseur PNG vers ICO en Ligne Gratuit - Pixselli',
    description: 'Convertissez PNG en ICO rapidement avec une sortie fiable.',
    url: 'https://pixselli.com/fr/png-to-ico',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertisseur PNG vers ICO en Ligne Gratuit - Pixselli',
    description: 'Convertissez PNG en ICO en ligne rapidement et en toute securite.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchPngToIcoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
