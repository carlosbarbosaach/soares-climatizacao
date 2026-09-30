"use client";

import { useEffect, useMemo, useState } from "react";

import { catalogItems } from "@/data/catalog";
import type { CatalogCategory } from "@/types/catalog";

import { CatalogFilters } from "./CatalogFilters";
import { CatalogGrid } from "./CatalogGrid";

const ITEMS_PER_PAGE = 10;

export function CatalogContent() {
  const [category, setCategory] =
    useState<CatalogCategory | "todos">("todos");

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = useMemo(() => {
    const normalizedSearch = search
      .trim()
      .toLowerCase();

    return catalogItems.filter((item) => {
      const matchesCategory =
        category === "todos" ||
        item.category === category;

      const matchesSearch =
        !normalizedSearch ||
        item.name
          .toLowerCase()
          .includes(normalizedSearch) ||
        item.description
          .toLowerCase()
          .includes(normalizedSearch) ||
        item.brand
          ?.toLowerCase()
          .includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredItems.length / ITEMS_PER_PAGE
    )
  );

  const paginatedItems = useMemo(() => {
    const start =
      (currentPage - 1) * ITEMS_PER_PAGE;

    const end =
      start + ITEMS_PER_PAGE;

    return filteredItems.slice(
      start,
      end
    );
  }, [filteredItems, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [category, search]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  function goToPage(page: number) {
    if (
      page < 1 ||
      page > totalPages ||
      page === currentPage
    ) {
      return;
    }

    setCurrentPage(page);

    requestAnimationFrame(() => {
      const catalogSection =
        document.getElementById(
          "catalog-products"
        );

      if (!catalogSection) return;

      const headerOffset = 100;

      const top =
        catalogSection.getBoundingClientRect()
          .top +
        window.scrollY -
        headerOffset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    });
  }

  return (
    <section
      id="catalog-products"
      className="
        bg-[#f7f8fb]
        pb-20
        lg:pb-24
      "
    >
      <CatalogFilters
        search={search}
        onSearchChange={setSearch}
        activeCategory={category}
        onCategoryChange={setCategory}
        resultCount={
          filteredItems.length
        }
      />

      <div className="shell pt-10 lg:pt-12">
        {/* CABEÇALHO */}
        <div
          className="
            mb-8
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div>
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#ff7900]
              "
            >
              Produtos e materiais
            </p>

            <h2
              className="
                mt-2
                text-[1.8rem]
                font-black
                tracking-[-0.035em]
                text-[#082f9c]
              "
            >
              Explore o catálogo
            </h2>
          </div>

          {filteredItems.length > 0 && (
            <p
              className="
                text-xs
                font-semibold
                text-[#09143a]/42
              "
            >
              Exibindo{" "}
              {(currentPage - 1) *
                ITEMS_PER_PAGE +
                1}
              {" – "}
              {Math.min(
                currentPage *
                  ITEMS_PER_PAGE,
                filteredItems.length
              )}
              {" de "}
              {filteredItems.length}
              {" itens"}
            </p>
          )}
        </div>

        {/* PRODUTOS */}
        {filteredItems.length > 0 ? (
          <>
            <CatalogGrid
              items={paginatedItems}
            />

            {/* PAGINAÇÃO */}
            {totalPages > 1 && (
              <nav
                aria-label="Paginação do catálogo"
                className="
                  mt-12
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-2
                "
              >
                {/* ANTERIOR */}
                <button
                  type="button"
                  disabled={
                    currentPage === 1
                  }
                  onClick={() =>
                    goToPage(
                      currentPage - 1
                    )
                  }
                  className="
                    inline-flex
                    min-h-10
                    items-center
                    justify-center
                    border
                    border-[#09143a]/12
                    bg-white
                    px-4
                    text-xs
                    font-bold
                    text-[#082f9c]
                    transition-all
                    duration-200
                    hover:border-[#082f9c]/30
                    hover:bg-[#082f9c]/[0.03]
                    disabled:cursor-not-allowed
                    disabled:opacity-35
                  "
                >
                  Anterior
                </button>

                {/* NÚMEROS */}
                {Array.from(
                  {
                    length: totalPages,
                  },
                  (_, index) =>
                    index + 1
                ).map((page) => {
                  const active =
                    currentPage === page;

                  return (
                    <button
                      key={page}
                      type="button"
                      aria-label={`Ir para página ${page}`}
                      aria-current={
                        active
                          ? "page"
                          : undefined
                      }
                      onClick={() =>
                        goToPage(page)
                      }
                      className={`
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

                        ${
                          active
                            ? `
                              border-[#082f9c]
                              bg-[#082f9c]
                              text-white
                            `
                            : `
                              border-[#09143a]/12
                              bg-white
                              text-[#09143a]/55
                              hover:border-[#082f9c]/30
                              hover:text-[#082f9c]
                            `
                        }
                      `}
                    >
                      {page}
                    </button>
                  );
                })}

                {/* PRÓXIMA */}
                <button
                  type="button"
                  disabled={
                    currentPage ===
                    totalPages
                  }
                  onClick={() =>
                    goToPage(
                      currentPage + 1
                    )
                  }
                  className="
                    inline-flex
                    min-h-10
                    items-center
                    justify-center
                    border
                    border-[#09143a]/12
                    bg-white
                    px-4
                    text-xs
                    font-bold
                    text-[#082f9c]
                    transition-all
                    duration-200
                    hover:border-[#082f9c]/30
                    hover:bg-[#082f9c]/[0.03]
                    disabled:cursor-not-allowed
                    disabled:opacity-35
                  "
                >
                  Próxima
                </button>
              </nav>
            )}
          </>
        ) : (
          /* SEM RESULTADOS */
          <div
            className="
              border
              border-[#09143a]/10
              bg-white
              px-6
              py-12
              text-center
              sm:py-16
            "
          >
            <h3
              className="
                text-lg
                font-extrabold
                tracking-[-0.02em]
                text-[#082f9c]
              "
            >
              Nenhum item encontrado.
            </h3>

            <p
              className="
                mx-auto
                mt-2
                max-w-md
                text-sm
                leading-6
                text-[#09143a]/55
              "
            >
              Tente buscar por outro nome
              ou selecione uma categoria
              diferente.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}