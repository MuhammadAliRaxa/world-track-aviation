/**
 * Hotel Service — WorldTrackTravel
 *
 * Endpoints from docs/frontend-api-integration.md § Hotels.
 */

import { Hotel, HotelFilterParams } from '../types/hotel.types';
import { apiGet, apiPost } from './api.client';
import type {
  ApiHotel,
  ApiHotelDetail,
  ApiHotelLookups,
  ApiHotelRoomType,
  ApiHotelFilters,
  ApiResponse,
  ApiPagination,
} from '../types/api.types';

// ---------------------------------------------------------------------------
// In-memory cache for slug-to-numeric-ID mappings (preserves resolution across 100+ pages)
const slugToIdCache = new Map<string, string>();

function indexHotelSlug(hotel: any): void {
  if (!hotel) return;
  const idStr = String(hotel.id || '');
  if (!idStr) return;

  const urlSlug = hotel.seo?.url_slug || hotel.slug;
  if (urlSlug && typeof urlSlug === 'string') {
    slugToIdCache.set(urlSlug.toLowerCase().trim(), idStr);
  }

  const name = hotel.hotel_name || hotel.name;
  if (name && typeof name === 'string') {
    const slugFromName = name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    if (slugFromName) {
      slugToIdCache.set(slugFromName, idStr);
    }
  }
}

async function fetchHotelListing(
  filters: ApiHotelFilters = {},
): Promise<{ hotels: ApiHotel[]; pagination: ApiPagination | undefined }> {
  try {
    const payloadFilters: ApiHotelFilters = {
      available_only: typeof filters.available_only === 'boolean' ? filters.available_only : false,
      ...filters,
    };
    console.log('[hotelService] POST /hotel/minRate with filters:', JSON.stringify({ filters: payloadFilters }));
    const res = await apiPost<ApiHotel[]>('/hotel/minRate', { filters: payloadFilters }, {
      cache: "no-store",
    } as RequestInit);
    console.log('[hotelService] Got', Array.isArray(res.data) ? res.data.length : 0, 'hotels back');
    const hotels = Array.isArray(res.data) ? res.data : [];
    hotels.forEach(indexHotelSlug);
    return {
      hotels,
      pagination: res.pagination,
    };
  } catch (err) {
    console.error('[hotelService] fetchHotelListing error:', err);
    return { hotels: [], pagination: undefined };
  }
}

