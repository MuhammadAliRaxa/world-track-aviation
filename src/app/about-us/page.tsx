import type { Metadata } from 'next';
import { buildMetadata, fetchPageSeo } from '@/lib/seo';
import { AboutPage } from '@/shared/components';
import { JsonLdScript } from '@/lib/jsonld';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await buildMetadata({
    pageKey: 'about-us',
    canonicalPath: 'https://worldtracktravel.com/about-us/',
    fallbackTitle: 'About Us - IATA Travel Agency | World Track Aviation',
    fallbackDescription:
      'World Track Aviation is an IATA-accredited travel agency helping Pakistani travelers with Umrah, visa processing, flights & hotel bookings since 2022.',
  });

  return {
    ...metadata,
    keywords: [
      'IATA-accredited travel agency in Pakistan',
      'World Track Aviation',
      'Umrah travel agency Islamabad',
      'visa processing Pakistan',
      'flight bookings Pakistan',
    ],
  };
}

export default async function Page() {
  const pageSeo = await fetchPageSeo('about-us');
  const adminSchema = pageSeo?.seo?.custom_schema_json || (pageSeo as any)?.custom_schema_json;

  return (
    <>
      {adminSchema && <JsonLdScript schema={adminSchema} />}
      <AboutPage />
    </>
  );
}
