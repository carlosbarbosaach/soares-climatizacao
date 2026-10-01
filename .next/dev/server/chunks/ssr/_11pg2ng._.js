module.exports = [
"[project]/components/catalog/CatalogCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CatalogCard",
    ()=>CatalogCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$WhatsappLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/WhatsappLink.tsx [app-ssr] (ecmascript)");
;
;
;
const categoryLabels = {
    climatizacao: "Climatização",
    eletrica: "Elétrica",
    infraestrutura: "Infraestrutura",
    acessorios: "Acessórios"
};
const coverImages = [
    "tubulacao-cobre",
    "dps"
];
function imageStyle(item) {
    if (coverImages.includes(item.id)) {
        return "object-cover";
    }
    return "object-contain p-5";
}
function CatalogCard({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "\r\n\n        group\r\n\n        flex\r\n\n        h-full\r\n\n        flex-col\r\n\n        overflow-hidden\r\n\n        border\r\n\n        border-[#09143a]/10\r\n\n        bg-white\r\n\n\r\n\n        shadow-[0_2px_6px_rgba(9,20,58,0.04),0_10px_28px_rgba(9,20,58,0.07)]\r\n\n\r\n\n        transition-all\r\n\n        duration-300\r\n\n\r\n\n        hover:-translate-y-1.5\r\n\n        hover:border-[#082f9c]/20\r\n\n        hover:shadow-[0_6px_14px_rgba(9,20,58,0.08),0_22px_50px_rgba(9,20,58,0.14)]\r\n\n      ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "\r\n\n          relative\r\n\n          aspect-[4/3]\r\n\n          overflow-hidden\r\n\n          border-b\r\n\n          border-[#09143a]/6\r\n\n          bg-[#f7f8fa]\r\n\n        ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: item.image,
                        alt: item.name,
                        fill: true,
                        sizes: "\r\n\n            (max-width: 640px) 100vw,\r\n\n            (max-width: 768px) 50vw,\r\n\n            (max-width: 1280px) 33vw,\r\n\n            (max-width: 1536px) 25vw,\r\n\n            20vw\r\n\n          ",
                        className: `
            ${imageStyle(item)}
            transition-transform
            duration-500
            group-hover:scale-[1.035]
          `
                    }, void 0, false, {
                        fileName: "[project]/components/catalog/CatalogCard.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    item.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "\r\n\n              absolute\r\n\n              left-3\r\n\n              top-3\r\n\n              bg-[#061b5c]\r\n\n              px-3\r\n\n              py-1.5\r\n\n              text-[8px]\r\n\n              font-bold\r\n\n              uppercase\r\n\n              tracking-[0.18em]\r\n\n              text-white\r\n\n              shadow-[0_8px_18px_rgba(6,27,92,0.16)]\r\n\n            ",
                        children: "Destaque"
                    }, void 0, false, {
                        fileName: "[project]/components/catalog/CatalogCard.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "\r\n\n            absolute\r\n\n            bottom-3\r\n\n            right-3\r\n\n            bg-white/95\r\n\n            px-2.5\r\n\n            py-1.5\r\n\n            text-[9px]\r\n\n            font-bold\r\n\n            uppercase\r\n\n            tracking-[0.12em]\r\n\n            text-[#082f9c]\r\n\n            shadow-[0_6px_16px_rgba(9,20,58,0.08)]\r\n\n            backdrop-blur-sm\r\n\n          ",
                        children: "Sob consulta"
                    }, void 0, false, {
                        fileName: "[project]/components/catalog/CatalogCard.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/catalog/CatalogCard.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "\r\n\n          flex\r\n\n          flex-1\r\n\n          flex-col\r\n\n          p-4\r\n\n          sm:p-5\r\n\n        ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "\r\n\n            text-[8px]\r\n\n            font-bold\r\n\n            uppercase\r\n\n            tracking-[0.2em]\r\n\n            text-[#ff7900]\r\n\n          ",
                        children: categoryLabels[item.category]
                    }, void 0, false, {
                        fileName: "[project]/components/catalog/CatalogCard.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "\r\n\n            mt-2\r\n\n            line-clamp-2\r\n\n            min-h-[3.1rem]\r\n\n            text-[1.15rem]\r\n\n            font-black\r\n\n            leading-[1.2]\r\n\n            tracking-[-0.03em]\r\n\n            text-[#082f9c]\r\n\n          ",
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/components/catalog/CatalogCard.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "\r\n\n            mt-2\r\n\n            line-clamp-2\r\n\n            min-h-[2.8rem]\r\n\n            text-[12.5px]\r\n\n            leading-[1.6]\r\n\n            text-[#09143a]/56\r\n\n          ",
                        children: item.description
                    }, void 0, false, {
                        fileName: "[project]/components/catalog/CatalogCard.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    item.brand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "\r\n\n              mt-3\r\n\n              text-[10px]\r\n\n              font-semibold\r\n\n              uppercase\r\n\n              tracking-[0.12em]\r\n\n              text-[#09143a]/36\r\n\n            ",
                        children: item.brand
                    }, void 0, false, {
                        fileName: "[project]/components/catalog/CatalogCard.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "\r\n\n            mt-4\r\n\n            border-t\r\n\n            border-[#09143a]/8\r\n\n            pt-4\r\n\n          ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "\r\n\n              text-[9px]\r\n\n              font-bold\r\n\n              uppercase\r\n\n              tracking-[0.16em]\r\n\n              text-[#09143a]/35\r\n\n            ",
                                children: "Disponibilidade e valor"
                            }, void 0, false, {
                                fileName: "[project]/components/catalog/CatalogCard.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "\r\n\n              mt-1\r\n\n              text-sm\r\n\n              font-black\r\n\n              text-[#061b5c]\r\n\n            ",
                                children: "Consulte nossa equipe"
                            }, void 0, false, {
                                fileName: "[project]/components/catalog/CatalogCard.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/catalog/CatalogCard.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto pt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$WhatsappLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhatsappLink"], {
                            source: `catalog_${item.slug}`,
                            message: `Olá! Vim pelo catálogo da Soares Climatização e Soluções Elétricas e gostaria de consultar disponibilidade e valor do produto ${item.name}.`,
                            className: "\r\n\n              inline-flex\r\n\n              min-h-11\r\n\n              w-full\r\n\n              items-center\r\n\n              justify-center\r\n\n              bg-[#082f9c]\r\n\n              px-4\r\n\n              text-center\r\n\n              text-[11px]\r\n\n              font-bold\r\n\n              uppercase\r\n\n              tracking-[0.08em]\r\n\n              text-white\r\n\n\r\n\n              shadow-[0_8px_18px_rgba(8,47,156,0.14)]\r\n\n\r\n\n              transition-all\r\n\n              duration-200\r\n\n\r\n\n              hover:-translate-y-px\r\n\n              hover:bg-[#061b5c]\r\n\n              hover:shadow-[0_12px_24px_rgba(8,47,156,0.20)]\r\n\n            ",
                            children: "Consultar produto"
                        }, void 0, false, {
                            fileName: "[project]/components/catalog/CatalogCard.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/catalog/CatalogCard.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/catalog/CatalogCard.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/catalog/CatalogCard.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/catalog/CatalogContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CatalogContent",
    ()=>CatalogContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/catalog.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$catalog$2f$CatalogFilters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/catalog/CatalogFilters.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$catalog$2f$CatalogGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/catalog/CatalogGrid.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const ITEMS_PER_PAGE = 10;
function CatalogContent() {
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("todos");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const filteredItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const normalizedSearch = search.trim().toLowerCase();
        return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["catalogItems"].filter((item)=>{
            const matchesCategory = category === "todos" || item.category === category;
            const matchesSearch = !normalizedSearch || item.name.toLowerCase().includes(normalizedSearch) || item.description.toLowerCase().includes(normalizedSearch) || item.brand?.toLowerCase().includes(normalizedSearch);
            return matchesCategory && matchesSearch;
        });
    }, [
        category,
        search
    ]);
    const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));
    const paginatedItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        return filteredItems.slice(start, end);
    }, [
        filteredItems,
        currentPage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCurrentPage(1);
    }, [
        category,
        search
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "catalog-products",
        className: "\r\n\n        bg-[#f7f8fb]\r\n\n        pb-20\r\n\n        lg:pb-24\r\n\n      ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$catalog$2f$CatalogFilters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CatalogFilters"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shell pt-10 lg:pt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "\r\n\n            mb-8\r\n\n            flex\r\n\n            flex-col\r\n\n            gap-4\r\n\n            sm:flex-row\r\n\n            sm:items-end\r\n\n            sm:justify-between\r\n\n          ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "\r\n\n                text-[10px]\r\n\n                font-bold\r\n\n                uppercase\r\n\n                tracking-[0.18em]\r\n\n                text-[#ff7900]\r\n\n              ",
                                        children: "Produtos e materiais"
                                    }, void 0, false, {
                                        fileName: "[project]/components/catalog/CatalogContent.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                            filteredItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    filteredItems.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$catalog$2f$CatalogGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CatalogGrid"], {
                                items: paginatedItems
                            }, void 0, false, {
                                fileName: "[project]/components/catalog/CatalogContent.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this),
                            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                "aria-label": "Paginação do catálogo",
                                className: "\r\n\n                  mt-12\r\n\n                  flex\r\n\n                  flex-wrap\r\n\n                  items-center\r\n\n                  justify-center\r\n\n                  gap-2\r\n\n                ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    }, this) : /* SEM RESULTADOS */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "\r\n\n              border\r\n\n              border-[#09143a]/10\r\n\n              bg-white\r\n\n              px-6\r\n\n              py-12\r\n\n              text-center\r\n\n              sm:py-16\r\n\n            ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "\r\n\n                text-lg\r\n\n                font-extrabold\r\n\n                tracking-[-0.02em]\r\n\n                text-[#082f9c]\r\n\n              ",
                                children: "Nenhum item encontrado."
                            }, void 0, false, {
                                fileName: "[project]/components/catalog/CatalogContent.tsx",
                                lineNumber: 356,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/components/catalog/CatalogFilters.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CatalogFilters",
    ()=>CatalogFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-b border-[#09143a]/10 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shell",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "\r\n\n            grid\r\n\n            gap-5\r\n\n            py-6\r\n\n            lg:grid-cols-[1fr_auto]\r\n\n            lg:items-end\r\n\n          ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "\r\n\n                mb-3\r\n\n                text-[10px]\r\n\n                font-bold\r\n\n                uppercase\r\n\n                tracking-[0.18em]\r\n\n                text-[#09143a]/42\r\n\n              ",
                                    children: "Filtrar por categoria"
                                }, void 0, false, {
                                    fileName: "[project]/components/catalog/CatalogFilters.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative md:hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: activeCategory,
                                            onChange: (e)=>onCategoryChange(e.target.value),
                                            className: "\r\n\n                  h-12\r\n\n                  w-full\r\n\n                  appearance-none\r\n\n                  border\r\n\n                  border-[#09143a]/14\r\n\n                  bg-[#f7f8fb]\r\n\n                  px-4\r\n\n                  pr-11\r\n\n                  text-sm\r\n\n                  font-semibold\r\n\n                  text-[#09143a]\r\n\n                  outline-none\r\n\n                  transition-all\r\n\n                  focus:border-[#082f9c]\r\n\n                  focus:bg-white\r\n\n                  focus:ring-2\r\n\n                  focus:ring-[#082f9c]/10\r\n\n                ",
                                            children: categories.map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "\r\n\n                hidden\r\n\n                flex-wrap\r\n\n                gap-2\r\n\n                md:flex\r\n\n              ",
                                    children: categories.map(([value, label])=>{
                                        const active = activeCategory === value;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full lg:w-[320px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "catalog-search",
                                    className: "\r\n\n                mb-3\r\n\n                block\r\n\n                text-[10px]\r\n\n                font-bold\r\n\n                uppercase\r\n\n                tracking-[0.18em]\r\n\n                text-[#09143a]/42\r\n\n              ",
                                    children: "Buscar no catálogo"
                                }, void 0, false, {
                                    fileName: "[project]/components/catalog/CatalogFilters.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "\r\n\n            flex\r\n\n            flex-wrap\r\n\n            items-center\r\n\n            justify-between\r\n\n            gap-3\r\n\n            border-t\r\n\n            border-[#09143a]/8\r\n\n            py-4\r\n\n          ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "\r\n\n              text-xs\r\n\n              font-semibold\r\n\n              text-[#09143a]/45\r\n\n            ",
                            children: resultCount === 1 ? "1 item encontrado" : `${resultCount} itens encontrados`
                        }, void 0, false, {
                            fileName: "[project]/components/catalog/CatalogFilters.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this),
                        (search || activeCategory !== "todos") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/components/catalog/CatalogGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CatalogGrid",
    ()=>CatalogGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$catalog$2f$CatalogCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/catalog/CatalogCard.tsx [app-ssr] (ecmascript)");
;
;
function CatalogGrid({ items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "\r\n\n        grid\r\n\n        auto-rows-fr\r\n\n        gap-4\r\n\n        sm:grid-cols-2\r\n\n        md:grid-cols-3\r\n\n        xl:grid-cols-4\r\n\n        2xl:grid-cols-5\r\n\n      ",
        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$catalog$2f$CatalogCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CatalogCard"], {
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
}),
"[project]/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$WhatsappLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/WhatsappLink.tsx [app-ssr] (ecmascript)");
"use client";
;
;
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
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("#inicio");
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isHome = pathname === "/";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleScroll() {
            setScrolled(window.scrollY > 40);
        }
        handleScroll();
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isHome) return;
        const sectionIds = [
            "inicio",
            "servicos",
            "solucoes-eletricas",
            "como-funciona",
            "duvidas",
            "contato"
        ];
        const sections = sectionIds.map((id)=>document.getElementById(id)).filter(Boolean);
        if (!sections.length) return;
        const observer = new IntersectionObserver((entries)=>{
            const visibleEntries = entries.filter((entry)=>entry.isIntersecting).sort((a, b)=>b.intersectionRatio - a.intersectionRatio);
            if (!visibleEntries.length) return;
            const currentSection = visibleEntries[0].target.id;
            setActiveSection(`#${currentSection}`);
        }, {
            root: null,
            rootMargin: "-88px 0px -58% 0px",
            threshold: [
                0.1,
                0.25,
                0.5,
                0.75
            ]
        });
        sections.forEach((section)=>{
            observer.observe(section);
        });
        return ()=>{
            observer.disconnect();
        };
    }, [
        isHome
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) {
            document.body.style.overflow = "";
            return;
        }
        document.body.style.overflow = "hidden";
        return ()=>{
            document.body.style.overflow = "";
        };
    }, [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setOpen(false);
    }, [
        pathname
    ]);
    function handleNavigate(section) {
        if (section) {
            setActiveSection(section);
        }
        setOpen(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `
          fixed
          inset-x-0
          top-0
          z-50
          text-white
          transition-all
          duration-300

          after:pointer-events-none
          after:absolute
          after:inset-x-0
          after:bottom-0
          after:h-px
          after:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent)]

          ${scrolled || !isHome ? `
                  bg-[linear-gradient(110deg,rgba(5,20,59,.97)_0%,rgba(7,31,98,.96)_42%,rgba(10,52,145,.95)_72%,rgba(13,76,184,.94)_100%)]
                  shadow-[0_14px_45px_rgba(0,0,0,0.18)]
                  backdrop-blur-xl
                ` : "bg-transparent"}
        `,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `
            shell
            flex
            items-center
            justify-between
            transition-all
            duration-300

            ${scrolled || !isHome ? "h-[76px] border-transparent" : "h-[84px] border-b border-white/20"}
          `,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/#inicio",
                            onClick: ()=>handleNavigate("#inicio"),
                            "aria-label": "Soares Climatização e Soluções Elétricas - início",
                            className: "\n              focus-ring\n              flex\n              shrink-0\n              items-center\n            ",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/logo/soares-logo.png",
                                alt: "Soares Climatização e Soluções Elétricas",
                                width: 1432,
                                height: 477,
                                priority: true,
                                className: "\n                h-[44px]\n                w-auto\n                object-contain\n                sm:h-[48px]\n                lg:h-[50px]\n                xl:h-[54px]\n              "
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "\n              hidden\n              items-center\n              gap-4\n              lg:flex\n              xl:gap-6\n            ",
                            "aria-label": "Navegação principal",
                            children: nav.map(([label, href])=>{
                                const section = href.split("#")[1];
                                const active = isHome && activeSection === `#${section}`;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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

                    ${active ? "text-white" : "text-white/68 hover:text-white"}
                  `,
                                    children: [
                                        label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            lineNumber: 241,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, href, true, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 215,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "\n              hidden\n              items-center\n              gap-2\n              lg:flex\n            ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/catalogo",
                                    className: "\n                focus-ring\n                inline-flex\n                min-h-11\n                items-center\n                justify-center\n                border\n                border-white/24\n                bg-white/[0.03]\n                px-4\n                text-[12px]\n                font-bold\n                text-white\n                transition-all\n                duration-200\n                hover:border-white/45\n                hover:bg-white/[0.08]\n                xl:px-5\n                xl:text-[13px]\n              ",
                                    children: "Ver catálogo"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$WhatsappLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhatsappLink"], {
                                    source: "header",
                                    message: "Olá! Vim pelo site da Soares Climatização e Soluções Elétricas e gostaria de solicitar um orçamento.",
                                    className: "\n                min-h-11\n                bg-[#ff7900]\n                px-4\n                text-[12px]\n                font-bold\n                text-white\n                shadow-[0_10px_28px_rgba(255,121,0,.20)]\n                transition-all\n                duration-200\n                hover:-translate-y-px\n                hover:bg-[#ff8d27]\n                hover:shadow-[0_14px_34px_rgba(255,121,0,.26)]\n                xl:px-5\n                xl:text-[13px]\n              ",
                                    children: "Pedir orçamento"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            "aria-label": open ? "Fechar menu" : "Abrir menu",
                            "aria-expanded": open,
                            "aria-controls": "mobile-navigation",
                            onClick: ()=>setOpen((value)=>!value),
                            className: "\n              focus-ring\n              relative\n              flex\n              h-11\n              w-11\n              items-center\n              justify-center\n              lg:hidden\n            ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: open ? "Fechar menu" : "Abrir menu"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 346,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "\n                relative\n                block\n                h-[18px]\n                w-6\n              ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            lineNumber: 360,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            lineNumber: 379,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            lineNumber: 397,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 323,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Header.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Fechar menu",
                onClick: ()=>setOpen(false),
                className: `
          fixed
          inset-0
          z-[60]
          bg-[#020817]/72
          backdrop-blur-[3px]
          transition-all
          duration-300
          lg:hidden

          ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}
        `
            }, void 0, false, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 421,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
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
          overflow-hidden
          text-white
          shadow-[-24px_0_60px_rgba(0,0,0,.30)]
          transition-transform
          duration-300
          ease-out
          lg:hidden

          bg-[linear-gradient(150deg,#05143b_0%,#071f62_46%,#0a3491_76%,#0d4cb8_100%)]

          ${open ? "translate-x-0" : "translate-x-full"}
        `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": "true",
                        className: "\n            pointer-events-none\n            absolute\n            inset-x-0\n            top-0\n            h-44\n            bg-[radial-gradient(circle_at_75%_0%,rgba(255,255,255,.10),transparent_52%)]\n          "
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 475,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "\n            relative\n            z-10\n            flex\n            h-[86px]\n            items-center\n            justify-between\n            border-b\n            border-white/10\n            px-5\n          ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#inicio",
                                onClick: ()=>handleNavigate("#inicio"),
                                "aria-label": "Soares Climatização e Soluções Elétricas - início",
                                className: "\n              flex\n              min-w-0\n              items-center\n            ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/logo/soares-logo.png",
                                    alt: "Soares Climatização e Soluções Elétricas",
                                    width: 1432,
                                    height: 477,
                                    className: "\n                h-[47px]\n                w-auto\n                max-w-[245px]\n                object-contain\n              "
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 514,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 502,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": "Fechar menu",
                                onClick: ()=>setOpen(false),
                                className: "\n              focus-ring\n              relative\n              ml-3\n              h-10\n              w-10\n              shrink-0\n            ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "\n                absolute\n                left-1/2\n                top-1/2\n                h-[2px]\n                w-5\n                -translate-x-1/2\n                -translate-y-1/2\n                rotate-45\n                bg-white\n              "
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Header.tsx",
                                        lineNumber: 544,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "\n                absolute\n                left-1/2\n                top-1/2\n                h-[2px]\n                w-5\n                -translate-x-1/2\n                -translate-y-1/2\n                -rotate-45\n                bg-white\n              "
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Header.tsx",
                                        lineNumber: 558,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 529,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 488,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "\n            relative\n            z-10\n            flex-1\n            overflow-y-auto\n            px-5\n            py-5\n          ",
                        "aria-label": "Menu mobile",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid",
                                children: nav.map(([label, href])=>{
                                    const section = href.split("#")[1];
                                    const active = isHome && activeSection === `#${section}`;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "\n                        absolute\n                        bottom-[-1px]\n                        left-0\n                        h-[2px]\n                        w-12\n                        bg-[#ff7900]\n                      "
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 624,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, href, true, {
                                        fileName: "[project]/components/layout/Header.tsx",
                                        lineNumber: 596,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 586,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/catalogo",
                                onClick: ()=>setOpen(false),
                                className: "\n              mt-7\n              flex\n              min-h-12\n              w-full\n              items-center\n              justify-center\n              border\n              border-white/20\n              bg-white/[0.04]\n              px-5\n              text-sm\n              font-bold\n              text-white\n              transition-all\n              duration-200\n              hover:border-white/35\n              hover:bg-white/[0.08]\n            ",
                                children: "Ver catálogo"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 641,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$WhatsappLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhatsappLink"], {
                                source: "mobile_menu",
                                message: "Olá! Vim pelo site da Soares Climatização e Soluções Elétricas e gostaria de solicitar um orçamento.",
                                className: "\n              mt-3\n              w-full\n              bg-[#ff7900]\n              text-white\n              shadow-[0_12px_28px_rgba(255,121,0,.20)]\n              hover:bg-[#ff8d27]\n            ",
                                children: "Pedir orçamento"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 670,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 575,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "\n            relative\n            z-10\n            border-t\n            border-white/10\n            bg-black/[0.04]\n            px-5\n            py-5\n          ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "\n              max-w-[290px]\n              text-xs\n              leading-5\n              text-white/40\n            ",
                            children: "Climatização, soluções elétricas e equipamentos para residências e empresas."
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 698,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 687,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 444,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Header.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/WhatsappLink.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhatsappLink",
    ()=>WhatsappLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/analytics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function WhatsappLink({ children, source, message, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whatsappUrl"])(message),
        target: "_blank",
        rel: "noreferrer",
        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["track"])("whatsapp_click", {
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
}),
"[project]/data/catalog.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        image: "/images/catalogo/imagem02.png",
        featured: true
    },
    // INFRAESTRUTURA
    {
        id: "tubulacao-cobre",
        slug: "tubulacao-cobre",
        name: "Tubulação de cobre",
        category: "infraestrutura",
        description: "Tubulação utilizada na infraestrutura e instalação de sistemas de climatização.",
        image: "/images/catalogo/imagem01.png"
    },
    {
        id: "isolamento-termico",
        slug: "isolamento-termico",
        name: "Isolamento térmico",
        category: "infraestrutura",
        description: "Material utilizado no acabamento e proteção térmica da tubulação de climatização.",
        image: "/images/catalogo/imagem05.png"
    },
    {
        id: "canaleta-acabamento",
        slug: "canaleta-acabamento",
        name: "Canaleta de acabamento",
        category: "infraestrutura",
        description: "Canaleta para organização e acabamento de tubulações e instalações aparentes.",
        image: "/images/catalogo/imagem06.png"
    },
    // ELÉTRICA
    {
        id: "cabos-eletricos",
        slug: "cabos-eletricos",
        name: "Cabos elétricos",
        category: "eletrica",
        description: "Cabos e condutores para instalações e adequações elétricas.",
        image: "/images/catalogo/imagem03.png"
    },
    {
        id: "dps",
        slug: "dps",
        name: "DPS",
        category: "eletrica",
        description: "Dispositivo utilizado na proteção de instalações elétricas contra surtos.",
        image: "/images/catalogo/imagem04.png"
    },
    // ACESSÓRIOS
    {
        id: "fita-pvc",
        slug: "fita-pvc",
        name: "Fita PVC para acabamento",
        category: "acessorios",
        description: "Material para proteção e acabamento de tubulações em instalações de climatização.",
        image: "/images/catalogo/imagem07.png"
    }
];
}),
"[project]/lib/analytics.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "track",
    ()=>track
]);
"use client";
function track(event, data = {}) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/lib/site.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
];

//# sourceMappingURL=_11pg2ng._.js.map