import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Riduci dimensione immagine online gratis - Comprimi JPG, PNG, WebP | PIXSELLI',
  description:
    'Riduci la dimensione delle immagini online gratis con uno strumento veloce e sicuro. Comprimi JPG, PNG e WebP mantenendo qualita.',
  keywords: ['riduci dimensione immagine', 'comprimi immagine online', 'compressore immagine', 'ottimizzare immagini'],
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
    canonical: 'https://pixselli.com/it/reduce-size',
    languages: {
      en: 'https://pixselli.com/reduce-size',
      es: 'https://pixselli.com/es/reduce-size',
      pt: 'https://pixselli.com/pt/reduce-size',
      fr: 'https://pixselli.com/fr/reduce-size',
      de: 'https://pixselli.com/de/reduce-size',
      it: 'https://pixselli.com/it/reduce-size',
      'x-default': 'https://pixselli.com/reduce-size',
    },
  },
  openGraph: {
    title: 'Riduci dimensione immagine online gratis - PIXSELLI',
    description:
      'Comprimi e riduci dimensione immagini mantenendo qualita. Strumento veloce, gratuito e privato per JPG, PNG e WebP.',
    url: 'https://pixselli.com/it/reduce-size',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function ItalianReduceSizeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
