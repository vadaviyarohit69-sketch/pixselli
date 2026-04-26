import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur WebP vers PNG en Ligne Gratuit - Convertir des Images WebP | Pixselli',
  description:
    'Convertissez des images WebP en PNG en ligne avec compatibilite large et traitement prive dans le navigateur.',
  keywords: ['webp vers png', 'convertir webp en png', 'convertisseur webp png', 'png en ligne'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://pixselli.com/fr/webp-to-png',
    languages: {
      en: 'https://pixselli.com/webp-to-png',
      es: 'https://pixselli.com/es/webp-to-png',
      pt: 'https://pixselli.com/pt/webp-to-png',
      fr: 'https://pixselli.com/fr/webp-to-png',
      de: 'https://pixselli.com/de/webp-to-png',
      it: 'https://pixselli.com/it/webp-to-png',
      'x-default': 'https://pixselli.com/webp-to-png',
    },
  },
};

export default function FrenchWebpToPngLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
