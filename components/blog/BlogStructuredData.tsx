import { getBlogPostBySlug } from '@/lib/blogPostsData';
import { buildBlogPostPath, getBlogPostLocalizedFields, type BlogLocale } from '@/lib/blogI18n';

type BlogFaqItem = {
  question: string;
  answer: string;
};

interface BlogStructuredDataProps {
  slug: string;
  locale: BlogLocale;
  faqs?: BlogFaqItem[];
}

export default function BlogStructuredData({ slug, locale, faqs = [] }: BlogStructuredDataProps) {
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return null;
  }

  const localized = getBlogPostLocalizedFields(slug, locale);
  const localizedTitle = localized?.title ?? post.title.en;
  const localizedExcerpt = localized?.excerpt ?? post.excerpt.en;
  const localizedAuthor = localized?.author ?? post.author.en;
  const pagePath = buildBlogPostPath(locale, slug);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: localizedTitle,
    description: localizedExcerpt,
    image: [`https://pixselli.com${post.coverImage}`],
    datePublished: `${post.date}T00:00:00.000Z`,
    dateModified: `${post.date}T00:00:00.000Z`,
    author: {
      '@type': 'Organization',
      name: localizedAuthor,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pixselli',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pixselli.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://pixselli.com${pagePath}`,
    },
    inLanguage: locale,
  };

  const faqJsonLd =
    faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </>
  );
}
