import type { Metadata } from 'next';
import { buildMetadata, fetchPageSeo } from '@/lib/seo';
import { hotelService } from '@/services';
import { HotelsPage } from '@/features/hotels/components/HotelsPage';

import { JsonLdScript, getBreadcrumbSchema } from '@/lib/jsonld';

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

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const rawPage = resolvedSearchParams?.page;
  const pageParam = typeof rawPage === 'string' ? parseInt(rawPage, 10) : 1;
  const initialPage = !isNaN(pageParam) && pageParam > 0 ? pageParam : 1;

  const [paginatedData, lookups, faqs, pageSeo] = await Promise.all([
    hotelService.getHotelsPaginated({ perPage: 12, nextPage: initialPage }),
    hotelService.getHotelLookups(),
    hotelService.getHotelFaqs({ category: 'Hotel' }),
    fetchPageSeo('hotels'),
  ]);

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Hotels', path: '/our-hotels/' },
  ];

  const faqSchema = Array.isArray(faqs) && faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f: any) => ({
      '@type': 'Question',
      name: f.question || f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer || f.a,
      },
    })),
  } : null;

  return (
    <>
      <JsonLdScript schema={[getBreadcrumbSchema(breadcrumbs), ...(faqSchema ? [faqSchema] : [])]} />
      <HotelsPage
        initialHotels={paginatedData.hotels}
        initialPagination={paginatedData.pagination}
        initialLookups={lookups}
        initialFaqs={faqs}
        initialPage={initialPage}
        h1={pageSeo?.h1_heading || pageSeo?.seo?.h1_heading}
        heroIntro={pageSeo?.hero_intro || pageSeo?.seo?.hero_intro}
      />
    </>
  );
}
