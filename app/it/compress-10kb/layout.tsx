import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimi a 10KB Online Gratis - Strumento Dimensione Esatta | Pixselli',
  description:
    'Comprimi immagini online a 10KB esatti con regolazione intelligente della qualita. Elaborazione rapida e privata per JPG, PNG e WebP.',
  keywords: ['comprimi 10kb', 'compressione immagini', 'ridurre dimensione file', 'compressore online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/it/compress-10kb',
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

export default function ItalianCompress10KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
