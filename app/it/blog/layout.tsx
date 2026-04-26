import type { Metadata } from 'next';
import { getBlogIndexMetadata } from '@/lib/blogMetadata';

export const metadata: Metadata = getBlogIndexMetadata('it');

export default function ItBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
