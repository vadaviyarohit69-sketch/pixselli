import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://pixselli.com/fr/pdf-to-webp',
    languages: {
      en: 'https://pixselli.com/pdf-to-webp',
      es: 'https://pixselli.com/es/pdf-to-webp',
      pt: 'https://pixselli.com/pt/pdf-to-webp',
      fr: 'https://pixselli.com/fr/pdf-to-webp',
      de: 'https://pixselli.com/de/pdf-to-webp',
      it: 'https://pixselli.com/it/pdf-to-webp',
      'x-default': 'https://pixselli.com/pdf-to-webp',
    },
  },
};

export default function PdfToWebpFrLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
