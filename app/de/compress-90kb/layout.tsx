import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auf 90KB Komprimieren Online Kostenlos - Exaktes Tool | Pixselli',
  description:
    'Komprimieren Sie Bilder online auf exakt 90KB mit intelligenter Qualitaetsanpassung. Schnelle und private Verarbeitung fuer JPG, PNG und WebP.',
  keywords: ['90kb komprimieren,bildkomprimierung,dateigroesse reduzieren,online kompressor'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/de/compress-90kb',
    languages: {
      en: 'https://pixselli.com/compress-90kb',
      es: 'https://pixselli.com/es/compress-90kb',
      pt: 'https://pixselli.com/pt/compress-90kb',
      fr: 'https://pixselli.com/fr/compress-90kb',
      de: 'https://pixselli.com/de/compress-90kb',
      it: 'https://pixselli.com/it/compress-90kb',
      'x-default': 'https://pixselli.com/compress-90kb',
    },
  },
  openGraph: {
    title: 'Auf 90KB Komprimieren Online Kostenlos - Pixselli',
    description: 'Bringen Sie Ihr Bild online auf exakt 90KB mit privater Browser-Komprimierung.',
    url: 'https://pixselli.com/de/compress-90kb',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function GermanCompress90KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
