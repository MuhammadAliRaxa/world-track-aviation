import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ContactPage } from '@/shared/components/ContactPage';
import { contentService } from '@/services/content.service';

import { JsonLdScript, getBreadcrumbSchema } from '@/lib/jsonld';

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
  const contactInfo = await contentService.getContactInfo();

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Contact Us', path: '/contact-us/' },
  ];

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'World Track Aviation',
    url: 'https://worldtracktravel.com/contact-us/',
    telephone: contactInfo?.phone || '+92 329 272 1721',
    email: contactInfo?.email || 'worldtrackaviation@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: contactInfo?.address || 'Office No. 4, Islamabad Center, Block 39, Fazal-ul-Haq Road, Blue Area',
      addressLocality: 'Islamabad',
      addressRegion: 'Islamabad Capital Territory',
      addressCountry: 'PK',
    },
    sameAs: [
      'https://web.facebook.com/worldtrackaviation/',
      'https://www.instagram.com/worldtrackaviation/',
    ],
    areaServed: ['Islamabad', 'Rawalpindi', 'Pakistan'],
  };

  return (
    <>
      <JsonLdScript schema={[getBreadcrumbSchema(breadcrumbs), contactSchema]} />
      <ContactPage contactInfo={contactInfo} />
    </>
  );
}
