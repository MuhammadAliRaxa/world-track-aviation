/**
 * Site-wide configuration and domain resolution for SEO, Canonical URLs, and Sitemaps.
 */
export const SITE_CONFIG = {
  name: 'World Track Aviation & Tourism',
  shortName: 'World Track',
  domain: process.env.NEXT_PUBLIC_SITE_URL || 'https://worldtracktravel.com',
  get baseUrl() {
    return this.domain.replace(/\/$/, '');
  },
  defaultTitle: 'Travel Agency in Islamabad - Umrah, Visas & Flights | World Track Aviation',
  defaultDescription:
    'World Track Aviation is an IATA-accredited travel agency in Islamabad offering Umrah packages, visa assistance, flight & hotel bookings across Pakistan.',
};
