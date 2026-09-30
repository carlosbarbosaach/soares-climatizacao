"use client";

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

          ${
            scrolled || !isHome
              ? `
                bg-[#071b58]/95
                shadow-[0_12px_40px_rgba(0,0,0,0.16)]
                backdrop-blur-md
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
              scrolled
                ? "h-[72px] border-transparent"
                : "h-20 border-b border-white/20"
            }
          `}
        >
          {/* MARCA */}
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
              flex-col
              leading-none
            "
          >
            <span
              className="
                text-[1.15rem]
                font-black
                tracking-[-0.045em]
                sm:text-xl
              "
            >
              SOARES
            </span>

            <span
              className="
                mt-1
                text-[8px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#ff8a1c]
                sm:text-[9px]
              "
            >
              Climatização & Soluções Elétricas
            </span>
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
                        : "text-white/65 hover:text-white"
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
                border-white/22
                px-4
                text-[12px]
                font-bold
                text-white
                transition-all
                duration-200
                hover:border-white/45
                hover:bg-white/[0.06]
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
                hover:bg-[#ff8d27]
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
          bg-[#020817]/70
          backdrop-blur-[2px]
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
          bg-[#071b58]
          text-white
          shadow-[-24px_0_60px_rgba(0,0,0,.28)]
          transition-transform
          duration-300
          ease-out
          lg:hidden

          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* TOPO DRAWER */}
        <div
          className="
            flex
            h-20
            items-center
            justify-between
            border-b
            border-white/10
            px-5
          "
        >
          <Link
            href="/#inicio"
            onClick={() =>
              handleNavigate("#inicio")
            }
            className="
              flex
              flex-col
              leading-none
            "
          >
            <span
              className="
                text-lg
                font-black
                tracking-[-0.04em]
              "
            >
              SOARES
            </span>

            <span
              className="
                mt-1
                text-[8px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#ff8a1c]
              "
            >
              Climatização & Soluções Elétricas
            </span>
          </Link>

          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() =>
              setOpen(false)
            }
            className="
              focus-ring
              relative
              h-10
              w-10
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
              border-white/18
              px-5
              text-sm
              font-bold
              text-white
              transition-all
              duration-200
              hover:border-white/35
              hover:bg-white/[0.05]
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
              hover:bg-[#ff8d27]
            "
          >
            Pedir orçamento
          </WhatsappLink>
        </nav>

        {/* BASE */}
        <div
          className="
            border-t
            border-white/10
            px-5
            py-5
          "
        >
          <p
            className="
              max-w-[290px]
              text-xs
              leading-5
              text-white/38
            "
          >
            Climatização, soluções elétricas e equipamentos para residências e
            empresas.
          </p>
        </div>
      </aside>
    </>
  );
}