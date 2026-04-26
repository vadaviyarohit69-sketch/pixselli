import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://pixselli.com/pt/disclaimer',
    languages: {
      en: 'https://pixselli.com/disclaimer',
      es: 'https://pixselli.com/es/disclaimer',
      pt: 'https://pixselli.com/pt/disclaimer',
      fr: 'https://pixselli.com/fr/disclaimer',
      de: 'https://pixselli.com/de/disclaimer',
      it: 'https://pixselli.com/it/disclaimer',
      'x-default': 'https://pixselli.com/disclaimer',
    },
  },
};

export default function DisclaimerPtLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
