module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page,
    "metadata",
    ()=>metadata,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$umrah$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/umrah.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hotel$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/hotel.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$visa$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/visa.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$tour$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/tour.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/blog.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/content.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$HomePage$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/HomePage.jsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const revalidate = 0;
const metadata = {
    title: 'Travel Agency in Islamabad - Umrah, Visas & Flights | World Track Aviation',
    description: 'World Track Aviation is an IATA-accredited travel agency in Islamabad offering Umrah packages, visa assistance, flight & hotel bookings across Pakistan.',
    keywords: [
        'Travel Agency in Islamabad',
        'Umrah packages Pakistan',
        'World Track Aviation',
        'visit visa consultant Islamabad',
        'flight booking agency Islamabad'
    ],
    alternates: {
        canonical: 'https://worldtracktravel.com/'
    },
    openGraph: {
        title: 'Travel Agency in Islamabad - Umrah, Visas & Flights | World Track Aviation',
        description: 'World Track Aviation is an IATA-accredited travel agency in Islamabad offering Umrah packages, visa assistance, flight & hotel bookings across Pakistan.',
        url: 'https://worldtracktravel.com/',
        siteName: 'World Track Aviation',
        type: 'website'
    }
};
async function Page() {
    const [umrahPackages, hotels, visas, tours, blogs, team, testimonials] = await Promise.allSettled([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$umrah$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["umrahService"].getUmrahPackages(),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hotel$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hotelService"].getHotels(),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$visa$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["visaService"].getVisas(),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$tour$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tourService"].getTours(),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogService"].getBlogs(),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentService"].getTeam(),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentService"].getTestimonials()
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$HomePage$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HomePage"], {
        initialUmrahPackages: umrahPackages.status === 'fulfilled' ? umrahPackages.value : [],
        initialHotels: hotels.status === 'fulfilled' ? hotels.value : [],
        initialVisas: visas.status === 'fulfilled' ? visas.value : [],
        initialTours: tours.status === 'fulfilled' ? tours.value : [],
        initialBlogs: blogs.status === 'fulfilled' ? blogs.value : [],
        initialTeam: team.status === 'fulfilled' ? team.value : null,
        initialReviews: testimonials.status === 'fulfilled' ? testimonials.value : []
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/services/api.client.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$api$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/api.types.ts [app-rsc] (ecmascript)");
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
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$api$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ApiError"](`Request timed out after ${timeoutMs}ms`, undefined, url);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$api$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ApiError"](`Network error: ${err.message}`, undefined, url);
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
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$api$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ApiError"](errMessage, response.status, url);
    }
    try {
        return await response.json();
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$api$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ApiError"]('Invalid JSON response from server', response.status, url);
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
"[project]/src/services/blog.service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Blog Service — WorldTrackTravel
 *
 * Endpoints from docs/frontend-api-integration.md § Blogs.
 */ __turbopack_context__.s([
    "blogService",
    ()=>blogService,
    "normalizeBlogDetail",
    ()=>normalizeBlogDetail,
    "stripHtmlTags",
    ()=>stripHtmlTags
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.client.ts [app-rsc] (ecmascript)");
;
function stripHtmlTags(str) {
    if (!str || typeof str !== 'string') return '';
    return str.replace(/<[^>]*>/g, '') // remove HTML tags like <p>, </p>, etc.
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();
}
function normalizeBlogDetail(item) {
    if (!item || typeof item !== 'object') return null;
    const id = String(item.id || '');
    const rawTitle = item.title || item.name || item.heading || 'Travel Insights & Guide';
    const title = stripHtmlTags(rawTitle);
    const rawCategory = item.category || 'umrah';
    const category = stripHtmlTags(rawCategory);
    const badge = (category || 'UMRAH GUIDE').toUpperCase();
    const rawSummary = item.summary || item.short_description;
    let summary = '';
    if (rawSummary) {
        summary = stripHtmlTags(rawSummary);
    } else if (item.description || item.content) {
        const fullText = stripHtmlTags(item.description || item.content);
        summary = fullText.length > 180 ? fullText.slice(0, 180).trim() + '...' : fullText;
    } else {
        summary = 'Essential travel guide and tips.';
    }
    const date = item.date || item.created_at || '20 Sep 2026';
    const author = stripHtmlTags(item.author || 'World Track Aviation');
    const authorAvatar = item.authorAvatar || item.avatar || item.author_image || '/assets/avatar_tariq.png';
    const readTime = item.readTime || (item.reading_time ? `${item.reading_time} min read` : '5 min read');
    const image = item.image || 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80';
    const rawIntro = item.intro || item.lead;
    const intro = rawIntro ? stripHtmlTags(rawIntro) : '';
    const heroDesc = item.heroDesc ? stripHtmlTags(item.heroDesc) : intro;
    let rawSections = item.sections;
    if (!rawSections || !Array.isArray(rawSections) || rawSections.length === 0) {
        const rawContent = item.description || item.content || `<p>${summary}</p>`;
        rawSections = [
            {
                heading: '',
                content: typeof rawContent === 'string' ? rawContent : `<p>${summary}</p>`
            }
        ];
    } else {
        rawSections = rawSections.map((sec)=>({
                heading: stripHtmlTags(sec.heading || sec.title || ''),
                content: sec.content || sec.text || `<p>${stripHtmlTags(sec.text || '')}</p>`
            }));
    }
    return {
        id,
        title,
        heroTitle: title,
        eyebrow: badge,
        category,
        badge,
        date,
        author,
        authorAvatar,
        readTime,
        summary,
        intro,
        image,
        image_alt_text: item.image_alt_text || item.alt_text || title,
        heroImage: image,
        heroDesc,
        sections: rawSections,
        seo: item.seo || null
    };
}
const blogService = {
    /**
   * Fetch all blogs via POST /blog/list.
   */ async getBlogs (filters) {
        const body = {};
        if (filters?.category && filters.category !== 'all') {
            body.filters = {
                category: filters.category
            };
        }
        if (filters?.searchQuery?.trim()) {
            body.filters = {
                ...body.filters,
                search: filters.searchQuery
            };
        }
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiPost"])('/blog/list', Object.keys(body).length > 0 ? body : {}, {
                cache: "no-store"
            });
            const blogs = Array.isArray(res.data) ? res.data : [];
            let normalized = blogs.map(normalizeBlogDetail).filter(Boolean);
            if (filters && normalized.length > 0) {
                if (filters.category && filters.category !== 'all') {
                    normalized = normalized.filter((b)=>b.category.toLowerCase() === filters.category.toLowerCase());
                }
                if (filters.searchQuery?.trim()) {
                    const q = filters.searchQuery.toLowerCase().trim();
                    normalized = normalized.filter((b)=>b.title.toLowerCase().includes(q) || b.summary.toLowerCase().includes(q) || b.heroTitle.toLowerCase().includes(q));
                }
            }
            return normalized;
        } catch  {
            return [];
        }
    },
    /**
   * Paginated blog listing with full API filter fields.
   */ async getBlogsPaginated (filters = {}) {
        try {
            const body = Object.keys(filters).length > 0 ? {
                filters
            } : {};
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiPost"])('/blog/list', body);
            return {
                blogs: Array.isArray(res.data) ? res.data : [],
                pagination: res.pagination
            };
        } catch  {
            return {
                blogs: [],
                pagination: undefined
            };
        }
    },
    /**
   * Fetch a single blog post by ID or slug.
   */ async getBlogById (id) {
        try {
            const blogs = await this.getBlogs();
            if (!blogs || blogs.length === 0) return null;
            const targetId = String(id).toLowerCase().trim();
            const found = blogs.find((b)=>String(b.id).toLowerCase().trim() === targetId || (b.seo?.url_slug || '').toLowerCase().trim() === targetId);
            return found || null;
        } catch  {
            return null;
        }
    },
    /**
   * GET /blog/lookups
   * Returns categories for filter UI.
   */ async getBlogLookups () {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiGet"])('/blog/lookups', {
                cache: "no-store"
            });
            return res.data ?? null;
        } catch  {
            return null;
        }
    }
};
}),
"[project]/src/services/content.service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Content Service — WorldTrackTravel
 *
 * Endpoints from docs/frontend-api-integration.md § Team, Testimonials, Contact Info.
 */ __turbopack_context__.s([
    "contentService",
    ()=>contentService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.client.ts [app-rsc] (ecmascript)");
;
const contentService = {
    /**
   * Fetch FAQ items via POST /hotel/faqs.
   */ async getFaqs () {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiPost"])('/hotel/faqs', {}, {
                cache: "no-store"
            });
            return {
                categories: [],
                items: Array.isArray(res.data) ? res.data : []
            };
        } catch  {
            return {
                categories: [],
                items: []
            };
        }
    },
    /**
   * GET /team/list
   * Returns team members. Wrapped in { members, stats } for backward compat.
   */ async getTeam () {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiGet"])('/team/list', {
                cache: "no-store"
            });
            return {
                members: Array.isArray(res.data) ? res.data : [],
                stats: []
            };
        } catch  {
            return {
                members: [],
                stats: []
            };
        }
    },
    /**
   * POST /testimonials/list
   * Send {} for all testimonials or { filters: { category } } for filtered.
   */ async getTestimonials (filters) {
        try {
            const body = filters ? {
                filters
            } : {};
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiPost"])('/testimonials/list', body, {
                cache: "no-store"
            });
            return Array.isArray(res.data) ? res.data : [];
        } catch  {
            return [];
        }
    },
    /**
   * GET /admin/contact/info
   * Returns offices, hotlines, email, address, WhatsApp, map coordinates.
   */ async getContactInfo () {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiGet"])('/admin/contact/info', {
                cache: "no-store"
            });
            return res.data ?? null;
        } catch  {
            return null;
        }
    }
};
}),
"[project]/src/services/hotel.service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.client.ts [app-rsc] (ecmascript)");
;
// ---------------------------------------------------------------------------
// Real API helpers
// ---------------------------------------------------------------------------
async function fetchHotelListing(filters = {}) {
    try {
        console.log('[hotelService] POST /hotel/minRate with filters:', JSON.stringify({
            filters
        }));
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiPost"])('/hotel/minRate', {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiGet"])(`/hotel/${id}`, {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiGet"])(`/hotel/${id}`, {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiGet"])('/hotel/lookups', {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiGet"])(`/hotel/room/type/${hotelId}`, {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiPost"])('/hotel/room/rate', filters);
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiPost"])('/hotel/faqs', body, {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiPost"])('/calculator/hotel', payload);
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiPost"])('/calculator/room', payload);
            return Array.isArray(res.data) ? res.data : [];
        } catch  {
            return [];
        }
    }
};
}),
"[project]/src/services/tour.service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Tour Service — WorldTrackTravel
 *
 * Endpoints:
 * - POST /tour/list (listing with filters and pagination)
 * - GET  /tour/lookups (destinations, ratings, tour_facilities)
 * - POST /inquiry/submit (tour inquiry)
 *
 * Tours support item-level SEO for detail pages.
 * SEO fallback chain:
 *   1. Item-level seo (tour detail pages)
 *   2. GET /api/seo/page/tours (listing/static page)
 *   3. GET /api/seo/global (final fallback)
 */ __turbopack_context__.s([
    "normalizeTourDetail",
    ()=>normalizeTourDetail,
    "tourService",
    ()=>tourService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.client.ts [app-rsc] (ecmascript)");
;
const FACILITY_ICON_MAP = {
    'hotel': 'hotel',
    'hotel stay': 'hotel',
    'visa': 'visa',
    'tour visa': 'visa',
    'air ticket': 'air',
    'airfare': 'air',
    'flight': 'air',
    'pick & drop': 'transfer',
    'airport transfer': 'transfer',
    'transfer': 'transfer',
    'insurance': 'insurance',
    'travel insurance': 'insurance'
};
function normalizeTourDetail(item) {
    if (!item || typeof item !== 'object') return null;
    const id = String(item.id || '');
    const title = item.name || item.title || 'Tour Package';
    const destination = item.city || item.location?.split(',')[0]?.trim() || 'Dubai';
    const country = item.country || 'UAE';
    const location = item.location || `${destination}, ${country}`;
    const rawPrice = item.price;
    const priceNumeric = typeof rawPrice === 'string' ? parseFloat(rawPrice) : typeof rawPrice === 'number' ? rawPrice : 0;
    const pricePKR = priceNumeric > 0 ? priceNumeric.toLocaleString('en-PK') : String(rawPrice || '0');
    const rating = typeof item.rating === 'number' ? item.rating : parseFloat(item.rating || '0') || 0;
    const reviewCount = item.reviewCount || item.reviews || 0;
    const stars = typeof item.stars === 'number' ? item.stars : Math.round(rating);
    const duration = item.duration || (item.days && item.nights ? `${item.days} Days / ${item.nights} Nights` : '5 Days / 4 Nights');
    const image = item.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80';
    const packageIncludes = Array.isArray(item.facilities) && item.facilities.length > 0 ? item.facilities.map((f)=>({
            icon: FACILITY_ICON_MAP[f.toLowerCase()] || 'hotel',
            label: f
        })) : item.packageIncludes || [
        {
            icon: 'hotel',
            label: 'Hotel Stay'
        },
        {
            icon: 'visa',
            label: 'Tour Visa'
        },
        {
            icon: 'air',
            label: 'Air Ticket'
        },
        {
            icon: 'transfer',
            label: 'Pick & Drop'
        },
        {
            icon: 'insurance',
            label: 'Travel Insurance'
        }
    ];
    return {
        id,
        title,
        destination,
        location,
        country,
        duration,
        days: item.days || undefined,
        nights: item.nights || undefined,
        pricePKR,
        priceLabel: `Rs ${pricePKR}`,
        priceUSD: priceNumeric > 0 ? Math.round(priceNumeric / 278) : 0,
        rating,
        reviewCount,
        stars,
        image,
        imageAltText: item.image_alt_text || null,
        badge: item.badge || 'POPULAR TOUR',
        packageIncludes,
        tags: [],
        inclusions: Array.isArray(item.facilities) ? item.facilities : [],
        description: item.description || `<p>Enjoy guided sightseeing, transfers, and accommodations on this ${title}.</p>`,
        seo: item.seo || null
    };
}
const tourService = {
    /**
   * Paginated tour listing with full API filter fields.
   * - Request without filters: {}
   * - Request with filters: { filters: { search, location, city, country, price_range, rating, nextPage, perPage } }
   */ async getToursPaginated (filters) {
        try {
            const hasFilters = filters && Object.entries(filters).some(([, v])=>{
                if (v === undefined || v === null || v === '') return false;
                if (Array.isArray(v)) return v.length > 0;
                return true;
            });
            const body = hasFilters ? {
                filters
            } : {};
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiPost"])('/tour/list', body, {
                cache: 'no-store'
            });
            const rawTours = Array.isArray(res.data) ? res.data : [];
            return {
                tours: rawTours.map(normalizeTourDetail).filter(Boolean),
                rawTours,
                pagination: res.pagination
            };
        } catch (err) {
            console.error('[tourService] getToursPaginated error:', err);
            return {
                tours: [],
                rawTours: [],
                pagination: undefined
            };
        }
    },
    /**
   * Fetch tours via POST /tour/list.
   */ async getTours (filters) {
        try {
            const apiFilters = {};
            if (filters) {
                if (filters.searchQuery?.trim()) {
                    apiFilters.search = filters.searchQuery.trim();
                }
                if (filters.destination && filters.destination !== 'all') {
                    // Parse "City, Country" format
                    const parts = filters.destination.split(',');
                    apiFilters.city = parts[0].trim();
                    if (parts[1]) apiFilters.country = parts[1].trim();
                }
                if (filters.city) apiFilters.city = filters.city;
                if (filters.country) apiFilters.country = filters.country;
                if (filters.priceRange && filters.priceRange !== 'all') {
                    apiFilters.price_range = filters.priceRange;
                }
                if (filters.rating) {
                    apiFilters.rating = filters.rating;
                } else if (filters.stars && filters.stars.length > 0) {
                    apiFilters.rating = filters.stars[0];
                }
                if (filters.nextPage) apiFilters.nextPage = filters.nextPage;
                if (filters.perPage) apiFilters.perPage = filters.perPage;
            }
            const { tours } = await this.getToursPaginated(Object.keys(apiFilters).length > 0 ? apiFilters : undefined);
            return tours;
        } catch (err) {
            console.error('[tourService] getTours error:', err);
            return [];
        }
    },
    /**
   * Fetch a single tour by ID or slug.
   */ async getTourById (id) {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiPost"])('/tour/list', {}, {
                cache: 'no-store'
            });
            const list = Array.isArray(res.data) ? res.data : [];
            const found = list.find((t)=>String(t.id) === id || t.seo?.url_slug === id);
            if (found) return normalizeTourDetail(found);
            return null;
        } catch  {
            return null;
        }
    },
    /**
   * GET /tour/lookups
   * Returns destinations, ratings, tour_facilities for filter UI.
   */ async getTourLookups () {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiGet"])('/tour/lookups', {
                cache: 'no-store'
            });
            return res.data ?? null;
        } catch  {
            return null;
        }
    },
    /**
   * Get destinations from lookups API.
   */ async getDestinations () {
        try {
            const lookups = await this.getTourLookups();
            if (!lookups) return [
                {
                    key: 'all',
                    label: 'All Destinations',
                    count: 0
                }
            ];
            const destinations = [
                {
                    key: 'all',
                    label: 'All Destinations',
                    count: lookups.all_destinations_count || 0
                }
            ];
            if (Array.isArray(lookups.destinations)) {
                lookups.destinations.forEach((d)=>{
                    destinations.push({
                        key: d.name || `${d.city}, ${d.country}`,
                        label: d.name || `${d.city}, ${d.country}`,
                        count: d.tours_count || 0
                    });
                });
            }
            return destinations;
        } catch  {
            return [
                {
                    key: 'all',
                    label: 'All Destinations',
                    count: 0
                }
            ];
        }
    },
    /**
   * Get rating options from lookups API.
   */ async getRatings () {
        try {
            const lookups = await this.getTourLookups();
            if (!lookups || !Array.isArray(lookups.ratings)) return [];
            return lookups.ratings.map((r)=>({
                    value: r.value,
                    count: r.tours_count || 0
                }));
        } catch  {
            return [];
        }
    }
};
}),
"[project]/src/services/umrah.service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Umrah Service — WorldTrackTravel
 *
 * Endpoints from docs/frontend-api-integration.md § Group/Custom Umrah Packages.
 */ __turbopack_context__.s([
    "normalizeGroupUmrahPackage",
    ()=>normalizeGroupUmrahPackage,
    "normalizeUmrahDetail",
    ()=>normalizeUmrahDetail,
    "umrahService",
    ()=>umrahService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.client.ts [app-rsc] (ecmascript)");
;
function normalizeUmrahDetail(raw) {
    const item = Array.isArray(raw) ? raw[0] : raw?.data && Array.isArray(raw.data) ? raw.data[0] : raw?.data || raw;
    if (!item || typeof item !== 'object') return null;
    const id = String(item.id || '');
    const title = item.package_name || item.name || item.title || 'Umrah Package';
    const badge = item.category || item.badge || 'UMRAH';
    const categoryKey = (item.category || '').toLowerCase().includes('5') ? 'five_star' : (item.category || '').toLowerCase().includes('4') ? 'four_star' : 'economy';
    const stars = typeof item.stars === 'number' ? item.stars : item.category?.includes('5') ? 5 : item.category?.includes('4') ? 4 : 3;
    const duration = item.duration ? typeof item.duration === 'number' || !String(item.duration).includes('Day') ? `${item.duration} Days` : item.duration : '14 Days';
    const tagline = item.short_description || item.tagline || 'Complete Umrah package with hotels, flights, and transfers';
    const rawPrice = item.price || item.prices?.sharing;
    const price = item.price && typeof item.price === 'string' && item.price.startsWith('Rs') ? item.price : rawPrice ? `Rs ${Number(rawPrice).toLocaleString()}` : 'Contact for Price';
    const priceNumeric = Number(rawPrice || 0);
    const rawImages = Array.isArray(item.images) ? item.images.map((img)=>typeof img === 'string' ? img : img?.file || '').filter(Boolean) : [];
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
        description: item.long_description || item.short_description || item.description || ''
    };
}
function normalizeGroupUmrahPackage(item) {
    if (!item || typeof item !== 'object') return null;
    const id = String(item.id || '');
    const title = item.name || item.title || 'Group Umrah Package';
    const groupTicket = item.group_ticket || {};
    const durationDays = groupTicket.duration ? `${groupTicket.duration} Days` : item.duration ? `${item.duration} Days` : '15 Days';
    const airlineCode = groupTicket.airline?.code || item.airlineCode || 'SV';
    const airlineName = groupTicket.airline?.name || item.airlineName || 'Saudi Arabian Airlines';
    const sector = groupTicket.route?.name || groupTicket.name || item.sector || 'ISLAMABAD - JEDDAH - ISLAMABAD';
    const seatsLeft = groupTicket.seats_left ?? item.seatsLeft ?? 12;
    const outbound = {
        date: groupTicket.departure?.date || item.outbound?.date || item.departure_date || 'ON REQUEST',
        flightNo: groupTicket.departure?.airline_code || item.outbound?.flightNo || '',
        time: groupTicket.departure?.flight_time ? `${groupTicket.departure.flight_time} - ${groupTicket.departure.land_time || ''}`.trim() : item.outbound?.time || '',
        baggage: groupTicket.departure?.luggage || item.outbound?.baggage || '46 KG (2 Pcs × 23 KG)'
    };
    const inbound = {
        date: groupTicket.arrival?.date || item.inbound?.date || 'CONFIRMED SEATS',
        flightNo: groupTicket.arrival?.airline_code || item.inbound?.flightNo || '',
        time: groupTicket.arrival?.flight_time ? `${groupTicket.arrival.flight_time} - ${groupTicket.arrival.land_time || ''}`.trim() : item.inbound?.time || '',
        baggage: groupTicket.arrival?.luggage || item.inbound?.baggage || '46 KG (2 Pcs × 23 KG)'
    };
    const makkahHotel = {
        name: item.makkah_hotel?.name || item.makkahHotel?.name || 'Makkah Hotel',
        nights: item.makkah_hotel?.nights || item.makkahHotel?.nights || 7,
        shuttle: item.shuttle_service || item.makkah_hotel?.shuttle || item.makkahHotel?.shuttle || 'Shuttle Service'
    };
    const madinahHotel = {
        name: item.madina_hotel?.name || item.madinah_hotel?.name || item.madinahHotel?.name || 'Madinah Hotel',
        nights: item.madina_hotel?.nights || item.madinah_hotel?.nights || item.madinahHotel?.nights || 7,
        shuttle: item.shuttle_service || item.madina_hotel?.shuttle || item.madinahHotel?.shuttle || 'Shuttle Service'
    };
    const rawPrices = item.prices || item.pricing || {};
    const formatPriceVal = (val)=>{
        if (!val) return 'Call';
        if (typeof val === 'number') return val.toLocaleString('en-PK');
        const num = parseFloat(String(val).replace(/[^0-9.]/g, ''));
        return isNaN(num) ? String(val) : num.toLocaleString('en-PK');
    };
    const pricing = {
        sharing: formatPriceVal(rawPrices.sharing || item.price),
        double: formatPriceVal(rawPrices.double || item.price),
        triple: formatPriceVal(rawPrices.triple || item.price),
        quad: formatPriceVal(rawPrices.quad || item.price)
    };
    return {
        id,
        title,
        durationDays,
        airlineCode,
        airlineName,
        sector,
        seatsLeft,
        outbound,
        inbound,
        makkahHotel,
        madinahHotel,
        pricing
    };
}
const umrahService = {
    // ── Public Umrah Packages (listing page: /umrah-packages) ─────────────
    /**
   * Fetch public Umrah packages for the listing page.
   * POST /umrah-packages/list with {} or { filters }.
   */ async getUmrahPackages (filters) {
        try {
            const apiFilters = {};
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
                }
                if (filters.stars && filters.stars.length > 0) {
                    apiFilters.package_rating = filters.stars;
                }
            }
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiPost"])('/umrah-packages/list', Object.keys(apiFilters).length > 0 ? {
                filters: apiFilters
            } : {}, {
                cache: "no-store"
            });
            const pkgs = Array.isArray(res.data) ? res.data : [];
            let normalized = pkgs.map(normalizeUmrahDetail).filter(Boolean);
            // Keep maxPrice local filtering since it's a slider value not exactly matched to backend tier keys
            if (filters?.maxPrice && filters.maxPrice < 350000) {
                normalized = normalized.filter((p)=>p.priceNumeric <= filters.maxPrice);
            }
            return normalized;
        } catch (err) {
            console.error('[umrahService] getUmrahPackages error:', err);
            return [];
        }
    },
    /**
   * Paginated public Umrah listing with full API filter fields.
   * POST /umrah-packages/list with { filters }.
   */ async getUmrahPackagesPaginated (filters = {}) {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiPost"])('/umrah-packages/list', {
                filters
            });
            return {
                packages: Array.isArray(res.data) ? res.data : [],
                pagination: res.pagination
            };
        } catch  {
            return {
                packages: [],
                pagination: undefined
            };
        }
    },
    /**
   * Fetch a single public Umrah package by ID.
   * POST /umrah-packages/list then find by id or slug.
   */ async getUmrahPackageById (id) {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiPost"])('/umrah-packages/list', {});
            const list = Array.isArray(res.data) ? res.data : [];
            const found = list.find((p)=>String(p.id) === String(id) || p.seo?.url_slug === id);
            if (found) return normalizeUmrahDetail(found);
            return null;
        } catch  {
            return null;
        }
    },
    /**
   * GET /umrah-packages/lookups
   * Returns categories and ratings with counts for the public listing filter UI.
   */ async getUmrahPackageLookups () {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiGet"])('/umrah-packages/lookups', {
                cache: "no-store"
            });
            return res.data ?? null;
        } catch  {
            return null;
        }
    },
    // ── Custom Umrah Packages (calculator/booking flow: /customize-umrah-package) ──
    /**
   * Paginated custom Umrah calculator packages.
   * POST /custom-umrah-packages/list with { filters }.
   */ async getCustomUmrahPackagesPaginated (filters = {}) {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiPost"])('/custom-umrah-packages/list', {
                filters
            });
            return {
                packages: Array.isArray(res.data) ? res.data : [],
                pagination: res.pagination
            };
        } catch  {
            return {
                packages: [],
                pagination: undefined
            };
        }
    },
    /**
   * GET /custom-umrah-packages/lookups
   * Returns categories and ratings with counts for the custom calculator filter UI.
   */ async getCustomUmrahPackageLookups () {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiGet"])('/custom-umrah-packages/lookups', {
                cache: "no-store"
            });
            return res.data ?? null;
        } catch  {
            return null;
        }
    },
    // ── Group Umrah Packages ──────────────────────────────────────────────
    /**
   * Fetch group Umrah packages.
   * POST /group-umrah-packages/list with {} or { filters }.
   */ async getGroupUmrahPackages (filters) {
        try {
            const body = filters ? {
                filters
            } : {};
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiPost"])('/group-umrah-packages/list', body, {
                cache: "no-store"
            });
            const pkgs = Array.isArray(res.data) ? res.data : [];
            return pkgs.map(normalizeGroupUmrahPackage).filter(Boolean);
        } catch  {
            return [];
        }
    },
    /**
   * Paginated group Umrah listing with full API filter fields.
   */ async getGroupUmrahPackagesPaginated (filters = {}) {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiPost"])('/group-umrah-packages/list', {
                filters
            });
            return {
                packages: Array.isArray(res.data) ? res.data : [],
                pagination: res.pagination
            };
        } catch  {
            return {
                packages: [],
                pagination: undefined
            };
        }
    },
    /**
   * Fetch a single group Umrah package by ID.
   */ async getGroupUmrahPackageById (id) {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiPost"])('/group-umrah-packages/list', {});
            const list = Array.isArray(res.data) ? res.data : [];
            const found = list.find((p)=>String(p.id) === id || p.seo?.url_slug === id);
            if (found) return normalizeGroupUmrahPackage(found);
            return null;
        } catch  {
            return null;
        }
    }
};
}),
"[project]/src/services/visa.service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
 */ __turbopack_context__.s([
    "normalizeVisaDetail",
    ()=>normalizeVisaDetail,
    "visaService",
    ()=>visaService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.client.ts [app-rsc] (ecmascript)");
;
function normalizeVisaDetail(item) {
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
            pricePKR: `Rs ${pricePKR}`
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
            {
                q: `How long does it take to process the ${title}?`,
                a: `Standard processing takes ${duration}.`
            },
            {
                q: 'Is embassy visit required?',
                a: 'No, the visa is 100% electronic and sent directly to your email.'
            }
        ],
        seo: item.seo || null
    };
}
const visaService = {
    /**
   * Paginated visa listing with full API filter fields.
   * - Request without filters: {}
   * - Request with filters: { filters: { search, name, country, price_range, nextPage, perPage } }
   */ async getVisasPaginated (filters) {
        try {
            const hasFilters = filters && Object.entries(filters).some(([, v])=>{
                if (v === undefined || v === null || v === '') return false;
                if (Array.isArray(v)) return v.length > 0;
                return true;
            });
            const body = hasFilters ? {
                filters
            } : {};
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiPost"])('/visa/list', body, {
                cache: 'no-store'
            });
            const rawVisas = Array.isArray(res.data) ? res.data : [];
            return {
                visas: rawVisas.map(normalizeVisaDetail).filter(Boolean),
                rawVisas,
                pagination: res.pagination
            };
        } catch (err) {
            console.error('[visaService] getVisasPaginated error:', err);
            return {
                visas: [],
                rawVisas: [],
                pagination: undefined
            };
        }
    },
    /**
   * Fetch all visas via POST /visa/list.
   * Returns VisaItem[] for backward compat with existing UI.
   */ async getVisas (filters) {
        try {
            const apiFilters = {};
            if (filters) {
                if (filters.searchQuery?.trim()) apiFilters.search = filters.searchQuery.trim();
                if (filters.country) apiFilters.country = filters.country;
                if (filters.price_range) apiFilters.price_range = filters.price_range;
                if (filters.nextPage) apiFilters.nextPage = filters.nextPage;
                if (filters.perPage) apiFilters.perPage = filters.perPage;
            }
            const { visas } = await this.getVisasPaginated(Object.keys(apiFilters).length > 0 ? apiFilters : undefined);
            // Client-side category filter (backwards compat)
            let result = visas;
            if (filters?.category && filters.category !== 'all' && result.length > 0) {
                if (filters.category === 'fast-track') {
                    result = result.filter((v)=>v.isFastTrack);
                } else {
                    result = result.filter((v)=>v.category === filters.category);
                }
            }
            return result;
        } catch  {
            return [];
        }
    },
    /**
   * Fetch a single visa item by ID / slug.
   */ async getVisaById (id) {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiPost"])('/visa/list', {}, {
                cache: 'no-store'
            });
            const list = Array.isArray(res.data) ? res.data : [];
            const found = list.find((v)=>String(v.id) === id || v.seo?.url_slug === id);
            if (found) return normalizeVisaDetail(found);
            return null;
        } catch  {
            return null;
        }
    },
    /**
   * Get visa categories.
   */ async getCategories () {
        return [];
    },
    /**
   * Get custom visa countries from inquiry lookups.
   * GET /inquiry/lookups → data.custom_visa_countries
   */ async getVisaCountries () {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiGet"])('/inquiry/lookups', {
                cache: 'no-store'
            });
            const countries = res.data?.custom_visa_countries || [];
            const list = [
                {
                    key: 'all',
                    label: 'All Countries',
                    count: 0
                }
            ];
            if (Array.isArray(countries)) {
                countries.forEach((c)=>{
                    const name = c.name || c.short_name || '';
                    if (name) {
                        list.push({
                            key: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                            label: name,
                            count: c.count || 0
                        });
                    }
                });
            }
            return list;
        } catch  {
            return [
                {
                    key: 'all',
                    label: 'All Countries',
                    count: 0
                }
            ];
        }
    },
    /**
   * GET /calculator/visa/type
   * Public calculator lookup for visa types dropdown.
   */ async getCalculatorVisaTypes () {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiGet"])('/calculator/visa/type', {
                cache: "no-store"
            });
            return Array.isArray(res.data) ? res.data : [];
        } catch  {
            return [];
        }
    }
};
}),
"[project]/src/shared/components/HomePage.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomePage",
    ()=>HomePage
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const HomePage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HomePage() from the server but HomePage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/components/HomePage.jsx", "HomePage");
}),
"[project]/src/shared/components/HomePage.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomePage",
    ()=>HomePage
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const HomePage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HomePage() from the server but HomePage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/components/HomePage.jsx <module evaluation>", "HomePage");
}),
"[project]/src/shared/components/HomePage.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$HomePage$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/components/HomePage.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$HomePage$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/shared/components/HomePage.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$HomePage$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/types/api.types.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1qjht99._.js.map