import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimir para Web Online Gratis - Otimizador para Sites | Pixselli',
  description:
    'Comprima imagens para uso em sites com dimensoes e qualidade otimizadas. Processamento rapido no navegador.',
  keywords: ['comprimir para web', 'otimizador web', 'compressao para site', 'reduzir tamanho de imagem'],
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
    canonical: 'https://pixselli.com/pt/compress-for-web',
    languages: {
      en: 'https://pixselli.com/compress-for-web',
      es: 'https://pixselli.com/es/compress-for-web',
      pt: 'https://pixselli.com/pt/compress-for-web',
      fr: 'https://pixselli.com/fr/compress-for-web',
      de: 'https://pixselli.com/de/compress-for-web',
      it: 'https://pixselli.com/it/compress-for-web',
      'x-default': 'https://pixselli.com/compress-for-web',
    },
  },
  openGraph: {
    title: 'Comprimir para Web Online Gratis - Pixselli',
    description: 'Otimize imagens para sites com melhor equilibrio entre tamanho e qualidade.',
    url: 'https://pixselli.com/pt/compress-for-web',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprimir para Web Online Gratis - Pixselli',
    description: 'Prepare imagens para sites com compressao focada em desempenho.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseCompressForWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
