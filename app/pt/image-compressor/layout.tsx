import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compressor de Imagem Online Gratis - Reduzir JPG, PNG, WebP | Pixselli',
  description:
    'Comprima imagens online com qualidade ajustavel e opcoes de formato. Reduza JPG, PNG e WebP rapidamente mantendo boa qualidade visual.',
  keywords: ['compressor de imagem', 'compressao de imagem', 'comprimir imagens', 'reduzir tamanho', 'compressor online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/pt/image-compressor',
    languages: {
      en: 'https://pixselli.com/image-compressor',
      es: 'https://pixselli.com/es/image-compressor',
      pt: 'https://pixselli.com/pt/image-compressor',
      fr: 'https://pixselli.com/fr/image-compressor',
      de: 'https://pixselli.com/de/image-compressor',
      it: 'https://pixselli.com/it/image-compressor',
      'x-default': 'https://pixselli.com/image-compressor',
    },
  },
  openGraph: {
    title: 'Compressor de Imagem Online Gratis - Pixselli',
    description: 'Comprima JPG, PNG e WebP online com controles de qualidade e processamento privado rapido.',
    url: 'https://pixselli.com/pt/image-compressor',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function PortugueseImageCompressorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
