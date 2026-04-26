import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creatore Foto Passaporto - Crea Foto Online Gratis',
  description:
    'Crea foto passaporto online gratis. Regola dimensioni e sfondo con elaborazione rapida e sicura nel browser.',
  keywords: [
    'foto passaporto online',
    'creatore foto passaporto',
    'dimensione foto passaporto',
    'editor foto passaporto',
    'foto tessera online',
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
    canonical: 'https://pixselli.com/it/passport-photo-maker',
    languages: {
      en: 'https://pixselli.com/passport-photo-maker',
      es: 'https://pixselli.com/es/passport-photo-maker',
      pt: 'https://pixselli.com/pt/passport-photo-maker',
      fr: 'https://pixselli.com/fr/passport-photo-maker',
      de: 'https://pixselli.com/de/passport-photo-maker',
      it: 'https://pixselli.com/it/passport-photo-maker',
      'x-default': 'https://pixselli.com/passport-photo-maker',
    },
  },
  openGraph: {
    title: 'Creatore Foto Passaporto Gratis Online',
    description: 'Crea foto passaporto online con dimensioni ufficiali e sfondo personalizzato.',
    url: 'https://pixselli.com/it/passport-photo-maker',
    siteName: 'Pixselli',
    type: 'website',
    locale: 'it_IT',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foto Passaporto Online - Strumento Gratuito',
    description: 'Crea foto passaporto con dimensioni ufficiali',
    creator: '@pixselli',
  },
};

export default function ItalianPassportPhotoMakerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
