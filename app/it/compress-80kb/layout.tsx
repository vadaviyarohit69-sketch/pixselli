import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimi a 80KB Online Gratis - Strumento Dimensione Esatta | Pixselli',
  description:
    'Comprimi immagini online a 80KB esatti con regolazione intelligente della qualita. Elaborazione rapida e privata per JPG, PNG e WebP.',
  keywords: ['comprimi 80kb,compressione immagini,ridurre dimensione file,compressore online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/it/compress-80kb',
    languages: {
      en: 'https://pixselli.com/compress-80kb',
      es: 'https://pixselli.com/es/compress-80kb',
      pt: 'https://pixselli.com/pt/compress-80kb',
      fr: 'https://pixselli.com/fr/compress-80kb',
      de: 'https://pixselli.com/de/compress-80kb',
      it: 'https://pixselli.com/it/compress-80kb',
      'x-default': 'https://pixselli.com/compress-80kb',
    },
  },
  openGraph: {
    title: 'Comprimi a 80KB Online Gratis - Pixselli',
    description: 'Porta la tua immagine a 80KB esatti online con compressione privata nel browser.',
    url: 'https://pixselli.com/it/compress-80kb',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function ItalianCompress80KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
