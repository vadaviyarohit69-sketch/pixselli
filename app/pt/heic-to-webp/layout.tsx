import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor HEIC para WebP Online Gratis - Converter Imagens HEIC | Pixselli',
  description:
    'Converta imagens HEIC para WebP online com processamento privado no navegador e controle de qualidade.',
  keywords: ['heic para webp', 'converter heic para webp', 'conversor heic webp', 'heic iphone'],
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
    canonical: 'https://pixselli.com/pt/heic-to-webp',
    languages: {
      en: 'https://pixselli.com/heic-to-webp',
      es: 'https://pixselli.com/es/heic-to-webp',
      pt: 'https://pixselli.com/pt/heic-to-webp',
      fr: 'https://pixselli.com/fr/heic-to-webp',
      de: 'https://pixselli.com/de/heic-to-webp',
      it: 'https://pixselli.com/it/heic-to-webp',
      'x-default': 'https://pixselli.com/heic-to-webp',
    },
  },
  openGraph: {
    title: 'Conversor HEIC para WebP Online Gratis - Pixselli',
    description: 'Converta HEIC para WebP rapidamente com saida confiavel.',
    url: 'https://pixselli.com/pt/heic-to-webp',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor HEIC para WebP Online Gratis - Pixselli',
    description: 'Converta HEIC para WebP online de forma rapida e segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseHeicToWebpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
