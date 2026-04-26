import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fur Formulare komprimieren Online Kostenlos - Upload Optimierer | Pixselli',
  description:
    'Komprimiere Bilder fur Online-Formulare mit optimierten Abmessungen und Qualitat, um Upload-Limits schnell einzuhalten.',
  keywords: ['fur formulare komprimieren', 'formular bild kompressor', 'bild fur formulare optimieren', 'dateigrosse reduzieren'],
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
    canonical: 'https://pixselli.com/de/compress-for-forms',
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
    title: 'Fur Formulare komprimieren Online Kostenlos - Pixselli',
    description: 'Bereite Bilder fur Formulare und Uploads mit kleinerer Dateigrosse vor.',
    url: 'https://pixselli.com/de/compress-for-forms',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fur Formulare komprimieren Online Kostenlos - Pixselli',
    description: 'Optimiere Bilder fur Formular-Uploads und reduziere die Dateigrosse schnell.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanCompressForFormsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
