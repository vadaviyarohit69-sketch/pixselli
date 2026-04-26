import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimir para 70KB Online Gratis - Ferramenta de Tamanho Exato | Pixselli',
  description:
    'Comprima imagem para 70KB exatos online com ajuste inteligente de qualidade. Processamento rapido e privado para JPG, PNG e WebP.',
  keywords: ['comprimir 70kb,compressao de imagem,reduzir tamanho,compressor online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/pt/compress-70kb',
    languages: {
      en: 'https://pixselli.com/compress-70kb',
      es: 'https://pixselli.com/es/compress-70kb',
      pt: 'https://pixselli.com/pt/compress-70kb',
      fr: 'https://pixselli.com/fr/compress-70kb',
      de: 'https://pixselli.com/de/compress-70kb',
      it: 'https://pixselli.com/it/compress-70kb',
      'x-default': 'https://pixselli.com/compress-70kb',
    },
  },
  openGraph: {
    title: 'Comprimir para 70KB Online Gratis - Pixselli',
    description: 'Ajuste sua imagem para 70KB exatos online com compressao privada no navegador.',
    url: 'https://pixselli.com/pt/compress-70kb',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function PortugueseCompress70KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
