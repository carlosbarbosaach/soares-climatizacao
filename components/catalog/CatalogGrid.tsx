import type { CatalogItem } from "@/types/catalog";

import { CatalogCard } from "./CatalogCard";

type Props = {
  items: CatalogItem[];
};

export function CatalogGrid({ items }: Props) {
  return (
    <div
      className="
        grid
        auto-rows-fr
        gap-4
        sm:grid-cols-2
        md:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-5
      "
    >
      {items.map((item) => (
        <CatalogCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}