import type { Metadata } from 'next';
import Home from '../page';
import { getHomepageLocaleMetadata } from '@/lib/homepageLocaleMetadata';

export const dynamic = 'force-static';

export function generateMetadata(): Metadata {
  return getHomepageLocaleMetadata('de');
}

export default function GermanHomePage() {
  return <Home />;
}
