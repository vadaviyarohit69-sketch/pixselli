import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PNG zu WebP Konverter Online Kostenlos - PNG Bilder umwandeln | Pixselli',
  description:
    'Konvertiere PNG-Bilder online zu WebP mit moderner Kompression und privater Browser-Verarbeitung.',
  keywords: ['png zu webp', 'png in webp umwandeln', 'png webp konverter', 'webp online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://pixselli.com/de/png-to-webp',
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

export default function GermanPngToWebpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
