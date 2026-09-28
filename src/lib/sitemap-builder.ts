import { SITE_CONFIG } from '@/config/site';
import {
  hotelService,
  visaService,
  tourService,
  umrahService,
  blogService,
} from '@/services';

export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  images?: string[];
}

export interface SitemapIndexItem {
  loc: string;
  lastmod?: string;
}

/**
 * Dynamically resolves the base URL from incoming Request headers (host/protocol),
 * environment variables, or SITE_CONFIG fallback.
 */
export function resolveBaseUrl(request?: Request): string {
  if (request) {
    const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
    const proto =
      request.headers.get('x-forwarded-proto') || (host?.includes('localhost') ? 'http' : 'https');
    if (host) {
      return `${proto}://${host}`.replace(/\/+$/, '');
    }
  }

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, '');
  }
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL.replace(/\/+$/, '');
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`.replace(/\/+$/, '');
  }

  return (SITE_CONFIG.baseUrl || 'https://worldtracktravel.com').replace(/\/+$/, '');
}

export function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function toSafeSlug(raw: unknown): string | null {
  if (!raw) return null;
  let s = String(raw).trim();
  s = s.replace(/^https?:\/\/[^/]+/i, '');
  s = s.replace(/^\/?(?:our-hotels|visas|tour-packages|umrah-packages|our-blogs|tours|blogs)\//i, '');
  s = s.replace(/^\/+|\/+$/g, '');

  // Replace & with 'and' for clean SEO slugs
  s = s.replace(/&/g, 'and');

  // Replace spaces with hyphens
  s = s.replace(/\s+/g, '-');

  // Remove any non-alphanumeric characters except hyphens and underscores
  s = s.replace(/[^a-zA-Z0-9\-_]/g, '');

  if (!s) return null;
  if (/^\d+$/.test(s)) return null;

  return s;
}

export function parseItemDate(item: unknown): string {
  const anyItem = item as { updated_at?: string; created_at?: string; date?: string };
  const raw = anyItem?.updated_at || anyItem?.created_at || anyItem?.date;
  if (raw) {
    const parsed = new Date(raw);
    if (!isNaN(parsed.getTime())) return parsed.toISOString();
  }
  return new Date().toISOString();
}

export function isIndexable(item: unknown): boolean {
  if (!item || typeof item !== 'object') return true;
  const anyItem = item as { seo?: { robots_index?: string }; robots_index?: string };
  const robots = anyItem.seo?.robots_index || anyItem.robots_index;
  if (typeof robots === 'string' && robots.toLowerCase().includes('noindex')) {
    return false;
  }
  return true;
}

export function extractImageUrls(item: unknown): string[] {
  if (!item || typeof item !== 'object') return [];
  const anyItem = item as any;
  const urls: string[] = [];

  const addUrl = (url: unknown) => {
    if (typeof url === 'string' && url.startsWith('http')) {
      urls.push(url);
    }
  };

  addUrl(anyItem.image);
  addUrl(anyItem.featured_image);
  addUrl(anyItem.seo?.og_image);

  if (Array.isArray(anyItem.images)) {
    for (const img of anyItem.images) {
      if (typeof img === 'string') addUrl(img);
      else if (img && typeof img === 'object' && typeof img.file === 'string') addUrl(img.file);
    }
  }
  if (Array.isArray(anyItem.gallery)) {
    for (const img of anyItem.gallery) {
      if (typeof img === 'string') addUrl(img);
      else if (img && typeof img === 'object' && typeof img.file === 'string') addUrl(img.file);
    }
  }

  return Array.from(new Set(urls));
}

export function buildSitemapIndexXml(sitemaps: SitemapIndexItem[]): string {
  const xmlItems = sitemaps
    .map(
      (s) => `\t<sitemap>
\t\t<loc>${escapeXml(s.loc)}</loc>${s.lastmod ? `\n\t\t<lastmod>${s.lastmod}</lastmod>` : ''}
\t</sitemap>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/main-sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems}
</sitemapindex>`;
}

export function buildUrlsetXml(urls: SitemapUrl[]): string {
  const xmlItems = urls
    .map((u) => {
      const loc = `\t\t<loc>${escapeXml(u.loc)}</loc>`;
      const lastmod = u.lastmod ? `\n\t\t<lastmod>${u.lastmod}</lastmod>` : '';
      const changefreq = u.changefreq ? `\n\t\t<changefreq>${u.changefreq}</changefreq>` : '';
      const priority = u.priority !== undefined ? `\n\t\t<priority>${u.priority.toFixed(1)}</priority>` : '';
      const images =
        u.images && u.images.length > 0
          ? '\n' +
            u.images
              .map(
                (img) =>
                  `\t\t<image:image>\n\t\t\t<image:loc>${escapeXml(img)}</image:loc>\n\t\t</image:image>`
              )
              .join('\n')
          : '';
      return `\t<url>\n${loc}${lastmod}${changefreq}${priority}${images}\n\t</url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/main-sitemap.xsl"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems}
