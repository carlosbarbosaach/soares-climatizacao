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

const coverImages = ["tubulacao-cobre", "dps"];

function imageStyle(item: CatalogItem) {
  if (coverImages.includes(item.id)) {
    return "object-cover";
  }

  return "object-contain p-5";
}

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

        shadow-[0_2px_6px_rgba(9,20,58,0.04),0_10px_28px_rgba(9,20,58,0.07)]

        transition-all
        duration-300

        hover:-translate-y-1.5
        hover:border-[#082f9c]/20
        hover:shadow-[0_6px_14px_rgba(9,20,58,0.08),0_22px_50px_rgba(9,20,58,0.14)]
      "
    >
      {/* IMAGEM */}
      <div
        className="
          relative
          aspect-[4/3]
          overflow-hidden
          border-b
          border-[#09143a]/6
          bg-[#f7f8fa]
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
          className={`
            ${imageStyle(item)}
            transition-transform
            duration-500
            group-hover:scale-[1.035]
          `}
        />

        {/* DESTAQUE */}
        {item.featured && (
          <span
            className="
              absolute
              left-3
              top-3
              bg-[#061b5c]
              px-3
              py-1.5
              text-[8px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-white
              shadow-[0_8px_18px_rgba(6,27,92,0.16)]
            "
          >
            Destaque
          </span>
        )}

        {/* STATUS */}
        <span
          className="
            absolute
            bottom-3
            right-3
            bg-white/95
            px-2.5
            py-1.5
            text-[9px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-[#082f9c]
            shadow-[0_6px_16px_rgba(9,20,58,0.08)]
            backdrop-blur-sm
          "
        >
          Sob consulta
        </span>
      </div>

      {/* CONTEÚDO */}
      <div
        className="
          flex
          flex-1
          flex-col
          p-4
          sm:p-5
        "
      >
        {/* CATEGORIA */}
        <p
          className="
            text-[8px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-[#ff7900]
          "
        >
          {categoryLabels[item.category]}
        </p>

        {/* TÍTULO */}
        <h2
          className="
            mt-2
            line-clamp-2
            min-h-[3.1rem]
            text-[1.15rem]
            font-black
            leading-[1.2]
            tracking-[-0.03em]
            text-[#082f9c]
          "
        >
          {item.name}
        </h2>

        {/* DESCRIÇÃO */}
        <p
          className="
            mt-2
            line-clamp-2
            min-h-[2.8rem]
            text-[12.5px]
            leading-[1.6]
            text-[#09143a]/56
          "
        >
          {item.description}
        </p>

        {/* MARCA */}
        {item.brand && (
          <p
            className="
              mt-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-[#09143a]/36
            "
          >
            {item.brand}
          </p>
        )}

        {/* PREÇO / CONSULTA */}
        <div
          className="
            mt-4
            border-t
            border-[#09143a]/8
            pt-4
          "
        >
          <p
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#09143a]/35
            "
          >
            Disponibilidade e valor
          </p>

          <p
            className="
              mt-1
              text-sm
              font-black
              text-[#061b5c]
            "
          >
            Consulte nossa equipe
          </p>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-4">
          <WhatsappLink
            source={`catalog_${item.slug}`}
            message={`Olá! Vim pelo catálogo da Soares Climatização e Soluções Elétricas e gostaria de consultar disponibilidade e valor do produto ${item.name}.`}
            className="
              inline-flex
              min-h-11
              w-full
              items-center
              justify-center
              bg-[#082f9c]
              px-4
              text-center
              text-[11px]
              font-bold
              uppercase
              tracking-[0.08em]
              text-white

              shadow-[0_8px_18px_rgba(8,47,156,0.14)]

              transition-all
              duration-200

              hover:-translate-y-px
              hover:bg-[#061b5c]
              hover:shadow-[0_12px_24px_rgba(8,47,156,0.20)]
            "
          >
            Consultar produto
          </WhatsappLink>
        </div>
      </div>
    </article>
  );
}