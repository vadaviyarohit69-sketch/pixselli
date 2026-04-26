import type { Metadata } from 'next';
import { getBlogPostMetadata } from '@/lib/blogMetadata';

export const metadata: Metadata = getBlogPostMetadata('what-is-heic-format-complete-guide', 'en');

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
