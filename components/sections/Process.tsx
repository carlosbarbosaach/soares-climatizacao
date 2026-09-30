"use client";

import { motion } from "motion/react";

import { WhatsappLink } from "@/components/ui/WhatsappLink";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    label: "Primeiro contato",
    title: "Conte o que precisa",
    text: "Informe se procura instalação, infraestrutura, manutenção ou higienização e onde será realizado o atendimento.",
  },
  {
    label: "Análise inicial",
    title: "Envie fotos pelo WhatsApp",
    text: "Quando necessário, fotos do ambiente e do equipamento ajudam a entender melhor o serviço antes da visita.",
  },
  {
    label: "Próximo passo",
    title: "Receba a orientação",
    text: "Com essas informações, a Soares orienta o próximo passo e consegue preparar o atendimento ou orçamento.",
  },
];

export function Process() {
  return (
    <section
      id="como-funciona"
      className="
        scroll-mt-24
        overflow-hidden
        bg-[#061b5c]
        py-16
        text-white
        sm:py-20
        lg:py-24
      "
    >
      <div className="shell">
        <Reveal>
          <div
            className="
              grid
              gap-6
              md:grid-cols-12
              md:items-end
              md:gap-8
            "
          >
            <div className="md:col-span-7">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#ff8a1c]
                  sm:text-[11px]
                "
              >
                Atendimento
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
                Seu orçamento começa com uma conversa simples.
              </h2>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <p
                className="
                  max-w-md
                  text-sm
                  leading-6
                  text-white/58
                  sm:text-[15px]
                "
              >
                Sem formulários longos ou etapas complicadas. Você explica o que
                precisa e a equipe orienta como seguir.
              </p>
            </div>
          </div>
        </Reveal>

        <div
          className="
            relative
            mt-10
            border
            border-white/10
            bg-[#08266f]
            sm:mt-12
            lg:mt-14
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute
              left-[8%]
              right-[8%]
              top-[69px]
              hidden
              h-px
              bg-white/12
              lg:block
            "
          />

          <motion.div
            aria-hidden="true"
            className="
              absolute
              left-[8%]
              top-[68px]
              hidden
              h-[3px]
              w-[28%]
              origin-left
              bg-[#ff7900]
              lg:block
            "
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <div className="grid lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{
                  opacity: 0,
                  y: 26,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  group
                  relative
                  px-5
                  py-7
                  sm:px-7
                  sm:py-8
                  lg:min-h-[330px]
                  lg:px-8
                  lg:py-10

                  ${
                    index < steps.length - 1
                      ? `
                        border-b
                        border-white/10
                        lg:border-b-0
                        lg:border-r
                      `
                      : ""
                  }
                `}
              >
                <div
                  className="
                    relative
                    z-10
                    mb-7
                    flex
                    items-center
                    gap-3
                    lg:mb-12
                  "
                >
                  <motion.span
                    className={`
                      block
                      h-[10px]
                      w-[10px]
                      rounded-full

                      ${
                        index === 0
                          ? "bg-[#ff7900] ring-4 ring-[#ff7900]/15"
                          : "bg-white/35"
                      }
                    `}
                    whileHover={{
                      scale: 1.3,
                    }}
                  />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#ff9a3d]
                    "
                  >
                    {step.label}
                  </span>
                </div>

                <h3
                  className="
                    max-w-[280px]
                    text-[1.5rem]
                    font-extrabold
                    leading-[1.08]
                    tracking-[-0.03em]
                    text-white
                    sm:text-[1.65rem]
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-4
                    max-w-sm
                    text-sm
                    leading-6
                    text-white/58
                    sm:text-[15px]
                    sm:leading-7
                  "
                >
                  {step.text}
                </p>

                {index < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-[-1px]
                      left-5
                      h-[2px]
                      w-10
                      bg-[#ff7900]
                      sm:left-7
                      lg:hidden
                    "
                  />
                )}
              </motion.article>
            ))}
          </div>

          <Reveal>
            <div
              className="
                border-t
                border-white/10
                bg-[#071f61]
                px-5
                py-6
                sm:px-7
                lg:flex
                lg:items-center
                lg:justify-between
                lg:gap-8
                lg:px-8
              "
            >
              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#ff8a1c]
                  "
                >
                  Precisa de atendimento?
                </p>

                <p
                  className="
                    mt-2
                    max-w-xl
                    text-sm
                    leading-6
                    text-white/65
                  "
                >
                  Explique o que precisa diretamente pelo WhatsApp e envie fotos
                  do ambiente ou equipamento se tiver.
                </p>
              </div>

              <WhatsappLink
                source="process"
                message="Olá! Vim pelo site da Soares Climatização e Soluções Elétricas e gostaria de solicitar um orçamento."
                className="
                  mt-5
                  inline-flex
                  min-h-12
                  w-full
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
                  sm:w-auto
                  lg:mt-0
                "
              >
                Falar com a Soares
              </WhatsappLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}