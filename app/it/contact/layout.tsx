import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://pixselli.com/it/contact',
    languages: {
      en: 'https://pixselli.com/contact',
      es: 'https://pixselli.com/es/contact',
      pt: 'https://pixselli.com/pt/contact',
      fr: 'https://pixselli.com/fr/contact',
      de: 'https://pixselli.com/de/contact',
      it: 'https://pixselli.com/it/contact',
      'x-default': 'https://pixselli.com/contact',
    },
  },
};

export default function ContactItLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
