/**
 * Transport Service — WorldTrackTravel
 *
 * Endpoints from docs/frontend-api-integration.md § Transport.
 */

import { apiGet, apiPost } from './api.client';
import type {
  ApiTransportListing,
  ApiTransportRate,
} from '../types/api.types';

export const transportService = {
  /**
   * GET /transport/list
   * Full transport listing including vehicle_types and route/price data.
   * Use this for the transport listing page table/cards.
   */
  async getTransportListing(): Promise<ApiTransportListing | null> {
    try {
      // Transport endpoint returns { vehicle_types, data, response } — not the
      // standard { response, data } envelope. Handle both shapes.
      const raw = await apiGet<ApiTransportListing>('/transport/list', {
        cache: "no-store",
      } as RequestInit);

      // If envelope-unwrapped, raw.data is ApiTransportListing
      if (raw.data && 'vehicle_types' in raw.data) {
        return raw.data;
      }

      // If the endpoint returned the object at root level
      const rootLevel = raw as unknown as ApiTransportListing;
      if (rootLevel.vehicle_types) return rootLevel;

      return null;
    } catch {
      return null;
    }
  },

  /**
   * GET /transport/master/details
   * Vehicle types and transport routes — use for filter UI dropdowns.
   */
  async getTransportMasterDetails(): Promise<unknown> {
    try {
      const res = await apiGet<unknown>('/transport/master/details', {
        cache: "no-store",
      } as RequestInit);
      return res.data;
    } catch {
      return null;
    }
  },

  /**
   * POST /transport/rate
   * Single transport rate for a specific route + vehicle combination.
   * Used for transport detail pages.
   */
  async getSingleTransportRate(
    routeId: number,
    vehicleId: number,
  ): Promise<ApiTransportRate | null> {
    try {
      const res = await apiPost<ApiTransportRate>('/transport/rate', {
        route_id: routeId,
        vehicle_id: vehicleId,
      });
      return res.data ?? null;
    } catch {
      return null;
    }
  },
} as const;
