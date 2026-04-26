import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertitore WebP in HEIC Online Gratis - Converti Immagini WebP | Pixselli',
  description:
    'Converti immagini WebP in HEIC online con elaborazione privata nel browser e controllo qualita.',
  keywords: ['webp in heic', 'converti webp in heic', 'convertitore webp heic', 'convertitore heic'],
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
    canonical: 'https://pixselli.com/it/webp-to-heic',
    languages: {
      en: 'https://pixselli.com/webp-to-heic',
      es: 'https://pixselli.com/es/webp-to-heic',
      pt: 'https://pixselli.com/pt/webp-to-heic',
      fr: 'https://pixselli.com/fr/webp-to-heic',
      de: 'https://pixselli.com/de/webp-to-heic',
      it: 'https://pixselli.com/it/webp-to-heic',
      'x-default': 'https://pixselli.com/webp-to-heic',
    },
  },
  openGraph: {
    title: 'Convertitore WebP in HEIC Online Gratis - Pixselli',
    description: 'Converti WebP in HEIC rapidamente con output affidabile.',
    url: 'https://pixselli.com/it/webp-to-heic',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertitore WebP in HEIC Online Gratis - Pixselli',
    description: 'Converti WebP in HEIC online in modo rapido e sicuro.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function ItalianWebpToHeicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
