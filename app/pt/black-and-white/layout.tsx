import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversor Preto e Branco Gratis - Converter Imagens para Escala de Cinza | Pixselli',
  description:
    'Converta imagens para preto e branco/escala de cinza online gratis. Rapido, seguro e com processamento local no navegador.',
  keywords: ['preto e branco', 'escala de cinza', 'converter imagem', 'editor de foto'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/pt/black-and-white',
    languages: {
      en: 'https://pixselli.com/black-and-white',
      es: 'https://pixselli.com/es/black-and-white',
      pt: 'https://pixselli.com/pt/black-and-white',
      fr: 'https://pixselli.com/fr/black-and-white',
      de: 'https://pixselli.com/de/black-and-white',
      it: 'https://pixselli.com/it/black-and-white',
      'x-default': 'https://pixselli.com/black-and-white',
    },
  },
  openGraph: {
    title: 'Conversor Preto e Branco Gratis Online',
    description: 'Converta imagens para preto e branco em segundos.',
    url: 'https://pixselli.com/pt/black-and-white',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'pt_PT',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function PortugueseBlackAndWhiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
