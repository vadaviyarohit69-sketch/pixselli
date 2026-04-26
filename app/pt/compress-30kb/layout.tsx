import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimir para 30KB Online Gratis - Ferramenta de Tamanho Exato | Pixselli',
  description:
    'Comprima imagem para 30KB exatos online com ajuste inteligente de qualidade. Processamento rapido e privado para JPG, PNG e WebP.',
  keywords: ['comprimir 30kb', 'compressao de imagem', 'reduzir tamanho', 'compressor online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/pt/compress-30kb',
    languages: {
      en: 'https://pixselli.com/compress-30kb',
      es: 'https://pixselli.com/es/compress-30kb',
      pt: 'https://pixselli.com/pt/compress-30kb',
      fr: 'https://pixselli.com/fr/compress-30kb',
      de: 'https://pixselli.com/de/compress-30kb',
      it: 'https://pixselli.com/it/compress-30kb',
      'x-default': 'https://pixselli.com/compress-30kb',
    },
  },
};

export default function PortugueseCompress30KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
