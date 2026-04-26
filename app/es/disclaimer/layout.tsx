import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Descargo de responsabilidad - Pixselli',
  description:
    'Lee el descargo de responsabilidad de Pixselli sobre limites del servicio, enlaces de terceros y responsabilidad legal.',
  keywords: ['descargo de responsabilidad', 'limites del servicio', 'responsabilidad legal', 'aviso legal'],
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
    canonical: 'https://pixselli.com/es/disclaimer',
    languages: {
      en: 'https://pixselli.com/disclaimer',
      es: 'https://pixselli.com/es/disclaimer',
      pt: 'https://pixselli.com/pt/disclaimer',
      fr: 'https://pixselli.com/fr/disclaimer',
      de: 'https://pixselli.com/de/disclaimer',
      it: 'https://pixselli.com/it/disclaimer',
      'x-default': 'https://pixselli.com/disclaimer',
    },
  },
  openGraph: {
    title: 'Descargo de responsabilidad - Pixselli',
    description: 'Informacion legal importante y limites de servicio para usuarios de Pixselli.',
    url: 'https://pixselli.com/es/disclaimer',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: ['https://pixselli.com/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Descargo de responsabilidad - Pixselli',
    description: 'Informacion legal importante y limites de servicio para usuarios de Pixselli.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishDisclaimerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
