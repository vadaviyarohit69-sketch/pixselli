import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimir para Formularios Online Gratis - Otimizador para Uploads | Pixselli',
  description:
    'Comprima imagens para formularios online com dimensoes e qualidade otimizadas para cumprir limites de upload rapidamente.',
  keywords: ['comprimir para formularios', 'compressor de imagem para formulario', 'otimizar imagem para formulario', 'reduzir tamanho'],
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
    canonical: 'https://pixselli.com/pt/compress-for-forms',
    languages: {
      en: 'https://pixselli.com/compress-for-forms',
      es: 'https://pixselli.com/es/compress-for-forms',
      pt: 'https://pixselli.com/pt/compress-for-forms',
      fr: 'https://pixselli.com/fr/compress-for-forms',
      de: 'https://pixselli.com/de/compress-for-forms',
      it: 'https://pixselli.com/it/compress-for-forms',
      'x-default': 'https://pixselli.com/compress-for-forms',
    },
  },
  openGraph: {
    title: 'Comprimir para Formularios Online Gratis - Pixselli',
    description: 'Prepare imagens para formularios e uploads com tamanho reduzido.',
    url: 'https://pixselli.com/pt/compress-for-forms',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprimir para Formularios Online Gratis - Pixselli',
    description: 'Otimize imagens para uploads de formularios e reduza o tamanho rapidamente.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseCompressForFormsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
