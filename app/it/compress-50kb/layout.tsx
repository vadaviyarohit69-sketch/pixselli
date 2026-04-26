import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimi a 50KB Online Gratis - Strumento Dimensione Esatta | Pixselli',
  description:
    'Comprimi immagini online a 50KB esatti con regolazione intelligente della qualita. Elaborazione rapida e privata per JPG, PNG e WebP.',
  keywords: ['comprimi 50kb,compressione immagini,ridurre dimensione file,compressore online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/it/compress-50kb',
    languages: {
      en: 'https://pixselli.com/compress-50kb',
      es: 'https://pixselli.com/es/compress-50kb',
      pt: 'https://pixselli.com/pt/compress-50kb',
      fr: 'https://pixselli.com/fr/compress-50kb',
      de: 'https://pixselli.com/de/compress-50kb',
      it: 'https://pixselli.com/it/compress-50kb',
      'x-default': 'https://pixselli.com/compress-50kb',
    },
  },
  openGraph: {
    title: 'Comprimi a 50KB Online Gratis - Pixselli',
    description: 'Porta la tua immagine a 50KB esatti online con compressione privata nel browser.',
    url: 'https://pixselli.com/it/compress-50kb',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function ItalianCompress50KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
