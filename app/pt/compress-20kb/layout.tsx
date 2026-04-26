import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimir para 20KB Online Gratis - Ferramenta de Tamanho Exato | Pixselli',
  description:
    'Comprima imagem para 20KB exatos online com ajuste inteligente de qualidade. Processamento rapido e privado para JPG, PNG e WebP.',
  keywords: ['comprimir 20kb', 'compressao de imagem', 'reduzir tamanho', 'compressor online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/pt/compress-20kb',
    languages: {
      en: 'https://pixselli.com/compress-20kb',
      es: 'https://pixselli.com/es/compress-20kb',
      pt: 'https://pixselli.com/pt/compress-20kb',
      fr: 'https://pixselli.com/fr/compress-20kb',
      de: 'https://pixselli.com/de/compress-20kb',
      it: 'https://pixselli.com/it/compress-20kb',
      'x-default': 'https://pixselli.com/compress-20kb',
    },
  },
};

export default function PortugueseCompress20KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
