"use client";

import { motion } from "motion/react";

import { LeadForm } from "./LeadForm";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contato"
      className="
        scroll-mt-24
        overflow-hidden
        bg-[#082f9c]
        py-16
        text-white
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
            md:items-start
            md:gap-12
            lg:gap-16
          "
        >
          {/* CONTEÚDO */}
          <motion.div
            className="md:col-span-6"
            initial={{
              opacity: 0,
              x: -24,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#ff9a3d]
                sm:text-[11px]
              "
            >
              Solicitar orçamento
            </p>

            <h2
              className="
                mt-3
                max-w-[620px]
                text-[2rem]
                font-black
                leading-[1.02]
                tracking-[-0.04em]
                text-white
                sm:text-[2.35rem]
                lg:text-[2.8rem]
              "
            >
              Vamos entender o que seu ambiente precisa.
            </h2>

            <p
              className="
                mt-5
                max-w-xl
                text-sm
                leading-6
                text-white/64
                sm:text-[15px]
                sm:leading-7
              "
            >
              Informe se precisa de climatização, solução elétrica ou outro
              atendimento. Ao continuar, sua mensagem será preparada para envio
              direto pelo WhatsApp da Soares.
            </p>

            <div
              className="
                mt-9
                max-w-lg
                border-t
                border-white/12
              "
            >
              <div
                className="
                  grid
                  gap-6
                  border-b
                  border-white/12
                  py-6
                  sm:grid-cols-2
                "
              >
                <div>
                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#ff9a3d]
                    "
                  >
                    WhatsApp
                  </p>

                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      mt-2
                      inline-block
                      text-base
                      font-extrabold
                      text-white
                      transition-colors
                      hover:text-[#ff9a3d]
                    "
                  >
                    {site.whatsappLabel}
                  </a>
                </div>

                <div>
                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#ff9a3d]
                    "
                  >
                    Atendimento
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      leading-6
                      text-white/78
                    "
                  >
                    {site.region}
                  </p>
                </div>
              </div>
            </div>

            <p
              className="
                mt-5
                max-w-md
                text-xs
                leading-5
                text-white/42
              "
            >
              Você pode enviar fotos do ambiente, equipamento ou instalação
              elétrica pelo WhatsApp após iniciar a conversa.
            </p>
          </motion.div>

          {/* FORMULÁRIO */}
          <motion.div
            className="
              md:col-span-5
              md:col-start-8
            "
            initial={{
              opacity: 0,
              x: 24,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              className="
                border
                border-white/10
                bg-white
                p-5
                text-[#09143a]
                shadow-[0_20px_60px_rgba(0,0,0,.12)]
                sm:p-7
                lg:p-8
              "
            >
              <div className="mb-6">
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#ff7900]
                  "
                >
                  Atendimento rápido
                </p>

                <h3
                  className="
                    mt-2
                    text-[1.45rem]
                    font-extrabold
                    leading-tight
                    tracking-[-0.03em]
                    text-[#082f9c]
                  "
                >
                  Conte o que você precisa
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-[#09143a]/58
                  "
                >
                  Preencha apenas as informações necessárias para iniciar o
                  atendimento.
                </p>
              </div>

              <LeadForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}