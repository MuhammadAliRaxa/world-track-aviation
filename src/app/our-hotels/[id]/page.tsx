import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { hotelService } from '@/services/hotel.service';
import { HotelDetailPage } from '@/features/hotels/components/HotelDetailPage';

import { JsonLdScript } from '@/lib/jsonld';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const hotels = await hotelService.getHotels();
  if (!Array.isArray(hotels)) return [];
  const params: { id: string }[] = [];
  hotels.forEach((h) => {
    params.push({ id: String(h.id) });
    const slug = (h as any).slug || (h as any)?.seo?.url_slug;
    if (slug && slug !== String(h.id)) {
      params.push({ id: String(slug) });
    }
  });
  return params;
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

  if (!rawHotel && !normalizedHotel) {
    return buildMetadata({
      pageKey: 'hotels',
      fallbackTitle: 'Hotel Not Found | World Track Aviation',
      fallbackDescription: 'The requested hotel could not be found.',
    });
  }

  const preferredSlug = rawHotel?.seo?.url_slug || (normalizedHotel as any)?.slug || id;

  return buildMetadata({
    itemSeo: rawHotel?.seo ?? null,
    pageKey: 'hotels',
    canonicalPath: rawHotel?.seo?.canonical_url || `https://worldtracktravel.com/our-hotels/${preferredSlug}/`,
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

  if (!hotel) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Hotels', path: '/our-hotels/' },
    { name: hotel?.name || 'Hotel Details', path: `/our-hotels/${id}/` },
  ];

  const adminSchema = (hotel as any)?.seo?.custom_schema_json || (hotel as any)?.custom_schema_json;

  return (
    <>
      {adminSchema && <JsonLdScript schema={adminSchema} />}
      <HotelDetailPage initialHotel={hotel} />
    </>
  );
}
