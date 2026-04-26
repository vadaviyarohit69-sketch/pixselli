import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ritagliatore Immagini - Ritaglia Immagini Online Gratis',
  description:
    'Ritaglia immagini online gratis con rapporti personalizzati. Veloce, sicuro e con elaborazione locale nel browser.',
  keywords: [
    'ritagliatore immagini',
    'ritaglia immagine',
    'ritaglia foto online',
    'editor immagini online',
    'ritaglio immagine gratis',
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
    canonical: 'https://pixselli.com/it/image-cropper',
    languages: {
      en: 'https://pixselli.com/image-cropper',
      es: 'https://pixselli.com/es/image-cropper',
      pt: 'https://pixselli.com/pt/image-cropper',
      fr: 'https://pixselli.com/fr/image-cropper',
      de: 'https://pixselli.com/de/image-cropper',
      it: 'https://pixselli.com/it/image-cropper',
      'x-default': 'https://pixselli.com/image-cropper',
    },
  },
  openGraph: {
    title: 'Ritagliatore immagini gratis online',
    description: 'Ritaglia immagini con precisione e scaricale subito.',
    url: 'https://pixselli.com/it/image-cropper',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'it_IT',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ritagliatore Immagini - Strumento gratuito',
    description: 'Ritaglia immagini online con dimensioni personalizzate',
    creator: '@pixselli',
  },
};

export default function ItalianImageCropperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
