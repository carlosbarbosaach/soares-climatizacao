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
        min-h-[720px]
        overflow-hidden
        bg-[#061b5c]
        text-white
        md:min-h-[740px]
        lg:min-h-[780px]
      "
    >
      {/* IMAGEM MOBILE */}
      <motion.div
        className="
          absolute
          inset-0
          md:hidden
        "
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
          src="/images/hero-banner-mobile.png"
          alt="Profissional realizando serviço técnico de climatização"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
          "
        />
      </motion.div>

      {/* IMAGEM TABLET / DESKTOP */}
      <motion.div
        className="
          absolute
          inset-0
          hidden
          md:block
        "
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
            object-[64%_center]
            lg:object-center
          "
        />
      </motion.div>

      {/* OVERLAY MOBILE */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(180deg,rgba(5,24,81,.78)_0%,rgba(5,24,81,.72)_24%,rgba(5,24,81,.82)_55%,rgba(5,24,81,.96)_100%)]
          md:hidden
        "
      />

      {/* OVERLAY DESKTOP */}
      <div
        className="
          absolute
          inset-0
          hidden
          md:block
          md:bg-[linear-gradient(90deg,rgba(5,24,81,.98)_0%,rgba(5,24,81,.95)_28%,rgba(5,24,81,.82)_45%,rgba(5,24,81,.40)_62%,rgba(5,24,81,.08)_100%)]
        "
      />

      {/* ESCURECIMENTO EXTRA MOBILE NO LADO ESQUERDO */}
      <div
        className="
          absolute
          inset-y-0
          left-0
          w-[78%]
          bg-[linear-gradient(90deg,rgba(5,24,81,.68)_0%,rgba(5,24,81,.35)_62%,transparent_100%)]
          md:hidden
        "
      />

      {/* PROFUNDIDADE INFERIOR */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-48
          bg-[linear-gradient(180deg,transparent,rgba(5,24,81,.82))]
          md:h-44
          md:bg-[linear-gradient(180deg,transparent,rgba(5,24,81,.72))]
        "
      />

      {/* CONTEÚDO */}
      <div
        className="
          shell
          relative
          flex
          min-h-[720px]
          items-center
          pt-28
          md:min-h-[740px]
          md:pt-20
          lg:min-h-[780px]
          lg:pt-16
        "
      >
        <div
          className="
            w-full
            max-w-[640px]
            -translate-y-1
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
            {/* KICKER */}
            <p
              className="
                mb-4
                max-w-[320px]
                text-[10px]
                font-bold
                uppercase
                leading-[1.6]
                tracking-[0.2em]
                text-[#ff8a1c]
                sm:max-w-none
                sm:text-[11px]
              "
            >
              Climatização & soluções elétricas em {site.region}
            </p>

            {/* TÍTULO */}
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

            {/* TEXTO */}
            <p
              className="
                mt-6
                max-w-[540px]
                text-[15px]
                leading-6
                text-white/72
                sm:text-base
                sm:leading-7
              "
            >
              Serviços de climatização e soluções elétricas para residências e
              empresas em Bombinhas e região, com atendimento direto e foco em
              uma execução bem feita.
            </p>

            {/* CTAS */}
            <motion.div
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:mt-9
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
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#ff7900]
                  px-7
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_10px_28px_rgba(255,121,0,.16)]
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
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/20
                  bg-white/[0.02]
                  px-6
                  text-sm
                  font-semibold
                  text-white/82
                  backdrop-blur-[2px]
                  transition-all
                  duration-200
                  hover:border-white/40
                  hover:bg-white/[0.06]
                  hover:text-white
                  sm:w-auto
                "
              >
                Conhecer soluções
              </a>
            </motion.div>

            {/* INFORMAÇÕES */}
            <motion.div
              className="
                mt-6
                flex
                flex-col
                items-start
                gap-2
                text-xs
                font-semibold
                text-white/48
                sm:flex-row
                sm:flex-wrap
                sm:items-center
                sm:gap-x-5
                lg:mt-7
              "
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
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