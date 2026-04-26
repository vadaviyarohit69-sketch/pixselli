import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adicionar Marca d agua - Ferramenta Gratis Online | Pixselli',
  description:
    'Adicione marcas d agua de texto nas suas fotos online gratis. Rapido, seguro e com processamento local no navegador.',
  keywords: ['adicionar marca d agua', 'marca d agua em fotos', 'editor de imagem', 'ferramenta online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/pt/add-watermark',
    languages: {
      en: 'https://pixselli.com/add-watermark',
      es: 'https://pixselli.com/es/add-watermark',
      pt: 'https://pixselli.com/pt/add-watermark',
      fr: 'https://pixselli.com/fr/add-watermark',
      de: 'https://pixselli.com/de/add-watermark',
      it: 'https://pixselli.com/it/add-watermark',
      'x-default': 'https://pixselli.com/add-watermark',
    },
  },
  openGraph: {
    title: 'Adicionar Marca d agua Gratis Online',
    description: 'Adicione marcas d agua de texto em imagens em segundos.',
    url: 'https://pixselli.com/pt/add-watermark',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function PortugueseAddWatermarkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
