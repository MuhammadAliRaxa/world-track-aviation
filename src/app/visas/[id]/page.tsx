import type { Metadata } from 'next';
import { visaService } from '@/services/visa.service';
import { VisaDetailPage } from '@/features/visas/components/VisaDetailPage';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const visa = await visaService.getVisaById(id);
  if (!visa) {
    return {
      title: 'Visa Details | World Track Aviation',
      description: 'Find visa requirements and fast-track processing with World Track Aviation.',
    };
  }

  // Item-level SEO: use visa.seo fields when available, with dynamic fallbacks
  const seo = visa.seo;
  const title =
    seo?.seo_title ||
    `${visa.title || visa.country + ' Visa'} - Requirements & Processing | World Track Aviation`;
  const desc =
    seo?.meta_description ||
    visa.detailDesc ||
    visa.aboutText ||
    `Apply for ${visa.country} ${visa.title} with 99.4% approval rate, expert documentation, and fast turnaround at World Track Aviation.`;
  const canonical = seo?.canonical_url || `/visas/${seo?.url_slug || visa.id}`;
  const img = seo?.og_image || visa.featuredImage || visa.image;

  return {
    title,
    description: desc,
    alternates: {
      canonical,
    },
    robots: {
      index: seo?.robots_index !== 'noindex',
      follow: seo?.robots_follow !== 'nofollow',
    },
    openGraph: {
      title: seo?.og_title || `${visa.title} | World Track Aviation`,
      description: seo?.og_description || desc,
      images: img ? [img] : [],
    },
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const visa = await visaService.getVisaById(id);
  return <VisaDetailPage initialVisa={visa} />;
}
