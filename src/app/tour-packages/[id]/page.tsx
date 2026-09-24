import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { tourService } from '@/services';
import { TourDetailPage } from '@/features/holidays/components/TourDetailPage';

import { JsonLdScript, getTouristTripSchema, getBreadcrumbSchema } from '@/lib/jsonld';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const tours = await tourService.getTours();
  if (!Array.isArray(tours)) return [];
  return tours.map((t) => ({ id: String(t.id) }));
}

export const revalidate = 86400; // 24 hours ISR

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const tour = await tourService.getTourById(id);

  return buildMetadata({
    itemSeo: tour?.seo ?? null,
    pageKey: 'tours',
    canonicalPath: tour?.seo?.canonical_url || `https://worldtracktravel.com/tour-packages/${id}/`,
    fallbackTitle: tour
      ? `${tour.title} (${tour.duration}) | World Track Aviation`
      : 'Tour Details | World Track Aviation',
    fallbackDescription: tour
      ? (tour.seo?.meta_description ||
        `Discover ${tour.destination} with ${tour.title}. Includes ${tour.inclusions?.join(', ') || 'luxury hotels, transfers, and guided sightseeing'}.`)
      : 'Exclusive worldwide holiday packages and tours by World Track Aviation.',
  });
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const tour = await tourService.getTourById(id);

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Tour Packages', path: '/tour-packages/' },
    { name: tour?.title || 'Tour Details', path: `/tour-packages/${id}/` },
  ];

  return (
    <>
      {tour && (
        <JsonLdScript
          schema={[
            getTouristTripSchema({
              id,
              name: tour.title,
              description: tour.description,
              image: tour.image,
              price: tour.pricePKR || tour.priceUSD,
              url: `https://worldtracktravel.com/tour-packages/${id}/`,
              duration: tour.duration,
            }),
            getBreadcrumbSchema(breadcrumbs),
          ]}
        />
      )}
      <TourDetailPage initialTour={tour} />
    </>
  );
}
