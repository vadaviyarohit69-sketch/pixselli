import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimir para 100KB Online Gratis - Ferramenta de Tamanho Exato | Pixselli',
  description:
    'Comprima imagem para 100KB exatos online com ajuste inteligente de qualidade. Processamento rapido e privado para JPG, PNG e WebP.',
  keywords: ['comprimir 100kb,compressao de imagem,reduzir tamanho,compressor online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/pt/compress-100kb',
    languages: {
      en: 'https://pixselli.com/compress-100kb',
      es: 'https://pixselli.com/es/compress-100kb',
      pt: 'https://pixselli.com/pt/compress-100kb',
      fr: 'https://pixselli.com/fr/compress-100kb',
      de: 'https://pixselli.com/de/compress-100kb',
      it: 'https://pixselli.com/it/compress-100kb',
      'x-default': 'https://pixselli.com/compress-100kb',
    },
  },
  openGraph: {
    title: 'Comprimir para 100KB Online Gratis - Pixselli',
    description: 'Ajuste sua imagem para 100KB exatos online com compressao privada no navegador.',
    url: 'https://pixselli.com/pt/compress-100kb',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function PortugueseCompress100KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
