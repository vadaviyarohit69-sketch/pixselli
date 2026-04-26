import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://pixselli.com/de/heic-to-pdf',
    languages: {
      en: 'https://pixselli.com/heic-to-pdf',
      es: 'https://pixselli.com/es/heic-to-pdf',
      pt: 'https://pixselli.com/pt/heic-to-pdf',
      fr: 'https://pixselli.com/fr/heic-to-pdf',
      de: 'https://pixselli.com/de/heic-to-pdf',
      it: 'https://pixselli.com/it/heic-to-pdf',
      'x-default': 'https://pixselli.com/heic-to-pdf',
    },
  },
};

export default function HeicToPdfDeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
