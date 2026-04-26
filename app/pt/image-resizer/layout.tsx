import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redimensionador de Imagem - Redimensione Imagens Online Gratis',
  description:
    'Redimensione imagens online gratis. Ajuste largura e altura com processamento rapido e seguro no navegador.',
  keywords: [
    'redimensionador de imagem',
    'redimensionar imagem',
    'redimensionar foto',
    'alterar tamanho da imagem',
    'redimensionador online',
  ],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://pixselli.com/pt/image-resizer',
    languages: {
      en: 'https://pixselli.com/image-resizer',
      es: 'https://pixselli.com/es/image-resizer',
      pt: 'https://pixselli.com/pt/image-resizer',
      fr: 'https://pixselli.com/fr/image-resizer',
      de: 'https://pixselli.com/de/image-resizer',
      it: 'https://pixselli.com/it/image-resizer',
      'x-default': 'https://pixselli.com/image-resizer',
    },
  },
  openGraph: {
    title: 'Redimensionador de Imagem Gratis Online',
    description: 'Redimensione imagens para qualquer dimensao de forma rapida e segura.',
    url: 'https://pixselli.com/pt/image-resizer',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'pt_PT',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Redimensionador de Imagem - Ferramenta Gratis',
    description: 'Redimensione imagens online para qualquer tamanho',
    creator: '@pixselli',
  },
};

export default function PortugueseImageResizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