</urlset>`;
}

// ---------------------------------------------------------------------------
// Dynamic Category Data Fetchers
// ---------------------------------------------------------------------------

export async function getPageSitemapUrls(baseUrl?: string): Promise<SitemapUrl[]> {
  const base = baseUrl || resolveBaseUrl();
  const now = new Date().toISOString();

  return [
    { loc: `${base}/`, lastmod: now, changefreq: 'daily', priority: 1.0 },
    { loc: `${base}/group-tickets/`, lastmod: now, changefreq: 'daily', priority: 0.9 },
    { loc: `${base}/our-hotels/`, lastmod: now, changefreq: 'daily', priority: 0.9 },
    { loc: `${base}/hotels-map/`, lastmod: now, changefreq: 'weekly', priority: 0.8 },
    { loc: `${base}/visas/`, lastmod: now, changefreq: 'daily', priority: 0.9 },
    { loc: `${base}/umrah-packages/`, lastmod: now, changefreq: 'weekly', priority: 0.8 },
    { loc: `${base}/tour-packages/`, lastmod: now, changefreq: 'weekly', priority: 0.8 },
    { loc: `${base}/customize-umrah-package/`, lastmod: now, changefreq: 'weekly', priority: 0.8 },
    { loc: `${base}/umrah-group-packages/`, lastmod: now, changefreq: 'weekly', priority: 0.8 },
    { loc: `${base}/private-transport/`, lastmod: now, changefreq: 'weekly', priority: 0.7 },
    { loc: `${base}/about-us/`, lastmod: now, changefreq: 'monthly', priority: 0.6 },
    { loc: `${base}/contact-us/`, lastmod: now, changefreq: 'monthly', priority: 0.6 },
    { loc: `${base}/our-blogs/`, lastmod: now, changefreq: 'weekly', priority: 0.7 },
    { loc: `${base}/privacy-policy/`, lastmod: now, changefreq: 'monthly', priority: 0.3 },
    { loc: `${base}/terms-and-conditions/`, lastmod: now, changefreq: 'monthly', priority: 0.3 },
  ];
}

export async function getListingSitemapUrls(baseUrl?: string): Promise<SitemapUrl[]> {
  const base = baseUrl || resolveBaseUrl();
  const hotels = await hotelService.getHotels();

  return hotels
    .filter(isIndexable)
    .flatMap((h) => {
      const slug = toSafeSlug((h as any).slug || (h as any)?.seo?.url_slug);
      if (!slug) return [];
      return [
        {
          loc: `${base}/our-hotels/${slug}/`,
          lastmod: parseItemDate(h),
          changefreq: 'weekly' as const,
          priority: 0.8,
          images: extractImageUrls(h),
        },
      ];
    });
}

export async function getTravelPackagesSitemapUrls(baseUrl?: string): Promise<SitemapUrl[]> {
  const base = baseUrl || resolveBaseUrl();
  const [tours, umrahs] = await Promise.all([
    tourService.getTours(),
    umrahService.getUmrahPackages(),
  ]);

  const tourUrls: SitemapUrl[] = tours
    .filter(isIndexable)
    .flatMap((t) => {
      const slug = toSafeSlug((t as any).slug || (t as any)?.seo?.url_slug);
      if (!slug) return [];
      return [
        {
          loc: `${base}/tour-packages/${slug}/`,
          lastmod: parseItemDate(t),
          changefreq: 'weekly' as const,
          priority: 0.8,
          images: extractImageUrls(t),
        },
      ];
    });

  const umrahUrls: SitemapUrl[] = umrahs
    .filter(isIndexable)
    .flatMap((u) => {
      const slug = toSafeSlug((u as any).slug || (u as any)?.seo?.url_slug);
      if (!slug) return [];
      return [
        {
          loc: `${base}/umrah-packages/${slug}/`,
          lastmod: parseItemDate(u),
          changefreq: 'weekly' as const,
          priority: 0.8,
          images: extractImageUrls(u),
        },
      ];
    });

  return [...tourUrls, ...umrahUrls];
}

export async function getPostSitemapUrls(baseUrl?: string): Promise<SitemapUrl[]> {
  const base = baseUrl || resolveBaseUrl();
  const blogs = await blogService.getBlogs();

  return blogs
    .filter(isIndexable)
    .flatMap((b) => {
      const slug = toSafeSlug((b as any).slug || (b as any)?.seo?.url_slug);
      if (!slug) return [];
      return [
        {
          loc: `${base}/our-blogs/${slug}/`,
          lastmod: parseItemDate(b),
          changefreq: 'monthly' as const,
          priority: 0.7,
          images: extractImageUrls(b),
        },
      ];
    });
}

export async function getVisaSitemapUrls(baseUrl?: string): Promise<SitemapUrl[]> {
  const base = baseUrl || resolveBaseUrl();
  const visas = await visaService.getVisas();

  return visas
    .filter(isIndexable)
    .flatMap((v) => {
      const slug = toSafeSlug((v as any).slug || (v as any)?.seo?.url_slug);
      if (!slug) return [];
      return [
        {
          loc: `${base}/visas/${slug}/`,
          lastmod: parseItemDate(v),
          changefreq: 'weekly' as const,
          priority: 0.8,
          images: extractImageUrls(v),
        },
      ];
    });
}

export async function getSitemapIndexItems(baseUrl?: string): Promise<SitemapIndexItem[]> {
  const base = baseUrl || resolveBaseUrl();
  const now = new Date().toISOString();

  return [
    { loc: `${base}/page-sitemap.xml`, lastmod: now },
    { loc: `${base}/post-sitemap.xml`, lastmod: now },
    { loc: `${base}/listing-sitemap.xml`, lastmod: now },
    { loc: `${base}/travel_packages-sitemap.xml`, lastmod: now },
    { loc: `${base}/visa-sitemap.xml`, lastmod: now },
  ];
}
