import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresser a 20KB en Ligne Gratuit - Outil Taille Exacte | Pixselli',
  description:
    'Compressez une image a 20KB exacts en ligne avec ajustement intelligent de qualite. Traitement rapide et prive pour JPG, PNG et WebP.',
  keywords: ['compresser 20kb', 'compression image', 'reduire taille image', 'compresseur en ligne'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/fr/compress-20kb',
    languages: {
      en: 'https://pixselli.com/compress-20kb',
      es: 'https://pixselli.com/es/compress-20kb',
      pt: 'https://pixselli.com/pt/compress-20kb',
      fr: 'https://pixselli.com/fr/compress-20kb',
      de: 'https://pixselli.com/de/compress-20kb',
      it: 'https://pixselli.com/it/compress-20kb',
      'x-default': 'https://pixselli.com/compress-20kb',
    },
  },
};

export default function FrenchCompress20KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
