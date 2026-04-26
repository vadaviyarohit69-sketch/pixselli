import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor AVIF para WebP Online Gratis - Converter Imagens AVIF | Pixselli',
  description:
    'Converta imagens AVIF para WebP online com processamento privado no navegador e controle de qualidade.',
  keywords: ['avif para webp', 'converter avif para webp', 'conversor avif webp', 'conversor webp'],
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
    canonical: 'https://pixselli.com/pt/avif-to-webp',
    languages: {
      en: 'https://pixselli.com/avif-to-webp',
      es: 'https://pixselli.com/es/avif-to-webp',
      pt: 'https://pixselli.com/pt/avif-to-webp',
      fr: 'https://pixselli.com/fr/avif-to-webp',
      de: 'https://pixselli.com/de/avif-to-webp',
      it: 'https://pixselli.com/it/avif-to-webp',
      'x-default': 'https://pixselli.com/avif-to-webp',
    },
  },
  openGraph: {
    title: 'Conversor AVIF para WebP Online Gratis - Pixselli',
    description: 'Converta AVIF para WebP rapidamente com saida confiavel.',
    url: 'https://pixselli.com/pt/avif-to-webp',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor AVIF para WebP Online Gratis - Pixselli',
    description: 'Converta AVIF para WebP online de forma rapida e segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseAvifToWebpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
