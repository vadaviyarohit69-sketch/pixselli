import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bild auf Zoll groesse kostenlos aendern - Benutzerdefiniertes DPI/PPI | Pixselli',
  description:
    'Aendern Sie Bilder online auf exakte Zollmasse mit benutzerdefiniertem DPI/PPI. Ideal fuer druckfertige Fotos und Dokumente.',
  keywords: ['bild auf zoll', 'dpi konverter', 'druckgroesse bild', 'zoll zu pixel'],
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
    canonical: 'https://pixselli.com/de/resize-to-inches',
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
    title: 'Bild auf Zoll groesse kostenlos aendern - Pixselli',
    description: 'Legen Sie exakte Zollmasse und DPI/PPI fuer druckfertige Bilder fest.',
    url: 'https://pixselli.com/de/resize-to-inches',
    siteName: 'Pixselli',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function GermanResizeToInchesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
