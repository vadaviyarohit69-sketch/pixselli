import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://pixselli.com/fr/terms',
    languages: {
      en: 'https://pixselli.com/terms',
      es: 'https://pixselli.com/es/terms',
      pt: 'https://pixselli.com/pt/terms',
      fr: 'https://pixselli.com/fr/terms',
      de: 'https://pixselli.com/de/terms',
      it: 'https://pixselli.com/it/terms',
      'x-default': 'https://pixselli.com/terms',
    },
  },
};

export default function TermsFrLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
