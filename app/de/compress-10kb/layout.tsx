import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auf 10KB Komprimieren Online Kostenlos - Exaktes Tool | Pixselli',
  description:
    'Komprimieren Sie Bilder online auf exakt 10KB mit intelligenter Qualitaetsanpassung. Schnelle und private Verarbeitung fuer JPG, PNG und WebP.',
  keywords: ['10kb komprimieren', 'bildkomprimierung', 'dateigroesse reduzieren', 'online kompressor'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/de/compress-10kb',
    languages: {
      en: 'https://pixselli.com/compress-10kb',
      es: 'https://pixselli.com/es/compress-10kb',
      pt: 'https://pixselli.com/pt/compress-10kb',
      fr: 'https://pixselli.com/fr/compress-10kb',
      de: 'https://pixselli.com/de/compress-10kb',
      it: 'https://pixselli.com/it/compress-10kb',
      'x-default': 'https://pixselli.com/compress-10kb',
    },
  },
};

export default function GermanCompress10KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
