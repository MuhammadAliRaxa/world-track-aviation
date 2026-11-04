import type { Metadata, Viewport } from 'next';
import '../index.css';
import { HotelsProvider } from '../features/hotels/state/HotelsContext';
import { SITE_CONFIG } from '../config/site';
import { JsonLdScript, getOrganizationSchema, getWebsiteSchema } from '../lib/jsonld';
import { fetchGlobalSeo, extractGoogleVerificationCode, extractGaMeasurementId } from '../lib/seo';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export async function generateMetadata(): Promise<Metadata> {
  const globalSeo = await fetchGlobalSeo();
  const gscCode = extractGoogleVerificationCode(
    globalSeo?.google_search_console_verification ||
    globalSeo?.google_search_console_tag
  );

  return {
    metadataBase: new URL(SITE_CONFIG.baseUrl),
    title: {
      default: globalSeo?.default_site_seo_title || SITE_CONFIG.defaultTitle,
      template: `%s | ${globalSeo?.site_name || SITE_CONFIG.shortName}`,
    },
    description: globalSeo?.default_site_seo_description || SITE_CONFIG.defaultDescription,
    verification: gscCode
      ? {
          google: gscCode,
        }
      : undefined,
    openGraph: {
      type: 'website',
      locale: 'en_PK',
      url: SITE_CONFIG.baseUrl,
      siteName: globalSeo?.site_name || SITE_CONFIG.name,
      title: globalSeo?.default_og_title || globalSeo?.default_site_seo_title || SITE_CONFIG.defaultTitle,
      description: globalSeo?.default_og_description || globalSeo?.default_site_seo_description || SITE_CONFIG.defaultDescription,
      images: [
        {
          url: globalSeo?.default_og_image || '/assets/world_track_logo.png',
          width: 1200,
          height: 630,
          alt: globalSeo?.site_name || SITE_CONFIG.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: globalSeo?.default_og_title || globalSeo?.default_site_seo_title || SITE_CONFIG.defaultTitle,
      description: globalSeo?.default_og_description || globalSeo?.default_site_seo_description || SITE_CONFIG.defaultDescription,
      images: [globalSeo?.default_og_image || '/assets/world_track_logo.png'],
    },
    icons: {
      icon: '/assets/world_track_logo.png',
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const globalSeo = await fetchGlobalSeo();
  const gaId = extractGaMeasurementId(
    globalSeo?.google_analytics_tracking_code ||
    globalSeo?.google_analytics_id
  );
  const gscCode = extractGoogleVerificationCode(
    globalSeo?.google_search_console_verification ||
    globalSeo?.google_search_console_tag
  );
  const orgSchema = getOrganizationSchema(
    globalSeo?.organization_schema ||
    globalSeo?.default_schema_json
  );
  const websiteSchema = getWebsiteSchema(
    globalSeo?.website_schema ||
    (globalSeo as any)?.website_schema_json ||
    (globalSeo as any)?.default_website_schema_json
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://admin.worldtracktravel.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://admin.worldtracktravel.com" />
        {gscCode && <meta name="google-site-verification" content={gscCode} />}
        {gaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <script
              id="google-analytics-init"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{page_path:window.location.pathname});`,
              }}
            />
          </>
        )}
        <JsonLdScript schema={[orgSchema, websiteSchema]} />
      </head>
      <body className="antialiased font-sans bg-white text-slate-900 min-h-screen" suppressHydrationWarning>
        <HotelsProvider>{children}</HotelsProvider>
      </body>
    </html>
  );
}
