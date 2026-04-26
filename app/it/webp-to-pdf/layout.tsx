import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://pixselli.com/it/webp-to-pdf',
    languages: {
      en: 'https://pixselli.com/webp-to-pdf',
      es: 'https://pixselli.com/es/webp-to-pdf',
      pt: 'https://pixselli.com/pt/webp-to-pdf',
      fr: 'https://pixselli.com/fr/webp-to-pdf',
      de: 'https://pixselli.com/de/webp-to-pdf',
      it: 'https://pixselli.com/it/webp-to-pdf',
      'x-default': 'https://pixselli.com/webp-to-pdf',
    },
  },
};

export default function WebpToPdfItLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
