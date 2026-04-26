import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ridimensiona immagine in mm gratis - DPI/PPI personalizzato | Pixselli',
  description:
    'Ridimensiona immagini a millimetri esatti online con impostazioni DPI/PPI personalizzate. Perfetto per foto passaporto, carte ID e stampa metrica.',
  keywords: ['ridimensiona in mm', 'foto passaporto mm', 'mm a pixel', 'dpi immagine', 'stampa metrica'],
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
    canonical: 'https://pixselli.com/it/resize-to-mm',
    languages: {
      en: 'https://pixselli.com/resize-to-mm',
      es: 'https://pixselli.com/es/resize-to-mm',
      pt: 'https://pixselli.com/pt/resize-to-mm',
      fr: 'https://pixselli.com/fr/resize-to-mm',
      de: 'https://pixselli.com/de/resize-to-mm',
      it: 'https://pixselli.com/it/resize-to-mm',
      'x-default': 'https://pixselli.com/resize-to-mm',
    },
  },
  openGraph: {
    title: 'Ridimensiona immagine in mm gratis - Pixselli',
    description: 'Imposta millimetri esatti e DPI/PPI per immagini pronte per la stampa.',
    url: 'https://pixselli.com/it/resize-to-mm',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function ItalianResizeToMmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
