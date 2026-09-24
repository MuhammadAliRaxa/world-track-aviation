import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site';
import {
  hotelService,
  visaService,
  tourService,
  umrahService,
  blogService,
} from '@/services';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Cache for 1 hour, or regenerates dynamically

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.baseUrl;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/group-tickets/`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/our-hotels/`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/hotels-map/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/visas/`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/umrah-packages/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/tour-packages/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/customize-umrah-package/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/umrah-group-packages/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/private-transport/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/about-us/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact-us/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/our-blogs/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/privacy-policy/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/terms-and-conditions/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ];

  const [hotels, visas, tours, umrahs, blogs] = await Promise.all([
    hotelService.getHotels(),
    visaService.getVisas(),
    tourService.getTours(),
    umrahService.getUmrahPackages(),
    blogService.getBlogs(),
  ]);

  // Filter items where SEO robots_index is set to noindex in admin
  const isIndexable = (item: unknown): boolean => {
    if (!item || typeof item !== 'object') return true;
    const anyItem = item as { seo?: { robots_index?: string }; robots_index?: string };
    const robots = anyItem.seo?.robots_index || anyItem.robots_index;
    if (typeof robots === 'string' && robots.toLowerCase().includes('noindex')) {
      return false;
    }
    return true;
  };

  const hotelRoutes: MetadataRoute.Sitemap = hotels
    .filter(isIndexable)
    .map((h) => ({
      url: `${baseUrl}/our-hotels/${h.id}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

  const visaRoutes: MetadataRoute.Sitemap = visas
    .filter(isIndexable)
    .map((v) => ({
      url: `${baseUrl}/visas/${v.id}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

  const tourRoutes: MetadataRoute.Sitemap = tours
    .filter(isIndexable)
    .map((t) => ({
      url: `${baseUrl}/tour-packages/${t.id}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

  const umrahRoutes: MetadataRoute.Sitemap = umrahs
    .filter(isIndexable)
    .map((u) => ({
      url: `${baseUrl}/umrah-packages/${u.id}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

  const blogRoutes: MetadataRoute.Sitemap = blogs
    .filter(isIndexable)
    .map((b) => ({
      url: `${baseUrl}/our-blogs/${b.id}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));

  return [
    ...staticRoutes,
    ...hotelRoutes,
    ...visaRoutes,
    ...tourRoutes,
    ...umrahRoutes,
    ...blogRoutes,
  ];
}
