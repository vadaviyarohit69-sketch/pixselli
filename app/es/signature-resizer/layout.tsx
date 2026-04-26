import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redimensionar firma gratis online - Firma para documentos | Pixselli',
  description:
    'Redimensiona firmas online con dimensiones personalizadas y soporte de fondo transparente. Ideal para formularios, firmas de correo y documentos legales.',
  keywords: ['redimensionar firma', 'tamano de firma', 'firma para documentos', 'firma digital imagen', 'firma para correo'],
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
    canonical: 'https://pixselli.com/es/signature-resizer',
    languages: {
      en: 'https://pixselli.com/signature-resizer',
      es: 'https://pixselli.com/es/signature-resizer',
      pt: 'https://pixselli.com/pt/signature-resizer',
      fr: 'https://pixselli.com/fr/signature-resizer',
      de: 'https://pixselli.com/de/signature-resizer',
      it: 'https://pixselli.com/it/signature-resizer',
      'x-default': 'https://pixselli.com/signature-resizer',
    },
  },
  openGraph: {
    title: 'Redimensionar firma gratis online - Pixselli',
    description:
      'Crea firmas listas para documentos con ancho/alto personalizado, fondo transparente y exportacion en varios formatos.',
    url: 'https://pixselli.com/es/signature-resizer',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Redimensionador de firma de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Redimensionar firma gratis online - Pixselli',
    description: 'Redimensiona firmas para formularios y documentos al instante con soporte de fondo transparente.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishSignatureResizerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
