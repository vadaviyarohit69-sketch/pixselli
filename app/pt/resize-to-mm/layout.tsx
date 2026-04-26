import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redimensionar imagem para mm gratis - DPI/PPI personalizado | Pixselli',
  description:
    'Redimensione imagens para milimetros exatos online com configuracao DPI/PPI personalizada. Ideal para fotos de passaporte, documentos e impressao metrica.',
  keywords: ['redimensionar para mm', 'foto passaporte mm', 'mm para pixels', 'dpi imagem', 'impressao metrica'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://pixselli.com/pt/resize-to-mm',
    languages: {
      en: 'https://pixselli.com/resize-to-mm',
      es: 'https://pixselli.com/es/resize-to-mm',
      pt: 'https://pixselli.com/pt/resize-to-mm',
      fr: 'https://pixselli.com/fr/resize-to-mm',
      de: 'https://pixselli.com/de/resize-to-mm',
      it: 'https://pixselli.com/it/resize-to-mm',
      'x-default': 'https://pixselli.com/resize-to-mm',
    },
  },
  openGraph: {
    title: 'Redimensionar imagem para mm gratis - Pixselli',
    description: 'Defina milimetros exatos e DPI/PPI para imagens prontas para impressao.',
    url: 'https://pixselli.com/pt/resize-to-mm',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function PortugueseResizeToMmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
