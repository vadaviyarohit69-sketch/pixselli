import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor JPG para HEIC Online Gratis - Converter Imagens JPG | Pixselli',
  description:
    'Converta imagens JPG para HEIC online com processamento privado no navegador e controle de qualidade.',
  keywords: ['jpg para heic', 'converter jpg para heic', 'conversor jpg heic', 'conversor heic'],
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
    canonical: 'https://pixselli.com/pt/jpg-to-heic',
    languages: {
      en: 'https://pixselli.com/jpg-to-heic',
      es: 'https://pixselli.com/es/jpg-to-heic',
      pt: 'https://pixselli.com/pt/jpg-to-heic',
      fr: 'https://pixselli.com/fr/jpg-to-heic',
      de: 'https://pixselli.com/de/jpg-to-heic',
      it: 'https://pixselli.com/it/jpg-to-heic',
      'x-default': 'https://pixselli.com/jpg-to-heic',
    },
  },
  openGraph: {
    title: 'Conversor JPG para HEIC Online Gratis - Pixselli',
    description: 'Converta JPG para HEIC rapidamente com saida compativel com Apple.',
    url: 'https://pixselli.com/pt/jpg-to-heic',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor JPG para HEIC Online Gratis - Pixselli',
    description: 'Converta JPG para HEIC online de forma rapida e segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseJpgToHeicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
