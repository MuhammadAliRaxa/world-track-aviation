import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { ApiSeoRedirect, ApiSeo404Route } from './types/api.types';

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  'https://admin.worldtracktravel.com/api';

const CACHE_TTL_MS = 60_000; // 60 seconds TTL

interface CachedData<T> {
  data: T;
  expiresAt: number;
}

let redirectsCache: CachedData<ApiSeoRedirect[]> | null = null;
let notFoundRoutesCache: CachedData<ApiSeo404Route[]> | null = null;

async function getRedirects(): Promise<ApiSeoRedirect[]> {
  const now = Date.now();
  if (redirectsCache && redirectsCache.expiresAt > now) {
    return redirectsCache.data;
  }

  try {
    const res = await fetch(`${API_BASE}/seo/redirects`, {
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(3000),
    });
    if (res.ok) {
      const json = await res.json();
      const list = Array.isArray(json?.data) ? json.data : [];
      redirectsCache = { data: list, expiresAt: now + CACHE_TTL_MS };
      return list;
    }
  } catch {
    // Graceful fallback on network timeout/failure
  }

  return redirectsCache?.data || [];
}

async function getNotFoundRoutes(): Promise<ApiSeo404Route[]> {
  const now = Date.now();
  if (notFoundRoutesCache && notFoundRoutesCache.expiresAt > now) {
    return notFoundRoutesCache.data;
  }

  try {
    const res = await fetch(`${API_BASE}/seo/404-routes`, {
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(3000),
    });
    if (res.ok) {
      const json = await res.json();
      const list = Array.isArray(json?.data) ? json.data : [];
      notFoundRoutesCache = { data: list, expiresAt: now + CACHE_TTL_MS };
      return list;
    }
  } catch {
    // Graceful fallback on network timeout/failure
  }

  return notFoundRoutesCache?.data || [];
}

function normalizePath(path: string): string {
  if (!path) return '/';
  const cleaned = path.split('?')[0].split('#')[0].trim();
  if (cleaned.length > 1 && cleaned.endsWith('/')) {
    return cleaned.slice(0, -1);
  }
  return cleaned || '/';
}

/**
 * Next.js 16 Proxy handler.
 * 1. Checks MAINTENANCE_MODE toggle (rewrites all pages to /maintenance with 503).
 * 2. Runs dynamic SEO redirects and 404 fallback routes when site is live.
 */
export async function proxy(request: NextRequest) {
  const isMaintenance = process.env.MAINTENANCE_MODE === 'true';
  const { pathname } = request.nextUrl;

  // ── Maintenance Mode Check ──────────────────────────────────────
  if (isMaintenance) {
    // Always allow Next.js internal static assets, media, favicon, and the maintenance page itself
    if (
      pathname.startsWith('/_next') ||
      pathname.startsWith('/assets') ||
      pathname.startsWith('/static') ||
      pathname.startsWith('/images') ||
      pathname.includes('favicon.ico') ||
      pathname.includes('sitemap') ||
      pathname.includes('robots.txt') ||
      pathname === '/maintenance'
    ) {
      return NextResponse.next();
    }

    // Rewrite all other requests to /maintenance with HTTP 503 Service Unavailable
    const maintenanceUrl = request.nextUrl.clone();
    maintenanceUrl.pathname = '/maintenance';
    return NextResponse.rewrite(maintenanceUrl, {
      status: 503,
      statusText: 'Service Unavailable - Under Maintenance',
      headers: {
        'Retry-After': '3600',
      },
    });
  }

  const currentPath = normalizePath(pathname);

  // ── 1. Dynamic SEO Redirects (/seo/redirects) ───────────────────
  const redirects = await getRedirects();
  for (const rule of redirects) {
    if (rule.is_active && normalizePath(rule.old_url) === currentPath) {
      const statusCode = rule.status_code && [301, 302, 307, 308].includes(rule.status_code)
        ? rule.status_code
        : 301;

      if (rule.new_url.startsWith('http://') || rule.new_url.startsWith('https://')) {
        return NextResponse.redirect(new URL(rule.new_url), statusCode);
      }

      const destinationUrl = new URL(rule.new_url.startsWith('/') ? rule.new_url : `/${rule.new_url}`, request.url);
      destinationUrl.search = request.nextUrl.search;
      return NextResponse.redirect(destinationUrl, statusCode);
    }
  }

  // ── 2. Dynamic 404 Fallback Routes (/seo/404-routes) ───────────
  const fallbackRoutes = await getNotFoundRoutes();
  for (const route of fallbackRoutes) {
    if (route.is_active && normalizePath(route.missing_url) === currentPath) {
      if (route.fallback_url.startsWith('http://') || route.fallback_url.startsWith('https://')) {
        return NextResponse.redirect(new URL(route.fallback_url), 302);
      }

      const destinationUrl = new URL(route.fallback_url.startsWith('/') ? route.fallback_url : `/${route.fallback_url}`, request.url);
      return NextResponse.redirect(destinationUrl, 302);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt
     * - Public assets and static files with extensions (e.g. .svg, .png, .jpg)
     */
    '/((?!api|_next/static|_next/image|assets|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?)$).*)',
  ],
};

export default proxy;
