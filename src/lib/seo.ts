/**
 * SEO Utilities — WorldTrackTravel
 *
 * Fetches SEO data from the API and builds Next.js Metadata objects.
 *
 * Fallback order (per docs/frontend-api-integration.md):
 *   1. Item-level seo (passed in directly)
 *   2. Page-level seo from /seo/page/{page_key}
 *   3. Global seo from /seo/global
 *   4. Hardcoded frontend defaults
 */

import { unstable_cache } from 'next/cache';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '../config/site';
import type { ApiSeoObject, ApiGlobalSeo, ApiPageSeo } from '../types/api.types';

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  'https://admin.worldtracktravel.com/api';

// ---------------------------------------------------------------------------
// Internal fetchers (server-side only)
// ---------------------------------------------------------------------------

async function _fetchGlobalSeo(): Promise<ApiGlobalSeo | null> {
  try {
    const res = await fetch(`${API_BASE}/seo/global`, {
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const json = await res.json();
    return (json?.data as ApiGlobalSeo) ?? null;
  } catch {
    return null;
  }
}

async function _fetchPageSeo(pageKey: string): Promise<ApiPageSeo | null> {
  try {
    const res = await fetch(`${API_BASE}/seo/page/${pageKey}`, {
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const json = await res.json();
    return (json?.data as ApiPageSeo) ?? null;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Cached public fetchers
// ---------------------------------------------------------------------------

/**
 * Fetches global SEO settings. Cached for 1 hour.
 * Used as the final fallback for all pages.
 */
export const fetchGlobalSeo = unstable_cache(
  _fetchGlobalSeo,
  ['global-seo'],
  { revalidate: 3600, tags: ['seo', 'global-seo'] },
);

/**
 * Fetches page-level SEO for listing/static pages. Cached for 1 hour.
 * @param pageKey — one of: home, about-us, contact-us, hotels, visas, transport,
 *                   tours, blogs, umrah-packages, custom-umrah-packages, group-umrah-packages, group-tickets
 */
export const fetchPageSeo = unstable_cache(
  _fetchPageSeo,
  ['page-seo'],
  { revalidate: 3600, tags: ['seo', 'page-seo'] },
);

// ---------------------------------------------------------------------------
// Metadata builder
// ---------------------------------------------------------------------------

export interface BuildMetadataOptions {
  /** Item-level seo (highest priority). */
  itemSeo?: Partial<ApiSeoObject> | ApiSeoObject | null;
  /** Page key for /seo/page/{key} lookup (used when itemSeo is null). */
  pageKey?: string;
  /** Additional path segment for canonical URL normalization (e.g. '/our-hotels/my-slug/'). */
  canonicalPath?: string;
  /** Fallback title if all SEO sources are null. */
  fallbackTitle?: string;
  /** Fallback description if all SEO sources are null. */
  fallbackDescription?: string;
}

/**
 * Builds a Next.js Metadata object from the documented fallback chain:
 * item SEO → page SEO → route-specific fallback → global SEO → hardcoded defaults.
 */
export async function buildMetadata(
  opts: BuildMetadataOptions = {},
): Promise<Metadata> {
  const {
    itemSeo,
    pageKey,
    canonicalPath,
    fallbackTitle = SITE_CONFIG.defaultTitle,
    fallbackDescription = SITE_CONFIG.defaultDescription,
  } = opts;

  // Resolve sources in priority order
  const pageSeoData = pageKey ? await fetchPageSeo(pageKey) : null;
  const globalSeoData = await fetchGlobalSeo();

  const pageSeo = pageSeoData?.seo ?? null;
  const global = globalSeoData;

  // Helper: pick first non-empty value from candidates
  const pick = (...candidates: (string | null | undefined)[]): string =>
    candidates.find((v) => v && v.trim() !== '') ?? '';

  // Priority order: Item SEO -> Page SEO -> Route Fallback -> Global CMS -> Site Default
  const titleCandidate = pick(
    itemSeo?.seo_title,
    pageSeo?.seo_title,
    fallbackTitle !== SITE_CONFIG.defaultTitle ? fallbackTitle : undefined,
    global?.default_site_seo_title,
    fallbackTitle,
    SITE_CONFIG.defaultTitle,
  );

  const descriptionCandidate = pick(
    itemSeo?.meta_description,
    pageSeo?.meta_description,
    fallbackDescription !== SITE_CONFIG.defaultDescription ? fallbackDescription : undefined,
    global?.default_site_seo_description,
    fallbackDescription,
    SITE_CONFIG.defaultDescription,
  );

  // Canonical resolution: ignore global admin domain fallback
  const rawCanonical = pick(
    itemSeo?.canonical_url,
    pageSeo?.canonical_url,
    canonicalPath,
  );
  const canonicalUrl = buildCanonicalUrl(rawCanonical || canonicalPath || SITE_CONFIG.baseUrl);

  // Robots indexing logic: robust against boolean strings, "index, follow", "all", etc.
  const rawIndex = pick(
    itemSeo?.robots_index,
    pageSeo?.robots_index,
    global?.default_robots_index,
    'index',
  ).toLowerCase().trim();

  const rawFollow = pick(
    itemSeo?.robots_follow,
    pageSeo?.robots_follow,
    global?.default_robots_follow,
    'follow',
  ).toLowerCase().trim();

  const isIndex = !rawIndex.includes('noindex') && rawIndex !== 'false' && rawIndex !== '0';
  const isFollow = !rawFollow.includes('nofollow') && rawFollow !== 'false' && rawFollow !== '0';

  const defaultOgImage = `${SITE_CONFIG.baseUrl}/assets/world_track_logo.png`;
  const ogImage = pick(
    itemSeo?.og_image,
    pageSeo?.og_image,
    global?.default_og_image,
    defaultOgImage,
  );

  const ogTitle = pick(
    itemSeo?.og_title,
    pageSeo?.og_title,
    global?.default_og_title,
    titleCandidate,
  );

  const ogDescription = pick(
    itemSeo?.og_description,
    pageSeo?.og_description,
    global?.default_og_description,
    descriptionCandidate,
  );

  // Avoid duplicate brand suffix if already included in title
  const hasBrand = titleCandidate.toLowerCase().includes('world track');

  const metadata: Metadata = {
    title: hasBrand ? { absolute: titleCandidate } : titleCandidate,
    description: descriptionCandidate,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: isIndex,
      follow: isFollow,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonicalUrl,
      siteName: global?.site_name ?? SITE_CONFIG.name,
      type: 'website',
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };

  return metadata;
}

// ---------------------------------------------------------------------------
// Canonical URL helper
// ---------------------------------------------------------------------------

/**
 * Normalizes a canonical URL to be absolute with trailing slash to match next.config.ts trailingSlash: true.
 * Protects against admin CMS domain leaks.
 */
export function buildCanonicalUrl(urlOrPath: string): string {
  if (!urlOrPath) return `${SITE_CONFIG.baseUrl}/`;

  // Protect against admin backend domain leak
  let clean = urlOrPath.replace(/^https?:\/\/admin\.worldtracktravel\.com/, SITE_CONFIG.baseUrl);

  if (clean.startsWith('http://') || clean.startsWith('https://')) {
    try {
      const u = new URL(clean);
      if (u.pathname === '' || u.pathname === '/') {
        return `${u.origin}/`;
      }
      const pathnameWithSlash = u.pathname.endsWith('/') ? u.pathname : `${u.pathname}/`;
      return `${u.origin}${pathnameWithSlash}${u.search}`;
    } catch {
      return clean.endsWith('/') ? clean : `${clean}/`;
    }
  }

  // Relative path
  const base = SITE_CONFIG.baseUrl.replace(/\/$/, '');
  const path = clean.startsWith('/') ? clean : `/${clean}`;
  return `${base}${path.endsWith('/') ? path : `${path}/`}`;
}
