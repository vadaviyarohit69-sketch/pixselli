import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compressore Immagini Online Gratis - Riduci JPG, PNG, WebP | Pixselli',
  description:
    'Comprimi immagini online con qualita regolabile e opzioni formato. Riduci JPG, PNG e WebP rapidamente mantenendo buona qualita visiva.',
  keywords: ['compressore immagini', 'compressione immagini', 'comprimere immagini', 'ridurre dimensione file', 'compressore online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/it/image-compressor',
    languages: {
      en: 'https://pixselli.com/image-compressor',
      es: 'https://pixselli.com/es/image-compressor',
      pt: 'https://pixselli.com/pt/image-compressor',
      fr: 'https://pixselli.com/fr/image-compressor',
      de: 'https://pixselli.com/de/image-compressor',
      it: 'https://pixselli.com/it/image-compressor',
      'x-default': 'https://pixselli.com/image-compressor',
    },
  },
  openGraph: {
    title: 'Compressore Immagini Online Gratis - Pixselli',
    description: 'Comprimi JPG, PNG e WebP online con controlli qualita e processamento privato rapido.',
    url: 'https://pixselli.com/it/image-compressor',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function ItalianImageCompressorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
