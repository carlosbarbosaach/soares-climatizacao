import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { CatalogHero } from "@/components/catalog/CatalogHero";
import { CatalogContent } from "@/components/catalog/CatalogContent";
import { CatalogCTA } from "@/components/catalog/CatalogCTA";

export const metadata: Metadata = {
  title: "Catálogo | Soares Climatização e Soluções Elétricas",
  description:
    "Consulte equipamentos, materiais e soluções para climatização e elétrica da Soares em Bombinhas e região.",
};

export default function CatalogPage() {
  return (
    <>
      <Header />

      <main>
        <CatalogHero />
        <CatalogContent />
        <CatalogCTA />
      </main>

      <Footer />
    </>
  );
}