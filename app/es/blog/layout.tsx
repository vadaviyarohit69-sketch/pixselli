import type { Metadata } from 'next';
import { getBlogIndexMetadata } from '@/lib/blogMetadata';

export const metadata: Metadata = getBlogIndexMetadata('es');

export default function SpanishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
