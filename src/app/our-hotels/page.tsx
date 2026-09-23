import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { hotelService } from '@/services';
import { HotelsPage } from '@/features/hotels/components/HotelsPage';

export const revalidate = 0;

/**
 * SEO fallback chain for Hotels listing:
 * 1. GET /api/seo/page/hotels
 * 2. GET /api/seo/global (final fallback)
 */
export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    pageKey: 'hotels',
    canonicalPath: 'https://worldtracktravel.com/our-hotels/',
    fallbackTitle: 'Book Hotels in Makkah & Madinah | World Track Aviation',
    fallbackDescription:
      'Book verified hotels near the Haramain in Makkah and Madinah with World Track Aviation. Filter by price, rating, and location for instant confirmation.',
  });
}

export default async function Page() {
  const [paginatedData, lookups, faqs] = await Promise.all([
    hotelService.getHotelsPaginated({ perPage: 12, nextPage: 1 }),
    hotelService.getHotelLookups(),
    hotelService.getHotelFaqs({ category: 'Hotel' }),
  ]);

  return (
    <HotelsPage
      initialHotels={paginatedData.hotels}
      initialPagination={paginatedData.pagination}
      initialLookups={lookups}
      initialFaqs={faqs}
    />
  );
}
