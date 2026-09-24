import type { Metadata } from 'next';
import { buildMetadata, fetchPageSeo } from '@/lib/seo';
import { transportService } from '@/services';
import { PrivateTransportPage } from '@/features/umrah/components/PrivateTransportPage';
import { JsonLdScript } from '@/lib/jsonld';

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    pageKey: 'transport',
    canonicalPath: 'https://worldtracktravel.com/private-transport/',
    fallbackTitle: 'Private Transport in Makkah & Madinah | World Track Aviation',
    fallbackDescription:
      'Book private transfers between Makkah, Madinah, and Jeddah airport with a fixed-rate fleet. No hidden charges, available around the clock.',
  });
}

export default async function Page() {
  const [listing, pageSeo] = await Promise.all([
    transportService.getTransportListing(),
    fetchPageSeo('transport'),
  ]);

  const transportSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Private Airport Transport — World Track Aviation',
    serviceType: 'Airport Transfer',
    areaServed: ['Jeddah', 'Makkah', 'Madinah'],
    provider: {
      '@type': 'TravelAgency',
      name: 'World Track Aviation',
      url: 'https://worldtracktravel.com',
    },
  };

  return (
    <>
      <JsonLdScript schema={transportSchema} />
      <PrivateTransportPage
        initialListing={listing}
        h1={pageSeo?.h1_heading || pageSeo?.seo?.h1_heading}
        heroIntro={pageSeo?.hero_intro || pageSeo?.seo?.hero_intro}
      />
    </>
  );
}
