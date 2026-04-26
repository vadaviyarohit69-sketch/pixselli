import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ridimensiona immagine in pollici gratis - DPI/PPI personalizzato | Pixselli',
  description:
    'Ridimensiona immagini a pollici esatti online con impostazioni DPI/PPI personalizzate. Perfetto per foto e documenti pronti per la stampa.',
  keywords: ['ridimensiona in pollici', 'dpi immagine', 'dimensione stampa foto', 'pollici a pixel'],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://pixselli.com/it/resize-to-inches',
    languages: {
      en: 'https://pixselli.com/resize-to-inches',
      es: 'https://pixselli.com/es/resize-to-inches',
      pt: 'https://pixselli.com/pt/resize-to-inches',
      fr: 'https://pixselli.com/fr/resize-to-inches',
      de: 'https://pixselli.com/de/resize-to-inches',
      it: 'https://pixselli.com/it/resize-to-inches',
      'x-default': 'https://pixselli.com/resize-to-inches',
    },
  },
  openGraph: {
    title: 'Ridimensiona immagine in pollici gratis - Pixselli',
    description: 'Imposta pollici esatti e DPI/PPI per immagini pronte per la stampa.',
    url: 'https://pixselli.com/it/resize-to-inches',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function ItalianResizeToInchesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
