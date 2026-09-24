import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { AboutPage } from '@/shared/components';

import { JsonLdScript, getBreadcrumbSchema } from '@/lib/jsonld';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    pageKey: 'about-us',
    canonicalPath: 'https://worldtracktravel.com/about-us/',
    fallbackTitle: 'About Us - IATA Travel Agency | World Track Aviation',
    fallbackDescription:
      'World Track Aviation is an IATA-accredited travel agency helping Pakistani travelers with Umrah, visa processing, flights & hotel bookings since 2022.',
  });
}

export default function Page() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us/' },
  ];

  return (
    <>
      <JsonLdScript schema={getBreadcrumbSchema(breadcrumbs)} />
      <AboutPage />
    </>
  );
}
