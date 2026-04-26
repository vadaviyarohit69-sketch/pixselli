import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redimensionner image en mm gratuit - DPI/PPI personnalise | Pixselli',
  description:
    'Redimensionnez des images a des millimetres exacts en ligne avec DPI/PPI personnalise. Ideal pour photos de passeport, cartes ID et impression metrique.',
  keywords: ['redimensionner en mm', 'photo passeport mm', 'mm vers pixels', 'dpi image', 'impression metrique'],
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
    canonical: 'https://pixselli.com/fr/resize-to-mm',
    languages: {
      en: 'https://pixselli.com/resize-to-mm',
      es: 'https://pixselli.com/es/resize-to-mm',
      pt: 'https://pixselli.com/pt/resize-to-mm',
      fr: 'https://pixselli.com/fr/resize-to-mm',
      de: 'https://pixselli.com/de/resize-to-mm',
      it: 'https://pixselli.com/it/resize-to-mm',
      'x-default': 'https://pixselli.com/resize-to-mm',
    },
  },
  openGraph: {
    title: 'Redimensionner image en mm gratuit - Pixselli',
    description: 'Definissez des millimetres exacts et DPI/PPI pour des images pretes a imprimer.',
    url: 'https://pixselli.com/fr/resize-to-mm',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function FrenchResizeToMmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
