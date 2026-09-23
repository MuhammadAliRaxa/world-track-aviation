import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { umrahService } from '@/services';
import { UmrahPackagesPage } from '@/features/umrah/components/UmrahPackagesPage';

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    pageKey: 'umrah-packages',
    canonicalPath: 'https://worldtracktravel.com/umrah-packages/',
    fallbackTitle: 'Umrah Packages from Pakistan | World Track Aviation',
    fallbackDescription:
      'Choose from family, VIP, or economy Umrah packages with hotels near the Haramain, visa processing, and private transfers. Fixed prices, no hidden costs.',
  });
}

export default async function Page() {
  const packages = await umrahService.getUmrahPackages();
  return <UmrahPackagesPage initialPackages={packages} />;
}
