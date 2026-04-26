import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auf 100KB Komprimieren Online Kostenlos - Exaktes Tool | Pixselli',
  description:
    'Komprimieren Sie Bilder online auf exakt 100KB mit intelligenter Qualitaetsanpassung. Schnelle und private Verarbeitung fuer JPG, PNG und WebP.',
  keywords: ['100kb komprimieren,bildkomprimierung,dateigroesse reduzieren,online kompressor'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/de/compress-100kb',
    languages: {
      en: 'https://pixselli.com/compress-100kb',
      es: 'https://pixselli.com/es/compress-100kb',
      pt: 'https://pixselli.com/pt/compress-100kb',
      fr: 'https://pixselli.com/fr/compress-100kb',
      de: 'https://pixselli.com/de/compress-100kb',
      it: 'https://pixselli.com/it/compress-100kb',
      'x-default': 'https://pixselli.com/compress-100kb',
    },
  },
  openGraph: {
    title: 'Auf 100KB Komprimieren Online Kostenlos - Pixselli',
    description: 'Bringen Sie Ihr Bild online auf exakt 100KB mit privater Browser-Komprimierung.',
    url: 'https://pixselli.com/de/compress-100kb',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function GermanCompress100KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
