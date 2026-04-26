import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimi a 60KB Online Gratis - Strumento Dimensione Esatta | Pixselli',
  description:
    'Comprimi immagini online a 60KB esatti con regolazione intelligente della qualita. Elaborazione rapida e privata per JPG, PNG e WebP.',
  keywords: ['comprimi 60kb,compressione immagini,ridurre dimensione file,compressore online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/it/compress-60kb',
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
    title: 'Comprimi a 60KB Online Gratis - Pixselli',
    description: 'Porta la tua immagine a 60KB esatti online con compressione privata nel browser.',
    url: 'https://pixselli.com/it/compress-60kb',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function ItalianCompress60KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
