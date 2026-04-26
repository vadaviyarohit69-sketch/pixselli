import type { Metadata } from 'next';
import { getBlogPostMetadata } from '@/lib/blogMetadata';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const { slug } = params;
  return getBlogPostMetadata(slug, 'it');
}

export default function ItBlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
