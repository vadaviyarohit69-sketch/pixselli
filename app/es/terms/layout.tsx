import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terminos de servicio - Pixselli',
  description:
    'Revisa los Terminos de servicio de Pixselli, reglas de uso aceptable y responsabilidades legales.',
  keywords: ['terminos de servicio', 'terminos pixselli', 'uso aceptable', 'condiciones legales'],
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
    canonical: 'https://pixselli.com/es/terms',
    languages: {
      en: 'https://pixselli.com/terms',
      es: 'https://pixselli.com/es/terms',
      pt: 'https://pixselli.com/pt/terms',
      fr: 'https://pixselli.com/fr/terms',
      de: 'https://pixselli.com/de/terms',
      it: 'https://pixselli.com/it/terms',
      'x-default': 'https://pixselli.com/terms',
    },
  },
  openGraph: {
    title: 'Terminos de servicio - Pixselli',
    description: 'Lee reglas de uso y condiciones legales para Pixselli.',
    url: 'https://pixselli.com/es/terms',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: ['https://pixselli.com/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terminos de servicio - Pixselli',
    description: 'Lee reglas de uso y condiciones legales para Pixselli.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishTermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
