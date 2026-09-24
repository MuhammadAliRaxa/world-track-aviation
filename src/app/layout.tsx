import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import '../index.css';
import { HotelsProvider } from '../features/hotels/state/HotelsContext';

import { SITE_CONFIG } from '../config/site';

import { JsonLdScript, getOrganizationSchema, getWebsiteSchema } from '../lib/jsonld';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-main',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  title: {
    default: SITE_CONFIG.defaultTitle,
    template: `%s | ${SITE_CONFIG.shortName}`,
  },
  description: SITE_CONFIG.defaultDescription,
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: SITE_CONFIG.baseUrl,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.defaultDescription,
    images: [
      {
        url: '/assets/world_track_logo.png',
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.defaultDescription,
    images: ['/assets/world_track_logo.png'],
  },
  icons: {
    icon: '/assets/world_track_logo.png',
  },
};

import Script from 'next/script';
import { fetchGlobalSeo } from '../lib/seo';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const globalSeo = await fetchGlobalSeo();
  const gaId = globalSeo?.google_analytics_id;
  const gscTag = globalSeo?.google_search_console_tag;

  return (
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://admin.worldtracktravel.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://admin.worldtracktravel.com" />
        {gscTag && <meta name="google-site-verification" content={gscTag} />}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        <JsonLdScript schema={[getOrganizationSchema(), getWebsiteSchema()]} />
      </head>
      <body className="antialiased font-sans bg-white text-slate-900 min-h-screen">
        <HotelsProvider>{children}</HotelsProvider>
      </body>
    </html>
  );
}
