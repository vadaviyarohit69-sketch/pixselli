import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor JPG para PDF Online Gratis - Converter Imagens JPG | Pixselli',
  description:
    'Converta imagens JPG para PDF online com tamanho de pagina, orientacao, margens e controle de uniao usando processamento privado no navegador.',
  keywords: ['jpg para pdf', 'jpeg para pdf', 'converter jpg para pdf', 'imagem para pdf', 'unir jpg em pdf'],
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
    canonical: 'https://pixselli.com/pt/jpg-to-pdf',
    languages: {
      en: 'https://pixselli.com/jpg-to-pdf',
      es: 'https://pixselli.com/es/jpg-to-pdf',
      pt: 'https://pixselli.com/pt/jpg-to-pdf',
      fr: 'https://pixselli.com/fr/jpg-to-pdf',
      de: 'https://pixselli.com/de/jpg-to-pdf',
      it: 'https://pixselli.com/it/jpg-to-pdf',
      'x-default': 'https://pixselli.com/jpg-to-pdf',
    },
  },
  openGraph: {
    title: 'Conversor JPG para PDF Online Gratis - Pixselli',
    description: 'Converta JPG para PDF rapidamente com controles avancados de pagina.',
    url: 'https://pixselli.com/pt/jpg-to-pdf',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor JPG para PDF Online Gratis - Pixselli',
    description: 'Converta JPG para PDF online rapidamente e com seguranca.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortugueseJpgToPdfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