export function normalizeHotelDetail(raw: any): Hotel | null {
  const item = Array.isArray(raw)
    ? raw[0]
    : (raw?.data && Array.isArray(raw.data) ? raw.data[0] : (raw?.data || raw));
  if (!item || typeof item !== 'object') return null;
  indexHotelSlug(item);

  const id = String(item.id || '');
  const name = item.hotel_name || item.name || 'Hotel';
  const location = item.hotel_city || item.city || 'Makkah';
  const category = item.category || item.hotel_category || (item.stars ? `${item.stars} Star` : (item.hotel_city || 'Hotels'));
  const address = item.hotel_address || item.address || '';
  const description = item.description || `<p>Experience your stay at ${name} in ${location}.</p>`;

  const ratingVal = String(item.rating || (typeof item.hotel_rating === 'string' ? item.hotel_rating : '') || '8.5');
  const rating = ratingVal.includes('/') ? ratingVal : `${ratingVal}/10`;
  const reviewsCount = item.reviews ? String(item.reviews) : (item.reviewsCount ? String(item.reviewsCount) : '120');

  // Parse stars from category ("5 Star", "4 Star"), hotel_category, item.stars, or star_rating
  const categoryStr = String(item.category || item.hotel_category || item.star_rating || '');
  const categoryStarMatch = categoryStr.match(/^(\d)/);
  const isEconomy = /economy/i.test(categoryStr);
  const stars = typeof item.stars === 'number' && item.stars > 0
    ? item.stars
    : (categoryStarMatch ? parseInt(categoryStarMatch[1], 10) : (isEconomy ? 0 : 5));

  const rawPrice = item.price || item.min_rate;
  const numPrice = Number(String(rawPrice || '').replace(/[^0-9.]/g, ''));
  const price = rawPrice && !isNaN(numPrice) && numPrice > 0
    ? (typeof rawPrice === 'number' || (!String(rawPrice).includes('Rs') && !String(rawPrice).includes('SAR')) ? `SAR ${rawPrice}` : String(rawPrice))
    : 'Rates on Booking';

  const rawImages = Array.isArray(item.images)
    ? item.images.map((img: any) => typeof img === 'string' ? img : (img?.file || '')).filter(Boolean)
    : [];
  // Extract alt_text from the first image object for SEO
  const firstImageObj = Array.isArray(item.images) && item.images.length > 0
    ? (typeof item.images[0] === 'object' ? item.images[0] : null)
    : null;
  const imageAlt = firstImageObj?.alt_text || item.image_alt_text || item.seo?.image_alt || null;
  const mainImage = item.image || rawImages[0] || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80';
  const gallery = rawImages.length > 0 ? rawImages : [mainImage];

  const amenities = Array.isArray(item.facilities)
    ? item.facilities.map((f: any) => typeof f === 'string' ? f : (f?.name || f?.facility || '')).filter(Boolean)
    : (item.amenities || ['Free WiFi', 'Air Condition', '24/7 Front Desk', 'Private Parking']);

  const ROOM_CAPACITY_MAP: Record<string, string> = {
    Double: '2 Adults',
    Triple: '3 Adults',
    Quad: '4 Adults',
    Quint: '5 Adults',
  };

  const roomTypes = Array.isArray(item.room_rates) && item.room_rates.length > 0
    ? (() => {
        const seen = new Set<string>();
        return item.room_rates
          .filter((rr: any) => {
            const type = String(rr.room_type || 'Standard').trim();
            if (seen.has(type)) return false;
            seen.add(type);
            return true;
          })
          .map((rr: any, idx: number) => ({
            id: `r${idx + 1}`,
            name: `${rr.room_type || 'Standard'} Bedroom`,
            capacity: ROOM_CAPACITY_MAP[rr.room_type] || '2 Adults',
            price: rr.price && Number(rr.price) > 0 ? `SAR ${rr.price}` : price,
            unit: '/ night',
          }));
      })()
    : (Array.isArray(item.roomTypes) && item.roomTypes.length > 0
        ? item.roomTypes
        : [
            { id: 'r1', name: 'Standard Room', capacity: '2 Adults', price, unit: '/ night' },
          ]);

  return {
    id,
    name,
    location,
    category,
    address,
    tag: item.tag || (isEconomy ? 'Economy' : (stars >= 5 ? 'TOP RATED' : 'FEATURED')),
    rating,
    reviewsCount,
    stars,
    price,
    priceNumeric: Number(rawPrice) || 0,
    unit: '/ night',
    image: mainImage,
    imageAlt: imageAlt || undefined,
    gallery,
    amenities,
    description,
    highlights: item.highlights || ['High-Speed WiFi', '24/7 Room Service', 'Free Cancellation', '24h Front Desk'],
    roomTypes,
    distance: item.distance,
    available_from: item.available_from,
    lat: item.lat,
    lng: item.lng,
    seo: item.seo || null,
    slug: item.seo?.url_slug || item.slug || '',
  } as unknown as Hotel;
}

// ---------------------------------------------------------------------------
// Service
// ---------------------------------------------------------------------------

