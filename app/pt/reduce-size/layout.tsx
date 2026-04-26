import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reduzir tamanho de imagem online gratis - Comprimir JPG, PNG, WebP | PIXSELLI',
  description:
    'Reduza o tamanho de imagens online gratis com ferramenta rapida e segura. Comprima JPG, PNG e WebP mantendo qualidade.',
  keywords: ['reduzir tamanho imagem', 'comprimir imagem online', 'compressor de imagem', 'otimizar imagens'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://pixselli.com/pt/reduce-size',
    languages: {
      en: 'https://pixselli.com/reduce-size',
      es: 'https://pixselli.com/es/reduce-size',
      pt: 'https://pixselli.com/pt/reduce-size',
      fr: 'https://pixselli.com/fr/reduce-size',
      de: 'https://pixselli.com/de/reduce-size',
      it: 'https://pixselli.com/it/reduce-size',
      'x-default': 'https://pixselli.com/reduce-size',
    },
  },
  openGraph: {
    title: 'Reduzir tamanho de imagem online gratis - PIXSELLI',
    description:
      'Comprima e reduza tamanho de imagens mantendo qualidade. Ferramenta rapida, gratis e privada para JPG, PNG e WebP.',
    url: 'https://pixselli.com/pt/reduce-size',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function PortugueseReduceSizeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
