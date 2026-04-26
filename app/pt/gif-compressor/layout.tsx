import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compressor de GIF Online Gratis - Reduza o Tamanho do GIF | Pixselli',
  description:
    'Comprima imagens GIF online com otimizacao de qualidade para arquivos menores e processamento rapido e privado no navegador.',
  keywords: ['compressor gif', 'comprimir gif', 'otimizar gif', 'reduzir tamanho gif'],
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
    canonical: 'https://pixselli.com/pt/gif-compressor',
    languages: {
      en: 'https://pixselli.com/gif-compressor',
      es: 'https://pixselli.com/es/gif-compressor',
      pt: 'https://pixselli.com/pt/gif-compressor',
      fr: 'https://pixselli.com/fr/gif-compressor',
      de: 'https://pixselli.com/de/gif-compressor',
      it: 'https://pixselli.com/it/gif-compressor',
      'x-default': 'https://pixselli.com/gif-compressor',
    },
  },
  openGraph: {
    title: 'Compressor de GIF Online Gratis - Pixselli',
    description: 'Reduza o tamanho do arquivo GIF com compressao rapida no navegador.',
    url: 'https://pixselli.com/pt/gif-compressor',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ferramenta compressor de GIF do Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compressor de GIF Online Gratis - Pixselli',
    description: 'Comprima GIF e reduza o tamanho do arquivo rapidamente.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseGifCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
