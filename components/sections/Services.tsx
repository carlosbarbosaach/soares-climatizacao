"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "motion/react";

import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    id: "instalacao",
    title: "Instalação",
    description:
      "Instalação de ar-condicionado com atenção ao posicionamento, acabamento e funcionamento adequado do equipamento.",
    image: "/images/instalacao.png",
    imageAlt:
      "Profissional da Soares Climatização realizando instalação de ar-condicionado",
  },
  {
    id: "infraestrutura",
    title: "Infraestrutura",
    description:
      "Preparação da infraestrutura necessária para receber o equipamento, mantendo a obra organizada e preparada para uma instalação bem executada.",
    image: "/images/infraestrutura.png",
    imageAlt:
      "Profissional da Soares Climatização preparando infraestrutura para ar-condicionado",
  },
  {
    id: "manutencao",
    title: "Manutenção",
    description:
      "Manutenção preventiva e corretiva para identificar falhas, preservar o desempenho e contribuir para uma maior vida útil do equipamento.",
    image: "/images/manutencao.png",
    imageAlt:
      "Profissional da Soares Climatização realizando manutenção em ar-condicionado",
  },
  {
    id: "higienizacao",
    title: "Higienização",
    description:
      "Limpeza técnica de filtros e componentes para manter o equipamento em boas condições de funcionamento e proporcionar um ambiente mais agradável.",
    image: "/images/higienizacao.png",
    imageAlt:
      "Profissional da Soares Climatização realizando higienização de ar-condicionado",
  },
];

const AUTOPLAY_DELAY = 5000;

export function Services() {
  const [activeService, setActiveService] = useState(0);

  const intervalRef =
    useRef<ReturnType<typeof setInterval> | null>(null);

  const active = services[activeService];

  function startAutoplay() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setActiveService((current) => {
        return (current + 1) % services.length;
      });
    }, AUTOPLAY_DELAY);
  }

  function handleServiceChange(index: number) {
    setActiveService(index);
    startAutoplay();
  }

  useEffect(() => {
    startAutoplay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section
      id="servicos"
      className="
        scroll-mt-24
        bg-[#f7f8fb]
        py-14
        sm:py-16
        md:py-20
        lg:py-24
      "
    >
      <div className="shell">
        <Reveal>
          <div className="grid gap-5 md:grid-cols-12 md:items-end md:gap-8">
            <div className="md:col-span-6">
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
                Serviços
              </p>

              <h2
                className="
                  mt-3
                  max-w-xl
                  text-[2rem]
                  font-black
                  leading-[1.02]
                  tracking-[-0.04em]
                  text-[#082f9c]
                  sm:text-[2.25rem]
                  md:text-[2.4rem]
                  lg:text-[2.8rem]
                "
              >
                Cuidado técnico em cada etapa da climatização.
              </h2>
            </div>

            <div className="md:col-span-5 md:col-start-8">
              <p
                className="
                  max-w-lg
                  text-sm
                  leading-6
                  text-[#09143a]/65
                  sm:text-[15px]
                "
              >
                Da preparação do ambiente à manutenção do equipamento, a Soares
                oferece soluções para residências e empresas.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal
          className="
            mt-8
            overflow-hidden
            border
            border-[#09143a]/10
            bg-white
            sm:mt-10
            lg:mt-12
            lg:grid
            lg:grid-cols-12
          "
          delay={0.08}
        >
          {/* NAVEGAÇÃO */}
          <div
            className="
              border-b
              border-[#09143a]/10
              lg:col-span-4
              lg:border-b-0
              lg:border-r
            "
          >
            {/* MOBILE */}
            <div className="grid grid-cols-2 lg:hidden">
              {services.map((service, index) => {
                const isActive = activeService === index;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() =>
                      handleServiceChange(index)
                    }
                    aria-pressed={isActive}
                    className={`
                      relative
                      min-h-[58px]
                      border-b
                      border-[#09143a]/10
                      px-4
                      py-3
                      text-left
                      transition-colors

                      ${
                        index % 2 === 0
                          ? "border-r"
                          : ""
                      }

                      ${
                        isActive
                          ? "bg-[#082f9c] text-white"
                          : "bg-white text-[#082f9c]"
                      }
                    `}
                  >
                    <span
                      className="
                        text-[14px]
                        font-extrabold
                        leading-tight
                        tracking-[-0.02em]
                        sm:text-[15px]
                      "
                    >
                      {service.title}
                    </span>

                    {isActive && (
                      <motion.span
                        layoutId="service-mobile-indicator"
                        className="
                          absolute
                          bottom-0
                          left-4
                          h-[3px]
                          w-8
                          bg-[#ff7900]
                        "
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* DESKTOP */}
            <div className="hidden lg:block">
              {services.map((service, index) => {
                const isActive = activeService === index;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() =>
                      handleServiceChange(index)
                    }
                    aria-pressed={isActive}
                    className={`
                      group
                      relative
                      block
                      w-full
                      border-b
                      border-[#09143a]/10
                      px-7
                      py-7
                      text-left
                      transition-colors

                      ${
                        isActive
                          ? "bg-[#082f9c] text-white"
                          : "bg-transparent text-[#082f9c] hover:bg-[#f7f8fb]"
                      }
                    `}
                  >
                    <div className="flex items-center justify-between gap-8">
                      <span
                        className="
                          text-lg
                          font-extrabold
                          tracking-[-0.025em]
                        "
                      >
                        {service.title}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`
                          h-[2px]
                          transition-all
                          duration-300

                          ${
                            isActive
                              ? "w-10 bg-[#ff7900]"
                              : "w-5 bg-[#082f9c]/20 group-hover:w-8"
                          }
                        `}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* CONTEÚDO */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{
                  opacity: 0,
                  x: 18,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -18,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  bg-white
                  md:grid
                  md:grid-cols-2
                  lg:min-h-[430px]
                "
              >
                {/* IMAGEM */}
                <div
                  className="
                    relative
                    min-h-[250px]
                    overflow-hidden
                    bg-[#dde3ec]
                    sm:min-h-[300px]
                    md:order-2
                    md:min-h-full
                  "
                >
                  <Image
                    src={active.image}
                    alt={active.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center"
                  />

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-20
                      bg-[linear-gradient(180deg,transparent,rgba(6,27,92,.14))]
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[4px]
                      w-14
                      bg-[#ff7900]
                    "
                  />
                </div>

                {/* TEXTO */}
                <div
                  className="
                    flex
                    flex-col
                    justify-between
                    p-5
                    sm:p-6
                    md:order-1
                    md:p-8
                    lg:p-10
                  "
                >
                  <div>
                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-[#ff7900]
                      "
                    >
                      Soares Climatização
                    </p>

                    <h3
                      className="
                        mt-3
                        text-[1.8rem]
                        font-black
                        leading-none
                        tracking-[-0.04em]
                        text-[#082f9c]
                        sm:text-[2rem]
                        lg:text-[2.3rem]
                      "
                    >
                      {active.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-md
                        text-sm
                        leading-6
                        text-[#09143a]/65
                        sm:text-[15px]
                        sm:leading-7
                      "
                    >
                      {active.description}
                    </p>
                  </div>

                  <a
                    href="#contato"
                    className="
                      mt-6
                      inline-flex
                      w-fit
                      border-b
                      border-[#ff7900]
                      pb-1
                      text-sm
                      font-bold
                      text-[#082f9c]
                      transition-colors
                      hover:text-[#ff7900]
                    "
                  >
                    Solicitar orçamento
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}