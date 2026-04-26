import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor HEIC para PNG Online Gratis - Converter Imagens HEIC | Pixselli',
  description:
    'Converta imagens HEIC para PNG online com processamento privado no navegador e saida de alta qualidade.',
  keywords: ['heic para png', 'converter heic para png', 'conversor heic png', 'heic iphone'],
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
    canonical: 'https://pixselli.com/pt/heic-to-png',
    languages: {
      en: 'https://pixselli.com/heic-to-png',
      es: 'https://pixselli.com/es/heic-to-png',
      pt: 'https://pixselli.com/pt/heic-to-png',
      fr: 'https://pixselli.com/fr/heic-to-png',
      de: 'https://pixselli.com/de/heic-to-png',
      it: 'https://pixselli.com/it/heic-to-png',
      'x-default': 'https://pixselli.com/heic-to-png',
    },
  },
  openGraph: {
    title: 'Conversor HEIC para PNG Online Gratis - Pixselli',
    description: 'Converta HEIC para PNG rapidamente com alta qualidade.',
    url: 'https://pixselli.com/pt/heic-to-png',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor HEIC para PNG Online Gratis - Pixselli',
    description: 'Converta HEIC para PNG online de forma rapida e segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseHeicToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
