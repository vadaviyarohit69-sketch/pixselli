import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor ICO para PNG Online Gratis - Converter Arquivos ICO | Pixselli',
  description:
    'Converta arquivos ICO para PNG online com processamento privado no navegador e saida de alta qualidade.',
  keywords: ['ico para png', 'converter ico para png', 'conversor ico png', 'conversor png'],
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
    canonical: 'https://pixselli.com/pt/ico-to-png',
    languages: {
      en: 'https://pixselli.com/ico-to-png',
      es: 'https://pixselli.com/es/ico-to-png',
      pt: 'https://pixselli.com/pt/ico-to-png',
      fr: 'https://pixselli.com/fr/ico-to-png',
      de: 'https://pixselli.com/de/ico-to-png',
      it: 'https://pixselli.com/it/ico-to-png',
      'x-default': 'https://pixselli.com/ico-to-png',
    },
  },
  openGraph: {
    title: 'Conversor ICO para PNG Online Gratis - Pixselli',
    description: 'Converta ICO para PNG rapidamente com saida confiavel.',
    url: 'https://pixselli.com/pt/ico-to-png',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor ICO para PNG Online Gratis - Pixselli',
    description: 'Converta ICO para PNG online de forma rapida e segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseIcoToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
