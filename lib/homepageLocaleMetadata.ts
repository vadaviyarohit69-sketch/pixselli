import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n';

type HomeLocaleMeta = {
  title: string;
  description: string;
  ogLocale: string;
  alt: string;
};

const HOME_METADATA_BY_LOCALE: Record<Exclude<Locale, 'en'>, HomeLocaleMeta> = {
  es: {
    title: 'Pixselli - Herramientas de Imagen Online Gratis | Convertir, Comprimir y Editar',
    description:
      'Herramientas profesionales de imagen online gratis. Convierte, comprime, redimensiona y edita imagenes al instante. Rapido, seguro y sin registro.',
    ogLocale: 'es_ES',
    alt: 'Pixselli - Herramientas Profesionales de Imagen',
  },
  pt: {
    title: 'Pixselli - Ferramentas de Imagem Online Gratis | Converter, Comprimir e Editar',
    description:
      'Ferramentas profissionais de imagem online. Converta, comprima, redimensione e edite imagens com rapidez e seguranca.',
    ogLocale: 'pt_PT',
    alt: 'Pixselli - Ferramentas Profissionais de Imagem',
  },
  fr: {
    title: "Pixselli - Outils d'image en ligne gratuits | Convertir, Compresser et Editer",
    description:
      "Outils professionnels d'image en ligne. Convertissez, compressez, redimensionnez et editez rapidement.",
    ogLocale: 'fr_FR',
    alt: "Pixselli - Outils Professionnels d'Image",
  },
  de: {
    title: 'Pixselli - Kostenlose Online-Bildtools | Konvertieren, Komprimieren und Bearbeiten',
    description:
      'Professionelle Online-Bildtools. Bilder schnell und sicher konvertieren, komprimieren, skalieren und bearbeiten.',
    ogLocale: 'de_DE',
    alt: 'Pixselli - Professionelle Bildwerkzeuge',
  },
  it: {
    title: 'Pixselli - Strumenti immagine online gratuiti | Converti, Comprimi e Modifica',
    description:
      'Strumenti professionali online per convertire, comprimere, ridimensionare e modificare immagini in modo rapido e sicuro.',
    ogLocale: 'it_IT',
    alt: 'Pixselli - Strumenti professionali per immagini',
  },
};

export function getHomepageLocaleMetadata(locale: Exclude<Locale, 'en'>): Metadata {
  const localized = HOME_METADATA_BY_LOCALE[locale];

  return {
    title: localized.title,
    description: localized.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/',
        es: '/es',
        pt: '/pt',
        fr: '/fr',
        de: '/de',
        it: '/it',
        'x-default': '/',
      },
    },
    openGraph: {
      title: localized.title,
      description: localized.description,
      url: `https://pixselli.com/${locale}`,
      siteName: 'Pixselli',
      locale: localized.ogLocale,
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: localized.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: localized.title,
      description: localized.description,
      images: ['/og-image.png'],
    },
  };
}
