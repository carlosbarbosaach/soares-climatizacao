"use client";

import Image from "next/image";
import { motion } from "motion/react";

const images = [
  {
    src: "/images/trabalho-1.png",
    alt: "Instalação de ar-condicionado",
  },
  {
    src: "/images/trabalho-2.png",
    alt: "Infraestrutura para climatização",
  },
  {
    src: "/images/trabalho-3.png",
    alt: "Manutenção de ar-condicionado",
  },
  {
    src: "/images/trabalho-4.png",
    alt: "Higienização de ar-condicionado",
  },
];

export function WorkGallery() {
  return (
    <section
      className="
        overflow-hidden
        bg-[#061b5c]
      "
      aria-label="Serviços realizados pela Soares"
    >
      <div
        className="
          grid
          grid-cols-2
          lg:grid-cols-4
        "
      >
        {images.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{
              opacity: 0,
              scale: 0.975,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              relative
              min-h-[240px]
              overflow-hidden
              sm:min-h-[300px]
              lg:min-h-[420px]
              xl:min-h-[480px]
            "
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="
                (max-width: 1024px) 50vw,
                25vw
              "
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-[1.035]
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-[linear-gradient(180deg,transparent_65%,rgba(6,27,92,.25))]
              "
            />

            {index === 0 && (
              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.25,
                }}
                className="
                  absolute
                  left-0
                  top-0
                  h-1
                  w-16
                  origin-left
                  bg-[#ff7900]
                "
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}