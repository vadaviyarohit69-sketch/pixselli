import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresser a 30KB en Ligne Gratuit - Outil Taille Exacte | Pixselli',
  description:
    'Compressez une image a 30KB exacts en ligne avec ajustement intelligent de qualite. Traitement rapide et prive pour JPG, PNG et WebP.',
  keywords: ['compresser 30kb', 'compression image', 'reduire taille image', 'compresseur en ligne'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/fr/compress-30kb',
    languages: {
      en: 'https://pixselli.com/compress-30kb',
      es: 'https://pixselli.com/es/compress-30kb',
      pt: 'https://pixselli.com/pt/compress-30kb',
      fr: 'https://pixselli.com/fr/compress-30kb',
      de: 'https://pixselli.com/de/compress-30kb',
      it: 'https://pixselli.com/it/compress-30kb',
      'x-default': 'https://pixselli.com/compress-30kb',
    },
  },
};

export default function FrenchCompress30KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
