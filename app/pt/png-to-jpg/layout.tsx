import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor PNG para JPG Online Gratis - Converter Imagens PNG | Pixselli',
  description:
    'Converta imagens PNG para JPG online com controle de qualidade e processamento privado no navegador.',
  keywords: ['png para jpg', 'converter png para jpg', 'conversor png para jpg', 'png para jpeg'],
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
    canonical: 'https://pixselli.com/pt/png-to-jpg',
    languages: {
      en: 'https://pixselli.com/png-to-jpg',
      es: 'https://pixselli.com/es/png-to-jpg',
      pt: 'https://pixselli.com/pt/png-to-jpg',
      fr: 'https://pixselli.com/fr/png-to-jpg',
      de: 'https://pixselli.com/de/png-to-jpg',
      it: 'https://pixselli.com/it/png-to-jpg',
      'x-default': 'https://pixselli.com/png-to-jpg',
    },
  },
  openGraph: {
    title: 'Conversor PNG para JPG Online Gratis - Pixselli',
    description: 'Converta PNG para JPG rapido com controle de qualidade.',
    url: 'https://pixselli.com/pt/png-to-jpg',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor PNG para JPG Online Gratis - Pixselli',
    description: 'Converta arquivos PNG para JPG online de forma rapida e segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortuguesePngToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
