import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { CustomUmrahPage } from '@/features/umrah/components/CustomUmrahPage';

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    pageKey: 'custom-umrah-packages',
    canonicalPath: 'https://worldtracktravel.com/customize-umrah-package/',
    fallbackTitle: 'Customized Umrah Packages from Pakistan | World Track Aviation',
    fallbackDescription:
      'Build your own Umrah package: choose your dates, hotel, room type, and transport. Get a quote from World Track Aviation based on exactly what you need.',
  });
}

export default function Page() {
  return <CustomUmrahPage />;
}
