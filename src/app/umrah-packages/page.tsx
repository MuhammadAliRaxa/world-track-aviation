import type { Metadata } from 'next';
import { buildMetadata, fetchPageSeo } from '@/lib/seo';
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
  const [packagesRes, lookupsRes, pageSeoRes] = await Promise.allSettled([
    umrahService.getUmrahPackages(),
    umrahService.getUmrahPackageLookups(),
    fetchPageSeo('umrah-packages'),
  ]);

  const packages = packagesRes.status === 'fulfilled' ? packagesRes.value : [];
  const lookups = lookupsRes.status === 'fulfilled' ? lookupsRes.value : null;
  const pageSeo = pageSeoRes.status === 'fulfilled' ? pageSeoRes.value : null;

  return (
    <UmrahPackagesPage
      initialPackages={packages}
      initialLookups={lookups}
      h1={pageSeo?.h1_heading || pageSeo?.seo?.h1_heading}
      heroIntro={pageSeo?.hero_intro || pageSeo?.seo?.hero_intro}
    />
  );
}

