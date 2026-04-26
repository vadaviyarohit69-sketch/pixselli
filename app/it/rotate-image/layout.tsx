import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ruota immagine online gratis - Rotatore a qualsiasi angolo | Pixselli',
  description:
    'Ruota immagini online a qualsiasi angolo con anteprima istantanea. Strumento gratuito nel browser con output PNG, JPG e WebP.',
  keywords: ['ruota immagine', 'rotazione foto', 'rotatore immagine', 'angolo personalizzato', 'rotazione gratuita'],
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
    canonical: 'https://pixselli.com/it/rotate-image',
    languages: {
      en: 'https://pixselli.com/rotate-image',
      es: 'https://pixselli.com/es/rotate-image',
      pt: 'https://pixselli.com/pt/rotate-image',
      fr: 'https://pixselli.com/fr/rotate-image',
      de: 'https://pixselli.com/de/rotate-image',
      it: 'https://pixselli.com/it/rotate-image',
      'x-default': 'https://pixselli.com/rotate-image',
    },
  },
  openGraph: {
    title: 'Ruota immagine online gratis - Pixselli',
    description: 'Ruota foto a qualsiasi angolo con anteprima istantanea.',
    url: 'https://pixselli.com/it/rotate-image',
    siteName: 'Pixselli',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function ItalianRotateImageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
