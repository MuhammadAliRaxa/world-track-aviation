/**
 * Umrah Service — WorldTrackTravel
 *
 * Endpoints from docs/frontend-api-integration.md § Group/Custom Umrah Packages.
 */

import {
  UmrahPackage,
  GroupUmrahPackage,
  UmrahFilterParams,
} from '../types/umrah.types';
import { apiPost, apiGet } from './api.client';
import type {
  ApiGroupUmrahPackage,
  ApiGroupUmrahFilters,
  ApiGroupUmrahLookups,
  ApiCustomUmrahPackage,
  ApiCustomUmrahFilters,
  ApiCustomUmrahLookups,
  ApiPagination,
} from '../types/api.types';

export function normalizeUmrahDetail(raw: any): UmrahPackage | null {
  const item = Array.isArray(raw)
    ? raw[0]
    : (raw?.data && Array.isArray(raw.data) ? raw.data[0] : (raw?.data || raw));
  if (!item || typeof item !== 'object') return null;

  const id = String(item.id || '');
  const title = item.package_name || item.name || item.title || 'Umrah Package';
  const badge = item.category || item.badge || 'UMRAH';
  const categoryKey = (item.category || '').toLowerCase().includes('5') ? 'five_star' : ((item.category || '').toLowerCase().includes('4') ? 'four_star' : 'economy');
  const stars = typeof item.stars === 'number' ? item.stars : (item.category?.includes('5') ? 5 : (item.category?.includes('4') ? 4 : 3));
  const duration = item.duration ? (typeof item.duration === 'number' || !String(item.duration).includes('Day') ? `${item.duration} Days` : item.duration) : '14 Days';
  const tagline = item.short_description || item.tagline || 'Complete Umrah package with hotels, flights, and transfers';

  const rawPrice = item.price || item.prices?.sharing;
  const price = item.price && typeof item.price === 'string' && item.price.startsWith('Rs')
    ? item.price
    : (rawPrice ? `Rs ${Number(rawPrice).toLocaleString()}` : 'Contact for Price');
  const priceNumeric = Number(rawPrice || 0);

  const rawImages = Array.isArray(item.images)
    ? item.images.map((img: any) => typeof img === 'string' ? img : (img?.file || '')).filter(Boolean)
    : [];
  const mainImage = item.image || rawImages[0] || (stars === 5 ? 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80' : 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80');

  const makkahHotel = {
    name: item.makkah_hotel?.name || item.makkahHotel?.name || 'Makkah Hotel',
    distance: item.makkah_hotel?.distance || item.makkahHotel?.distance || 'Walking distance to Haram'
  };

  const madinahHotel = {
    name: item.madina_hotel?.name || item.madinah_hotel?.name || item.madinahHotel?.name || 'Madinah Hotel',
    distance: item.madina_hotel?.distance || item.madinah_hotel?.distance || item.madinahHotel?.distance || 'Walking distance to Prophet\'s Mosque'
  };

  const features = item.features || [
    'Daily International Buffet Breakfast',
    'Electronic Umrah Visa with Health Insurance & Nusuk Permit',
    'Private VIP Airport & Intercity Transfers',
    'Personalized Scholar-guided Ziyarat in Makkah & Madinah'
  ];

  return {
    id,
    title,
    badge,
    categoryKey,
    categoryLabel: `${badge} Umrah package`,
    stars,
    duration,
    tagline,
    image: mainImage,
    makkahHotel,
    madinahHotel,
    features,
    price,
    priceNumeric,
    hotelCategory: `${stars}-Star Accommodation`,
    slug: item.slug || item.seo?.url_slug || String(id),
    description: item.long_description || item.short_description || item.description || '',
    seo: item.seo || null,
  } as unknown as UmrahPackage;
}

