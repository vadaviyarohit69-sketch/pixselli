import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprimir para WhatsApp online gratis - Optimizar para compartir | Pixselli',
  description:
    'Comprime imagenes para WhatsApp con dimensiones ligeras y calidad optimizada. Procesamiento rapido y privado en navegador.',
  keywords: ['comprimir para whatsapp', 'compresor de imagen whatsapp', 'optimizar imagen para whatsapp', 'reducir tamano'],
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
    canonical: 'https://pixselli.com/es/compress-for-whatsapp',
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
    title: 'Comprimir para WhatsApp online gratis - Pixselli',
    description: 'Reduce tamano de imagen para chats y estados de WhatsApp rapidamente.',
    url: 'https://pixselli.com/es/compress-for-whatsapp',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Herramienta para comprimir para WhatsApp de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprimir para WhatsApp online gratis - Pixselli',
    description: 'Optimiza imagenes para WhatsApp con mejor peso de envio.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishCompressForWhatsappLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
