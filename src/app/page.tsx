import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { umrahService } from '@/services/umrah.service';
import { hotelService } from '@/services/hotel.service';
import { visaService } from '@/services/visa.service';
import { HomePage } from '@/shared/components/HomePage';

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    pageKey: 'home',
    canonicalPath: 'https://worldtracktravel.com/',
    fallbackTitle: 'Travel Agency in Islamabad - Umrah, Visas & Flights | World Track Aviation',
    fallbackDescription:
      'World Track Aviation is an IATA-accredited travel agency in Islamabad offering Umrah packages, visa assistance, flight & hotel bookings across Pakistan.',
  });
}

/**
 * Home page — Server Component.
 * Fetches lookups and hotels on the server (SSR), while all other catalog
 * sections (Umrah packages, Visas, Tours, Blogs, Team, Testimonials) load
 * on the client side and appear in the browser's Network tab.
 */
export default async function Page() {
  const [hotels, hotelLookups, visaLookups, groupUmrahLookups] = await Promise.allSettled([
    hotelService.getHotels(),
    hotelService.getHotelLookups(),
    visaService.getVisaLookups(),
    umrahService.getGroupUmrahLookups(),
  ]);

  return (
    <HomePage
      initialHotels={hotels.status === 'fulfilled' ? hotels.value : []}
      initialHotelLookups={hotelLookups.status === 'fulfilled' ? hotelLookups.value : null}
      initialVisaLookups={visaLookups.status === 'fulfilled' ? visaLookups.value : null}
      initialGroupUmrahLookups={groupUmrahLookups.status === 'fulfilled' ? groupUmrahLookups.value : null}
      initialUmrahPackages={[]}
      initialVisas={[]}
      initialTours={[]}
      initialBlogs={[]}
      initialTeam={null}
      initialReviews={[]}
    />
  );
}
