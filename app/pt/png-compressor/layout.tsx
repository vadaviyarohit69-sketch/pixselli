import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compressor de PNG Online Gratis - Reduza o Tamanho do PNG | Pixselli',
  description:
    'Comprima imagens PNG online com otimizacao de qualidade para arquivos menores e processamento rapido e privado no navegador.',
  keywords: ['compressor png', 'comprimir png', 'otimizar png', 'reduzir tamanho png'],
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
    canonical: 'https://pixselli.com/pt/png-compressor',
    languages: {
      en: 'https://pixselli.com/png-compressor',
      es: 'https://pixselli.com/es/png-compressor',
      pt: 'https://pixselli.com/pt/png-compressor',
      fr: 'https://pixselli.com/fr/png-compressor',
      de: 'https://pixselli.com/de/png-compressor',
      it: 'https://pixselli.com/it/png-compressor',
      'x-default': 'https://pixselli.com/png-compressor',
    },
  },
  openGraph: {
    title: 'Compressor de PNG Online Gratis - Pixselli',
    description: 'Reduza o tamanho de PNG com compressao rapida no navegador.',
    url: 'https://pixselli.com/pt/png-compressor',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compressor de PNG Online Gratis - Pixselli',
    description: 'Comprima PNG e reduza o tamanho do arquivo rapidamente.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortuguesePngCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
