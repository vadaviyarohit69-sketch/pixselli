import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimi a 100KB Online Gratis - Strumento Dimensione Esatta | Pixselli',
  description:
    'Comprimi immagini online a 100KB esatti con regolazione intelligente della qualita. Elaborazione rapida e privata per JPG, PNG e WebP.',
  keywords: ['comprimi 100kb,compressione immagini,ridurre dimensione file,compressore online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/it/compress-100kb',
    languages: {
      en: 'https://pixselli.com/compress-100kb',
      es: 'https://pixselli.com/es/compress-100kb',
      pt: 'https://pixselli.com/pt/compress-100kb',
      fr: 'https://pixselli.com/fr/compress-100kb',
      de: 'https://pixselli.com/de/compress-100kb',
      it: 'https://pixselli.com/it/compress-100kb',
      'x-default': 'https://pixselli.com/compress-100kb',
    },
  },
  openGraph: {
    title: 'Comprimi a 100KB Online Gratis - Pixselli',
    description: 'Porta la tua immagine a 100KB esatti online con compressione privata nel browser.',
    url: 'https://pixselli.com/it/compress-100kb',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function ItalianCompress100KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
