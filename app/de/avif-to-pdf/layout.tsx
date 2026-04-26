import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://pixselli.com/de/avif-to-pdf',
    languages: {
      en: 'https://pixselli.com/avif-to-pdf',
      es: 'https://pixselli.com/es/avif-to-pdf',
      pt: 'https://pixselli.com/pt/avif-to-pdf',
      fr: 'https://pixselli.com/fr/avif-to-pdf',
      de: 'https://pixselli.com/de/avif-to-pdf',
      it: 'https://pixselli.com/it/avif-to-pdf',
      'x-default': 'https://pixselli.com/avif-to-pdf',
    },
  },
};

export default function AvifToPdfDeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
