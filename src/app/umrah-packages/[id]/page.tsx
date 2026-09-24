import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { umrahService } from '@/services';
import { UmrahPackageDetailPage } from '@/features/umrah/components/UmrahPackageDetailPage';

interface Props {
  params: Promise<{ id: string }>;
}

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
  return <UmrahPackageDetailPage initialPackage={pkg} />;
}
