(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/visas/components/VisaBenefits.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VisaBenefits",
    ()=>VisaBenefits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.mjs [app-client] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$visas$2f$data$2f$visasData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/visas/data/visasData.js [app-client] (ecmascript)");
;
;
;
;
function VisaBenefits() {
    const getIcon = (iconName)=>{
        switch(iconName){
            case 'shield-check':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                    size: 22,
                    className: "visa-benefit-icon"
                }, void 0, false, {
                    fileName: "[project]/src/features/visas/components/VisaBenefits.jsx",
                    lineNumber: 9,
                    columnNumber: 16
                }, this);
            case 'zap':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    size: 22,
                    className: "visa-benefit-icon zap-icon"
                }, void 0, false, {
                    fileName: "[project]/src/features/visas/components/VisaBenefits.jsx",
                    lineNumber: 11,
                    columnNumber: 16
                }, this);
            case 'headphones':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"], {
                    size: 22,
                    className: "visa-benefit-icon"
                }, void 0, false, {
                    fileName: "[project]/src/features/visas/components/VisaBenefits.jsx",
                    lineNumber: 13,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                    size: 22,
                    className: "visa-benefit-icon"
                }, void 0, false, {
                    fileName: "[project]/src/features/visas/components/VisaBenefits.jsx",
                    lineNumber: 15,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "visa-benefits-grid",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$visas$2f$data$2f$visasData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VISA_BENEFITS"].map((benefit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `visa-benefit-card benefit-${benefit.id}`,
                style: {
                    backgroundColor: benefit.bgColor,
                    borderColor: benefit.borderColor
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "visa-benefit-icon-wrapper",
                        style: {
                            color: benefit.iconColor
                        },
                        children: getIcon(benefit.icon)
                    }, void 0, false, {
                        fileName: "[project]/src/features/visas/components/VisaBenefits.jsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "visa-benefit-text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "visa-benefit-title",
                                children: benefit.title
                            }, void 0, false, {
                                fileName: "[project]/src/features/visas/components/VisaBenefits.jsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "visa-benefit-desc",
                                children: benefit.description
                            }, void 0, false, {
                                fileName: "[project]/src/features/visas/components/VisaBenefits.jsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/visas/components/VisaBenefits.jsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                ]
            }, benefit.id, true, {
                fileName: "[project]/src/features/visas/components/VisaBenefits.jsx",
                lineNumber: 22,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/features/visas/components/VisaBenefits.jsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = VisaBenefits;
var _c;
__turbopack_context__.k.register(_c, "VisaBenefits");
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
"[project]/src/features/visas/components/VisaFilters.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VisaFilters",
    ()=>VisaFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$visas$2f$data$2f$visasData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/visas/data/visasData.js [app-client] (ecmascript)");
;
;
;
function VisaFilters({ activeFilter, onFilterChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "visa-filters-wrapper",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "visa-filters-pill-group",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$visas$2f$data$2f$visasData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VISA_CATEGORIES"].map((category)=>{
                const isActive = activeFilter === category.id;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: `visa-filter-pill ${isActive ? 'active' : ''}`,
                    onClick: ()=>onFilterChange(category.id),
                    children: category.label
                }, category.id, false, {
                    fileName: "[project]/src/features/visas/components/VisaFilters.jsx",
                    lineNumber: 11,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/features/visas/components/VisaFilters.jsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/visas/components/VisaFilters.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = VisaFilters;
var _c;
__turbopack_context__.k.register(_c, "VisaFilters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/visas/components/VisaSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VisaSection",
    ()=>VisaSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$visas$2f$components$2f$VisaCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/visas/components/VisaCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$visas$2f$components$2f$VisaBenefits$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/visas/components/VisaBenefits.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$icons$2f$PassportIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/components/icons/PassportIcon.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$visa$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/visa.service.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// ---------------------------------------------------------------------------
// Skeleton card — shown while loading
// ---------------------------------------------------------------------------
function VisaSkeletonCard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "visa-skeleton-card",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "skeleton-img skeleton-img--visa"
            }, void 0, false, {
                fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "skeleton-body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "skeleton-line skeleton-line--title"
                    }, void 0, false, {
                        fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "skeleton-line skeleton-line--sub"
                    }, void 0, false, {
                        fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "skeleton-price-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "skeleton-line skeleton-line--price"
                            }, void 0, false, {
                                fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "skeleton-btn-ghost"
                            }, void 0, false, {
                                fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/visas/components/VisaSection.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = VisaSkeletonCard;
function VisaSection({ initialVisas = [], searchFilter = null, onClearFilter }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [visas, setVisas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialVisas);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialVisas.length === 0);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchVisas = ()=>{
        setLoading(true);
        setError(null);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$visa$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visaService"].getVisas().then((res)=>{
            if (res && res.length > 0) setVisas(res);
        }).catch((err)=>{
            console.error('[VisaSection] fetch failed:', err);
            setError('Could not load visa options. Please try again.');
        }).finally(()=>setLoading(false));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VisaSection.useEffect": ()=>{
            if (initialVisas.length > 0) return;
            fetchVisas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["VisaSection.useEffect"], []);
    // Real-time filtering when searchFilter is supplied from HeroSection
    const filteredVisas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VisaSection.useMemo[filteredVisas]": ()=>{
            if (!searchFilter?.destinationCountry) {
                return visas.slice(0, 4);
            }
            const countryQuery = searchFilter.destinationCountry.toLowerCase().trim();
            let matched = visas.filter({
                "VisaSection.useMemo[filteredVisas].matched": (visa)=>{
                    const cName = (visa.country || '').toLowerCase();
                    const title = (visa.title || '').toLowerCase();
                    const cat = (visa.category || '').toLowerCase();
                    if (countryQuery.includes('dubai') || countryQuery.includes('uae')) {
                        return cName.includes('emirates') || title.includes('dubai') || title.includes('uae');
                    }
                    if (countryQuery.includes('baku') || countryQuery.includes('azerbaijan')) {
                        return cName.includes('azerbaijan') || title.includes('baku') || title.includes('azerbaijan');
                    }
                    if (countryQuery.includes('saudi')) {
                        return cName.includes('saudi') || title.includes('saudi');
                    }
                    if (countryQuery.includes('malaysia')) {
                        return cName.includes('malaysia') || title.includes('malaysia');
                    }
                    if (countryQuery.includes('turkey')) {
                        return cName.includes('turkey') || title.includes('turkey');
                    }
                    if (countryQuery.includes('thailand')) {
                        return cName.includes('thailand') || title.includes('thailand');
                    }
                    if (countryQuery.includes('uk') || countryQuery.includes('united kingdom')) {
                        return cName.includes('kingdom') || title.includes('uk') || title.includes('united kingdom');
                    }
                    if (countryQuery.includes('usa') || countryQuery.includes('united states')) {
                        return cName.includes('states') || title.includes('usa') || title.includes('united states');
                    }
                    return cName.includes(countryQuery) || title.includes(countryQuery) || cat.includes(countryQuery);
                }
            }["VisaSection.useMemo[filteredVisas].matched"]);
            return matched.slice(0, 4);
        }
    }["VisaSection.useMemo[filteredVisas]"], [
        searchFilter,
        visas
    ]);
    const displayVisas = filteredVisas.length > 0 ? filteredVisas.slice(0, 4) : visas.slice(0, 4);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "visa-feature-section",
        id: "visa",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-header-row visa-header-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-header-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "section-eyebrow-badge visa-eyebrow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$components$2f$icons$2f$PassportIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PassportIcon"], {
                                            size: 16,
                                            className: "eyebrow-icon visa-eyebrow-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "FAST-TRACK ELECTRONIC & TOURIST VISAS"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "section-main-title",
                                    children: "Global Visit Visa Services"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "section-sub-title",
                                    children: "Get direct embassy submission and ASAN e-Visa processing across multiple countries from a trusted visa consultancy, with document assistance and a 99.4% approval track record."
                                }, void 0, false, {
                                    fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-header-right",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "visa-view-all-btn",
                                onClick: ()=>router.push('/visas'),
                                children: "View All Visa"
                            }, void 0, false, {
                                fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                searchFilter?.destinationCountry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-active-filter-bar",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-active-filter-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "filter-pill-label",
                                    children: "FILTER ACTIVE"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "filter-pill-desc",
                                    children: filteredVisas.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "Showing visas for ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: searchFilter.destinationCountry
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                                                lineNumber: 136,
                                                columnNumber: 39
                                            }, this),
                                            searchFilter.visaType ? ` · ${searchFilter.visaType} Visa` : '',
                                            searchFilter.nationality ? ` · ${searchFilter.nationality}` : '',
                                            ' ',
                                            "(",
                                            filteredVisas.length,
                                            " ",
                                            filteredVisas.length === 1 ? 'option' : 'options',
                                            " available)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                                        lineNumber: 135,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "No direct e-Visa match for ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: searchFilter.destinationCountry
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                                                lineNumber: 143,
                                                columnNumber: 48
                                            }, this),
                                            ". Showing all popular fast-track visas."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                                        lineNumber: 142,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "filter-pill-clear-btn",
                            onClick: onClearFilter,
                            children: "Clear Filter / Show All"
                        }, void 0, false, {
                            fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                    lineNumber: 130,
                    columnNumber: 11
                }, this),
                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "visa-catalog-grid",
                    children: [
                        1,
                        2,
                        3,
                        4
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VisaSkeletonCard, {}, i, false, {
                            fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                            lineNumber: 161,
                            columnNumber: 38
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                    lineNumber: 160,
                    columnNumber: 11
                }, this),
                !loading && error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-error-state",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                            lineNumber: 168,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "section-retry-btn",
                            onClick: fetchVisas,
                            children: "Retry"
                        }, void 0, false, {
                            fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                    lineNumber: 167,
                    columnNumber: 11
                }, this),
                !loading && !error && (displayVisas.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "visa-catalog-grid",
                    children: displayVisas.map((visa)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$visas$2f$components$2f$VisaCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisaCard"], {
                            visa: visa
                        }, visa.id, false, {
                            fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                            lineNumber: 180,
                            columnNumber: 17
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                    lineNumber: 178,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-empty-state",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "No visa services available right now. Please check back soon."
                    }, void 0, false, {
                        fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                        lineNumber: 185,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                    lineNumber: 184,
                    columnNumber: 13
                }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "visa-benefits-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$visas$2f$components$2f$VisaBenefits$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisaBenefits"], {}, void 0, false, {
                        fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/visas/components/VisaSection.jsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/visas/components/VisaSection.jsx",
            lineNumber: 101,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/visas/components/VisaSection.jsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_s(VisaSection, "5MGW1273hngqnxdZfR/B8xM56Tw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = VisaSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "VisaSkeletonCard");
__turbopack_context__.k.register(_c1, "VisaSection");
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
"[project]/src/features/visas/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$visas$2f$components$2f$VisaSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/visas/components/VisaSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$visas$2f$components$2f$VisaCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/visas/components/VisaCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$visas$2f$components$2f$VisasPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/visas/components/VisasPage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$visas$2f$components$2f$VisaFilters$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/visas/components/VisaFilters.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$visas$2f$components$2f$VisaBenefits$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/visas/components/VisaBenefits.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$visas$2f$data$2f$visasData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/visas/data/visasData.js [app-client] (ecmascript)");
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

//# sourceMappingURL=src_features_visas_16f6te3._.js.map