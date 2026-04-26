import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JPG zu JPEG Konverter Online Kostenlos - JPG Dateien umwandeln | Pixselli',
  description:
    'Konvertiere JPG in JPEG online mit schneller Browser-Verarbeitung und hochwertiger Ausgabe.',
  keywords: ['jpg zu jpeg', 'jpg in jpeg umwandeln', 'jpg jpeg konverter', 'jpeg konverter'],
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
    canonical: 'https://pixselli.com/de/jpg-to-jpeg',
    languages: {
      en: 'https://pixselli.com/jpg-to-jpeg',
      es: 'https://pixselli.com/es/jpg-to-jpeg',
      pt: 'https://pixselli.com/pt/jpg-to-jpeg',
      fr: 'https://pixselli.com/fr/jpg-to-jpeg',
      de: 'https://pixselli.com/de/jpg-to-jpeg',
      it: 'https://pixselli.com/it/jpg-to-jpeg',
      'x-default': 'https://pixselli.com/jpg-to-jpeg',
    },
  },
  openGraph: {
    title: 'JPG zu JPEG Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere JPG-Dateien schnell und sicher zu JPEG.',
    url: 'https://pixselli.com/de/jpg-to-jpeg',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG zu JPEG Konverter Online Kostenlos - Pixselli',
    description: 'Konvertiere JPG zu JPEG online mit schneller privater Ausgabe.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function GermanJpgToJpegLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
