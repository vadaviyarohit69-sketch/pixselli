import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adicionar Data na Foto - Selo de data e hora gratis online | Pixselli',
  description:
    'Adicione selo de data e hora em imagens online gratis. Rapido, seguro e com processamento local no navegador.',
  keywords: ['adicionar data na foto', 'selo de data', 'marca de tempo', 'editor de imagem'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/pt/add-date',
    languages: {
      en: 'https://pixselli.com/add-date',
      es: 'https://pixselli.com/es/add-date',
      pt: 'https://pixselli.com/pt/add-date',
      fr: 'https://pixselli.com/fr/add-date',
      de: 'https://pixselli.com/de/add-date',
      it: 'https://pixselli.com/it/add-date',
      'x-default': 'https://pixselli.com/add-date',
    },
  },
  openGraph: {
    title: 'Adicionar Data na Foto Gratis Online',
    description: 'Adicione data e hora em fotos em segundos.',
    url: 'https://pixselli.com/pt/add-date',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function PortugueseAddDateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
