"use client";

import type { CatalogCategory } from "@/types/catalog";

type Props = {
  search: string;
  onSearchChange: (value: string) => void;
  activeCategory: CatalogCategory | "todos";
  onCategoryChange: (
    category: CatalogCategory | "todos"
  ) => void;
  resultCount: number;
};

const categories = [
  ["todos", "Todos"],
  ["climatizacao", "Climatização"],
  ["eletrica", "Elétrica"],
  ["infraestrutura", "Infraestrutura"],
  ["acessorios", "Acessórios"],
] as const;

export function CatalogFilters({
  search,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  resultCount,
}: Props) {
  return (
    <div className="border-b border-[#09143a]/10 bg-white">
      <div className="shell">
        <div
          className="
            grid
            gap-5
            py-6
            lg:grid-cols-[1fr_auto]
            lg:items-end
          "
        >
          {/* CATEGORIA */}
          <div>
            <p
              className="
                mb-3
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#09143a]/42
              "
            >
              Filtrar por categoria
            </p>

            {/* MOBILE - SELECT */}
            <div className="relative md:hidden">
              <select
                value={activeCategory}
                onChange={(e) =>
                  onCategoryChange(
                    e.target.value as CatalogCategory | "todos"
                  )
                }
                className="
                  h-12
                  w-full
                  appearance-none
                  border
                  border-[#09143a]/14
                  bg-[#f7f8fb]
                  px-4
                  pr-11
                  text-sm
                  font-semibold
                  text-[#09143a]
                  outline-none
                  transition-all
                  focus:border-[#082f9c]
                  focus:bg-white
                  focus:ring-2
                  focus:ring-[#082f9c]/10
                "
              >
                {categories.map(([value, label]) => (
                  <option
                    key={value}
                    value={value}
                  >
                    {label}
                  </option>
                ))}
              </select>

              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  right-4
                  top-1/2
                  h-2
                  w-2
                  -translate-y-[65%]
                  rotate-45
                  border-b
                  border-r
                  border-[#082f9c]/55
                "
              />
            </div>

            {/* TABLET / DESKTOP - BOTÕES */}
            <div
              className="
                hidden
                flex-wrap
                gap-2
                md:flex
              "
            >
              {categories.map(([value, label]) => {
                const active = activeCategory === value;

                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() =>
                      onCategoryChange(value)
                    }
                    className={`
                      border
                      px-4
                      py-2.5
                      text-sm
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
                            text-[#09143a]/56
                            hover:border-[#082f9c]/30
                            hover:text-[#082f9c]
                          `
                      }
                    `}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* BUSCA */}
          <div className="w-full lg:w-[320px]">
            <label
              htmlFor="catalog-search"
              className="
                mb-3
                block
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#09143a]/42
              "
            >
              Buscar no catálogo
            </label>

            <div className="relative">
              <input
                id="catalog-search"
                type="search"
                value={search}
                onChange={(e) =>
                  onSearchChange(e.target.value)
                }
                placeholder="Buscar produto ou material"
                className="
                  h-12
                  w-full
                  border
                  border-[#09143a]/14
                  bg-[#f7f8fb]
                  px-4
                  pr-12
                  text-sm
                  text-[#09143a]
                  outline-none
                  transition-all
                  placeholder:text-[#09143a]/35
                  hover:border-[#09143a]/24
                  focus:border-[#082f9c]
                  focus:bg-white
                  focus:ring-2
                  focus:ring-[#082f9c]/10
                "
              />

              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-[10px]
                  font-bold
                  tracking-[0.08em]
                  text-[#082f9c]/45
                "
              >
                BUSCAR
              </span>
            </div>
          </div>
        </div>

        {/* RESULTADOS */}
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-between
            gap-3
            border-t
            border-[#09143a]/8
            py-4
          "
        >
          <p
            className="
              text-xs
              font-semibold
              text-[#09143a]/45
            "
          >
            {resultCount === 1
              ? "1 item encontrado"
              : `${resultCount} itens encontrados`}
          </p>

          {(search || activeCategory !== "todos") && (
            <button
              type="button"
              onClick={() => {
                onSearchChange("");
                onCategoryChange("todos");
              }}
              className="
                text-xs
                font-bold
                text-[#082f9c]
                transition-colors
                hover:text-[#ff7900]
              "
            >
              Limpar filtros
            </button>
          )}
        </div>
      </div>
    </div>
  );
}