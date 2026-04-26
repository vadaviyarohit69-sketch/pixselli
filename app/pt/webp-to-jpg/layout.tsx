import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor WebP para JPG Online Gratis - Converter Imagens WebP | Pixselli',
  description:
    'Converta imagens WebP para JPG online com processamento privado no navegador e resultado de qualidade.',
  keywords: ['webp para jpg', 'converter webp para jpg', 'conversor webp jpg', 'webp para jpeg'],
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
    canonical: 'https://pixselli.com/pt/webp-to-jpg',
    languages: {
      en: 'https://pixselli.com/webp-to-jpg',
      es: 'https://pixselli.com/es/webp-to-jpg',
      pt: 'https://pixselli.com/pt/webp-to-jpg',
      fr: 'https://pixselli.com/fr/webp-to-jpg',
      de: 'https://pixselli.com/de/webp-to-jpg',
      it: 'https://pixselli.com/it/webp-to-jpg',
      'x-default': 'https://pixselli.com/webp-to-jpg',
    },
  },
  openGraph: {
    title: 'Conversor WebP para JPG Online Gratis - Pixselli',
    description: 'Converta arquivos WebP para JPG rapidamente com saida confiavel.',
    url: 'https://pixselli.com/pt/webp-to-jpg',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor WebP para JPG Online Gratis - Pixselli',
    description: 'Converta WebP para JPG online de forma rapida e segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseWebpToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
