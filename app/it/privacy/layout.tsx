import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://pixselli.com/it/privacy',
    languages: {
      en: 'https://pixselli.com/privacy',
      es: 'https://pixselli.com/es/privacy',
      pt: 'https://pixselli.com/pt/privacy',
      fr: 'https://pixselli.com/fr/privacy',
      de: 'https://pixselli.com/de/privacy',
      it: 'https://pixselli.com/it/privacy',
      'x-default': 'https://pixselli.com/privacy',
    },
  },
};

export default function PrivacyItLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
