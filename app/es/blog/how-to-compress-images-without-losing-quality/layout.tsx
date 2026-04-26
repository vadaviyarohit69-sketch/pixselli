import type { Metadata } from 'next';
import { getBlogPostMetadata } from '@/lib/blogMetadata';

export const metadata: Metadata = getBlogPostMetadata('how-to-compress-images-without-losing-quality', 'es');

export default function SpanishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
