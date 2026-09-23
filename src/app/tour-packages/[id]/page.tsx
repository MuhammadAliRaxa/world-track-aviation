import type { Metadata } from 'next';
import { tourService } from '@/services';
import { TourDetailPage } from '@/features/holidays/components/TourDetailPage';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const tour = await tourService.getTourById(id);
  if (!tour) {
    return {
      title: 'Tour Details | World Track Aviation',
      description: 'Exclusive worldwide holiday packages and tours by World Track Aviation.',
    };
  }

  // Item-level SEO: use tour.seo fields when available, with dynamic fallbacks
  const seo = tour.seo;
  const title = seo?.seo_title || `${tour.title} (${tour.duration}) | World Track Aviation`;
  const description =
    seo?.meta_description ||
    `Discover ${tour.destination} with ${tour.title}. Includes ${tour.inclusions?.join(', ') || 'luxury hotels, transfers, and guided sightseeing'}.`;
  const canonical = seo?.canonical_url || `/tour-packages/${seo?.url_slug || tour.id}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    robots: {
      index: seo?.robots_index !== 'noindex',
      follow: seo?.robots_follow !== 'nofollow',
    },
    openGraph: {
      title: seo?.og_title || `${tour.title} | World Track Aviation`,
      description: seo?.og_description || `Explore ${tour.destination} with World Track Aviation.`,
      images: seo?.og_image ? [seo.og_image] : tour.image ? [tour.image] : [],
    },
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const tour = await tourService.getTourById(id);
  return <TourDetailPage initialTour={tour} />;
}
