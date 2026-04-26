import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auf 60KB Komprimieren Online Kostenlos - Exaktes Tool | Pixselli',
  description:
    'Komprimieren Sie Bilder online auf exakt 60KB mit intelligenter Qualitaetsanpassung. Schnelle und private Verarbeitung fuer JPG, PNG und WebP.',
  keywords: ['60kb komprimieren,bildkomprimierung,dateigroesse reduzieren,online kompressor'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/de/compress-60kb',
    languages: {
      en: 'https://pixselli.com/compress-60kb',
      es: 'https://pixselli.com/es/compress-60kb',
      pt: 'https://pixselli.com/pt/compress-60kb',
      fr: 'https://pixselli.com/fr/compress-60kb',
      de: 'https://pixselli.com/de/compress-60kb',
      it: 'https://pixselli.com/it/compress-60kb',
      'x-default': 'https://pixselli.com/compress-60kb',
    },
  },
  openGraph: {
    title: 'Auf 60KB Komprimieren Online Kostenlos - Pixselli',
    description: 'Bringen Sie Ihr Bild online auf exakt 60KB mit privater Browser-Komprimierung.',
    url: 'https://pixselli.com/de/compress-60kb',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function GermanCompress60KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
