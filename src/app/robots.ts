import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site';
import { fetchGlobalSeo } from '@/lib/seo';

export const revalidate = 60; // Dynamic revalidation every 60 seconds

export default async function robots(): Promise<MetadataRoute.Robots> {
  const globalSeo = await fetchGlobalSeo();
  const rawRobotsTxt = (globalSeo as any)?.robots_txt || (globalSeo as any)?.robots_content;
  const customDisallows = (globalSeo as any)?.disallow_paths;

  let disallowList = ['/api/', '/_next/', '/private/'];

  if (typeof rawRobotsTxt === 'string' && rawRobotsTxt.trim()) {
    const lines = rawRobotsTxt.split('\n');
    lines.forEach((line) => {
      const match = line.match(/^Disallow:\s*(.+)$/i);
      if (match && match[1]) {
        const path = match[1].trim();
        if (path && !disallowList.includes(path)) {
          disallowList.push(path);
        }
      }
    });
  }

  if (Array.isArray(customDisallows) && customDisallows.length > 0) {
    disallowList = Array.from(new Set([...disallowList, ...customDisallows]));
  }

  const adminSitemapUrl = globalSeo?.xml_sitemap_url;
  const sitemaps = [
    `${SITE_CONFIG.baseUrl}/sitemap_index.xml`,
    `${SITE_CONFIG.baseUrl}/sitemap.xml`,
  ];
  if (adminSitemapUrl && !sitemaps.includes(adminSitemapUrl)) {
    sitemaps.unshift(adminSitemapUrl);
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: disallowList,
    },
    sitemap: sitemaps,
  };
}
