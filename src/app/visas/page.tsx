import type { Metadata } from 'next';
import { buildMetadata, fetchPageSeo } from '@/lib/seo';
import { visaService } from '@/services';
import { VisasPage } from '@/features/visas/components/VisasPage';

import { JsonLdScript, getBreadcrumbSchema } from '@/lib/jsonld';

export const revalidate = 0;

/**
 * SEO fallback chain for Visas listing:
 * 1. GET /api/seo/page/visas
 * 2. GET /api/seo/global (final fallback)
 */
export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    pageKey: 'visas',
    canonicalPath: 'https://worldtracktravel.com/visas/',
    fallbackTitle: 'Umrah & Visit Visa Services | World Track Aviation',
    fallbackDescription:
      'Apply for an Umrah visa or a visit visa to Dubai, Azerbaijan, Malaysia, and more. Document checks before submission and a 99.4% approval track record.',
  });
}

export default async function Page(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = props.searchParams ? await props.searchParams : {};
  const pageParam = parseInt(String(resolvedSearchParams?.page || '1'), 10) || 1;

  const [paginatedData, visaLookups, countries, pageSeo] = await Promise.all([
    visaService.getVisasPaginated({ nextPage: pageParam, perPage: 12 }),
    visaService.getVisaLookups(),
    visaService.getVisaCountries(),
    fetchPageSeo('visas'),
  ]);

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Visas', path: '/visas/' },
  ];

  return (
    <>
      <JsonLdScript schema={getBreadcrumbSchema(breadcrumbs)} />
      <VisasPage
        initialVisas={paginatedData.visas}
        initialPagination={paginatedData.pagination}
        initialVisaLookups={visaLookups}
        initialCountries={countries}
        h1={pageSeo?.h1_heading || pageSeo?.seo?.h1_heading}
        heroIntro={pageSeo?.hero_intro || pageSeo?.seo?.hero_intro}
      />
    </>
  );
}
