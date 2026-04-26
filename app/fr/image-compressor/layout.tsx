import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresseur d\'Image en Ligne Gratuit - Reduire JPG, PNG, WebP | Pixselli',
  description:
    'Compressez des images en ligne avec qualite ajustable et options de format. Reduisez JPG, PNG et WebP rapidement en gardant une bonne qualite visuelle.',
  keywords: ['compresseur image', 'compression image', 'compresser images', 'reduire taille image', 'compresseur en ligne'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/fr/image-compressor',
    languages: {
      en: 'https://pixselli.com/image-compressor',
      es: 'https://pixselli.com/es/image-compressor',
      pt: 'https://pixselli.com/pt/image-compressor',
      fr: 'https://pixselli.com/fr/image-compressor',
      de: 'https://pixselli.com/de/image-compressor',
      it: 'https://pixselli.com/it/image-compressor',
      'x-default': 'https://pixselli.com/image-compressor',
    },
  },
  openGraph: {
    title: 'Compresseur d\'Image en Ligne Gratuit - Pixselli',
    description: 'Compressez JPG, PNG et WebP en ligne avec controles de qualite et traitement prive rapide.',
    url: 'https://pixselli.com/fr/image-compressor',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function FrenchImageCompressorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
