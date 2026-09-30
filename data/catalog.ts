import type { CatalogItem } from "@/types/catalog";

export const catalogItems: CatalogItem[] = [
  // CLIMATIZAÇÃO
  {
    id: "ar-condicionado-split",
    slug: "ar-condicionado-split",
    name: "Ar-condicionado Split",
    category: "climatizacao",
    description:
      "Equipamentos para climatização residencial e comercial, com diferentes capacidades e aplicações.",
    image: "/images/catalogo/imagem02.png",
    featured: true,
  },

  // INFRAESTRUTURA
  {
    id: "tubulacao-cobre",
    slug: "tubulacao-cobre",
    name: "Tubulação de cobre",
    category: "infraestrutura",
    description:
      "Tubulação utilizada na infraestrutura e instalação de sistemas de climatização.",
    image: "/images/catalogo/imagem01.png",
  },
  {
    id: "isolamento-termico",
    slug: "isolamento-termico",
    name: "Isolamento térmico",
    category: "infraestrutura",
    description:
      "Material utilizado no acabamento e proteção térmica da tubulação de climatização.",
    image: "/images/catalogo/imagem05.png",
  },
  {
    id: "canaleta-acabamento",
    slug: "canaleta-acabamento",
    name: "Canaleta de acabamento",
    category: "infraestrutura",
    description:
      "Canaleta para organização e acabamento de tubulações e instalações aparentes.",
    image: "/images/catalogo/imagem06.png",
  },

  // ELÉTRICA
  {
    id: "cabos-eletricos",
    slug: "cabos-eletricos",
    name: "Cabos elétricos",
    category: "eletrica",
    description:
      "Cabos e condutores para instalações e adequações elétricas.",
    image: "/images/catalogo/imagem03.png",
  },
  {
    id: "dps",
    slug: "dps",
    name: "DPS",
    category: "eletrica",
    description:
      "Dispositivo utilizado na proteção de instalações elétricas contra surtos.",
    image: "/images/catalogo/imagem04.png",
  },

  // ACESSÓRIOS
  {
    id: "fita-pvc",
    slug: "fita-pvc",
    name: "Fita PVC para acabamento",
    category: "acessorios",
    description:
      "Material para proteção e acabamento de tubulações em instalações de climatização.",
    image: "/images/catalogo/imagem07.png",
  },
];