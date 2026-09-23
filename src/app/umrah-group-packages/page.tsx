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
  const packages = await umrahService.getGroupUmrahPackages();
  return <GroupUmrahPage initialPackages={packages} />;
}
