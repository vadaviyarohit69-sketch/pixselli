import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fur WhatsApp komprimieren Online Kostenlos - Bilder optimieren | Pixselli',
  description:
    'Komprimiere Bilder fur WhatsApp mit leichten Abmessungen und optimierter Qualitat. Schnelle und private Verarbeitung im Browser.',
  keywords: ['fur whatsapp komprimieren', 'whatsapp bild kompressor', 'bilder fur whatsapp optimieren', 'dateigrosse reduzieren'],
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
    canonical: 'https://pixselli.com/de/compress-for-whatsapp',
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
    title: 'Fur WhatsApp komprimieren Online Kostenlos - Pixselli',
    description: 'Reduziere die Bildgrosse fur WhatsApp schnell.',
    url: 'https://pixselli.com/de/compress-for-whatsapp',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fur WhatsApp komprimieren Online Kostenlos - Pixselli',
    description: 'Optimiere Bilder fur WhatsApp mit einer kleineren Dateigrosse.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanCompressForWhatsappLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
