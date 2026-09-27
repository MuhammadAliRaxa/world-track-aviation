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

/**
 * Converts a raw slug/title into a URL-safe path segment.
 * - Strips domain prefix if accidentally included
 * - Replaces spaces with hyphens
 * - Encodes any remaining XML-unsafe characters (&, <, >, ", ')
 * - Strips leading/trailing slashes
 * Returns null if the result is purely numeric (ID-only, no real slug).
 */
function toSafeSlug(raw: unknown): string | null {
  if (!raw) return null;
  let s = String(raw).trim();

  // Strip domain prefix (e.g. https://worldtracktravel.com/our-blogs/some-slug)
  s = s.replace(/^https?:\/\/[^/]+/i, '');

  // Strip known path prefixes
  s = s.replace(/^\/?(?:our-hotels|visas|tour-packages|umrah-packages|our-blogs|tours|blogs)\//i, '');

  // Strip leading/trailing slashes
  s = s.replace(/^\/+|\/+$/g, '');

  // Replace spaces with hyphens (e.g. "Dubai & Abu Dhabi Tour Package" → "Dubai-&-Abu-Dhabi-Tour-Package")
  s = s.replace(/\s+/g, '-');

  // Encode XML-unsafe characters: & < > " '
  s = s
    .replace(/&/g, '%26')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
    .replace(/"/g, '%22')
    .replace(/'/g, '%27');

  if (!s) return null;

  // If slug is purely numeric, it's just a DB ID — not a real SEO slug
  if (/^\d+$/.test(s)) return null;

  return s;
}

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

  const parseItemDate = (item: unknown): Date => {
    const anyItem = item as { updated_at?: string; created_at?: string; date?: string };
    const raw = anyItem?.updated_at || anyItem?.created_at || anyItem?.date;
    if (raw) {
      const parsed = new Date(raw);
      if (!isNaN(parsed.getTime())) return parsed;
    }
    return new Date();
  };

  // Hotels — only include items with a real SEO slug (skip numeric ID-only)
  const hotelRoutes: MetadataRoute.Sitemap = hotels
    .filter(isIndexable)
    .flatMap((h) => {
      const slug = toSafeSlug((h as any).slug || (h as any)?.seo?.url_slug);
      if (!slug) return []; // Skip ID-only hotels
      return [{
        url: `${baseUrl}/our-hotels/${slug}/`,
        lastModified: parseItemDate(h),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }];
    });

  // Visas — use SEO slug, skip if only numeric ID
  const visaRoutes: MetadataRoute.Sitemap = visas
    .filter(isIndexable)
    .flatMap((v) => {
      const slug = toSafeSlug((v as any).slug || (v as any)?.seo?.url_slug);
      if (!slug) return []; // Skip ID-only visas
      return [{
        url: `${baseUrl}/visas/${slug}/`,
        lastModified: parseItemDate(v),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }];
    });

  // Tours — sanitize slug (catches "Dubai & Abu Dhabi Tour Package" case)
  const tourRoutes: MetadataRoute.Sitemap = tours
    .filter(isIndexable)
    .flatMap((t) => {
      const slug = toSafeSlug((t as any).slug || (t as any)?.seo?.url_slug);
      if (!slug) return []; // Skip ID-only tours
      return [{
        url: `${baseUrl}/tour-packages/${slug}/`,
        lastModified: parseItemDate(t),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }];
    });

  // Umrah packages
  const umrahRoutes: MetadataRoute.Sitemap = umrahs
    .filter(isIndexable)
    .flatMap((u) => {
      const slug = toSafeSlug((u as any).slug || (u as any)?.seo?.url_slug);
      if (!slug) return []; // Skip ID-only packages
      return [{
        url: `${baseUrl}/umrah-packages/${slug}/`,
        lastModified: parseItemDate(u),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }];
    });

  // Blogs — sanitize slug
  const blogRoutes: MetadataRoute.Sitemap = blogs
    .filter(isIndexable)
    .flatMap((b) => {
      const slug = toSafeSlug((b as any).slug || (b as any)?.seo?.url_slug);
      if (!slug) return []; // Skip ID-only blogs
      return [{
        url: `${baseUrl}/our-blogs/${slug}/`,
        lastModified: parseItemDate(b),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }];
    });

  return [
    ...staticRoutes,
    ...hotelRoutes,
    ...visaRoutes,
    ...tourRoutes,
    ...umrahRoutes,
    ...blogRoutes,
  ];
}
