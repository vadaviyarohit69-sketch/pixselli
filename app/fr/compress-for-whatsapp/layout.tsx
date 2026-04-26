import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compresser pour WhatsApp en Ligne Gratuit - Optimiser les Images | Pixselli',
  description:
    'Compressez des images pour WhatsApp avec des dimensions legeres et une qualite optimisee. Traitement rapide et prive dans le navigateur.',
  keywords: ['compresser pour whatsapp', 'compresseur image whatsapp', 'optimiser image whatsapp', 'reduire la taille'],
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
    canonical: 'https://pixselli.com/fr/compress-for-whatsapp',
    languages: {
      en: 'https://pixselli.com/compress-for-whatsapp',
      es: 'https://pixselli.com/es/compress-for-whatsapp',
      pt: 'https://pixselli.com/pt/compress-for-whatsapp',
      fr: 'https://pixselli.com/fr/compress-for-whatsapp',
      de: 'https://pixselli.com/de/compress-for-whatsapp',
      it: 'https://pixselli.com/it/compress-for-whatsapp',
      'x-default': 'https://pixselli.com/compress-for-whatsapp',
    },
  },
  openGraph: {
    title: 'Compresser pour WhatsApp en Ligne Gratuit - Pixselli',
    description: 'Reduisez la taille des images pour WhatsApp rapidement.',
    url: 'https://pixselli.com/fr/compress-for-whatsapp',
    siteName: 'Pixselli',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://pixselli.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compresser pour WhatsApp en Ligne Gratuit - Pixselli',
    description: 'Optimisez les images pour WhatsApp avec une taille adaptee.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function FrenchCompressForWhatsappLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
