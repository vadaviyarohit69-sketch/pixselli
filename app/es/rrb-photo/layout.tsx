import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creador de foto RRB gratis - 3.5x4.5cm, 20-40KB | Pixselli',
  description:
    'Crea fotos para examen RRB online con tamano exacto de 3.5x4.5cm y requisito de 20-40KB. Ideal para NTPC, Group D, JE, ALP y otros formularios RRB.',
  keywords: ['foto rrb', 'tamano foto rrb', 'foto 3.5x4.5cm', 'foto examen ferrocarril', 'redimensionar imagen rrb'],
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
    canonical: 'https://pixselli.com/es/rrb-photo',
    languages: {
      en: 'https://pixselli.com/rrb-photo',
      es: 'https://pixselli.com/es/rrb-photo',
      pt: 'https://pixselli.com/pt/rrb-photo',
      fr: 'https://pixselli.com/fr/rrb-photo',
      de: 'https://pixselli.com/de/rrb-photo',
      it: 'https://pixselli.com/it/rrb-photo',
      'x-default': 'https://pixselli.com/rrb-photo',
    },
  },
  openGraph: {
    title: 'Creador de foto RRB gratis - Pixselli',
    description:
      'Genera fotos compatibles con RRB en 3.5x4.5cm con objetivo de 20-40KB en segundos. Herramienta privada y gratuita.',
    url: 'https://pixselli.com/es/rrb-photo',
    siteName: 'Pixselli',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://pixselli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Creador de foto RRB de Pixselli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creador de foto RRB gratis - Pixselli',
    description: 'Crea fotos de examen RRB con tamano 3.5x4.5cm y limite 20-40KB online.',
    creator: '@pixselli',
    images: ['https://pixselli.com/og-image.jpg'],
  },
};

export default function SpanishRrbPhotoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
