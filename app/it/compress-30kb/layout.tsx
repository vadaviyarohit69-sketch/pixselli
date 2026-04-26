import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimi a 30KB Online Gratis - Strumento Dimensione Esatta | Pixselli',
  description:
    'Comprimi immagini online a 30KB esatti con regolazione intelligente della qualita. Elaborazione rapida e privata per JPG, PNG e WebP.',
  keywords: ['comprimi 30kb', 'compressione immagini', 'ridurre dimensione file', 'compressore online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/it/compress-30kb',
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

export default function ItalianCompress30KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
