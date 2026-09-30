import Image from "next/image";
import Link from "next/link";

export function CatalogBanner() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#061b5c]
      "
      aria-label="Catálogo Soares"
    >
      <div
        className="
          relative
          min-h-[360px]
          sm:min-h-[420px]
          lg:min-h-[520px]
        "
      >
        <Image
          src="/images/banner-catalogo.png"
          alt="Catálogo Soares com soluções para climatização, elétrica, infraestrutura e acessórios"
          fill
          sizes="100vw"
          className="
            object-cover
            object-center
          "
          priority={false}
        />

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(90deg,rgba(6,27,92,.08)_0%,transparent_55%)]
          "
        />

        <div
          className="
            shell
            relative
            z-10
            flex
            min-h-[360px]
            items-end
            pb-8
            sm:min-h-[420px]
            sm:pb-10
            lg:min-h-[520px]
            lg:pb-12
          "
        >
          <Link
            href="/catalogo"
            className="
              inline-flex
              min-h-12
              items-center
              justify-center
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
            "
          >
            Ver catálogo
          </Link>
        </div>
      </div>
    </section>
  );
}