import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
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
  const params: { id: string }[] = [];
  packages.forEach((pkg) => {
    params.push({ id: String(pkg.id) });
    const slug = (pkg as any).slug || pkg.seo?.url_slug;
    if (slug && String(slug) !== String(pkg.id)) {
      params.push({ id: String(slug) });
    }
  });
  return params;
}

export const revalidate = 86400; // 24 hours ISR

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const pkg = await umrahService.getUmrahPackageById(id);

  if (!pkg) {
    return buildMetadata({
      pageKey: 'umrah-packages',
      canonicalPath: `https://worldtracktravel.com/umrah-packages/${id}/`,
      fallbackTitle: 'Umrah Package Not Found | World Track Aviation',
      fallbackDescription: 'The requested Umrah package could not be found.',
    });
  }

  const canonicalSlug = pkg.seo?.url_slug || (pkg as any).slug || id;

  return buildMetadata({
    itemSeo: pkg.seo ?? null,
    pageKey: 'umrah-packages',
    canonicalPath: `https://worldtracktravel.com/umrah-packages/${canonicalSlug}/`,
    fallbackTitle: `${pkg.title} (${pkg.duration}) | World Track Aviation`,
    fallbackDescription:
      pkg.tagline ||
      `Book ${pkg.title} with 5-star accommodations near the Haramain, private transport, and comprehensive ground support.`,
  });
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const pkg = await umrahService.getUmrahPackageById(id);

  if (!pkg) {
    notFound();
  }

  const canonicalSlug = pkg.seo?.url_slug || (pkg as any).slug || id;

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Umrah Packages', path: '/umrah-packages/' },
    { name: pkg.title || 'Package Details', path: `/umrah-packages/${canonicalSlug}/` },
  ];

  const tripSchema = getTouristTripSchema({
    id: pkg.id,
    name: pkg.title,
    description: pkg.tagline || `${pkg.title} (${pkg.duration})`,
    image: pkg.image,
    price: pkg.priceNumeric || pkg.price,
    url: `https://worldtracktravel.com/umrah-packages/${canonicalSlug}/`,
    duration: pkg.duration,
  });

  return (
    <>
      <JsonLdScript schema={getBreadcrumbSchema(breadcrumbs)} />
      <JsonLdScript schema={tripSchema} />
      <UmrahPackageDetailPage initialPackage={pkg} />
    </>
  );
}
