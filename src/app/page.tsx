import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { umrahService } from '@/services/umrah.service';
import { hotelService } from '@/services/hotel.service';
import { visaService } from '@/services/visa.service';
import { tourService } from '@/services/tour.service';
import { blogService } from '@/services/blog.service';
import { contentService } from '@/services/content.service';
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
 * Fetches all homepage section data in parallel on the server (SSR/ISR),
 * ensuring instantaneous page render and full search engine indexing.
 */
export default async function Page() {
  const [umrahPackages, hotels, visas, tours, blogs, team, testimonials, hotelLookups, visaLookups, groupUmrahLookups] = await Promise.allSettled([
    umrahService.getUmrahPackages(),
    hotelService.getHotels(),
    visaService.getVisas(),
    tourService.getTours(),
    blogService.getBlogs(),
    contentService.getTeam(),
    contentService.getTestimonials(),
    hotelService.getHotelLookups(),
    visaService.getVisaLookups(),
    umrahService.getGroupUmrahLookups(),
  ]);

  return (
    <HomePage
      initialUmrahPackages={umrahPackages.status === 'fulfilled' ? umrahPackages.value : []}
      initialHotels={hotels.status === 'fulfilled' ? hotels.value : []}
      initialVisas={visas.status === 'fulfilled' ? visas.value : []}
      initialTours={tours.status === 'fulfilled' ? tours.value : []}
      initialBlogs={blogs.status === 'fulfilled' ? blogs.value : []}
      initialTeam={team.status === 'fulfilled' ? team.value : null}
      initialReviews={testimonials.status === 'fulfilled' ? testimonials.value : []}
      initialHotelLookups={hotelLookups.status === 'fulfilled' ? hotelLookups.value : null}
      initialVisaLookups={visaLookups.status === 'fulfilled' ? visaLookups.value : null}
      initialGroupUmrahLookups={groupUmrahLookups.status === 'fulfilled' ? groupUmrahLookups.value : null}
    />
  );
}
