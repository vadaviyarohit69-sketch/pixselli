import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recortador de Imagen - Recorta Imagenes Gratis Online',
  description:
    'Recorta imagenes online gratis con relaciones de aspecto personalizadas. Rapido, seguro y con procesamiento local en tu navegador.',
  keywords: [
    'recortador de imagen',
    'recortar imagen',
    'recortar foto online',
    'editor de imagen online',
    'recorte de imagen gratis',
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
    canonical: 'https://pixselli.com/es/image-cropper',
    languages: {
      en: 'https://pixselli.com/image-cropper',
      es: 'https://pixselli.com/es/image-cropper',
      pt: 'https://pixselli.com/pt/image-cropper',
      fr: 'https://pixselli.com/fr/image-cropper',
      de: 'https://pixselli.com/de/image-cropper',
      it: 'https://pixselli.com/it/image-cropper',
      'x-default': 'https://pixselli.com/image-cropper',
    },
  },
  openGraph: {
    title: 'Recortador de Imagen Gratis Online',
    description: 'Recorta imagenes con precision y descargalas al instante.',
    url: 'https://pixselli.com/es/image-cropper',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'es_ES',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recortador de Imagen - Herramienta Gratis',
    description: 'Recorta imagenes online con dimensiones personalizadas',
    creator: '@pixselli',
  },
};

export default function SpanishImageCropperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
