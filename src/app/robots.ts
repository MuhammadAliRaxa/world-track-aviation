import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site';
import { fetchGlobalSeo } from '@/lib/seo';

export const revalidate = 60; // Dynamic revalidation every 60 seconds

export default async function robots(): Promise<MetadataRoute.Robots> {
  const globalSeo = await fetchGlobalSeo();
  const rawRobotsTxt = (globalSeo as any)?.robots_txt || (globalSeo as any)?.robots_content;
  const customDisallows = (globalSeo as any)?.disallow_paths;

  let disallowList = ['/api/', '/_next/', '/private/'];
  if (Array.isArray(customDisallows) && customDisallows.length > 0) {
    disallowList = Array.from(new Set([...disallowList, ...customDisallows]));
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: disallowList,
    },
    sitemap: [
      `${SITE_CONFIG.baseUrl}/sitemap_index.xml`,
      `${SITE_CONFIG.baseUrl}/sitemap.xml`,
    ],
  };
}
