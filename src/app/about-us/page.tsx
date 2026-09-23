import type { Metadata } from 'next';
import { AboutPage } from '@/shared/components';

export const metadata: Metadata = {
  title: 'About Us - IATA Travel Agency | World Track Aviation',
  description:
    'World Track Aviation is an IATA-accredited travel agency helping Pakistani travelers with Umrah, visa processing, flights & hotel bookings since 2022.',
  keywords: [
    'IATA-accredited travel agency in Pakistan',
    'Travel agency in Islamabad',
    'Umrah travel agency Pakistan',
    'Visa processing Pakistan',
    'World Track Aviation about us',
  ],
  alternates: {
    canonical: 'https://worldtracktravel.com/about-us/',
  },
  openGraph: {
    title: 'About Us - IATA Travel Agency | World Track Aviation',
    description:
      'World Track Aviation is an IATA-accredited travel agency helping Pakistani travelers with Umrah, visa processing, flights & hotel bookings since 2022.',
    url: 'https://worldtracktravel.com/about-us/',
    siteName: 'World Track Aviation',
    locale: 'en_PK',
    type: 'website',
  },
};

export default function Page() {
  return <AboutPage />;
}
