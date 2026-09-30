import Image from "next/image";

import { WhatsappLink } from "@/components/ui/WhatsappLink";
import type { CatalogItem } from "@/types/catalog";

type Props = {
  item: CatalogItem;
};

const categoryLabels = {
  climatizacao: "Climatização",
  eletrica: "Elétrica",
  infraestrutura: "Infraestrutura",
  acessorios: "Acessórios",
} as const;

export function CatalogCard({ item }: Props) {
  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        border
        border-[#09143a]/10
        bg-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#082f9c]/20
        hover:shadow-[0_16px_40px_rgba(9,20,58,.08)]
      "
    >
      {/* IMAGEM */}
      <div
        className="
          relative
          aspect-[4/3]
          w-full
          shrink-0
          overflow-hidden
          bg-[#eef1f6]
        "
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 768px) 50vw,
            (max-width: 1280px) 33vw,
            (max-width: 1536px) 25vw,
            20vw
          "
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.025]
          "
        />

        {item.featured && (
          <span
            className="
              absolute
              left-4
              top-4
              bg-[#061b5c]
              px-3
              py-1.5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-white
            "
          >
            Destaque
          </span>
        )}
      </div>

      {/* CONTEÚDO */}
      <div
        className="
          flex
          flex-1
          flex-col
          p-5
        "
      >
        {/* CATEGORIA */}
        <p
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-[#ff7900]
          "
        >
          {categoryLabels[item.category]}
        </p>

        {/* TÍTULO */}
        <h2
          className="
            mt-3
            line-clamp-2
            min-h-[3.5rem]
            text-[1.25rem]
            font-black
            leading-[1.25]
            tracking-[-0.03em]
            text-[#082f9c]
          "
        >
          {item.name}
        </h2>

        {/* DESCRIÇÃO */}
        <p
          className="
            mt-3
            line-clamp-3
            min-h-[4.5rem]
            text-sm
            leading-6
            text-[#09143a]/58
          "
        >
          {item.description}
        </p>

        {/* MARCA */}
        {item.brand && (
          <div
            className="
              mt-4
              border-t
              border-[#09143a]/8
              pt-3
            "
          >
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#09143a]/36
              "
            >
              {item.brand}
            </p>
          </div>
        )}

        {/* CTA */}
        <div
          className="
            mt-auto
            pt-5
          "
        >
          <WhatsappLink
            source={`catalog_${item.slug}`}
            message={`Olá! Vim pelo catálogo da Soares Climatização e Soluções Elétricas e gostaria de informações sobre ${item.name}.`}
            className="
              inline-flex
              min-h-11
              w-full
              items-center
              justify-center
              border
              border-[#082f9c]/14
              bg-white
              px-4
              text-center
              text-xs
              font-bold
              text-[#082f9c]
              transition-all
              duration-200
              hover:border-[#ff7900]
              hover:bg-[#ff7900]
              hover:text-white
            "
          >
            Consultar disponibilidade
          </WhatsappLink>
        </div>
      </div>
    </article>
  );
}