import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JPG zu WebP Konverter Online Kostenlos - JPG Bilder umwandeln | Pixselli',
  description:
    'Konvertiere JPG-Bilder online zu WebP mit besserer Kompression und privater Browser-Verarbeitung.',
  keywords: ['jpg zu webp', 'jpg in webp umwandeln', 'jpg webp konverter', 'webp online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://pixselli.com/de/jpg-to-webp',
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

export default function GermanJpgToWebpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
