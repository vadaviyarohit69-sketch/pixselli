import type { Metadata } from 'next';
import { getBlogPostBySlug } from '@/lib/blogPostsData';
import { buildBlogIndexPath, buildBlogPostPath, getBlogPostLocalizedFields, type BlogLocale } from '@/lib/blogI18n';

const SITE_URL = 'https://pixselli.com';

function buildLanguages(slug?: string) {
  const enPath = slug ? buildBlogPostPath('en', slug) : buildBlogIndexPath('en');

  return {
    en: enPath,
    es: slug ? buildBlogPostPath('es', slug) : buildBlogIndexPath('es'),
    pt: slug ? buildBlogPostPath('pt', slug) : buildBlogIndexPath('pt'),
    fr: slug ? buildBlogPostPath('fr', slug) : buildBlogIndexPath('fr'),
    de: slug ? buildBlogPostPath('de', slug) : buildBlogIndexPath('de'),
    it: slug ? buildBlogPostPath('it', slug) : buildBlogIndexPath('it'),
    'x-default': enPath,
  };
}

function getOgLocale(locale: BlogLocale): string {
  switch (locale) {
    case 'es':
      return 'es_ES';
    case 'pt':
      return 'pt_PT';
    case 'fr':
      return 'fr_FR';
    case 'de':
      return 'de_DE';
    case 'it':
      return 'it_IT';
    default:
      return 'en_US';
  }
}

export function getBlogIndexMetadata(locale: BlogLocale): Metadata {
  const title =
    locale === 'es'
      ? 'Blog de Pixselli | Guias de optimizacion y conversion de imagenes'
      : locale === 'pt'
        ? 'Blog da Pixselli | Guias de otimizacao e conversao de imagens'
        : locale === 'fr'
          ? "Blog Pixselli | Guides d'optimisation et de conversion d'images"
          : locale === 'de'
            ? 'Pixselli Blog | Bildoptimierung & Konvertierung: Guides'
            : locale === 'it'
              ? 'Blog Pixselli | Guide di ottimizzazione e conversione immagini'
              : 'Pixselli Blog | Image Optimization and Conversion Guides';

  const description =
    locale === 'es'
      ? 'Aprende optimizacion de imagenes, compresion y conversion de formatos con guias practicas de Pixselli.'
      : locale === 'pt'
        ? 'Aprenda otimizacao de imagens, compressao e conversao de formatos com guias praticos da Pixselli.'
        : locale === 'fr'
          ? "Apprenez l'optimisation d'images, la compression et la conversion de formats avec des guides pratiques d'Pixselli."
          : locale === 'de'
            ? 'Lerne Bildoptimierung, Komprimierung und Format-Konvertierung mit praxisnahen Guides von Pixselli.'
            : locale === 'it'
              ? "Impara ottimizzazione immagini, compressione e conversione di formati con guide pratiche di Pixselli."
              : 'Learn image optimization, compression, and format conversion with practical guides from Pixselli.';

  const canonicalPath = buildBlogIndexPath(locale);

  return {
    title,
    description,
    keywords:
      locale === 'es'
        ? [
            'blog de imagenes',
            'optimizacion de imagenes',
            'conversion de imagenes',
            'compresion de imagenes',
            'guias de formatos',
          ]
        : locale === 'pt'
          ? [
              'blog de imagens',
              'otimizacao de imagens',
              'conversao de imagens',
              'compressao de imagens',
              'guias de formatos',
            ]
          : locale === 'fr'
            ? [
                "blog d'images",
                "optimisation d'images",
                "conversion d'images",
                "compression d'images",
                'guides de formats',
              ]
            : locale === 'de'
              ? [
                  'bild blog',
                  'bildoptimierung',
                  'bild konvertierung',
                  'bildkompression',
                  'format guides',
                ]
              : locale === 'it'
                ? [
                    'blog immagini',
                    'ottimizzazione immagini',
                    'conversione immagini',
                    'compressione immagini',
                    'guide formati',
                  ]
                : [
            'image blog',
            'image optimization',
            'image conversion',
            'image compression',
            'image format guides',
          ],
    alternates: {
      canonical: canonicalPath,
      languages: buildLanguages(),
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${canonicalPath}`,
      type: 'website',
      locale: getOgLocale(locale),
      siteName: 'Pixselli',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function getBlogPostMetadata(slug: string, locale: BlogLocale): Metadata {
  const post = getBlogPostBySlug(slug);

  const localized = getBlogPostLocalizedFields(slug, locale);
  const localizedTitle = localized?.title ?? (post ? post.title.en : slug);
  const localizedExcerpt =
    localized?.excerpt ??
    (post
      ? post.excerpt.en
      : locale === 'es'
        ? 'Guia de imagenes de Pixselli.'
        : locale === 'pt'
          ? 'Guia de imagens da Pixselli.'
          : locale === 'fr'
            ? "Guide d'images par Pixselli."
            : locale === 'de'
              ? 'Bild-Guide von Pixselli.'
              : locale === 'it'
                ? 'Guida immagini di Pixselli.'
                : 'Image guide by Pixselli.');

  const localizedAuthor = localized?.author ?? (post ? post.author.en : 'Pixselli Team');

  const title =
    locale === 'es'
      ? `${localizedTitle} | Blog de Pixselli`
      : locale === 'pt'
        ? `${localizedTitle} | Blog da Pixselli`
        : locale === 'fr'
          ? `${localizedTitle} | Blog Pixselli`
          : locale === 'de'
            ? `${localizedTitle} | Pixselli Blog`
            : locale === 'it'
              ? `${localizedTitle} | Blog Pixselli`
              : `${localizedTitle} | Pixselli Blog`;
  const canonicalPath = buildBlogPostPath(locale, slug);

  return {
    title,
    description: localizedExcerpt,
    keywords: post
      ? [
          localized?.category ?? post.category.en,
          localizedTitle,
          locale === 'es' ? 'optimizacion de imagenes' : 'image optimization',
          locale === 'es' ? 'conversion de imagenes' : 'image conversion',
          locale === 'es' ? 'compresion de imagenes' : 'image compression',
        ]
      : undefined,
    alternates: {
      canonical: canonicalPath,
      languages: buildLanguages(slug),
    },
    openGraph: {
      title,
      description: localizedExcerpt,
      url: `${SITE_URL}${canonicalPath}`,
      type: 'article',
      locale: getOgLocale(locale),
      siteName: 'Pixselli',
      publishedTime: post ? `${post.date}T00:00:00.000Z` : undefined,
      authors: [localizedAuthor],
      images: post
        ? [
            {
              url: `${SITE_URL}${post.coverImage}`,
              alt: localizedTitle,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: localizedExcerpt,
      images: post ? [`${SITE_URL}${post.coverImage}`] : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
