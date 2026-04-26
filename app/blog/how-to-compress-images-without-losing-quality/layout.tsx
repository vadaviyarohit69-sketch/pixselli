import type { Metadata } from 'next';
import { getBlogPostMetadata } from '@/lib/blogMetadata';

export const metadata: Metadata = getBlogPostMetadata('how-to-compress-images-without-losing-quality', 'en');

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
