import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redimensionar imagen a pulgadas gratis - DPI/PPI personalizado | Pixselli',
  description:
    'Redimensiona imagenes a pulgadas exactas online con configuracion DPI/PPI personalizada. Ideal para fotos y documentos listos para impresion.',
  keywords: ['redimensionar a pulgadas', 'dpi imagen', 'tamano impresion foto', 'pulgadas a pixeles', 'medidas de impresion'],
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
    canonical: 'https://pixselli.com/es/resize-to-inches',
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
    title: 'Redimensionar imagen a pulgadas gratis - Pixselli',
    description:
      'Define pulgadas exactas y DPI/PPI para imagenes listas para impresion. Rapido, preciso y desde el navegador.',
    url: 'https://pixselli.com/es/resize-to-inches',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta para redimensionar a pulgadas de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Redimensionar imagen a pulgadas gratis - Pixselli',
    description: 'Redimensiona fotos a pulgadas exactas con DPI/PPI personalizado online.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishResizeToInchesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
