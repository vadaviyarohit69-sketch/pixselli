import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor JPG para AVIF Online Gratis - Converter Imagens JPG | Pixselli',
  description:
    'Converta imagens JPG para AVIF online com processamento privado no navegador e controle de qualidade.',
  keywords: ['jpg para avif', 'converter jpg para avif', 'conversor jpg avif', 'conversor avif'],
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
    canonical: 'https://pixselli.com/pt/jpg-to-avif',
    languages: {
      en: 'https://pixselli.com/jpg-to-avif',
      es: 'https://pixselli.com/es/jpg-to-avif',
      pt: 'https://pixselli.com/pt/jpg-to-avif',
      fr: 'https://pixselli.com/fr/jpg-to-avif',
      de: 'https://pixselli.com/de/jpg-to-avif',
      it: 'https://pixselli.com/it/jpg-to-avif',
      'x-default': 'https://pixselli.com/jpg-to-avif',
    },
  },
  openGraph: {
    title: 'Conversor JPG para AVIF Online Gratis - Pixselli',
    description: 'Converta JPG para AVIF rapidamente com saida confiavel.',
    url: 'https://pixselli.com/pt/jpg-to-avif',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor JPG para AVIF Online Gratis - Pixselli',
    description: 'Converta JPG para AVIF online de forma rapida e segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseJpgToAvifLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
