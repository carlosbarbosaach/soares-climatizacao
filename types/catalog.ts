export type CatalogCategory =
  | "climatizacao"
  | "eletrica"
  | "infraestrutura"
  | "acessorios";

export type CatalogItem = {
  id: string;
  slug: string;
  name: string;
  category: CatalogCategory;
  description: string;
  image: string;
  featured?: boolean;
  brand?: string;
};