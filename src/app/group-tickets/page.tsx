import type { Metadata } from 'next';
import { buildMetadata, fetchPageSeo } from '@/lib/seo';
import { flightService } from '@/services';
import { GroupTicketsPage } from '@/features/flights/components/GroupTicketsPage';

export const revalidate = 0;

/**
 * Fallback chain for Group Tickets SEO:
 * 1. GET /api/seo/page/group-tickets (no item-level seo exists for this module)
 * 2. GET /api/seo/global as final fallback
 */
export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    pageKey: 'group-tickets',
    canonicalPath: 'https://worldtracktravel.com/group-tickets/',
    fallbackTitle: 'Group Flight Tickets from Pakistan | World Track Aviation',
    fallbackDescription:
      'Book group flight tickets for corporate teams, families, or Umrah groups traveling together. Wholesale fares and one point of contact for the whole booking.',
  });
}

export default async function Page() {
  const [paginatedData, dates, airlines, sectors, durations, pageSeo] = await Promise.all([
    flightService.getGroupTicketsPaginated(),
    flightService.getDepartureDates(),
    flightService.getAirlines(),
    flightService.getSectors(),
    flightService.getDurations(),
    fetchPageSeo('group-tickets'),
  ]);

  return (
    <GroupTicketsPage
      initialFlights={paginatedData.tickets}
      initialPagination={paginatedData.pagination}
      initialDates={dates}
      initialAirlines={airlines}
      initialSectors={sectors}
      initialDurations={durations}
      h1={pageSeo?.h1_heading || pageSeo?.seo?.h1_heading}
      heroIntro={pageSeo?.hero_intro || pageSeo?.seo?.hero_intro}
    />
  );
}
