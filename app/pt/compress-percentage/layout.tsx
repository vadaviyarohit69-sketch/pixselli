import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimir por porcentagem online gratis - 10% a 90% | Pixselli',
  description:
    'Comprime imagens por porcentagem online de 10% a 90% com processamento rapido e privado no navegador.',
  keywords: ['comprimir por porcentagem', 'compressao por porcentagem', 'reduzir tamanho', 'compressor online'],
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
    canonical: 'https://pixselli.com/pt/compress-percentage',
    languages: {
      en: 'https://pixselli.com/compress-percentage',
      es: 'https://pixselli.com/es/compress-percentage',
      pt: 'https://pixselli.com/pt/compress-percentage',
      fr: 'https://pixselli.com/fr/compress-percentage',
      de: 'https://pixselli.com/de/compress-percentage',
      it: 'https://pixselli.com/it/compress-percentage',
      'x-default': 'https://pixselli.com/compress-percentage',
    },
  },
  openGraph: {
    title: 'Comprimir por porcentagem online gratis - Pixselli',
    description: 'Reduza o tamanho da imagem por porcentagem com ajuste flexivel e saida rapida.',
    url: 'https://pixselli.com/pt/compress-percentage',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ferramenta de compressao por porcentagem da Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprimir por porcentagem online gratis - Pixselli',
    description: 'Comprime imagens por porcentagem de 10% a 90% online.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseCompressPercentageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
