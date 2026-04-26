import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aggiungi Filigrana - Strumento Online Gratis | Pixselli',
  description:
    'Aggiungi filigrane di testo alle tue foto online gratis. Veloce, sicuro e con elaborazione locale nel browser.',
  keywords: ['aggiungi filigrana', 'filigrana foto', 'editor immagini', 'strumento online'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/it/add-watermark',
    languages: {
      en: 'https://pixselli.com/add-watermark',
      es: 'https://pixselli.com/es/add-watermark',
      pt: 'https://pixselli.com/pt/add-watermark',
      fr: 'https://pixselli.com/fr/add-watermark',
      de: 'https://pixselli.com/de/add-watermark',
      it: 'https://pixselli.com/it/add-watermark',
      'x-default': 'https://pixselli.com/add-watermark',
    },
  },
  openGraph: {
    title: 'Aggiungi Filigrana Gratis Online',
    description: 'Aggiungi filigrane di testo alle immagini in pochi secondi.',
    url: 'https://pixselli.com/it/add-watermark',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function ItalianAddWatermarkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
