import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creador de foto UPSC gratis - 35x45mm, 10-40KB | Pixselli',
  description:
    'Crea fotos para examen UPSC online con requisitos exactos: 35x45mm (413x531px), 300 DPI y tamano de 10-40KB. Rapido, seguro y en el navegador.',
  keywords: ['foto upsc', 'tamano foto upsc', '35x45mm', 'foto para formulario upsc', 'redimensionar foto upsc'],
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
    canonical: 'https://pixselli.com/es/upsc-photo',
    languages: {
      en: 'https://pixselli.com/upsc-photo',
      es: 'https://pixselli.com/es/upsc-photo',
      pt: 'https://pixselli.com/pt/upsc-photo',
      fr: 'https://pixselli.com/fr/upsc-photo',
      de: 'https://pixselli.com/de/upsc-photo',
      it: 'https://pixselli.com/it/upsc-photo',
      'x-default': 'https://pixselli.com/upsc-photo',
    },
  },
  openGraph: {
    title: 'Creador de foto UPSC gratis - Pixselli',
    description:
      'Genera fotos compatibles con UPSC en 35x45mm con objetivo de 10-40KB y 300 DPI en segundos.',
    url: 'https://pixselli.com/es/upsc-photo',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Creador de foto UPSC de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creador de foto UPSC gratis - Pixselli',
    description: 'Crea fotos UPSC 35x45mm con tamano y peso correctos online al instante.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishUpscPhotoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
