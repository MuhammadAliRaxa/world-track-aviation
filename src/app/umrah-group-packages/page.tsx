import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { umrahService } from '@/services';
import { GroupUmrahPage } from '@/features/umrah/components/GroupUmrahPage';

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
  const [packagesRes, lookupsRes] = await Promise.allSettled([
    umrahService.getGroupUmrahPackages(),
    umrahService.getGroupUmrahLookups(),
  ]);

  const packages = packagesRes.status === 'fulfilled' ? packagesRes.value : [];
  const lookups = lookupsRes.status === 'fulfilled' ? lookupsRes.value : null;

  return <GroupUmrahPage initialPackages={packages} initialLookups={lookups} />;
}

