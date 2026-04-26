import type { Metadata } from 'next';
import { getBlogIndexMetadata } from '@/lib/blogMetadata';

export const metadata: Metadata = getBlogIndexMetadata('en');

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
