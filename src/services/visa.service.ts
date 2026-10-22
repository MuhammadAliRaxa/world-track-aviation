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
  ApiVisaLookups,
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
      const apiFilters: ApiVisaFilters = {
        perPage: filters?.perPage || 50,
      };

      if (filters) {
        if (filters.searchQuery?.trim()) apiFilters.search = filters.searchQuery.trim();
        if (filters.country) apiFilters.country = filters.country;
        if (filters.price_range) apiFilters.price_range = filters.price_range;
        if (filters.nextPage) apiFilters.nextPage = filters.nextPage;
      }

      const { visas } = await this.getVisasPaginated(apiFilters);

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
   * Scalable for 100+ pages:
   * 1. If slug is provided (e.g. "indonesia-5-year-business-evisa"), queries the backend directly
   *    filtered by country, instantly narrowing thousands of records to one country in 1 request.
   * 2. Otherwise fetches with maximum allowed perPage (50).
   * 3. Paginate remaining pages with a safe bound to prevent hanging.
   */
  async getVisaById(id: string): Promise<VisaItem | null> {
    try {
      const cleanId = String(id).trim();

      // 1. If it's an SEO slug, extract country (first slug segment) for instant 1-query lookup
      const isSlug = !/^\d+$/.test(cleanId);
      if (isSlug) {
        const potentialCountry = cleanId.split('-')[0];
        if (potentialCountry && potentialCountry.length > 2) {
          const countryRes = await apiPost<ApiVisa[]>(
            '/visa/list',
            { filters: { country: potentialCountry, perPage: 50 } },
            { cache: 'no-store' } as RequestInit
          );
          const countryList = Array.isArray(countryRes.data) ? countryRes.data : [];
          const found = countryList.find(
            (v) => String(v.id) === cleanId || (v.seo as any)?.url_slug === cleanId,
          );
          if (found) return normalizeVisaDetail(found);
        }
      }

      // 2. Query with perPage: 50 (maximum allowed by API)
      const res = await apiPost<ApiVisa[]>(
        '/visa/list',
        { filters: { perPage: 50 } },
        { cache: 'no-store' } as RequestInit
      );
      const list = Array.isArray(res.data) ? res.data : [];
      let found = list.find(
        (v) => String(v.id) === cleanId || (v.seo as any)?.url_slug === cleanId,
      );
      if (found) return normalizeVisaDetail(found);

      // 3. Fallback for numeric IDs: Iterate remaining pages up to max 10 pages
      const totalPages = Math.min(res.pagination?.total_pages || 1, 10);
      for (let p = 2; p <= totalPages; p++) {
        const nextRes = await apiPost<ApiVisa[]>(
          '/visa/list',
          { filters: { nextPage: p, perPage: 50 } },
          { cache: 'no-store' } as RequestInit
        );
        const nextList = Array.isArray(nextRes.data) ? nextRes.data : [];
        found = nextList.find(
          (v) => String(v.id) === cleanId || (v.seo as any)?.url_slug === cleanId,
        );
        if (found) return normalizeVisaDetail(found);
      }

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
   * Get custom visa countries from GET /visa/lookups (falling back to inquiry lookups).
   */
  async getVisaCountries(): Promise<{ key: string; label: string; count: number }[]> {
    try {
      const lookups = await this.getVisaLookups();
      const lookupCountries = lookups?.countries;
      if (Array.isArray(lookupCountries) && lookupCountries.length > 0) {
        let totalCount = 0;
        const list: { key: string; label: string; count: number }[] = [];
        lookupCountries.forEach((c) => {
          const name = c.value || (c as any).name || (c as any).country || '';
          if (name) {
            const cnt = typeof c.visas_count === 'number' ? c.visas_count : ((c as any).count || 0);
            totalCount += cnt;
            list.push({
              key: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
              label: name,
              count: cnt,
            });
          }
        });
        return [{ key: 'all', label: 'All Countries', count: totalCount }, ...list];
      }

      const res = await apiGet<any>('/inquiry/lookups', { cache: 'no-store' } as RequestInit);
      const countries = res.data?.custom_visa_countries || [];

      let totalCount = 0;
      const list: { key: string; label: string; count: number }[] = [];

      if (Array.isArray(countries)) {
        countries.forEach((c: any) => {
          const name = c.name || c.short_name || '';
          if (name) {
            const cnt = c.count || 0;
            totalCount += cnt;
            list.push({
              key: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
              label: name,
              count: cnt,
            });
          }
        });
      }

      return [{ key: 'all', label: 'All Countries', count: totalCount }, ...list];
    } catch {
      return [{ key: 'all', label: 'All Countries', count: 0 }];
    }
  },

  /**
   * GET /calculator/visa/type
   * Public calculator lookup for visa types dropdown and ROE.
   */
  async getCalculatorVisaTypes(): Promise<{ data: any[]; roe: number }> {
    try {
      const res = await apiGet<any>('/calculator/visa/type', {
        cache: "no-store",
      } as RequestInit);
      return {
        data: Array.isArray(res.data) ? res.data : [],
        roe: Number((res as any)?.roe) || 78,
      };
    } catch {
      return { data: [], roe: 78 };
    }
  },

  /**
   * GET /visa/lookups
   * Returns countries, visa_types, and durations for filter UI.
   */
  async getVisaLookups(): Promise<ApiVisaLookups | null> {
    try {
      const res = await apiGet<ApiVisaLookups>('/visa/lookups', {
        cache: 'no-store',
      } as RequestInit);
      return res.data ?? null;
    } catch {
      return null;
    }
  },
} as const;
