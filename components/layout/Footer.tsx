import Link from "next/link";

import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#061b5c] text-white">
      <div className="shell py-10 sm:py-12 lg:py-14">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          {/* MARCA */}
          <div className="md:col-span-5">
            <Link
              href="/#inicio"
              aria-label="Soares Climatização e Soluções Elétricas - início"
              className="
                inline-flex
                flex-col
                leading-none
              "
            >
              <span
                className="
                  text-2xl
                  font-black
                  tracking-[-0.045em]
                  text-white
                "
              >
                SOARES
              </span>

              <span
                className="
                  mt-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.1em]
                  text-[#ff7900]
                "
              >
                Climatização & Soluções Elétricas
              </span>
            </Link>

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                leading-6
                text-white/52
              "
            >
              Climatização e soluções elétricas para residências e empresas,
              com atendimento em Bombinhas e região.
            </p>
          </div>

          {/* NAVEGAÇÃO */}
          <div className="md:col-span-3">
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-white/35
              "
            >
              Navegação
            </p>

            <nav
              className="mt-5 grid gap-3"
              aria-label="Navegação do rodapé"
            >
              <Link
                href="/#servicos"
                className="
                  w-fit
                  text-sm
                  text-white/62
                  transition-colors
                  hover:text-white
                "
              >
                Climatização
              </Link>

              <Link
                href="/#solucoes-eletricas"
                className="
                  w-fit
                  text-sm
                  text-white/62
                  transition-colors
                  hover:text-white
                "
              >
                Soluções Elétricas
              </Link>

              <Link
                href="/catalogo"
                className="
                  w-fit
                  text-sm
                  text-white/62
                  transition-colors
                  hover:text-white
                "
              >
                Catálogo
              </Link>

              <Link
                href="/#como-funciona"
                className="
                  w-fit
                  text-sm
                  text-white/62
                  transition-colors
                  hover:text-white
                "
              >
                Atendimento
              </Link>

              <Link
                href="/#duvidas"
                className="
                  w-fit
                  text-sm
                  text-white/62
                  transition-colors
                  hover:text-white
                "
              >
                Dúvidas
              </Link>

              <Link
                href="/#contato"
                className="
                  w-fit
                  text-sm
                  text-white/62
                  transition-colors
                  hover:text-white
                "
              >
                Contato
              </Link>
            </nav>
          </div>

          {/* CONTATO */}
          <div className="md:col-span-4">
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-white/35
              "
            >
              Contato
            </p>

            <div className="mt-5 space-y-3 text-sm">
              <p className="text-white/62">
                {site.region}
              </p>

              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="
                  block
                  w-fit
                  font-semibold
                  text-white
                  transition-colors
                  hover:text-[#ff8a1c]
                "
              >
                {site.whatsappLabel}
              </a>

              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="
                  block
                  w-fit
                  text-white/62
                  transition-colors
                  hover:text-white
                "
              >
                @soares.climatizacao
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BASE */}
      <div className="border-t border-white/10">
        <div
          className="
            shell
            flex
            flex-col
            gap-3
            py-6
            text-xs
            text-white/35
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © 2026 Soares Climatização & Soluções Elétricas.
            Todos os direitos reservados.
          </p>

          <a
            href="https://www.base48digital.com.br/"
            target="_blank"
            rel="noreferrer"
            className="
              w-fit
              transition-colors
              hover:text-white/65
            "
          >
            Desenvolvido por Base48 Digital
          </a>
        </div>
      </div>
    </footer>
  );
}