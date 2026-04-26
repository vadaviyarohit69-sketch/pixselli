import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auf 200KB Komprimieren Online Kostenlos - Exaktes Tool | Pixselli',
  description:
    'Komprimieren Sie Bilder online auf exakt 200KB mit intelligenter Qualitaetsanpassung. Schnelle und private Verarbeitung fuer JPG, PNG und WebP.',
  keywords: ['200kb komprimieren,bildkomprimierung,dateigroesse reduzieren,online kompressor'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/de/compress-200kb',
    languages: {
      en: 'https://pixselli.com/compress-200kb',
      es: 'https://pixselli.com/es/compress-200kb',
      pt: 'https://pixselli.com/pt/compress-200kb',
      fr: 'https://pixselli.com/fr/compress-200kb',
      de: 'https://pixselli.com/de/compress-200kb',
      it: 'https://pixselli.com/it/compress-200kb',
      'x-default': 'https://pixselli.com/compress-200kb',
    },
  },
  openGraph: {
    title: 'Auf 200KB Komprimieren Online Kostenlos - Pixselli',
    description: 'Bringen Sie Ihr Bild online auf exakt 200KB mit privater Browser-Komprimierung.',
    url: 'https://pixselli.com/de/compress-200kb',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function GermanCompress200KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