export function normalizeGroupUmrahPackage(item: any): GroupUmrahPackage | null {
  if (!item || typeof item !== 'object') return null;

  const id = String(item.id || '');
  const title = item.name || item.title || 'Group Umrah Package';
  const groupTicket = item.group_ticket || {};

  const durationDays = groupTicket.duration
    ? `${groupTicket.duration} Days`
    : (item.duration ? `${item.duration} Days` : '15 Days');

  const airlineCode = item.airline?.code || groupTicket.airline?.code || item.airlineCode || 'SV';
  const airlineName = item.airline?.name || groupTicket.airline?.name || item.airlineName || 'Saudi Arabian Airlines';
  const sector = item.route?.name || groupTicket.route?.name || groupTicket.name || item.sector || 'ISLAMABAD - JEDDAH - ISLAMABAD';
  const seatsLeft = groupTicket.seats_left ?? item.seatsLeft ?? 12;

  const outbound = {
    date: item.departure_date || groupTicket.departure?.date || item.outbound?.date || 'ON REQUEST',
    flightNo: groupTicket.departure?.airline_code || item.outbound?.flightNo || '',
    time: groupTicket.departure?.flight_time
      ? `${groupTicket.departure.flight_time} - ${groupTicket.departure.land_time || ''}`.trim()
      : (item.outbound?.time || ''),
    baggage: groupTicket.departure?.luggage || item.outbound?.baggage || '46 KG (2 Pcs × 23 KG)',
  };

  const inbound = {
    date: groupTicket.arrival?.date || item.inbound?.date || 'CONFIRMED SEATS',
    flightNo: groupTicket.arrival?.airline_code || item.inbound?.flightNo || '',
    time: groupTicket.arrival?.flight_time
      ? `${groupTicket.arrival.flight_time} - ${groupTicket.arrival.land_time || ''}`.trim()
      : (item.inbound?.time || ''),
    baggage: groupTicket.arrival?.luggage || item.inbound?.baggage || '46 KG (2 Pcs × 23 KG)',
  };

  const makkahHotel = {
    name: item.makkah_hotel?.name || item.makkahHotel?.name || 'Makkah Hotel',
    nights: item.makkah_hotel?.nights || item.makkahHotel?.nights || 7,
    shuttle: item.shuttle_service || item.makkah_hotel?.shuttle || item.makkahHotel?.shuttle || 'Shuttle Service',
  };

  const madinahHotel = {
    name: item.madina_hotel?.name || item.madinah_hotel?.name || item.madinahHotel?.name || 'Madinah Hotel',
    nights: item.madina_hotel?.nights || item.madinah_hotel?.nights || item.madinahHotel?.nights || 7,
    shuttle: item.shuttle_service || item.madina_hotel?.shuttle || item.madinahHotel?.shuttle || 'Shuttle Service',
  };

  const rawPrices = item.prices || item.pricing || {};
  const formatPriceVal = (val: any) => {
    if (!val) return 'Call';
    if (typeof val === 'number') return val.toLocaleString('en-PK');
    const num = parseFloat(String(val).replace(/[^0-9.]/g, ''));
    return isNaN(num) ? String(val) : num.toLocaleString('en-PK');
  };

  const pricing = {
    sharing: formatPriceVal(rawPrices.sharing || item.price),
    double: formatPriceVal(rawPrices.double || item.price),
    triple: formatPriceVal(rawPrices.triple || item.price),
    quad: formatPriceVal(rawPrices.quad || item.price),
  };

  const rawPriceNumeric = typeof item.price === 'number' ? item.price : (parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0);
  const displayPrice = item.price
    ? (typeof item.price === 'string' && item.price.startsWith('Rs') ? item.price : `Rs ${rawPriceNumeric.toLocaleString()}`)
    : (rawPrices.sharing ? `Rs ${formatPriceVal(rawPrices.sharing)}` : 'Contact for Price');

  const mainImage = item.image || (Array.isArray(item.images) ? (item.images[0]?.file || item.images[0]) : null) || 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80';

  return {
    id,
    title,
    name: title,
    duration: item.duration,
    durationDays,
    departure_date: item.departure_date || outbound.date,
    airline: item.airline || groupTicket.airline,
    airlineCode,
    airlineName,
    route: item.route || groupTicket.route,
    sector,
    seatsLeft,
    price: displayPrice,
    priceNumeric: rawPriceNumeric,
    image: mainImage,
    image_alt_text: item.image_alt_text || title,
    badge: 'GROUP UMRAH',
    category: 'Group Umrah',
    outbound,
    inbound,
    makkahHotel,
    madinahHotel,
    pricing,
    seo: item.seo || null,
  } as unknown as GroupUmrahPackage;
}

