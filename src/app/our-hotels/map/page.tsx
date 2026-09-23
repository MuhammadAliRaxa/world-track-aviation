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

export default function Page() {
  return <HotelsMapPage />;
}
