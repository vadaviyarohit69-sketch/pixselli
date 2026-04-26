import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimi a 40KB Online Gratis - Strumento Dimensione Esatta | Pixselli',
  description:
    'Comprimi immagini online a 40KB esatti con regolazione intelligente della qualita. Elaborazione rapida e privata per JPG, PNG e WebP.',
  keywords: ['comprimi 40kb,compressione immagini,ridurre dimensione file,compressore online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/it/compress-40kb',
    languages: {
      en: 'https://pixselli.com/compress-40kb',
      es: 'https://pixselli.com/es/compress-40kb',
      pt: 'https://pixselli.com/pt/compress-40kb',
      fr: 'https://pixselli.com/fr/compress-40kb',
      de: 'https://pixselli.com/de/compress-40kb',
      it: 'https://pixselli.com/it/compress-40kb',
      'x-default': 'https://pixselli.com/compress-40kb',
    },
  },
  openGraph: {
    title: 'Comprimi a 40KB Online Gratis - Pixselli',
    description: 'Porta la tua immagine a 40KB esatti online con compressione privata nel browser.',
    url: 'https://pixselli.com/it/compress-40kb',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function ItalianCompress40KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
