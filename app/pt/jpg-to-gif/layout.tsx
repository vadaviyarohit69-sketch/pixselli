import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor JPG para GIF Online Gratis - Converter Imagens JPG | Pixselli',
  description:
    'Converta imagens JPG para GIF online com processamento privado no navegador e controle de qualidade.',
  keywords: ['jpg para gif', 'converter jpg para gif', 'conversor jpg gif', 'conversor gif'],
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
    canonical: 'https://pixselli.com/pt/jpg-to-gif',
    languages: {
      en: 'https://pixselli.com/jpg-to-gif',
      es: 'https://pixselli.com/es/jpg-to-gif',
      pt: 'https://pixselli.com/pt/jpg-to-gif',
      fr: 'https://pixselli.com/fr/jpg-to-gif',
      de: 'https://pixselli.com/de/jpg-to-gif',
      it: 'https://pixselli.com/it/jpg-to-gif',
      'x-default': 'https://pixselli.com/jpg-to-gif',
    },
  },
  openGraph: {
    title: 'Conversor JPG para GIF Online Gratis - Pixselli',
    description: 'Converta JPG para GIF rapidamente com saida confiavel.',
    url: 'https://pixselli.com/pt/jpg-to-gif',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor JPG para GIF Online Gratis - Pixselli',
    description: 'Converta JPG para GIF online de forma rapida e segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseJpgToGifLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
