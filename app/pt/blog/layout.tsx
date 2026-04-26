import type { Metadata } from 'next';
import { getBlogIndexMetadata } from '@/lib/blogMetadata';

export const metadata: Metadata = getBlogIndexMetadata('pt');

export default function PtBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
