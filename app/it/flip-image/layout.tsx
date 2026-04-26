import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Capovolgi Immagine Online Gratis - Orizzontale e Verticale | Pixselli',
  description:
    'Capovolgi immagini in orizzontale o verticale online gratis. Veloce, sicuro e con elaborazione locale nel browser.',
  keywords: ['capovolgi immagine', 'specchia immagine', 'inverti immagine', 'capovolgimento orizzontale', 'capovolgimento verticale'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/it/flip-image',
    languages: {
      en: 'https://pixselli.com/flip-image',
      es: 'https://pixselli.com/es/flip-image',
      pt: 'https://pixselli.com/pt/flip-image',
      fr: 'https://pixselli.com/fr/flip-image',
      de: 'https://pixselli.com/de/flip-image',
      it: 'https://pixselli.com/it/flip-image',
      'x-default': 'https://pixselli.com/flip-image',
    },
  },
  openGraph: {
    title: 'Capovolgi Immagine Gratis Online',
    description: 'Capovolgi immagini in orizzontale o verticale in pochi secondi.',
    url: 'https://pixselli.com/it/flip-image',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'it_IT',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function ItalianFlipImageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
