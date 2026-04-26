import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimir para 200KB Online Gratis - Ferramenta de Tamanho Exato | Pixselli',
  description:
    'Comprima imagem para 200KB exatos online com ajuste inteligente de qualidade. Processamento rapido e privado para JPG, PNG e WebP.',
  keywords: ['comprimir 200kb,compressao de imagem,reduzir tamanho,compressor online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/pt/compress-200kb',
    languages: {
      en: 'https://pixselli.com/compress-200kb',
      es: 'https://pixselli.com/es/compress-200kb',
      pt: 'https://pixselli.com/pt/compress-200kb',
      fr: 'https://pixselli.com/fr/compress-200kb',
      de: 'https://pixselli.com/de/compress-200kb',
      it: 'https://pixselli.com/it/compress-200kb',
      'x-default': 'https://pixselli.com/compress-200kb',
    },
  },
  openGraph: {
    title: 'Comprimir para 200KB Online Gratis - Pixselli',
    description: 'Ajuste sua imagem para 200KB exatos online com compressao privada no navegador.',
    url: 'https://pixselli.com/pt/compress-200kb',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function PortugueseCompress200KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
