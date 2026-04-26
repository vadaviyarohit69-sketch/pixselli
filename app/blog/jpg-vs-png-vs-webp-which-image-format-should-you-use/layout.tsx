import type { Metadata } from 'next';
import { getBlogPostMetadata } from '@/lib/blogMetadata';

export const metadata: Metadata = getBlogPostMetadata('jpg-vs-png-vs-webp-which-image-format-should-you-use', 'en');

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
