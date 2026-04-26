import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JPG zu HEIC Konverter Online Kostenlos - JPG Bilder umwandeln | Pixselli',
  description:
    'Konvertiere JPG-Bilder online in HEIC mit privater Browser-Verarbeitung und Qualitatskontrolle.',
  keywords: ['jpg zu heic', 'jpg in heic umwandeln', 'jpg heic konverter', 'heic konverter'],
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
    canonical: 'https://pixselli.com/de/jpg-to-heic',
    languages: {
      en: 'https://pixselli.com/jpg-to-heic',
      es: 'https://pixselli.com/es/jpg-to-heic',
      pt: 'https://pixselli.com/pt/jpg-to-heic',
      fr: 'https://pixselli.com/fr/jpg-to-heic',
      de: 'https://pixselli.com/de/jpg-to-heic',
      it: 'https://pixselli.com/it/jpg-to-heic',
      'x-default': 'https://pixselli.com/jpg-to-heic',
    },
  },
  openGraph: {
    title: 'JPG zu HEIC Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere JPG zu HEIC schnell mit Apple-kompatibler Ausgabe.',
    url: 'https://pixselli.com/de/jpg-to-heic',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG zu HEIC Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere JPG zu HEIC online schnell und sicher.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanJpgToHeicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
