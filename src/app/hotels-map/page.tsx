import type { Metadata } from 'next';
import { buildMetadata, fetchPageSeo } from '@/lib/seo';
import { HotelsMapPage } from '@/features/hotels/components/HotelsMapPage';

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    pageKey: 'hotels-map',
    canonicalPath: 'https://worldtracktravel.com/hotels-map/',
    fallbackTitle: 'Verified Hotels Near Haramain Map | World Track Aviation',
    fallbackDescription:
      'Explore our verified hotels near Masjid al-Haram and Al-Masjid an-Nabawi on an interactive map. Compare distance, price, and availability before booking.',
  });
}

export default async function Page() {
  const pageSeo = await fetchPageSeo('hotels-map');

  return (
    <HotelsMapPage
      h1={pageSeo?.h1_heading || pageSeo?.seo?.h1_heading}
      heroIntro={pageSeo?.hero_intro || pageSeo?.seo?.hero_intro}
    />
  );
}
