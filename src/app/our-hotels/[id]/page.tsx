import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { hotelService } from '@/services/hotel.service';
import { HotelDetailPage } from '@/features/hotels/components/HotelDetailPage';

import { JsonLdScript, getHotelSchema, getBreadcrumbSchema } from '@/lib/jsonld';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const hotels = await hotelService.getHotels();
  if (!Array.isArray(hotels)) return [];
  return hotels.map((h) => ({ id: String(h.id) }));
}

export const revalidate = 86400; // 24 hours ISR

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

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Hotels', path: '/our-hotels/' },
    { name: hotel?.name || 'Hotel Details', path: `/our-hotels/${id}/` },
  ];

  return (
    <>
      {hotel && (
        <JsonLdScript
          schema={[
            getHotelSchema({
              id,
              name: hotel.name,
              description: hotel.description,
              image: hotel.image || hotel.gallery?.[0],
              city: hotel.location,
              address: hotel.address || hotel.location,
              stars: hotel.stars,
              price: hotel.price,
              lat: hotel.lat,
              lng: hotel.lng,
            }),
            getBreadcrumbSchema(breadcrumbs),
          ]}
        />
      )}
      <HotelDetailPage initialHotel={hotel} />
    </>
  );
}
