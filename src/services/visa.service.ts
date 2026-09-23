/**
 * Visa Service — WorldTrackTravel
 *
 * Endpoints:
 * - POST /visa/list (listing with filters and pagination)
 * - POST /inquiry/submit (type: "visa")
 * - GET  /inquiry/lookups (custom_visa_countries)
 *
 * Visas support item-level SEO for detail pages.
 * SEO fallback chain:
 *   1. Item-level seo (visa detail pages)
 *   2. GET /api/seo/page/visas (listing/static page)
 *   3. GET /api/seo/global (final fallback)
 */

import { VisaItem, VisaCategory, VisaFilterParams } from '../types/visa.types';
import { apiPost, apiGet } from './api.client';
import type {
  ApiVisa,
  ApiVisaFilters,
  ApiPagination,
} from '../types/api.types';

export function normalizeVisaDetail(item: any): VisaItem | null {
  if (!item || typeof item !== 'object') return null;

  const id = String(item.id || '');
  const title = item.title || item.name || 'Tourist Visit Visa';
  const country = item.country || 'International';

  const rawPrice = item.rate || item.price;
  const priceNumeric = rawPrice ? parseFloat(String(rawPrice)) : 0;
  const pricePKR = priceNumeric > 0 ? priceNumeric.toLocaleString('en-PK') : String(rawPrice || '0');

  const duration = item.processing_time || item.duration || '2 - 3 Days';
  const badge = item.visa_type || item.badge || 'E-VISA';

  // Keep raw HTML for aboutText so the detail page can render it properly
  const rawDescription = item.description || '';
  const plainDescription = rawDescription.replace(/<[^>]*>/g, '').trim();

  return {
    id,
    country,
    countryKey: country.toLowerCase().replace(/\s+/g, '-'),
    title,
    badge,
    category: item.category || 'middle-east',
    isFastTrack: item.isFastTrack ?? true,
    duration,
    priceUSD: priceNumeric > 0 ? Math.round(priceNumeric / 278) : 0,
    pricePKR,
    priceNumeric,
    image: item.image || null,
    imageAltText: item.image_alt_text || null,
    validity: item.validity || '90 Days',
    stayDuration: item.stay_duration || '30 Days',
    processingType: item.visa_type ? `${item.visa_type} Electronic Visa (e-Visa)` : 'Express Electronic Visa (e-Visa)',
    heroTitle: title,
    detailTitle: title,
    eyebrow: country.toUpperCase(),
    detailDesc: item.sub_title || plainDescription || `Official ${country} visit visa for tourism, business meetings, and travel.`,
    aboutTitle: `About ${title}`,
    // Store raw HTML — components use dangerouslySetInnerHTML
    aboutText: rawDescription || `The official ${country} electronic tourist visa grants fast, reliable entry with zero embassy visits required.`,
    specs: {
      processingTime: item.processing_time || item.duration || '3 - 7 Days',
      stayDuration: item.stay_duration || item.stayDuration || '30 - 90 Days',
      entryType: item.entry_type || item.entryType || 'Single / Multiple Entry',
      validity: item.validity || '90 Days - 1 Year',
      visaType: item.visa_type || item.processingType || badge || 'Electronic e-Visa',
      price: priceNumeric > 0 ? `Rs ${pricePKR}` : `From Rs ${pricePKR}`,
      pricePKR: `Rs ${pricePKR}`,
    },
    eligibility: item.eligibility || [
      'Valid passport with minimum 6 months validity from travel date.',
      'Confirmed return flight tickets and hotel booking confirmation.'
    ],
    requiredDocs: item.requiredDocs || [
      'Passport Scanned Copy (First page with clear photo & signature)',
      'Passport Size Photograph (White background, 35mm x 45mm)',
      'CNIC Front & Back Copy'
    ],
    faqs: item.faqs || [
      { q: `How long does it take to process the ${title}?`, a: `Standard processing takes ${duration}.` },
      { q: 'Is embassy visit required?', a: 'No, the visa is 100% electronic and sent directly to your email.' }
    ],
    seo: item.seo || null,
  } as unknown as VisaItem;
}

