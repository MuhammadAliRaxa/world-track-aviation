/**
 * Tour Service — WorldTrackTravel
 *
 * Endpoints:
 * - POST /tour/list (listing with filters and pagination)
 * - GET  /tour/lookups (destinations, ratings, tour_facilities)
 * - POST /inquiry/submit (tour inquiry)
 *
 * Tours support item-level SEO for detail pages.
 * SEO fallback chain:
 *   1. Item-level seo (tour detail pages)
 *   2. GET /api/seo/page/tours (listing/static page)
 *   3. GET /api/seo/global (final fallback)
 */

import { TourPackage, TourFilterParams } from '../types/tour.types';
import { apiPost, apiGet } from './api.client';
import type {
  ApiTour,
  ApiTourFilters,
  ApiTourLookups,
  ApiPagination,
} from '../types/api.types';

const FACILITY_ICON_MAP: Record<string, string> = {
  'hotel': 'hotel', 'hotel stay': 'hotel',
  'visa': 'visa', 'tour visa': 'visa',
  'air ticket': 'air', 'airfare': 'air', 'flight': 'air',
  'pick & drop': 'transfer', 'airport transfer': 'transfer', 'transfer': 'transfer',
  'insurance': 'insurance', 'travel insurance': 'insurance',
};

export function normalizeTourDetail(item: any): TourPackage | null {
  if (!item || typeof item !== 'object') return null;

  const id = String(item.id || '');
  const title = item.name || item.title || 'Tour Package';
  const destination = item.city || item.location?.split(',')[0]?.trim() || 'Dubai';
  const country = item.country || 'UAE';
  const location = item.location || `${destination}, ${country}`;

  const rawPrice = item.price;
  const priceNumeric = typeof rawPrice === 'string' ? parseFloat(rawPrice) : (typeof rawPrice === 'number' ? rawPrice : 0);
  const pricePKR = priceNumeric > 0 ? priceNumeric.toLocaleString('en-PK') : String(rawPrice || '0');

  const rating = typeof item.rating === 'number' ? item.rating : (parseFloat(item.rating || '0') || 0);
  const reviewCount = item.reviewCount || item.reviews || 0;
  const stars = typeof item.stars === 'number' ? item.stars : Math.round(rating);
  const duration = item.duration || (item.days && item.nights ? `${item.days} Days / ${item.nights} Nights` : '5 Days / 4 Nights');
  const image = item.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80';

  const packageIncludes = Array.isArray(item.facilities) && item.facilities.length > 0
    ? item.facilities.map((f: string) => ({
        icon: FACILITY_ICON_MAP[f.toLowerCase()] || 'hotel',
        label: f,
      }))
    : (Array.isArray(item.packageIncludes) ? item.packageIncludes : []);

  const rawSlug = item.seo?.url_slug || item.slug;
  const slug = rawSlug
    ? String(rawSlug).replace(/^\/?(tours|tour-packages)\//, '').replace(/^\/+|\/+$/g, '')
    : id;

  return {
    id,
    slug,
    title,
    destination,
    location,
    country,
    duration,
    days: item.days || undefined,
    nights: item.nights || undefined,
    pricePKR,
    priceLabel: `Rs ${pricePKR}`,
    priceUSD: priceNumeric > 0 ? Math.round(priceNumeric / 278) : 0,
    rating,
    reviewCount,
    stars,
    image,
    imageAltText: item.image_alt_text || null,
    badge: item.badge || 'POPULAR TOUR',
    packageIncludes,
    tags: [],
    inclusions: Array.isArray(item.facilities) ? item.facilities : [],
    description: item.description || '',
    seo: item.seo || null,
  } as unknown as TourPackage;
}

export const tourService = {
  /**
   * Paginated tour listing with full API filter fields.
   * - Request without filters: {}
   * - Request with filters: { filters: { search, location, city, country, price_range, rating, nextPage, perPage } }
   */
  async getToursPaginated(
    filters?: ApiTourFilters,
  ): Promise<{
    tours: TourPackage[];
    rawTours: ApiTour[];
    pagination: ApiPagination | undefined;
  }> {
    try {
      const hasFilters =
        filters &&
        Object.entries(filters).some(([, v]) => {
          if (v === undefined || v === null || v === '') return false;
          if (Array.isArray(v)) return v.length > 0;
          return true;
        });

      const body = hasFilters ? { filters } : {};

      const res = await apiPost<ApiTour[]>(
        '/tour/list',
        body,
        { cache: 'no-store' } as RequestInit,
      );

      const rawTours = Array.isArray(res.data) ? res.data : [];
      return {
        tours: rawTours.map(normalizeTourDetail).filter(Boolean) as TourPackage[],
        rawTours,
        pagination: res.pagination,
      };
    } catch (err) {
      console.error('[tourService] getToursPaginated error:', err);
      return { tours: [], rawTours: [], pagination: undefined };
    }
  },

  /**
   * Fetch tours via POST /tour/list.
   */
  async getTours(filters?: TourFilterParams): Promise<TourPackage[]> {
    try {
      const apiFilters: ApiTourFilters = {};

      if (filters) {
        if (filters.searchQuery?.trim()) {
          apiFilters.search = filters.searchQuery.trim();
        }
        if (filters.destination && filters.destination !== 'all') {
          // Parse "City, Country" format
          const parts = filters.destination.split(',');
          apiFilters.city = parts[0].trim();
          if (parts[1]) apiFilters.country = parts[1].trim();
        }
        if (filters.city) apiFilters.city = filters.city;
        if (filters.country) apiFilters.country = filters.country;
        if (filters.priceRange && filters.priceRange !== 'all') {
          apiFilters.price_range = filters.priceRange;
        }
        if (filters.rating) {
          apiFilters.rating = filters.rating;
        } else if (filters.stars && filters.stars.length > 0) {
          apiFilters.rating = filters.stars[0];
        }
        if (filters.nextPage) apiFilters.nextPage = filters.nextPage;
        if (filters.perPage) apiFilters.perPage = filters.perPage;
      }

      const { tours } = await this.getToursPaginated(
        Object.keys(apiFilters).length > 0 ? apiFilters : undefined,
      );
      return tours;
    } catch (err) {
      console.error('[tourService] getTours error:', err);
      return [];
    }
  },

  async getTourById(id: string): Promise<TourPackage | null> {
    try {
      const rawInput = String(id || '').trim();
      const decodedInput = decodeURIComponent(rawInput).trim().toLowerCase();
      const cleanTarget = decodedInput
        .replace(/^\/?(tours|tour-packages)\//i, '')
        .replace(/^\/+|\/+$/g, '');

      const res = await apiPost<ApiTour[]>('/tour/list', {}, { cache: 'no-store' } as RequestInit);
      const list = Array.isArray(res.data) ? res.data : [];
      const found = list.find((t) => {
        if (String(t.id) === rawInput || String(t.id) === cleanTarget) return true;
        const apiSlug = (t.seo as any)?.url_slug || (t as any)?.slug || t.name;
        if (!apiSlug) return false;
        const decodedApi = decodeURIComponent(String(apiSlug)).trim().toLowerCase();
        const cleanApi = decodedApi
          .replace(/^\/?(tours|tour-packages)\//i, '')
          .replace(/^\/+|\/+$/g, '');
        return (
          decodedApi === decodedInput ||
          cleanApi === cleanTarget ||
          cleanApi === decodedInput ||
          decodedApi === cleanTarget
        );
      });
      if (found) return normalizeTourDetail(found);
      return null;
    } catch {
      return null;
    }
  },

  /**
   * GET /tour/lookups
   * Returns destinations, ratings, tour_facilities for filter UI.
   */
  async getTourLookups(): Promise<ApiTourLookups | null> {
    try {
      const res = await apiGet<ApiTourLookups>('/tour/lookups', {
        cache: 'no-store',
      } as RequestInit);
      return res.data ?? null;
    } catch {
      return null;
    }
  },

  /**
   * Get destinations from lookups API.
   */
  async getDestinations(): Promise<{ key: string; label: string; count: number }[]> {
    try {
      const lookups = await this.getTourLookups();
      if (!lookups) return [{ key: 'all', label: 'All Destinations', count: 0 }];

      const destinations: { key: string; label: string; count: number }[] = [
        { key: 'all', label: 'All Destinations', count: lookups.all_destinations_count || 0 },
      ];

      if (Array.isArray(lookups.destinations)) {
        lookups.destinations.forEach((d) => {
          destinations.push({
            key: d.name || `${d.city}, ${d.country}`,
            label: d.name || `${d.city}, ${d.country}`,
            count: d.tours_count || 0,
          });
        });
      }

      return destinations;
    } catch {
      return [{ key: 'all', label: 'All Destinations', count: 0 }];
    }
  },

  /**
   * Get rating options from lookups API.
   */
  async getRatings(): Promise<{ value: string | number; count: number }[]> {
    try {
      const lookups = await this.getTourLookups();
      if (!lookups || !Array.isArray(lookups.ratings)) return [];
      return lookups.ratings.map((r) => ({
        value: r.value,
        count: r.tours_count || 0,
      }));
    } catch {
      return [];
    }
  },
} as const;
