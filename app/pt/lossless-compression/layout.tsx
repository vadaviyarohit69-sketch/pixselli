import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compressao sem perda online gratis - Manter qualidade | Pixselli',
  description:
    'Comprime imagens com configuracao sem perda para reduzir tamanho mantendo a qualidade visual com processamento privado no navegador.',
  keywords: ['compressao sem perda', 'compressao lossless', 'reduzir tamanho sem perda', 'compressor online'],
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
    canonical: 'https://pixselli.com/pt/lossless-compression',
    languages: {
      en: 'https://pixselli.com/lossless-compression',
      es: 'https://pixselli.com/es/lossless-compression',
      pt: 'https://pixselli.com/pt/lossless-compression',
      fr: 'https://pixselli.com/fr/lossless-compression',
      de: 'https://pixselli.com/de/lossless-compression',
      it: 'https://pixselli.com/it/lossless-compression',
      'x-default': 'https://pixselli.com/lossless-compression',
    },
  },
  openGraph: {
    title: 'Compressao sem perda online gratis - Pixselli',
    description: 'Otimize imagens com compressao sem perda mantendo alta qualidade.',
    url: 'https://pixselli.com/pt/lossless-compression',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ferramenta de compressao sem perda da Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compressao sem perda online gratis - Pixselli',
    description: 'Reduza o tamanho do arquivo mantendo a qualidade com compressao sem perda.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseLosslessCompressionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
