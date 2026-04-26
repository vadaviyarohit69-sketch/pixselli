import type { Metadata } from 'next';
import { getBlogPostMetadata } from '@/lib/blogMetadata';

export const metadata: Metadata = getBlogPostMetadata('why-image-compression-is-important-for-seo-and-page-speed', 'es');

export default function SpanishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
