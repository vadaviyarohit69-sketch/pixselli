import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimi per Moduli Online Gratis - Ottimizzatore per Upload | Pixselli',
  description:
    'Comprimi immagini per moduli online con dimensioni e qualita ottimizzate per rispettare i limiti di caricamento rapidamente.',
  keywords: ['comprimi per moduli', 'compressore immagini moduli', 'ottimizza immagine per moduli', 'riduci dimensione'],
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
    canonical: 'https://pixselli.com/it/compress-for-forms',
    languages: {
      en: 'https://pixselli.com/compress-for-forms',
      es: 'https://pixselli.com/es/compress-for-forms',
      pt: 'https://pixselli.com/pt/compress-for-forms',
      fr: 'https://pixselli.com/fr/compress-for-forms',
      de: 'https://pixselli.com/de/compress-for-forms',
      it: 'https://pixselli.com/it/compress-for-forms',
      'x-default': 'https://pixselli.com/compress-for-forms',
    },
  },
  openGraph: {
    title: 'Comprimi per Moduli Online Gratis - Pixselli',
    description: 'Prepara immagini per moduli e upload con dimensione ridotta.',
    url: 'https://pixselli.com/it/compress-for-forms',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprimi per Moduli Online Gratis - Pixselli',
    description: 'Ottimizza le immagini per upload di moduli e riduci la dimensione rapidamente.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianCompressForFormsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
