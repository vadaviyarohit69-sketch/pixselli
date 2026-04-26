import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ridimensionatore Immagini - Ridimensiona Immagini Online Gratis',
  description:
    'Ridimensiona immagini online gratis. Modifica larghezza e altezza con elaborazione rapida e sicura nel browser.',
  keywords: [
    'ridimensionatore immagini',
    'ridimensiona immagine',
    'ridimensiona foto',
    'cambia dimensione immagine',
    'ridimensionatore online',
  ],
  authors: [{ name: 'Pixselli' }],
  creator: 'Pixselli',
  publisher: 'Pixselli',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://pixselli.com/it/image-resizer',
    languages: {
      en: 'https://pixselli.com/image-resizer',
      es: 'https://pixselli.com/es/image-resizer',
      pt: 'https://pixselli.com/pt/image-resizer',
      fr: 'https://pixselli.com/fr/image-resizer',
      de: 'https://pixselli.com/de/image-resizer',
      it: 'https://pixselli.com/it/image-resizer',
      'x-default': 'https://pixselli.com/image-resizer',
    },
  },
  openGraph: {
    title: 'Ridimensionatore immagini gratis online',
    description: 'Ridimensiona immagini a qualsiasi dimensione in modo rapido e sicuro.',
    url: 'https://pixselli.com/it/image-resizer',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'it_IT',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ridimensionatore Immagini - Strumento gratuito',
    description: 'Ridimensiona immagini online a qualsiasi dimensione',
    creator: '@pixselli',
  },
};

export default function ItalianImageResizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
