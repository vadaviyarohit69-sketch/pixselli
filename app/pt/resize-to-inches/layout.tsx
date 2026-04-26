import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redimensionar imagem para polegadas gratis - DPI/PPI personalizado | Pixselli',
  description:
    'Redimensione imagens para polegadas exatas online com configuracao DPI/PPI personalizada. Ideal para fotos e documentos prontos para impressao.',
  keywords: ['redimensionar para polegadas', 'dpi imagem', 'tamanho de impressao', 'polegadas para pixels'],
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
    canonical: 'https://pixselli.com/pt/resize-to-inches',
    languages: {
      en: 'https://pixselli.com/resize-to-inches',
      es: 'https://pixselli.com/es/resize-to-inches',
      pt: 'https://pixselli.com/pt/resize-to-inches',
      fr: 'https://pixselli.com/fr/resize-to-inches',
      de: 'https://pixselli.com/de/resize-to-inches',
      it: 'https://pixselli.com/it/resize-to-inches',
      'x-default': 'https://pixselli.com/resize-to-inches',
    },
  },
  openGraph: {
    title: 'Redimensionar imagem para polegadas gratis - Pixselli',
    description: 'Defina polegadas exatas e DPI/PPI para imagens prontas para impressao.',
    url: 'https://pixselli.com/pt/resize-to-inches',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function PortugueseResizeToInchesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
