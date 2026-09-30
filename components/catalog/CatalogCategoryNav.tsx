"use client";

import type { CatalogCategory } from "@/types/catalog";

type Props = {
  activeCategory: CatalogCategory | "todos";
  onChange: (category: CatalogCategory | "todos") => void;
};

const categories = [
  ["todos", "Todos"],
  ["climatizacao", "Climatização"],
  ["eletrica", "Elétrica"],
  ["infraestrutura", "Infraestrutura"],
  ["acessorios", "Acessórios"],
] as const;

export function CatalogCategoryNav({
  activeCategory,
  onChange,
}: Props) {
  return (
    <div className="border-b border-[#09143a]/10 bg-white">
      <div className="shell">
        <div className="flex overflow-x-auto">
          {categories.map(([value, label]) => {
            const active = activeCategory === value;

            return (
              <button
                key={value}
                type="button"
                onClick={() => onChange(value)}
                className={`
                  relative
                  min-w-max
                  px-5
                  py-5
                  text-sm
                  font-bold
                  transition-colors

                  ${
                    active
                      ? "text-[#082f9c]"
                      : "text-[#09143a]/50 hover:text-[#082f9c]"
                  }
                `}
              >
                {label}

                {active && (
                  <span className="absolute inset-x-5 bottom-0 h-[2px] bg-[#ff7900]" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}