import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimi per WhatsApp Online Gratis - Ottimizza le Immagini | Pixselli',
  description:
    'Comprimi immagini per WhatsApp con dimensioni leggere e qualita ottimizzata. Elaborazione rapida e privata nel browser.',
  keywords: ['comprimi per whatsapp', 'compressore immagini whatsapp', 'ottimizza immagini whatsapp', 'riduci dimensione'],
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
    canonical: 'https://pixselli.com/it/compress-for-whatsapp',
    languages: {
      en: 'https://pixselli.com/compress-for-whatsapp',
      es: 'https://pixselli.com/es/compress-for-whatsapp',
      pt: 'https://pixselli.com/pt/compress-for-whatsapp',
      fr: 'https://pixselli.com/fr/compress-for-whatsapp',
      de: 'https://pixselli.com/de/compress-for-whatsapp',
      it: 'https://pixselli.com/it/compress-for-whatsapp',
      'x-default': 'https://pixselli.com/compress-for-whatsapp',
    },
  },
  openGraph: {
    title: 'Comprimi per WhatsApp Online Gratis - Pixselli',
    description: 'Riduci la dimensione delle immagini per WhatsApp rapidamente.',
    url: 'https://pixselli.com/it/compress-for-whatsapp',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprimi per WhatsApp Online Gratis - Pixselli',
    description: 'Ottimizza le immagini per WhatsApp con un peso piu leggero.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianCompressForWhatsappLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
