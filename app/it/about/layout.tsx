import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://pixselli.com/it/about',
    languages: {
      en: 'https://pixselli.com/about',
      es: 'https://pixselli.com/es/about',
      pt: 'https://pixselli.com/pt/about',
      fr: 'https://pixselli.com/fr/about',
      de: 'https://pixselli.com/de/about',
      it: 'https://pixselli.com/it/about',
      'x-default': 'https://pixselli.com/about',
    },
  },
};

export default function AboutItLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
