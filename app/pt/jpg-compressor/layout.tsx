import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compressor de JPG Online Gratis - Reduza o Tamanho do JPG | Pixselli',
  description:
    'Comprima imagens JPG online com qualidade ajustavel para arquivos menores e processamento rapido e privado no navegador.',
  keywords: ['compressor jpg', 'comprimir jpg', 'otimizar jpg', 'reduzir tamanho jpg'],
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
    canonical: 'https://pixselli.com/pt/jpg-compressor',
    languages: {
      en: 'https://pixselli.com/jpg-compressor',
      es: 'https://pixselli.com/es/jpg-compressor',
      pt: 'https://pixselli.com/pt/jpg-compressor',
      fr: 'https://pixselli.com/fr/jpg-compressor',
      de: 'https://pixselli.com/de/jpg-compressor',
      it: 'https://pixselli.com/it/jpg-compressor',
      'x-default': 'https://pixselli.com/jpg-compressor',
    },
  },
  openGraph: {
    title: 'Compressor de JPG Online Gratis - Pixselli',
    description: 'Reduza o tamanho de JPG com compressao rapida no navegador.',
    url: 'https://pixselli.com/pt/jpg-compressor',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compressor de JPG Online Gratis - Pixselli',
    description: 'Comprima JPG e reduza o tamanho do arquivo rapidamente.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseJpgCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
