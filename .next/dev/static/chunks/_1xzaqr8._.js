(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/catalog/CatalogCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CatalogCard",
    ()=>CatalogCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$WhatsappLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/WhatsappLink.tsx [app-client] (ecmascript)");
;
;
;
const categoryLabels = {
    climatizacao: "Climatização",
    eletrica: "Elétrica",
    infraestrutura: "Infraestrutura",
    acessorios: "Acessórios"
};
function CatalogCard({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "\r\n\n        group\r\n\n        flex\r\n\n        h-full\r\n\n        flex-col\r\n\n        overflow-hidden\r\n\n        border\r\n\n        border-[#09143a]/10\r\n\n        bg-white\r\n\n        transition-all\r\n\n        duration-300\r\n\n        hover:-translate-y-1\r\n\n        hover:border-[#082f9c]/20\r\n\n        hover:shadow-[0_16px_40px_rgba(9,20,58,.08)]\r\n\n      ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "\r\n\n          relative\r\n\n          aspect-[4/3]\r\n\n          w-full\r\n\n          shrink-0\r\n\n          overflow-hidden\r\n\n          bg-[#eef1f6]\r\n\n        ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: item.image,
                        alt: item.name,
                        fill: true,
                        sizes: "\r\n\n            (max-width: 640px) 100vw,\r\n\n            (max-width: 768px) 50vw,\r\n\n            (max-width: 1280px) 33vw,\r\n\n            (max-width: 1536px) 25vw,\r\n\n            20vw\r\n\n          ",
                        className: "\r\n\n            object-cover\r\n\n            transition-transform\r\n\n            duration-500\r\n\n            group-hover:scale-[1.025]\r\n\n          "
                    }, void 0, false, {
                        fileName: "[project]/components/catalog/CatalogCard.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    item.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "\r\n\n              absolute\r\n\n              left-4\r\n\n              top-4\r\n\n              bg-[#061b5c]\r\n\n              px-3\r\n\n              py-1.5\r\n\n              text-[9px]\r\n\n              font-bold\r\n\n              uppercase\r\n\n              tracking-[0.16em]\r\n\n              text-white\r\n\n            ",
                        children: "Destaque"
                    }, void 0, false, {
                        fileName: "[project]/components/catalog/CatalogCard.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/catalog/CatalogCard.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "\r\n\n          flex\r\n\n          flex-1\r\n\n          flex-col\r\n\n          p-5\r\n\n        ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "\r\n\n            text-[9px]\r\n\n            font-bold\r\n\n            uppercase\r\n\n            tracking-[0.18em]\r\n\n            text-[#ff7900]\r\n\n          ",
                        children: categoryLabels[item.category]
                    }, void 0, false, {
                        fileName: "[project]/components/catalog/CatalogCard.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "\r\n\n            mt-3\r\n\n            line-clamp-2\r\n\n            min-h-[3.5rem]\r\n\n            text-[1.25rem]\r\n\n            font-black\r\n\n            leading-[1.25]\r\n\n            tracking-[-0.03em]\r\n\n            text-[#082f9c]\r\n\n          ",
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/components/catalog/CatalogCard.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "\r\n\n            mt-3\r\n\n            line-clamp-3\r\n\n            min-h-[4.5rem]\r\n\n            text-sm\r\n\n            leading-6\r\n\n            text-[#09143a]/58\r\n\n          ",
                        children: item.description
                    }, void 0, false, {
                        fileName: "[project]/components/catalog/CatalogCard.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    item.brand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "\r\n\n              mt-4\r\n\n              border-t\r\n\n              border-[#09143a]/8\r\n\n              pt-3\r\n\n            ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "\r\n\n                text-[10px]\r\n\n                font-semibold\r\n\n                uppercase\r\n\n                tracking-[0.12em]\r\n\n                text-[#09143a]/36\r\n\n              ",
                            children: item.brand
                        }, void 0, false, {
                            fileName: "[project]/components/catalog/CatalogCard.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/catalog/CatalogCard.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "\r\n\n            mt-auto\r\n\n            pt-5\r\n\n          ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$WhatsappLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsappLink"], {
                            source: `catalog_${item.slug}`,
                            message: `Olá! Vim pelo catálogo da Soares Climatização e Soluções Elétricas e gostaria de informações sobre ${item.name}.`,
                            className: "\r\n\n              inline-flex\r\n\n              min-h-11\r\n\n              w-full\r\n\n              items-center\r\n\n              justify-center\r\n\n              border\r\n\n              border-[#082f9c]/14\r\n\n              bg-white\r\n\n              px-4\r\n\n              text-center\r\n\n              text-xs\r\n\n              font-bold\r\n\n              text-[#082f9c]\r\n\n              transition-all\r\n\n              duration-200\r\n\n              hover:border-[#ff7900]\r\n\n              hover:bg-[#ff7900]\r\n\n              hover:text-white\r\n\n            ",
                            children: "Consultar disponibilidade"
                        }, void 0, false, {
                            fileName: "[project]/components/catalog/CatalogCard.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/catalog/CatalogCard.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/catalog/CatalogCard.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/catalog/CatalogCard.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = CatalogCard;
var _c;
__turbopack_context__.k.register(_c, "CatalogCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/catalog/CatalogContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CatalogContent",
    ()=>CatalogContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/catalog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$catalog$2f$CatalogFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/catalog/CatalogFilters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$catalog$2f$CatalogGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/catalog/CatalogGrid.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ITEMS_PER_PAGE = 10;
function CatalogContent() {
    _s();
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("todos");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const filteredItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CatalogContent.useMemo[filteredItems]": ()=>{
            const normalizedSearch = search.trim().toLowerCase();
            return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["catalogItems"].filter({
                "CatalogContent.useMemo[filteredItems]": (item)=>{
                    const matchesCategory = category === "todos" || item.category === category;
                    const matchesSearch = !normalizedSearch || item.name.toLowerCase().includes(normalizedSearch) || item.description.toLowerCase().includes(normalizedSearch) || item.brand?.toLowerCase().includes(normalizedSearch);
                    return matchesCategory && matchesSearch;
                }
            }["CatalogContent.useMemo[filteredItems]"]);
        }
    }["CatalogContent.useMemo[filteredItems]"], [
        category,
        search
    ]);
    const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));
    const paginatedItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CatalogContent.useMemo[paginatedItems]": ()=>{
            const start = (currentPage - 1) * ITEMS_PER_PAGE;
            const end = start + ITEMS_PER_PAGE;
            return filteredItems.slice(start, end);
        }
    }["CatalogContent.useMemo[paginatedItems]"], [
        filteredItems,
        currentPage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CatalogContent.useEffect": ()=>{
            setCurrentPage(1);
        }
    }["CatalogContent.useEffect"], [
        category,
        search
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CatalogContent.useEffect": ()=>{
            if (currentPage > totalPages) {
                setCurrentPage(totalPages);
            }
        }
    }["CatalogContent.useEffect"], [
        currentPage,
        totalPages
    ]);
    function goToPage(page) {
        if (page < 1 || page > totalPages || page === currentPage) {
            return;
        }
        setCurrentPage(page);
        requestAnimationFrame(()=>{
            const catalogSection = document.getElementById("catalog-products");
            if (!catalogSection) return;
            const headerOffset = 100;
            const top = catalogSection.getBoundingClientRect().top + window.scrollY - headerOffset;
            window.scrollTo({
                top,
                behavior: "smooth"
            });
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "catalog-products",
        className: "\r\n\n        bg-[#f7f8fb]\r\n\n        pb-20\r\n\n        lg:pb-24\r\n\n      ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$catalog$2f$CatalogFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatalogFilters"], {
                search: search,
                onSearchChange: setSearch,
                activeCategory: category,
                onCategoryChange: setCategory,
                resultCount: filteredItems.length
            }, void 0, false, {
                fileName: "[project]/components/catalog/CatalogContent.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shell pt-10 lg:pt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "\r\n\n            mb-8\r\n\n            flex\r\n\n            flex-col\r\n\n            gap-4\r\n\n            sm:flex-row\r\n\n            sm:items-end\r\n\n            sm:justify-between\r\n\n          ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "\r\n\n                text-[10px]\r\n\n                font-bold\r\n\n                uppercase\r\n\n                tracking-[0.18em]\r\n\n                text-[#ff7900]\r\n\n              ",
                                        children: "Produtos e materiais"
                                    }, void 0, false, {
                                        fileName: "[project]/components/catalog/CatalogContent.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "\r\n\n                mt-2\r\n\n                text-[1.8rem]\r\n\n                font-black\r\n\n                tracking-[-0.035em]\r\n\n                text-[#082f9c]\r\n\n              ",
                                        children: "Explore o catálogo"
                                    }, void 0, false, {
                                        fileName: "[project]/components/catalog/CatalogContent.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/catalog/CatalogContent.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            filteredItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "\r\n\n                text-xs\r\n\n                font-semibold\r\n\n                text-[#09143a]/42\r\n\n              ",
                                children: [
                                    "Exibindo",
                                    " ",
                                    (currentPage - 1) * ITEMS_PER_PAGE + 1,
                                    " – ",
                                    Math.min(currentPage * ITEMS_PER_PAGE, filteredItems.length),
                                    " de ",
                                    filteredItems.length,
                                    " itens"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/catalog/CatalogContent.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/catalog/CatalogContent.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    filteredItems.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$catalog$2f$CatalogGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatalogGrid"], {
                                items: paginatedItems
                            }, void 0, false, {
                                fileName: "[project]/components/catalog/CatalogContent.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this),
                            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                "aria-label": "Paginação do catálogo",
                                className: "\r\n\n                  mt-12\r\n\n                  flex\r\n\n                  flex-wrap\r\n\n                  items-center\r\n\n                  justify-center\r\n\n                  gap-2\r\n\n                ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: currentPage === 1,
                                        onClick: ()=>goToPage(currentPage - 1),
                                        className: "\r\n\n                    inline-flex\r\n\n                    min-h-10\r\n\n                    items-center\r\n\n                    justify-center\r\n\n                    border\r\n\n                    border-[#09143a]/12\r\n\n                    bg-white\r\n\n                    px-4\r\n\n                    text-xs\r\n\n                    font-bold\r\n\n                    text-[#082f9c]\r\n\n                    transition-all\r\n\n                    duration-200\r\n\n                    hover:border-[#082f9c]/30\r\n\n                    hover:bg-[#082f9c]/[0.03]\r\n\n                    disabled:cursor-not-allowed\r\n\n                    disabled:opacity-35\r\n\n                  ",
                                        children: "Anterior"
                                    }, void 0, false, {
                                        fileName: "[project]/components/catalog/CatalogContent.tsx",
                                        lineNumber: 214,
                                        columnNumber: 17
                                    }, this),
                                    Array.from({
                                        length: totalPages
                                    }, (_, index)=>index + 1).map((page)=>{
                                        const active = currentPage === page;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-label": `Ir para página ${page}`,
                                            "aria-current": active ? "page" : undefined,
                                            onClick: ()=>goToPage(page),
                                            className: `
                        inline-flex
                        h-10
                        min-w-10
                        items-center
                        justify-center
                        border
                        px-3
                        text-xs
                        font-bold
                        transition-all
                        duration-200

                        ${active ? `
                              border-[#082f9c]
                              bg-[#082f9c]
                              text-white
                            ` : `
                              border-[#09143a]/12
                              bg-white
                              text-[#09143a]/55
                              hover:border-[#082f9c]/30
                              hover:text-[#082f9c]
                            `}
                      `,
                                            children: page
                                        }, page, false, {
                                            fileName: "[project]/components/catalog/CatalogContent.tsx",
                                            lineNumber: 259,
                                            columnNumber: 21
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: currentPage === totalPages,
                                        onClick: ()=>goToPage(currentPage + 1),
                                        className: "\r\n\n                    inline-flex\r\n\n                    min-h-10\r\n\n                    items-center\r\n\n                    justify-center\r\n\n                    border\r\n\n                    border-[#09143a]/12\r\n\n                    bg-white\r\n\n                    px-4\r\n\n                    text-xs\r\n\n                    font-bold\r\n\n                    text-[#082f9c]\r\n\n                    transition-all\r\n\n                    duration-200\r\n\n                    hover:border-[#082f9c]/30\r\n\n                    hover:bg-[#082f9c]/[0.03]\r\n\n                    disabled:cursor-not-allowed\r\n\n                    disabled:opacity-35\r\n\n                  ",
                                        children: "Próxima"
                                    }, void 0, false, {
                                        fileName: "[project]/components/catalog/CatalogContent.tsx",
                                        lineNumber: 307,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/catalog/CatalogContent.tsx",
                                lineNumber: 202,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/catalog/CatalogContent.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, this) : /* SEM RESULTADOS */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "\r\n\n              border\r\n\n              border-[#09143a]/10\r\n\n              bg-white\r\n\n              px-6\r\n\n              py-12\r\n\n              text-center\r\n\n              sm:py-16\r\n\n            ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "\r\n\n                text-lg\r\n\n                font-extrabold\r\n\n                tracking-[-0.02em]\r\n\n                text-[#082f9c]\r\n\n              ",
                                children: "Nenhum item encontrado."
                            }, void 0, false, {
                                fileName: "[project]/components/catalog/CatalogContent.tsx",
                                lineNumber: 356,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "\r\n\n                mx-auto\r\n\n                mt-2\r\n\n                max-w-md\r\n\n                text-sm\r\n\n                leading-6\r\n\n                text-[#09143a]/55\r\n\n              ",
                                children: "Tente buscar por outro nome ou selecione uma categoria diferente."
                            }, void 0, false, {
                                fileName: "[project]/components/catalog/CatalogContent.tsx",
                                lineNumber: 367,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/catalog/CatalogContent.tsx",
                        lineNumber: 345,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/catalog/CatalogContent.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/catalog/CatalogContent.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s(CatalogContent, "65fWBn7RPec77/Rfud2A0oYfxjE=");
_c = CatalogContent;
var _c;
__turbopack_context__.k.register(_c, "CatalogContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/catalog/CatalogFilters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CatalogFilters",
    ()=>CatalogFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const categories = [
    [
        "todos",
        "Todos"
    ],
    [
        "climatizacao",
        "Climatização"
    ],
    [
        "eletrica",
        "Elétrica"
    ],
    [
        "infraestrutura",
        "Infraestrutura"
    ],
    [
        "acessorios",
        "Acessórios"
    ]
];
function CatalogFilters({ search, onSearchChange, activeCategory, onCategoryChange, resultCount }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-b border-[#09143a]/10 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shell",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "\r\n\n            grid\r\n\n            gap-5\r\n\n            py-6\r\n\n            lg:grid-cols-[1fr_auto]\r\n\n            lg:items-end\r\n\n          ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "\r\n\n                mb-3\r\n\n                text-[10px]\r\n\n                font-bold\r\n\n                uppercase\r\n\n                tracking-[0.18em]\r\n\n                text-[#09143a]/42\r\n\n              ",
                                    children: "Filtrar por categoria"
                                }, void 0, false, {
                                    fileName: "[project]/components/catalog/CatalogFilters.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative md:hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: activeCategory,
                                            onChange: (e)=>onCategoryChange(e.target.value),
                                            className: "\r\n\n                  h-12\r\n\n                  w-full\r\n\n                  appearance-none\r\n\n                  border\r\n\n                  border-[#09143a]/14\r\n\n                  bg-[#f7f8fb]\r\n\n                  px-4\r\n\n                  pr-11\r\n\n                  text-sm\r\n\n                  font-semibold\r\n\n                  text-[#09143a]\r\n\n                  outline-none\r\n\n                  transition-all\r\n\n                  focus:border-[#082f9c]\r\n\n                  focus:bg-white\r\n\n                  focus:ring-2\r\n\n                  focus:ring-[#082f9c]/10\r\n\n                ",
                                            children: categories.map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: value,
                                                    children: label
                                                }, value, false, {
                                                    fileName: "[project]/components/catalog/CatalogFilters.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/catalog/CatalogFilters.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            className: "\r\n\n                  pointer-events-none\r\n\n                  absolute\r\n\n                  right-4\r\n\n                  top-1/2\r\n\n                  h-2\r\n\n                  w-2\r\n\n                  -translate-y-[65%]\r\n\n                  rotate-45\r\n\n                  border-b\r\n\n                  border-r\r\n\n                  border-[#082f9c]/55\r\n\n                "
                                        }, void 0, false, {
                                            fileName: "[project]/components/catalog/CatalogFilters.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/catalog/CatalogFilters.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "\r\n\n                hidden\r\n\n                flex-wrap\r\n\n                gap-2\r\n\n                md:flex\r\n\n              ",
                                    children: categories.map(([value, label])=>{
                                        const active = activeCategory === value;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onCategoryChange(value),
                                            className: `
                      border
                      px-4
                      py-2.5
                      text-sm
                      font-bold
                      transition-all
                      duration-200

                      ${active ? `
                            border-[#082f9c]
                            bg-[#082f9c]
                            text-white
                          ` : `
                            border-[#09143a]/12
                            bg-white
                            text-[#09143a]/56
                            hover:border-[#082f9c]/30
                            hover:text-[#082f9c]
                          `}
                    `,
                                            children: label
                                        }, value, false, {
                                            fileName: "[project]/components/catalog/CatalogFilters.tsx",
                                            lineNumber: 127,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/catalog/CatalogFilters.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/catalog/CatalogFilters.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full lg:w-[320px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "catalog-search",
                                    className: "\r\n\n                mb-3\r\n\n                block\r\n\n                text-[10px]\r\n\n                font-bold\r\n\n                uppercase\r\n\n                tracking-[0.18em]\r\n\n                text-[#09143a]/42\r\n\n              ",
                                    children: "Buscar no catálogo"
                                }, void 0, false, {
                                    fileName: "[project]/components/catalog/CatalogFilters.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "catalog-search",
                                            type: "search",
                                            value: search,
                                            onChange: (e)=>onSearchChange(e.target.value),
                                            placeholder: "Buscar produto ou material",
                                            className: "\r\n\n                  h-12\r\n\n                  w-full\r\n\n                  border\r\n\n                  border-[#09143a]/14\r\n\n                  bg-[#f7f8fb]\r\n\n                  px-4\r\n\n                  pr-12\r\n\n                  text-sm\r\n\n                  text-[#09143a]\r\n\n                  outline-none\r\n\n                  transition-all\r\n\n                  placeholder:text-[#09143a]/35\r\n\n                  hover:border-[#09143a]/24\r\n\n                  focus:border-[#082f9c]\r\n\n                  focus:bg-white\r\n\n                  focus:ring-2\r\n\n                  focus:ring-[#082f9c]/10\r\n\n                "
                                        }, void 0, false, {
                                            fileName: "[project]/components/catalog/CatalogFilters.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            className: "\r\n\n                  pointer-events-none\r\n\n                  absolute\r\n\n                  right-4\r\n\n                  top-1/2\r\n\n                  -translate-y-1/2\r\n\n                  text-[10px]\r\n\n                  font-bold\r\n\n                  tracking-[0.08em]\r\n\n                  text-[#082f9c]/45\r\n\n                ",
                                            children: "BUSCAR"
                                        }, void 0, false, {
                                            fileName: "[project]/components/catalog/CatalogFilters.tsx",
                                            lineNumber: 213,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/catalog/CatalogFilters.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/catalog/CatalogFilters.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/catalog/CatalogFilters.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "\r\n\n            flex\r\n\n            flex-wrap\r\n\n            items-center\r\n\n            justify-between\r\n\n            gap-3\r\n\n            border-t\r\n\n            border-[#09143a]/8\r\n\n            py-4\r\n\n          ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "\r\n\n              text-xs\r\n\n              font-semibold\r\n\n              text-[#09143a]/45\r\n\n            ",
                            children: resultCount === 1 ? "1 item encontrado" : `${resultCount} itens encontrados`
                        }, void 0, false, {
                            fileName: "[project]/components/catalog/CatalogFilters.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this),
                        (search || activeCategory !== "todos") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                onSearchChange("");
                                onCategoryChange("todos");
                            },
                            className: "\r\n\n                text-xs\r\n\n                font-bold\r\n\n                text-[#082f9c]\r\n\n                transition-colors\r\n\n                hover:text-[#ff7900]\r\n\n              ",
                            children: "Limpar filtros"
                        }, void 0, false, {
                            fileName: "[project]/components/catalog/CatalogFilters.tsx",
                            lineNumber: 259,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/catalog/CatalogFilters.tsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/catalog/CatalogFilters.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/catalog/CatalogFilters.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = CatalogFilters;
var _c;
__turbopack_context__.k.register(_c, "CatalogFilters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/catalog/CatalogGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CatalogGrid",
    ()=>CatalogGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$catalog$2f$CatalogCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/catalog/CatalogCard.tsx [app-client] (ecmascript)");
;
;
function CatalogGrid({ items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "\r\n\n        grid\r\n\n        auto-rows-fr\r\n\n        gap-4\r\n\n        sm:grid-cols-2\r\n\n        md:grid-cols-3\r\n\n        xl:grid-cols-4\r\n\n        2xl:grid-cols-5\r\n\n      ",
        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$catalog$2f$CatalogCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatalogCard"], {
                item: item
            }, item.id, false, {
                fileName: "[project]/components/catalog/CatalogGrid.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/catalog/CatalogGrid.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = CatalogGrid;
var _c;
__turbopack_context__.k.register(_c, "CatalogGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$WhatsappLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/WhatsappLink.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const nav = [
    [
        "Climatização",
        "/#servicos"
    ],
    [
        "Soluções Elétricas",
        "/#solucoes-eletricas"
    ],
    [
        "Atendimento",
        "/#como-funciona"
    ],
    [
        "Dúvidas",
        "/#duvidas"
    ],
    [
        "Contato",
        "/#contato"
    ]
];
function Header() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#inicio");
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isHome = pathname === "/";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            function handleScroll() {
                setScrolled(window.scrollY > 40);
            }
            handleScroll();
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (!isHome) return;
            const sectionIds = [
                "inicio",
                "servicos",
                "solucoes-eletricas",
                "como-funciona",
                "duvidas",
                "contato"
            ];
            const sections = sectionIds.map({
                "Header.useEffect.sections": (id)=>document.getElementById(id)
            }["Header.useEffect.sections"]).filter(Boolean);
            if (!sections.length) return;
            const observer = new IntersectionObserver({
                "Header.useEffect": (entries)=>{
                    const visibleEntries = entries.filter({
                        "Header.useEffect.visibleEntries": (entry)=>entry.isIntersecting
                    }["Header.useEffect.visibleEntries"]).sort({
                        "Header.useEffect.visibleEntries": (a, b)=>b.intersectionRatio - a.intersectionRatio
                    }["Header.useEffect.visibleEntries"]);
                    if (!visibleEntries.length) return;
                    const currentSection = visibleEntries[0].target.id;
                    setActiveSection(`#${currentSection}`);
                }
            }["Header.useEffect"], {
                root: null,
                rootMargin: "-88px 0px -58% 0px",
                threshold: [
                    0.1,
                    0.25,
                    0.5,
                    0.75
                ]
            });
            sections.forEach({
                "Header.useEffect": (section)=>{
                    observer.observe(section);
                }
            }["Header.useEffect"]);
            return ({
                "Header.useEffect": ()=>{
                    observer.disconnect();
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        isHome
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (!open) {
                document.body.style.overflow = "";
                return;
            }
            document.body.style.overflow = "hidden";
            return ({
                "Header.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            setOpen(false);
        }
    }["Header.useEffect"], [
        pathname
    ]);
    function handleNavigate(section) {
        if (section) {
            setActiveSection(section);
        }
        setOpen(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `
          fixed
          inset-x-0
          top-0
          z-50
          text-white
          transition-all
          duration-300

          ${scrolled || !isHome ? `
                bg-[#071b58]/95
                shadow-[0_12px_40px_rgba(0,0,0,0.16)]
                backdrop-blur-md
              ` : "bg-transparent"}
        `,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `
            shell
            flex
            items-center
            justify-between
            transition-all
            duration-300

            ${scrolled ? "h-[72px] border-transparent" : "h-20 border-b border-white/20"}
          `,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/#inicio",
                            onClick: ()=>handleNavigate("#inicio"),
                            "aria-label": "Soares Climatização e Soluções Elétricas - início",
                            className: "\n              focus-ring\n              flex\n              shrink-0\n              flex-col\n              leading-none\n            ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "\n                text-[1.15rem]\n                font-black\n                tracking-[-0.045em]\n                sm:text-xl\n              ",
                                    children: "SOARES"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "\n                mt-1\n                text-[8px]\n                font-bold\n                uppercase\n                tracking-[0.08em]\n                text-[#ff8a1c]\n                sm:text-[9px]\n              ",
                                    children: "Climatização & Soluções Elétricas"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "\n              hidden\n              items-center\n              gap-4\n              lg:flex\n              xl:gap-6\n            ",
                            "aria-label": "Navegação principal",
                            children: nav.map(([label, href])=>{
                                const section = href.split("#")[1];
                                const active = isHome && activeSection === `#${section}`;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: href,
                                    onClick: ()=>handleNavigate(`#${section}`),
                                    className: `
                    group
                    relative
                    whitespace-nowrap
                    py-3
                    text-[12px]
                    font-semibold
                    transition-colors
                    duration-200
                    xl:text-[13px]

                    ${active ? "text-white" : "text-white/65 hover:text-white"}
                  `,
                                    children: [
                                        label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      bg-[#ff7900]
                      transition-all
                      duration-300

                      ${active ? "w-full" : "w-0 group-hover:w-full"}
                    `
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 243,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, href, true, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 217,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "\n              hidden\n              items-center\n              gap-2\n              lg:flex\n            ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/catalogo",
                                    className: "\n                focus-ring\n                inline-flex\n                min-h-11\n                items-center\n                justify-center\n                border\n                border-white/22\n                px-4\n                text-[12px]\n                font-bold\n                text-white\n                transition-all\n                duration-200\n                hover:border-white/45\n                hover:bg-white/[0.06]\n                xl:px-5\n                xl:text-[13px]\n              ",
                                    children: "Ver catálogo"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$WhatsappLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsappLink"], {
                                    source: "header",
                                    message: "Olá! Vim pelo site da Soares Climatização e Soluções Elétricas e gostaria de solicitar um orçamento.",
                                    className: "\n                min-h-11\n                bg-[#ff7900]\n                px-4\n                text-[12px]\n                font-bold\n                text-white\n                hover:bg-[#ff8d27]\n                xl:px-5\n                xl:text-[13px]\n              ",
                                    children: "Pedir orçamento"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 299,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            "aria-label": open ? "Fechar menu" : "Abrir menu",
                            "aria-expanded": open,
                            "aria-controls": "mobile-navigation",
                            onClick: ()=>setOpen((value)=>!value),
                            className: "\n              focus-ring\n              relative\n              flex\n              h-11\n              w-11\n              items-center\n              justify-center\n              lg:hidden\n            ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: open ? "Fechar menu" : "Abrir menu"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "\n                relative\n                block\n                h-[18px]\n                w-6\n              ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `
                  absolute
                  left-0
                  top-0
                  h-[2px]
                  w-6
                  bg-white
                  transition-all
                  duration-300

                  ${open ? "translate-y-[8px] rotate-45" : ""}
                `
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 356,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `
                  absolute
                  left-0
                  top-[8px]
                  h-[2px]
                  bg-white
                  transition-all
                  duration-300

                  ${open ? "w-0 opacity-0" : "w-6 opacity-100"}
                `
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 375,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-6
                  bg-white
                  transition-all
                  duration-300

                  ${open ? "-translate-y-[8px] -rotate-45" : ""}
                `
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 393,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 348,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 319,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Header.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Fechar menu",
                onClick: ()=>setOpen(false),
                className: `
          fixed
          inset-0
          z-[60]
          bg-[#020817]/70
          backdrop-blur-[2px]
          transition-all
          duration-300
          lg:hidden

          ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}
        `
            }, void 0, false, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 417,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                id: "mobile-navigation",
                "aria-hidden": !open,
                className: `
          fixed
          right-0
          top-0
          z-[70]
          flex
          h-dvh
          w-[88%]
          max-w-[390px]
          flex-col
          bg-[#071b58]
          text-white
          shadow-[-24px_0_60px_rgba(0,0,0,.28)]
          transition-transform
          duration-300
          ease-out
          lg:hidden

          ${open ? "translate-x-0" : "translate-x-full"}
        `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "\n            flex\n            h-20\n            items-center\n            justify-between\n            border-b\n            border-white/10\n            px-5\n          ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#inicio",
                                onClick: ()=>handleNavigate("#inicio"),
                                className: "\n              flex\n              flex-col\n              leading-none\n            ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "\n                text-lg\n                font-black\n                tracking-[-0.04em]\n              ",
                                        children: "SOARES"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Header.tsx",
                                        lineNumber: 491,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "\n                mt-1\n                text-[8px]\n                font-bold\n                uppercase\n                tracking-[0.08em]\n                text-[#ff8a1c]\n              ",
                                        children: "Climatização & Soluções Elétricas"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Header.tsx",
                                        lineNumber: 501,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 480,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": "Fechar menu",
                                onClick: ()=>setOpen(false),
                                className: "\n              focus-ring\n              relative\n              h-10\n              w-10\n            ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "\n                absolute\n                left-1/2\n                top-1/2\n                h-[2px]\n                w-5\n                -translate-x-1/2\n                -translate-y-1/2\n                rotate-45\n                bg-white\n              "
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Header.tsx",
                                        lineNumber: 528,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "\n                absolute\n                left-1/2\n                top-1/2\n                h-[2px]\n                w-5\n                -translate-x-1/2\n                -translate-y-1/2\n                -rotate-45\n                bg-white\n              "
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Header.tsx",
                                        lineNumber: 542,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 515,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 469,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "\n            flex-1\n            overflow-y-auto\n            px-5\n            py-5\n          ",
                        "aria-label": "Menu mobile",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid",
                                children: nav.map(([label, href])=>{
                                    const section = href.split("#")[1];
                                    const active = isHome && activeSection === `#${section}`;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: href,
                                        onClick: ()=>handleNavigate(`#${section}`),
                                        className: `
                    group
                    relative
                    border-b
                    border-white/10
                    py-4
                    text-[1.25rem]
                    font-extrabold
                    tracking-[-0.03em]
                    transition-colors
                    duration-200

                    ${active ? "text-white" : "text-white/62 hover:text-white"}
                  `,
                                        children: [
                                            label,
                                            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "\n                        absolute\n                        bottom-[-1px]\n                        left-0\n                        h-[2px]\n                        w-12\n                        bg-[#ff7900]\n                      "
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 606,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, href, true, {
                                        fileName: "[project]/components/layout/Header.tsx",
                                        lineNumber: 578,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 568,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/catalogo",
                                onClick: ()=>setOpen(false),
                                className: "\n              mt-7\n              flex\n              min-h-12\n              w-full\n              items-center\n              justify-center\n              border\n              border-white/18\n              px-5\n              text-sm\n              font-bold\n              text-white\n              transition-all\n              duration-200\n              hover:border-white/35\n              hover:bg-white/[0.05]\n            ",
                                children: "Ver catálogo"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 623,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$WhatsappLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsappLink"], {
                                source: "mobile_menu",
                                message: "Olá! Vim pelo site da Soares Climatização e Soluções Elétricas e gostaria de solicitar um orçamento.",
                                className: "\n              mt-3\n              w-full\n              bg-[#ff7900]\n              text-white\n              hover:bg-[#ff8d27]\n            ",
                                children: "Pedir orçamento"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 651,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 559,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "\n            border-t\n            border-white/10\n            px-5\n            py-5\n          ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "\n              max-w-[290px]\n              text-xs\n              leading-5\n              text-white/38\n            ",
                            children: "Climatização, soluções elétricas e equipamentos para residências e empresas."
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 675,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 667,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 440,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Header.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_s(Header, "hQt737/th0GcVAqF+E0ADJw7KDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/WhatsappLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhatsappLink",
    ()=>WhatsappLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/analytics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-client] (ecmascript)");
"use client";
;
;
;
function WhatsappLink({ children, source, message, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whatsappUrl"])(message),
        target: "_blank",
        rel: "noreferrer",
        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["track"])("whatsapp_click", {
                source,
                service: "climatizacao"
            }),
        className: `focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-bold transition ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/WhatsappLink.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = WhatsappLink;
var _c;
__turbopack_context__.k.register(_c, "WhatsappLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/catalog.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "catalogItems",
    ()=>catalogItems
]);
const catalogItems = [
    // CLIMATIZAÇÃO
    {
        id: "ar-condicionado-split",
        slug: "ar-condicionado-split",
        name: "Ar-condicionado Split",
        category: "climatizacao",
        description: "Equipamentos para climatização residencial e comercial, com diferentes capacidades e aplicações.",
        image: "/images/catalogo/ar-condicionado-split.png",
        featured: true
    },
    {
        id: "ar-condicionado-inverter",
        slug: "ar-condicionado-inverter",
        name: "Ar-condicionado Inverter",
        category: "climatizacao",
        description: "Equipamentos com tecnologia inverter para climatização de ambientes residenciais e comerciais.",
        image: "/images/catalogo/ar-condicionado-inverter.png",
        featured: true
    },
    {
        id: "evaporadora-split",
        slug: "evaporadora-split",
        name: "Evaporadora Split",
        category: "climatizacao",
        description: "Unidade interna utilizada em sistemas de ar-condicionado split.",
        image: "/images/catalogo/evaporadora-split.png"
    },
    {
        id: "condensadora-split",
        slug: "condensadora-split",
        name: "Condensadora Split",
        category: "climatizacao",
        description: "Unidade externa para sistemas de climatização split residencial e comercial.",
        image: "/images/catalogo/condensadora-split.png"
    },
    // INFRAESTRUTURA
    {
        id: "tubulacao-cobre",
        slug: "tubulacao-cobre",
        name: "Tubulação de cobre",
        category: "infraestrutura",
        description: "Tubulação utilizada na infraestrutura e instalação de sistemas de climatização.",
        image: "/images/catalogo/tubulacao-cobre.png"
    },
    {
        id: "isolamento-termico",
        slug: "isolamento-termico",
        name: "Isolamento térmico",
        category: "infraestrutura",
        description: "Material utilizado no acabamento e proteção térmica da tubulação de climatização.",
        image: "/images/catalogo/isolamento-termico.png"
    },
    {
        id: "suporte-condensadora",
        slug: "suporte-condensadora",
        name: "Suporte para condensadora",
        category: "infraestrutura",
        description: "Suporte para fixação de unidades externas de sistemas de ar-condicionado.",
        image: "/images/catalogo/suporte-condensadora.png"
    },
    {
        id: "canaleta-acabamento",
        slug: "canaleta-acabamento",
        name: "Canaleta de acabamento",
        category: "infraestrutura",
        description: "Canaleta para organização e acabamento de tubulações e instalações aparentes.",
        image: "/images/catalogo/canaleta-acabamento.png"
    },
    // ELÉTRICA
    {
        id: "disjuntores",
        slug: "disjuntores",
        name: "Disjuntores",
        category: "eletrica",
        description: "Componentes para proteção e organização de circuitos elétricos.",
        image: "/images/catalogo/disjuntores.png"
    },
    {
        id: "cabos-eletricos",
        slug: "cabos-eletricos",
        name: "Cabos elétricos",
        category: "eletrica",
        description: "Cabos e condutores para instalações e adequações elétricas.",
        image: "/images/catalogo/cabos-eletricos.png"
    },
    {
        id: "quadro-distribuicao",
        slug: "quadro-distribuicao",
        name: "Quadro de distribuição",
        category: "eletrica",
        description: "Quadros para organização e distribuição de circuitos elétricos.",
        image: "/images/catalogo/quadro-distribuicao.png"
    },
    {
        id: "dps",
        slug: "dps",
        name: "DPS",
        category: "eletrica",
        description: "Dispositivo utilizado na proteção de instalações elétricas contra surtos.",
        image: "/images/catalogo/dps.png"
    },
    {
        id: "tomada-20a",
        slug: "tomada-20a",
        name: "Tomada 20A",
        category: "eletrica",
        description: "Tomada para aplicações elétricas compatíveis com equipamentos de maior corrente.",
        image: "/images/catalogo/tomada-20a.png"
    },
    // ACESSÓRIOS
    {
        id: "mangueira-dreno",
        slug: "mangueira-dreno",
        name: "Mangueira para dreno",
        category: "acessorios",
        description: "Mangueira utilizada no escoamento da água gerada pelo sistema de climatização.",
        image: "/images/catalogo/mangueira-dreno.png"
    },
    {
        id: "bomba-dreno",
        slug: "bomba-dreno",
        name: "Bomba de dreno",
        category: "acessorios",
        description: "Solução auxiliar para drenagem em instalações de ar-condicionado.",
        image: "/images/catalogo/bomba-dreno.png"
    },
    {
        id: "fita-pvc",
        slug: "fita-pvc",
        name: "Fita PVC para acabamento",
        category: "acessorios",
        description: "Material para proteção e acabamento de tubulações em instalações de climatização.",
        image: "/images/catalogo/fita-pvc.png"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/analytics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "track",
    ()=>track
]);
"use client";
function track(event, data = {}) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event,
        ...data,
        page: window.location.pathname
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "site",
    ()=>site,
    "whatsappUrl",
    ()=>whatsappUrl
]);
const site = {
    name: "Soares Climatização",
    instagram: "https://www.instagram.com/soares.climatizacao/",
    whatsapp: "5547997196961",
    whatsappLabel: "(47) 9 9719-6961",
    region: "Bombinhas e região"
};
function whatsappUrl(message) {
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1xzaqr8._.js.map