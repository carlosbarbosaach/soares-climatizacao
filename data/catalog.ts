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
    image: "/images/catalogo/ar-condicionado-split.png",
    featured: true,
  },
  {
    id: "ar-condicionado-inverter",
    slug: "ar-condicionado-inverter",
    name: "Ar-condicionado Inverter",
    category: "climatizacao",
    description:
      "Equipamentos com tecnologia inverter para climatização de ambientes residenciais e comerciais.",
    image: "/images/catalogo/ar-condicionado-inverter.png",
    featured: true,
  },
  {
    id: "evaporadora-split",
    slug: "evaporadora-split",
    name: "Evaporadora Split",
    category: "climatizacao",
    description:
      "Unidade interna utilizada em sistemas de ar-condicionado split.",
    image: "/images/catalogo/evaporadora-split.png",
  },
  {
    id: "condensadora-split",
    slug: "condensadora-split",
    name: "Condensadora Split",
    category: "climatizacao",
    description:
      "Unidade externa para sistemas de climatização split residencial e comercial.",
    image: "/images/catalogo/condensadora-split.png",
  },

  // INFRAESTRUTURA
  {
    id: "tubulacao-cobre",
    slug: "tubulacao-cobre",
    name: "Tubulação de cobre",
    category: "infraestrutura",
    description:
      "Tubulação utilizada na infraestrutura e instalação de sistemas de climatização.",
    image: "/images/catalogo/tubulacao-cobre.png",
  },
  {
    id: "isolamento-termico",
    slug: "isolamento-termico",
    name: "Isolamento térmico",
    category: "infraestrutura",
    description:
      "Material utilizado no acabamento e proteção térmica da tubulação de climatização.",
    image: "/images/catalogo/isolamento-termico.png",
  },
  {
    id: "suporte-condensadora",
    slug: "suporte-condensadora",
    name: "Suporte para condensadora",
    category: "infraestrutura",
    description:
      "Suporte para fixação de unidades externas de sistemas de ar-condicionado.",
    image: "/images/catalogo/suporte-condensadora.png",
  },
  {
    id: "canaleta-acabamento",
    slug: "canaleta-acabamento",
    name: "Canaleta de acabamento",
    category: "infraestrutura",
    description:
      "Canaleta para organização e acabamento de tubulações e instalações aparentes.",
    image: "/images/catalogo/canaleta-acabamento.png",
  },

  // ELÉTRICA
  {
    id: "disjuntores",
    slug: "disjuntores",
    name: "Disjuntores",
    category: "eletrica",
    description:
      "Componentes para proteção e organização de circuitos elétricos.",
    image: "/images/catalogo/disjuntores.png",
  },
  {
    id: "cabos-eletricos",
    slug: "cabos-eletricos",
    name: "Cabos elétricos",
    category: "eletrica",
    description:
      "Cabos e condutores para instalações e adequações elétricas.",
    image: "/images/catalogo/cabos-eletricos.png",
  },
  {
    id: "quadro-distribuicao",
    slug: "quadro-distribuicao",
    name: "Quadro de distribuição",
    category: "eletrica",
    description:
      "Quadros para organização e distribuição de circuitos elétricos.",
    image: "/images/catalogo/quadro-distribuicao.png",
  },
  {
    id: "dps",
    slug: "dps",
    name: "DPS",
    category: "eletrica",
    description:
      "Dispositivo utilizado na proteção de instalações elétricas contra surtos.",
    image: "/images/catalogo/dps.png",
  },
  {
    id: "tomada-20a",
    slug: "tomada-20a",
    name: "Tomada 20A",
    category: "eletrica",
    description:
      "Tomada para aplicações elétricas compatíveis com equipamentos de maior corrente.",
    image: "/images/catalogo/tomada-20a.png",
  },

  // ACESSÓRIOS
  {
    id: "mangueira-dreno",
    slug: "mangueira-dreno",
    name: "Mangueira para dreno",
    category: "acessorios",
    description:
      "Mangueira utilizada no escoamento da água gerada pelo sistema de climatização.",
    image: "/images/catalogo/mangueira-dreno.png",
  },
  {
    id: "bomba-dreno",
    slug: "bomba-dreno",
    name: "Bomba de dreno",
    category: "acessorios",
    description:
      "Solução auxiliar para drenagem em instalações de ar-condicionado.",
    image: "/images/catalogo/bomba-dreno.png",
  },
  {
    id: "fita-pvc",
    slug: "fita-pvc",
    name: "Fita PVC para acabamento",
    category: "acessorios",
    description:
      "Material para proteção e acabamento de tubulações em instalações de climatização.",
    image: "/images/catalogo/fita-pvc.png",
  },
];