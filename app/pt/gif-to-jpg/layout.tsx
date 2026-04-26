import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor GIF para JPG Online Gratis - Converter Imagens GIF | Pixselli',
  description:
    'Converta imagens GIF para JPG online com processamento privado no navegador e controle de qualidade.',
  keywords: ['gif para jpg', 'converter gif para jpg', 'conversor gif jpg', 'conversor jpg'],
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
    canonical: 'https://pixselli.com/pt/gif-to-jpg',
    languages: {
      en: 'https://pixselli.com/gif-to-jpg',
      es: 'https://pixselli.com/es/gif-to-jpg',
      pt: 'https://pixselli.com/pt/gif-to-jpg',
      fr: 'https://pixselli.com/fr/gif-to-jpg',
      de: 'https://pixselli.com/de/gif-to-jpg',
      it: 'https://pixselli.com/it/gif-to-jpg',
      'x-default': 'https://pixselli.com/gif-to-jpg',
    },
  },
  openGraph: {
    title: 'Conversor GIF para JPG Online Gratis - Pixselli',
    description: 'Converta GIF para JPG rapidamente com saida confiavel.',
    url: 'https://pixselli.com/pt/gif-to-jpg',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor GIF para JPG Online Gratis - Pixselli',
    description: 'Converta GIF para JPG online de forma rapida e segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseGifToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
