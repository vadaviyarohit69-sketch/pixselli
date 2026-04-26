import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore JPG in WebP Online Gratis - Converti Immagini JPG | Pixselli',
  description:
    'Converti immagini JPG in WebP online con migliore compressione e elaborazione privata nel browser.',
  keywords: ['jpg in webp', 'converti jpg in webp', 'convertitore jpg webp', 'webp online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://pixselli.com/it/jpg-to-webp',
    languages: {
      en: 'https://pixselli.com/jpg-to-webp',
      es: 'https://pixselli.com/es/jpg-to-webp',
      pt: 'https://pixselli.com/pt/jpg-to-webp',
      fr: 'https://pixselli.com/fr/jpg-to-webp',
      de: 'https://pixselli.com/de/jpg-to-webp',
      it: 'https://pixselli.com/it/jpg-to-webp',
      'x-default': 'https://pixselli.com/jpg-to-webp',
    },
  },
};

export default function ItalianJpgToWebpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
