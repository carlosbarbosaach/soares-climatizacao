module.exports = [
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
"[project]/components/sections/Contact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Contact",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$LeadForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/LeadForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Contact() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contato",
        className: "\n        scroll-mt-24\n        overflow-hidden\n        bg-[#082f9c]\n        py-16\n        text-white\n        sm:py-20\n        lg:py-24\n      ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shell",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "\n            grid\n            gap-10\n            md:grid-cols-12\n            md:items-start\n            md:gap-12\n            lg:gap-16\n          ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                        className: "md:col-span-6",
                        initial: {
                            opacity: 0,
                            x: -24
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: true,
                            amount: 0.2
                        },
                        transition: {
                            duration: 0.65,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "\n                text-[10px]\n                font-bold\n                uppercase\n                tracking-[0.2em]\n                text-[#ff9a3d]\n                sm:text-[11px]\n              ",
                                children: "Solicitar orçamento"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Contact.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "\n                mt-3\n                max-w-[620px]\n                text-[2rem]\n                font-black\n                leading-[1.02]\n                tracking-[-0.04em]\n                text-white\n                sm:text-[2.35rem]\n                lg:text-[2.8rem]\n              ",
                                children: "Vamos entender o que seu ambiente precisa."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Contact.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "\n                mt-5\n                max-w-xl\n                text-sm\n                leading-6\n                text-white/64\n                sm:text-[15px]\n                sm:leading-7\n              ",
                                children: "Informe se precisa de climatização, solução elétrica ou outro atendimento. Ao continuar, sua mensagem será preparada para envio direto pelo WhatsApp da Soares."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Contact.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "\n                mt-9\n                max-w-lg\n                border-t\n                border-white/12\n              ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "\n                  grid\n                  gap-6\n                  border-b\n                  border-white/12\n                  py-6\n                  sm:grid-cols-2\n                ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "\n                      text-[10px]\n                      font-bold\n                      uppercase\n                      tracking-[0.18em]\n                      text-[#ff9a3d]\n                    ",
                                                    children: "WhatsApp"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Contact.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `https://wa.me/${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].whatsapp}`,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "\n                      mt-2\n                      inline-block\n                      text-base\n                      font-extrabold\n                      text-white\n                      transition-colors\n                      hover:text-[#ff9a3d]\n                    ",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].whatsappLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Contact.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/Contact.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "\n                      text-[10px]\n                      font-bold\n                      uppercase\n                      tracking-[0.18em]\n                      text-[#ff9a3d]\n                    ",
                                                    children: "Atendimento"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Contact.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "\n                      mt-2\n                      text-sm\n                      font-semibold\n                      leading-6\n                      text-white/78\n                    ",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].region
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Contact.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/Contact.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Contact.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Contact.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "\n                mt-5\n                max-w-md\n                text-xs\n                leading-5\n                text-white/42\n              ",
                                children: "Você pode enviar fotos do ambiente, equipamento ou instalação elétrica pelo WhatsApp após iniciar a conversa."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Contact.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Contact.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                        className: "\n              md:col-span-5\n              md:col-start-8\n            ",
                        initial: {
                            opacity: 0,
                            x: 24
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: true,
                            amount: 0.2
                        },
                        transition: {
                            duration: 0.65,
                            delay: 0.1,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "\n                border\n                border-white/10\n                bg-white\n                p-5\n                text-[#09143a]\n                shadow-[0_20px_60px_rgba(0,0,0,.12)]\n                sm:p-7\n                lg:p-8\n              ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "\n                    text-[10px]\n                    font-bold\n                    uppercase\n                    tracking-[0.18em]\n                    text-[#ff7900]\n                  ",
                                            children: "Atendimento rápido"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Contact.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "\n                    mt-2\n                    text-[1.45rem]\n                    font-extrabold\n                    leading-tight\n                    tracking-[-0.03em]\n                    text-[#082f9c]\n                  ",
                                            children: "Conte o que você precisa"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Contact.tsx",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "\n                    mt-2\n                    text-sm\n                    leading-6\n                    text-[#09143a]/58\n                  ",
                                            children: "Preencha apenas as informações necessárias para iniciar o atendimento."
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Contact.tsx",
                                            lineNumber: 251,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Contact.tsx",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$LeadForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LeadForm"], {}, void 0, false, {
                                    fileName: "[project]/components/sections/Contact.tsx",
                                    lineNumber: 264,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Contact.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Contact.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Contact.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/Contact.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/Contact.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/ElectricalSolutions.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElectricalSolutions",
    ()=>ElectricalSolutions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$WhatsappLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/WhatsappLink.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Reveal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const electricalServices = [
    {
        title: "Instalações elétricas",
        text: "Execução e adequação de instalações elétricas para ambientes residenciais e comerciais."
    },
    {
        title: "Manutenção e reparos",
        text: "Identificação de problemas e realização de reparos em pontos, circuitos e instalações elétricas."
    },
    {
        title: "Adequações elétricas",
        text: "Ajustes na instalação existente para atender novas necessidades do ambiente ou dos equipamentos."
    },
    {
        title: "Infraestrutura elétrica",
        text: "Preparação de pontos e infraestrutura elétrica para equipamentos, reformas e novos projetos."
    }
];
function ElectricalSolutions() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "solucoes-eletricas",
        className: "\r\n\n        scroll-mt-24\r\n\n        overflow-hidden\r\n\n        bg-white\r\n\n        py-16\r\n\n        sm:py-20\r\n\n        lg:py-24\r\n\n      ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shell",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "\r\n\n              grid\r\n\n              gap-6\r\n\n              md:grid-cols-12\r\n\n              md:items-end\r\n\n              md:gap-8\r\n\n            ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "\r\n\n                  text-[10px]\r\n\n                  font-bold\r\n\n                  uppercase\r\n\n                  tracking-[0.2em]\r\n\n                  text-[#ff7900]\r\n\n                  sm:text-[11px]\r\n\n                ",
                                        children: "Soluções elétricas"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/ElectricalSolutions.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "\r\n\n                  mt-3\r\n\n                  max-w-[650px]\r\n\n                  text-[2rem]\r\n\n                  font-black\r\n\n                  leading-[1.02]\r\n\n                  tracking-[-0.04em]\r\n\n                  text-[#082f9c]\r\n\n                  sm:text-[2.35rem]\r\n\n                  lg:text-[2.8rem]\r\n\n                ",
                                        children: "Soluções elétricas pensadas para cada necessidade do ambiente."
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/ElectricalSolutions.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/ElectricalSolutions.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-4 md:col-start-9",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "\r\n\n                  max-w-md\r\n\n                  text-sm\r\n\n                  leading-6\r\n\n                  text-[#09143a]/62\r\n\n                  sm:text-[15px]\r\n\n                ",
                                    children: "Atendimento para residências e empresas, desde adequações até infraestrutura e manutenção elétrica."
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ElectricalSolutions.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ElectricalSolutions.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/ElectricalSolutions.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/ElectricalSolutions.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "\r\n\n            mt-10\r\n\n            overflow-hidden\r\n\n            border\r\n\n            border-[#09143a]/10\r\n\n            bg-[#f7f8fb]\r\n\n            md:grid\r\n\n            md:grid-cols-12\r\n\n            lg:mt-12\r\n\n          ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                            className: "\r\n\n              relative\r\n\n              min-h-[320px]\r\n\n              overflow-hidden\r\n\n              md:col-span-6\r\n\n              md:min-h-[560px]\r\n\n              lg:col-span-7\r\n\n            ",
                            initial: {
                                opacity: 0,
                                x: -28
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.7,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1
                                ]
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/solucoes-eletricas.png",
                                    alt: "Profissional realizando serviço elétrico",
                                    fill: true,
                                    sizes: "(max-width: 768px) 100vw, 58vw",
                                    className: "object-cover object-center"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ElectricalSolutions.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "\r\n\n                absolute\r\n\n                inset-0\r\n\n                bg-[linear-gradient(180deg,transparent_60%,rgba(6,27,92,.22))]\r\n\n              "
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ElectricalSolutions.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "\r\n\n                absolute\r\n\n                bottom-0\r\n\n                left-0\r\n\n                h-[4px]\r\n\n                w-20\r\n\n                bg-[#ff7900]\r\n\n              "
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ElectricalSolutions.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/ElectricalSolutions.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                            className: "\r\n\n              bg-[#061b5c]\r\n\n              text-white\r\n\n              md:col-span-6\r\n\n              lg:col-span-5\r\n\n            ",
                            initial: {
                                opacity: 0,
                                x: 28
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.7,
                                delay: 0.08,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1
                                ]
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-6 py-8 sm:px-8 lg:px-10 lg:py-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "\r\n\n                  text-[10px]\r\n\n                  font-bold\r\n\n                  uppercase\r\n\n                  tracking-[0.18em]\r\n\n                  text-[#ff9a3d]\r\n\n                ",
                                            children: "Atendimento elétrico"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ElectricalSolutions.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "\r\n\n                  mt-3\r\n\n                  max-w-sm\r\n\n                  text-[1.75rem]\r\n\n                  font-black\r\n\n                  leading-[1.05]\r\n\n                  tracking-[-0.035em]\r\n\n                  sm:text-[2rem]\r\n\n                ",
                                            children: "Execução técnica para residências e empresas."
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ElectricalSolutions.tsx",
                                            lineNumber: 206,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/ElectricalSolutions.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-white/10",
                                    children: electricalServices.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].article, {
                                            initial: {
                                                opacity: 0,
                                                y: 14
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            viewport: {
                                                once: true,
                                                amount: 0.3
                                            },
                                            transition: {
                                                duration: 0.45,
                                                delay: index * 0.07
                                            },
                                            className: "\r\n\n                    border-b\r\n\n                    border-white/10\r\n\n                    px-6\r\n\n                    py-5\r\n\n                    transition-colors\r\n\n                    hover:bg-white/[0.03]\r\n\n                    sm:px-8\r\n\n                    lg:px-10\r\n\n                    lg:py-6\r\n\n                  ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "\r\n\n                      text-[1.05rem]\r\n\n                      font-extrabold\r\n\n                      tracking-[-0.02em]\r\n\n                      text-white\r\n\n                    ",
                                                    children: service.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ElectricalSolutions.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "\r\n\n                      mt-2\r\n\n                      max-w-md\r\n\n                      text-sm\r\n\n                      leading-6\r\n\n                      text-white/55\r\n\n                    ",
                                                    children: service.text
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ElectricalSolutions.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, service.title, true, {
                                            fileName: "[project]/components/sections/ElectricalSolutions.tsx",
                                            lineNumber: 223,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ElectricalSolutions.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-6 py-7 sm:px-8 lg:px-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$WhatsappLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhatsappLink"], {
                                        source: "electrical_solutions",
                                        message: "Olá! Vim pelo site da Soares Climatização e Soluções Elétricas e gostaria de informações sobre um serviço elétrico.",
                                        className: "\r\n\n                  inline-flex\r\n\n                  min-h-12\r\n\n                  w-full\r\n\n                  items-center\r\n\n                  justify-center\r\n\n                  bg-[#ff7900]\r\n\n                  px-6\r\n\n                  text-sm\r\n\n                  font-bold\r\n\n                  text-white\r\n\n                  transition-all\r\n\n                  duration-200\r\n\n                  hover:-translate-y-0.5\r\n\n                  hover:bg-[#ff8a1c]\r\n\n                  sm:w-auto\r\n\n                ",
                                        children: "Solicitar orçamento elétrico"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/ElectricalSolutions.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ElectricalSolutions.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/ElectricalSolutions.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/ElectricalSolutions.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/ElectricalSolutions.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/ElectricalSolutions.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/Gallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkGallery",
    ()=>WorkGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
const images = [
    {
        src: "/images/trabalho-1.png",
        alt: "Instalação de ar-condicionado"
    },
    {
        src: "/images/trabalho-2.png",
        alt: "Infraestrutura para climatização"
    },
    {
        src: "/images/trabalho-3.png",
        alt: "Manutenção de ar-condicionado"
    },
    {
        src: "/images/trabalho-4.png",
        alt: "Higienização de ar-condicionado"
    }
];
function WorkGallery() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "\r\n\n        overflow-hidden\r\n\n        bg-[#061b5c]\r\n\n      ",
        "aria-label": "Serviços realizados pela Soares",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "\r\n\n          grid\r\n\n          grid-cols-2\r\n\n          lg:grid-cols-4\r\n\n        ",
            children: images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.975
                    },
                    whileInView: {
                        opacity: 1,
                        scale: 1
                    },
                    viewport: {
                        once: true,
                        amount: 0.2
                    },
                    transition: {
                        duration: 0.55,
                        delay: index * 0.08,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1
                        ]
                    },
                    className: "\r\n\n              group\r\n\n              relative\r\n\n              min-h-[240px]\r\n\n              overflow-hidden\r\n\n              sm:min-h-[300px]\r\n\n              lg:min-h-[420px]\r\n\n              xl:min-h-[480px]\r\n\n            ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: image.src,
                            alt: image.alt,
                            fill: true,
                            sizes: "\r\n\n                (max-width: 1024px) 50vw,\r\n\n                25vw\r\n\n              ",
                            className: "\r\n\n                object-cover\r\n\n                transition-transform\r\n\n                duration-700\r\n\n                group-hover:scale-[1.035]\r\n\n              "
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Gallery.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "\r\n\n                absolute\r\n\n                inset-0\r\n\n                bg-[linear-gradient(180deg,transparent_65%,rgba(6,27,92,.25))]\r\n\n              "
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Gallery.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this),
                        index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                            initial: {
                                scaleX: 0
                            },
                            whileInView: {
                                scaleX: 1
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.25
                            },
                            className: "\r\n\n                  absolute\r\n\n                  left-0\r\n\n                  top-0\r\n\n                  h-1\r\n\n                  w-16\r\n\n                  origin-left\r\n\n                  bg-[#ff7900]\r\n\n                "
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Gallery.tsx",
                            lineNumber: 96,
                            columnNumber: 15
                        }, this)
                    ]
                }, image.src, true, {
                    fileName: "[project]/components/sections/Gallery.tsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/sections/Gallery.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/Gallery.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$WhatsappLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/WhatsappLink.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "inicio",
        className: "\n        relative\n        min-h-[720px]\n        overflow-hidden\n        bg-[#061b5c]\n        text-white\n        md:min-h-[740px]\n        lg:min-h-[780px]\n      ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                className: "\n          absolute\n          inset-0\n          md:hidden\n        ",
                initial: {
                    opacity: 0,
                    scale: 1.025
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 1.1,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/hero-banner-mobile.png",
                    alt: "Profissional realizando serviço técnico de climatização",
                    fill: true,
                    priority: true,
                    sizes: "100vw",
                    className: "\n            object-cover\n            object-center\n          "
                }, void 0, false, {
                    fileName: "[project]/components/sections/Hero.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                className: "\n          absolute\n          inset-0\n          hidden\n          md:block\n        ",
                initial: {
                    opacity: 0,
                    scale: 1.025
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 1.1,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/hero-banner.png",
                    alt: "Profissional realizando serviço técnico de climatização",
                    fill: true,
                    priority: true,
                    sizes: "100vw",
                    className: "\n            object-cover\n            object-[64%_center]\n            lg:object-center\n          "
                }, void 0, false, {
                    fileName: "[project]/components/sections/Hero.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "\n          absolute\n          inset-0\n          bg-[linear-gradient(180deg,rgba(5,24,81,.78)_0%,rgba(5,24,81,.72)_24%,rgba(5,24,81,.82)_55%,rgba(5,24,81,.96)_100%)]\n          md:hidden\n        "
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "\n          absolute\n          inset-0\n          hidden\n          md:block\n          md:bg-[linear-gradient(90deg,rgba(5,24,81,.98)_0%,rgba(5,24,81,.95)_28%,rgba(5,24,81,.82)_45%,rgba(5,24,81,.40)_62%,rgba(5,24,81,.08)_100%)]\n        "
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "\n          absolute\n          inset-y-0\n          left-0\n          w-[78%]\n          bg-[linear-gradient(90deg,rgba(5,24,81,.68)_0%,rgba(5,24,81,.35)_62%,transparent_100%)]\n          md:hidden\n        "
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "\n          absolute\n          inset-x-0\n          bottom-0\n          h-48\n          bg-[linear-gradient(180deg,transparent,rgba(5,24,81,.82))]\n          md:h-44\n          md:bg-[linear-gradient(180deg,transparent,rgba(5,24,81,.72))]\n        "
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "\n          shell\n          relative\n          flex\n          min-h-[720px]\n          items-center\n          pt-28\n          md:min-h-[740px]\n          md:pt-20\n          lg:min-h-[780px]\n          lg:pt-16\n        ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "\n            w-full\n            max-w-[640px]\n            -translate-y-1\n            md:-translate-y-6\n            lg:-translate-y-8\n          ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 28
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.75,
                            delay: 0.15,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "\n                mb-4\n                max-w-[320px]\n                text-[10px]\n                font-bold\n                uppercase\n                leading-[1.6]\n                tracking-[0.2em]\n                text-[#ff8a1c]\n                sm:max-w-none\n                sm:text-[11px]\n              ",
                                children: [
                                    "Climatização & soluções elétricas em ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].region
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "\n                max-w-[570px]\n                text-[2.3rem]\n                font-black\n                leading-[1]\n                tracking-[-0.04em]\n                sm:text-[2.8rem]\n                md:text-[3.2rem]\n                lg:text-[3.55rem]\n              ",
                                children: "Conforto, segurança e soluções técnicas para o seu ambiente."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "\n                mt-6\n                max-w-[540px]\n                text-[15px]\n                leading-6\n                text-white/72\n                sm:text-base\n                sm:leading-7\n              ",
                                children: "Serviços de climatização e soluções elétricas para residências e empresas em Bombinhas e região, com atendimento direto e foco em uma execução bem feita."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                className: "\n                mt-8\n                flex\n                flex-col\n                gap-3\n                sm:mt-9\n                sm:flex-row\n                sm:items-center\n                lg:mt-10\n              ",
                                initial: {
                                    opacity: 0,
                                    y: 16
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.38,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1
                                    ]
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$WhatsappLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhatsappLink"], {
                                        source: "hero",
                                        message: "Olá! Encontrei a Soares Climatização e Soluções Elétricas pelo site e gostaria de solicitar um orçamento.",
                                        className: "\n                  inline-flex\n                  min-h-12\n                  w-full\n                  items-center\n                  justify-center\n                  rounded-lg\n                  bg-[#ff7900]\n                  px-7\n                  text-sm\n                  font-bold\n                  text-white\n                  shadow-[0_10px_28px_rgba(255,121,0,.16)]\n                  transition-all\n                  duration-200\n                  hover:-translate-y-0.5\n                  hover:bg-[#ff8a1c]\n                  hover:shadow-[0_10px_30px_rgba(255,121,0,.24)]\n                  sm:w-auto\n                ",
                                        children: "Solicitar orçamento"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#servicos",
                                        className: "\n                  inline-flex\n                  min-h-12\n                  w-full\n                  items-center\n                  justify-center\n                  rounded-lg\n                  border\n                  border-white/20\n                  bg-white/[0.02]\n                  px-6\n                  text-sm\n                  font-semibold\n                  text-white/82\n                  backdrop-blur-[2px]\n                  transition-all\n                  duration-200\n                  hover:border-white/40\n                  hover:bg-white/[0.06]\n                  hover:text-white\n                  sm:w-auto\n                ",
                                        children: "Conhecer soluções"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                className: "\n                mt-6\n                flex\n                flex-col\n                items-start\n                gap-2\n                text-xs\n                font-semibold\n                text-white/48\n                sm:flex-row\n                sm:flex-wrap\n                sm:items-center\n                sm:gap-x-5\n                lg:mt-7\n              ",
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.55
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "WhatsApp ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].whatsappLabel
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 337,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        className: "\n                  hidden\n                  h-1\n                  w-1\n                  rounded-full\n                  bg-[#ff7900]\n                  sm:block\n                "
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Atendimento residencial e empresarial"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 353,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 310,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/Hero.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Hero.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/LeadForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeadForm",
    ()=>LeadForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/analytics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function LeadForm() {
    const [started, setStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    function start() {
        if (!started) {
            setStarted(true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["track"])("form_start", {
                source: "contact_form"
            });
        }
    }
    function submit(e) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = String(data.get("name") || "").trim();
        const service = String(data.get("service") || "").trim();
        const city = String(data.get("city") || "").trim();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["track"])("form_submit", {
            source: "contact_form",
            service
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["track"])("generate_lead", {
            source: "contact_form",
            service
        });
        const text = `Olá! Vim pelo site da Soares Climatização e Soluções Elétricas.

Meu nome é ${name}.

Tenho interesse em: ${service}.

Local do atendimento: ${city}.

Gostaria de solicitar um orçamento.`;
        window.open((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whatsappUrl"])(text), "_blank", "noopener,noreferrer");
    }
    const label = `
    mb-2
    block
    text-[10px]
    font-bold
    uppercase
    tracking-[0.16em]
    text-[#09143a]/52
  `;
    const input = `
    focus-ring
    h-12
    w-full
    border
    border-[#09143a]/14
    bg-[#f7f8fb]
    px-4
    text-sm
    text-[#09143a]
    outline-none
    transition-all
    duration-200
    placeholder:text-[#09143a]/35
    hover:border-[#09143a]/24
    focus:border-[#082f9c]
    focus:bg-white
    focus:ring-2
    focus:ring-[#082f9c]/10
  `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: submit,
        onFocus: start,
        className: "grid gap-5",
        "aria-label": "Solicitar orçamento",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "lead-name",
                        className: label,
                        children: "Nome"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/LeadForm.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "lead-name",
                        className: input,
                        name: "name",
                        type: "text",
                        required: true,
                        autoComplete: "name",
                        placeholder: "Seu nome"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/LeadForm.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/LeadForm.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "lead-service",
                        className: label,
                        children: "Serviço"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/LeadForm.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "lead-service",
                                className: `
              ${input}
              appearance-none
              pr-11
            `,
                                name: "service",
                                required: true,
                                defaultValue: "",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        disabled: true,
                                        children: "Qual serviço você precisa?"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/LeadForm.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                        label: "Climatização",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Instalação de ar-condicionado",
                                                children: "Instalação"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/LeadForm.tsx",
                                                lineNumber: 144,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Infraestrutura para ar-condicionado",
                                                children: "Infraestrutura"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/LeadForm.tsx",
                                                lineNumber: 148,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Manutenção de ar-condicionado",
                                                children: "Manutenção"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/LeadForm.tsx",
                                                lineNumber: 152,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Higienização de ar-condicionado",
                                                children: "Higienização"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/LeadForm.tsx",
                                                lineNumber: 156,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/LeadForm.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                        label: "Soluções elétricas",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Instalação elétrica",
                                                children: "Instalação elétrica"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/LeadForm.tsx",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Manutenção elétrica",
                                                children: "Manutenção elétrica"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/LeadForm.tsx",
                                                lineNumber: 166,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Adequação elétrica",
                                                children: "Adequação elétrica"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/LeadForm.tsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Infraestrutura elétrica",
                                                children: "Infraestrutura elétrica"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/LeadForm.tsx",
                                                lineNumber: 174,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/LeadForm.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Outro atendimento",
                                        children: "Outro atendimento"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/LeadForm.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/LeadForm.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                className: "\n              pointer-events-none\n              absolute\n              right-4\n              top-1/2\n              h-2\n              w-2\n              -translate-y-[65%]\n              rotate-45\n              border-b\n              border-r\n              border-[#082f9c]/55\n            "
                            }, void 0, false, {
                                fileName: "[project]/components/sections/LeadForm.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/LeadForm.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/LeadForm.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "lead-city",
                        className: label,
                        children: "Local do atendimento"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/LeadForm.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "lead-city",
                        className: input,
                        name: "city",
                        type: "text",
                        required: true,
                        autoComplete: "address-level2",
                        placeholder: "Cidade ou bairro"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/LeadForm.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/LeadForm.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "\n          border-l-2\n          border-[#ff7900]\n          pl-4\n        ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "\n            text-xs\n            leading-5\n            text-[#09143a]/52\n          ",
                    children: "Ao continuar, sua mensagem será organizada e aberta diretamente no WhatsApp da Soares."
                }, void 0, false, {
                    fileName: "[project]/components/sections/LeadForm.tsx",
                    lineNumber: 231,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/LeadForm.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "\n          focus-ring\n          mt-1\n          inline-flex\n          min-h-12\n          w-full\n          items-center\n          justify-center\n          bg-[#ff7900]\n          px-6\n          text-sm\n          font-bold\n          text-white\n          transition-all\n          duration-200\n          hover:-translate-y-0.5\n          hover:bg-[#ff8a1c]\n          hover:shadow-[0_10px_28px_rgba(255,121,0,.20)]\n        ",
                children: "Continuar no WhatsApp"
            }, void 0, false, {
                fileName: "[project]/components/sections/LeadForm.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "\n          text-center\n          text-[11px]\n          leading-5\n          text-[#09143a]/40\n        ",
                children: "Nenhum dado é armazenado neste site."
            }, void 0, false, {
                fileName: "[project]/components/sections/LeadForm.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/LeadForm.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/Process.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Process",
    ()=>Process
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$WhatsappLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/WhatsappLink.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Reveal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const steps = [
    {
        label: "Primeiro contato",
        title: "Conte o que precisa",
        text: "Informe se procura instalação, infraestrutura, manutenção ou higienização e onde será realizado o atendimento."
    },
    {
        label: "Análise inicial",
        title: "Envie fotos pelo WhatsApp",
        text: "Quando necessário, fotos do ambiente e do equipamento ajudam a entender melhor o serviço antes da visita."
    },
    {
        label: "Próximo passo",
        title: "Receba a orientação",
        text: "Com essas informações, a Soares orienta o próximo passo e consegue preparar o atendimento ou orçamento."
    }
];
function Process() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "como-funciona",
        className: "\n        scroll-mt-24\n        overflow-hidden\n        bg-[#061b5c]\n        py-16\n        text-white\n        sm:py-20\n        lg:py-24\n      ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shell",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "\n              grid\n              gap-6\n              md:grid-cols-12\n              md:items-end\n              md:gap-8\n            ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "\n                  text-[10px]\n                  font-bold\n                  uppercase\n                  tracking-[0.2em]\n                  text-[#ff8a1c]\n                  sm:text-[11px]\n                ",
                                        children: "Atendimento"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Process.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "\n                  mt-3\n                  max-w-[620px]\n                  text-[2rem]\n                  font-black\n                  leading-[1.02]\n                  tracking-[-0.04em]\n                  text-white\n                  sm:text-[2.35rem]\n                  lg:text-[2.8rem]\n                ",
                                        children: "Seu orçamento começa com uma conversa simples."
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Process.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Process.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-4 md:col-start-9",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "\n                  max-w-md\n                  text-sm\n                  leading-6\n                  text-white/58\n                  sm:text-[15px]\n                ",
                                    children: "Sem formulários longos ou etapas complicadas. Você explica o que precisa e a equipe orienta como seguir."
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Process.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Process.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Process.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/Process.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "\n            relative\n            mt-10\n            border\n            border-white/10\n            bg-[#08266f]\n            sm:mt-12\n            lg:mt-14\n          ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": "true",
                            className: "\n              absolute\n              left-[8%]\n              right-[8%]\n              top-[69px]\n              hidden\n              h-px\n              bg-white/12\n              lg:block\n            "
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Process.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                            "aria-hidden": "true",
                            className: "\n              absolute\n              left-[8%]\n              top-[68px]\n              hidden\n              h-[3px]\n              w-[28%]\n              origin-left\n              bg-[#ff7900]\n              lg:block\n            ",
                            initial: {
                                scaleX: 0
                            },
                            whileInView: {
                                scaleX: 1
                            },
                            viewport: {
                                once: true,
                                amount: 0.5
                            },
                            transition: {
                                duration: 0.9,
                                delay: 0.15,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1
                                ]
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Process.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid lg:grid-cols-3",
                            children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].article, {
                                    initial: {
                                        opacity: 0,
                                        y: 26
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true,
                                        amount: 0.25
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: index * 0.12,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1
                                        ]
                                    },
                                    className: `
                  group
                  relative
                  px-5
                  py-7
                  sm:px-7
                  sm:py-8
                  lg:min-h-[330px]
                  lg:px-8
                  lg:py-10

                  ${index < steps.length - 1 ? `
                        border-b
                        border-white/10
                        lg:border-b-0
                        lg:border-r
                      ` : ""}
                `,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "\n                    relative\n                    z-10\n                    mb-7\n                    flex\n                    items-center\n                    gap-3\n                    lg:mb-12\n                  ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                                                    className: `
                      block
                      h-[10px]
                      w-[10px]
                      rounded-full

                      ${index === 0 ? "bg-[#ff7900] ring-4 ring-[#ff7900]/15" : "bg-white/35"}
                    `,
                                                    whileHover: {
                                                        scale: 1.3
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Process.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "\n                      text-[10px]\n                      font-bold\n                      uppercase\n                      tracking-[0.18em]\n                      text-[#ff9a3d]\n                    ",
                                                    children: step.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Process.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/Process.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "\n                    max-w-[280px]\n                    text-[1.5rem]\n                    font-extrabold\n                    leading-[1.08]\n                    tracking-[-0.03em]\n                    text-white\n                    sm:text-[1.65rem]\n                  ",
                                            children: step.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Process.tsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "\n                    mt-4\n                    max-w-sm\n                    text-sm\n                    leading-6\n                    text-white/58\n                    sm:text-[15px]\n                    sm:leading-7\n                  ",
                                            children: step.text
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Process.tsx",
                                            lineNumber: 254,
                                            columnNumber: 17
                                        }, this),
                                        index < steps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "aria-hidden": "true",
                                            className: "\n                      absolute\n                      bottom-[-1px]\n                      left-5\n                      h-[2px]\n                      w-10\n                      bg-[#ff7900]\n                      sm:left-7\n                      lg:hidden\n                    "
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Process.tsx",
                                            lineNumber: 269,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, step.title, true, {
                                    fileName: "[project]/components/sections/Process.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Process.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "\n                border-t\n                border-white/10\n                bg-[#071f61]\n                px-5\n                py-6\n                sm:px-7\n                lg:flex\n                lg:items-center\n                lg:justify-between\n                lg:gap-8\n                lg:px-8\n              ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "\n                    text-[10px]\n                    font-bold\n                    uppercase\n                    tracking-[0.18em]\n                    text-[#ff8a1c]\n                  ",
                                                children: "Precisa de atendimento?"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Process.tsx",
                                                lineNumber: 304,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "\n                    mt-2\n                    max-w-xl\n                    text-sm\n                    leading-6\n                    text-white/65\n                  ",
                                                children: "Explique o que precisa diretamente pelo WhatsApp e envie fotos do ambiente ou equipamento se tiver."
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Process.tsx",
                                                lineNumber: 316,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Process.tsx",
                                        lineNumber: 303,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$WhatsappLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhatsappLink"], {
                                        source: "process",
                                        message: "Olá! Vim pelo site da Soares Climatização e Soluções Elétricas e gostaria de solicitar um orçamento.",
                                        className: "\n                  mt-5\n                  inline-flex\n                  min-h-12\n                  w-full\n                  items-center\n                  justify-center\n                  bg-[#ff7900]\n                  px-6\n                  text-sm\n                  font-bold\n                  text-white\n                  transition-all\n                  duration-200\n                  hover:-translate-y-0.5\n                  hover:bg-[#ff8a1c]\n                  sm:w-auto\n                  lg:mt-0\n                ",
                                        children: "Falar com a Soares"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Process.tsx",
                                        lineNumber: 330,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Process.tsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Process.tsx",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Process.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Process.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/Process.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/Services.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Services",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Reveal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const services = [
    {
        id: "instalacao",
        title: "Instalação",
        description: "Instalação de ar-condicionado com atenção ao posicionamento, acabamento e funcionamento adequado do equipamento.",
        image: "/images/instalacao.png",
        imageAlt: "Profissional da Soares Climatização realizando instalação de ar-condicionado"
    },
    {
        id: "infraestrutura",
        title: "Infraestrutura",
        description: "Preparação da infraestrutura necessária para receber o equipamento, mantendo a obra organizada e preparada para uma instalação bem executada.",
        image: "/images/infraestrutura.png",
        imageAlt: "Profissional da Soares Climatização preparando infraestrutura para ar-condicionado"
    },
    {
        id: "manutencao",
        title: "Manutenção",
        description: "Manutenção preventiva e corretiva para identificar falhas, preservar o desempenho e contribuir para uma maior vida útil do equipamento.",
        image: "/images/manutencao.png",
        imageAlt: "Profissional da Soares Climatização realizando manutenção em ar-condicionado"
    },
    {
        id: "higienizacao",
        title: "Higienização",
        description: "Limpeza técnica de filtros e componentes para manter o equipamento em boas condições de funcionamento e proporcionar um ambiente mais agradável.",
        image: "/images/higienizacao.png",
        imageAlt: "Profissional da Soares Climatização realizando higienização de ar-condicionado"
    }
];
const AUTOPLAY_DELAY = 5000;
function Services() {
    const [activeService, setActiveService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const active = services[activeService];
    function startAutoplay() {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(()=>{
            setActiveService((current)=>{
                return (current + 1) % services.length;
            });
        }, AUTOPLAY_DELAY);
    }
    function handleServiceChange(index) {
        setActiveService(index);
        startAutoplay();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        startAutoplay();
        return ()=>{
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "servicos",
        className: "\n        scroll-mt-24\n        bg-[#f7f8fb]\n        py-14\n        sm:py-16\n        md:py-20\n        lg:py-24\n      ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shell",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-5 md:grid-cols-12 md:items-end md:gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "\n                  text-[10px]\n                  font-bold\n                  uppercase\n                  tracking-[0.2em]\n                  text-[#ff7900]\n                  sm:text-[11px]\n                ",
                                        children: "Serviços"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Services.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "\n                  mt-3\n                  max-w-xl\n                  text-[2rem]\n                  font-black\n                  leading-[1.02]\n                  tracking-[-0.04em]\n                  text-[#082f9c]\n                  sm:text-[2.25rem]\n                  md:text-[2.4rem]\n                  lg:text-[2.8rem]\n                ",
                                        children: "Cuidado técnico em cada etapa da climatização."
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Services.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Services.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-5 md:col-start-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "\n                  max-w-lg\n                  text-sm\n                  leading-6\n                  text-[#09143a]/65\n                  sm:text-[15px]\n                ",
                                    children: "Da preparação do ambiente à manutenção do equipamento, a Soares oferece soluções para residências e empresas."
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Services.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Services.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Services.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/Services.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                    className: "\n            mt-8\n            overflow-hidden\n            border\n            border-[#09143a]/10\n            bg-white\n            sm:mt-10\n            lg:mt-12\n            lg:grid\n            lg:grid-cols-12\n          ",
                    delay: 0.08,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "\n              border-b\n              border-[#09143a]/10\n              lg:col-span-4\n              lg:border-b-0\n              lg:border-r\n            ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 lg:hidden",
                                    children: services.map((service, index)=>{
                                        const isActive = activeService === index;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>handleServiceChange(index),
                                            "aria-pressed": isActive,
                                            className: `
                      relative
                      min-h-[58px]
                      border-b
                      border-[#09143a]/10
                      px-4
                      py-3
                      text-left
                      transition-colors

                      ${index % 2 === 0 ? "border-r" : ""}

                      ${isActive ? "bg-[#082f9c] text-white" : "bg-white text-[#082f9c]"}
                    `,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "\n                        text-[14px]\n                        font-extrabold\n                        leading-tight\n                        tracking-[-0.02em]\n                        sm:text-[15px]\n                      ",
                                                    children: service.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Services.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 21
                                                }, this),
                                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                                                    layoutId: "service-mobile-indicator",
                                                    className: "\n                          absolute\n                          bottom-0\n                          left-4\n                          h-[3px]\n                          w-8\n                          bg-[#ff7900]\n                        "
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Services.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, service.id, true, {
                                            fileName: "[project]/components/sections/Services.tsx",
                                            lineNumber: 182,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Services.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:block",
                                    children: services.map((service, index)=>{
                                        const isActive = activeService === index;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>handleServiceChange(index),
                                            "aria-pressed": isActive,
                                            className: `
                      group
                      relative
                      block
                      w-full
                      border-b
                      border-[#09143a]/10
                      px-7
                      py-7
                      text-left
                      transition-colors

                      ${isActive ? "bg-[#082f9c] text-white" : "bg-transparent text-[#082f9c] hover:bg-[#f7f8fb]"}
                    `,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "\n                          text-lg\n                          font-extrabold\n                          tracking-[-0.025em]\n                        ",
                                                        children: service.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Services.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": "true",
                                                        className: `
                          h-[2px]
                          transition-all
                          duration-300

                          ${isActive ? "w-10 bg-[#ff7900]" : "w-5 bg-[#082f9c]/20 group-hover:w-8"}
                        `
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Services.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/Services.tsx",
                                                lineNumber: 274,
                                                columnNumber: 21
                                            }, this)
                                        }, service.id, false, {
                                            fileName: "[project]/components/sections/Services.tsx",
                                            lineNumber: 248,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Services.tsx",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Services.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: 18
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        x: -18
                                    },
                                    transition: {
                                        duration: 0.35,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1
                                        ]
                                    },
                                    className: "\n                  bg-white\n                  md:grid\n                  md:grid-cols-2\n                  lg:min-h-[430px]\n                ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "\n                    relative\n                    min-h-[250px]\n                    overflow-hidden\n                    bg-[#dde3ec]\n                    sm:min-h-[300px]\n                    md:order-2\n                    md:min-h-full\n                  ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: active.image,
                                                    alt: active.imageAlt,
                                                    fill: true,
                                                    sizes: "(max-width: 768px) 100vw, 40vw",
                                                    className: "object-cover object-center"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Services.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "\n                      absolute\n                      inset-x-0\n                      bottom-0\n                      h-20\n                      bg-[linear-gradient(180deg,transparent,rgba(6,27,92,.14))]\n                    "
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Services.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "\n                      absolute\n                      bottom-0\n                      left-0\n                      h-[4px]\n                      w-14\n                      bg-[#ff7900]\n                    "
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Services.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/Services.tsx",
                                            lineNumber: 335,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "\n                    flex\n                    flex-col\n                    justify-between\n                    p-5\n                    sm:p-6\n                    md:order-1\n                    md:p-8\n                    lg:p-10\n                  ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "\n                        text-[10px]\n                        font-bold\n                        uppercase\n                        tracking-[0.18em]\n                        text-[#ff7900]\n                      ",
                                                            children: "Soares Climatização"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/Services.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "\n                        mt-3\n                        text-[1.8rem]\n                        font-black\n                        leading-none\n                        tracking-[-0.04em]\n                        text-[#082f9c]\n                        sm:text-[2rem]\n                        lg:text-[2.3rem]\n                      ",
                                                            children: active.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/Services.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "\n                        mt-4\n                        max-w-md\n                        text-sm\n                        leading-6\n                        text-[#09143a]/65\n                        sm:text-[15px]\n                        sm:leading-7\n                      ",
                                                            children: active.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/Services.tsx",
                                                            lineNumber: 417,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/Services.tsx",
                                                    lineNumber: 389,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#contato",
                                                    className: "\n                      mt-6\n                      inline-flex\n                      w-fit\n                      border-b\n                      border-[#ff7900]\n                      pb-1\n                      text-sm\n                      font-bold\n                      text-[#082f9c]\n                      transition-colors\n                      hover:text-[#ff7900]\n                    ",
                                                    children: "Solicitar orçamento"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Services.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/Services.tsx",
                                            lineNumber: 377,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, active.id, true, {
                                    fileName: "[project]/components/sections/Services.tsx",
                                    lineNumber: 309,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Services.tsx",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Services.tsx",
                            lineNumber: 307,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Services.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Services.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/Services.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/Reveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
"use client";
;
;
function Reveal({ children, className = "", delay = 0, y = 24 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        className: className,
        initial: {
            opacity: 0,
            y
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            amount: 0.2
        },
        transition: {
            duration: 0.65,
            delay,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Reveal.tsx",
        lineNumber: 20,
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

//# sourceMappingURL=_1kpulrs._.js.map