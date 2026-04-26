import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore Bianco e Nero Gratis - Converti Immagini in Scala di Grigi | Pixselli',
  description:
    'Converti immagini in bianco e nero/scala di grigi online gratis. Veloce, sicuro e con elaborazione locale nel browser.',
  keywords: ['bianco e nero', 'scala di grigi', 'converti immagine', 'editor foto'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: 'https://pixselli.com/it/black-and-white',
    languages: {
      en: 'https://pixselli.com/black-and-white',
      es: 'https://pixselli.com/es/black-and-white',
      pt: 'https://pixselli.com/pt/black-and-white',
      fr: 'https://pixselli.com/fr/black-and-white',
      de: 'https://pixselli.com/de/black-and-white',
      it: 'https://pixselli.com/it/black-and-white',
      'x-default': 'https://pixselli.com/black-and-white',
    },
  },
  openGraph: {
    title: 'Convertitore Bianco e Nero Gratis Online',
    description: 'Converti immagini in bianco e nero in pochi secondi.',
    url: 'https://pixselli.com/it/black-and-white',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'it_IT',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
};

export default function ItalianBlackAndWhiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
