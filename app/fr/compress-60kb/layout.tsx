import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresser a 60KB en Ligne Gratuit - Outil Taille Exacte | Pixselli',
  description:
    'Compressez une image a 60KB exacts en ligne avec ajustement intelligent de qualite. Traitement rapide et prive pour JPG, PNG et WebP.',
  keywords: ['compresser 60kb,compression image,reduire taille image,compresseur en ligne'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/fr/compress-60kb',
    languages: {
      en: 'https://pixselli.com/compress-60kb',
      es: 'https://pixselli.com/es/compress-60kb',
      pt: 'https://pixselli.com/pt/compress-60kb',
      fr: 'https://pixselli.com/fr/compress-60kb',
      de: 'https://pixselli.com/de/compress-60kb',
      it: 'https://pixselli.com/it/compress-60kb',
      'x-default': 'https://pixselli.com/compress-60kb',
    },
  },
  openGraph: {
    title: 'Compresser a 60KB en Ligne Gratuit - Pixselli',
    description: 'Ajustez votre image a 60KB exacts en ligne avec une compression privee dans le navigateur.',
    url: 'https://pixselli.com/fr/compress-60kb',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function FrenchCompress60KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
