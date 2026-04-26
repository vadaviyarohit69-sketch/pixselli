import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimir para Email Online Gratis - Otimizador de Anexos | Pixselli',
  description:
    'Comprima imagens para anexos de email com dimensoes leves e qualidade equilibrada para envio mais rapido.',
  keywords: ['comprimir para email', 'otimizador de anexos', 'compressao para email', 'reduzir tamanho'],
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
    canonical: 'https://pixselli.com/pt/compress-for-email',
    languages: {
      en: 'https://pixselli.com/compress-for-email',
      es: 'https://pixselli.com/es/compress-for-email',
      pt: 'https://pixselli.com/pt/compress-for-email',
      fr: 'https://pixselli.com/fr/compress-for-email',
      de: 'https://pixselli.com/de/compress-for-email',
      it: 'https://pixselli.com/it/compress-for-email',
      'x-default': 'https://pixselli.com/compress-for-email',
    },
  },
  openGraph: {
    title: 'Comprimir para Email Online Gratis - Pixselli',
    description: 'Otimize anexos de imagem para email com tamanho menor.',
    url: 'https://pixselli.com/pt/compress-for-email',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprimir para Email Online Gratis - Pixselli',
    description: 'Comprima imagens para email com envio mais rapido.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseCompressForEmailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
