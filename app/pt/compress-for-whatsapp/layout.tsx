import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimir para WhatsApp Online Gratis - Otimizar Imagens para Compartilhar | Pixselli',
  description:
    'Comprima imagens para WhatsApp com dimensoes leves e qualidade otimizada. Processamento rapido e privado no navegador.',
  keywords: ['comprimir para whatsapp', 'compressor de imagem whatsapp', 'otimizar imagem para whatsapp', 'reduzir tamanho'],
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
    canonical: 'https://pixselli.com/pt/compress-for-whatsapp',
    languages: {
      en: 'https://pixselli.com/compress-for-whatsapp',
      es: 'https://pixselli.com/es/compress-for-whatsapp',
      pt: 'https://pixselli.com/pt/compress-for-whatsapp',
      fr: 'https://pixselli.com/fr/compress-for-whatsapp',
      de: 'https://pixselli.com/de/compress-for-whatsapp',
      it: 'https://pixselli.com/it/compress-for-whatsapp',
      'x-default': 'https://pixselli.com/compress-for-whatsapp',
    },
  },
  openGraph: {
    title: 'Comprimir para WhatsApp Online Gratis - Pixselli',
    description: 'Reduza o tamanho de imagens para WhatsApp rapidamente.',
    url: 'https://pixselli.com/pt/compress-for-whatsapp',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprimir para WhatsApp Online Gratis - Pixselli',
    description: 'Otimize imagens para WhatsApp com melhor peso de envio.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseCompressForWhatsappLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
