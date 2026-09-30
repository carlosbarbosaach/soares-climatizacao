const faqs = [
  [
    "A Soares faz instalação de ar-condicionado?",
    "Sim. A Soares realiza instalação de ar-condicionado para residências e empresas, além de serviços de infraestrutura, manutenção e higienização.",
  ],
  [
    "Vocês fazem a infraestrutura antes da instalação?",
    "Sim. A infraestrutura pode ser preparada antes da instalação do equipamento, de acordo com as necessidades do ambiente e do projeto.",
  ],
  [
    "Também fazem manutenção e higienização?",
    "Sim. A Soares realiza manutenção preventiva, corretiva e higienização de equipamentos de climatização.",
  ],
  [
    "A Soares também trabalha com serviços elétricos?",
    "Sim. Além da climatização, a Soares também atende demandas de soluções elétricas para ambientes residenciais e empresariais.",
  ],
  [
    "Posso solicitar climatização e elétrica no mesmo atendimento?",
    "Sim. Dependendo da necessidade do ambiente, o atendimento pode envolver tanto climatização quanto soluções elétricas. A equipe avalia o serviço a partir das informações enviadas pelo WhatsApp.",
  ],
  [
    "Qual região vocês atendem?",
    "A Soares atende Bombinhas e região. Para confirmar a disponibilidade no seu endereço, envie uma mensagem pelo WhatsApp.",
  ],
  [
    "Como pedir orçamento?",
    "Informe pelo WhatsApp o serviço desejado, cidade ou bairro e, se possível, envie fotos do ambiente, equipamento ou instalação.",
  ],
];

export function FAQ() {
  return (
    <section
      id="duvidas"
      className="
        scroll-mt-24
        bg-[#f7f8fb]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      <div className="shell">
        <div
          className="
            grid
            gap-10
            md:grid-cols-12
            md:gap-12
            lg:gap-16
          "
        >
          {/* INTRO */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#ff7900]
                  sm:text-[11px]
                "
              >
                Dúvidas frequentes
              </p>

              <h2
                className="
                  mt-3
                  max-w-sm
                  text-[2rem]
                  font-black
                  leading-[1.02]
                  tracking-[-0.04em]
                  text-[#082f9c]
                  sm:text-[2.35rem]
                  lg:text-[2.7rem]
                "
              >
                O essencial antes do contato.
              </h2>

              <p
                className="
                  mt-5
                  max-w-sm
                  text-sm
                  leading-6
                  text-[#09143a]/60
                  sm:text-[15px]
                "
              >
                Reunimos as dúvidas mais comuns sobre climatização, soluções
                elétricas e atendimento para facilitar seu próximo passo.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="md:col-span-7 md:col-start-6">
            <div
              className="
                border-t
                border-[#09143a]/12
              "
            >
              {faqs.map(([question, answer]) => (
                <details
                  key={question}
                  className="
                    group
                    border-b
                    border-[#09143a]/12
                  "
                >
                  <summary
                    className="
                      focus-ring
                      flex
                      cursor-pointer
                      list-none
                      items-center
                      justify-between
                      gap-6
                      py-6
                      text-left
                    "
                  >
                    <span
                      className="
                        max-w-xl
                        text-[1rem]
                        font-extrabold
                        leading-6
                        tracking-[-0.02em]
                        text-[#082f9c]
                        sm:text-[1.05rem]
                      "
                    >
                      {question}
                    </span>

                    <span
                      aria-hidden="true"
                      className="
                        relative
                        h-6
                        w-6
                        shrink-0
                      "
                    >
                      <span
                        className="
                          absolute
                          left-1/2
                          top-1/2
                          h-[2px]
                          w-4
                          -translate-x-1/2
                          -translate-y-1/2
                          bg-[#ff7900]
                        "
                      />

                      <span
                        className="
                          absolute
                          left-1/2
                          top-1/2
                          h-4
                          w-[2px]
                          -translate-x-1/2
                          -translate-y-1/2
                          bg-[#ff7900]
                          transition-transform
                          duration-300
                          group-open:rotate-90
                        "
                      />
                    </span>
                  </summary>

                  <div
                    className="
                      overflow-hidden
                      pb-6
                    "
                  >
                    <p
                      className="
                        max-w-2xl
                        pr-8
                        text-sm
                        leading-6
                        text-[#09143a]/62
                        sm:text-[15px]
                        sm:leading-7
                      "
                    >
                      {answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>

            {/* FECHAMENTO */}
            <div
              className="
                mt-8
                border-l-2
                border-[#ff7900]
                pl-5
              "
            >
              <p
                className="
                  text-sm
                  leading-6
                  text-[#09143a]/60
                "
              >
                Ainda ficou alguma dúvida? Fale diretamente com a Soares
                Climatização e Soluções Elétricas pelo WhatsApp e explique o
                que você precisa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}