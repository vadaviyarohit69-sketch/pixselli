import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bild auf MM groesse kostenlos aendern - Benutzerdefiniertes DPI/PPI | Pixselli',
  description:
    'Aendern Sie Bilder online auf exakte Millimetermasse mit benutzerdefiniertem DPI/PPI. Ideal fuer Passfotos, ID-Karten und metrischen Druck.',
  keywords: ['bild auf mm', 'passfoto mm', 'mm zu pixel', 'dpi bild', 'metrischer druck'],
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
    canonical: 'https://pixselli.com/de/resize-to-mm',
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
    title: 'Bild auf MM groesse kostenlos aendern - Pixselli',
    description: 'Legen Sie exakte Millimeter und DPI/PPI fuer druckfertige Bilder fest.',
    url: 'https://pixselli.com/de/resize-to-mm',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function GermanResizeToMmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
