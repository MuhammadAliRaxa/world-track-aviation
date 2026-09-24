/**
 * SEO Service — WorldTrackTravel
 *
 * All SEO API endpoints from docs/frontend-api-integration.md.
 * Use src/lib/seo.ts for cached SEO utilities in page metadata.
 * Use this service for direct/raw SEO API calls (e.g. middleware redirects).
 */

import { apiGet, apiPost } from './api.client';
import type {
  ApiGlobalSeo,
  ApiPageSeo,
  ApiSeoRedirect,
  ApiSeo404Route,
  ApiResponse,
} from '../types/api.types';

export const seoService = {
  /**
   * GET /seo/global
   * Global SEO settings — used as final fallback for all pages.
   */
  async getGlobalSeo(): Promise<ApiGlobalSeo | null> {
    try {
      const res = await apiGet<ApiGlobalSeo>('/seo/global', {
        cache: "no-store",
      } as RequestInit);
      return res.data ?? null;
    } catch {
      return null;
    }
  },

  /**
   * GET /seo/page/{page_key}
   * Page-level SEO for listing and static pages.
   */
  async getPageSeo(pageKey: string): Promise<ApiPageSeo | null> {
    try {
      const res = await apiGet<ApiPageSeo>(`/seo/page/${pageKey}`, {
        cache: "no-store",
      } as RequestInit);
      return res.data ?? null;
    } catch {
      return null;
    }
  },

  /**
   * GET /seo/redirects
   * SEO redirect rules — use in Next.js middleware or next.config redirects.
   */
  async getSeoRedirects(): Promise<ApiSeoRedirect[]> {
    try {
      const res = await apiGet<ApiSeoRedirect[]>('/seo/redirects', {
        cache: "no-store",
      } as RequestInit);
      return Array.isArray(res.data) ? res.data : [];
    } catch {
      return [];
    }
  },

  /**
   * GET /seo/404-routes
   * Fallback routes for missing/deleted dynamic URLs.
   */
  async getSeo404Routes(): Promise<ApiSeo404Route[]> {
    try {
      const res = await apiGet<ApiSeo404Route[]>('/seo/404-routes', {
        cache: "no-store",
      } as RequestInit);
      return Array.isArray(res.data) ? res.data : [];
    } catch {
      return [];
    }
  },

  /**
   * POST /seo/404-log
   * Records 404 hit details for admin panel monitoring.
   */
  async log404(payload: {
    url: string;
    path: string;
    referrer?: string;
    timestamp?: string;
  }): Promise<void> {
    try {
      await apiPost('/seo/404-log', payload);
    } catch {
      // Non-blocking telemetry
    }
  },
} as const;
