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

  const adminSchema = pageSeo?.seo?.custom_schema_json || (pageSeo as any)?.custom_schema_json;

  return (
    <>
      {adminSchema && <JsonLdScript schema={adminSchema} />}
      <PrivateTransportPage
        initialListing={listing}
        h1={pageSeo?.h1_heading || pageSeo?.seo?.h1_heading}
        heroIntro={pageSeo?.hero_intro || pageSeo?.seo?.hero_intro}
      />
    </>
  );
}
