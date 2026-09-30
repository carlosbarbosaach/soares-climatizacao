"use client";

import { FormEvent, useState } from "react";

import { track } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/site";

export function LeadForm() {
  const [started, setStarted] = useState(false);

  function start() {
    if (!started) {
      setStarted(true);

      track("form_start", {
        source: "contact_form",
      });
    }
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const name = String(data.get("name") || "").trim();
    const service = String(data.get("service") || "").trim();
    const city = String(data.get("city") || "").trim();

    track("form_submit", {
      source: "contact_form",
      service,
    });

    track("generate_lead", {
      source: "contact_form",
      service,
    });

    const text = `Olá! Vim pelo site da Soares Climatização e Soluções Elétricas.

Meu nome é ${name}.

Tenho interesse em: ${service}.

Local do atendimento: ${city}.

Gostaria de solicitar um orçamento.`;

    window.open(
      whatsappUrl(text),
      "_blank",
      "noopener,noreferrer"
    );
  }

  const label = `
    mb-2
    block
    text-[10px]
    font-bold
    uppercase
    tracking-[0.16em]
    text-[#09143a]/52
  `;

  const input = `
    focus-ring
    h-12
    w-full
    border
    border-[#09143a]/14
    bg-[#f7f8fb]
    px-4
    text-sm
    text-[#09143a]
    outline-none
    transition-all
    duration-200
    placeholder:text-[#09143a]/35
    hover:border-[#09143a]/24
    focus:border-[#082f9c]
    focus:bg-white
    focus:ring-2
    focus:ring-[#082f9c]/10
  `;

  return (
    <form
      onSubmit={submit}
      onFocus={start}
      className="grid gap-5"
      aria-label="Solicitar orçamento"
    >
      {/* NOME */}
      <div>
        <label
          htmlFor="lead-name"
          className={label}
        >
          Nome
        </label>

        <input
          id="lead-name"
          className={input}
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Seu nome"
        />
      </div>

      {/* SERVIÇO */}
      <div>
        <label
          htmlFor="lead-service"
          className={label}
        >
          Serviço
        </label>

        <div className="relative">
          <select
            id="lead-service"
            className={`
              ${input}
              appearance-none
              pr-11
            `}
            name="service"
            required
            defaultValue=""
          >
            <option
              value=""
              disabled
            >
              Qual serviço você precisa?
            </option>

            <optgroup label="Climatização">
              <option value="Instalação de ar-condicionado">
                Instalação
              </option>

              <option value="Infraestrutura para ar-condicionado">
                Infraestrutura
              </option>

              <option value="Manutenção de ar-condicionado">
                Manutenção
              </option>

              <option value="Higienização de ar-condicionado">
                Higienização
              </option>
            </optgroup>

            <optgroup label="Soluções elétricas">
              <option value="Instalação elétrica">
                Instalação elétrica
              </option>

              <option value="Manutenção elétrica">
                Manutenção elétrica
              </option>

              <option value="Adequação elétrica">
                Adequação elétrica
              </option>

              <option value="Infraestrutura elétrica">
                Infraestrutura elétrica
              </option>
            </optgroup>

            <option value="Outro atendimento">
              Outro atendimento
            </option>
          </select>

          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-4
              top-1/2
              h-2
              w-2
              -translate-y-[65%]
              rotate-45
              border-b
              border-r
              border-[#082f9c]/55
            "
          />
        </div>
      </div>

      {/* LOCAL */}
      <div>
        <label
          htmlFor="lead-city"
          className={label}
        >
          Local do atendimento
        </label>

        <input
          id="lead-city"
          className={input}
          name="city"
          type="text"
          required
          autoComplete="address-level2"
          placeholder="Cidade ou bairro"
        />
      </div>

      {/* AVISO */}
      <div
        className="
          border-l-2
          border-[#ff7900]
          pl-4
        "
      >
        <p
          className="
            text-xs
            leading-5
            text-[#09143a]/52
          "
        >
          Ao continuar, sua mensagem será organizada e aberta diretamente no
          WhatsApp da Soares.
        </p>
      </div>

      {/* CTA */}
      <button
        type="submit"
        className="
          focus-ring
          mt-1
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
          hover:shadow-[0_10px_28px_rgba(255,121,0,.20)]
        "
      >
        Continuar no WhatsApp
      </button>

      {/* PRIVACIDADE */}
      <p
        className="
          text-center
          text-[11px]
          leading-5
          text-[#09143a]/40
        "
      >
        Nenhum dado é armazenado neste site.
      </p>
    </form>
  );
}