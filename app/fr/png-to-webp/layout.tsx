import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur PNG vers WebP en Ligne Gratuit - Convertir des Images PNG | Pixselli',
  description:
    'Convertissez des images PNG en WebP en ligne avec compression moderne et traitement prive dans le navigateur.',
  keywords: ['png vers webp', 'convertir png en webp', 'convertisseur png webp', 'webp en ligne'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://pixselli.com/fr/png-to-webp',
    languages: {
      en: 'https://pixselli.com/png-to-webp',
      es: 'https://pixselli.com/es/png-to-webp',
      pt: 'https://pixselli.com/pt/png-to-webp',
      fr: 'https://pixselli.com/fr/png-to-webp',
      de: 'https://pixselli.com/de/png-to-webp',
      it: 'https://pixselli.com/it/png-to-webp',
      'x-default': 'https://pixselli.com/png-to-webp',
    },
  },
};

export default function FrenchPngToWebpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
