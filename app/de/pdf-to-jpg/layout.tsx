import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://pixselli.com/de/pdf-to-jpg',
    languages: {
      en: 'https://pixselli.com/pdf-to-jpg',
      es: 'https://pixselli.com/es/pdf-to-jpg',
      pt: 'https://pixselli.com/pt/pdf-to-jpg',
      fr: 'https://pixselli.com/fr/pdf-to-jpg',
      de: 'https://pixselli.com/de/pdf-to-jpg',
      it: 'https://pixselli.com/it/pdf-to-jpg',
      'x-default': 'https://pixselli.com/pdf-to-jpg',
    },
  },
};

export default function PdfToJpgDeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
