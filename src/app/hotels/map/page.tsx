import type { Metadata } from 'next';
import { HotelsMapPage } from '@/features/hotels/components/HotelsMapPage';

export const metadata: Metadata = {
  title: 'Interactive Hotels Map - Makkah & Madinah | World Track Aviation',
  description:
    'Explore verified hotels around the Holy Kaaba and Masjid an-Nabawi with real walking distances, courtyard proximity, and instant rates.',
  alternates: {
    canonical: '/hotels/map',
  },
  openGraph: {
    title: 'Interactive Hotels Map - Makkah & Madinah | World Track Aviation',
    description:
      'Explore verified hotels around the Holy Kaaba and Masjid an-Nabawi with real walking distances.',
    url: '/hotels/map',
  },
};

export default function Page() {
  return <HotelsMapPage />;
}
