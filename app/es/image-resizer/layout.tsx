import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redimensionador de Imagen - Cambiar Tamano Gratis Online',
  description:
    'Redimensiona imagenes online gratis. Cambia ancho y alto con procesamiento rapido y seguro en tu navegador.',
  keywords: [
    'redimensionar imagen',
    'cambiar tamano de imagen',
    'redimensionador de imagen online',
    'redimensionar foto',
    'reducir dimensiones imagen',
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
    canonical: 'https://pixselli.com/es/image-resizer',
    languages: {
      en: 'https://pixselli.com/image-resizer',
      es: 'https://pixselli.com/es/image-resizer',
      pt: 'https://pixselli.com/pt/image-resizer',
      fr: 'https://pixselli.com/fr/image-resizer',
      de: 'https://pixselli.com/de/image-resizer',
      it: 'https://pixselli.com/it/image-resizer',
      'x-default': 'https://pixselli.com/image-resizer',
    },
  },
  openGraph: {
    title: 'Redimensionador de Imagen Gratis Online',
    description: 'Redimensiona imagenes a cualquier dimension de forma rapida y segura.',
    url: 'https://pixselli.com/es/image-resizer',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'es_ES',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Redimensionador de Imagen - Herramienta Gratis',
    description: 'Redimensiona imagenes online a cualquier tamano',
    creator: '@pixselli',
  },
};

export default function SpanishImageResizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
