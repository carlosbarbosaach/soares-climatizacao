import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { EditorialBreak } from "@/components/sections/EditorialBreak";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { WorkGallery } from "@/components/sections/Gallery";
import { ElectricalSolutions } from "@/components/sections/ElectricalSolutions";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ElectricalSolutions />
        <EditorialBreak />
        <Process />
        <WorkGallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
