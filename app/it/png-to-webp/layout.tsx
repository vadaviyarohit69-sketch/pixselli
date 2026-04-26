import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore PNG in WebP Online Gratis - Converti Immagini PNG | Pixselli',
  description:
    'Converti immagini PNG in WebP online con compressione moderna e elaborazione privata nel browser.',
  keywords: ['png in webp', 'converti png in webp', 'convertitore png webp', 'webp online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://pixselli.com/it/png-to-webp',
    languages: {
      en: 'https://pixselli.com/png-to-webp',
      es: 'https://pixselli.com/es/png-to-webp',
      pt: 'https://pixselli.com/pt/png-to-webp',
      fr: 'https://pixselli.com/fr/png-to-webp',
      de: 'https://pixselli.com/de/png-to-webp',
      it: 'https://pixselli.com/it/png-to-webp',
      'x-default': 'https://pixselli.com/png-to-webp',
    },
  },
};

export default function ItalianPngToWebpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
