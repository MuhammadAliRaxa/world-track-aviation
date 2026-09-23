import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { hotelService } from '@/services/hotel.service';
import { HotelDetailPage } from '@/features/hotels/components/HotelDetailPage';

interface Props {
  params: Promise<{ id: string }>;
}

/**
 * SEO fallback chain for hotel detail:
 * 1. Item-level seo from GET /hotel/{id}
 * 2. Page-level seo from GET /seo/page/hotels
 * 3. Global seo from GET /seo/global
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const [rawHotel, normalizedHotel] = await Promise.all([
    hotelService.getHotelDetail(id),
    hotelService.getHotelById(id),
  ]);

  return buildMetadata({
    itemSeo: rawHotel?.seo ?? null,
    pageKey: 'hotels',
    canonicalPath: rawHotel?.seo?.canonical_url || `https://worldtracktravel.com/our-hotels/${id}/`,
    fallbackTitle: normalizedHotel
      ? `${normalizedHotel.name} - ${normalizedHotel.location} | World Track Aviation`
      : 'Hotel Details | World Track Aviation',
    fallbackDescription: normalizedHotel
      ? (normalizedHotel.description ||
        `Book ${normalizedHotel.name} in ${normalizedHotel.location} at exclusive B2B & pilgrimage rates with World Track Aviation.`)
      : 'Find premium hotels and accommodations with World Track Aviation.',
  });
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const hotel = await hotelService.getHotelById(id);
  return <HotelDetailPage initialHotel={hotel} />;
}
