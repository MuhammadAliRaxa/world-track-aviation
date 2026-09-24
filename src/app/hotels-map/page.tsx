import type { Metadata } from 'next';
import { HotelsMapPage } from '@/features/hotels/components/HotelsMapPage';

export const metadata: Metadata = {
  title: 'Verified Hotels Near Haramain Map | World Track Aviation',
  description:
    'Explore our verified hotels near Masjid al-Haram and Al-Masjid an-Nabawi on an interactive map. Compare distance, price, and availability before booking.',
  keywords: [
    'Verified hotels near Haramain',
    'hotels near Haram map',
    'Makkah Madinah hotel map',
    'World Track Aviation',
  ],
  alternates: {
    canonical: 'https://worldtracktravel.com/hotels-map/',
  },
  openGraph: {
    title: 'Verified Hotels Near Haramain Map | World Track Aviation',
    description:
      'Explore our verified hotels near Masjid al-Haram and Al-Masjid an-Nabawi on an interactive map. Compare distance, price, and availability before booking.',
    url: 'https://worldtracktravel.com/hotels-map/',
    siteName: 'World Track Aviation',
    type: 'website',
  },
};

import { fetchPageSeo } from '@/lib/seo';

export default async function Page() {
  const pageSeo = await fetchPageSeo('hotels-map');

  return (
    <HotelsMapPage
      h1={pageSeo?.h1_heading || pageSeo?.seo?.h1_heading}
      heroIntro={pageSeo?.hero_intro || pageSeo?.seo?.hero_intro}
    />
  );
}
