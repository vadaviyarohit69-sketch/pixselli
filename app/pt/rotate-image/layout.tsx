import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Girar imagem online gratis - Rotacionador em qualquer angulo | Pixselli',
  description:
    'Gire imagens online em qualquer angulo com visualizacao instantanea. Ferramenta gratuita no navegador com saida PNG, JPG e WebP.',
  keywords: ['girar imagem', 'rotacionar foto', 'rotacionador online', 'angulo personalizado', 'rotacao gratis'],
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
    canonical: 'https://pixselli.com/pt/rotate-image',
    languages: {
      en: 'https://pixselli.com/rotate-image',
      es: 'https://pixselli.com/es/rotate-image',
      pt: 'https://pixselli.com/pt/rotate-image',
      fr: 'https://pixselli.com/fr/rotate-image',
      de: 'https://pixselli.com/de/rotate-image',
      it: 'https://pixselli.com/it/rotate-image',
      'x-default': 'https://pixselli.com/rotate-image',
    },
  },
  openGraph: {
    title: 'Girar imagem online gratis - Pixselli',
    description: 'Gire fotos em qualquer angulo instantaneamente com visualizacao ao vivo.',
    url: 'https://pixselli.com/pt/rotate-image',
    siteName: 'Pixselli',
    locale: 'pt_PT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function PortugueseRotateImageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
