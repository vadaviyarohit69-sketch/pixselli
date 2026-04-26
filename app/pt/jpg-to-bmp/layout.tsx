import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor JPG para BMP Online Gratis - Converter Imagens JPG | Pixselli',
  description:
    'Converta imagens JPG para BMP online com processamento privado no navegador e controles de qualidade.',
  keywords: ['jpg para bmp', 'converter jpg para bmp', 'conversor jpg bmp', 'conversor bmp'],
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
    canonical: 'https://pixselli.com/pt/jpg-to-bmp',
    languages: {
      en: 'https://pixselli.com/jpg-to-bmp',
      es: 'https://pixselli.com/es/jpg-to-bmp',
      pt: 'https://pixselli.com/pt/jpg-to-bmp',
      fr: 'https://pixselli.com/fr/jpg-to-bmp',
      de: 'https://pixselli.com/de/jpg-to-bmp',
      it: 'https://pixselli.com/it/jpg-to-bmp',
      'x-default': 'https://pixselli.com/jpg-to-bmp',
    },
  },
  openGraph: {
    title: 'Conversor JPG para BMP Online Gratis - Pixselli',
    description: 'Converta JPG para BMP rapidamente com saida confiavel.',
    url: 'https://pixselli.com/pt/jpg-to-bmp',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor JPG para BMP Online Gratis - Pixselli',
    description: 'Converta JPG para BMP online de forma rapida e segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseJpgToBmpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
