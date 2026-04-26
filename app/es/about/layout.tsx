import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Pixselli - Plataforma gratuita de herramientas de imagen',
  description:
    'Conoce Pixselli, nuestra mision y como construimos herramientas de imagen gratuitas centradas en privacidad y velocidad.',
  keywords: ['sobre pixselli', 'herramientas de imagen', 'procesamiento en navegador', 'privacidad de imagen', 'mision pixselli'],
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
    canonical: 'https://pixselli.com/es/about',
    languages: {
      en: 'https://pixselli.com/about',
      es: 'https://pixselli.com/es/about',
      pt: 'https://pixselli.com/pt/about',
      fr: 'https://pixselli.com/fr/about',
      de: 'https://pixselli.com/de/about',
      it: 'https://pixselli.com/it/about',
      'x-default': 'https://pixselli.com/about',
    },
  },
  openGraph: {
    title: 'Sobre Pixselli - Plataforma gratuita de herramientas de imagen',
    description: 'Conoce Pixselli y nuestra mision de herramientas de imagen con privacidad.',
    url: 'https://pixselli.com/es/about',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: ['https://pixselli.com/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Pixselli - Plataforma gratuita de herramientas de imagen',
    description: 'Conoce Pixselli y nuestra mision de herramientas de imagen con privacidad.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishAboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
