import type { Metadata } from 'next';
import { buildMetadata, fetchPageSeo } from '@/lib/seo';
import { ContactPage } from '@/shared/components/ContactPage';
import { contentService } from '@/services/content.service';
import { JsonLdScript } from '@/lib/jsonld';

export const revalidate = 0;

/**
 * SEO fallback chain for Contact page:
 * 1. GET /api/seo/page/contact-us
 * 2. GET /api/seo/global (final fallback)
 */
export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    pageKey: 'contact-us',
    canonicalPath: 'https://worldtracktravel.com/contact-us/',
    fallbackTitle: 'Contact Us - Islamabad Travel Agency | World Track Aviation',
    fallbackDescription:
      'Reach World Track Aviation for Umrah packages, visa help, flights & hotel bookings in Islamabad & Rawalpindi. Call, WhatsApp or visit get a fast reply.',
  });
}

export default async function ContactUsPage() {
  const [contactInfo, pageSeo] = await Promise.all([
    contentService.getContactInfo(),
    fetchPageSeo('contact-us'),
  ]);

  const adminSchema = pageSeo?.seo?.custom_schema_json || (pageSeo as any)?.custom_schema_json;

  return (
    <>
      {adminSchema && <JsonLdScript schema={adminSchema} />}
      <ContactPage contactInfo={contactInfo} />
    </>
  );
}
