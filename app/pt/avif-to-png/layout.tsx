import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor AVIF para PNG Online Gratis - Converter Imagens AVIF | Pixselli',
  description:
    'Converta imagens AVIF para PNG online com processamento privado no navegador e saida de alta qualidade.',
  keywords: ['avif para png', 'converter avif para png', 'conversor avif png', 'conversor png'],
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
    canonical: 'https://pixselli.com/pt/avif-to-png',
    languages: {
      en: 'https://pixselli.com/avif-to-png',
      es: 'https://pixselli.com/es/avif-to-png',
      pt: 'https://pixselli.com/pt/avif-to-png',
      fr: 'https://pixselli.com/fr/avif-to-png',
      de: 'https://pixselli.com/de/avif-to-png',
      it: 'https://pixselli.com/it/avif-to-png',
      'x-default': 'https://pixselli.com/avif-to-png',
    },
  },
  openGraph: {
    title: 'Conversor AVIF para PNG Online Gratis - Pixselli',
    description: 'Converta AVIF para PNG rapidamente com saida confiavel.',
    url: 'https://pixselli.com/pt/avif-to-png',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor AVIF para PNG Online Gratis - Pixselli',
    description: 'Converta AVIF para PNG online de forma rapida e segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseAvifToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
