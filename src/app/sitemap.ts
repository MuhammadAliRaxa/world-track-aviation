import { MetadataRoute } from 'next';
import {
  getPageSitemapUrls,
  getListingSitemapUrls,
  getTravelPackagesSitemapUrls,
  getPostSitemapUrls,
  getVisaSitemapUrls,
  resolveBaseUrl,
} from '@/lib/sitemap-builder';

export const dynamic = 'force-dynamic';
export const revalidate = 60; // Dynamic revalidation every 60 seconds (1 minute)

export async function generateSitemaps() {
  return [
    { id: 'pages' },
    { id: 'listings' },
    { id: 'travel-packages' },
    { id: 'visas' },
    { id: 'posts' },
  ];
}

export default async function sitemap({
  id,
}: {
  id?: string;
}): Promise<MetadataRoute.Sitemap> {
  const baseUrl = resolveBaseUrl();

  let urls: any[] = [];
  if (id === 'pages') {
    urls = await getPageSitemapUrls(baseUrl);
  } else if (id === 'listings') {
    urls = await getListingSitemapUrls(baseUrl);
  } else if (id === 'travel-packages') {
    urls = await getTravelPackagesSitemapUrls(baseUrl);
  } else if (id === 'visas') {
    urls = await getVisaSitemapUrls(baseUrl);
  } else if (id === 'posts') {
    urls = await getPostSitemapUrls(baseUrl);
  } else {
    // If no ID or main sitemap index call, combine all
    const [pages, listings, packages, visas, posts] = await Promise.all([
      getPageSitemapUrls(baseUrl),
      getListingSitemapUrls(baseUrl),
      getTravelPackagesSitemapUrls(baseUrl),
      getVisaSitemapUrls(baseUrl),
      getPostSitemapUrls(baseUrl),
    ]);
    urls = [...pages, ...listings, ...packages, ...visas, ...posts];
  }

  return urls.map((u) => ({
    url: u.loc,
    lastModified: u.lastmod ? new Date(u.lastmod) : new Date(),
    changeFrequency: u.changefreq || 'weekly',
    priority: u.priority !== undefined ? u.priority : 0.8,
  }));
}
