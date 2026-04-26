import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politica de privacidad - Pixselli',
  description:
    'Lee la Politica de privacidad de Pixselli y entiende como se gestionan datos, cookies y procesamiento en navegador.',
  keywords: ['politica de privacidad', 'privacidad pixselli', 'cookies', 'proteccion de datos', 'privacidad en navegador'],
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
    canonical: 'https://pixselli.com/es/privacy',
    languages: {
      en: 'https://pixselli.com/privacy',
      es: 'https://pixselli.com/es/privacy',
      pt: 'https://pixselli.com/pt/privacy',
      fr: 'https://pixselli.com/fr/privacy',
      de: 'https://pixselli.com/de/privacy',
      it: 'https://pixselli.com/it/privacy',
      'x-default': 'https://pixselli.com/privacy',
    },
  },
  openGraph: {
    title: 'Politica de privacidad - Pixselli',
    description: 'Como Pixselli gestiona datos y privacidad en herramientas de navegador.',
    url: 'https://pixselli.com/es/privacy',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: ['https://pixselli.com/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Politica de privacidad - Pixselli',
    description: 'Como Pixselli gestiona datos y privacidad en herramientas de navegador.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishPrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
