import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aggiungi Data alla Foto - Timbro data e ora gratis online | Pixselli',
  description:
    'Aggiungi timbro data e ora alle immagini online gratis. Veloce, sicuro e con elaborazione locale nel browser.',
  keywords: ['aggiungi data foto', 'timbro data', 'timestamp foto', 'editor immagini'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/it/add-date',
    languages: {
      en: 'https://pixselli.com/add-date',
      es: 'https://pixselli.com/es/add-date',
      pt: 'https://pixselli.com/pt/add-date',
      fr: 'https://pixselli.com/fr/add-date',
      de: 'https://pixselli.com/de/add-date',
      it: 'https://pixselli.com/it/add-date',
      'x-default': 'https://pixselli.com/add-date',
    },
  },
  openGraph: {
    title: 'Aggiungi Data alla Foto Gratis Online',
    description: 'Aggiungi data e ora alle foto in pochi secondi.',
    url: 'https://pixselli.com/it/add-date',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function ItalianAddDateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