export const umrahService = {
  // ── Public Umrah Packages (listing page: /umrah-packages) ─────────────

  /**
   * Fetch public Umrah packages for the listing page.
   * POST /umrah-packages/list with {} or { filters }.
   */
  async getUmrahPackages(filters?: UmrahFilterParams): Promise<UmrahPackage[]> {
    try {
      const apiFilters: Record<string, any> = {};

      if (filters) {
        if (filters.searchQuery?.trim()) {
          apiFilters.search = filters.searchQuery.trim();
        }
        if (filters.category && filters.category !== 'all') {
          if (filters.category === 'five_star') apiFilters.category = '5 Star';
          else if (filters.category === 'four_star') apiFilters.category = '4 Star';
          else if (filters.category === 'three_star') apiFilters.category = '3 Star';
          else apiFilters.category = filters.category;
        }
        if (filters.priceRange && filters.priceRange !== 'all') {
          apiFilters.price_range = filters.priceRange;
        } else if (filters.maxPrice) {
          apiFilters.price_range = `under_${filters.maxPrice}`;
        }
        if (filters.stars && filters.stars.length > 0) {
          apiFilters.package_rating = filters.stars;
        }
      }

      const res = await apiPost<ApiCustomUmrahPackage[]>(
        '/umrah-packages/list',
        Object.keys(apiFilters).length > 0 ? { filters: apiFilters } : {},
        { cache: "no-store" } as RequestInit,
      );
      const pkgs = Array.isArray(res.data) ? res.data : [];
      const normalized = pkgs.map(normalizeUmrahDetail).filter(Boolean) as unknown as UmrahPackage[];

      return normalized;
    } catch (err) {
      console.error('[umrahService] getUmrahPackages error:', err);
      return [];
    }
  },

  /**
   * Paginated public Umrah listing with full API filter fields.
   * POST /umrah-packages/list with { filters }.
   */
  async getUmrahPackagesPaginated(
    filters: ApiCustomUmrahFilters = {},
  ): Promise<{ packages: ApiCustomUmrahPackage[]; pagination: ApiPagination | undefined }> {
    try {
      const res = await apiPost<ApiCustomUmrahPackage[]>(
        '/umrah-packages/list',
        { filters },
      );
      return {
        packages: Array.isArray(res.data) ? res.data : [],
        pagination: res.pagination,
      };
    } catch {
      return { packages: [], pagination: undefined };
    }
  },

  /**
   * Fetch a single public Umrah package by ID.
   * POST /umrah-packages/list then find by id or slug.
   */
  async getUmrahPackageById(id: string): Promise<UmrahPackage | null> {
    try {
      const res = await apiPost<ApiCustomUmrahPackage[]>(
        '/umrah-packages/list',
        {},
      );
      const list = Array.isArray(res.data) ? res.data : [];
      const found = list.find(
        (p) => String(p.id) === String(id) || p.seo?.url_slug === id,
      );
      if (found) return normalizeUmrahDetail(found);
      return null;
    } catch {
      return null;
    }
  },

  /**
   * GET /umrah-packages/lookups
   * Returns categories and ratings with counts for the public listing filter UI.
   */
  async getUmrahPackageLookups(): Promise<ApiCustomUmrahLookups | null> {
    try {
      const res = await apiGet<ApiCustomUmrahLookups>(
        '/umrah-packages/lookups',
        { cache: "no-store" } as RequestInit,
      );
      return res.data ?? null;
    } catch {
      return null;
    }
  },

  // ── Custom Umrah Packages (calculator/booking flow: /customize-umrah-package) ──

  /**
   * Paginated custom Umrah calculator packages.
   * POST /custom-umrah-packages/list with { filters }.
   */
  async getCustomUmrahPackagesPaginated(
    filters: ApiCustomUmrahFilters = {},
  ): Promise<{ packages: ApiCustomUmrahPackage[]; pagination: ApiPagination | undefined }> {
    try {
      const res = await apiPost<ApiCustomUmrahPackage[]>(
        '/custom-umrah-packages/list',
        { filters },
      );
      return {
        packages: Array.isArray(res.data) ? res.data : [],
        pagination: res.pagination,
      };
    } catch {
      return { packages: [], pagination: undefined };
    }
  },

  /**
   * GET /custom-umrah-packages/lookups
   * Returns categories and ratings with counts for the custom calculator filter UI.
   */
  async getCustomUmrahPackageLookups(): Promise<ApiCustomUmrahLookups | null> {
    try {
      const res = await apiGet<ApiCustomUmrahLookups>(
        '/custom-umrah-packages/lookups',
        { cache: "no-store" } as RequestInit,
      );
      return res.data ?? null;
    } catch {
      return null;
    }
  },

  // ── Group Umrah Packages ──────────────────────────────────────────────

  /**
   * Fetch group Umrah packages.
   * POST /group-umrah-packages/list with {} or { filters }.
   */
  async getGroupUmrahPackages(
    filters?: ApiGroupUmrahFilters,
  ): Promise<GroupUmrahPackage[]> {
    try {
      const body = filters ? { filters } : {};
      const res = await apiPost<ApiGroupUmrahPackage[]>(
        '/group-umrah-packages/list',
        body,
        { cache: "no-store" } as RequestInit,
      );
      const pkgs = Array.isArray(res.data) ? res.data : [];
      return pkgs.map(normalizeGroupUmrahPackage).filter(Boolean) as unknown as GroupUmrahPackage[];
    } catch {
      return [];
    }
  },

  /**
   * Paginated group Umrah listing with full API filter fields.
   */
  async getGroupUmrahPackagesPaginated(
    filters: ApiGroupUmrahFilters = {},
  ): Promise<{ packages: ApiGroupUmrahPackage[]; pagination: ApiPagination | undefined }> {
    try {
      const res = await apiPost<ApiGroupUmrahPackage[]>(
        '/group-umrah-packages/list',
        { filters },
      );
      return {
        packages: Array.isArray(res.data) ? res.data : [],
        pagination: res.pagination,
      };
    } catch {
      return { packages: [], pagination: undefined };
    }
  },

  /**
   * Fetch a single group Umrah package by ID.
   */
  async getGroupUmrahPackageById(id: string): Promise<GroupUmrahPackage | null> {
    try {
      const res = await apiPost<ApiGroupUmrahPackage[]>(
        '/group-umrah-packages/list',
        {},
      );
      const list = Array.isArray(res.data) ? res.data : [];
      const found = list.find(
        (p) => String(p.id) === id || p.seo?.url_slug === id,
      );
      if (found) return normalizeGroupUmrahPackage(found) as unknown as GroupUmrahPackage;
      return null;
    } catch {
      return null;
    }
  },

  /**
   * GET /group-umrah-packages/lookups
   * Returns durations, departure_dates, airlines, routes, sectors for group Umrah.
   */
  async getGroupUmrahLookups(): Promise<ApiGroupUmrahLookups | null> {
    try {
      const res = await apiGet<ApiGroupUmrahLookups>(
        '/group-umrah-packages/lookups',
        { cache: "no-store" } as RequestInit,
      );
      return res.data ?? null;
    } catch {
      return null;
    }
  },
};
