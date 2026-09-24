import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { umrahService } from '@/services';
import { UmrahPackageDetailPage } from '@/features/umrah/components/UmrahPackageDetailPage';

import { JsonLdScript, getBreadcrumbSchema, getTouristTripSchema } from '@/lib/jsonld';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const packages = await umrahService.getUmrahPackages();
  if (!Array.isArray(packages)) return [];
  return packages.map((pkg) => ({ id: String(pkg.id) }));
}

export const revalidate = 86400; // 24 hours ISR

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const pkg = await umrahService.getUmrahPackageById(id);

  return buildMetadata({
    itemSeo: pkg?.seo ?? null,
    pageKey: 'umrah-packages',
    canonicalPath: pkg?.seo?.canonical_url || `https://worldtracktravel.com/umrah-packages/${id}/`,
    fallbackTitle: pkg
      ? `${pkg.title} (${pkg.duration}) | World Track Aviation`
      : 'Umrah Package Details | World Track Aviation',
    fallbackDescription:
      pkg?.tagline ||
      `Book ${pkg?.title || 'Umrah packages'} with 5-star accommodations near the Haramain, private transport, and comprehensive ground support.`,
  });
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const pkg = await umrahService.getUmrahPackageById(id);

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Umrah Packages', path: '/umrah-packages/' },
    { name: pkg?.title || 'Package Details', path: `/umrah-packages/${id}/` },
  ];

  const tripSchema = pkg
    ? getTouristTripSchema({
        id: pkg.id,
        name: pkg.title,
        description: pkg.tagline || `${pkg.title} (${pkg.duration})`,
        image: pkg.image,
        price: pkg.priceNumeric || pkg.price,
        url: `https://worldtracktravel.com/umrah-packages/${id}/`,
        duration: pkg.duration,
      })
    : null;

  return (
    <>
      <JsonLdScript schema={getBreadcrumbSchema(breadcrumbs)} />
      {tripSchema && <JsonLdScript schema={tripSchema} />}
      <UmrahPackageDetailPage initialPackage={pkg} />
    </>
  );
}
