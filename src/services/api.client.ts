/**
 * Base API Client — WorldTrackTravel
 *
 * Centralized HTTP request handler.
 * - Uses NEXT_PUBLIC_API_BASE_URL (env var) for the base URL.
 * - Implements timeout via AbortController.
 * - Normalizes errors into ApiError.
 * - Unwraps standard { response, data } envelope.
 * - No auth headers — all documented public APIs are unauthenticated.
 */

import { ApiError, ApiResponse } from '../types/api.types';

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  'https://admin.worldtracktravel.com/api';

/** Default request timeout in milliseconds. Increased from 8s to 15s for heavy rate calculations. */
const DEFAULT_TIMEOUT_MS = 15_000;

/** Cache TTL for in-memory read queries (in ms). Kept short (30s) so admin updates show promptly while preventing rapid navigation spam. */
const CACHE_TTL_MS = 30_000; // 30 seconds

/** Stale fallback TTL (in ms) when an API returns 429 or times out. */
const STALE_TTL_MS = 60 * 60_000; // 1 hour

/** Maximum retries when server responds with 429 Too Many Requests. */
const MAX_429_RETRIES = 3;

// ---------------------------------------------------------------------------
// In-Memory & Session Storage Cache & In-Flight Request Deduplication
// ---------------------------------------------------------------------------

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const memoryCache = new Map<string, CacheEntry<any>>();
const inFlightRequests = new Map<string, Promise<any>>();

function isMutationEndpoint(endpoint: string, method?: string): boolean {
  if (method === 'PUT' || method === 'DELETE' || method === 'PATCH') return true;
  const lower = endpoint.toLowerCase();
  if (lower.includes('/inquiry/submit') || lower.includes('/seo/404-log')) return true;
  return false;
}

function buildCacheKey(endpoint: string, options: RequestInit): string {
  const method = (options.method || 'GET').toUpperCase();
  const body = options.body ? String(options.body) : '';
  return `${method}:${endpoint}:${body}`;
}

function getSessionCache<T>(key: string): T | null {
  if (typeof window === 'undefined') return null;
  try {
    const safeKey = `wt_cache_${key.slice(0, 80).replace(/[^a-zA-Z0-9_-]/g, '_')}`;
    const raw = sessionStorage.getItem(safeKey);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.timestamp === 'number' && Date.now() - parsed.timestamp < STALE_TTL_MS) {
      return parsed.data as T;
    }
  } catch {
    // Ignore storage parse or access errors
  }
  return null;
}

function setSessionCache<T>(key: string, data: T): void {
  if (typeof window === 'undefined') return;
  try {
    const safeKey = `wt_cache_${key.slice(0, 80).replace(/[^a-zA-Z0-9_-]/g, '_')}`;
    sessionStorage.setItem(
      safeKey,
      JSON.stringify({ data, timestamp: Date.now() }),
    );
  } catch {
    // Ignore storage quota or access errors
  }
}

// ---------------------------------------------------------------------------
// Internal fetch with timeout
// ---------------------------------------------------------------------------

async function fetchWithTimeout(
  url: string,
  options: RequestInit,
  timeoutMs: number,
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } catch (err) {
    if ((err as Error).name === 'AbortError') {
      throw new ApiError(`Request timed out after ${timeoutMs}ms`, undefined, url);
    }
    throw new ApiError(
      `Network error: ${(err as Error).message}`,
      undefined,
      url,
    );
  } finally {
    clearTimeout(timer);
  }
}

// ---------------------------------------------------------------------------
// Core fetch executor with 429 retry
// ---------------------------------------------------------------------------

