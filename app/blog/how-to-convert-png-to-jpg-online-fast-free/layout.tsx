import type { Metadata } from 'next';
import { getBlogPostMetadata } from '@/lib/blogMetadata';

export const metadata: Metadata = getBlogPostMetadata('how-to-convert-png-to-jpg-online-fast-free', 'en');

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
