import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creador de Fotos para Pasaporte - Crear Fotos Online Gratis',
  description:
    'Crea fotos de pasaporte online gratis. Ajusta tamano y fondo con procesamiento rapido y seguro en tu navegador.',
  keywords: [
    'foto pasaporte online',
    'creador foto pasaporte',
    'tamano foto pasaporte',
    'editor foto pasaporte',
    'foto carnet online',
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
    canonical: 'https://pixselli.com/es/passport-photo-maker',
    languages: {
      en: 'https://pixselli.com/passport-photo-maker',
      es: 'https://pixselli.com/es/passport-photo-maker',
      pt: 'https://pixselli.com/pt/passport-photo-maker',
      fr: 'https://pixselli.com/fr/passport-photo-maker',
      de: 'https://pixselli.com/de/passport-photo-maker',
      it: 'https://pixselli.com/it/passport-photo-maker',
      'x-default': 'https://pixselli.com/passport-photo-maker',
    },
  },
  openGraph: {
    title: 'Creador de Fotos para Pasaporte Gratis',
    description: 'Crea fotos de pasaporte online con tamanos oficiales y fondo personalizado.',
    url: 'https://pixselli.com/es/passport-photo-maker',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'es_ES',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foto Pasaporte Online - Herramienta Gratis',
    description: 'Crea fotos de pasaporte con tamanos oficiales',
    creator: '@pixselli',
  },
};

export default function SpanishPassportPhotoMakerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