async function executeFetch<T>(
  endpoint: string,
  options: RequestInit,
  retryCount = 0,
): Promise<T> {
  const url = `${BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...((options.headers as Record<string, string>) || {}),
  };

  const response = await fetchWithTimeout(
    url,
    { ...options, headers },
    DEFAULT_TIMEOUT_MS,
  );

  // Handle 429 Too Many Requests with exponential backoff retry
  if (response.status === 429) {
    if (retryCount < MAX_429_RETRIES) {
      const retryAfterHeader = response.headers.get('Retry-After');
      const delayMs = retryAfterHeader
        ? (parseInt(retryAfterHeader, 10) * 1000 || 1500)
        : (1500 * Math.pow(2, retryCount));
      console.warn(`[apiClient] 429 Rate limited on ${endpoint}. Retrying in ${delayMs}ms (attempt ${retryCount + 1}/${MAX_429_RETRIES})...`);
      await new Promise((resolve) => setTimeout(resolve, delayMs));
      return executeFetch<T>(endpoint, options, retryCount + 1);
    }
  }

  if (!response.ok) {
    let errMessage = `API error ${response.status}`;
    try {
      const body = await response.json();
      if (body?.message) errMessage = body.message;
    } catch {
      // ignore JSON parse error on error body
    }
    throw new ApiError(errMessage, response.status, url);
  }

  try {
    return (await response.json()) as T;
  } catch {
    throw new ApiError('Invalid JSON response from server', response.status, url);
  }
}

// ---------------------------------------------------------------------------
// Low-level raw client (with in-flight deduplication and memory cache)
// ---------------------------------------------------------------------------

export interface ApiClientOptions extends RequestInit {
  skipCache?: boolean;
}

export async function apiClient<T>(
  endpoint: string,
  options: ApiClientOptions = {},
): Promise<T> {
  const isMutation = isMutationEndpoint(endpoint, options.method);
  const cacheKey = buildCacheKey(endpoint, options);

  // 1. If not a mutation and not skipping cache, check in-memory cache
  if (!isMutation && !options.skipCache) {
    const cached = memoryCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
      return cached.data as T;
    }

    // 2. In-flight request deduplication: if identical request is pending, await it
    const existing = inFlightRequests.get(cacheKey);
    if (existing) {
      return existing as Promise<T>;
    }
  }

  const promise = (async () => {
    try {
      const result = await executeFetch<T>(endpoint, options);
      if (!isMutation) {
        memoryCache.set(cacheKey, {
          data: result,
          timestamp: Date.now(),
        });
        setSessionCache(cacheKey, result);
      }
      return result;
    } catch (err) {
      // Resilient fallback: if query fails (429 or timeout) and we have any stale cached data, use it!
      if (!isMutation) {
        const stale = memoryCache.get(cacheKey);
        if (stale) {
          console.warn(`[apiClient] Request failed for ${endpoint}, using stale cached response:`, (err as Error).message);
          return stale.data as T;
        }

        const sessionData = getSessionCache<T>(cacheKey);
        if (sessionData) {
          console.warn(`[apiClient] Request failed for ${endpoint}, using session cached response:`, (err as Error).message);
          memoryCache.set(cacheKey, { data: sessionData, timestamp: Date.now() });
          return sessionData;
        }

        // Graceful fallback for 429 Rate Limit / Network timeout to prevent Next.js red error modal crash
        console.warn(`[apiClient] API unavailable (${(err as Error).message}) for ${endpoint}. Returning safe empty fallback.`);
        return { response: false, data: [] } as unknown as T;
      }
      throw err;
    } finally {
      inFlightRequests.delete(cacheKey);
    }
  })();

  if (!isMutation && !options.skipCache) {
    inFlightRequests.set(cacheKey, promise);
  }

  return promise;
}

// ---------------------------------------------------------------------------
// Higher-level helpers that unwrap { response, data } envelope
// ---------------------------------------------------------------------------

/**
 * GET request that unwraps the standard { response, data } envelope.
 * Returns { data, pagination } for downstream consumers.
 */
export async function apiGet<T>(
  endpoint: string,
  fetchOptions?: ApiClientOptions,
): Promise<ApiResponse<T>> {
  const raw = await apiClient<ApiResponse<T>>(endpoint, {
    method: 'GET',
    ...fetchOptions,
  });
  return raw;
}

/**
 * POST request that unwraps the standard { response, data } envelope.
 * Returns { data, pagination } for downstream consumers.
 */
export async function apiPost<T>(
  endpoint: string,
  body: unknown = {},
  fetchOptions?: ApiClientOptions,
): Promise<ApiResponse<T>> {
  // Strip next revalidate options on POST requests to avoid Next.js warnings/no-op
  const { next: _next, ...safeOptions } = (fetchOptions || {}) as { next?: unknown } & ApiClientOptions;

  const raw = await apiClient<ApiResponse<T>>(endpoint, {
    method: 'POST',
    body: JSON.stringify(body),
    ...safeOptions,
  });
  return raw;
}


