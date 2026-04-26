import { blogPostsData } from '@/lib/blogPostsData';
import { buildBlogIndexPath, buildBlogPostPath, getBlogPostLocalizedFields, type BlogLocale } from '@/lib/blogI18n';

interface BlogIndexStructuredDataProps {
  locale: BlogLocale;
}

export default function BlogIndexStructuredData({ locale }: BlogIndexStructuredDataProps) {
  const pagePath = buildBlogIndexPath(locale);

  const title =
    locale === 'es'
      ? 'Blog de Pixselli - Guias de optimizacion de imagenes'
      : locale === 'pt'
        ? 'Blog da Pixselli - Guias de otimizacao de imagens'
        : locale === 'fr'
          ? "Blog Pixselli - Guides d'optimisation d'images"
          : locale === 'de'
            ? 'Pixselli Blog - Leitfaeden zur Bildoptimierung'
            : locale === 'it'
              ? "Blog Pixselli - Guide all'ottimizzazione delle immagini"
              : 'Pixselli Blog - Image Optimization Guides';

  const description =
    locale === 'es'
      ? 'Explora guias practicas de compresion, conversion y formatos de imagen.'
      : locale === 'pt'
        ? 'Explore guias praticos de compressao, conversao e formatos de imagem.'
        : locale === 'fr'
          ? 'Explorez des guides pratiques sur la compression, la conversion et les formats d\'image.'
          : locale === 'de'
            ? 'Entdecke praxisnahe Guides zu Bildkompression, Konvertierung und Formaten.'
            : locale === 'it'
              ? 'Esplora guide pratiche su compressione, conversione e formati immagine.'
              : 'Explore practical guides for image compression, conversion, and formats.';

  const sortedPosts = [...blogPostsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const itemListElement = sortedPosts.map((post, index) => {
    const postPath = buildBlogPostPath(locale, post.slug);

    return {
      '@type': 'ListItem',
      position: index + 1,
      url: `https://pixselli.com${postPath}`,
      name: getBlogPostLocalizedFields(post.slug, locale)?.title ?? post.title.en,
    };
  });

  const collectionPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: `https://pixselli.com${pagePath}`,
    inLanguage: locale,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Pixselli',
      url: 'https://pixselli.com',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
    />
  );
}
