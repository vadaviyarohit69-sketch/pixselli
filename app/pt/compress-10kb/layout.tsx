import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimir para 10KB Online Gratis - Ferramenta de Tamanho Exato | Pixselli',
  description:
    'Comprima imagem para 10KB exatos online com ajuste inteligente de qualidade. Processamento rapido e privado para JPG, PNG e WebP.',
  keywords: ['comprimir 10kb', 'compressao de imagem', 'reduzir tamanho', 'compressor online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/pt/compress-10kb',
    languages: {
      en: 'https://pixselli.com/compress-10kb',
      es: 'https://pixselli.com/es/compress-10kb',
      pt: 'https://pixselli.com/pt/compress-10kb',
      fr: 'https://pixselli.com/fr/compress-10kb',
      de: 'https://pixselli.com/de/compress-10kb',
      it: 'https://pixselli.com/it/compress-10kb',
      'x-default': 'https://pixselli.com/compress-10kb',
    },
  },
};

export default function PortugueseCompress10KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
