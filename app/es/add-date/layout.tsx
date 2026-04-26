import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agregar Fecha a Foto - Herramienta Gratis Online',
  description:
    'Agrega fecha y marca de tiempo a imagenes online gratis. Rapido, seguro y con procesamiento local en tu navegador.',
  keywords: [
    'agregar fecha a foto',
    'sello de fecha',
    'marca de tiempo',
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
    canonical: 'https://pixselli.com/es/add-date',
    languages: {
      en: 'https://pixselli.com/add-date',
      es: 'https://pixselli.com/es/add-date',
      pt: 'https://pixselli.com/pt/add-date',
      fr: 'https://pixselli.com/fr/add-date',
      de: 'https://pixselli.com/de/add-date',
      it: 'https://pixselli.com/it/add-date',
      'x-default': 'https://pixselli.com/add-date',
    },
  },
  openGraph: {
    title: 'Agregar Fecha a Foto Gratis Online',
    description: 'Agrega fecha y marca de tiempo a tus fotos en segundos.',
    url: 'https://pixselli.com/es/add-date',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'es_ES',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agregar Fecha a Foto - Herramienta Gratis',
    description: 'Agrega fecha a imagenes online sin perder calidad',
    creator: '@pixselli',
  },
};

export default function SpanishAddDateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
