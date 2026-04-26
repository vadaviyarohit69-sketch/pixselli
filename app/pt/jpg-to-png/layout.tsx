import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor JPG para PNG Online Gratis - Converter Imagens JPG | Pixselli',
  description:
    'Converta imagens JPG para PNG online com processamento privado no navegador e saida de alta qualidade.',
  keywords: ['jpg para png', 'converter jpg para png', 'conversor jpg para png', 'jpeg para png'],
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
    canonical: 'https://pixselli.com/pt/jpg-to-png',
    languages: {
      en: 'https://pixselli.com/jpg-to-png',
      es: 'https://pixselli.com/es/jpg-to-png',
      pt: 'https://pixselli.com/pt/jpg-to-png',
      fr: 'https://pixselli.com/fr/jpg-to-png',
      de: 'https://pixselli.com/de/jpg-to-png',
      it: 'https://pixselli.com/it/jpg-to-png',
      'x-default': 'https://pixselli.com/jpg-to-png',
    },
  },
  openGraph: {
    title: 'Conversor JPG para PNG Online Gratis - Pixselli',
    description: 'Converta JPG para PNG rapidamente com saida de alta qualidade.',
    url: 'https://pixselli.com/pt/jpg-to-png',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor JPG para PNG Online Gratis - Pixselli',
    description: 'Converta arquivos JPG para PNG online de forma rapida e segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseJpgToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
