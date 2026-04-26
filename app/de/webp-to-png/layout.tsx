import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WebP zu PNG Konverter Online Kostenlos - WebP Bilder umwandeln | Pixselli',
  description:
    'Konvertiere WebP-Bilder online zu PNG mit breiter Kompatibilitaet und privater Browser-Verarbeitung.',
  keywords: ['webp zu png', 'webp in png umwandeln', 'webp png konverter', 'png online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://pixselli.com/de/webp-to-png',
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

export default function GermanWebpToPngLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
