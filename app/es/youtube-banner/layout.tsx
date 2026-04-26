import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creador de banner de YouTube gratis - Arte de canal 2560x1440 | Pixselli',
  description:
    'Crea banners de canal de YouTube online gratis con dimensiones perfectas de 2560x1440 y guias de area segura. Rapido, seguro y en el navegador.',
  keywords: ['banner de youtube', 'arte de canal de youtube', 'tamano banner youtube', '2560x1440', 'area segura youtube'],
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
    canonical: 'https://pixselli.com/es/youtube-banner',
    languages: {
      en: 'https://pixselli.com/youtube-banner',
      es: 'https://pixselli.com/es/youtube-banner',
      pt: 'https://pixselli.com/pt/youtube-banner',
      fr: 'https://pixselli.com/fr/youtube-banner',
      de: 'https://pixselli.com/de/youtube-banner',
      it: 'https://pixselli.com/it/youtube-banner',
      'x-default': 'https://pixselli.com/youtube-banner',
    },
  },
  openGraph: {
    title: 'Creador de banner de YouTube gratis - Pixselli',
    description:
      'Crea arte de canal de YouTube en 2560x1440 con guias de area segura para escritorio, movil y TV. Gratis y privado.',
    url: 'https://pixselli.com/es/youtube-banner',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Creador de banner de YouTube de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creador de banner de YouTube gratis - Pixselli',
    description: 'Crea banners de YouTube 2560x1440 online al instante con guias de area segura.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishYoutubeBannerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
