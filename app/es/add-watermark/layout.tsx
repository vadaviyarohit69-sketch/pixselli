import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agregar Marca de Agua - Herramienta Gratis Online',
  description:
    'Agrega marcas de agua de texto a tus fotos online gratis. Rapido, seguro y con procesamiento local en tu navegador.',
  keywords: [
    'agregar marca de agua',
    'marca de agua en fotos',
    'editor de imagenes',
    'herramienta online',
  ],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://pixselli.com/es/add-watermark',
    languages: {
      en: 'https://pixselli.com/add-watermark',
      es: 'https://pixselli.com/es/add-watermark',
      pt: 'https://pixselli.com/pt/add-watermark',
      fr: 'https://pixselli.com/fr/add-watermark',
      de: 'https://pixselli.com/de/add-watermark',
      it: 'https://pixselli.com/it/add-watermark',
      'x-default': 'https://pixselli.com/add-watermark',
    },
  },
  openGraph: {
    title: 'Agregar Marca de Agua Gratis Online',
    description: 'Agrega marcas de agua de texto a tus imagenes en segundos.',
    url: 'https://pixselli.com/es/add-watermark',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'es_ES',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agregar Marca de Agua - Herramienta Gratis',
    description: 'Agrega marcas de agua de texto a imagenes online',
    creator: '@pixselli',
  },
};

export default function SpanishAddWatermarkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
