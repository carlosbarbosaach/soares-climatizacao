import { WhatsappLink } from "@/components/ui/WhatsappLink";

export function CatalogCTA() {
  return (
    <section
      className="
        bg-[#f7f8fb]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      <div className="shell">
        <div
          className="
            relative
            overflow-hidden
            border
            border-[#09143a]/10
            bg-white
            px-6
            py-8
            sm:px-8
            sm:py-10
            lg:px-10
            lg:py-12
          "
        >
          <div
            className="
              grid
              gap-8
              lg:grid-cols-12
              lg:items-center
            "
          >
            {/* CONTEÚDO */}
            <div className="lg:col-span-8">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#ff7900]
                "
              >
                Precisa de ajuda?
              </p>

              <h2
                className="
                  mt-3
                  max-w-2xl
                  text-[2rem]
                  font-black
                  leading-[1.02]
                  tracking-[-0.04em]
                  text-[#082f9c]
                  sm:text-[2.35rem]
                  lg:text-[2.65rem]
                "
              >
                Não encontrou exatamente o que precisa?
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-6
                  text-[#09143a]/60
                  sm:text-[15px]
                "
              >
                Fale com a Soares e explique sua necessidade. A equipe pode
                orientar o item, equipamento ou solução mais adequada para o
                seu atendimento.
              </p>
            </div>

            {/* CTA */}
            <div
              className="
                lg:col-span-4
                lg:flex
                lg:justify-end
              "
            >
              <WhatsappLink
                source="catalog_cta"
                message="Olá! Vim pelo catálogo da Soares Climatização e Soluções Elétricas e gostaria de ajuda para encontrar o item ou solução que preciso."
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  bg-[#ff7900]
                  px-7
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#ff8a1c]
                  hover:shadow-[0_10px_28px_rgba(255,121,0,.20)]
                "
              >
                Falar com a equipe
              </WhatsappLink>
            </div>
          </div>

          {/* DETALHE VISUAL */}
          <div
            aria-hidden="true"
            className="
              absolute
              bottom-0
              left-0
              h-[3px]
              w-24
              bg-[#ff7900]
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              right-0
              top-0
              h-full
              w-[5px]
              bg-[#082f9c]
            "
          />
        </div>
      </div>
    </section>
  );
}