import type { Metadata } from 'next';
import { buildMetadata, fetchPageSeo } from '@/lib/seo';
import { tourService } from '@/services';
import { ToursPage } from '@/features/holidays/components/ToursPage';

export const revalidate = 0;

/**
 * SEO fallback chain for Tours listing:
 * 1. GET /api/seo/page/tours
 * 2. GET /api/seo/global (final fallback)
 */
export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    pageKey: 'tours',
    canonicalPath: 'https://worldtracktravel.com/tour-packages/',
    fallbackTitle: 'International Tour Packages from Pakistan | World Track Aviation',
    fallbackDescription:
      'Book complete holiday packages with e-Visas, hotels, sightseeing, and airport transfers. Tours to Dubai and beyond, arranged by World Track Aviation.',
  });
}

export default async function Page() {
  const [paginatedData, destinations, pageSeo] = await Promise.all([
    tourService.getToursPaginated(),
    tourService.getDestinations(),
    fetchPageSeo('tours'),
  ]);

  return (
    <ToursPage
      initialTours={paginatedData.tours}
      initialPagination={paginatedData.pagination}
      initialDestinations={destinations}
      h1={pageSeo?.h1_heading || pageSeo?.seo?.h1_heading}
      heroIntro={pageSeo?.hero_intro || pageSeo?.seo?.hero_intro}
    />
  );
}
