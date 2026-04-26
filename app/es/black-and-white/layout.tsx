import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor Blanco y Negro - Convertir imagenes gratis online',
  description:
    'Convierte imagenes a blanco y negro o escala de grises online gratis. Rapido, seguro y con procesamiento local en tu navegador.',
  keywords: [
    'blanco y negro',
    'escala de grises',
    'convertir imagen',
    'editor de fotos',
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
    canonical: 'https://pixselli.com/es/black-and-white',
    languages: {
      en: 'https://pixselli.com/black-and-white',
      es: 'https://pixselli.com/es/black-and-white',
      pt: 'https://pixselli.com/pt/black-and-white',
      fr: 'https://pixselli.com/fr/black-and-white',
      de: 'https://pixselli.com/de/black-and-white',
      it: 'https://pixselli.com/it/black-and-white',
      'x-default': 'https://pixselli.com/black-and-white',
    },
  },
  openGraph: {
    title: 'Convertidor Blanco y Negro Gratis Online',
    description: 'Convierte imagenes a blanco y negro en segundos.',
    url: 'https://pixselli.com/es/black-and-white',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'es_ES',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertidor Blanco y Negro - Herramienta Gratis',
    description: 'Convierte fotos a blanco y negro online',
    creator: '@pixselli',
  },
};

export default function SpanishBlackAndWhiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
