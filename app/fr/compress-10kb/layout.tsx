import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresser a 10KB en Ligne Gratuit - Outil Taille Exacte | Pixselli',
  description:
    'Compressez une image a 10KB exacts en ligne avec ajustement intelligent de qualite. Traitement rapide et prive pour JPG, PNG et WebP.',
  keywords: ['compresser 10kb', 'compression image', 'reduire taille image', 'compresseur en ligne'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/fr/compress-10kb',
    languages: {
      en: 'https://pixselli.com/compress-10kb',
      es: 'https://pixselli.com/es/compress-10kb',
      pt: 'https://pixselli.com/pt/compress-10kb',
      fr: 'https://pixselli.com/fr/compress-10kb',
      de: 'https://pixselli.com/de/compress-10kb',
      it: 'https://pixselli.com/it/compress-10kb',
      'x-default': 'https://pixselli.com/compress-10kb',
    },
  },
};

export default function FrenchCompress10KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
