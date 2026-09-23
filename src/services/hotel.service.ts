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
// Real API helpers
// ---------------------------------------------------------------------------

async function fetchHotelListing(
  filters: ApiHotelFilters = {},
): Promise<{ hotels: ApiHotel[]; pagination: ApiPagination | undefined }> {
  try {
    console.log('[hotelService] POST /hotel/minRate with filters:', JSON.stringify({ filters }));
    const res = await apiPost<ApiHotel[]>('/hotel/minRate', { filters }, {
      cache: "no-store",
    } as RequestInit);
    console.log('[hotelService] Got', Array.isArray(res.data) ? res.data.length : 0, 'hotels back');
    return {
      hotels: Array.isArray(res.data) ? res.data : [],
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
  const stars = typeof item.stars === 'number'
    ? item.stars
    : (categoryStarMatch ? parseInt(categoryStarMatch[1], 10) : 5);

  const rawPrice = item.price || item.min_rate;
  const price = rawPrice
    ? (typeof rawPrice === 'number' || (!String(rawPrice).includes('Rs') && !String(rawPrice).includes('SAR')) ? `SAR ${rawPrice}` : String(rawPrice))
    : 'Contact for Price';

  const rawImages = Array.isArray(item.images)
    ? item.images.map((img: any) => typeof img === 'string' ? img : (img?.file || '')).filter(Boolean)
    : [];
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
    ? item.room_rates.map((rr: any, idx: number) => ({
        id: `r${idx + 1}`,
        name: `${rr.room_type || 'Standard'} Bedroom`,
        capacity: ROOM_CAPACITY_MAP[rr.room_type] || '2 Adults',
        price: rr.price && Number(rr.price) > 0 ? `SAR ${rr.price}` : price,
        unit: '/ night',
      }))
    : (Array.isArray(item.roomTypes) && item.roomTypes.length > 0
        ? item.roomTypes
        : [
            { id: 'r1', name: 'Double Bedroom', capacity: '2 Adults', price, unit: '/ night' },
            { id: 'r2', name: 'Triple Bedroom', capacity: '3 Adults', price, unit: '/ night' },
            { id: 'r3', name: 'Quad Bedroom', capacity: '4 Adults', price, unit: '/ night' },
          ]);

  return {
    id,
    name,
    location,
    category,
    address,
    tag: item.tag || (stars >= 5 ? 'TOP RATED' : 'FEATURED'),
    rating,
    reviewsCount,
    stars,
    price,
    priceNumeric: Number(rawPrice) || 0,
    unit: '/ night',
    image: mainImage,
    gallery,
    amenities,
    description,
    highlights: item.highlights || ['High-Speed WiFi', '24/7 Room Service', 'Free Cancellation', '24h Front Desk'],
    roomTypes,
    distance: item.distance,
    available_from: item.available_from,
    lat: item.lat,
    lng: item.lng
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
      const apiFilters: ApiHotelFilters = {};
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

      const { hotels } = await fetchHotelListing(apiFilters);
      let result = hotels.map(normalizeHotelDetail).filter(Boolean) as unknown as Hotel[];

      return result;
    } catch {
      return [];
    }
  },

  /**
   * Fetch a single hotel by ID.
   * GET /hotel/{hotel_id}
   */
  async getHotelById(id: string): Promise<Hotel | null> {
    try {
      const res = await apiGet<unknown>(`/hotel/${id}`, {
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
   * Fetch a single hotel by ID, returning the raw API shape with seo intact.
   * GET /hotel/{hotel_id}
   * Use for buildMetadata() in route pages.
   */
  async getHotelDetail(id: string | number): Promise<ApiHotelDetail | null> {
    try {
      const res = await apiGet<ApiHotelDetail>(`/hotel/${id}`, {
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
      return Array.isArray(res.data) ? res.data : [];
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
