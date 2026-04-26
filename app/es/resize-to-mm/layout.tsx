import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redimensionar imagen a mm gratis - DPI/PPI personalizado | Pixselli',
  description:
    'Redimensiona imagenes a milimetros exactos online con ajustes DPI/PPI personalizados. Ideal para fotos de pasaporte, tarjetas ID e impresion metrica.',
  keywords: ['redimensionar a mm', 'tamano foto pasaporte mm', 'mm a pixeles', 'redimensionar imagen metrica', 'impresion en milimetros'],
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
    canonical: 'https://pixselli.com/es/resize-to-mm',
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
    title: 'Redimensionar imagen a mm gratis - Pixselli',
    description:
      'Define milimetros exactos y DPI/PPI para imagenes listas para impresion online. Rapido y preciso.',
    url: 'https://pixselli.com/es/resize-to-mm',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta para redimensionar a mm de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Redimensionar imagen a mm gratis - Pixselli',
    description: 'Redimensiona fotos a milimetros exactos con DPI/PPI personalizado online.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishResizeToMmLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
