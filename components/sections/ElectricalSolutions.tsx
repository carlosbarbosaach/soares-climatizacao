"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { WhatsappLink } from "@/components/ui/WhatsappLink";
import { Reveal } from "@/components/ui/Reveal";

const electricalServices = [
  {
    title: "Instalações elétricas",
    text: "Execução e adequação de instalações elétricas para ambientes residenciais e comerciais.",
  },
  {
    title: "Manutenção e reparos",
    text: "Identificação de problemas e realização de reparos em pontos, circuitos e instalações elétricas.",
  },
  {
    title: "Adequações elétricas",
    text: "Ajustes na instalação existente para atender novas necessidades do ambiente ou dos equipamentos.",
  },
  {
    title: "Infraestrutura elétrica",
    text: "Preparação de pontos e infraestrutura elétrica para equipamentos, reformas e novos projetos.",
  },
];

export function ElectricalSolutions() {
  return (
    <section
      id="solucoes-eletricas"
      className="
        scroll-mt-24
        overflow-hidden
        bg-white
        py-16
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
                  text-[#ff7900]
                  sm:text-[11px]
                "
              >
                Soluções elétricas
              </p>

              <h2
                className="
                  mt-3
                  max-w-[650px]
                  text-[2rem]
                  font-black
                  leading-[1.02]
                  tracking-[-0.04em]
                  text-[#082f9c]
                  sm:text-[2.35rem]
                  lg:text-[2.8rem]
                "
              >
                Soluções elétricas pensadas para cada necessidade do ambiente.
              </h2>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <p
                className="
                  max-w-md
                  text-sm
                  leading-6
                  text-[#09143a]/62
                  sm:text-[15px]
                "
              >
                Atendimento para residências e empresas, desde adequações até
                infraestrutura e manutenção elétrica.
              </p>
            </div>
          </div>
        </Reveal>

        <div
          className="
            mt-10
            overflow-hidden
            border
            border-[#09143a]/10
            bg-[#f7f8fb]
            md:grid
            md:grid-cols-12
            lg:mt-12
          "
        >
          {/* FOTO */}
          <motion.div
            className="
              relative
              min-h-[320px]
              overflow-hidden
              md:col-span-6
              md:min-h-[560px]
              lg:col-span-7
            "
            initial={{
              opacity: 0,
              x: -28,
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
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src="/images/solucoes-eletricas.png"
              alt="Profissional realizando serviço elétrico"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover object-center"
            />

            <div
              className="
                absolute
                inset-0
                bg-[linear-gradient(180deg,transparent_60%,rgba(6,27,92,.22))]
              "
            />

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
          </motion.div>

          {/* SERVIÇOS */}
          <motion.div
            className="
              bg-[#061b5c]
              text-white
              md:col-span-6
              lg:col-span-5
            "
            initial={{
              opacity: 0,
              x: 28,
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
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#ff9a3d]
                "
              >
                Atendimento elétrico
              </p>

              <h3
                className="
                  mt-3
                  max-w-sm
                  text-[1.75rem]
                  font-black
                  leading-[1.05]
                  tracking-[-0.035em]
                  sm:text-[2rem]
                "
              >
                Execução técnica para residências e empresas.
              </h3>
            </div>

            <div className="border-t border-white/10">
              {electricalServices.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{
                    opacity: 0,
                    y: 14,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  className="
                    border-b
                    border-white/10
                    px-6
                    py-5
                    transition-colors
                    hover:bg-white/[0.03]
                    sm:px-8
                    lg:px-10
                    lg:py-6
                  "
                >
                  <h4
                    className="
                      text-[1.05rem]
                      font-extrabold
                      tracking-[-0.02em]
                      text-white
                    "
                  >
                    {service.title}
                  </h4>

                  <p
                    className="
                      mt-2
                      max-w-md
                      text-sm
                      leading-6
                      text-white/55
                    "
                  >
                    {service.text}
                  </p>
                </motion.article>
              ))}
            </div>

            <div className="px-6 py-7 sm:px-8 lg:px-10">
              <WhatsappLink
                source="electrical_solutions"
                message="Olá! Vim pelo site da Soares Climatização e Soluções Elétricas e gostaria de informações sobre um serviço elétrico."
                className="
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
                "
              >
                Solicitar orçamento elétrico
              </WhatsappLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}