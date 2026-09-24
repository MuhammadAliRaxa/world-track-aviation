import type { Metadata } from 'next';
import { buildMetadata, fetchPageSeo } from '@/lib/seo';
import { CustomUmrahPage } from '@/features/umrah/components/CustomUmrahPage';

import { JsonLdScript, getBreadcrumbSchema } from '@/lib/jsonld';

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    pageKey: 'custom-umrah-packages',
    canonicalPath: 'https://worldtracktravel.com/customize-umrah-package/',
    fallbackTitle: 'Customized Umrah Packages from Pakistan | World Track Aviation',
    fallbackDescription:
      'Build your own Umrah package: choose your dates, hotel, room type, and transport. Get a quote from World Track Aviation based on exactly what you need.',
  });
}

export default async function Page() {
  const pageSeo = await fetchPageSeo('custom-umrah-packages');

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Customize Umrah Package', path: '/customize-umrah-package/' },
  ];

  return (
    <>
      <JsonLdScript schema={getBreadcrumbSchema(breadcrumbs)} />
      <CustomUmrahPage
        h1={pageSeo?.h1_heading || pageSeo?.seo?.h1_heading}
        heroIntro={pageSeo?.hero_intro || pageSeo?.seo?.hero_intro}
      />
    </>
  );
}
