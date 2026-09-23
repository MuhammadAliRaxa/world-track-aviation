/**
 * Content Service — WorldTrackTravel
 *
 * Endpoints from docs/frontend-api-integration.md § Team, Testimonials, Contact Info.
 */

import {
  FaqCategory,
  FaqItem,
  TeamMember,
  StatItem,
} from '../types/content.types';
import { apiGet, apiPost } from './api.client';
import type {
  ApiTeamMember,
  ApiTestimonial,
  ApiTestimonialFilters,
  ApiContactInfo,
} from '../types/api.types';

export const contentService = {
  /**
   * Fetch FAQ items via POST /hotel/faqs.
   */
  async getFaqs(): Promise<{ categories: FaqCategory[]; items: FaqItem[] }> {
    try {
      const res = await apiPost<FaqItem[]>(
        '/hotel/faqs',
        {},
        { cache: "no-store" } as RequestInit,
      );
      return {
        categories: [],
        items: Array.isArray(res.data) ? (res.data as FaqItem[]) : [],
      };
    } catch {
      return { categories: [], items: [] };
    }
  },

  /**
   * GET /team/list
   * Returns team members. Wrapped in { members, stats } for backward compat.
   */
  async getTeam(): Promise<{ members: TeamMember[]; stats: StatItem[] }> {
    try {
      const res = await apiGet<ApiTeamMember[]>('/team/list', {
        cache: "no-store",
      } as RequestInit);
      return {
        members: (Array.isArray(res.data) ? res.data : []) as unknown as TeamMember[],
        stats: [],
      };
    } catch {
      return { members: [], stats: [] };
    }
  },

  /**
   * POST /testimonials/list
   * Send {} for all testimonials or { filters: { category } } for filtered.
   */
  async getTestimonials(
    filters?: ApiTestimonialFilters,
  ): Promise<ApiTestimonial[]> {
    try {
      const body = filters ? { filters } : {};
      const res = await apiPost<ApiTestimonial[]>(
        '/testimonials/list',
        body,
        { cache: "no-store" } as RequestInit,
      );
      return Array.isArray(res.data) ? res.data : [];
    } catch {
      return [];
    }
  },

  /**
   * GET /admin/contact/info
   * Returns offices, hotlines, email, address, WhatsApp, map coordinates.
   */
  async getContactInfo(): Promise<ApiContactInfo | null> {
    try {
      const res = await apiGet<ApiContactInfo>('/admin/contact/info', {
        cache: "no-store",
      } as RequestInit);
      return res.data ?? null;
    } catch {
      return null;
    }
  },
};
