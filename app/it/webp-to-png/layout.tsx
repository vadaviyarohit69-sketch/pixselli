import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore WebP in PNG Online Gratis - Converti Immagini WebP | Pixselli',
  description:
    'Converti immagini WebP in PNG online con ampia compatibilita e elaborazione privata nel browser.',
  keywords: ['webp in png', 'converti webp in png', 'convertitore webp png', 'png online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://pixselli.com/it/webp-to-png',
    languages: {
      en: 'https://pixselli.com/webp-to-png',
      es: 'https://pixselli.com/es/webp-to-png',
      pt: 'https://pixselli.com/pt/webp-to-png',
      fr: 'https://pixselli.com/fr/webp-to-png',
      de: 'https://pixselli.com/de/webp-to-png',
      it: 'https://pixselli.com/it/webp-to-png',
      'x-default': 'https://pixselli.com/webp-to-png',
    },
  },
};

export default function ItalianWebpToPngLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
