import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contactar Pixselli - Soporte y comentarios',
  description:
    'Contacta a Pixselli para soporte, comentarios de producto y consultas comerciales relacionadas con nuestras herramientas de imagen.',
  keywords: ['contactar pixselli', 'soporte', 'comentarios', 'ayuda', 'soporte herramientas de imagen'],
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
    canonical: 'https://pixselli.com/es/contact',
    languages: {
      en: 'https://pixselli.com/contact',
      es: 'https://pixselli.com/es/contact',
      pt: 'https://pixselli.com/pt/contact',
      fr: 'https://pixselli.com/fr/contact',
      de: 'https://pixselli.com/de/contact',
      it: 'https://pixselli.com/it/contact',
      'x-default': 'https://pixselli.com/contact',
    },
  },
  openGraph: {
    title: 'Contactar Pixselli - Soporte y comentarios',
    description: 'Contacta a Pixselli para soporte, comentarios y colaboraciones.',
    url: 'https://pixselli.com/es/contact',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: ['https://pixselli.com/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contactar Pixselli - Soporte y comentarios',
    description: 'Contacta a Pixselli para soporte, comentarios y colaboraciones.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
