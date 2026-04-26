import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compressor de JPEG Online Gratis - Reduza o Tamanho do JPEG | Pixselli',
  description:
    'Comprima imagens JPEG online com qualidade ajustavel para arquivos menores e processamento rapido e privado no navegador.',
  keywords: ['compressor jpeg', 'comprimir jpeg', 'otimizar jpeg', 'reduzir tamanho jpeg'],
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
    canonical: 'https://pixselli.com/pt/jpeg-compressor',
    languages: {
      en: 'https://pixselli.com/jpeg-compressor',
      es: 'https://pixselli.com/es/jpeg-compressor',
      pt: 'https://pixselli.com/pt/jpeg-compressor',
      fr: 'https://pixselli.com/fr/jpeg-compressor',
      de: 'https://pixselli.com/de/jpeg-compressor',
      it: 'https://pixselli.com/it/jpeg-compressor',
      'x-default': 'https://pixselli.com/jpeg-compressor',
    },
  },
  openGraph: {
    title: 'Compressor de JPEG Online Gratis - Pixselli',
    description: 'Reduza o tamanho de JPEG com compressao rapida no navegador.',
    url: 'https://pixselli.com/pt/jpeg-compressor',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compressor de JPEG Online Gratis - Pixselli',
    description: 'Comprima JPEG e reduza o tamanho do arquivo rapidamente.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseJpegCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
