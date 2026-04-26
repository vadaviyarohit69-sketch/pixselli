import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auf 20KB Komprimieren Online Kostenlos - Exaktes Tool | Pixselli',
  description:
    'Komprimieren Sie Bilder online auf exakt 20KB mit intelligenter Qualitaetsanpassung. Schnelle und private Verarbeitung fuer JPG, PNG und WebP.',
  keywords: ['20kb komprimieren', 'bildkomprimierung', 'dateigroesse reduzieren', 'online kompressor'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/de/compress-20kb',
    languages: {
      en: 'https://pixselli.com/compress-20kb',
      es: 'https://pixselli.com/es/compress-20kb',
      pt: 'https://pixselli.com/pt/compress-20kb',
      fr: 'https://pixselli.com/fr/compress-20kb',
      de: 'https://pixselli.com/de/compress-20kb',
      it: 'https://pixselli.com/it/compress-20kb',
      'x-default': 'https://pixselli.com/compress-20kb',
    },
  },
};

export default function GermanCompress20KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
