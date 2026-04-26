import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fuer E-Mail komprimieren Online Kostenlos - Anhang Optimierer | Pixselli',
  description:
    'Komprimieren Sie Bilder fuer E-Mail-Anhaenge mit leichten Abmessungen und ausgewogener Qualitaet.',
  keywords: ['fuer email komprimieren', 'anhang optimierer', 'email komprimierung', 'groesse reduzieren'],
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
    canonical: 'https://pixselli.com/de/compress-for-email',
    languages: {
      en: 'https://pixselli.com/compress-for-email',
      es: 'https://pixselli.com/es/compress-for-email',
      pt: 'https://pixselli.com/pt/compress-for-email',
      fr: 'https://pixselli.com/fr/compress-for-email',
      de: 'https://pixselli.com/de/compress-for-email',
      it: 'https://pixselli.com/it/compress-for-email',
      'x-default': 'https://pixselli.com/compress-for-email',
    },
  },
  openGraph: {
    title: 'Fuer E-Mail komprimieren Online Kostenlos - Pixselli',
    description: 'Optimieren Sie Bildanhaenge fuer E-Mails mit kleinerer Dateigroesse.',
    url: 'https://pixselli.com/de/compress-for-email',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fuer E-Mail komprimieren Online Kostenlos - Pixselli',
    description: 'Komprimieren Sie Bilder fuer E-Mail-Anhaenge schnell und einfach.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanCompressForEmailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
