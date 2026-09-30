import Image from "next/image";

import { WhatsappLink } from "@/components/ui/WhatsappLink";

export function EditorialBreak() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="shell">
        <div
          className="
            grid
            overflow-hidden
            border
            border-[#09143a]/10
            bg-[#f7f8fb]
            md:grid-cols-12
          "
        >
          {/* IMAGEM */}
          <div
            className="
              relative
              min-h-[340px]
              overflow-hidden
              md:col-span-7
              md:min-h-[520px]
              lg:min-h-[560px]
            "
          >
            <Image
              src="/images/manutencao-preventiva.png"
              fill
              alt="Manutenção e higienização de ar-condicionado"
              sizes="(max-width: 768px) 100vw, 58vw"
              className="
                object-cover
                transition-transform
                duration-700
                hover:scale-[1.02]
              "
            />

            {/* PROFUNDIDADE */}
            <div
              className="
                absolute
                inset-0
                bg-[linear-gradient(180deg,transparent_60%,rgba(6,27,92,.18))]
              "
            />

            {/* DETALHE DE MARCA */}
            <div
              className="
                absolute
                bottom-0
                left-0
                h-[4px]
                w-20
                bg-[#ff7900]
              "
            />
          </div>

          {/* CONTEÚDO */}
          <div
            className="
              flex
              flex-col
              justify-between
              bg-[#082f9c]
              px-6
              py-8
              text-white
              sm:px-8
              sm:py-10
              md:col-span-5
              lg:px-10
              lg:py-12
            "
          >
            {/* TOPO */}
            <div>
              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#ff9a3d]
                "
              >
                Manutenção preventiva
              </p>
            </div>

            {/* CONTEÚDO PRINCIPAL */}
            <div className="mt-12 md:mt-16">
              <h2
                className="
                  max-w-md
                  text-[2rem]
                  font-black
                  leading-[1.02]
                  tracking-[-0.04em]
                  sm:text-[2.4rem]
                  lg:text-[2.8rem]
                "
              >
                Mais eficiência, mais cuidado e menos imprevistos.
              </h2>

              <p
                className="
                  mt-5
                  max-w-md
                  text-[15px]
                  leading-7
                  text-white/70
                "
              >
                A manutenção preventiva ajuda a preservar o desempenho do
                equipamento, manter o funcionamento adequado e identificar
                possíveis problemas antes que se tornem maiores.
              </p>

              <WhatsappLink
                source="maintenance_section"
                message="Olá! Gostaria de informações sobre manutenção ou higienização do meu ar-condicionado."
                className="
                  mt-7
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  bg-[#ff7900]
                  px-6
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#ff8a1c]
                  hover:shadow-[0_10px_28px_rgba(255,121,0,.22)]
                "
              >
                Agendar uma avaliação
              </WhatsappLink>
            </div>

            {/* APOIO */}
            <div
              className="
                mt-10
                border-t
                border-white/12
                pt-5
              "
            >
              <p
                className="
                  max-w-sm
                  text-xs
                  leading-5
                  text-white/45
                "
              >
                Atendimento para residências e empresas em Bombinhas e região.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}