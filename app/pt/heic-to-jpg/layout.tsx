import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor HEIC para JPG Online Gratis - Converter Fotos HEIC | Pixselli',
  description:
    'Converta imagens HEIC para JPG online com processamento privado no navegador para melhor compatibilidade.',
  keywords: ['heic para jpg', 'converter heic para jpg', 'conversor heic iphone', 'conversor heic jpg'],
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
    canonical: 'https://pixselli.com/pt/heic-to-jpg',
    languages: {
      en: 'https://pixselli.com/heic-to-jpg',
      es: 'https://pixselli.com/es/heic-to-jpg',
      pt: 'https://pixselli.com/pt/heic-to-jpg',
      fr: 'https://pixselli.com/fr/heic-to-jpg',
      de: 'https://pixselli.com/de/heic-to-jpg',
      it: 'https://pixselli.com/it/heic-to-jpg',
      'x-default': 'https://pixselli.com/heic-to-jpg',
    },
  },
  openGraph: {
    title: 'Conversor HEIC para JPG Online Gratis - Pixselli',
    description: 'Converta fotos HEIC de iPhone para JPG rapidamente.',
    url: 'https://pixselli.com/pt/heic-to-jpg',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor HEIC para JPG Online Gratis - Pixselli',
    description: 'Converta HEIC para JPG online de forma rapida e segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseHeicToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