export const visaService = {
  /**
   * Paginated visa listing with full API filter fields.
   * - Request without filters: {}
   * - Request with filters: { filters: { search, name, country, price_range, nextPage, perPage } }
   */
  async getVisasPaginated(
    filters?: ApiVisaFilters,
  ): Promise<{
    visas: VisaItem[];
    rawVisas: ApiVisa[];
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

      const res = await apiPost<ApiVisa[]>(
        '/visa/list',
        body,
        { cache: 'no-store' } as RequestInit,
      );

      const rawVisas = Array.isArray(res.data) ? res.data : [];
      return {
        visas: rawVisas.map(normalizeVisaDetail).filter(Boolean) as VisaItem[],
        rawVisas,
        pagination: res.pagination,
      };
    } catch (err) {
      console.error('[visaService] getVisasPaginated error:', err);
      return { visas: [], rawVisas: [], pagination: undefined };
    }
  },

  /**
   * Fetch all visas via POST /visa/list.
   * Returns VisaItem[] for backward compat with existing UI.
   */
  async getVisas(filters?: VisaFilterParams): Promise<VisaItem[]> {
    try {
      const apiFilters: ApiVisaFilters = {};

      if (filters) {
        if (filters.searchQuery?.trim()) apiFilters.search = filters.searchQuery.trim();
        if (filters.country) apiFilters.country = filters.country;
        if (filters.price_range) apiFilters.price_range = filters.price_range;
        if (filters.nextPage) apiFilters.nextPage = filters.nextPage;
        if (filters.perPage) apiFilters.perPage = filters.perPage;
      }

      const { visas } = await this.getVisasPaginated(
        Object.keys(apiFilters).length > 0 ? apiFilters : undefined,
      );

      // Client-side category filter (backwards compat)
      let result = visas;
      if (filters?.category && filters.category !== 'all' && result.length > 0) {
        if (filters.category === 'fast-track') {
          result = result.filter((v) => v.isFastTrack);
        } else {
          result = result.filter((v) => v.category === filters.category);
        }
      }

      return result;
    } catch {
      return [];
    }
  },

  /**
   * Fetch a single visa item by ID / slug.
   */
  async getVisaById(id: string): Promise<VisaItem | null> {
    try {
      const res = await apiPost<ApiVisa[]>('/visa/list', {}, { cache: 'no-store' } as RequestInit);
      const list = Array.isArray(res.data) ? res.data : [];
      const found = list.find(
        (v) => String(v.id) === id || (v.seo as any)?.url_slug === id,
      );
      if (found) return normalizeVisaDetail(found);
      return null;
    } catch {
      return null;
    }
  },

  /**
   * Get visa categories.
   */
  async getCategories(): Promise<VisaCategory[]> {
    return [];
  },

  /**
   * Get custom visa countries from inquiry lookups.
   * GET /inquiry/lookups → data.custom_visa_countries
   */
  async getVisaCountries(): Promise<{ key: string; label: string; count: number }[]> {
    try {
      const res = await apiGet<any>('/inquiry/lookups', { cache: 'no-store' } as RequestInit);
      const countries = res.data?.custom_visa_countries || [];

      const list: { key: string; label: string; count: number }[] = [
        { key: 'all', label: 'All Countries', count: 0 },
      ];

      if (Array.isArray(countries)) {
        countries.forEach((c: any) => {
          const name = c.name || c.short_name || '';
          if (name) {
            list.push({
              key: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
              label: name,
              count: c.count || 0,
            });
          }
        });
      }

      return list;
    } catch {
      return [{ key: 'all', label: 'All Countries', count: 0 }];
    }
  },

  /**
   * GET /calculator/visa/type
   * Public calculator lookup for visa types dropdown.
   */
  async getCalculatorVisaTypes(): Promise<unknown[]> {
    try {
      const res = await apiGet<unknown[]>('/calculator/visa/type', {
        cache: "no-store",
      } as RequestInit);
      return Array.isArray(res.data) ? res.data : [];
    } catch {
      return [];
    }
  },
} as const;
