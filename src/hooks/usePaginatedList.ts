'use client';

/**
 * usePaginatedList — WorldTrackTravel
 *
 * Reusable client-side hook for all paginated listing pages (hotels, blogs,
 * tours, visas, umrah packages, group tickets, etc.).
 *
 * Features:
 * - First page fetch + load more
 * - Active filter state (filter change resets to page 1)
 * - Duplicate request prevention
 * - Rapid click protection
 * - Correct empty / end-of-list / error states
 * - Retry support
 */

import { useState, useCallback, useRef } from 'react';
import type { ApiPagination } from '../types/api.types';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PaginatedResult<T> {
  items: T[];
  pagination: ApiPagination | undefined;
}

type FetchFn<T, F> = (filters: F, nextPage?: number | null) => Promise<PaginatedResult<T>>;

interface UsePaginatedListOptions<T, F> {
  /** Function that calls the API and returns { items, pagination }. */
  fetchFn: FetchFn<T, F>;
  /** Initial items to pre-populate (from server-side props). */
  initialItems?: T[];
  /** Initial pagination state. */
  initialPagination?: ApiPagination;
  /** Initial filter values. */
  initialFilters?: F;
  /** Items per page. Defaults to 12. */
  perPage?: number;
}

interface UsePaginatedListReturn<T, F> {
  /** Current list of items (accumulated across pages). */
  items: T[];
  /** Whether the first/reset load is in progress. */
  isLoading: boolean;
  /** Whether a load-more request is in progress. */
  isLoadingMore: boolean;
  /** Whether more pages are available. */
  hasMore: boolean;
  /** Current error message, if any. */
  error: string | null;
  /** Current active filters. */
  filters: F;
  /** Update filters — resets the list to page 1 and re-fetches. */
  setFilters: (newFilters: F) => void;
  /** Load the next page while preserving active filters. */
  loadMore: () => void;
  /** Retry the last failed request. */
  retry: () => void;
  /** Pagination metadata from the last successful response. */
  pagination: ApiPagination | undefined;
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function usePaginatedList<T, F extends Record<string, unknown>>({
  fetchFn,
  initialItems = [],
  initialPagination,
  initialFilters,
  perPage = 12,
}: UsePaginatedListOptions<T, F>): UsePaginatedListReturn<T, F> {
  const emptyFilters = (initialFilters ?? {}) as F;

  const [items, setItems] = useState<T[]>(initialItems);
  const [pagination, setPagination] = useState<ApiPagination | undefined>(
    initialPagination,
  );
  const [filters, setFiltersState] = useState<F>(emptyFilters);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Track in-flight request to prevent duplicates
  const inFlightRef = useRef(false);
  // Track the next-page to load for retry
  const retryRef = useRef<{ filters: F; nextPage: number | null | undefined }>(
    { filters: emptyFilters, nextPage: undefined },
  );

  const hasMore = Boolean(
    pagination?.has_more && pagination.nextPage !== null,
  );

  // ── Internal fetch ──────────────────────────────────────────────────────

  const doFetch = useCallback(
    async (
      activeFilters: F,
      nextPage: number | null | undefined,
      isLoadMore: boolean,
    ) => {
      if (inFlightRef.current) return;
      inFlightRef.current = true;

      retryRef.current = { filters: activeFilters, nextPage };

      if (isLoadMore) {
        setIsLoadingMore(true);
      } else {
        setIsLoading(true);
        setItems([]);
      }
      setError(null);

      try {
        const result = await fetchFn(activeFilters, nextPage ?? null);

        setItems((prev) => {
          const incoming = result.items ?? [];
          if (isLoadMore) {
            // Deduplicate by reference equality
            const existingSet = new Set(prev);
            const newItems = incoming.filter((i) => !existingSet.has(i));
            return [...prev, ...newItems];
          }
          return incoming;
        });

        setPagination(result.pagination);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'Failed to load data.';
        setError(message);
      } finally {
        inFlightRef.current = false;
        setIsLoading(false);
        setIsLoadingMore(false);
      }
    },
    [fetchFn],
  );

  // ── Public API ──────────────────────────────────────────────────────────

  const setFilters = useCallback(
    (newFilters: F) => {
      setFiltersState(newFilters);
      void doFetch(newFilters, undefined, false);
    },
    [doFetch],
  );

  const loadMore = useCallback(() => {
    if (!hasMore || inFlightRef.current || isLoadingMore) return;
    void doFetch(filters, pagination?.nextPage ?? null, true);
  }, [hasMore, isLoadingMore, doFetch, filters, pagination?.nextPage]);

  const retry = useCallback(() => {
    const { filters: retryFilters, nextPage } = retryRef.current;
    void doFetch(retryFilters, nextPage, nextPage != null);
  }, [doFetch]);

  return {
    items,
    isLoading,
    isLoadingMore,
    hasMore,
    error,
    filters,
    setFilters,
    loadMore,
    retry,
    pagination,
  };
}
