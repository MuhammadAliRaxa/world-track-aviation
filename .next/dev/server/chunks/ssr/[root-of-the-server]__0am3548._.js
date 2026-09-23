module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/src/features/hotels/state/HotelsContext.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HotelsProvider",
    ()=>HotelsProvider,
    "useHotelsDispatch",
    ()=>useHotelsDispatch,
    "useHotelsState",
    ()=>useHotelsState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$hotels$2f$state$2f$hotelsReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/hotels/state/hotelsReducer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hotel$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/hotel.service.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const HotelsStateContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const HotelsDispatchContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function HotelsProvider({ children, initialHotels = [] }) {
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$hotels$2f$state$2f$hotelsReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hotelsReducer"], {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$hotels$2f$state$2f$hotelsReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initialHotelsState"],
        allHotels: initialHotels.length > 0 ? initialHotels : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$hotels$2f$state$2f$hotelsReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initialHotelsState"].allHotels
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Skip fetch if server already supplied data
        if (initialHotels.length > 0) return;
        // Only auto-fetch client-side if on a route that displays hotel listings
        const pathname = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
        const isHotelRoute = [
            '/',
            '/hotels',
            '/our-hotels',
            '/hotels-map',
            '/hotels/map'
        ].some((path)=>pathname === path || pathname.startsWith('/hotels/') || pathname.startsWith('/our-hotels/'));
        if (!isHotelRoute) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hotel$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hotelService"].getHotels().then((hotels)=>{
            if (hotels && hotels.length > 0) {
                dispatch({
                    type: 'SET_HOTELS',
                    payload: hotels
                });
            }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HotelsStateContext.Provider, {
        value: state,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HotelsDispatchContext.Provider, {
            value: dispatch,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/features/hotels/state/HotelsContext.jsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/hotels/state/HotelsContext.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function useHotelsState() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(HotelsStateContext);
    if (context === null) {
        throw new Error('useHotelsState must be used within a HotelsProvider');
    }
    return context;
}
function useHotelsDispatch() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(HotelsDispatchContext);
    if (context === null) {
        throw new Error('useHotelsDispatch must be used within a HotelsProvider');
    }
    return context;
}
}),
"[project]/src/features/hotels/state/hotelsReducer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hotelsReducer",
    ()=>hotelsReducer,
    "initialHotelsState",
    ()=>initialHotelsState
]);
const initialHotelsState = {
    allHotels: [],
    activeFilter: 'All',
    favorites: [],
    selectedHotelForBooking: null,
    isQuoteModalOpen: false,
    searchQuery: ''
};
function hotelsReducer(state, action) {
    switch(action.type){
        case 'SET_HOTELS':
            return {
                ...state,
                allHotels: action.payload
            };
        case 'SET_FILTER':
            return {
                ...state,
                activeFilter: action.payload
            };
        case 'TOGGLE_FAVORITE':
            {
                const hotelId = action.payload;
                const exists = state.favorites.includes(hotelId);
                return {
                    ...state,
                    favorites: exists ? state.favorites.filter((id)=>id !== hotelId) : [
                        ...state.favorites,
                        hotelId
                    ]
                };
            }
        case 'OPEN_BOOKING_MODAL':
            return {
                ...state,
                selectedHotelForBooking: action.payload
            };
        case 'CLOSE_BOOKING_MODAL':
            return {
                ...state,
                selectedHotelForBooking: null
            };
        case 'OPEN_QUOTE_MODAL':
            return {
                ...state,
                isQuoteModalOpen: true
            };
        case 'CLOSE_QUOTE_MODAL':
            return {
                ...state,
                isQuoteModalOpen: false
            };
        case 'SET_SEARCH_QUERY':
            return {
                ...state,
                searchQuery: action.payload
            };
        default:
            throw new Error(`Unhandled action type in hotelsReducer: ${action.type}`);
    }
}
}),
"[project]/src/services/api.client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiClient",
    ()=>apiClient,
    "apiGet",
    ()=>apiGet,
    "apiPost",
    ()=>apiPost
]);
/**
 * Base API Client — WorldTrackTravel
 *
 * Centralized HTTP request handler.
 * - Uses NEXT_PUBLIC_API_BASE_URL (env var) for the base URL.
 * - Implements timeout via AbortController.
 * - Normalizes errors into ApiError.
 * - Unwraps standard { response, data } envelope.
 * - No auth headers — all documented public APIs are unauthenticated.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$api$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/api.types.ts [app-ssr] (ecmascript)");
;
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://admin.worldtracktravel.com/api';
/** Default request timeout in milliseconds. */ const DEFAULT_TIMEOUT_MS = 8_000;
// ---------------------------------------------------------------------------
// Internal fetch with timeout
// ---------------------------------------------------------------------------
async function fetchWithTimeout(url, options, timeoutMs) {
    const controller = new AbortController();
    const timer = setTimeout(()=>controller.abort(), timeoutMs);
    try {
        return await fetch(url, {
            ...options,
            signal: controller.signal
        });
    } catch (err) {
        if (err.name === 'AbortError') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$api$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiError"](`Request timed out after ${timeoutMs}ms`, undefined, url);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$api$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiError"](`Network error: ${err.message}`, undefined, url);
    } finally{
        clearTimeout(timer);
    }
}
async function apiClient(endpoint, options = {}) {
    const url = `${BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers || {}
    };
    const response = await fetchWithTimeout(url, {
        ...options,
        headers
    }, DEFAULT_TIMEOUT_MS);
    if (!response.ok) {
        let errMessage = `API error ${response.status}`;
        try {
            const body = await response.json();
            if (body?.message) errMessage = body.message;
        } catch  {
        // ignore JSON parse error on error body
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$api$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiError"](errMessage, response.status, url);
    }
    try {
        return await response.json();
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$api$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiError"]('Invalid JSON response from server', response.status, url);
    }
}
async function apiGet(endpoint, fetchOptions) {
    const raw = await apiClient(endpoint, {
        method: 'GET',
        ...fetchOptions
    });
    return raw;
}
async function apiPost(endpoint, body = {}, fetchOptions) {
    // Strip next revalidate options on POST requests to avoid Next.js warnings/no-op
    const { next: _next, ...safeOptions } = fetchOptions || {};
    const raw = await apiClient(endpoint, {
        method: 'POST',
        body: JSON.stringify(body),
        ...safeOptions
    });
    return raw;
}
}),
"[project]/src/services/hotel.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Hotel Service — WorldTrackTravel
 *
 * Endpoints from docs/frontend-api-integration.md § Hotels.
 */ __turbopack_context__.s([
    "hotelService",
    ()=>hotelService,
    "normalizeHotelDetail",
    ()=>normalizeHotelDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.client.ts [app-ssr] (ecmascript)");
;
// ---------------------------------------------------------------------------
// Real API helpers
// ---------------------------------------------------------------------------
async function fetchHotelListing(filters = {}) {
    try {
        console.log('[hotelService] POST /hotel/minRate with filters:', JSON.stringify({
            filters
        }));
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiPost"])('/hotel/minRate', {
            filters
        }, {
            cache: "no-store"
        });
        console.log('[hotelService] Got', Array.isArray(res.data) ? res.data.length : 0, 'hotels back');
        return {
            hotels: Array.isArray(res.data) ? res.data : [],
            pagination: res.pagination
        };
    } catch (err) {
        console.error('[hotelService] fetchHotelListing error:', err);
        return {
            hotels: [],
            pagination: undefined
        };
    }
}
function normalizeHotelDetail(raw) {
    const item = Array.isArray(raw) ? raw[0] : raw?.data && Array.isArray(raw.data) ? raw.data[0] : raw?.data || raw;
    if (!item || typeof item !== 'object') return null;
    const id = String(item.id || '');
    const name = item.hotel_name || item.name || 'Hotel';
    const location = item.hotel_city || item.city || 'Makkah';
    const category = item.category || item.hotel_category || (item.stars ? `${item.stars} Star` : item.hotel_city || 'Hotels');
    const address = item.hotel_address || item.address || '';
    const description = item.description || `<p>Experience your stay at ${name} in ${location}.</p>`;
    const ratingVal = String(item.rating || (typeof item.hotel_rating === 'string' ? item.hotel_rating : '') || '8.5');
    const rating = ratingVal.includes('/') ? ratingVal : `${ratingVal}/10`;
    const reviewsCount = item.reviews ? String(item.reviews) : item.reviewsCount ? String(item.reviewsCount) : '120';
    // Parse stars from category ("5 Star", "4 Star"), hotel_category, item.stars, or star_rating
    const categoryStr = String(item.category || item.hotel_category || item.star_rating || '');
    const categoryStarMatch = categoryStr.match(/^(\d)/);
    const stars = typeof item.stars === 'number' ? item.stars : categoryStarMatch ? parseInt(categoryStarMatch[1], 10) : 5;
    const rawPrice = item.price || item.min_rate;
    const price = rawPrice ? typeof rawPrice === 'number' || !String(rawPrice).includes('Rs') && !String(rawPrice).includes('SAR') ? `SAR ${rawPrice}` : String(rawPrice) : 'Contact for Price';
    const rawImages = Array.isArray(item.images) ? item.images.map((img)=>typeof img === 'string' ? img : img?.file || '').filter(Boolean) : [];
    const mainImage = item.image || rawImages[0] || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80';
    const gallery = rawImages.length > 0 ? rawImages : [
        mainImage
    ];
    const amenities = Array.isArray(item.facilities) ? item.facilities.map((f)=>typeof f === 'string' ? f : f?.name || f?.facility || '').filter(Boolean) : item.amenities || [
        'Free WiFi',
        'Air Condition',
        '24/7 Front Desk',
        'Private Parking'
    ];
    const ROOM_CAPACITY_MAP = {
        Double: '2 Adults',
        Triple: '3 Adults',
        Quad: '4 Adults',
        Quint: '5 Adults'
    };
    const roomTypes = Array.isArray(item.room_rates) && item.room_rates.length > 0 ? item.room_rates.map((rr, idx)=>({
            id: `r${idx + 1}`,
            name: `${rr.room_type || 'Standard'} Bedroom`,
            capacity: ROOM_CAPACITY_MAP[rr.room_type] || '2 Adults',
            price: rr.price && Number(rr.price) > 0 ? `SAR ${rr.price}` : price,
            unit: '/ night'
        })) : Array.isArray(item.roomTypes) && item.roomTypes.length > 0 ? item.roomTypes : [
        {
            id: 'r1',
            name: 'Double Bedroom',
            capacity: '2 Adults',
            price,
            unit: '/ night'
        },
        {
            id: 'r2',
            name: 'Triple Bedroom',
            capacity: '3 Adults',
            price,
            unit: '/ night'
        },
        {
            id: 'r3',
            name: 'Quad Bedroom',
            capacity: '4 Adults',
            price,
            unit: '/ night'
        }
    ];
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
        highlights: item.highlights || [
            'High-Speed WiFi',
            '24/7 Room Service',
            'Free Cancellation',
            '24h Front Desk'
        ],
        roomTypes,
        distance: item.distance,
        available_from: item.available_from,
        lat: item.lat,
        lng: item.lng
    };
}
const hotelService = {
    /**
   * Fetch hotels via POST /hotel/minRate.
   * Returns Hotel[] for backward compat with existing component code.
   */ async getHotels (filters) {
        try {
            const apiFilters = {};
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
                    const amenityMap = {
                        wifi: 7,
                        breakfast: 12,
                        pool: 10,
                        shuttle: 1,
                        spa: 15,
                        dining: 14,
                        transfer: 13
                    };
                    apiFilters.hotel_facilities = filters.amenities.map((a)=>amenityMap[a]).filter(Boolean);
                }
                if (filters.occupancy && filters.occupancy.length > 0) {
                    const occupancyMap = {
                        double: 2,
                        triple: 1,
                        quad: 3,
                        quint: 4
                    };
                    apiFilters.room_types = filters.occupancy.map((o)=>occupancyMap[o]).filter(Boolean);
                }
            }
            const { hotels } = await fetchHotelListing(apiFilters);
            let result = hotels.map(normalizeHotelDetail).filter(Boolean);
            return result;
        } catch  {
            return [];
        }
    },
    /**
   * Fetch a single hotel by ID.
   * GET /hotel/{hotel_id}
   */ async getHotelById (id) {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiGet"])(`/hotel/${id}`, {
                cache: "no-store"
            });
            const normalized = normalizeHotelDetail(res.data || res);
            if (normalized) return normalized;
            return null;
        } catch  {
            return null;
        }
    },
    /**
   * Fetch a single hotel by ID, returning the raw API shape with seo intact.
   * GET /hotel/{hotel_id}
   * Use for buildMetadata() in route pages.
   */ async getHotelDetail (id) {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiGet"])(`/hotel/${id}`, {
                cache: "no-store"
            });
            const item = res.data;
            if (!item || typeof item !== 'object') return null;
            // Handle case where API wraps in array
            if (Array.isArray(item)) return item[0] ?? null;
            return item;
        } catch  {
            return null;
        }
    },
    // ── Real-API-only methods ──────────────────────────────────────────────
    /**
   * POST /hotel/minRate with pagination filters.
   * Returns typed ApiHotel[] + pagination for paginated listing UI.
   */ async getHotelsPaginated (filters = {}) {
        return fetchHotelListing(filters);
    },
    /**
   * GET /hotel/lookups
   * Returns cities, ratings, facilities, room types for filter UI.
   */ async getHotelLookups () {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiGet"])('/hotel/lookups', {
                cache: "no-store"
            });
            return res.data ?? null;
        } catch  {
            return null;
        }
    },
    /**
   * GET /hotel/room/type/{hotel_id}
   */ async getHotelRoomTypes (hotelId) {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiGet"])(`/hotel/room/type/${hotelId}`, {
                cache: "no-store"
            });
            return Array.isArray(res.data) ? res.data : [];
        } catch  {
            return [];
        }
    },
    /**
   * POST /hotel/room/rate
   */ async getHotelRoomRates (filters = {}) {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiPost"])('/hotel/room/rate', filters);
            return Array.isArray(res.data) ? res.data : [];
        } catch  {
            return [];
        }
    },
    /**
   * POST /hotel/faqs
   * Send {} for all FAQs or { filters: { category, search } } for filtered.
   */ async getHotelFaqs (filters) {
        try {
            const body = filters ? {
                filters
            } : {};
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiPost"])('/hotel/faqs', body, {
                cache: "no-store"
            });
            return Array.isArray(res.data) ? res.data : [];
        } catch  {
            return [];
        }
    },
    /**
   * POST /calculator/hotel
   * Public calculator lookup for hotels.
   */ async getCalculatorHotels (payload = {}) {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiPost"])('/calculator/hotel', payload);
            return Array.isArray(res.data) ? res.data : [];
        } catch  {
            return [];
        }
    },
    /**
   * POST /calculator/room
   * Public calculator lookup for rooms.
   */ async getCalculatorRooms (payload = {}) {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiPost"])('/calculator/room', payload);
            return Array.isArray(res.data) ? res.data : [];
        } catch  {
            return [];
        }
    }
};
}),
"[project]/src/types/api.types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Canonical API Response Types — WorldTrackTravel
 *
 * These types match the shapes documented in docs/frontend-api-integration.md.
 * They are separate from the legacy mock-data types (hotel.types.ts, etc.)
 * which remain for backward compatibility with existing mock-path code.
 */ // ---------------------------------------------------------------------------
// Common Response Wrappers
// ---------------------------------------------------------------------------
__turbopack_context__.s([
    "ApiError",
    ()=>ApiError
]);
class ApiError extends Error {
    status;
    endpoint;
    constructor(message, status, endpoint){
        super(message), this.status = status, this.endpoint = endpoint;
        this.name = 'ApiError';
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0am3548._.js.map