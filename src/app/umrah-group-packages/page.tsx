import type { Metadata } from 'next';
import { buildMetadata, fetchPageSeo } from '@/lib/seo';
import { umrahService } from '@/services';
import { GroupUmrahPage } from '@/features/umrah/components/GroupUmrahPage';

import { JsonLdScript, getBreadcrumbSchema } from '@/lib/jsonld';

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    pageKey: 'group-umrah-packages',
    canonicalPath: 'https://worldtracktravel.com/umrah-group-packages/',
    fallbackTitle: 'Group Umrah Packages from Pakistan | World Track Aviation',
    fallbackDescription:
      'Travel with family, friends, or your community on one Umrah trip. Group rates on hotels near the Haramain, shared transport, and one point of contact.',
  });
}

export default async function Page() {
  const [paginatedRes, lookupsRes, pageSeoRes] = await Promise.allSettled([
    umrahService.getGroupUmrahPackagesPaginated({ perPage: 12 }, 1),
    umrahService.getGroupUmrahLookups(),
    fetchPageSeo('group-umrah-packages'),
  ]);

  const packages = paginatedRes.status === 'fulfilled' ? paginatedRes.value.packages : [];
  const pagination = paginatedRes.status === 'fulfilled' ? paginatedRes.value.pagination : undefined;
  const lookups = lookupsRes.status === 'fulfilled' ? lookupsRes.value : null;
  const pageSeo = pageSeoRes.status === 'fulfilled' ? pageSeoRes.value : null;

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Group Umrah Packages', path: '/umrah-group-packages/' },
  ];

  return (
    <>
      <JsonLdScript schema={getBreadcrumbSchema(breadcrumbs)} />
      <GroupUmrahPage
        initialPackages={packages}
        initialPagination={pagination}
        initialLookups={lookups}
        h1={pageSeo?.h1_heading || pageSeo?.seo?.h1_heading}
        heroIntro={pageSeo?.hero_intro || pageSeo?.seo?.hero_intro}
      />
    </>
  );
}

