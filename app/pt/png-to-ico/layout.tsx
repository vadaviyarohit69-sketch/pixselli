import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor PNG para ICO Online Gratis - Converter Imagens PNG | Pixselli',
  description:
    'Converta imagens PNG para ICO online com processamento privado no navegador e controle de qualidade.',
  keywords: ['png para ico', 'converter png para ico', 'conversor png ico', 'conversor ico'],
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
    canonical: 'https://pixselli.com/pt/png-to-ico',
    languages: {
      en: 'https://pixselli.com/png-to-ico',
      es: 'https://pixselli.com/es/png-to-ico',
      pt: 'https://pixselli.com/pt/png-to-ico',
      fr: 'https://pixselli.com/fr/png-to-ico',
      de: 'https://pixselli.com/de/png-to-ico',
      it: 'https://pixselli.com/it/png-to-ico',
      'x-default': 'https://pixselli.com/png-to-ico',
    },
  },
  openGraph: {
    title: 'Conversor PNG para ICO Online Gratis - Pixselli',
    description: 'Converta PNG para ICO rapidamente com saida confiavel.',
    url: 'https://pixselli.com/pt/png-to-ico',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor PNG para ICO Online Gratis - Pixselli',
    description: 'Converta PNG para ICO online de forma rapida e segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortuguesePngToIcoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
