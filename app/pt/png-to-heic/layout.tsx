import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor PNG para HEIC Online Gratis - Converter Imagens PNG | Pixselli',
  description:
    'Converta imagens PNG para HEIC online com processamento privado no navegador e controle de qualidade.',
  keywords: ['png para heic', 'converter png para heic', 'conversor png heic', 'heic converter'],
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
    canonical: 'https://pixselli.com/pt/png-to-heic',
    languages: {
      en: 'https://pixselli.com/png-to-heic',
      es: 'https://pixselli.com/es/png-to-heic',
      pt: 'https://pixselli.com/pt/png-to-heic',
      fr: 'https://pixselli.com/fr/png-to-heic',
      de: 'https://pixselli.com/de/png-to-heic',
      it: 'https://pixselli.com/it/png-to-heic',
      'x-default': 'https://pixselli.com/png-to-heic',
    },
  },
  openGraph: {
    title: 'Conversor PNG para HEIC Online Gratis - Pixselli',
    description: 'Converta PNG para HEIC rapidamente com saida confiavel.',
    url: 'https://pixselli.com/pt/png-to-heic',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversor PNG para HEIC Online Gratis - Pixselli',
    description: 'Converta PNG para HEIC online de forma rapida e segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function PortuguesePngToHeicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
