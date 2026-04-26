import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor PNG para PDF Online Gratis - Converter Imagens PNG | Pixselli',
  description:
    'Converta imagens PNG para PDF online com tamanho de pagina, orientacao, margens e controle de uniao usando processamento privado no navegador.',
  keywords: ['png para pdf', 'converter png para pdf', 'imagem para pdf', 'unir png em pdf'],
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
    canonical: 'https://pixselli.com/pt/png-to-pdf',
    languages: {
      en: 'https://pixselli.com/png-to-pdf',
      es: 'https://pixselli.com/es/png-to-pdf',
      pt: 'https://pixselli.com/pt/png-to-pdf',
      fr: 'https://pixselli.com/fr/png-to-pdf',
      de: 'https://pixselli.com/de/png-to-pdf',
      it: 'https://pixselli.com/it/png-to-pdf',
      'x-default': 'https://pixselli.com/png-to-pdf',
    },
  },
  openGraph: {
    title: 'Conversor PNG para PDF Online Gratis - Pixselli',
    description: 'Converta PNG para PDF rapidamente com controles avancados de pagina.',
    url: 'https://pixselli.com/pt/png-to-pdf',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor PNG para PDF Online Gratis - Pixselli',
    description: 'Converta PNG para PDF online rapidamente e com seguranca.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortuguesePngToPdfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