export const hotelService = {
  /**
   * Fetch hotels via POST /hotel/minRate.
   * Returns Hotel[] for backward compat with existing component code.
   */
  async getHotels(filters?: HotelFilterParams): Promise<Hotel[]> {
    try {
      const apiFilters: ApiHotelFilters = {
        perPage: 50,
      };
      if (typeof filters?.available_only === 'boolean') {
        apiFilters.available_only = filters.available_only;
      }
      if (filters) {
        if (filters.searchQuery) apiFilters.search = filters.searchQuery;
        if (filters.destination && filters.destination !== 'all') {
          apiFilters.city = filters.destination.charAt(0).toUpperCase() + filters.destination.slice(1);
        }
        if (filters.price_range) apiFilters.price_range = filters.price_range;
        if (filters.stars && filters.stars.length > 0) {
          apiFilters.hotel_rating = filters.stars[0];
          apiFilters.hotel_category = `${filters.stars[0]} Star`;
        }

        if (filters.amenities && filters.amenities.length > 0) {
          const amenityMap: Record<string, number> = {
            wifi: 7, breakfast: 12, pool: 10, shuttle: 1, spa: 15, dining: 14, transfer: 13
          };
          apiFilters.hotel_facilities = filters.amenities.map(a => amenityMap[a]).filter(Boolean);
        }

        if (filters.occupancy && filters.occupancy.length > 0) {
          const occupancyMap: Record<string, number> = {
            double: 2, triple: 1, quad: 3, quint: 4
          };
          apiFilters.room_types = filters.occupancy.map(o => occupancyMap[o]).filter(Boolean);
        }
      }

      const firstPage = await fetchHotelListing(apiFilters);
      const allHotels = [...(firstPage.hotels || [])];

      const totalPages = firstPage.pagination?.total_pages || 1;
      if (totalPages > 1) {
        const remainingPromises = [];
        for (let p = 2; p <= totalPages; p++) {
          remainingPromises.push(fetchHotelListing({ ...apiFilters, nextPage: p }));
        }
        const remainingPages = await Promise.all(remainingPromises);
        remainingPages.forEach((pg) => {
          if (Array.isArray(pg.hotels)) {
            allHotels.push(...pg.hotels);
          }
        });
      }

      let result = allHotels.map(normalizeHotelDetail).filter(Boolean) as unknown as Hotel[];

      return result;
    } catch {
      return [];
    }
  },

  /**
   * Helper to resolve a numeric hotel ID from either an ID or an SEO slug.
   * Scalable to 100+ pages of database records:
   * 1. Direct numeric check (/^\d+$/)
   * 2. Prefix ID check (/^(\d+)-/)
   * 3. In-memory Slug Cache (0ms, 0 API calls)
   * 4. Targeted backend database search via POST /hotel/minRate with filters.search & perPage: 50
   */
  async resolveHotelId(idOrSlug: string | number): Promise<string> {
    const raw = String(idOrSlug || '').trim().replace(/^\/+|\/+$/g, '');
    if (!raw) return '';

    // 1. Direct numeric ID (e.g. "18")
    if (/^\d+$/.test(raw)) return raw;

    // 2. Numeric ID with slug prefix (e.g. "18-maidan-al-bait-madina")
    const prefixMatch = raw.match(/^(\d+)-/);
    if (prefixMatch) return prefixMatch[1];

    const rawLower = raw.toLowerCase();

    // 3. Check in-memory slug cache (fast path, 0 API calls)
    if (slugToIdCache.has(rawLower)) {
      return slugToIdCache.get(rawLower)!;
    }

    try {
      // 4. Targeted backend database search (1 API call across all pages in database)
      const searchQuery = raw.replace(/[-_]+/g, ' ').trim();
      const { hotels: searchHotels } = await fetchHotelListing({
        search: searchQuery,
        perPage: 50,
      });

      let found = searchHotels.find(
        (h) =>
          String(h.id) === raw ||
          h.seo?.url_slug?.toLowerCase().trim() === rawLower ||
          (h as any).slug?.toLowerCase().trim() === rawLower,
      );

      // Check normalized name match if exact slug wasn't in SEO object
      if (!found) {
        const cleanQuery = searchQuery.toLowerCase().replace(/[^a-z0-9]/g, '');
        found = searchHotels.find((h) => {
          const hName = (h.hotel_name || (h as any).name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
          return hName && (hName === cleanQuery || hName.includes(cleanQuery) || cleanQuery.includes(hName));
        });
      }

      if (found) {
        const resolvedId = String(found.id);
        slugToIdCache.set(rawLower, resolvedId);
        return resolvedId;
      }

      // 5. Fallback: if search had extra words (e.g. "hotel", "makkah", "madina"), strip them and retry
      const strippedQuery = rawLower
        .replace(/\b(hotel|makkah|madina|madinah)\b/g, '')
        .replace(/[-_]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

      if (strippedQuery && strippedQuery !== searchQuery.toLowerCase()) {
        const { hotels: fallbackHotels } = await fetchHotelListing({
          search: strippedQuery,
          perPage: 50,
        });

        const fallbackFound = fallbackHotels.find(
          (h) =>
            String(h.id) === raw ||
            h.seo?.url_slug?.toLowerCase().trim() === rawLower ||
            (h as any).slug?.toLowerCase().trim() === rawLower,
        );

        if (fallbackFound) {
          const resolvedId = String(fallbackFound.id);
          slugToIdCache.set(rawLower, resolvedId);
          return resolvedId;
        }
      }

      // 6. Last resort: default listing (perPage: 50)
      const { hotels } = await fetchHotelListing({ perPage: 50 });
      const lastFound = hotels.find(
        (h) =>
          String(h.id) === raw ||
          h.seo?.url_slug?.toLowerCase().trim() === rawLower ||
          (h as any).slug?.toLowerCase().trim() === rawLower,
      );
      if (lastFound) {
        const resolvedId = String(lastFound.id);
        slugToIdCache.set(rawLower, resolvedId);
        return resolvedId;
      }

      return raw;
    } catch {
      return raw;
    }
  },

  /**
   * Fetch a single hotel by ID or SEO slug.
   * GET /hotel/{hotel_id}
   */
  async getHotelById(idOrSlug: string): Promise<Hotel | null> {
    try {
      const targetId = await this.resolveHotelId(idOrSlug);
      const res = await apiGet<unknown>(`/hotel/${targetId}`, {
        cache: "no-store",
      } as RequestInit);
      const normalized = normalizeHotelDetail(res.data || res);
      if (normalized) return normalized;
      return null;
    } catch {
      return null;
    }
  },

  /**
   * Fetch a single hotel by ID or SEO slug, returning the raw API shape with seo intact.
   * GET /hotel/{hotel_id}
   * Use for buildMetadata() in route pages.
   */
  async getHotelDetail(idOrSlug: string | number): Promise<ApiHotelDetail | null> {
    try {
      const targetId = await this.resolveHotelId(idOrSlug);
      const res = await apiGet<ApiHotelDetail>(`/hotel/${targetId}`, {
        cache: "no-store",
      } as RequestInit);
      const item = res.data;
      if (!item || typeof item !== 'object') return null;
      // Handle case where API wraps in array
      if (Array.isArray(item)) return (item as unknown as ApiHotelDetail[])[0] ?? null;
      return item;
    } catch {
      return null;
    }
  },

  // ── Real-API-only methods ──────────────────────────────────────────────

  /**
   * POST /hotel/minRate with pagination filters.
   * Returns typed ApiHotel[] + pagination for paginated listing UI.
   */
  async getHotelsPaginated(
    filters: ApiHotelFilters = {},
  ): Promise<{ hotels: ApiHotel[]; pagination: ApiPagination | undefined }> {
    return fetchHotelListing(filters);
  },

  /**
   * GET /hotel/lookups
   * Returns cities, ratings, facilities, room types for filter UI.
   */
  async getHotelLookups(): Promise<ApiHotelLookups | null> {
    try {
      const res = await apiGet<ApiHotelLookups>('/hotel/lookups', {
        cache: "no-store",
      } as RequestInit);
      return res.data ?? null;
    } catch {
      return null;
    }
  },

  /**
   * GET /hotel/room/type/{hotel_id}
   */
  async getHotelRoomTypes(hotelId: string | number): Promise<ApiHotelRoomType[]> {
    try {
      const res = await apiGet<ApiHotelRoomType[]>(
        `/hotel/room/type/${hotelId}`,
        { cache: "no-store" } as RequestInit,
      );
      if (Array.isArray(res?.data)) return res.data;
      if (Array.isArray(res)) return res;
      return [];
    } catch {
      return [];
    }
  },

  /**
   * POST /hotel/room/rate
   */
  async getHotelRoomRates(filters: Record<string, unknown> = {}): Promise<unknown[]> {
    try {
      const res = await apiPost<unknown[]>('/hotel/room/rate', filters);
      return Array.isArray(res.data) ? res.data : [];
    } catch {
      return [];
    }
  },

  /**
   * POST /hotel/faqs
   * Send {} for all FAQs or { filters: { category, search } } for filtered.
   */
  async getHotelFaqs(filters?: { category?: string; search?: string }): Promise<unknown[]> {
    try {
      const body = filters ? { filters } : {};
      const res = await apiPost<unknown[]>('/hotel/faqs', body, {
        cache: "no-store",
      } as RequestInit);
      return Array.isArray(res.data) ? res.data : [];
    } catch {
      return [];
    }
  },

  /**
   * POST /calculator/hotel
   * Public calculator lookup for hotels.
   */
  async getCalculatorHotels(payload: Record<string, unknown> = {}): Promise<unknown[]> {
    try {
      const res = await apiPost<unknown[]>('/calculator/hotel', payload);
      return Array.isArray(res.data) ? res.data : [];
    } catch {
      return [];
    }
  },

  /**
   * POST /calculator/room
   * Public calculator lookup for rooms.
   */
  async getCalculatorRooms(payload: Record<string, unknown> = {}): Promise<unknown[]> {
    try {
      const res = await apiPost<unknown[]>('/calculator/room', payload);
      return Array.isArray(res.data) ? res.data : [];
    } catch {
      return [];
    }
  },
} as const;
