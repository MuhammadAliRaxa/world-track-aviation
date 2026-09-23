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
  { revalidate: false, tags: ['seo', 'global-seo'] },
);

/**
 * Fetches page-level SEO for listing/static pages. Cached for 1 hour.
 * @param pageKey — one of: home, about-us, contact-us, hotels, visas, transport,
 *                   tours, blogs, umrah-packages, custom-umrah-packages, group-umrah-packages, group-tickets
 */
export const fetchPageSeo = unstable_cache(
  _fetchPageSeo,
  ['page-seo'],
  { revalidate: false, tags: ['seo', 'page-seo'] },
);

// ---------------------------------------------------------------------------
// Metadata builder
// ---------------------------------------------------------------------------

export interface BuildMetadataOptions {
  /** Item-level seo (highest priority). */
  itemSeo?: ApiSeoObject | null;
  /** Page key for /seo/page/{key} lookup (used when itemSeo is null). */
  pageKey?: string;
  /** Additional path segment for canonical URL normalization (e.g. '/hotels/my-slug'). */
  canonicalPath?: string;
  /** Fallback title if all SEO sources are null. */
  fallbackTitle?: string;
  /** Fallback description if all SEO sources are null. */
  fallbackDescription?: string;
}

/**
 * Builds a Next.js Metadata object from the documented fallback chain:
 * item SEO → page SEO → global SEO → hardcoded defaults.
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

  const title = pick(
    itemSeo?.seo_title,
    pageSeo?.seo_title,
    global?.default_site_seo_title,
    fallbackTitle,
  );

  const description = pick(
    itemSeo?.meta_description,
    pageSeo?.meta_description,
    global?.default_site_seo_description,
    fallbackDescription,
  );

  const canonicalUrl = buildCanonicalUrl(
    pick(
      itemSeo?.canonical_url,
      pageSeo?.canonical_url,
      canonicalPath
        ? canonicalPath.startsWith('http://') || canonicalPath.startsWith('https://')
          ? canonicalPath
          : `${SITE_CONFIG.baseUrl}${canonicalPath}`
        : undefined,
      global?.default_canonical_url,
      SITE_CONFIG.baseUrl,
    ),
  );

  const robotsIndex = pick(
    itemSeo?.robots_index,
    pageSeo?.robots_index,
    global?.default_robots_index,
    'index',
  );

  const robotsFollow = pick(
    itemSeo?.robots_follow,
    pageSeo?.robots_follow,
    global?.default_robots_follow,
    'follow',
  );

  const ogTitle = pick(
    itemSeo?.og_title,
    pageSeo?.og_title,
    global?.default_og_title,
    title,
  );

  const ogDescription = pick(
    itemSeo?.og_description,
    pageSeo?.og_description,
    global?.default_og_description,
    description,
  );

  const ogImage = pick(
    itemSeo?.og_image,
    pageSeo?.og_image,
    global?.default_og_image,
  );

  const metadata: Metadata = {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: robotsIndex === 'index',
      follow: robotsFollow === 'follow',
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
 * Normalizes a canonical URL to be absolute and without trailing slash.
 * If given a relative path, prepends SITE_CONFIG.baseUrl.
 */
export function buildCanonicalUrl(urlOrPath: string): string {
  if (!urlOrPath) return SITE_CONFIG.baseUrl;

  // Already absolute
  if (urlOrPath.startsWith('http://') || urlOrPath.startsWith('https://')) {
    return urlOrPath.replace(/\/$/, '');
  }

  // Relative path
  const base = SITE_CONFIG.baseUrl.replace(/\/$/, '');
  const path = urlOrPath.startsWith('/') ? urlOrPath : `/${urlOrPath}`;
  return `${base}${path}`.replace(/\/$/, '');
}
