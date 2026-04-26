import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://pixselli.com/de/pdf-to-png',
    languages: {
      en: 'https://pixselli.com/pdf-to-png',
      es: 'https://pixselli.com/es/pdf-to-png',
      pt: 'https://pixselli.com/pt/pdf-to-png',
      fr: 'https://pixselli.com/fr/pdf-to-png',
      de: 'https://pixselli.com/de/pdf-to-png',
      it: 'https://pixselli.com/it/pdf-to-png',
      'x-default': 'https://pixselli.com/pdf-to-png',
    },
  },
};

export default function PdfToPngDeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
