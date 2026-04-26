import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor AVIF para JPG Online Gratis - Converter Imagens AVIF | Pixselli',
  description:
    'Converta imagens AVIF para JPG online com processamento privado no navegador e controle de qualidade.',
  keywords: ['avif para jpg', 'converter avif para jpg', 'conversor avif jpg', 'jpg converter'],
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
    canonical: 'https://pixselli.com/pt/avif-to-jpg',
    languages: {
      en: 'https://pixselli.com/avif-to-jpg',
      es: 'https://pixselli.com/es/avif-to-jpg',
      pt: 'https://pixselli.com/pt/avif-to-jpg',
      fr: 'https://pixselli.com/fr/avif-to-jpg',
      de: 'https://pixselli.com/de/avif-to-jpg',
      it: 'https://pixselli.com/it/avif-to-jpg',
      'x-default': 'https://pixselli.com/avif-to-jpg',
    },
  },
  openGraph: {
    title: 'Conversor AVIF para JPG Online Gratis - Pixselli',
    description: 'Converta AVIF para JPG rapidamente com saida confiavel.',
    url: 'https://pixselli.com/pt/avif-to-jpg',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor AVIF para JPG Online Gratis - Pixselli',
    description: 'Converta AVIF para JPG online de forma rapida e segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseAvifToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
