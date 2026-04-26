import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor JPG para JPEG Online Gratis - Converter Arquivos JPG | Pixselli',
  description:
    'Converta formato JPG para JPEG online com processamento rapido no navegador e saida de alta qualidade.',
  keywords: ['jpg para jpeg', 'converter jpg para jpeg', 'conversor jpg jpeg', 'conversor jpeg'],
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
    canonical: 'https://pixselli.com/pt/jpg-to-jpeg',
    languages: {
      en: 'https://pixselli.com/jpg-to-jpeg',
      es: 'https://pixselli.com/es/jpg-to-jpeg',
      pt: 'https://pixselli.com/pt/jpg-to-jpeg',
      fr: 'https://pixselli.com/fr/jpg-to-jpeg',
      de: 'https://pixselli.com/de/jpg-to-jpeg',
      it: 'https://pixselli.com/it/jpg-to-jpeg',
      'x-default': 'https://pixselli.com/jpg-to-jpeg',
    },
  },
  openGraph: {
    title: 'Conversor JPG para JPEG Online Gratis - Pixselli',
    description: 'Converta arquivos JPG para JPEG de forma rapida e segura.',
    url: 'https://pixselli.com/pt/jpg-to-jpeg',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor JPG para JPEG Online Gratis - Pixselli',
    description: 'Converta JPG para JPEG online com saida rapida e privada.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseJpgToJpegLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
