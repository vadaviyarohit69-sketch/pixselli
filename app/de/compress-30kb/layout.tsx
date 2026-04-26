import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auf 30KB Komprimieren Online Kostenlos - Exaktes Tool | Pixselli',
  description:
    'Komprimieren Sie Bilder online auf exakt 30KB mit intelligenter Qualitaetsanpassung. Schnelle und private Verarbeitung fuer JPG, PNG und WebP.',
  keywords: ['30kb komprimieren', 'bildkomprimierung', 'dateigroesse reduzieren', 'online kompressor'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/de/compress-30kb',
    languages: {
      en: 'https://pixselli.com/compress-30kb',
      es: 'https://pixselli.com/es/compress-30kb',
      pt: 'https://pixselli.com/pt/compress-30kb',
      fr: 'https://pixselli.com/fr/compress-30kb',
      de: 'https://pixselli.com/de/compress-30kb',
      it: 'https://pixselli.com/it/compress-30kb',
      'x-default': 'https://pixselli.com/compress-30kb',
    },
  },
};

export default function GermanCompress30KbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
