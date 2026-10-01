"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { WhatsappLink } from "@/components/ui/WhatsappLink";

const nav = [
  ["Climatização", "/#servicos"],
  ["Soluções Elétricas", "/#solucoes-eletricas"],
  ["Atendimento", "/#como-funciona"],
  ["Dúvidas", "/#duvidas"],
  ["Contato", "/#contato"],
] as const;

export function Header() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const sectionIds = [
      "inicio",
      "servicos",
      "solucoes-eletricas",
      "como-funciona",
      "duvidas",
      "contato",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (!visibleEntries.length) return;

        const currentSection =
          visibleEntries[0].target.id;

        setActiveSection(`#${currentSection}`);
      },
      {
        root: null,
        rootMargin: "-88px 0px -58% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [isHome]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function handleNavigate(section?: string) {
    if (section) {
      setActiveSection(section);
    }

    setOpen(false);
  }

  return (
    <>
      <header
        className={`
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

          ${
            scrolled || !isHome
              ? `
                  bg-[linear-gradient(110deg,rgba(5,20,59,.97)_0%,rgba(7,31,98,.96)_42%,rgba(10,52,145,.95)_72%,rgba(13,76,184,.94)_100%)]
                  shadow-[0_14px_45px_rgba(0,0,0,0.18)]
                  backdrop-blur-xl
                `
              : "bg-transparent"
          }
        `}
      >
        <div
          className={`
            shell
            flex
            items-center
            justify-between
            transition-all
            duration-300

            ${
              scrolled || !isHome
                ? "h-[76px] border-transparent"
                : "h-[84px] border-b border-white/20"
            }
          `}
        >
          {/* LOGO */}
          <Link
            href="/#inicio"
            onClick={() =>
              handleNavigate("#inicio")
            }
            aria-label="Soares Climatização e Soluções Elétricas - início"
            className="
              focus-ring
              flex
              shrink-0
              items-center
            "
          >
            <Image
              src="/images/logo/soares-logo.png"
              alt="Soares Climatização e Soluções Elétricas"
              width={1432}
              height={477}
              priority
              className="
                h-[44px]
                w-auto
                object-contain
                sm:h-[48px]
                lg:h-[50px]
                xl:h-[54px]
              "
            />
          </Link>

          {/* NAV DESKTOP */}
          <nav
            className="
              hidden
              items-center
              gap-4
              lg:flex
              xl:gap-6
            "
            aria-label="Navegação principal"
          >
            {nav.map(([label, href]) => {
              const section =
                href.split("#")[1];

              const active =
                isHome &&
                activeSection === `#${section}`;

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() =>
                    handleNavigate(`#${section}`)
                  }
                  className={`
                    group
                    relative
                    whitespace-nowrap
                    py-3
                    text-[12px]
                    font-semibold
                    transition-colors
                    duration-200
                    xl:text-[13px]

                    ${
                      active
                        ? "text-white"
                        : "text-white/68 hover:text-white"
                    }
                  `}
                >
                  {label}

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      bg-[#ff7900]
                      transition-all
                      duration-300

                      ${
                        active
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTAS DESKTOP */}
          <div
            className="
              hidden
              items-center
              gap-2
              lg:flex
            "
          >
            <Link
              href="/catalogo"
              className="
                focus-ring
                inline-flex
                min-h-11
                items-center
                justify-center
                border
                border-white/24
                bg-white/[0.03]
                px-4
                text-[12px]
                font-bold
                text-white
                transition-all
                duration-200
                hover:border-white/45
                hover:bg-white/[0.08]
                xl:px-5
                xl:text-[13px]
              "
            >
              Ver catálogo
            </Link>

            <WhatsappLink
              source="header"
              message="Olá! Vim pelo site da Soares Climatização e Soluções Elétricas e gostaria de solicitar um orçamento."
              className="
                min-h-11
                bg-[#ff7900]
                px-4
                text-[12px]
                font-bold
                text-white
                shadow-[0_10px_28px_rgba(255,121,0,.20)]
                transition-all
                duration-200
                hover:-translate-y-px
                hover:bg-[#ff8d27]
                hover:shadow-[0_14px_34px_rgba(255,121,0,.26)]
                xl:px-5
                xl:text-[13px]
              "
            >
              Pedir orçamento
            </WhatsappLink>
          </div>

          {/* HAMBURGER MOBILE */}
          <button
            type="button"
            aria-label={
              open
                ? "Fechar menu"
                : "Abrir menu"
            }
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() =>
              setOpen((value) => !value)
            }
            className="
              focus-ring
              relative
              flex
              h-11
              w-11
              items-center
              justify-center
              lg:hidden
            "
          >
            <span className="sr-only">
              {open
                ? "Fechar menu"
                : "Abrir menu"}
            </span>

            <span
              className="
                relative
                block
                h-[18px]
                w-6
              "
            >
              <span
                className={`
                  absolute
                  left-0
                  top-0
                  h-[2px]
                  w-6
                  bg-white
                  transition-all
                  duration-300

                  ${
                    open
                      ? "translate-y-[8px] rotate-45"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  absolute
                  left-0
                  top-[8px]
                  h-[2px]
                  bg-white
                  transition-all
                  duration-300

                  ${
                    open
                      ? "w-0 opacity-0"
                      : "w-6 opacity-100"
                  }
                `}
              />

              <span
                className={`
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-6
                  bg-white
                  transition-all
                  duration-300

                  ${
                    open
                      ? "-translate-y-[8px] -rotate-45"
                      : ""
                  }
                `}
              />
            </span>
          </button>
        </div>
      </header>

      {/* OVERLAY MOBILE */}
      <button
        type="button"
        aria-label="Fechar menu"
        onClick={() => setOpen(false)}
        className={`
          fixed
          inset-0
          z-[60]
          bg-[#020817]/72
          backdrop-blur-[3px]
          transition-all
          duration-300
          lg:hidden

          ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* DRAWER MOBILE */}
      <aside
        id="mobile-navigation"
        aria-hidden={!open}
        className={`
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

          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* LUZ DISCRETA */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-44
            bg-[radial-gradient(circle_at_75%_0%,rgba(255,255,255,.10),transparent_52%)]
          "
        />

        {/* TOPO DRAWER */}
        <div
          className="
            relative
            z-10
            flex
            h-[86px]
            items-center
            justify-between
            border-b
            border-white/10
            px-5
          "
        >
          {/* LOGO MOBILE */}
          <Link
            href="/#inicio"
            onClick={() =>
              handleNavigate("#inicio")
            }
            aria-label="Soares Climatização e Soluções Elétricas - início"
            className="
              flex
              min-w-0
              items-center
            "
          >
            <Image
              src="/images/logo/soares-logo.png"
              alt="Soares Climatização e Soluções Elétricas"
              width={1432}
              height={477}
              className="
                h-[47px]
                w-auto
                max-w-[245px]
                object-contain
              "
            />
          </Link>

          {/* FECHAR */}
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() =>
              setOpen(false)
            }
            className="
              focus-ring
              relative
              ml-3
              h-10
              w-10
              shrink-0
            "
          >
            <span
              className="
                absolute
                left-1/2
                top-1/2
                h-[2px]
                w-5
                -translate-x-1/2
                -translate-y-1/2
                rotate-45
                bg-white
              "
            />

            <span
              className="
                absolute
                left-1/2
                top-1/2
                h-[2px]
                w-5
                -translate-x-1/2
                -translate-y-1/2
                -rotate-45
                bg-white
              "
            />
          </button>
        </div>

        {/* LINKS */}
        <nav
          className="
            relative
            z-10
            flex-1
            overflow-y-auto
            px-5
            py-5
          "
          aria-label="Menu mobile"
        >
          <div className="grid">
            {nav.map(([label, href]) => {
              const section =
                href.split("#")[1];

              const active =
                isHome &&
                activeSection === `#${section}`;

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() =>
                    handleNavigate(`#${section}`)
                  }
                  className={`
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

                    ${
                      active
                        ? "text-white"
                        : "text-white/62 hover:text-white"
                    }
                  `}
                >
                  {label}

                  {active && (
                    <span
                      className="
                        absolute
                        bottom-[-1px]
                        left-0
                        h-[2px]
                        w-12
                        bg-[#ff7900]
                      "
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CATÁLOGO */}
          <Link
            href="/catalogo"
            onClick={() =>
              setOpen(false)
            }
            className="
              mt-7
              flex
              min-h-12
              w-full
              items-center
              justify-center
              border
              border-white/20
              bg-white/[0.04]
              px-5
              text-sm
              font-bold
              text-white
              transition-all
              duration-200
              hover:border-white/35
              hover:bg-white/[0.08]
            "
          >
            Ver catálogo
          </Link>

          {/* WHATSAPP */}
          <WhatsappLink
            source="mobile_menu"
            message="Olá! Vim pelo site da Soares Climatização e Soluções Elétricas e gostaria de solicitar um orçamento."
            className="
              mt-3
              w-full
              bg-[#ff7900]
              text-white
              shadow-[0_12px_28px_rgba(255,121,0,.20)]
              hover:bg-[#ff8d27]
            "
          >
            Pedir orçamento
          </WhatsappLink>
        </nav>

        {/* BASE */}
        <div
          className="
            relative
            z-10
            border-t
            border-white/10
            bg-black/[0.04]
            px-5
            py-5
          "
        >
          <p
            className="
              max-w-[290px]
              text-xs
              leading-5
              text-white/40
            "
          >
            Climatização, soluções elétricas e equipamentos
            para residências e empresas.
          </p>
        </div>
      </aside>
    </>
  );
}