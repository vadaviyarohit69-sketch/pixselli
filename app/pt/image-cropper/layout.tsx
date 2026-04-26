import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recortador de Imagem - Recorte Imagens Gratis Online',
  description:
    'Recorte imagens online gratis com proporcoes personalizadas. Rapido, seguro e com processamento local no navegador.',
  keywords: [
    'recortador de imagem',
    'recortar imagem',
    'recortar foto online',
    'editor de imagem online',
    'recorte de imagem gratis',
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
    canonical: 'https://pixselli.com/pt/image-cropper',
    languages: {
      en: 'https://pixselli.com/image-cropper',
      es: 'https://pixselli.com/es/image-cropper',
      pt: 'https://pixselli.com/pt/image-cropper',
      fr: 'https://pixselli.com/fr/image-cropper',
      de: 'https://pixselli.com/de/image-cropper',
      it: 'https://pixselli.com/it/image-cropper',
      'x-default': 'https://pixselli.com/image-cropper',
    },
  },
  openGraph: {
    title: 'Recortador de Imagem Gratis Online',
    description: 'Recorte imagens com precisao e baixe instantaneamente.',
    url: 'https://pixselli.com/pt/image-cropper',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'pt_PT',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recortador de Imagem - Ferramenta Gratis',
    description: 'Recorte imagens online com dimensoes personalizadas',
    creator: '@pixselli',
  },
};

export default function PortugueseImageCropperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
