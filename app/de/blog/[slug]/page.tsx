import LocalizedBlogPostPage from '@/components/blog/LocalizedBlogPostPage';
import type { BlogSlug } from '@/lib/blogSpanishArticles';

const BLOG_SLUGS: BlogSlug[] = [
  'how-to-compress-images-without-losing-quality',
  'how-to-convert-png-to-jpg-online-fast-free',
  'instagram-image-size-guide-posts-reels-stories-2025',
  'jpg-vs-png-vs-webp-which-image-format-should-you-use',
  'the-complete-beginners-guide-to-image-optimization',
  'what-is-heic-format-complete-guide',
  'why-image-compression-is-important-for-seo-and-page-speed',
];

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export default function DeBlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return <LocalizedBlogPostPage locale="de" slug={slug as BlogSlug} />;
}
