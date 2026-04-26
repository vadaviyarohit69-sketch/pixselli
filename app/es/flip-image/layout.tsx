import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Voltear Imagen - Volteo Horizontal y Vertical Gratis',
  description:
    'Voltea imagenes horizontal o verticalmente online gratis. Rapido, seguro y con procesamiento local en tu navegador.',
  keywords: [
    'voltear imagen',
    'espejar imagen',
    'invertir imagen',
    'volteo horizontal',
    'volteo vertical',
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
    canonical: 'https://pixselli.com/es/flip-image',
    languages: {
      en: 'https://pixselli.com/flip-image',
      es: 'https://pixselli.com/es/flip-image',
      pt: 'https://pixselli.com/pt/flip-image',
      fr: 'https://pixselli.com/fr/flip-image',
      de: 'https://pixselli.com/de/flip-image',
      it: 'https://pixselli.com/it/flip-image',
      'x-default': 'https://pixselli.com/flip-image',
    },
  },
  openGraph: {
    title: 'Voltear Imagen Gratis Online',
    description: 'Voltea imagenes horizontal o verticalmente en segundos.',
    url: 'https://pixselli.com/es/flip-image',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'es_ES',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voltear Imagen - Herramienta Gratis',
    description: 'Voltea imagenes online sin perder calidad',
    creator: '@pixselli',
  },
};

export default function SpanishFlipImageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
