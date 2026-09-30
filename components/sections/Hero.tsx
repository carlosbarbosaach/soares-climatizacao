"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { WhatsappLink } from "@/components/ui/WhatsappLink";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative
        min-h-[680px]
        overflow-hidden
        bg-[#061b5c]
        text-white
        md:min-h-[740px]
        lg:min-h-[780px]
      "
    >
      {/* IMAGEM */}
      <motion.div
        className="absolute inset-0"
        initial={{
          opacity: 0,
          scale: 1.025,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Image
          src="/images/hero-banner.png"
          alt="Profissional realizando serviço técnico de climatização"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[66%_center]
            sm:object-[64%_center]
            lg:object-center
          "
        />
      </motion.div>

      {/* OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(90deg,rgba(5,24,81,.98)_0%,rgba(5,24,81,.95)_28%,rgba(5,24,81,.82)_45%,rgba(5,24,81,.40)_62%,rgba(5,24,81,.08)_100%)]
        "
      />

      {/* PROFUNDIDADE */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-44
          bg-[linear-gradient(180deg,transparent,rgba(5,24,81,.72))]
        "
      />

      {/* CONTEÚDO */}
      <div
        className="
          shell
          relative
          flex
          min-h-[680px]
          items-center
          pt-24
          md:min-h-[740px]
          md:pt-20
          lg:min-h-[780px]
          lg:pt-16
        "
      >
        <div
          className="
            max-w-[640px]
            -translate-y-4
            md:-translate-y-6
            lg:-translate-y-8
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 28,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p
              className="
                mb-4
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#ff8a1c]
                sm:text-[11px]
              "
            >
              Climatização & soluções elétricas em {site.region}
            </p>

            <h1
              className="
                max-w-[570px]
                text-[2.3rem]
                font-black
                leading-[1]
                tracking-[-0.04em]
                sm:text-[2.8rem]
                md:text-[3.2rem]
                lg:text-[3.55rem]
              "
            >
              Conforto, segurança e soluções técnicas para o seu ambiente.
            </h1>

            <p
              className="
                mt-6
                max-w-[540px]
                text-[15px]
                leading-6
                text-white/70
                sm:text-base
                sm:leading-7
              "
            >
              Serviços de climatização e soluções elétricas para residências e
              empresas em Bombinhas e região, com atendimento direto e foco em
              uma execução bem feita.
            </p>

            <motion.div
              className="
                mt-9
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
                lg:mt-10
              "
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.38,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <WhatsappLink
                source="hero"
                message="Olá! Encontrei a Soares Climatização e Soluções Elétricas pelo site e gostaria de solicitar um orçamento."
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#ff7900]
                  px-7
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#ff8a1c]
                  hover:shadow-[0_10px_30px_rgba(255,121,0,.24)]
                  sm:w-auto
                "
              >
                Solicitar orçamento
              </WhatsappLink>

              <a
                href="#servicos"
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/20
                  px-6
                  text-sm
                  font-semibold
                  text-white/82
                  transition-all
                  duration-200
                  hover:border-white/40
                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                Conhecer soluções
              </a>
            </motion.div>

            <motion.div
              className="
                mt-6
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-2
                text-xs
                font-semibold
                text-white/48
                lg:mt-7
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.55,
              }}
            >
              <span>
                WhatsApp {site.whatsappLabel}
              </span>

              <span
                aria-hidden="true"
                className="
                  hidden
                  h-1
                  w-1
                  rounded-full
                  bg-[#ff7900]
                  sm:block
                "
              />

              <span>
                Atendimento residencial e empresarial
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}