import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Difuminar Rostro - Herramienta Gratis Online',
  description:
    'Difumina rostros y areas sensibles en imagenes online gratis. Rapido, seguro y con procesamiento local en tu navegador.',
  keywords: [
    'difuminar rostro',
    'difuminar cara',
    'proteger privacidad',
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
    canonical: 'https://pixselli.com/es/blur-face',
    languages: {
      en: 'https://pixselli.com/blur-face',
      es: 'https://pixselli.com/es/blur-face',
      pt: 'https://pixselli.com/pt/blur-face',
      fr: 'https://pixselli.com/fr/blur-face',
      de: 'https://pixselli.com/de/blur-face',
      it: 'https://pixselli.com/it/blur-face',
      'x-default': 'https://pixselli.com/blur-face',
    },
  },
  openGraph: {
    title: 'Difuminar Rostro Gratis Online',
    description: 'Difumina rostros y datos sensibles en imagenes en segundos.',
    url: 'https://pixselli.com/es/blur-face',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'es_ES',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Difuminar Rostro - Herramienta Gratis',
    description: 'Difumina rostros online sin perder control',
    creator: '@pixselli',
  },
};

export default function SpanishBlurFaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
