import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auf 80KB Komprimieren Online Kostenlos - Exaktes Tool | Pixselli',
  description:
    'Komprimieren Sie Bilder online auf exakt 80KB mit intelligenter Qualitaetsanpassung. Schnelle und private Verarbeitung fuer JPG, PNG und WebP.',
  keywords: ['80kb komprimieren,bildkomprimierung,dateigroesse reduzieren,online kompressor'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/de/compress-80kb',
    languages: {
      en: 'https://pixselli.com/compress-80kb',
      es: 'https://pixselli.com/es/compress-80kb',
      pt: 'https://pixselli.com/pt/compress-80kb',
      fr: 'https://pixselli.com/fr/compress-80kb',
      de: 'https://pixselli.com/de/compress-80kb',
      it: 'https://pixselli.com/it/compress-80kb',
      'x-default': 'https://pixselli.com/compress-80kb',
    },
  },
  openGraph: {
    title: 'Auf 80KB Komprimieren Online Kostenlos - Pixselli',
    description: 'Bringen Sie Ihr Bild online auf exakt 80KB mit privater Browser-Komprimierung.',
    url: 'https://pixselli.com/de/compress-80kb',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function GermanCompress80KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
