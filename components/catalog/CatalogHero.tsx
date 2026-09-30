import Image from "next/image";

export function CatalogHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#061b5c]
        pt-20
        lg:pt-[72px]
      "
      aria-labelledby="catalog-hero-title"
    >
      {/* SEO / ACESSIBILIDADE */}
      <h1
        id="catalog-hero-title"
        className="sr-only"
      >
        Catálogo Soares — equipamentos, materiais e soluções para climatização
        e elétrica
      </h1>

      {/* BANNER */}
      <div className="relative w-full overflow-hidden bg-[#061b5c]">
        <Image
          src="/images/banner-catalogo.png"
          alt=""
          width={2048}
          height={768}
          priority
          sizes="100vw"
          className="
            block
            h-auto
            w-full
          "
        />

        {/* SOMBRA FINAL */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-12
            bg-[linear-gradient(180deg,transparent_0%,rgba(6,27,92,.28)_100%)]
            sm:h-16
            lg:h-20
          "
        />
      </div>
    </section>
  );
}