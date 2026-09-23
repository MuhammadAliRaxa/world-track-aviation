import type { Metadata } from 'next';
import { umrahService } from '@/services';
import { UmrahPackageDetailPage } from '@/features/umrah/components/UmrahPackageDetailPage';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const pkg = await umrahService.getUmrahPackageById(id);
  if (!pkg) {
    return {
      title: 'Umrah Package Details | World Track Aviation',
      description: 'Exclusive Umrah packages with verified hotels in Makkah and Madinah.',
    };
  }

  return {
    title: `${pkg.title} (${pkg.duration}) | World Track Aviation`,
    description:
      pkg.tagline ||
      `Book ${pkg.title} with 5-star accommodations near the Haramain, private transport, and comprehensive ground support.`,
    alternates: {
      canonical: `/umrah-packages/${pkg.id}`,
    },
    openGraph: {
      title: `${pkg.title} | World Track Aviation`,
      description: pkg.tagline,
      images: pkg.image ? [pkg.image] : [],
    },
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const pkg = await umrahService.getUmrahPackageById(id);
  return <UmrahPackageDetailPage initialPackage={pkg} />;
}
