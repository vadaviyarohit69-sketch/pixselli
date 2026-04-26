import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reduire la taille d image en ligne gratuit - Compresser JPG, PNG, WebP | PIXSELLI',
  description:
    'Reduisez la taille des images en ligne gratuitement avec un outil rapide et securise. Compressez JPG, PNG et WebP en conservant la qualite.',
  keywords: ['reduire taille image', 'compresser image en ligne', 'compresseur image', 'optimiser images'],
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
    canonical: 'https://pixselli.com/fr/reduce-size',
    languages: {
      en: 'https://pixselli.com/reduce-size',
      es: 'https://pixselli.com/es/reduce-size',
      pt: 'https://pixselli.com/pt/reduce-size',
      fr: 'https://pixselli.com/fr/reduce-size',
      de: 'https://pixselli.com/de/reduce-size',
      it: 'https://pixselli.com/it/reduce-size',
      'x-default': 'https://pixselli.com/reduce-size',
    },
  },
  openGraph: {
    title: 'Reduire la taille d image en ligne gratuit - PIXSELLI',
    description:
      'Compressez et reduisez la taille des images en conservant la qualite. Outil rapide, gratuit et prive pour JPG, PNG et WebP.',
    url: 'https://pixselli.com/fr/reduce-size',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function FrenchReduceSizeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
