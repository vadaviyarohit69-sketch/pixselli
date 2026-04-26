import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor BMP para JPG Online Gratis - Converter Imagens BMP | Pixselli',
  description:
    'Converta imagens BMP para JPG online com processamento privado no navegador e controle de qualidade.',
  keywords: ['bmp para jpg', 'converter bmp para jpg', 'conversor bmp jpg', 'conversor jpg'],
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
    canonical: 'https://pixselli.com/pt/bmp-to-jpg',
    languages: {
      en: 'https://pixselli.com/bmp-to-jpg',
      es: 'https://pixselli.com/es/bmp-to-jpg',
      pt: 'https://pixselli.com/pt/bmp-to-jpg',
      fr: 'https://pixselli.com/fr/bmp-to-jpg',
      de: 'https://pixselli.com/de/bmp-to-jpg',
      it: 'https://pixselli.com/it/bmp-to-jpg',
      'x-default': 'https://pixselli.com/bmp-to-jpg',
    },
  },
  openGraph: {
    title: 'Conversor BMP para JPG Online Gratis - Pixselli',
    description: 'Converta BMP para JPG rapidamente com saida confiavel.',
    url: 'https://pixselli.com/pt/bmp-to-jpg',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor BMP para JPG Online Gratis - Pixselli',
    description: 'Converta BMP para JPG online de forma rapida e segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseBmpToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
