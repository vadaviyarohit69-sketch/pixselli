import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compressor de WebP Online Gratis - Reduza o Tamanho do WebP | Pixselli',
  description:
    'Comprima imagens WebP online com otimizacao de qualidade para arquivos menores e processamento rapido e privado no navegador.',
  keywords: ['compressor webp', 'comprimir webp', 'otimizar webp', 'reduzir tamanho webp'],
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
    canonical: 'https://pixselli.com/pt/webp-compressor',
    languages: {
      en: 'https://pixselli.com/webp-compressor',
      es: 'https://pixselli.com/es/webp-compressor',
      pt: 'https://pixselli.com/pt/webp-compressor',
      fr: 'https://pixselli.com/fr/webp-compressor',
      de: 'https://pixselli.com/de/webp-compressor',
      it: 'https://pixselli.com/it/webp-compressor',
      'x-default': 'https://pixselli.com/webp-compressor',
    },
  },
  openGraph: {
    title: 'Compressor de WebP Online Gratis - Pixselli',
    description: 'Reduza o tamanho de imagens WebP com compressao rapida no navegador.',
    url: 'https://pixselli.com/pt/webp-compressor',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compressor de WebP Online Gratis - Pixselli',
    description: 'Comprima WebP e reduza o tamanho do arquivo rapidamente.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseWebpCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
