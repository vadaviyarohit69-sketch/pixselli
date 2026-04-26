import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Virar Imagem Online Gratis - Horizontal e Vertical | Pixselli',
  description:
    'Vire imagens horizontalmente ou verticalmente online gratis. Rapido, seguro e com processamento local no navegador.',
  keywords: ['virar imagem', 'espelhar imagem', 'inverter imagem', 'virada horizontal', 'virada vertical'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/pt/flip-image',
    languages: {
      en: 'https://pixselli.com/flip-image',
      es: 'https://pixselli.com/es/flip-image',
      pt: 'https://pixselli.com/pt/flip-image',
      fr: 'https://pixselli.com/fr/flip-image',
      de: 'https://pixselli.com/de/flip-image',
      it: 'https://pixselli.com/it/flip-image',
      'x-default': 'https://pixselli.com/flip-image',
    },
  },
  openGraph: {
    title: 'Virar Imagem Gratis Online',
    description: 'Vire imagens horizontal ou verticalmente em segundos.',
    url: 'https://pixselli.com/pt/flip-image',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'pt_PT',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function PortugueseFlipImageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
