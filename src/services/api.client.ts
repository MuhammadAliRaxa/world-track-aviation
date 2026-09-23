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

/** Default request timeout in milliseconds. */
const DEFAULT_TIMEOUT_MS = 8_000;

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
// Low-level raw client (returns full Response body as T, no envelope unwrap)
// ---------------------------------------------------------------------------

export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const url = `${BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...((options.headers as Record<string, string>) || {}),
  };

  const response = await fetchWithTimeout(
    url,
    { ...options, headers },
    DEFAULT_TIMEOUT_MS,
  );

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
// Higher-level helpers that unwrap { response, data } envelope
// ---------------------------------------------------------------------------

/**
 * GET request that unwraps the standard { response, data } envelope.
 * Returns { data, pagination } for downstream consumers.
 */
export async function apiGet<T>(
  endpoint: string,
  fetchOptions?: RequestInit,
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
  fetchOptions?: RequestInit,
): Promise<ApiResponse<T>> {
  // Strip next revalidate options on POST requests to avoid Next.js warnings/no-op
  const { next: _next, ...safeOptions } = (fetchOptions || {}) as { next?: unknown } & RequestInit;

  const raw = await apiClient<ApiResponse<T>>(endpoint, {
    method: 'POST',
    body: JSON.stringify(body),
    ...safeOptions,
  });
  return raw;
}

