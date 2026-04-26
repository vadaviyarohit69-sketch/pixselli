import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur JPG vers WebP en Ligne Gratuit - Convertir des Images JPG | Pixselli',
  description:
    'Convertissez des images JPG en WebP en ligne avec meilleure compression et traitement prive dans le navigateur.',
  keywords: ['jpg vers webp', 'convertir jpg en webp', 'convertisseur jpg webp', 'webp en ligne'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://pixselli.com/fr/jpg-to-webp',
    languages: {
      en: 'https://pixselli.com/jpg-to-webp',
      es: 'https://pixselli.com/es/jpg-to-webp',
      pt: 'https://pixselli.com/pt/jpg-to-webp',
      fr: 'https://pixselli.com/fr/jpg-to-webp',
      de: 'https://pixselli.com/de/jpg-to-webp',
      it: 'https://pixselli.com/it/jpg-to-webp',
      'x-default': 'https://pixselli.com/jpg-to-webp',
    },
  },
};

export default function FrenchJpgToWebpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
