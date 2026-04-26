import type { Metadata } from 'next';
import { getBlogIndexMetadata } from '@/lib/blogMetadata';

export const metadata: Metadata = getBlogIndexMetadata('de');

export default function DeBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
