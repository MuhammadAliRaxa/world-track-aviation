/**
 * Inquiry Service — WorldTrackTravel
 *
 * Endpoints from docs/frontend-api-integration.md § Inquiry.
 * All inquiry APIs are public — no auth token required.
 */

import { apiGet, apiPost } from './api.client';
import type {
  ApiInquiryLookups,
  ApiInquiryType,
  ApiSubmitInquiryRequest,
  ApiSubmitInquiryResponse,
} from '../types/api.types';

export const inquiryService = {
  /**
   * GET /inquiry/lookups
   * Returns dropdown data for inquiry forms:
   * sections, services, room_types, countries, custom_visa_countries,
   * transport_routes, vehicles.
   */
  async getInquiryLookups(): Promise<ApiInquiryLookups | null> {
    try {
      const res = await apiGet<ApiInquiryLookups>('/inquiry/lookups', {
        cache: "no-store",
      } as RequestInit);
      return res.data ?? null;
    } catch {
      return null;
    }
  },

  /**
   * GET /inquiry/types
   * Returns accepted inquiry type definitions.
   */
  async getInquiryTypes(): Promise<ApiInquiryType[]> {
    try {
      const res = await apiGet<ApiInquiryType[]>('/inquiry/types', {
        cache: "no-store",
      } as RequestInit);
      return Array.isArray(res.data) ? res.data : [];
    } catch {
      return [];
    }
  },

  /**
   * POST /inquiry/submit
   * Submits an inquiry. No login required.
   * Returns success response or throws ApiError on failure.
   */
  async submitInquiry(
    data: ApiSubmitInquiryRequest,
  ): Promise<ApiSubmitInquiryResponse> {
    // Note: inquiry/submit does not follow the standard envelope — it returns
    // { message, data, accepted_types, response } directly.
    const raw = await apiPost<ApiSubmitInquiryResponse>('/inquiry/submit', data);
    // Handle both envelope-wrapped and direct response shapes
    if (raw.data && 'message' in raw.data) {
      return raw.data as ApiSubmitInquiryResponse;
    }
    return raw as unknown as ApiSubmitInquiryResponse;
  },
} as const;
