import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { visaService } from '@/services/visa.service';
import { VisaDetailPage } from '@/features/visas/components/VisaDetailPage';

import { notFound } from 'next/navigation';
import { JsonLdScript } from '@/lib/jsonld';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const visas = await visaService.getVisas();
  if (!Array.isArray(visas)) return [];
  const params: { id: string }[] = [];
  visas.forEach((v) => {
    params.push({ id: String(v.id) });
    if (v.seo?.url_slug && v.seo.url_slug !== String(v.id)) {
      params.push({ id: v.seo.url_slug });
    }
  });
  return params;
}

export const revalidate = 86400; // 24 hours ISR

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const visa = await visaService.getVisaById(id);

  return buildMetadata({
    itemSeo: visa?.seo ?? null,
    pageKey: 'visas',
    canonicalPath: visa?.seo?.canonical_url || `https://worldtracktravel.com/visas/${id}/`,
    fallbackTitle: visa
      ? `${visa.title || visa.country + ' Visa'} - Requirements & Processing | World Track Aviation`
      : 'Visa Details | World Track Aviation',
    fallbackDescription: visa
      ? (visa.detailDesc ||
        visa.aboutText ||
        `Apply for ${visa.country} ${visa.title} with 99.4% approval rate, expert documentation, and fast turnaround at World Track Aviation.`)
      : 'Find visa requirements and fast-track processing with World Track Aviation.',
  });
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const visa = await visaService.getVisaById(id);

  if (!visa) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Visas', path: '/visas/' },
    { name: visa?.title || 'Visa Details', path: `/visas/${id}/` },
  ];

  const adminSchema = (visa as any)?.seo?.custom_schema_json || (visa as any)?.custom_schema_json;

  return (
    <>
      {adminSchema && <JsonLdScript schema={adminSchema} />}
      <VisaDetailPage initialVisa={visa} />
    </>
  );
}
