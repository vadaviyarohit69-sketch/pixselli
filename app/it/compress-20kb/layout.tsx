import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimi a 20KB Online Gratis - Strumento Dimensione Esatta | Pixselli',
  description:
    'Comprimi immagini online a 20KB esatti con regolazione intelligente della qualita. Elaborazione rapida e privata per JPG, PNG e WebP.',
  keywords: ['comprimi 20kb', 'compressione immagini', 'ridurre dimensione file', 'compressore online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/it/compress-20kb',
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

export default function ItalianCompress20KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
