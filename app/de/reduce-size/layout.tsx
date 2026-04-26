import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bildgroesse online kostenlos reduzieren - JPG, PNG, WebP komprimieren | PIXSELLI',
  description:
    'Reduzieren Sie die Bildgroesse online kostenlos mit einem schnellen und sicheren Tool. Komprimieren Sie JPG, PNG und WebP bei guter Qualitaet.',
  keywords: ['bildgroesse reduzieren', 'bild online komprimieren', 'bild komprimierer', 'bilder optimieren'],
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
    canonical: 'https://pixselli.com/de/reduce-size',
    languages: {
      en: 'https://pixselli.com/reduce-size',
      es: 'https://pixselli.com/es/reduce-size',
      pt: 'https://pixselli.com/pt/reduce-size',
      fr: 'https://pixselli.com/fr/reduce-size',
      de: 'https://pixselli.com/de/reduce-size',
      it: 'https://pixselli.com/it/reduce-size',
      'x-default': 'https://pixselli.com/reduce-size',
    },
  },
  openGraph: {
    title: 'Bildgroesse online kostenlos reduzieren - PIXSELLI',
    description:
      'Komprimieren und reduzieren Sie Bildgroessen bei guter Qualitaet. Schnelles, kostenloses und privates Tool fuer JPG, PNG und WebP.',
    url: 'https://pixselli.com/de/reduce-size',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function GermanReduceSizeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
