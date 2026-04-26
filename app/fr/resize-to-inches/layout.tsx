import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redimensionner image en pouces gratuit - DPI/PPI personnalise | Pixselli',
  description:
    'Redimensionnez des images a des pouces exacts en ligne avec DPI/PPI personnalise. Ideal pour photos et documents prets a imprimer.',
  keywords: ['redimensionner en pouces', 'dpi image', 'taille impression photo', 'pouces vers pixels'],
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
    canonical: 'https://pixselli.com/fr/resize-to-inches',
    languages: {
      en: 'https://pixselli.com/resize-to-inches',
      es: 'https://pixselli.com/es/resize-to-inches',
      pt: 'https://pixselli.com/pt/resize-to-inches',
      fr: 'https://pixselli.com/fr/resize-to-inches',
      de: 'https://pixselli.com/de/resize-to-inches',
      it: 'https://pixselli.com/it/resize-to-inches',
      'x-default': 'https://pixselli.com/resize-to-inches',
    },
  },
  openGraph: {
    title: 'Redimensionner image en pouces gratuit - Pixselli',
    description: 'Definissez des pouces exacts et DPI/PPI pour des images pretes a imprimer.',
    url: 'https://pixselli.com/fr/resize-to-inches',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function FrenchResizeToInchesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
