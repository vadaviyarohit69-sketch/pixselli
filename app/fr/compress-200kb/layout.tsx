import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresser a 200KB en Ligne Gratuit - Outil Taille Exacte | Pixselli',
  description:
    'Compressez une image a 200KB exacts en ligne avec ajustement intelligent de qualite. Traitement rapide et prive pour JPG, PNG et WebP.',
  keywords: ['compresser 200kb,compression image,reduire taille image,compresseur en ligne'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/fr/compress-200kb',
    languages: {
      en: 'https://pixselli.com/compress-200kb',
      es: 'https://pixselli.com/es/compress-200kb',
      pt: 'https://pixselli.com/pt/compress-200kb',
      fr: 'https://pixselli.com/fr/compress-200kb',
      de: 'https://pixselli.com/de/compress-200kb',
      it: 'https://pixselli.com/it/compress-200kb',
      'x-default': 'https://pixselli.com/compress-200kb',
    },
  },
  openGraph: {
    title: 'Compresser a 200KB en Ligne Gratuit - Pixselli',
    description: 'Ajustez votre image a 200KB exacts en ligne avec une compression privee dans le navigateur.',
    url: 'https://pixselli.com/fr/compress-200kb',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function FrenchCompress200KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
