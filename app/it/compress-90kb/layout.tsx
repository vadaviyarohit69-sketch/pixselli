import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimi a 90KB Online Gratis - Strumento Dimensione Esatta | Pixselli',
  description:
    'Comprimi immagini online a 90KB esatti con regolazione intelligente della qualita. Elaborazione rapida e privata per JPG, PNG e WebP.',
  keywords: ['comprimi 90kb,compressione immagini,ridurre dimensione file,compressore online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/it/compress-90kb',
    languages: {
      en: 'https://pixselli.com/compress-90kb',
      es: 'https://pixselli.com/es/compress-90kb',
      pt: 'https://pixselli.com/pt/compress-90kb',
      fr: 'https://pixselli.com/fr/compress-90kb',
      de: 'https://pixselli.com/de/compress-90kb',
      it: 'https://pixselli.com/it/compress-90kb',
      'x-default': 'https://pixselli.com/compress-90kb',
    },
  },
  openGraph: {
    title: 'Comprimi a 90KB Online Gratis - Pixselli',
    description: 'Porta la tua immagine a 90KB esatti online con compressione privata nel browser.',
    url: 'https://pixselli.com/it/compress-90kb',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function ItalianCompress90KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
