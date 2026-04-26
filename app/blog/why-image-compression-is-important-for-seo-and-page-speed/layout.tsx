import type { Metadata } from 'next';
import { getBlogPostMetadata } from '@/lib/blogMetadata';

export const metadata: Metadata = getBlogPostMetadata('why-image-compression-is-important-for-seo-and-page-speed', 'en');

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
