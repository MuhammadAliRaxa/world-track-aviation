(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/assets/hero_sunset.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/hero_sunset.0zdecd1hcc5hs.webp");}),
"[project]/src/assets/hero_sunset.webp.mjs { IMAGE => \"[project]/src/assets/hero_sunset.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$hero_sunset$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/hero_sunset.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$hero_sunset$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 441,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/webp;base64,UklGRsgAAABXRUJQVlA4TLsAAAAvB4AAAM1VICICHgiwCQAAAICT3+cgAAQAAgAAAQAAAAAAAAAAAAAAAAAAAABwHAICAI4EIgIAAMADATYBAAAAOH9O4hALIQcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQwKH5UfdAgE0AAAAAzn9BT/QiOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgB38B+YkcR/ALS1RB09+HZbTlC3Zsqy5/8x3c2eA9A6aPSg7hJPL2fS//7FwVAA=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/world_track_logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/world_track_logo.36l9u24as0kyt.png");}),
"[project]/src/assets/world_track_logo.png.mjs { IMAGE => \"[project]/src/assets/world_track_logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$world_track_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/world_track_logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$world_track_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 317,
    blurWidth: 8,
    blurHeight: 2,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARUlEQVR42gUAQQqAIExI1ma2NF0rOiwIrQf0/7eFo8DHmOzLzPYqtq7UraA9Su2ucDmPvPlQDAHmGkFkmc4USYRpX8OQf6nUBK+PLBjUAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/company.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Centralized company contact and brand configuration.
 * All public contact details, WhatsApp routing, and social metadata are maintained here.
 */ __turbopack_context__.s([
    "COMPANY_CONFIG",
    ()=>COMPANY_CONFIG,
    "default",
    ()=>__TURBOPACK__default__export__
]);
const COMPANY_CONFIG = {
    name: 'World Track Aviation',
    shortName: 'World Track',
    tagline: 'Travel with Trust | Flights, Hotels, Umrah & Visa',
    officeLine: '051-2120721',
    officeLineRaw: '0512120721',
    urgentSupportWhatsapp: '+92 335 0122252',
    urgentSupportWhatsappNumber: '923350122252',
    whatsapp: '+92 329 2721721',
    whatsappNumber: '923292721721',
    phone: '051-2120721',
    phoneFormatted: '051-2120721',
    phoneRaw: '0512120721',
    email: 'worldtrackaviation@gmail.com',
    address: 'World Track Aviation, Office No. 4, Islamabad Center, Block 39, Fazal-ul-Haq Road, Blue Area, Islamabad',
    city: 'Islamabad',
    country: 'Pakistan',
    openingHours: 'Mon - Sat: 09:00 AM - 09:00 PM | WhatsApp 24/7',
    social: {
        facebook: 'https://web.facebook.com/worldtrackaviation/',
        instagram: 'https://www.instagram.com/worldtrackaviation/'
    },
    /**
   * Generates a direct WhatsApp click-to-chat URL with an optional pre-filled message.
   * @param {string} message - Optional pre-filled text
   * @param {'standard' | 'urgent'} type - Which helpline to target
   * @returns {string} wa.me URL
   */ getWhatsAppUrl (message = '', type = 'standard') {
        const target = type === 'urgent' ? this.urgentSupportWhatsappNumber : this.whatsappNumber;
        const encoded = encodeURIComponent(message);
        return `https://wa.me/${target}${encoded ? `?text=${encoded}` : ''}`;
    }
};
const __TURBOPACK__default__export__ = COMPANY_CONFIG;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/hotels/hooks/useHotels.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHotels",
    ()=>useHotels
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$hotels$2f$state$2f$HotelsContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/hotels/state/HotelsContext.jsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useHotels() {
    _s();
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$hotels$2f$state$2f$HotelsContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHotelsState"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$hotels$2f$state$2f$HotelsContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHotelsDispatch"])();
    const setFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHotels.useCallback[setFilter]": (filter)=>{
            dispatch({
                type: 'SET_FILTER',
                payload: filter
            });
        }
    }["useHotels.useCallback[setFilter]"], [
        dispatch
    ]);
    const toggleFavorite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHotels.useCallback[toggleFavorite]": (hotelId)=>{
            dispatch({
                type: 'TOGGLE_FAVORITE',
                payload: hotelId
            });
        }
    }["useHotels.useCallback[toggleFavorite]"], [
        dispatch
    ]);
    const openBooking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHotels.useCallback[openBooking]": (hotel)=>{
            dispatch({
                type: 'OPEN_BOOKING_MODAL',
                payload: hotel
            });
        }
    }["useHotels.useCallback[openBooking]"], [
        dispatch
    ]);
    const closeBooking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHotels.useCallback[closeBooking]": ()=>{
            dispatch({
                type: 'CLOSE_BOOKING_MODAL'
            });
        }
    }["useHotels.useCallback[closeBooking]"], [
        dispatch
    ]);
    const openQuoteModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHotels.useCallback[openQuoteModal]": ()=>{
            dispatch({
                type: 'OPEN_QUOTE_MODAL'
            });
        }
    }["useHotels.useCallback[openQuoteModal]"], [
        dispatch
    ]);
    const closeQuoteModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHotels.useCallback[closeQuoteModal]": ()=>{
            dispatch({
                type: 'CLOSE_QUOTE_MODAL'
            });
        }
    }["useHotels.useCallback[closeQuoteModal]"], [
        dispatch
    ]);
    // Derived filtered hotels
    const filteredHotels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useHotels.useMemo[filteredHotels]": ()=>{
            if (state.activeFilter === 'All') {
                return state.allHotels;
            }
            return state.allHotels.filter({
                "useHotels.useMemo[filteredHotels]": (h)=>h.category.toLowerCase() === state.activeFilter.toLowerCase()
            }["useHotels.useMemo[filteredHotels]"]);
        }
    }["useHotels.useMemo[filteredHotels]"], [
        state.allHotels,
        state.activeFilter
    ]);
    return {
        hotels: filteredHotels,
        allHotels: state.allHotels,
        activeFilter: state.activeFilter,
        favorites: state.favorites,
        selectedHotelForBooking: state.selectedHotelForBooking,
        isQuoteModalOpen: state.isQuoteModalOpen,
        setFilter,
        toggleFavorite,
        openBooking,
        closeBooking,
        openQuoteModal,
        closeQuoteModal
    };
}
_s(useHotels, "0KLJoDSG/JGDDLcpO1F33Zvxbps=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$hotels$2f$state$2f$HotelsContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHotelsState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$hotels$2f$state$2f$HotelsContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHotelsDispatch"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/visas/components/VisaCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VisaCard",
    ()=>VisaCard,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const DEFAULT_VISA_IMAGE = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80';
const getVisaImage = (visa)=>{
    if (visa?.image) return visa.image;
    const target = ((visa?.country || '') + ' ' + (visa?.title || '') + ' ' + (visa?.name || '')).toLowerCase();
    if (target.includes('dubai') || target.includes('uae') || target.includes('emirates')) {
        return 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80';
    }
    if (target.includes('saudi') || target.includes('umrah') || target.includes('makkah')) {
        return 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80';
    }
    if (target.includes('turkey') || target.includes('istanbul')) {
        return 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80';
    }
    if (target.includes('baku') || target.includes('azerbaijan')) {
        return 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80';
    }
    if (target.includes('malaysia') || target.includes('kuala')) {
        return 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80';
    }
    if (target.includes('singapore')) {
        return 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80';
    }
    if (target.includes('thailand') || target.includes('bangkok')) {
        return 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80';
    }
    if (target.includes('egypt') || target.includes('cairo')) {
        return 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80';
    }
    return DEFAULT_VISA_IMAGE;
};
function VisaCard({ visa }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const slug = visa.seo?.url_slug || visa.id;
    const handleAction = (e)=>{
        e.stopPropagation();
        router.push(`/visas/${slug}`);
    };
    // Format processing time cleanly (e.g. "2-3 days")
    const rawDuration = visa.processing_time || visa.duration || '2 - 3 Days';
    const formattedDuration = rawDuration.replace(/\s*-\s*/g, '-').toLowerCase();
    const imageUrl = getVisaImage(visa);
    const displayTitle = visa.title || visa.name || 'Tourist Visit Visa';
    const displayPrice = visa.pricePKR || (visa.rate ? Number(visa.rate).toLocaleString() : visa.price ? Number(visa.price).toLocaleString() : '44,500');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "visa-card-item",
        onClick: ()=>router.push(`/visas/${slug}`),
        id: `visa-card-${visa.id}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "visa-card-media",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: imageUrl,
                        alt: visa.imageAltText || displayTitle,
                        className: "visa-card-img",
                        loading: "lazy",
                        decoding: "async",
                        width: 360,
                        height: 180,
                        onError: (e)=>{
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = DEFAULT_VISA_IMAGE;
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/features/visas/components/VisaCard.jsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "visa-badge-top-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: visa.visa_type || visa.badge || 'E-VISA'
                        }, void 0, false, {
                            fileName: "[project]/src/features/visas/components/VisaCard.jsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/visas/components/VisaCard.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/visas/components/VisaCard.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "visa-card-body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "visa-card-title",
                        children: displayTitle
                    }, void 0, false, {
                        fileName: "[project]/src/features/visas/components/VisaCard.jsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "visa-processing-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                size: 13,
                                className: "visa-clock-icon"
                            }, void 0, false, {
                                fileName: "[project]/src/features/visas/components/VisaCard.jsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Processing time ",
                                    formattedDuration
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/visas/components/VisaCard.jsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/visas/components/VisaCard.jsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "visa-pricing-action-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "visa-price-text",
                                children: [
                                    "Rs ",
                                    displayPrice
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/visas/components/VisaCard.jsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "visa-view-details-btn",
                                onClick: handleAction,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "View Details"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/visas/components/VisaCard.jsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 14,
                                        className: "view-details-arrow"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/visas/components/VisaCard.jsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/visas/components/VisaCard.jsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/visas/components/VisaCard.jsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "visa-accent-gradient-bar",
                        style: visa.accentGradient ? {
                            background: visa.accentGradient
                        } : undefined
                    }, void 0, false, {
                        fileName: "[project]/src/features/visas/components/VisaCard.jsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/visas/components/VisaCard.jsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/visas/components/VisaCard.jsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(VisaCard, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = VisaCard;
const __TURBOPACK__default__export__ = VisaCard;
var _c;
__turbopack_context__.k.register(_c, "VisaCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/visas/components/VisasPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VisasPage",
    ()=>VisasPage,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.mjs [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.mjs [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$AppBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/AppBar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/Footer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$Modals$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/Modals.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$icons$2f$WhatsAppIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/icons/WhatsAppIcon.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$company$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/company.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/hooks/useDebounce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$visas$2f$components$2f$VisaCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/visas/components/VisaCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/services/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$visa$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/visa.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$visas$2f$data$2f$visasData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/visas/data/visasData.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function VisasPage({ initialVisas = [], initialPagination = undefined, initialCountries = [] }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [visas, setVisas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialVisas);
    const [pagination, setPagination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPagination || {
        current_page: 1,
        per_page: 12,
        total_pages: 1,
        total_records: initialVisas.length,
        nextPage: null,
        has_more: false
    });
    // Use API-driven countries if available, fall back to static list
    const countries = initialCountries && initialCountries.length > 1 ? initialCountries : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$visas$2f$data$2f$visasData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VISA_COUNTRIES_FILTER"];
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const debouncedSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(searchQuery, 350);
    const [selectedCountry, setSelectedCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [selectedPrice, setSelectedPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isContactOpen, setIsContactOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoadingMore, setIsLoadingMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VisasPage.useEffect": ()=>{
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }["VisasPage.useEffect"], []);
    // Lock background scroll on mobile when sidebar drawer is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VisasPage.useEffect": ()=>{
            if (mobileOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
            return ({
                "VisasPage.useEffect": ()=>{
                    document.body.style.overflow = '';
                }
            })["VisasPage.useEffect"];
        }
    }["VisasPage.useEffect"], [
        mobileOpen
    ]);
    const handleWhatsApp = ()=>{
        window.open(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$company$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_CONFIG"].getWhatsAppUrl('Hi, I need assistance with custom group visa booking. Please assist.'), '_blank');
    };
    const hasFilters = selectedCountry !== 'all' || selectedPrice !== 'all' || searchQuery.trim() !== '';
    const clearAll = ()=>{
        setSelectedCountry('all');
        setSelectedPrice('all');
        setSearchQuery('');
    };
    // Build API filters from current UI state
    const buildApiFilters = (page = 1)=>{
        const filters = {};
        if (debouncedSearch.trim()) filters.search = debouncedSearch.trim();
        if (selectedCountry !== 'all') {
            // Look up the full country name from the countries list
            const countryObj = countries.find((c)=>c.key === selectedCountry);
            if (countryObj && countryObj.key !== 'all') {
                filters.country = countryObj.label;
            } else {
                // Direct key match for API-driven countries
                filters.country = selectedCountry;
            }
        }
        if (selectedPrice !== 'all') {
            if (selectedPrice === 'under-60k') filters.price_range = 'under_60000';
            else if (selectedPrice === '60k-120k') filters.price_range = '60000_120000';
            else if (selectedPrice === '120k-200k') filters.price_range = '120000_200000';
            else if (selectedPrice === '200k-plus') filters.price_range = 'above_200000';
            else filters.price_range = selectedPrice;
        }
        filters.nextPage = page;
        filters.perPage = 12;
        return filters;
    };
    // Skip first mount refetch when SSR data is available
    const isFirstMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VisasPage.useEffect": ()=>{
            if (isFirstMount.current) {
                isFirstMount.current = false;
                return;
            }
            let active = true;
            setIsLoading(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$visa$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visaService"].getVisasPaginated(buildApiFilters(1)).then({
                "VisasPage.useEffect": (res)=>{
                    if (!active) return;
                    setVisas(res.visas);
                    setPagination(res.pagination);
                    setIsLoading(false);
                }
            }["VisasPage.useEffect"]).catch({
                "VisasPage.useEffect": ()=>{
                    if (!active) return;
                    setIsLoading(false);
                }
            }["VisasPage.useEffect"]);
            return ({
                "VisasPage.useEffect": ()=>{
                    active = false;
                }
            })["VisasPage.useEffect"];
        }
    }["VisasPage.useEffect"], [
        debouncedSearch,
        selectedCountry,
        selectedPrice
    ]);
    // Load More handler
    const handleLoadMore = async ()=>{
        if (!pagination?.nextPage || isLoadingMore) return;
        setIsLoadingMore(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$visa$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visaService"].getVisasPaginated(buildApiFilters(pagination.nextPage));
            setVisas((prev)=>[
                    ...prev,
                    ...res.visas
                ]);
            setPagination(res.pagination);
        } catch (err) {
            console.error('[VisasPage] load more error:', err);
        } finally{
            setIsLoadingMore(false);
        }
    };
    const totalCount = pagination?.total_records ?? visas.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "app-layout-root",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$AppBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppBar"], {
                onOpenContact: ()=>setIsContactOpen(true),
                heroContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tr-hero",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tr-hero-bg",
                            style: {
                                backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop&q=80')"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tr-hero-overlay"
                        }, void 0, false, {
                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tr-hero-body",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "tr-hero-h1",
                                    children: "Umrah and Visit Visa Services"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "tr-hero-intro",
                                    children: "Whether you need an Umrah visa or a tourist visa for another country, every application goes through a document check before it's submitted, so avoidable mistakes get caught early. Pick your visa type below to see processing time and price."
                                }, void 0, false, {
                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                    lineNumber: 169,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "vp-page",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "vp-breadcrumb",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "vp-breadcrumb-btn",
                                onClick: ()=>router.push('/'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "vp-mob-filter-btn",
                            onClick: ()=>setMobileOpen(!mobileOpen),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Filter By"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                hasFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "vp-mob-dot"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                    lineNumber: 211,
                                    columnNumber: 28
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "vp-layout",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    className: `vp-sidebar ${mobileOpen ? 'vp-sidebar-open' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "vp-sidebar-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "vp-sb-mob-head",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Filters"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                            lineNumber: 221,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "vp-sb-close-btn",
                                                            onClick: ()=>setMobileOpen(false),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                                lineNumber: 227,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                            lineNumber: 222,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                    lineNumber: 220,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "vp-sb-header",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                            size: 15,
                                                            className: "vp-sb-filter-icon"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                            lineNumber: 233,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Filter By"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                            lineNumber: 234,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                    lineNumber: 232,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "vp-sb-search-wrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                            size: 14,
                                                            className: "vp-sb-search-icon"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                            lineNumber: 239,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "Visa name, country...",
                                                            className: "vp-sb-search-input",
                                                            value: searchQuery,
                                                            onChange: (e)=>setSearchQuery(e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                            lineNumber: 240,
                                                            columnNumber: 19
                                                        }, this),
                                                        searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "vp-sb-clear-btn",
                                                            onClick: ()=>setSearchQuery(''),
                                                            "aria-label": "Clear search",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                                lineNumber: 254,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                            lineNumber: 248,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                    lineNumber: 238,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "vp-sb-section",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "vp-sb-sec-head",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "vp-sb-sec-title",
                                                                    children: "COUNTRIES"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                                    lineNumber: 262,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "vp-sb-sec-sub",
                                                                    children: [
                                                                        countries.filter((c)=>c.key !== 'all').length,
                                                                        " destinations"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                                    lineNumber: 263,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                            lineNumber: 261,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "vp-sb-radio-list",
                                                            children: countries.map((c)=>{
                                                                const isChecked = selectedCountry === c.key;
                                                                const count = c.key === 'all' ? totalCount : c.count || 0;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "vp-sb-radio-row",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "vp-sb-radio-left",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "radio",
                                                                                    name: "visa-country",
                                                                                    className: "vp-sb-radio",
                                                                                    checked: isChecked,
                                                                                    onChange: ()=>{
                                                                                        setSelectedCountry(c.key);
                                                                                        setMobileOpen(false);
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                                                    lineNumber: 275,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `vp-sb-radio-label ${isChecked ? 'vp-sb-radio-label-active' : ''}`,
                                                                                    children: c.label
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                                                    lineNumber: 285,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                                            lineNumber: 274,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "vp-sb-count",
                                                                            children: count
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                                            lineNumber: 293,
                                                                            columnNumber: 41
                                                                        }, this)
                                                                    ]
                                                                }, c.key, true, {
                                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                                    lineNumber: 273,
                                                                    columnNumber: 25
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                            lineNumber: 268,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                    lineNumber: 260,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "vp-sb-section",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "vp-sb-sec-head",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "vp-sb-sec-title",
                                                                    children: "PRICE RANGE"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                                    lineNumber: 303,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "vp-sb-price-max",
                                                                    children: "Up to Rs 350,000"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                                    lineNumber: 304,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                            lineNumber: 302,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "vp-price-pills-list",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$visas$2f$data$2f$visasData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VISA_PRICE_TIERS"].map((tier)=>{
                                                                const isActive = selectedPrice === tier.key;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: `vp-price-tier-row ${isActive ? 'vp-price-tier-active' : ''}`,
                                                                    onClick: ()=>{
                                                                        setSelectedPrice(tier.key);
                                                                        setMobileOpen(false);
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "vp-price-tier-label",
                                                                            children: tier.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                                            lineNumber: 322,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        tier.sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "vp-price-tier-sub",
                                                                            children: tier.sub
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                                            lineNumber: 324,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, tier.key, true, {
                                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                                    lineNumber: 311,
                                                                    columnNumber: 25
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                            lineNumber: 307,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                    lineNumber: 301,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "vp-group-booking-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "vp-group-booking-head",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                            size: 14,
                                                            className: "vp-group-booking-icon"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                            lineNumber: 336,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "CUSTOM GROUP BOOKING"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                            lineNumber: 337,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                    lineNumber: 335,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "vp-group-booking-desc",
                                                    children: "Need fast-track corporate visas, embassy delegations, or family group processing?"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                    lineNumber: 339,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "vp-group-booking-btn",
                                                    onClick: handleWhatsApp,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$icons$2f$WhatsAppIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsAppIcon"], {
                                                            size: 15,
                                                            color: "#25D366"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                            lineNumber: 347,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Contact us"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                            lineNumber: 348,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                    lineNumber: 342,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                            lineNumber: 334,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                    className: "vp-main-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "vp-header-card",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    flexWrap: 'wrap',
                                                    gap: '0.5rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "vp-header-title",
                                                                children: "Global Visit Visa Services"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                                lineNumber: 359,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "vp-header-sub",
                                                                children: [
                                                                    "Showing ",
                                                                    visas.length,
                                                                    " of ",
                                                                    totalCount,
                                                                    " available visas"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                                lineNumber: 360,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                        lineNumber: 358,
                                                        columnNumber: 19
                                                    }, this),
                                                    hasFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "tr-clear-btn",
                                                        onClick: clearAll,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                                lineNumber: 366,
                                                                columnNumber: 23
                                                            }, this),
                                                            " Clear filters"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                        lineNumber: 365,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                lineNumber: 357,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                            lineNumber: 356,
                                            columnNumber: 15
                                        }, this),
                                        isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "vp-empty-state",
                                            style: {
                                                color: '#64748b'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    size: 32,
                                                    style: {
                                                        animation: 'spin 1s linear infinite'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                    lineNumber: 375,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "vp-empty-title",
                                                    children: "Loading visas..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                    lineNumber: 376,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                            lineNumber: 374,
                                            columnNumber: 17
                                        }, this) : visas.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "vp-cards-grid",
                                                    children: visas.map((visa)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$visas$2f$components$2f$VisaCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisaCard"], {
                                                            visa: visa
                                                        }, visa.id, false, {
                                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                            lineNumber: 382,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                    lineNumber: 380,
                                                    columnNumber: 19
                                                }, this),
                                                pagination?.has_more && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "gt-load-more-container",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "gt-load-more-btn",
                                                        onClick: handleLoadMore,
                                                        disabled: isLoadingMore,
                                                        children: isLoadingMore ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                    size: 16,
                                                                    style: {
                                                                        animation: 'spin 1s linear infinite'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                                    lineNumber: 399,
                                                                    columnNumber: 29
                                                                }, this),
                                                                "Loading more..."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                            lineNumber: 398,
                                                            columnNumber: 27
                                                        }, this) : `Load More (${totalCount - visas.length} remaining)`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                        lineNumber: 391,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                    lineNumber: 390,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                            lineNumber: 379,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "vp-empty-state",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "vp-empty-title",
                                                    children: "No visas found"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                    lineNumber: 411,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "vp-empty-desc",
                                                    children: "Try adjusting your filters or search keywords."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                    lineNumber: 412,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "vp-empty-reset-btn",
                                                    onClick: clearAll,
                                                    children: "Reset Filters"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                                    lineNumber: 415,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                            lineNumber: 410,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                                    lineNumber: 354,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                    lineNumber: 190,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tr-overlay",
                onClick: ()=>setMobileOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                lineNumber: 429,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                lineNumber: 432,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$Modals$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modals"], {
                isContactOpen: isContactOpen,
                onCloseContact: ()=>setIsContactOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/features/visas/components/VisasPage.jsx",
                lineNumber: 435,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/visas/components/VisasPage.jsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_s(VisasPage, "2e/3KhyKY4l+v7M7hQcuDXGeNlE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"]
    ];
});
_c = VisasPage;
const __TURBOPACK__default__export__ = VisasPage;
var _c;
__turbopack_context__.k.register(_c, "VisasPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/visas/data/visasData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VISA_BENEFITS",
    ()=>VISA_BENEFITS,
    "VISA_CATALOG_12",
    ()=>VISA_CATALOG_12,
    "VISA_CATEGORIES",
    ()=>VISA_CATEGORIES,
    "VISA_COUNTRIES_FILTER",
    ()=>VISA_COUNTRIES_FILTER,
    "VISA_DATA",
    ()=>VISA_DATA,
    "VISA_PRICE_TIERS",
    ()=>VISA_PRICE_TIERS
]);
const VISA_CATEGORIES = [
    {
        id: 'all',
        label: 'All Visas'
    },
    {
        id: 'fast-track',
        label: '⚡ Popular Fast-Track'
    },
    {
        id: 'middle-east',
        label: 'Middle East'
    },
    {
        id: 'central-asia',
        label: 'Central Asia'
    },
    {
        id: 'far-east',
        label: 'Far East'
    },
    {
        id: 'europe-uk',
        label: 'Europe & UK'
    }
];
const VISA_DATA = [];
const VISA_BENEFITS = [
    {
        id: 'audit',
        icon: 'shield-check',
        title: 'Pre-Audit Document Verification',
        description: 'Our visa assistance starts before your file even reaches the embassy. Every passport copy and photo goes through document verification first, so we catch mistakes that usually cause rejections.',
        bgColor: '#ffffff',
        borderColor: '#e2e8f0',
        iconColor: '#0284c7'
    },
    {
        id: 'fast-track',
        icon: 'zap',
        title: 'Fast-Track 24–48h Delivery',
        description: "Once your e-Visa is approved, it's sent straight to your email and WhatsApp within a day or two, so you're not left waiting on visa processing updates.",
        bgColor: '#fffdf5',
        borderColor: '#fef08a',
        iconColor: '#d97706'
    },
    {
        id: 'case-officer',
        icon: 'headphones',
        title: 'Dedicated Visa Case Officer',
        description: 'One visa case officer manages your entire application, offering direct visa assistance for Schengen, UK, and USA visa applications from start to finish.',
        bgColor: '#f0fdf9',
        borderColor: '#99f6e4',
        iconColor: '#0d9488'
    }
];
const VISA_COUNTRIES_FILTER = [
    {
        key: 'all',
        label: 'All Countries',
        count: 18
    },
    {
        key: 'dubai',
        label: 'Dubai / UAE',
        count: 1
    },
    {
        key: 'baku',
        label: 'Baku, Azerbaijan',
        count: 1
    },
    {
        key: 'malaysia',
        label: 'Malaysia',
        count: 1
    },
    {
        key: 'singapore',
        label: 'Singapore',
        count: 1
    },
    {
        key: 'saudi',
        label: 'Saudi Arabia',
        count: 1
    },
    {
        key: 'schengen',
        label: 'Europe / Schengen',
        count: 3
    },
    {
        key: 'uk',
        label: 'United Kingdom',
        count: 1
    },
    {
        key: 'canada',
        label: 'Canada',
        count: 4
    },
    {
        key: 'australia',
        label: 'Australia',
        count: 1
    },
    {
        key: 'bahrain',
        label: 'Bahrain',
        count: 1
    },
    {
        key: 'thailand',
        label: 'Thailand',
        count: 1
    },
    {
        key: 'turkey',
        label: 'Turkey',
        count: 1
    }
];
const VISA_PRICE_TIERS = [
    {
        key: 'all',
        label: 'All Prices',
        min: 0,
        max: Infinity
    },
    {
        key: 'under-60k',
        label: 'Under PKR 60,000',
        sub: 'Smart & Budget Value',
        min: 0,
        max: 60000
    },
    {
        key: '60k-120k',
        label: 'PKR 60,000 - 120,000',
        sub: '4★ & 5★ Comfort',
        min: 60000,
        max: 120000
    },
    {
        key: '120k-200k',
        label: 'PKR 120,000 - 200,000',
        sub: 'Haram & Sea Views',
        min: 120000,
        max: 200000
    },
    {
        key: '200k-plus',
        label: 'PKR 200,000+',
        sub: 'Royal Suites & Icons',
        min: 200000,
        max: Infinity
    }
];
const VISA_CATALOG_12 = [
    {
        id: 'australia-tourist',
        title: 'Australia Tourist Visa',
        country: 'Australia',
        countryKey: 'singapore',
        duration: '15-20 days',
        pricePKR: '55,000',
        priceNumeric: 55000,
        badge: 'E-VISA',
        image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80',
        accentGradient: 'linear-gradient(90deg, #f59e0b 0%, #84cc16 35%, #10b981 55%, #06b6d4 75%, #0080f6 100%)'
    },
    {
        id: 'canada-visitor-1',
        title: 'Canada Visitor Visa',
        country: 'Canada',
        countryKey: 'dubai',
        duration: '10-15 days',
        pricePKR: '60,000',
        priceNumeric: 60000,
        badge: 'E-VISA',
        image: 'https://images.unsplash.com/photo-1517935703635-27c946452995?auto=format&fit=crop&w=800&q=80',
        accentGradient: 'linear-gradient(90deg, #ef4444 0%, #f97316 40%, #eab308 70%, #10b981 100%)'
    },
    {
        id: 'canada-visitor-2',
        title: 'Canada Visitor Visa',
        country: 'Canada',
        countryKey: 'malaysia',
        duration: '10-15 days',
        pricePKR: '60,000',
        priceNumeric: 60000,
        badge: 'E-VISA',
        image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80',
        accentGradient: 'linear-gradient(90deg, #06b6d4 0%, #3b82f6 50%, #ec4899 100%)'
    },
    {
        id: 'schengen-1',
        title: 'Schengen Visa',
        country: 'Europe / Schengen',
        countryKey: 'singapore',
        duration: '10-15 days',
        pricePKR: '50,000',
        priceNumeric: 50000,
        badge: 'E-VISA',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
        accentGradient: 'linear-gradient(90deg, #10b981 0%, #06b6d4 50%, #8b5cf6 100%)'
    },
    {
        id: 'schengen-2',
        title: 'Schengen Visa',
        country: 'Europe / Schengen',
        countryKey: 'indonesia',
        duration: '10-15 days',
        pricePKR: '50,000',
        priceNumeric: 50000,
        badge: 'E-VISA',
        image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
        accentGradient: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)'
    },
    {
        id: 'dubai-uae',
        title: 'Dubai (UAE) Visit Visa',
        country: 'United Arab Emirates',
        countryKey: 'dubai',
        duration: '2-3 days',
        pricePKR: '44,500',
        priceNumeric: 44500,
        badge: 'E-VISA',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
        accentGradient: 'linear-gradient(90deg, #f59e0b 0%, #84cc16 35%, #10b981 55%, #06b6d4 75%, #0080f6 100%)'
    },
    {
        id: 'new-zealand-visitor',
        title: 'New Zealand Visitor Visa',
        country: 'New Zealand',
        countryKey: 'singapore',
        duration: '20-25 days',
        pricePKR: '65,000',
        priceNumeric: 65000,
        badge: 'E-VISA',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
        accentGradient: 'linear-gradient(90deg, #10b981 0%, #06b6d4 50%, #6366f1 100%)'
    },
    {
        id: 'canada-visitor-3',
        title: 'Canada Visitor Visa',
        country: 'Canada',
        countryKey: 'malaysia',
        duration: '10-15 days',
        pricePKR: '60,000',
        priceNumeric: 60000,
        badge: 'E-VISA',
        image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80',
        accentGradient: 'linear-gradient(90deg, #f59e0b 0%, #10b981 50%, #0080f6 100%)'
    },
    {
        id: 'canada-visitor-4',
        title: 'Canada Visitor Visa',
        country: 'Canada',
        countryKey: 'indonesia',
        duration: '10-15 days',
        pricePKR: '60,000',
        priceNumeric: 60000,
        badge: 'E-VISA',
        image: 'https://images.unsplash.com/photo-1519832979-6fa011b87667?auto=format&fit=crop&w=800&q=80',
        accentGradient: 'linear-gradient(90deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%)'
    },
    {
        id: 'singapore-tourist',
        title: 'Singapore Tourist Visa',
        country: 'Singapore',
        countryKey: 'singapore',
        duration: '3-5 days',
        pricePKR: '48,000',
        priceNumeric: 48000,
        badge: 'E-VISA',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
        accentGradient: 'linear-gradient(90deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)'
    },
    {
        id: 'azerbaijan',
        title: 'Baku, Azerbaijan Express Visa',
        country: 'Azerbaijan',
        countryKey: 'baku',
        duration: '3 days',
        pricePKR: '16,500',
        priceNumeric: 16500,
        badge: 'E-VISA',
        image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80',
        accentGradient: 'linear-gradient(90deg, #10b981 0%, #06b6d4 50%, #8b5cf6 100%)'
    },
    {
        id: 'bahrain-tourist',
        title: 'Bahrain Tourist Visa',
        country: 'Bahrain',
        countryKey: 'bahrain',
        duration: '3-5 days',
        pricePKR: '32,000',
        priceNumeric: 32000,
        badge: 'E-VISA',
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
        accentGradient: 'linear-gradient(90deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%)'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/blog.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.client.ts [app-client] (ecmascript)");
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])('/blog/list', Object.keys(body).length > 0 ? body : {}, {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])('/blog/list', body);
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])('/blog/lookups', {
                cache: "no-store"
            });
            return res.data ?? null;
        } catch  {
            return null;
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/content.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Content Service — WorldTrackTravel
 *
 * Endpoints from docs/frontend-api-integration.md § Team, Testimonials, Contact Info.
 */ __turbopack_context__.s([
    "contentService",
    ()=>contentService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.client.ts [app-client] (ecmascript)");
;
const contentService = {
    /**
   * Fetch FAQ items via POST /hotel/faqs.
   */ async getFaqs () {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])('/hotel/faqs', {}, {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])('/team/list', {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])('/testimonials/list', body, {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])('/admin/contact/info', {
                cache: "no-store"
            });
            return res.data ?? null;
        } catch  {
            return null;
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/flight.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Flight / Group Tickets Service — WorldTrackTravel
 *
 * Endpoints:
 * - POST /group-tickets/list (listing with filters and pagination)
 * - GET  /group-tickets/lookups (durations, departure_dates, airlines, routes)
 *
 * Individual ticket items do not contain item-level SEO;
 * page-level SEO is fetched via /seo/page/group-tickets.
 */ __turbopack_context__.s([
    "flightService",
    ()=>flightService,
    "normalizeGroupTicket",
    ()=>normalizeGroupTicket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.client.ts [app-client] (ecmascript)");
;
function normalizeGroupTicket(item) {
    if (!item || typeof item !== 'object') {
        return {
            id: String(Math.random()),
            airlineId: undefined,
            airlineCode: 'SV',
            airlineName: 'Airline',
            airlineLogo: null,
            acType: 'Boeing 777-300ER',
            routeId: undefined,
            route: 'ISLAMABAD - JEDDAH - ISLAMABAD',
            sector: 'ISLAMABAD - JEDDAH - ISLAMABAD',
            duration: 15,
            outboundDate: '',
            outboundTime: '',
            outboundFlight: '',
            inboundDate: '',
            inboundTime: '',
            inboundFlight: '',
            baggage: '46 KG (2 Pcs × 23 KG)',
            seatsLeft: 10,
            pricePKR: 0,
            highlight: null
        };
    }
    const routeObj = typeof item.route === 'object' && item.route ? item.route : null;
    const routeName = routeObj?.name || (typeof item.route === 'string' ? item.route : '') || item.name || 'ISLAMABAD - JEDDAH - ISLAMABAD';
    const routeId = routeObj?.id ? Number(routeObj.id) : undefined;
    const airlineObj = typeof item.airline === 'object' && item.airline ? item.airline : null;
    const airlineId = airlineObj?.id ? Number(airlineObj.id) : item.airline_id ? Number(item.airline_id) : undefined;
    const airlineName = airlineObj?.name || (typeof item.airlineName === 'string' ? item.airlineName : '') || (typeof item.airline === 'string' ? item.airline : '') || 'Airline';
    // Fallback airline code if null from API
    let airlineCode = airlineObj?.code || (typeof item.airlineCode === 'string' ? item.airlineCode : '');
    if (!airlineCode) {
        const upperName = airlineName.toUpperCase();
        if (upperName.includes('PIA') || upperName.includes('PAKISTAN')) {
            airlineCode = 'PK';
        } else if (upperName.includes('AIRSIAL')) {
            airlineCode = 'PF';
        } else if (upperName.includes('SAUDI')) {
            airlineCode = 'SV';
        } else if (upperName.includes('EMIRATES')) {
            airlineCode = 'EK';
        } else if (upperName.includes('FLYNAS')) {
            airlineCode = 'XY';
        } else {
            airlineCode = airlineName.replace(/[^a-zA-Z]/g, '').slice(0, 2).toUpperCase() || 'GT';
        }
    }
    const airlineLogo = airlineObj?.logo || (typeof item.airlineLogo === 'string' ? item.airlineLogo : null);
    const outboundDate = item.departure?.date || item.outboundDate || item.departure_date || '';
    const outboundFlightCode = item.departure?.airline_code || item.outboundFlight || '';
    const outboundFlight = outboundFlightCode ? /^[A-Z0-9]{2,3}\s/i.test(outboundFlightCode) ? outboundFlightCode : `${airlineCode} ${outboundFlightCode}`.trim() : '';
    const outboundTime = item.departure?.flight_time ? `${item.departure.flight_time.slice(0, 5)} - ${item.departure.land_time ? item.departure.land_time.slice(0, 5) : ''}`.trim() : item.outboundTime || '';
    const inboundDate = item.arrival?.date || item.inboundDate || '';
    const inboundFlightCode = item.arrival?.airline_code || item.inboundFlight || '';
    const inboundFlight = inboundFlightCode ? /^[A-Z0-9]{2,3}\s/i.test(inboundFlightCode) ? inboundFlightCode : `${airlineCode} ${inboundFlightCode}`.trim() : '';
    const inboundTime = item.arrival?.flight_time ? `${item.arrival.flight_time.slice(0, 5)} - ${item.arrival.land_time ? item.arrival.land_time.slice(0, 5) : ''}`.trim() : item.inboundTime || '';
    const baggage = item.departure?.luggage || item.arrival?.luggage || item.baggage || '46 KG (2 Pcs × 23 KG)';
    const priceNum = typeof item.price === 'string' ? parseFloat(item.price) : typeof item.price === 'number' ? item.price : item.pricePKR || 0;
    const durationNum = typeof item.duration === 'string' ? parseInt(item.duration, 10) : typeof item.duration === 'number' ? item.duration : undefined;
    return {
        id: String(item.id || Math.random()),
        airlineId,
        airlineCode,
        airlineName,
        airlineLogo,
        acType: item.acType || 'Boeing 777-300ER',
        routeId,
        route: routeName,
        sector: routeName,
        duration: durationNum,
        outboundDate,
        outboundTime,
        outboundFlight,
        inboundDate,
        inboundTime,
        inboundFlight,
        baggage,
        seatsLeft: item.seats_left ?? item.seatsLeft ?? 10,
        pricePKR: priceNum,
        highlight: item.highlight || null
    };
}
const flightService = {
    /**
   * Paginated group ticket listing with full API filter fields.
   * - Request without filters: {}
   * - Request with filters: { filters: { name, duration, departure_date, airlines, routes, price_range, nextPage, perPage } }
   * - Load more: keep prior filters, update nextPage
   */ async getGroupTicketsPaginated (filters) {
        try {
            const hasFilters = filters && Object.entries(filters).some(([k, v])=>{
                if (v === undefined || v === null || v === '') return false;
                if (Array.isArray(v)) return v.length > 0;
                return true;
            });
            const body = hasFilters ? {
                filters
            } : {};
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])('/group-tickets/list', body, {
                cache: 'no-store'
            });
            const rawTickets = Array.isArray(res.data) ? res.data : [];
            return {
                tickets: rawTickets.map(normalizeGroupTicket),
                rawTickets,
                pagination: res.pagination
            };
        } catch  {
            return {
                tickets: [],
                rawTickets: [],
                pagination: undefined
            };
        }
    },
    /**
   * Fetch group flights list via POST /group-tickets/list.
   */ async getGroupFlights (filters) {
        try {
            let apiFilters = {};
            if (filters) {
                if ('name' in filters && filters.name) apiFilters.name = filters.name;
                if ('searchQuery' in filters && filters.searchQuery) apiFilters.name = filters.searchQuery;
                if ('duration' in filters && filters.duration) apiFilters.duration = filters.duration;
                if ('departure_date' in filters && filters.departure_date) apiFilters.departure_date = filters.departure_date;
                if ('dates' in filters && filters.dates) apiFilters.departure_date = filters.dates;
                if ('airlines' in filters && filters.airlines) {
                    // If numeric array, pass directly
                    if (typeof filters.airlines[0] === 'number') {
                        apiFilters.airlines = filters.airlines;
                    }
                }
                if ('airlineIds' in filters && filters.airlineIds) apiFilters.airlines = filters.airlineIds;
                if ('routes' in filters && filters.routes) apiFilters.routes = filters.routes;
                if ('routeIds' in filters && filters.routeIds) apiFilters.routes = filters.routeIds;
                if ('price_range' in filters && filters.price_range) apiFilters.price_range = filters.price_range;
                if ('nextPage' in filters && filters.nextPage) apiFilters.nextPage = filters.nextPage;
                if ('perPage' in filters && filters.perPage) apiFilters.perPage = filters.perPage;
            }
            const { tickets } = await this.getGroupTicketsPaginated(Object.keys(apiFilters).length > 0 ? apiFilters : undefined);
            return tickets;
        } catch  {
            return [];
        }
    },
    /**
   * GET /group-tickets/lookups
   * Returns durations, departure_dates, airlines, routes.
   */ async getGroupTicketLookups () {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])('/group-tickets/lookups', {
                cache: 'no-store'
            });
            return res.data ?? null;
        } catch  {
            return null;
        }
    },
    async getDurations () {
        const lookups = await this.getGroupTicketLookups();
        if (!lookups || !Array.isArray(lookups.durations)) return [
            15,
            21,
            28
        ];
        return lookups.durations.map((d)=>typeof d === 'number' ? d : Number(d.id || d.name || d.duration)).filter((n)=>!isNaN(n) && n > 0);
    },
    async getDepartureDates () {
        const lookups = await this.getGroupTicketLookups();
        if (!lookups || !Array.isArray(lookups.departure_dates)) return [];
        return lookups.departure_dates.map((d)=>typeof d === 'string' ? d : d.departure_date || d.name || '').filter(Boolean);
    },
    async getAirlines () {
        const lookups = await this.getGroupTicketLookups();
        if (!lookups || !Array.isArray(lookups.airlines)) return [];
        return lookups.airlines.map((a)=>({
                id: Number(a.id || 0),
                code: a.code || (a.name ? a.name.slice(0, 2).toUpperCase() : 'AL'),
                name: a.name || 'Airline',
                logo: a.logo || null,
                count: a.tickets_count ?? a.count ?? 1
            }));
    },
    async getSectors () {
        const lookups = await this.getGroupTicketLookups();
        if (!lookups || !Array.isArray(lookups.routes)) return [];
        return lookups.routes.map((r)=>{
            const id = Number(r.id || 0);
            const name = r.name || r.key || 'Sector';
            const label = name.split(' - ').slice(0, 2).join(' - ');
            return {
                id,
                key: name,
                label,
                fullLabel: name,
                count: r.tickets_count ?? r.count ?? 1
            };
        });
    },
    /** Aliases for compatibility */ getAirlinesList () {
        return this.getAirlines();
    },
    getSectorsRoutes () {
        return this.getSectors();
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$flight$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/flight.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hotel$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/hotel.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$visa$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/visa.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$tour$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/tour.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$umrah$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/umrah.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/blog.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/content.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transport$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/transport.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$inquiry$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/inquiry.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$seo$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/seo.service.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/inquiry.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inquiryService",
    ()=>inquiryService
]);
/**
 * Inquiry Service — WorldTrackTravel
 *
 * Endpoints from docs/frontend-api-integration.md § Inquiry.
 * All inquiry APIs are public — no auth token required.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.client.ts [app-client] (ecmascript)");
;
const inquiryService = {
    /**
   * GET /inquiry/lookups
   * Returns dropdown data for inquiry forms:
   * sections, services, room_types, countries, custom_visa_countries,
   * transport_routes, vehicles.
   */ async getInquiryLookups () {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])('/inquiry/lookups', {
                cache: "no-store"
            });
            return res.data ?? null;
        } catch  {
            return null;
        }
    },
    /**
   * GET /inquiry/types
   * Returns accepted inquiry type definitions.
   */ async getInquiryTypes () {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])('/inquiry/types', {
                cache: "no-store"
            });
            return Array.isArray(res.data) ? res.data : [];
        } catch  {
            return [];
        }
    },
    /**
   * POST /inquiry/submit
   * Submits an inquiry. No login required.
   * Returns success response or throws ApiError on failure.
   */ async submitInquiry (data) {
        // Note: inquiry/submit does not follow the standard envelope — it returns
        // { message, data, accepted_types, response } directly.
        const raw = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])('/inquiry/submit', data);
        // Handle both envelope-wrapped and direct response shapes
        if (raw.data && 'message' in raw.data) {
            return raw.data;
        }
        return raw;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/seo.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "seoService",
    ()=>seoService
]);
/**
 * SEO Service — WorldTrackTravel
 *
 * All SEO API endpoints from docs/frontend-api-integration.md.
 * Use src/lib/seo.ts for cached SEO utilities in page metadata.
 * Use this service for direct/raw SEO API calls (e.g. middleware redirects).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.client.ts [app-client] (ecmascript)");
;
const seoService = {
    /**
   * GET /seo/global
   * Global SEO settings — used as final fallback for all pages.
   */ async getGlobalSeo () {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])('/seo/global', {
                cache: "no-store"
            });
            return res.data ?? null;
        } catch  {
            return null;
        }
    },
    /**
   * GET /seo/page/{page_key}
   * Page-level SEO for listing and static pages.
   */ async getPageSeo (pageKey) {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(`/seo/page/${pageKey}`, {
                cache: "no-store"
            });
            return res.data ?? null;
        } catch  {
            return null;
        }
    },
    /**
   * GET /seo/redirects
   * SEO redirect rules — use in Next.js middleware or next.config redirects.
   */ async getSeoRedirects () {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])('/seo/redirects', {
                cache: "no-store"
            });
            return Array.isArray(res.data) ? res.data : [];
        } catch  {
            return [];
        }
    },
    /**
   * GET /seo/404-routes
   * Fallback routes for missing/deleted dynamic URLs.
   */ async getSeo404Routes () {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])('/seo/404-routes', {
                cache: "no-store"
            });
            return Array.isArray(res.data) ? res.data : [];
        } catch  {
            return [];
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/tour.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.client.ts [app-client] (ecmascript)");
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])('/tour/list', body, {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])('/tour/list', {}, {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])('/tour/lookups', {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/transport.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transportService",
    ()=>transportService
]);
/**
 * Transport Service — WorldTrackTravel
 *
 * Endpoints from docs/frontend-api-integration.md § Transport.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.client.ts [app-client] (ecmascript)");
;
const transportService = {
    /**
   * GET /transport/list
   * Full transport listing including vehicle_types and route/price data.
   * Use this for the transport listing page table/cards.
   */ async getTransportListing () {
        try {
            // Transport endpoint returns { vehicle_types, data, response } — not the
            // standard { response, data } envelope. Handle both shapes.
            const raw = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])('/transport/list', {
                cache: "no-store"
            });
            // If envelope-unwrapped, raw.data is ApiTransportListing
            if (raw.data && 'vehicle_types' in raw.data) {
                return raw.data;
            }
            // If the endpoint returned the object at root level
            const rootLevel = raw;
            if (rootLevel.vehicle_types) return rootLevel;
            return null;
        } catch  {
            return null;
        }
    },
    /**
   * GET /transport/master/details
   * Vehicle types and transport routes — use for filter UI dropdowns.
   */ async getTransportMasterDetails () {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])('/transport/master/details', {
                cache: "no-store"
            });
            return res.data;
        } catch  {
            return null;
        }
    },
    /**
   * POST /transport/rate
   * Single transport rate for a specific route + vehicle combination.
   * Used for transport detail pages.
   */ async getSingleTransportRate (routeId, vehicleId) {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])('/transport/rate', {
                route_id: routeId,
                vehicle_id: vehicleId
            });
            return res.data ?? null;
        } catch  {
            return null;
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/umrah.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.client.ts [app-client] (ecmascript)");
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])('/umrah-packages/list', Object.keys(apiFilters).length > 0 ? {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])('/umrah-packages/list', {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])('/umrah-packages/list', {});
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])('/umrah-packages/lookups', {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])('/custom-umrah-packages/list', {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])('/custom-umrah-packages/lookups', {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])('/group-umrah-packages/list', body, {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])('/group-umrah-packages/list', {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])('/group-umrah-packages/list', {});
            const list = Array.isArray(res.data) ? res.data : [];
            const found = list.find((p)=>String(p.id) === id || p.seo?.url_slug === id);
            if (found) return normalizeGroupUmrahPackage(found);
            return null;
        } catch  {
            return null;
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/visa.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.client.ts [app-client] (ecmascript)");
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])('/visa/list', body, {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])('/visa/list', {}, {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])('/inquiry/lookups', {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])('/calculator/visa/type', {
                cache: "no-store"
            });
            return Array.isArray(res.data) ? res.data : [];
        } catch  {
            return [];
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/AboutSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutSection",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flag.mjs [app-client] (ecmascript) <export default as Flag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2d$takeoff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlaneTakeoff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plane-takeoff.mjs [app-client] (ecmascript) <export default as PlaneTakeoff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/medal.mjs [app-client] (ecmascript) <export default as Medal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
'use client';
;
;
;
;
/* Mosque Silhouette Icon (Dedicated Haramain Desk & Govt. Ministry Lic) */ function MosqueIcon({ size = 18, color = 'currentColor', className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2C12 2 11.2 3.8 9.5 5C8 6 7.5 7.5 7.5 9.5V11H6V7.5L4.5 6L3 7.5V20.5C3 21 3.5 21.5 4 21.5H8.5V16.5C8.5 14.8 9.8 13.5 11.5 13.5H12.5C14.2 13.5 15.5 14.8 15.5 16.5V21.5H20C20.5 21.5 21 21 21 20.5V7.5L19.5 6L18 7.5V11H16.5V9.5C16.5 7.5 16 6 14.5 5C12.8 3.8 12 2 12 2Z"
        }, void 0, false, {
            fileName: "[project]/src/shared/components/AboutSection.jsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/components/AboutSection.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = MosqueIcon;
/* Scalloped Badge with Checkmark (Used for Verified Visa Success Rate & IATA Member) */ function ScallopedBadgeCheck({ size = 20, bgColor = '#10b981', checkColor = '#ffffff', className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
                fill: bgColor
            }, void 0, false, {
                fileName: "[project]/src/shared/components/AboutSection.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m9 12 2 2 4-4",
                stroke: checkColor,
                strokeWidth: "2.4",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/AboutSection.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/components/AboutSection.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c1 = ScallopedBadgeCheck;
/* Dual Airplanes Icon for Airline Partners Fleet */ function DualPlanesIcon({ size = 20, color = '#0284c7', className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.6.2-2 1-.3.5-.2 1.2.3 1.6l4.2 3.4-2.1 2.1-2.1-.4c-.4-.1-.8.1-1.1.4l-.3.3c-.3.3-.3.7 0 1l2.5 2.5c.3.3.7.3 1 0l.3-.3c.3-.3.5-.7.4-1.1l-.4-2.1 2.1-2.1 3.4 4.2c.4.5 1.1.6 1.6.3.8-.4 1.2-1.2 1-2Z",
                transform: "translate(4, -3) scale(0.72)"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/AboutSection.jsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.6.2-2 1-.3.5-.2 1.2.3 1.6l4.2 3.4-2.1 2.1-2.1-.4c-.4-.1-.8.1-1.1.4l-.3.3c-.3.3-.3.7 0 1l2.5 2.5c.3.3.7.3 1 0l.3-.3c.3-.3.5-.7.4-1.1l-.4-2.1 2.1-2.1 3.4 4.2c.4.5 1.1.6 1.6.3.8-.4 1.2-1.2 1-2Z",
                transform: "translate(-1, 9) scale(0.48)"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/AboutSection.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/components/AboutSection.jsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_c2 = DualPlanesIcon;
/* DTS Approved Shield Icon */ function ShieldCheckDark({ size = 15, color = '#0f172a', className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/shared/components/AboutSection.jsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m9 12 2 2 4-4",
                stroke: "#ffffff",
                strokeWidth: "2.2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/AboutSection.jsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/components/AboutSection.jsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_c3 = ShieldCheckDark;
function AboutSection({ isAboutPage = false }) {
    const stats = [
        {
            id: 'travelers',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2d$takeoff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlaneTakeoff$3e$__["PlaneTakeoff"], {
                size: 20,
                className: "text-sky-600"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/AboutSection.jsx",
                lineNumber: 116,
                columnNumber: 13
            }, this),
            wrapBg: '#eff6ff',
            dotColor: '#0284c7',
            value: isAboutPage ? '21,000+' : '30,000+',
            title: isAboutPage ? 'Umrah Travelers Served' : 'Travelers Served',
            subtitle: 'Across Pakistan and international routes'
        },
        {
            id: 'legacy',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__["Medal"], {
                size: 20,
                className: "text-amber-500"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/AboutSection.jsx",
                lineNumber: 125,
                columnNumber: 13
            }, this),
            wrapBg: '#fffbeb',
            dotColor: '#f59e0b',
            value: '4+ Years',
            title: isAboutPage ? 'in the Industry' : 'Industry Legacy',
            subtitle: 'Established and trusted since 2022'
        },
        {
            id: 'visa-success',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScallopedBadgeCheck, {
                size: 20,
                bgColor: "#10b981",
                checkColor: "#ffffff"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/AboutSection.jsx",
                lineNumber: 134,
                columnNumber: 13
            }, this),
            wrapBg: '#ecfdf5',
            dotColor: '#10b981',
            value: '99.4%',
            title: 'Visa Success Rate',
            subtitle: 'Thorough pre-audit verification'
        },
        {
            id: 'airlines',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DualPlanesIcon, {
                size: 20,
                color: "#0284c7"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/AboutSection.jsx",
                lineNumber: 143,
                columnNumber: 13
            }, this),
            wrapBg: '#eff6ff',
            dotColor: '#0284c7',
            value: '15+',
            title: 'Airline Partners',
            subtitle: 'Direct wholesale connectivity'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "about-brand-section",
        id: "about",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "about-header-centered",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "about-eyebrow-badge",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    size: 15,
                                    className: "about-badge-icon"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isAboutPage ? 'ABOUT WORLD TRACK AVIATION' : 'WHO WE ARE'
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "about-main-title",
                            children: isAboutPage ? 'Crafting Meaningful Journeys & Sacred Memories Since 2022' : "Islamabad's Travel Agency for Umrah, Visas, Flights & Hotels"
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "about-lead-subtitle",
                            children: isAboutPage ? 'World Track Aviation is an IATA-accredited travel company based in Islamabad, working with families, corporate travelers, and Umrah pilgrims across Pakistan on transparent, well-planned trips.' : "World Track Aviation is a licensed, IATA-accredited travel company in Islamabad, built around one idea: booking a trip, a visa, or an Umrah package shouldn't feel complicated."
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "about-story-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "about-story-content",
                            children: [
                                isAboutPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "about-story-body",
                                    style: {
                                        fontSize: '15px',
                                        lineHeight: '1.75',
                                        color: '#334155'
                                    },
                                    children: [
                                        "We started as a small ticketing office with one goal: take the guesswork out of booking travel. Today the team handles everything from",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/umrah-packages",
                                            style: {
                                                color: '#0284c7',
                                                fontWeight: 600,
                                                textDecoration: 'underline'
                                            },
                                            children: "Umrah trips to Makkah and Madinah"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this),
                                        ", corporate delegations, and",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/tours",
                                            style: {
                                                color: '#0284c7',
                                                fontWeight: 600,
                                                textDecoration: 'underline'
                                            },
                                            children: "family holidays"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this),
                                        ' ',
                                        "to places like Baku, Dubai, and across the Far East. Every booking comes with clear pricing upfront and support you can actually reach, whether you're mid-flight or still deciding where to go."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "about-story-lead",
                                            children: "Built to make travel planning simple, World Track Aviation has grown from a small ticketing office into a full-service travel company for Pakistan."
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "about-story-body",
                                            children: "Since 2022, we've helped families, corporate teams, and pilgrims across the country plan trips that actually go the way they were supposed to. Whether it's an Umrah package with real hotel bookings near the Haramain, a visa application checked before it's submitted, or flights booked at rates that don't change at checkout, everything runs through one team, in one office, so you're never stuck explaining your booking to someone new."
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "about-mv-cards-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "about-mv-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "about-mv-icon-wrap bg-blue-light",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__["Flag"], {
                                                        size: 18,
                                                        fill: "#2563eb",
                                                        className: "text-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                        lineNumber: 208,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                    lineNumber: 207,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "about-mv-text",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "about-mv-title",
                                                            children: "Our Mission"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                            lineNumber: 211,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "about-mv-desc",
                                                            children: isAboutPage ? 'To deliver honest, well-organized travel experiences using modern booking tools without losing the personal side of service.' : 'To make booking Umrah trips, visas, and flights simple, reliable, and backed by real support at every step.'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                            lineNumber: 212,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                    lineNumber: 210,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                                            lineNumber: 206,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "about-mv-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "about-mv-icon-wrap bg-amber-light",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        size: 18,
                                                        className: "text-amber-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                        lineNumber: 223,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                    lineNumber: 222,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "about-mv-text",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "about-mv-title",
                                                            children: "Our Vision"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                            lineNumber: 226,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "about-mv-desc",
                                                            children: isAboutPage ? "To become Pakistan's most trusted name in travel and Umrah management, known for straightforward pricing and clients who come back." : 'To be the travel company Pakistani families and pilgrims trust first, known for fair pricing and lasting service.'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                            lineNumber: 227,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                    lineNumber: 225,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "about-certifications-bar",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "cert-label",
                                            children: "CERTIFIED BY:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cert-items-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "cert-badge-item",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScallopedBadgeCheck, {
                                                            size: 15,
                                                            bgColor: "#0f172a",
                                                            checkColor: "#ffffff"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                            lineNumber: 241,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "IATA Member"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                                    lineNumber: 242,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " #27351170"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                            lineNumber: 242,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                    lineNumber: 240,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "cert-badge-item",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MosqueIcon, {
                                                            size: 14,
                                                            color: "#0f172a"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                            lineNumber: 245,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Govt. Ministry Lic"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                                    lineNumber: 246,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " No. ID-2637"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                            lineNumber: 246,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                    lineNumber: 244,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "cert-badge-item",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShieldCheckDark, {
                                                            size: 14,
                                                            color: "#0f172a"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                            lineNumber: 249,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "DTS Approved"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                                lineNumber: 250,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                            lineNumber: 250,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                    lineNumber: 248,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "about-media-column",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "about-media-frame",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
                                        alt: "World Track Aviation Global Travel",
                                        className: "about-hero-img",
                                        loading: "lazy",
                                        decoding: "async",
                                        width: 560,
                                        height: 420
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/AboutSection.jsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "about-floating-rating",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                size: 14,
                                                className: "rating-star-icon"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "4.9 / 5.0 Star Rating"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/AboutSection.jsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "about-floating-desk-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "desk-icon-box",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MosqueIcon, {
                                                    size: 22,
                                                    color: "#ffffff"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                    lineNumber: 279,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                lineNumber: 278,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "desk-text-box",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "desk-title",
                                                        children: "Dedicated Haramain Desk"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                        lineNumber: 282,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "desk-desc",
                                                        children: "Makkah & Madinah Ground Coordinators 24/7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                        lineNumber: 283,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/AboutSection.jsx",
                                                lineNumber: 281,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/AboutSection.jsx",
                                        lineNumber: 277,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/AboutSection.jsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "about-stats-grid",
                    children: stats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "about-stat-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "stat-card-header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stat-icon-wrap",
                                            style: {
                                                backgroundColor: stat.wrapBg
                                            },
                                            children: stat.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                                            lineNumber: 295,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "stat-dot-indicator",
                                            style: {
                                                backgroundColor: stat.dotColor
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                                            lineNumber: 301,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                                    lineNumber: 294,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "stat-number-val",
                                    children: stat.value
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                                    lineNumber: 306,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "stat-title-txt",
                                    children: stat.title
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "stat-sub-txt",
                                    children: stat.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                                    lineNumber: 308,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, stat.id, true, {
                            fileName: "[project]/src/shared/components/AboutSection.jsx",
                            lineNumber: 293,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/shared/components/AboutSection.jsx",
                    lineNumber: 291,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/components/AboutSection.jsx",
            lineNumber: 154,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/components/AboutSection.jsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_c4 = AboutSection;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "MosqueIcon");
__turbopack_context__.k.register(_c1, "ScallopedBadgeCheck");
__turbopack_context__.k.register(_c2, "DualPlanesIcon");
__turbopack_context__.k.register(_c3, "ShieldCheckDark");
__turbopack_context__.k.register(_c4, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/AdvantageSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdvantageSection",
    ()=>AdvantageSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$percent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgePercent$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-percent.mjs [app-client] (ecmascript) <export default as BadgePercent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.mjs [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.mjs [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.mjs [app-client] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
'use client';
;
;
;
function AdvantageSection() {
    const advantages = [
        {
            id: 'iata',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                size: 22,
                className: "adv-icon text-blue-600"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/AdvantageSection.jsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            title: 'IATA Accredited Agency',
            description: 'Every ticket comes from an officially accredited travel agency, so your booking is protected and instantly confirmed, with no third-party resellers involved.'
        },
        {
            id: 'best-rate',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$percent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgePercent$3e$__["BadgePercent"], {
                size: 22,
                className: "adv-icon text-blue-600"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/AdvantageSection.jsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            title: 'Best Fare & Rate Guarantee',
            description: 'Our travel consultants check real-time fares across the airline network for corporate, family, and Umrah bookings, and match any lower verified wholesale rate.'
        },
        {
            id: 'haramain-team',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                size: 22,
                className: "adv-icon text-blue-600"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/AdvantageSection.jsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            title: 'Direct Haramain Ground Team',
            description: 'Our coordinators in Makkah and Madinah handle hotel check-ins, Nusuk Rawdah permits, private transfers, and Ziyarat visits, without a third-party contractor.'
        },
        {
            id: 'visa-rate',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                size: 22,
                className: "adv-icon text-blue-600"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/AdvantageSection.jsx",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            title: '99.4% Visa Success Rate',
            description: 'Every visa file gets document verification and visa assistance before it reaches the embassy, across multiple countries.'
        },
        {
            id: 'concierge',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"], {
                size: 22,
                className: "adv-icon text-blue-600"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/AdvantageSection.jsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            title: '24/7 Human Concierge',
            description: 'Get personalized travel assistance from a real advisor by phone, WhatsApp, or email at any hour, no automated call trees.'
        },
        {
            id: 'zero-fees',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                size: 22,
                className: "adv-icon text-blue-600"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/AdvantageSection.jsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            title: 'Transparent & Zero Hidden Fees',
            description: "The price you're quoted is the price you pay, with professional, upfront pricing and no hidden service charges."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "advantage-feature-section",
        id: "advantage",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "advantage-header-centered",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-eyebrow-badge advantage-eyebrow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    size: 16,
                                    className: "eyebrow-icon"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/AdvantageSection.jsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "THE WORLD TRACK AVIATION ADVANTAGE"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/AdvantageSection.jsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/components/AdvantageSection.jsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-main-title",
                            children: "Designed for Effortless Travel & Spiritual Peace"
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/AdvantageSection.jsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-sub-title",
                            children: "Real people handle your booking from start to finish, backed by direct airline access and over 30,000 travelers served."
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/AdvantageSection.jsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/components/AdvantageSection.jsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "advantage-cards-grid",
                    children: advantages.map((adv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "advantage-card-box",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "advantage-icon-wrapper",
                                    children: adv.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/AdvantageSection.jsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "advantage-card-title",
                                    children: adv.title
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/AdvantageSection.jsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "advantage-card-desc",
                                    children: adv.description
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/AdvantageSection.jsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, adv.id, true, {
                            fileName: "[project]/src/shared/components/AdvantageSection.jsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/shared/components/AdvantageSection.jsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/components/AdvantageSection.jsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/components/AdvantageSection.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c = AdvantageSection;
var _c;
__turbopack_context__.k.register(_c, "AdvantageSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/AirlineMarquee.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIRLINES_LIST",
    ()=>AIRLINES_LIST,
    "AirlineMarquee",
    ()=>AirlineMarquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const AIRLINES_LIST = [
    {
        id: 'serene',
        name: 'SereneAir',
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "26",
                        height: "26",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M4 22C12 22 18 16 26 8C20 12 14 14 4 14",
                                stroke: "#00a3e0",
                                strokeWidth: "3",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 12,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M8 26C15 26 21 21 28 14C23 17 17 19 8 19",
                                stroke: "#0f3b60",
                                strokeWidth: "2.5",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: 'inline-flex',
                            alignItems: 'center',
                            fontSize: '15px',
                            letterSpacing: '-0.2px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: '#0f3b60',
                                    fontWeight: 800
                                },
                                children: "Serene"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#00a3e0',
                                    fontWeight: 600
                                },
                                children: "Air"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'airsial',
        name: 'AirSial',
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "#044331",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: "12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#044331',
                            fontWeight: 900,
                            letterSpacing: '0.8px',
                            fontSize: '14.5px'
                        },
                        children: "AIRSIAL"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'flyjinnah',
        name: 'FlyJinnah',
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#e50914',
                            fontSize: '15px',
                            fontWeight: 500,
                            letterSpacing: '-0.2px'
                        },
                        children: [
                            "Fly",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    fontWeight: 900
                                },
                                children: "Jinnah"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 42,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            background: '#e50914',
                            color: '#ffffff',
                            fontSize: '9.5px',
                            fontWeight: 800,
                            borderRadius: '50%',
                            width: '18px',
                            height: '18px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            lineHeight: 1
                        },
                        children: "FJ"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'thai',
        name: 'Thai Airways',
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "26",
                        height: "22",
                        viewBox: "0 0 36 28",
                        fill: "none",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M4 14C12 4 24 4 32 14C24 24 12 24 4 14Z",
                                fill: "url(#thaiGradM)"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 14C18 7 26 7 32 14C26 21 18 21 12 14Z",
                                fill: "#eaaa00"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "thaiGradM",
                                    x1: "4",
                                    y1: "4",
                                    x2: "32",
                                    y2: "24",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            stopColor: "#49156e"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "1",
                                            stopColor: "#ce0058"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#49156e',
                            fontWeight: 900,
                            letterSpacing: '1px',
                            fontSize: '14.5px'
                        },
                        children: "THAI"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'malaysia',
        name: 'Malaysia Airlines',
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "22",
                        viewBox: "0 0 32 26",
                        fill: "none",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M2 18C10 18 20 12 30 4C22 10 14 12 2 12Z",
                                fill: "#d61a21"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M6 22C14 22 22 17 30 9C23 15 16 17 6 17Z",
                                fill: "#002b49"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#002b49',
                            fontWeight: 800,
                            fontSize: '13.5px',
                            letterSpacing: '-0.2px'
                        },
                        children: [
                            "malaysia",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#d61a21',
                                    fontWeight: 600,
                                    marginLeft: '3px'
                                },
                                children: "airlines"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 91,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                lineNumber: 85,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'emirates',
        name: 'Emirates',
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: '#d71921',
                    borderRadius: '5px',
                    padding: '3px 9px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: '#ffffff',
                        fontFamily: 'serif',
                        fontWeight: 900,
                        fontSize: '14px',
                        letterSpacing: '0.5px'
                    },
                    children: "Emirates"
                }, void 0, false, {
                    fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                lineNumber: 100,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'qatar',
        name: 'Qatar Airways',
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 32 32",
                        fill: "#5c0632",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M16 2C15 6 12 12 8 15L10 17C13 14 15 10 16 7C17 10 19 14 22 17L24 15C20 12 17 6 16 2Z"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 17C10 20 11 25 16 28C21 25 22 20 20 17C18 19 14 19 12 17Z"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            lineHeight: 1.05
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#5c0632',
                                    fontWeight: 900,
                                    letterSpacing: '0.8px',
                                    fontSize: '13px'
                                },
                                children: "QATAR"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#5c0632',
                                    fontWeight: 700,
                                    letterSpacing: '1.2px',
                                    fontSize: '7.5px'
                                },
                                children: "AIRWAYS"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                lineNumber: 122,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'airblue',
        name: 'Airblue',
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M4 18L10 6L14 6L8 18Z",
                                fill: "#0f3d79"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M11 18L17 6L21 6L15 18Z",
                                fill: "#00a4e4"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#0f3d79',
                            fontWeight: 800,
                            fontSize: '16px',
                            letterSpacing: '-0.4px'
                        },
                        children: "airblue"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                lineNumber: 138,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'pia',
        name: 'PIA',
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#bfa054',
                            fontSize: '19px',
                            fontWeight: 900,
                            fontStyle: 'italic',
                            lineHeight: 1
                        },
                        children: "PIA"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            lineHeight: 1.05
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#005a36',
                                    fontSize: '8.5px',
                                    fontWeight: 900,
                                    letterSpacing: '0.5px'
                                },
                                children: "PAKISTAN"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#005a36',
                                    fontSize: '6.5px',
                                    fontWeight: 600
                                },
                                children: "International Airlines"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                lineNumber: 153,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'oman',
        name: 'Oman Air',
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M6 22C12 24 20 22 26 14C22 17 16 17 10 14",
                                stroke: "#c59b27",
                                strokeWidth: "2.5",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M10 10C16 6 24 8 28 16C24 13 18 13 12 16",
                                stroke: "#007799",
                                strokeWidth: "2.5",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#1a2b3c',
                            fontWeight: 800,
                            letterSpacing: '0.8px',
                            fontSize: '13.5px'
                        },
                        children: [
                            "OMAN ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#c59b27'
                                },
                                children: "AIR"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 174,
                                columnNumber: 16
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                lineNumber: 168,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'uzbekistan',
        name: 'Uzbekistan Airways',
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "16",
                                cy: "16",
                                r: "14",
                                stroke: "#0072bc",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M8 18C12 13 20 13 24 18C20 16 12 16 8 18Z",
                                fill: "#00965e"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "16",
                                cy: "11.5",
                                r: "2.2",
                                fill: "#0072bc"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            lineHeight: 1.05
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#0072bc',
                                    fontWeight: 800,
                                    fontSize: '11px',
                                    letterSpacing: '0.4px'
                                },
                                children: "UZBEKISTAN"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#00965e',
                                    fontWeight: 700,
                                    fontSize: '7.5px',
                                    letterSpacing: '0.8px'
                                },
                                children: "AIRWAYS"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                lineNumber: 183,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'saudia',
        name: 'Saudi Arabian Airlines',
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M16 4V18M16 8C13 5 9 6 7 8C10 9 14 10 16 12C18 10 22 9 25 8C23 6 19 5 16 8Z",
                                stroke: "#006341",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9 24L23 20M23 24L9 20",
                                stroke: "#c99700",
                                strokeWidth: "2",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            lineHeight: 1.05
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#006341',
                                    fontWeight: 900,
                                    fontSize: '13.5px',
                                    letterSpacing: '0.8px'
                                },
                                children: "SAUDIA"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#64748b',
                                    fontWeight: 600,
                                    fontSize: '7px'
                                },
                                children: "Saudi Arabian Airlines"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                lineNumber: 200,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'malindo',
        name: 'Malindo Air',
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M4 20C12 22 22 18 28 8C22 13 14 15 4 15",
                                fill: "#c0142b"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "25",
                                cy: "9",
                                r: "2.5",
                                fill: "#f37021"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#c0142b',
                            fontWeight: 800,
                            fontSize: '13.5px',
                            letterSpacing: '-0.2px'
                        },
                        children: [
                            "malindo",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#f37021',
                                    fontWeight: 700,
                                    marginLeft: '3px'
                                },
                                children: "air"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 222,
                                columnNumber: 18
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                lineNumber: 216,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'airarabia',
        name: 'Air Arabia',
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "22",
                        height: "20",
                        viewBox: "0 0 32 24",
                        fill: "#e21836",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M4 14C12 8 20 8 28 4C22 12 14 16 4 14Z"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "28",
                                cy: "5",
                                r: "2.5",
                                fill: "#e21836"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#e21836',
                            fontWeight: 800,
                            fontSize: '14px',
                            letterSpacing: '-0.3px'
                        },
                        children: [
                            "air",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    fontWeight: 900
                                },
                                children: "arabia"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 237,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                lineNumber: 231,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'flydubai',
        name: 'Fly Dubai',
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 28 28",
                        fill: "none",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M4 20C10 20 18 14 24 6",
                                stroke: "#009fe3",
                                strokeWidth: "2.8",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M8 24C14 24 20 19 26 12",
                                stroke: "#f58220",
                                strokeWidth: "2.3",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: '14.5px',
                            letterSpacing: '-0.2px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: '#009fe3',
                                    fontWeight: 900
                                },
                                children: "fly"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#f58220',
                                    fontWeight: 800
                                },
                                children: "dubai"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                lineNumber: 246,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'turkish',
        name: 'Turkish Airlines',
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "16",
                                cy: "16",
                                r: "14",
                                fill: "#c70a0a"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M8 17C14 13 18 11 25 11C21 14 17 18 13 21C11 21 9 19 8 17Z",
                                fill: "#ffffff"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            lineHeight: 1.05
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#1d252c',
                                    fontWeight: 900,
                                    fontSize: '11.5px',
                                    letterSpacing: '0.4px'
                                },
                                children: "TURKISH"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#c70a0a',
                                    fontWeight: 800,
                                    fontSize: '8.5px',
                                    letterSpacing: '0.8px'
                                },
                                children: "AIRLINES"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                lineNumber: 262,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'jazeera',
        name: 'Jazeera',
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 28 28",
                        fill: "none",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M6 18C12 18 18 12 22 6C18 10 12 12 6 12",
                                fill: "#009cd9"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "23",
                                cy: "6",
                                r: "2.5",
                                fill: "#009cd9"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#009cd9',
                            fontWeight: 800,
                            fontSize: '15px',
                            letterSpacing: '-0.2px'
                        },
                        children: [
                            "jazeera",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#0c2340',
                                    fontWeight: 900
                                },
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 284,
                                columnNumber: 18
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                lineNumber: 278,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'gulfair',
        name: 'Gulf Air',
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M6 18C12 12 20 8 28 6C24 14 18 20 12 24C10 22 8 20 6 18Z",
                            fill: "#b38e44"
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            lineHeight: 1.05
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#1e293b',
                                    fontWeight: 900,
                                    fontSize: '12px',
                                    letterSpacing: '0.6px'
                                },
                                children: "GULF AIR"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#b38e44',
                                    fontWeight: 700,
                                    fontSize: '7px',
                                    letterSpacing: '1px'
                                },
                                children: "BAHRAIN"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                lineNumber: 293,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'etihad',
        name: 'Ethad Airways',
        render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "16,4 26,16 16,28 6,16",
                                stroke: "#bd995c",
                                strokeWidth: "2.2",
                                fill: "none"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "16,10 21,16 16,22 11,16",
                                fill: "#bd995c"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            lineHeight: 1.05
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#1f2421',
                                    fontWeight: 900,
                                    fontSize: '12px',
                                    letterSpacing: '1.2px'
                                },
                                children: "ETIHAD"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#bd995c',
                                    fontWeight: 700,
                                    fontSize: '7px',
                                    letterSpacing: '1.8px'
                                },
                                children: "AIRWAYS"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                lineNumber: 308,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    }
];
function AirlineMarquee({ trustText = '15+ Airlines. One Search. Trusted Travel Agency in Islamabad.' }) {
    // We duplicate the list to ensure perfectly seamless, continuous looping
    const duplicatedList = [
        ...AIRLINES_LIST,
        ...AIRLINES_LIST
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hero-trust-bar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "hero-trust-text",
                style: {
                    fontWeight: 800
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: trustText
                }, void 0, false, {
                    fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                    lineNumber: 329,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                lineNumber: 328,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "airline-marquee-container",
                "aria-label": "Partner Airlines",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "airline-marquee-track",
                    children: duplicatedList.map((airline, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `airline-badge-card logo-${airline.id}`,
                            title: airline.name,
                            children: airline.render()
                        }, `${airline.id}-${index}`, false, {
                            fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                            lineNumber: 334,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                    lineNumber: 332,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
                lineNumber: 331,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/components/AirlineMarquee.jsx",
        lineNumber: 327,
        columnNumber: 5
    }, this);
}
_c = AirlineMarquee;
var _c;
__turbopack_context__.k.register(_c, "AirlineMarquee");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/AppBar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppBar",
    ()=>AppBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$TopBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/TopBar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/Navbar.jsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function AppBar({ activeCategory = 'all', onSelectCategory, onOpenContact, heroContent = null }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "appbar-root",
        children: heroContent ? /* Hero layout: TopBar + Navbar float over the hero section starting from top: 0 */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hero-zone-wrapper",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero-header-top-group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$TopBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopBar"], {
                            transparent: true
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/AppBar.jsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {
                            activeCategory: activeCategory,
                            onSelectCategory: onSelectCategory,
                            onOpenContact: onOpenContact
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/AppBar.jsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/components/AppBar.jsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, this),
                heroContent
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/components/AppBar.jsx",
            lineNumber: 28,
            columnNumber: 9
        }, this) : /* Standalone layout: top bar + inline navbar */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$TopBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopBar"], {}, void 0, false, {
                    fileName: "[project]/src/shared/components/AppBar.jsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "navbar-inline-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {
                        activeCategory: activeCategory,
                        onSelectCategory: onSelectCategory,
                        onOpenContact: onOpenContact
                    }, void 0, false, {
                        fileName: "[project]/src/shared/components/AppBar.jsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/shared/components/AppBar.jsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/components/AppBar.jsx",
            lineNumber: 41,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/components/AppBar.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = AppBar;
var _c;
__turbopack_context__.k.register(_c, "AppBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/ErrorBoundary.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorBoundary",
    ()=>ErrorBoundary,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.mjs [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__import$2e$meta__ = {
    get url () {
        return __turbopack_context__.F("src/shared/components/ErrorBoundary.jsx");
    },
    env: {
        DEV: true,
        PROD: false,
        MODE: "development",
        BASE_URL: "/",
        SSR: false
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
;
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            errorInfo
        });
        // In production, send to your monitoring service (e.g. Sentry, Datadog)
        if ("TURBOPACK compile-time truthy", 1) {
            console.error('[ErrorBoundary caught error]:', error, errorInfo);
        }
    }
    handleReset = ()=>{
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null
        });
        window.location.href = '/';
    };
    handleReload = ()=>{
        window.location.reload();
    };
    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    minHeight: '70vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem 1.5rem',
                    textAlign: 'center',
                    background: '#f8fafc',
                    color: '#1e293b',
                    fontFamily: 'Outfit, Inter, sans-serif'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            background: '#fee2e2',
                            color: '#dc2626',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.25rem',
                            boxShadow: '0 4px 12px rgba(220, 38, 38, 0.12)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            size: 32
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/ErrorBoundary.jsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/shared/components/ErrorBoundary.jsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: '1.5rem',
                            fontWeight: '700',
                            marginBottom: '0.5rem',
                            color: '#0f172a'
                        },
                        children: "Something went wrong"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/components/ErrorBoundary.jsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            maxWidth: '460px',
                            color: '#64748b',
                            fontSize: '0.95rem',
                            lineHeight: '1.5',
                            marginBottom: '1.75rem'
                        },
                        children: "We encountered an unexpected issue while rendering this page. You can reload the page or return safely to the home page."
                    }, void 0, false, {
                        fileName: "[project]/src/shared/components/ErrorBoundary.jsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '0.75rem',
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: this.handleReload,
                                style: {
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.625rem 1.25rem',
                                    borderRadius: '8px',
                                    background: '#0284c7',
                                    color: '#ffffff',
                                    border: 'none',
                                    fontWeight: '600',
                                    fontSize: '0.875rem',
                                    cursor: 'pointer',
                                    transition: 'background 0.2s ease'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/ErrorBoundary.jsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    "Reload Page"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/ErrorBoundary.jsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: this.handleReset,
                                style: {
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.625rem 1.25rem',
                                    borderRadius: '8px',
                                    background: '#ffffff',
                                    color: '#334155',
                                    border: '1px solid #cbd5e1',
                                    fontWeight: '600',
                                    fontSize: '0.875rem',
                                    cursor: 'pointer',
                                    transition: 'border-color 0.2s ease'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/ErrorBoundary.jsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    "Go to Home"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/ErrorBoundary.jsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/ErrorBoundary.jsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    __TURBOPACK__import$2e$meta__.env.DEV && this.state.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        style: {
                            marginTop: '2rem',
                            textAlign: 'left',
                            maxWidth: '640px',
                            width: '100%'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                style: {
                                    cursor: 'pointer',
                                    color: '#64748b',
                                    fontSize: '0.85rem'
                                },
                                children: "Error Details (Developer Mode)"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/ErrorBoundary.jsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                style: {
                                    marginTop: '0.5rem',
                                    padding: '1rem',
                                    background: '#0f172a',
                                    color: '#f87171',
                                    borderRadius: '6px',
                                    fontSize: '0.8rem',
                                    overflowX: 'auto',
                                    whiteSpace: 'pre-wrap'
                                },
                                children: [
                                    this.state.error.toString(),
                                    this.state.errorInfo?.componentStack
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/ErrorBoundary.jsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/ErrorBoundary.jsx",
                        lineNumber: 117,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/ErrorBoundary.jsx",
                lineNumber: 38,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
}
const __TURBOPACK__default__export__ = ErrorBoundary;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$Logo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/Logo.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Footer() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [subscribed, setSubscribed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubscribe = (e)=>{
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "main-footer-section",
        id: "footer",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-newsletter-card",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "newsletter-inner-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "newsletter-text-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "newsletter-badge",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "15",
                                                height: "15",
                                                viewBox: "0 0 24 24",
                                                fill: "#f59e0b",
                                                className: "newsletter-envelope-icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Footer.jsx",
                                                    lineNumber: 28,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 27,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "newsletter-badge-label",
                                                children: "LATEST PACKAGE UPDATES"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 30,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/Footer.jsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "newsletter-heading",
                                        children: "Stay Updated on New Umrah Packages & Travel Deals"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/Footer.jsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "newsletter-subtitle",
                                        children: "Get the latest Umrah packages, flight deals, hotel offers, and travel updates directly in your inbox."
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/Footer.jsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/Footer.jsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "newsletter-form-col",
                                children: [
                                    subscribed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: '#10b981',
                                            fontWeight: 700,
                                            fontSize: '14px',
                                            background: '#ecfdf5',
                                            padding: '12px 18px',
                                            borderRadius: '10px'
                                        },
                                        children: "✓ Thank you for subscribing! You will receive our latest updates."
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/Footer.jsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubscribe,
                                        className: "newsletter-form-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                required: true,
                                                placeholder: "Enter your email address...",
                                                className: "newsletter-email-input",
                                                value: email,
                                                onChange: (e)=>setEmail(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 47,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "newsletter-subscribe-btn",
                                                children: "SUBSCRIBE FOR UPDATES"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 55,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/Footer.jsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "newsletter-privacy-note",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                size: 12,
                                                className: "newsletter-lock-icon"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 61,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "We protect your privacy. Unsubscribe anytime with 1-click."
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/Footer.jsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/Footer.jsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/Footer.jsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/shared/components/Footer.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-columns-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-col brand-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "footer-logo-capsule",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$Logo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                                        fileName: "[project]/src/shared/components/Footer.jsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/Footer.jsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "footer-about-text",
                                    children: "World Track Aviation is a travel agency in Islamabad, IATA-accredited and licensed by the Ministry of Religious Affairs (Govt. of Pakistan), with access to 500+ verified hotels and 15+ airline partners worldwide."
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/Footer.jsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "trust-pills-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "trust-pill-tag trust-pill-iata",
                                            children: "IATA #27351170"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "trust-pill-tag trust-pill-lic",
                                            children: "Ministry Lic # ID-2637"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "trust-pill-tag trust-pill-dts",
                                            children: "DTS Approved"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/Footer.jsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "footer-social-icons",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://web.facebook.com/worldtrackaviation/",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "footer-social-box",
                                            "aria-label": "Facebook",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "f"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.instagram.com/worldtrackaviation/",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "footer-social-box",
                                            "aria-label": "Instagram",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "ig"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/Footer.jsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/components/Footer.jsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "footer-heading",
                                    children: "TRAVEL SERVICES"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/Footer.jsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "footer-nav-list",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/umrah-packages",
                                                children: "Umrah Packages"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/umrah-group-packages",
                                                children: "Group Umrah Packages"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 98,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/customize-umrah-package",
                                                children: "Custom Umrah Packages"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/visas",
                                                children: "Umrah and Visit Visas"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 100,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/our-hotels",
                                                children: "Hotel Bookings"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 101,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/private-transport",
                                                children: "Private Transport"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/tour-packages",
                                                children: "Tour Packages"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/group-tickets",
                                                children: "Group Tickets"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/Footer.jsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/components/Footer.jsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "footer-heading",
                                    children: "QUICK LINKS"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/Footer.jsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "footer-nav-list",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                children: "Home"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about-us",
                                                children: "About Us"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 113,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/our-hotels",
                                                children: "Hotels"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/hotels-map",
                                                children: "Hotels Map"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/our-blogs",
                                                children: "Blogs & Articles"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact-us",
                                                children: "Contact Us"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/privacy-policy",
                                                children: "Privacy Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 118,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/terms-and-conditions",
                                                children: "Terms & Conditions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Footer.jsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/Footer.jsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/components/Footer.jsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-col branch-offices-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "footer-heading",
                                    children: "BRANCH OFFICES"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/Footer.jsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "branch-offices-list",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "branch-office-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "branch-city",
                                                    children: "Islamabad Head Office:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Footer.jsx",
                                                    lineNumber: 128,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "branch-address",
                                                    children: "Office #4, Islamabad Center, Fazal-ul-Haq Road, Blue Area"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Footer.jsx",
                                                    lineNumber: 129,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "tel:0512120721",
                                                    className: "branch-phone-link",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            size: 13,
                                                            className: "branch-phone-icon"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                                            lineNumber: 131,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "051-2120721"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                                            lineNumber: 132,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/components/Footer.jsx",
                                                    lineNumber: 130,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://wa.me/923350122252",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "branch-phone-link",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            size: 13,
                                                            className: "branch-phone-icon"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                                            lineNumber: 135,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "+92 335 0122252"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                                            lineNumber: 136,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/components/Footer.jsx",
                                                    lineNumber: 134,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://wa.me/923292721721",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "branch-phone-link",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            size: 13,
                                                            className: "branch-phone-icon"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                                            lineNumber: 139,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "+92 329 2721721"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                                            lineNumber: 140,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/components/Footer.jsx",
                                                    lineNumber: 138,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "branch-office-divider"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "branch-office-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "branch-city",
                                                    children: "Vehari:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Footer.jsx",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "branch-address",
                                                    children: "Main Multan Road, Vehari"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Footer.jsx",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "tel:+923137943362",
                                                    className: "branch-phone-link",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            size: 13,
                                                            className: "branch-phone-icon"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                                            lineNumber: 148,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "+92 313 7943362"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                                            lineNumber: 149,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/components/Footer.jsx",
                                                    lineNumber: 147,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/components/Footer.jsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/Footer.jsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/components/Footer.jsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/components/Footer.jsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-bottom-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "footer-copyright-text",
                            children: "© 2026 World Track Travel & Tourism (Pvt.) Ltd. All rights reserved."
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/Footer.jsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-designer-credit",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Design and Developed by"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/Footer.jsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/assets/evolix-logo.svg",
                                    alt: "evolix Technologies",
                                    className: "evolix-logo-img"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/Footer.jsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/components/Footer.jsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/components/Footer.jsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/components/Footer.jsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/components/Footer.jsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(Footer, "ffAIXBwfFgeXe4+0Oq7fjPrxFy0=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/HeroSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.mjs [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$icons$2f$PassportIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/icons/PassportIcon.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$AirlineMarquee$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/AirlineMarquee.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$hero_sunset$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$hero_sunset$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/hero_sunset.webp.mjs { IMAGE => "[project]/src/assets/hero_sunset.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function HeroSection({ onSearchSubmit, activeCategory = 'all', onSelectCategory }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HeroSection.useState": ()=>activeCategory === 'hotels' ? 'hotels' : activeCategory === 'visa' ? 'visa' : 'hotels'
    }["HeroSection.useState"]);
    const [prevCategory, setPrevCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(activeCategory);
    // Hotel fields
    const [hotelDestination, setHotelDestination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Singapore');
    const [checkIn, setCheckIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('2026-04-15');
    const [checkOut, setCheckOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('2026-04-18');
    const [guests, setGuests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('2 Adults (1 Room)');
    const [showGuestsMenu, setShowGuestsMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [adultCount, setAdultCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2);
    const [roomCount, setRoomCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const guestsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Umrah/Flights fields
    const [fromCity, setFromCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Multan (MUX)');
    const [departDate, setDepartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('2026-05-10');
    // Visas fields
    const [visaDestination, setVisaDestination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Dubai, UAE');
    const [visaCheckIn, setVisaCheckIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('2026-04-15');
    const [visaGuests, setVisaGuests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('2 adults');
    // Umrah additional fields
    const [umrahNoOfDays, setUmrahNoOfDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('15');
    const [umrahVisaType, setUmrahVisaType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Tourist');
    // Car Rentals fields
    const [carLocation, setCarLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Jeddah, Saudi Arabia');
    const [carPickupDate, setCarPickupDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('2026-05-10');
    const [carDropoffDate, setCarDropoffDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('2026-05-17');
    const [carType, setCarType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('GMC Yukon (VIP Umrah)');
    // Outside-click & Escape listener for Guests dropdown popup
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const handleClickOutside = {
                "HeroSection.useEffect.handleClickOutside": (event)=>{
                    if (guestsRef.current && !guestsRef.current.contains(event.target)) {
                        setShowGuestsMenu(false);
                    }
                }
            }["HeroSection.useEffect.handleClickOutside"];
            const handleKeyDown = {
                "HeroSection.useEffect.handleKeyDown": (event)=>{
                    if (event.key === 'Escape') {
                        setShowGuestsMenu(false);
                    }
                }
            }["HeroSection.useEffect.handleKeyDown"];
            if (showGuestsMenu) {
                document.addEventListener('mousedown', handleClickOutside);
                document.addEventListener('touchstart', handleClickOutside);
                document.addEventListener('keydown', handleKeyDown);
            }
            return ({
                "HeroSection.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                    document.removeEventListener('touchstart', handleClickOutside);
                    document.removeEventListener('keydown', handleKeyDown);
                }
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], [
        showGuestsMenu
    ]);
    // Sync activeTab if activeCategory changes externally
    if (activeCategory !== prevCategory) {
        setPrevCategory(activeCategory);
        if (activeCategory === 'hotels' || activeCategory === 'umrah' || activeCategory === 'visa') {
            setActiveTab(activeCategory);
        }
    }
    const updateGuests = (a, r)=>{
        setAdultCount(a);
        setRoomCount(r);
        setGuests(`${a} Adult${a > 1 ? 's' : ''} (${r} Room${r > 1 ? 's' : ''})`);
    };
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        setShowGuestsMenu(false);
        let params = {};
        if (activeTab === 'hotels') {
            params = {
                destination: hotelDestination,
                checkIn,
                checkOut,
                guests,
                adultCount,
                roomCount
            };
        } else if (activeTab === 'umrah') {
            params = {
                fromCity,
                departDate,
                noOfDays: umrahNoOfDays,
                visaType: umrahVisaType
            };
        } else if (activeTab === 'visa') {
            params = {
                destinationCountry: visaDestination,
                checkIn: visaCheckIn,
                guests: visaGuests
            };
        } else if (activeTab === 'cars') {
            params = {
                pickupLocation: carLocation,
                pickupDate: carPickupDate,
                dropoffDate: carDropoffDate,
                carType
            };
        }
        onSearchSubmit?.({
            tab: activeTab,
            params
        });
    };
    const TABS = [
        {
            id: 'visa',
            label: 'Visas',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$icons$2f$PassportIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PassportIcon"], {
                size: 18,
                className: "tab-icon-svg"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/HeroSection.jsx",
                lineNumber: 134,
                columnNumber: 13
            }, this)
        },
        {
            id: 'hotels',
            label: 'Hotels',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                size: 18,
                className: "tab-icon-svg"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/HeroSection.jsx",
                lineNumber: 139,
                columnNumber: 13
            }, this)
        },
        {
            id: 'umrah',
            label: 'Umrah',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "tab-icon-svg",
                width: "19",
                height: "19",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2.5a.75.75 0 0 1 .75.75v1.05c2.14.41 3.75 2.25 3.75 4.45v2.75h1a.75.75 0 0 1 .75.75v7.5H4.75v-7.5a.75.75 0 0 1 .75-.75h1V8.75c0-2.2 1.61-4.04 3.75-4.45V3.25A.75.75 0 0 1 12 2.5zM4 20.5h16v1.5H4v-1.5zm8-8.5a2 2 0 0 0-2 2v4.5h4v-4.5a2 2 0 0 0-2-2z"
                }, void 0, false, {
                    fileName: "[project]/src/shared/components/HeroSection.jsx",
                    lineNumber: 146,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/components/HeroSection.jsx",
                lineNumber: 145,
                columnNumber: 9
            }, this)
        },
        {
            id: 'cars',
            label: 'Car Rentals',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "tab-icon-svg",
                width: "19",
                height: "19",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-4.66l.12-.34h13.77l.11.34V17z"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "7.5",
                        cy: "14.5",
                        r: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "16.5",
                        cy: "14.5",
                        r: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/HeroSection.jsx",
                lineNumber: 154,
                columnNumber: 9
            }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero-landing-wrapper",
                id: "home",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-image-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$hero_sunset$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$hero_sunset$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "World Track Aviation - Masjid Al Haram",
                                className: "hero-main-image",
                                priority: true,
                                fetchPriority: "high",
                                fill: true,
                                sizes: "100vw",
                                quality: 85,
                                style: {
                                    objectFit: 'cover',
                                    objectPosition: 'center 30%'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-dark-vignette"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-interactive-zone",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "hero-headline-title",
                                children: [
                                    "Everything You Need for Every",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 187,
                                        columnNumber: 42
                                    }, this),
                                    "Destination."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "service-tab-container",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "service-tab-capsule",
                                    children: TABS.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `service-tab-pill ${activeTab === tab.id ? 'active-pill' : ''}`,
                                            onClick: ()=>{
                                                setActiveTab(tab.id);
                                            },
                                            children: [
                                                tab.icon,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: tab.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                    lineNumber: 203,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, tab.id, true, {
                                            fileName: "[project]/src/shared/components/HeroSection.jsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/HeroSection.jsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            activeTab === 'hotels' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleFormSubmit,
                                className: "hero-flat-search-bar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-field flat-search-field-wide",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flat-field-label",
                                                children: "CITY"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flat-field-value-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "flat-field-select",
                                                        value: hotelDestination,
                                                        onChange: (e)=>setHotelDestination(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Singapore",
                                                                children: "Singapore"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 221,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Saudi Arabia",
                                                                children: "Saudi Arabia (Makkah & Madina)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 222,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Dubai",
                                                                children: "Dubai, UAE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 223,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Baku",
                                                                children: "Baku, Azerbaijan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 224,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Istanbul",
                                                                children: "Istanbul, Turkey"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 225,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Kuala Lumpur",
                                                                children: "Kuala Lumpur, Malaysia"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 226,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 216,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        size: 14,
                                                        className: "flat-field-chevron"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 228,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-divider"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flat-field-label",
                                                children: "CHECK-IN"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flat-field-value-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        className: "flat-field-input",
                                                        value: checkIn,
                                                        onChange: (e)=>setCheckIn(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 238,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        size: 14,
                                                        className: "flat-field-icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 244,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 237,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-divider"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flat-field-label",
                                                children: "CHECK-OUT"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flat-field-value-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        className: "flat-field-input",
                                                        value: checkOut,
                                                        onChange: (e)=>setCheckOut(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 254,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        size: 14,
                                                        className: "flat-field-icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 260,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 253,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-divider"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 264,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-field flat-search-field-wide",
                                        style: {
                                            position: 'relative'
                                        },
                                        ref: guestsRef,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flat-field-label",
                                                children: "GUESTS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 268,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "flat-guests-btn",
                                                onClick: ()=>setShowGuestsMenu(!showGuestsMenu),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flat-guests-value",
                                                        children: guests
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 274,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        size: 14,
                                                        className: "flat-field-chevron"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 275,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 269,
                                                columnNumber: 17
                                            }, this),
                                            showGuestsMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "guests-dropdown-popup",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "guests-counter-row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "guests-counter-label",
                                                                children: "Adults"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 281,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "guests-counter-controls",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        className: "guest-counter-btn",
                                                                        onClick: ()=>updateGuests(Math.max(1, adultCount - 1), roomCount),
                                                                        children: "−"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                        lineNumber: 283,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "guest-counter-val",
                                                                        children: adultCount
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                        lineNumber: 284,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        className: "guest-counter-btn",
                                                                        onClick: ()=>updateGuests(adultCount + 1, roomCount),
                                                                        children: "+"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                        lineNumber: 285,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 282,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 280,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "guests-counter-row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "guests-counter-label",
                                                                children: "Rooms"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 289,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "guests-counter-controls",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        className: "guest-counter-btn",
                                                                        onClick: ()=>updateGuests(adultCount, Math.max(1, roomCount - 1)),
                                                                        children: "−"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                        lineNumber: 291,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "guest-counter-val",
                                                                        children: roomCount
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                        lineNumber: 292,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        className: "guest-counter-btn",
                                                                        onClick: ()=>updateGuests(adultCount, roomCount + 1),
                                                                        children: "+"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                        lineNumber: 293,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 290,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 288,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "guests-done-btn",
                                                        onClick: ()=>setShowGuestsMenu(false),
                                                        children: "Done"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 296,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 279,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 267,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "flat-search-btn",
                                        children: "Search"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 302,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this),
                            activeTab === 'umrah' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleFormSubmit,
                                className: "hero-flat-search-bar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-field flat-search-field-wide",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flat-field-label",
                                                children: "DEPARTURE FROM"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 312,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flat-field-value-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "flat-field-select",
                                                        value: fromCity,
                                                        onChange: (e)=>setFromCity(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Multan (MUX)",
                                                                children: "Multan (MUX)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 315,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Lahore (LHE)",
                                                                children: "Lahore (LHE)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 316,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Islamabad (ISB)",
                                                                children: "Islamabad (ISB)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 317,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Karachi (KHI)",
                                                                children: "Karachi (KHI)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 318,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Peshawar (PEW)",
                                                                children: "Peshawar (PEW)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 319,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Sialkot (SKT)",
                                                                children: "Sialkot (SKT)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 320,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 314,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        size: 16,
                                                        className: "flat-field-chevron"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 322,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 313,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-divider"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flat-field-label",
                                                children: "DEPARTURE DATE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 327,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flat-field-value-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        className: "flat-field-input",
                                                        value: departDate,
                                                        onChange: (e)=>setDepartDate(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 329,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        size: 16,
                                                        className: "flat-field-icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 330,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 328,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-divider"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flat-field-label",
                                                children: "NO. OF DAYS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 335,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flat-field-value-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "flat-field-select",
                                                        value: umrahNoOfDays,
                                                        onChange: (e)=>setUmrahNoOfDays(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "7",
                                                                children: "7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 342,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "10",
                                                                children: "10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 343,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "14",
                                                                children: "14"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 344,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "15",
                                                                children: "15"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 345,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "20",
                                                                children: "20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 346,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "21",
                                                                children: "21"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 347,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "28",
                                                                children: "28"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 348,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 337,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        size: 16,
                                                        className: "flat-field-chevron"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 350,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 336,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 334,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-divider"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 353,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flat-field-label",
                                                children: "VISA TYPE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 355,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flat-field-value-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "flat-field-select",
                                                        value: umrahVisaType,
                                                        onChange: (e)=>setUmrahVisaType(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Tourist",
                                                                children: "Tourist"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 362,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Umrah",
                                                                children: "Umrah"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 363,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "eVisa",
                                                                children: "eVisa"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 364,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 357,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        size: 16,
                                                        className: "flat-field-chevron"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 366,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 356,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 354,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "flat-search-btn",
                                        children: "Search"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 369,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                lineNumber: 310,
                                columnNumber: 13
                            }, this),
                            activeTab === 'visa' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleFormSubmit,
                                className: "hero-flat-search-bar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-field flat-search-field-wide",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flat-field-label",
                                                children: "DESTINATION COUNTRY"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 377,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flat-field-value-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "flat-field-select",
                                                        value: visaDestination,
                                                        onChange: (e)=>setVisaDestination(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Dubai, UAE",
                                                                children: "Dubai, UAE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 384,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Baku, Azerbaijan",
                                                                children: "Baku, Azerbaijan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 385,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Malaysia",
                                                                children: "Malaysia"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 386,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Saudi Arabia",
                                                                children: "Saudi Arabia (Umrah / Tourist)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 387,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Turkey",
                                                                children: "Turkey"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 388,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Thailand",
                                                                children: "Thailand"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 389,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "United Kingdom",
                                                                children: "United Kingdom (UK)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 390,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "United States",
                                                                children: "United States (USA)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 391,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 379,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        size: 16,
                                                        className: "flat-field-chevron"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 393,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 378,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 376,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-divider"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 396,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flat-field-label",
                                                children: "CHECK-IN"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 398,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flat-field-value-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        className: "flat-field-input",
                                                        value: visaCheckIn,
                                                        onChange: (e)=>setVisaCheckIn(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 400,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        size: 16,
                                                        className: "flat-field-icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 406,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 399,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 397,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-divider"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 409,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flat-field-label",
                                                children: "GUESTS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 411,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flat-field-value-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "flat-field-select",
                                                        value: visaGuests,
                                                        onChange: (e)=>setVisaGuests(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "1 adult",
                                                                children: "1 adult"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 418,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "2 adults",
                                                                children: "2 adults"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 419,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "3 adults",
                                                                children: "3 adults"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 420,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "4 adults",
                                                                children: "4 adults"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 421,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "5+ adults",
                                                                children: "5+ adults"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 422,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 413,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        size: 16,
                                                        className: "flat-field-chevron"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 424,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 412,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 410,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "flat-search-btn",
                                        children: "Search"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 427,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                lineNumber: 375,
                                columnNumber: 13
                            }, this),
                            activeTab === 'cars' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleFormSubmit,
                                className: "hero-flat-search-bar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-field flat-search-field-wide",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flat-field-label",
                                                children: "PICK-UP LOCATION"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 435,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flat-field-value-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "flat-field-select",
                                                        value: carLocation,
                                                        onChange: (e)=>setCarLocation(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Jeddah, Saudi Arabia",
                                                                children: "Jeddah, Saudi Arabia"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 442,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Makkah, Saudi Arabia",
                                                                children: "Makkah, Saudi Arabia"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 443,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Madinah, Saudi Arabia",
                                                                children: "Madinah, Saudi Arabia"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 444,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Dubai, UAE",
                                                                children: "Dubai, UAE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 445,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Singapore",
                                                                children: "Singapore"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 446,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 437,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        size: 16,
                                                        className: "flat-field-chevron"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 448,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 436,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 434,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-divider"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 451,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flat-field-label",
                                                children: "PICK-UP DATE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 453,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flat-field-value-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        className: "flat-field-input",
                                                        value: carPickupDate,
                                                        onChange: (e)=>setCarPickupDate(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 455,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        size: 16,
                                                        className: "flat-field-icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 461,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 454,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 452,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-divider"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 464,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flat-field-label",
                                                children: "DROP-OFF DATE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 466,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flat-field-value-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        className: "flat-field-input",
                                                        value: carDropoffDate,
                                                        onChange: (e)=>setCarDropoffDate(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 468,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        size: 16,
                                                        className: "flat-field-icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 474,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 467,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 465,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-divider"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 477,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flat-search-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flat-field-label",
                                                children: "CAR TYPE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 479,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flat-field-value-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "flat-field-select",
                                                        value: carType,
                                                        onChange: (e)=>setCarType(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "GMC Yukon (VIP Umrah)",
                                                                children: "GMC Yukon (VIP Umrah)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 486,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Executive SUV",
                                                                children: "Executive SUV"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 487,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Sedan",
                                                                children: "Sedan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 488,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Toyota HiAce (Group)",
                                                                children: "Toyota HiAce (Group)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 489,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Toyota Coaster (Family Bus)",
                                                                children: "Toyota Coaster (Family Bus)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                                lineNumber: 490,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 481,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        size: 16,
                                                        className: "flat-field-chevron"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                        lineNumber: 492,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                                lineNumber: 480,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 478,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "flat-search-btn",
                                        children: "Search"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                                        lineNumber: 495,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/HeroSection.jsx",
                                lineNumber: 433,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/HeroSection.jsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/HeroSection.jsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$AirlineMarquee$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AirlineMarquee"], {}, void 0, false, {
                fileName: "[project]/src/shared/components/HeroSection.jsx",
                lineNumber: 503,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/components/HeroSection.jsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "JEM2YKtqhBEVtRiwBZu/alKdXOo=");
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/Logo.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$world_track_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$world_track_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/world_track_logo.png.mjs { IMAGE => "[project]/src/assets/world_track_logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
;
;
function Logo({ className = '', variant = 'white' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `brand-logo-pill ${variant === 'white' ? 'white-logo-pill' : ''} ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$world_track_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$world_track_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]?.src || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$world_track_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$world_track_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            alt: "World Track Aviation & Tourism",
            className: `brand-logo-img ${variant === 'white' ? 'white-logo-img' : ''}`,
            width: 123,
            height: 38,
            decoding: "async"
        }, void 0, false, {
            fileName: "[project]/src/shared/components/Logo.jsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/components/Logo.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/Modals.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modals",
    ()=>Modals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-call.mjs [app-client] (ecmascript) <export default as PhoneCall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$hotels$2f$hooks$2f$useHotels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/hotels/hooks/useHotels.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$inquiry$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/inquiry.service.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Modals({ isContactOpen = false, onCloseContact } = {}) {
    _s();
    const { selectedHotelForBooking, closeBooking, isQuoteModalOpen, closeQuoteModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$hotels$2f$hooks$2f$useHotels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHotels"])();
    // Booking Form State
    const [bookingName, setBookingName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [bookingPhone, setBookingPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [bookingDates, setBookingDates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [bookingSuccess, setBookingSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Quote Form State
    const [quoteHotelChain, setQuoteHotelChain] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Fairmont / Raffles');
    const [quoteCity, setQuoteCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Makkah / Madinah');
    const [quoteNotes, setQuoteNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [quoteSuccess, setQuoteSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Contact Form State
    const [contactName, setContactName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [contactPhone, setContactPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [contactEmail, setContactEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [contactMessage, setContactMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [contactSuccess, setContactSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleBookingSubmit = async (e)=>{
        e.preventDefault();
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$inquiry$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inquiryService"].submitInquiry({
                type: 'hotel',
                name: bookingName,
                contact: bookingPhone,
                email: 'info@worldtracktravel.com',
                message: `Direct Booking Request for ${selectedHotelForBooking?.name || 'Hotel'} (${selectedHotelForBooking?.location || 'Location'}). Dates: ${bookingDates}`,
                checkin_date: bookingDates || '',
                checkout_date: '',
                adults: 2
            });
        } catch (err) {
            console.error('Booking submission error:', err);
        }
        setBookingSuccess(true);
        setTimeout(()=>{
            setBookingSuccess(false);
            closeBooking();
        }, 2500);
    };
    const handleQuoteSubmit = async (e)=>{
        e.preventDefault();
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$inquiry$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inquiryService"].submitInquiry({
                type: 'general',
                name: 'Guest Client',
                contact: '+923292721721',
                email: 'info@worldtracktravel.com',
                service_category: 'hotel',
                message: `Custom Hotel Quote Request: Chain=${quoteHotelChain}, City=${quoteCity}. Details: ${quoteNotes}`
            });
        } catch (err) {
            console.error('Quote submission error:', err);
        }
        setQuoteSuccess(true);
        setTimeout(()=>{
            setQuoteSuccess(false);
            closeQuoteModal();
        }, 2500);
    };
    const handleContactSubmit = async (e)=>{
        e.preventDefault();
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$inquiry$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inquiryService"].submitInquiry({
                type: 'general',
                name: contactName,
                contact: contactPhone,
                email: contactEmail || 'info@worldtracktravel.com',
                message: contactMessage
            });
        } catch (err) {
            console.error('Contact submission error:', err);
        }
        setContactSuccess(true);
        setTimeout(()=>{
            setContactSuccess(false);
            setContactName('');
            setContactPhone('');
            setContactEmail('');
            setContactMessage('');
            onCloseContact?.();
        }, 2500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            selectedHotelForBooking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-backdrop",
                onClick: closeBooking,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content-card",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "modal-close-btn",
                            onClick: closeBooking,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/Modals.jsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/Modals.jsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this),
                        bookingSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-success-state",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    size: 56,
                                    className: "text-emerald-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Booking Request Received!"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                    lineNumber: 119,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Our VIP reservation desk will contact you on ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: bookingPhone || '+923292721721'
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 121,
                                            columnNumber: 64
                                        }, this),
                                        " with exclusive direct rates and room confirmation."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/components/Modals.jsx",
                            lineNumber: 117,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal-header-banner",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "modal-badge",
                                            children: selectedHotelForBooking.tag || 'EXCLUSIVE RATE'
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 127,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: selectedHotelForBooking.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal-location",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 130,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: selectedHotelForBooking.location
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 131,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "modal-price-tag",
                                                    children: [
                                                        "(",
                                                        selectedHotelForBooking.price,
                                                        " / night)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 132,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 129,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                    lineNumber: 126,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleBookingSubmit,
                                    className: "modal-form",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Full Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 138,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    placeholder: "e.g. Tariq Mehmood",
                                                    value: bookingName,
                                                    onChange: (e)=>setBookingName(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 139,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Phone / WhatsApp Number"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 149,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    required: true,
                                                    placeholder: "+92 300 1234567",
                                                    value: bookingPhone,
                                                    onChange: (e)=>setBookingPhone(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 150,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 148,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            children: "Check-in / Check-out"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                                            lineNumber: 161,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "e.g. 15 Sep - 20 Sep",
                                                            value: bookingDates,
                                                            onChange: (e)=>setBookingDates(e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                                            lineNumber: 162,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 160,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            children: "Guests"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                                            lineNumber: 170,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "1 Room, 2 Adults"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                                    lineNumber: 172,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "1 Room, 1 Adult"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                                    lineNumber: 173,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "2 Rooms, 4 Adults"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                                    lineNumber: 174,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Family Suite (Haram View)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                                    lineNumber: 175,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                                            lineNumber: 171,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 169,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 159,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "modal-submit-btn",
                                            children: "Confirm VIP Booking Rate"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 180,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/components/Modals.jsx",
                            lineNumber: 125,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/components/Modals.jsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/components/Modals.jsx",
                lineNumber: 107,
                columnNumber: 9
            }, this),
            isQuoteModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-backdrop",
                onClick: closeQuoteModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content-card",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "modal-close-btn",
                            onClick: closeQuoteModal,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/Modals.jsx",
                                lineNumber: 198,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/Modals.jsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, this),
                        quoteSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-success-state",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    size: 56,
                                    className: "text-emerald-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                    lineNumber: 203,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Quote Request Dispatched!"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                    lineNumber: 204,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Our corporate hotel desk will prepare wholesale contracted rates for ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: quoteHotelChain
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 206,
                                            columnNumber: 88
                                        }, this),
                                        " and email the proposal shortly."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                    lineNumber: 205,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/components/Modals.jsx",
                            lineNumber: 202,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal-header-banner",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "modal-badge",
                                            children: "CORPORATE & HARAM RATES"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 212,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Request Custom Hotel Quote"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 213,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 text-sm",
                                            children: "Direct group and corporate rates for Fairmont, Marriott, IHG, Hilton & Accor."
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 214,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                    lineNumber: 211,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleQuoteSubmit,
                                    className: "modal-form",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Preferred Hotel Brand / Chain"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 221,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: quoteHotelChain,
                                                    onChange: (e)=>setQuoteHotelChain(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Fairmont / Raffles / Swissôtel",
                                                            children: "Fairmont / Raffles / Swissôtel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                                            lineNumber: 226,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Marriott / St. Regis / Ritz-Carlton",
                                                            children: "Marriott / St. Regis / Ritz-Carlton"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                                            lineNumber: 227,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "IHG / InterContinental / voco",
                                                            children: "IHG / InterContinental / voco"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                                            lineNumber: 228,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Hilton / Conrad / Waldorf Astoria",
                                                            children: "Hilton / Conrad / Waldorf Astoria"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                                            lineNumber: 229,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Oberoi Hotels & Resorts",
                                                            children: "Oberoi Hotels & Resorts"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                                            lineNumber: 230,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Four Seasons",
                                                            children: "Four Seasons"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                                            lineNumber: 231,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 222,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 220,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Destination City"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 236,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    placeholder: "e.g. Makkah, Madinah, Dubai, Singapore, Baku, London",
                                                    value: quoteCity,
                                                    onChange: (e)=>setQuoteCity(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 237,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 235,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Specific Room Requests / Kaaba Facing / Dates"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 247,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    rows: 3,
                                                    placeholder: "e.g. 2 King suites facing Kaaba directly, check-in Nov 10, VIP airport pickup",
                                                    value: quoteNotes,
                                                    onChange: (e)=>setQuoteNotes(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 248,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 246,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "modal-submit-btn",
                                            children: "Send Custom Quote Request"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 256,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                    lineNumber: 219,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/components/Modals.jsx",
                            lineNumber: 210,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/components/Modals.jsx",
                    lineNumber: 193,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/components/Modals.jsx",
                lineNumber: 192,
                columnNumber: 9
            }, this),
            isContactOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-backdrop",
                onClick: ()=>onCloseContact?.(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content-card",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "modal-close-btn",
                            onClick: ()=>onCloseContact?.(),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/Modals.jsx",
                                lineNumber: 274,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/Modals.jsx",
                            lineNumber: 273,
                            columnNumber: 13
                        }, this),
                        contactSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-success-state",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    size: 56,
                                    className: "text-emerald-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                    lineNumber: 279,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Message Sent Successfully!"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                    lineNumber: 280,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Our team will get back to you shortly. You can also reach us directly on WhatsApp."
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                    lineNumber: 281,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/components/Modals.jsx",
                            lineNumber: 278,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal-header-banner",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "modal-badge",
                                            children: "GET IN TOUCH"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 288,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Contact Us"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 289,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 text-sm",
                                            children: "Have questions? Send us a message and our team will respond within 24 hours."
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 290,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                    lineNumber: 287,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '12px',
                                        margin: '0 24px 16px',
                                        flexWrap: 'wrap'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:+923292721721",
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                fontSize: '13px',
                                                color: '#0284c7',
                                                textDecoration: 'none'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 297,
                                                    columnNumber: 21
                                                }, this),
                                                " +92 329 272 1721"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 296,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://wa.me/923350122252",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                fontSize: '13px',
                                                color: '#16a34a',
                                                textDecoration: 'none'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 300,
                                                    columnNumber: 21
                                                }, this),
                                                " WhatsApp"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 299,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "mailto:worldtrackaviation@gmail.com",
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                fontSize: '13px',
                                                color: '#0284c7',
                                                textDecoration: 'none'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 303,
                                                    columnNumber: 21
                                                }, this),
                                                " Email Us"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 302,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                    lineNumber: 295,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleContactSubmit,
                                    className: "modal-form",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Full Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 309,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    placeholder: "e.g. Muhammad Ali",
                                                    value: contactName,
                                                    onChange: (e)=>setContactName(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 310,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 308,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            children: "Phone / WhatsApp"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                                            lineNumber: 321,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "tel",
                                                            required: true,
                                                            placeholder: "+92 300 1234567",
                                                            value: contactPhone,
                                                            onChange: (e)=>setContactPhone(e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                                            lineNumber: 322,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 320,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            children: "Email (Optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                                            lineNumber: 331,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "email",
                                                            placeholder: "your@email.com",
                                                            value: contactEmail,
                                                            onChange: (e)=>setContactEmail(e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                                            lineNumber: 332,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 330,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 319,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Your Message"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 342,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    rows: 3,
                                                    required: true,
                                                    placeholder: "Tell us how we can help...",
                                                    value: contactMessage,
                                                    onChange: (e)=>setContactMessage(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                                    lineNumber: 343,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 341,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "modal-submit-btn",
                                            children: "Send Message"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Modals.jsx",
                                            lineNumber: 352,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/Modals.jsx",
                                    lineNumber: 307,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/components/Modals.jsx",
                            lineNumber: 286,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/components/Modals.jsx",
                    lineNumber: 269,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/components/Modals.jsx",
                lineNumber: 268,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/components/Modals.jsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s(Modals, "Sx6dra+lh013zJQon/+J1TLm6B4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$hotels$2f$hooks$2f$useHotels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHotels"]
    ];
});
_c = Modals;
var _c;
__turbopack_context__.k.register(_c, "Modals");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.mjs [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.mjs [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/earth.mjs [app-client] (ecmascript) <export default as Globe2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ticket.mjs [app-client] (ecmascript) <export default as Ticket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.mjs [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-call.mjs [app-client] (ecmascript) <export default as PhoneCall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$Logo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/Logo.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$icons$2f$PassportIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/icons/PassportIcon.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Navbar({ onOpenContact: _onOpenContact, activeCategory = 'all', onSelectCategory }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const currentPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() || '';
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedMobileMenu, setExpandedMobileMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            setMounted(true);
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (mobileMenuOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
            return ({
                "Navbar.useEffect": ()=>{
                    document.body.style.overflow = '';
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        mobileMenuOpen
    ]);
    // Close desktop dropdown on outside click or escape
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleClickOutside = {
                "Navbar.useEffect.handleClickOutside": (event)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setActiveDropdown(null);
                    }
                }
            }["Navbar.useEffect.handleClickOutside"];
            const handleKeyDown = {
                "Navbar.useEffect.handleKeyDown": (event)=>{
                    if (event.key === 'Escape') {
                        setActiveDropdown(null);
                    }
                }
            }["Navbar.useEffect.handleKeyDown"];
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
            document.addEventListener('keydown', handleKeyDown);
            return ({
                "Navbar.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                    document.removeEventListener('touchstart', handleClickOutside);
                    document.removeEventListener('keydown', handleKeyDown);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const handleMouseEnterDropdown = (name)=>{
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
            dropdownTimeoutRef.current = null;
        }
        setActiveDropdown(name);
    };
    const handleMouseLeaveDropdown = ()=>{
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
        }
        dropdownTimeoutRef.current = setTimeout(()=>{
            setActiveDropdown(null);
        }, 280);
    };
    const toggleDropdown = (name)=>{
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
            dropdownTimeoutRef.current = null;
        }
        setActiveDropdown((prev)=>prev === name ? null : name);
    };
    const toggleMobileSubmenu = (name)=>{
        setExpandedMobileMenu((prev)=>prev === name ? null : name);
    };
    const closeAll = ()=>{
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
            dropdownTimeoutRef.current = null;
        }
        setActiveDropdown(null);
        setMobileMenuOpen(false);
        setExpandedMobileMenu(null);
    };
    const _handleNavCategory = (cat)=>{
        if (currentPath !== '/') {
            router.push(`/#${cat}`);
        } else {
            onSelectCategory?.(cat);
        }
        closeAll();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "navbar-floating-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "header-glass-pill",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "header-logo-anchor",
                        onClick: ()=>{
                            if (currentPath === '/') {
                                onSelectCategory?.('all');
                            }
                            closeAll();
                        },
                        title: "World Track - Home",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$Logo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                            white: true
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/Navbar.jsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/shared/components/Navbar.jsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "header-nav-list",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "header-nav-btn",
                                onClick: ()=>{
                                    onSelectCategory?.('all');
                                    closeAll();
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/Navbar.jsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/about-us",
                                className: `header-nav-btn ${currentPath === '/about-us' || currentPath === '/about' ? 'active-nav-btn' : ''}`,
                                onClick: closeAll,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "About us"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/Navbar.jsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/our-hotels",
                                className: `header-nav-btn ${[
                                    '/our-hotels',
                                    '/hotels',
                                    '/hotel'
                                ].includes(currentPath) || activeCategory === 'hotels' ? 'active-nav-btn' : ''}`,
                                onClick: closeAll,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Hotels"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/Navbar.jsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/visas",
                                className: `header-nav-btn ${currentPath.startsWith('/visas') || currentPath.startsWith('/visa') || activeCategory === 'visa' ? 'active-nav-btn' : ''}`,
                                onClick: closeAll,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$icons$2f$PassportIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PassportIcon"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                        lineNumber: 189,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Visa"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/Navbar.jsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: dropdownRef,
                                className: "nav-item-dropdown-container",
                                "data-open": activeDropdown === 'umrah',
                                onMouseEnter: ()=>handleMouseEnterDropdown('umrah'),
                                onMouseLeave: handleMouseLeaveDropdown,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: `header-nav-btn ${[
                                            '/umrah-group-packages',
                                            '/umrah-packages',
                                            '/customize-umrah-package',
                                            '/custom-umrah',
                                            '/private-transport',
                                            '/transport'
                                        ].includes(currentPath) ? 'active-nav-btn' : ''}`,
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            toggleDropdown('umrah');
                                        },
                                        "aria-haspopup": "true",
                                        "aria-expanded": activeDropdown === 'umrah',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "15",
                                                height: "15",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M4 10a8 8 0 0 1 16 0v10H4V10Z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                                        lineNumber: 217,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 2v4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                                        lineNumber: 218,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M9 16v4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                                        lineNumber: 219,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M15 16v4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                                        lineNumber: 220,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/Navbar.jsx",
                                                lineNumber: 216,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Umrah Services"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Navbar.jsx",
                                                lineNumber: 222,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 13,
                                                className: `nav-arrow ${activeDropdown === 'umrah' ? 'nav-arrow-rotated' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Navbar.jsx",
                                                lineNumber: 223,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nav-dropdown-flyout",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/umrah-packages",
                                                className: "flyout-link",
                                                onClick: closeAll,
                                                children: "Umrah Packages"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Navbar.jsx",
                                                lineNumber: 228,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/customize-umrah-package",
                                                className: "flyout-link",
                                                onClick: closeAll,
                                                children: "Custom Umrah Package"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Navbar.jsx",
                                                lineNumber: 229,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/umrah-group-packages",
                                                className: "flyout-link",
                                                onClick: closeAll,
                                                children: "Group Umrah Package"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Navbar.jsx",
                                                lineNumber: 230,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/private-transport",
                                                className: "flyout-link",
                                                onClick: closeAll,
                                                children: "Private Transport"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/Navbar.jsx",
                                                lineNumber: 231,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/Navbar.jsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/tour-packages",
                                className: `header-nav-btn ${[
                                    '/tour-packages',
                                    '/tours'
                                ].includes(currentPath) ? 'active-nav-btn' : ''}`,
                                onClick: closeAll,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__["Globe2"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Tours"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                        lineNumber: 242,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/Navbar.jsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/group-tickets",
                                className: `header-nav-btn ${currentPath === '/group-tickets' ? 'active-nav-btn' : ''}`,
                                onClick: closeAll,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Group Tickets"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/Navbar.jsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/Navbar.jsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/contact-us",
                        className: "header-contact-btn",
                        onClick: closeAll,
                        children: "Contact us"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/components/Navbar.jsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "header-mobile-toggle",
                        onClick: ()=>setMobileMenuOpen(true),
                        "aria-label": "Open navigation menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 22
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/Navbar.jsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/shared/components/Navbar.jsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/Navbar.jsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            mounted && mobileMenuOpen && typeof document !== 'undefined' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mobile-drawer-overlay",
                onClick: closeAll,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mobile-drawer-panel",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mobile-drawer-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/",
                                    className: "mobile-drawer-logo-link",
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        if (currentPath !== '/') {
                                            router.push('/');
                                        } else {
                                            onSelectCategory?.('all');
                                        }
                                        closeAll();
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$Logo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                                        variant: "dark"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                        lineNumber: 298,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/Navbar.jsx",
                                    lineNumber: 285,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "mobile-drawer-close-btn",
                                    onClick: closeAll,
                                    "aria-label": "Close navigation menu",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                        lineNumber: 306,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/Navbar.jsx",
                                    lineNumber: 300,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/components/Navbar.jsx",
                            lineNumber: 284,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mobile-drawer-body",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "mobile-drawer-nav-list",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `mobile-nav-item ${currentPath === '/' && activeCategory === 'all' ? 'active' : ''}`,
                                            onClick: ()=>{
                                                if (currentPath !== '/') {
                                                    router.push('/');
                                                } else {
                                                    onSelectCategory?.('all');
                                                }
                                                closeAll();
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mobile-nav-item-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                        size: 18,
                                                        className: "mobile-nav-icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                                        lineNumber: 327,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mobile-nav-title",
                                                        children: "Home"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                                        lineNumber: 328,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/Navbar.jsx",
                                                lineNumber: 326,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Navbar.jsx",
                                            lineNumber: 314,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `mobile-nav-item ${currentPath === '/about-us' || currentPath === '/about' ? 'active' : ''}`,
                                            onClick: ()=>{
                                                router.push('/about-us');
                                                closeAll();
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mobile-nav-item-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                        size: 18,
                                                        className: "mobile-nav-icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                                        lineNumber: 342,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mobile-nav-title",
                                                        children: "About us"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                                        lineNumber: 343,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/Navbar.jsx",
                                                lineNumber: 341,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Navbar.jsx",
                                            lineNumber: 333,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `mobile-nav-item ${[
                                                '/our-hotels',
                                                '/hotels',
                                                '/hotel'
                                            ].includes(currentPath) || activeCategory === 'hotels' ? 'active' : ''}`,
                                            onClick: ()=>{
                                                router.push('/our-hotels');
                                                closeAll();
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mobile-nav-item-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                        size: 18,
                                                        className: "mobile-nav-icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                                        lineNumber: 359,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mobile-nav-title",
                                                        children: "Hotels"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                                        lineNumber: 360,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/Navbar.jsx",
                                                lineNumber: 358,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Navbar.jsx",
                                            lineNumber: 348,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `mobile-nav-item ${currentPath.startsWith('/visas') || currentPath.startsWith('/visa') || activeCategory === 'visa' ? 'active' : ''}`,
                                            onClick: ()=>{
                                                router.push('/visas');
                                                closeAll();
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mobile-nav-item-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$icons$2f$PassportIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PassportIcon"], {
                                                        size: 18,
                                                        className: "mobile-nav-icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                                        lineNumber: 376,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mobile-nav-title",
                                                        children: "Visa"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                                        lineNumber: 377,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/Navbar.jsx",
                                                lineNumber: 375,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Navbar.jsx",
                                            lineNumber: 365,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mobile-nav-accordion",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: `mobile-nav-item mobile-nav-accordion-header ${[
                                                        '/umrah-group-packages',
                                                        '/umrah-packages',
                                                        '/customize-umrah-package',
                                                        '/custom-umrah',
                                                        '/private-transport',
                                                        '/transport'
                                                    ].includes(currentPath) || expandedMobileMenu === 'umrah' ? 'active' : ''}`,
                                                    onClick: ()=>toggleMobileSubmenu('umrah'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mobile-nav-item-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                                                    size: 18,
                                                                    className: "mobile-nav-icon"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/shared/components/Navbar.jsx",
                                                                    lineNumber: 393,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "mobile-nav-title",
                                                                    children: "Umrah Services"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/shared/components/Navbar.jsx",
                                                                    lineNumber: 394,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/shared/components/Navbar.jsx",
                                                            lineNumber: 392,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            size: 16,
                                                            className: `mobile-accordion-chevron ${expandedMobileMenu === 'umrah' ? 'rotate-open' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Navbar.jsx",
                                                            lineNumber: 396,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/components/Navbar.jsx",
                                                    lineNumber: 383,
                                                    columnNumber: 19
                                                }, this),
                                                expandedMobileMenu === 'umrah' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mobile-accordion-sublist",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: `mobile-sub-nav-item ${currentPath === '/umrah-packages' ? 'active' : ''}`,
                                                            onClick: ()=>{
                                                                router.push('/umrah-packages');
                                                                closeAll();
                                                            },
                                                            children: "Umrah Packages"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Navbar.jsx",
                                                            lineNumber: 404,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: `mobile-sub-nav-item ${[
                                                                '/customize-umrah-package',
                                                                '/custom-umrah'
                                                            ].includes(currentPath) ? 'active' : ''}`,
                                                            onClick: ()=>{
                                                                router.push('/customize-umrah-package');
                                                                closeAll();
                                                            },
                                                            children: "Custom Umrah Package"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Navbar.jsx",
                                                            lineNumber: 414,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: `mobile-sub-nav-item ${[
                                                                '/umrah-group-packages'
                                                            ].includes(currentPath) ? 'active' : ''}`,
                                                            onClick: ()=>{
                                                                router.push('/umrah-group-packages');
                                                                closeAll();
                                                            },
                                                            children: "Group Umrah Package"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Navbar.jsx",
                                                            lineNumber: 424,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: `mobile-sub-nav-item ${[
                                                                '/private-transport',
                                                                '/transport'
                                                            ].includes(currentPath) ? 'active' : ''}`,
                                                            onClick: ()=>{
                                                                router.push('/private-transport');
                                                                closeAll();
                                                            },
                                                            children: "Private Transport"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Navbar.jsx",
                                                            lineNumber: 434,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/components/Navbar.jsx",
                                                    lineNumber: 403,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/components/Navbar.jsx",
                                            lineNumber: 382,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `mobile-nav-item ${[
                                                '/tour-packages',
                                                '/tours'
                                            ].includes(currentPath) ? 'active' : ''}`,
                                            onClick: ()=>{
                                                router.push('/tour-packages');
                                                closeAll();
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mobile-nav-item-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__["Globe2"], {
                                                        size: 18,
                                                        className: "mobile-nav-icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                                        lineNumber: 458,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mobile-nav-title",
                                                        children: "Tours"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                                        lineNumber: 459,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/Navbar.jsx",
                                                lineNumber: 457,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Navbar.jsx",
                                            lineNumber: 449,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `mobile-nav-item ${currentPath === '/group-tickets' ? 'active' : ''}`,
                                            onClick: ()=>{
                                                router.push('/group-tickets');
                                                closeAll();
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mobile-nav-item-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"], {
                                                        size: 18,
                                                        className: "mobile-nav-icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                                        lineNumber: 473,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mobile-nav-title",
                                                        children: "Group Tickets"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/Navbar.jsx",
                                                        lineNumber: 474,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/Navbar.jsx",
                                                lineNumber: 472,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Navbar.jsx",
                                            lineNumber: 464,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/Navbar.jsx",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mobile-drawer-bottom",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "mobile-drawer-contact-btn",
                                            onClick: ()=>{
                                                router.push('/contact-us');
                                                closeAll();
                                            },
                                            children: "Contact Us"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/Navbar.jsx",
                                            lineNumber: 481,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mobile-drawer-quick-contacts",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://wa.me/923350122252",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "mobile-quick-contact-pill whatsapp",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Navbar.jsx",
                                                            lineNumber: 499,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "WhatsApp"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Navbar.jsx",
                                                            lineNumber: 500,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/components/Navbar.jsx",
                                                    lineNumber: 493,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "tel:0512120721",
                                                    className: "mobile-quick-contact-pill call",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Navbar.jsx",
                                                            lineNumber: 506,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Call Us"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/components/Navbar.jsx",
                                                            lineNumber: 507,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/components/Navbar.jsx",
                                                    lineNumber: 502,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/components/Navbar.jsx",
                                            lineNumber: 492,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/Navbar.jsx",
                                    lineNumber: 480,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/components/Navbar.jsx",
                            lineNumber: 311,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/components/Navbar.jsx",
                    lineNumber: 279,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/components/Navbar.jsx",
                lineNumber: 278,
                columnNumber: 9
            }, this), document.body)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/components/Navbar.jsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_s(Navbar, "K4cxUZGcBQECETD2A4N825kZ2a0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/PageLoader.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageLoader",
    ()=>PageLoader,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function PageLoader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            color: '#0284c7',
            fontFamily: 'Outfit, Inter, sans-serif'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '40px',
                    height: '40px',
                    border: '3px solid #e0f2fe',
                    borderTopColor: '#0284c7',
                    borderRadius: '50%',
                    animation: 'spin 0.8s linear infinite'
                }
            }, void 0, false, {
                fileName: "[project]/src/shared/components/PageLoader.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/shared/components/PageLoader.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: '0.9rem',
                    color: '#64748b',
                    fontWeight: '500'
                },
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/shared/components/PageLoader.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/components/PageLoader.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = PageLoader;
const __TURBOPACK__default__export__ = PageLoader;
var _c;
__turbopack_context__.k.register(_c, "PageLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/QuoteBanner.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuoteBanner",
    ()=>QuoteBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$hotels$2f$hooks$2f$useHotels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/hotels/hooks/useHotels.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function QuoteBanner() {
    _s();
    const { openQuoteModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$hotels$2f$hooks$2f$useHotels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHotels"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "quote-callout-wrapper",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "quote-callout-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "quote-callout-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "shield-icon-badge",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    size: 26,
                                    className: "shield-check-svg"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/QuoteBanner.jsx",
                                    lineNumber: 17,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/QuoteBanner.jsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "quote-text-stack",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "quote-card-title",
                                        children: "Need a Specific Hotel Chain, or a Room Facing the Haramain ?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/QuoteBanner.jsx",
                                        lineNumber: 20,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "quote-card-subtitle",
                                        children: "We arrange direct corporate rates with Marriott, IHG, Fairmont, Hilton, and Accor."
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/QuoteBanner.jsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/QuoteBanner.jsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/QuoteBanner.jsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "quote-callout-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "request-quote-dark-btn",
                            onClick: openQuoteModal,
                            children: "Request Custom Hotel Quote"
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/QuoteBanner.jsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/shared/components/QuoteBanner.jsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/components/QuoteBanner.jsx",
                lineNumber: 14,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/shared/components/QuoteBanner.jsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/components/QuoteBanner.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(QuoteBanner, "0U9yIWikWhNtps43D9figOTe4HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$hotels$2f$hooks$2f$useHotels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHotels"]
    ];
});
_c = QuoteBanner;
var _c;
__turbopack_context__.k.register(_c, "QuoteBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/ReviewsSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewsSection",
    ()=>ReviewsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.mjs [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/content.service.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const resolveAvatarUrl = (img)=>{
    if (!img || typeof img !== 'string') return null;
    if (img.startsWith('http://') || img.startsWith('https://') || img.startsWith('data:')) return img;
    const baseUrl = (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL || 'https://admin.worldtracktravel.com').replace(/\/api\/?$/, '');
    return `${baseUrl}${img.startsWith('/') ? '' : '/'}${img}`;
};
const normalizeReviews = (res)=>{
    if (!res || !Array.isArray(res)) return [];
    return res.map((t, idx)=>{
        const author = t.user_name || t.name || t.author || 'Satisfied Pilgrim';
        const rawQuote = t.comment || t.message || t.review || t.quote;
        const quote = rawQuote && rawQuote !== 'Nil' ? rawQuote : 'World Track made our travel journey smooth, transparent, and completely peaceful.';
        const category = t.category || 'Travel Package';
        const rating = Math.max(1, Math.min(5, Math.round(parseFloat(t.rating || '5.0') || 5)));
        const location = t.location || 'Pakistan';
        const rawAvatar = t.user_image || t.image || t.avatar;
        const avatar = resolveAvatarUrl(rawAvatar);
        return {
            id: t.id || idx + 1,
            category,
            tag: category.toUpperCase(),
            rating,
            quote,
            author,
            location,
            avatar
        };
    });
};
function ReviewsSection({ initialReviews = [] }) {
    _s();
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [canScrollLeft, setCanScrollLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canScrollRight, setCanScrollRight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const hasInitial = Array.isArray(initialReviews) && initialReviews.length > 0;
    const [reviews, setReviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(hasInitial ? normalizeReviews(initialReviews) : []);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!hasInitial);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReviewsSection.useEffect": ()=>{
            if (hasInitial) {
                setReviews(normalizeReviews(initialReviews));
                setLoading(false);
                return;
            }
            setLoading(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contentService"].getTestimonials().then({
                "ReviewsSection.useEffect": (res)=>{
                    if (res && Array.isArray(res)) {
                        setReviews(normalizeReviews(res));
                    }
                }
            }["ReviewsSection.useEffect"]).catch({
                "ReviewsSection.useEffect": ()=>{}
            }["ReviewsSection.useEffect"]).finally({
                "ReviewsSection.useEffect": ()=>{
                    setLoading(false);
                }
            }["ReviewsSection.useEffect"]);
        }
    }["ReviewsSection.useEffect"], [
        initialReviews,
        hasInitial
    ]);
    const handleScroll = (direction)=>{
        if (!trackRef.current) return;
        const track = trackRef.current;
        const firstCard = track.querySelector('.review-card-item');
        const step = firstCard ? firstCard.offsetWidth + 24 : track.clientWidth * 0.8;
        track.scrollBy({
            left: direction === 'left' ? -step : step,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "reviews-social-section",
        id: "reviews",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-header-row reviews-header-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-header-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "section-eyebrow-badge review-eyebrow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                            size: 15,
                                            className: "eyebrow-icon review-eyebrow-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "REAL EXPERIENCES & SOCIAL PROOF"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "section-main-title",
                                    children: "What Our Pilgrims & Travelers Say"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "section-sub-title",
                                    children: "Genuine feedback from families, corporate travelers, and Umrah pilgrims who trust World Track Aviation, a travel agency in Islamabad serving Rawalpindi and Pakistan."
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "reviews-header-actions",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "reviews-nav-controls",
                                role: "group",
                                "aria-label": "Review slider navigation",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "reviews-nav-arrow-btn reviews-nav-prev",
                                        onClick: ()=>handleScroll('left'),
                                        "aria-label": "Previous reviews",
                                        title: "Previous reviews",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "reviews-nav-arrow-btn reviews-nav-next",
                                        onClick: ()=>handleScroll('right'),
                                        "aria-label": "Next reviews",
                                        title: "Next reviews",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "reviews-slider-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "reviews-slider-track",
                        ref: trackRef,
                        children: loading ? /* Loading Skeletons */ [
                            1,
                            2,
                            3
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "review-card-item animate-pulse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-4 w-24 bg-slate-200 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                                lineNumber: 130,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-4 w-16 bg-slate-200 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                                lineNumber: 131,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                        lineNumber: 129,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 bg-slate-200 rounded mb-2 w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                        lineNumber: 133,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 bg-slate-200 rounded mb-2 w-5/6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                        lineNumber: 134,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 bg-slate-200 rounded mb-6 w-3/4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                        lineNumber: 135,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-11 h-11 bg-slate-200 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                                lineNumber: 137,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-4 w-28 bg-slate-200 rounded mb-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                                        lineNumber: 139,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-3 w-20 bg-slate-200 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                                        lineNumber: 140,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                                lineNumber: 138,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                        lineNumber: 136,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, `review-skeleton-${i}`, true, {
                                fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                lineNumber: 128,
                                columnNumber: 17
                            }, this)) : reviews.length > 0 ? reviews.map((rev)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "review-card-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "review-card-top-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "review-stars-row",
                                                children: [
                                                    ...Array(rev.rating)
                                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                        size: 15,
                                                        className: "star-gold-fill"
                                                    }, `star-${rev.id}-${i}`, false, {
                                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                                        lineNumber: 152,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                                lineNumber: 150,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "review-category-badge",
                                                children: rev.tag
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                                lineNumber: 155,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                        lineNumber: 149,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "review-quote-text",
                                        children: [
                                            '"',
                                            rev.quote,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                        lineNumber: 159,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "review-author-row",
                                        children: [
                                            rev.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: rev.avatar,
                                                alt: rev.author,
                                                className: "review-avatar-img",
                                                loading: "lazy",
                                                decoding: "async",
                                                width: 44,
                                                height: 44,
                                                onError: (e)=>{
                                                    e.currentTarget.style.display = 'none';
                                                    if (e.currentTarget.nextElementSibling) {
                                                        e.currentTarget.nextElementSibling.style.display = 'flex';
                                                    }
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                                lineNumber: 166,
                                                columnNumber: 23
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "review-avatar-fallback",
                                                style: {
                                                    display: rev.avatar ? 'none' : 'flex'
                                                },
                                                children: rev.author ? rev.author.charAt(0).toUpperCase() : 'W'
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                                lineNumber: 182,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "review-author-info",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "review-author-name",
                                                        children: rev.author
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                                        lineNumber: 186,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "review-author-loc",
                                                        children: rev.location
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                                        lineNumber: 187,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                                lineNumber: 185,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                        lineNumber: 164,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, rev.id, true, {
                                fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                lineNumber: 147,
                                columnNumber: 17
                            }, this)) : null
                    }, void 0, false, {
                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "reviews-stats-banner-card",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stats-banner-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-banner-cell",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-banner-val",
                                        children: "4.9/5.0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-banner-lbl",
                                        children: "Average Customer Rating"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-banner-cell",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-banner-val",
                                        children: "21,000+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-banner-lbl",
                                        children: "Umrah Pilgrims Served"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-banner-cell",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-banner-val",
                                        children: "30,000+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-banner-lbl",
                                        children: "Tickets & Visas Issued"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-banner-cell",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-banner-val",
                                        children: "99.4%"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-banner-lbl",
                                        children: "Visa Approval Track Record"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/shared/components/ReviewsSection.jsx",
                    lineNumber: 197,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/components/ReviewsSection.jsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/components/ReviewsSection.jsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(ReviewsSection, "JuVQuedFQQhwAPA3KSwjjXQ+Ar8=");
_c = ReviewsSection;
var _c;
__turbopack_context__.k.register(_c, "ReviewsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/ScrollToTop.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollToTop",
    ()=>ScrollToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ScrollToTop() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollToTop.useEffect": ()=>{
            window.scrollTo(0, 0);
        }
    }["ScrollToTop.useEffect"], [
        pathname
    ]);
    return null;
}
_s(ScrollToTop, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ScrollToTop;
var _c;
__turbopack_context__.k.register(_c, "ScrollToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/TopBar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TopBar",
    ()=>TopBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
'use client';
;
;
;
function TopBar({ transparent = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `top-banner-bar ${transparent ? 'top-banner-transparent' : ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "top-banner-inner",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "social-pill-group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://web.facebook.com/worldtrackaviation/",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "social-white-circle",
                            "aria-label": "Facebook",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "12",
                                height: "12",
                                viewBox: "0 0 24 24",
                                fill: "#0080f6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/TopBar.jsx",
                                    lineNumber: 21,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/TopBar.jsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/TopBar.jsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.instagram.com/worldtrackaviation/",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "social-white-circle",
                            "aria-label": "Instagram",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "12",
                                height: "12",
                                viewBox: "0 0 24 24",
                                fill: "#0080f6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/TopBar.jsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/shared/components/TopBar.jsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/TopBar.jsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/components/TopBar.jsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "contact-pill-group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "tel:0512120721",
                            className: "contact-link-item",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "contact-phone-icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        size: 13,
                                        strokeWidth: 2.5
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/components/TopBar.jsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/TopBar.jsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "contact-val",
                                    children: "051-2120721"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/TopBar.jsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/components/TopBar.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "contact-pipe-divider",
                            children: "|"
                        }, void 0, false, {
                            fileName: "[project]/src/shared/components/TopBar.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "mailto:worldtrackaviation@gmail.com",
                            className: "contact-link-item",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                    size: 14,
                                    className: "contact-mail-svg"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/TopBar.jsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "contact-val",
                                    children: "worldtrackaviation@gmail.com"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/components/TopBar.jsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/components/TopBar.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/components/TopBar.jsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/components/TopBar.jsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/components/TopBar.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = TopBar;
var _c;
__turbopack_context__.k.register(_c, "TopBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/icons/PassportIcon.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PassportIcon",
    ()=>PassportIcon,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function PassportIcon({ size = 16, className = '', strokeWidth = 2, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4",
                y: "2",
                width: "16",
                height: "20",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/icons/PassportIcon.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "8.5",
                r: "2.5"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/icons/PassportIcon.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 15a4 4 0 0 1 8 0"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/icons/PassportIcon.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "18",
                x2: "16",
                y2: "18"
            }, void 0, false, {
                fileName: "[project]/src/shared/components/icons/PassportIcon.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/components/icons/PassportIcon.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = PassportIcon;
const __TURBOPACK__default__export__ = PassportIcon;
var _c;
__turbopack_context__.k.register(_c, "PassportIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/components/icons/WhatsAppIcon.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhatsAppIcon",
    ()=>WhatsAppIcon,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function WhatsAppIcon({ size = 16, color = 'currentColor', className = '', style = {}, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
        className: className,
        style: {
            display: 'inline-block',
            verticalAlign: 'middle',
            flexShrink: 0,
            ...style
        },
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
        }, void 0, false, {
            fileName: "[project]/src/shared/components/icons/WhatsAppIcon.jsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/components/icons/WhatsAppIcon.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = WhatsAppIcon;
const __TURBOPACK__default__export__ = WhatsAppIcon;
var _c;
__turbopack_context__.k.register(_c, "WhatsAppIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/hooks/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/hooks/useDebounce.js [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/hooks/useDebounce.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useDebounce",
    ()=>useDebounce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useDebounce(value, delay = 300) {
    _s();
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDebounce.useEffect": ()=>{
            const handler = setTimeout({
                "useDebounce.useEffect.handler": ()=>{
                    setDebouncedValue(value);
                }
            }["useDebounce.useEffect.handler"], delay);
            return ({
                "useDebounce.useEffect": ()=>{
                    clearTimeout(handler);
                }
            })["useDebounce.useEffect"];
        }
    }["useDebounce.useEffect"], [
        value,
        delay
    ]);
    return debouncedValue;
}
_s(useDebounce, "KDuPAtDOgxm8PU6legVJOb3oOmA=");
const __TURBOPACK__default__export__ = useDebounce;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$TopBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/TopBar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/Navbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$AppBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/AppBar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$Logo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/Logo.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$HeroSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/HeroSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$QuoteBanner$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/QuoteBanner.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$AboutSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/AboutSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$AdvantageSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/AdvantageSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ReviewsSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ReviewsSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$Modals$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/Modals.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/Footer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ScrollToTop$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ScrollToTop.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$ErrorBoundary$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/ErrorBoundary.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$PageLoader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/PageLoader.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$icons$2f$PassportIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/icons/PassportIcon.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$icons$2f$WhatsAppIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/icons/WhatsAppIcon.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/hooks/index.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_01inre7._.js.map