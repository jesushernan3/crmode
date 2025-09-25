import { React } from "react";
import Precios from "../../sections/Precios";
import Portfolio from "../../sections/Portfolio";
// import Nosotros from "./Nosotros";
import Hero from "../ui/Hero";
import Habilidades from "../../sections/Habilidades";
// import Formas from "./Formas";
// import Beneficios from "./Beneficios";
// import PreguntasFrecuentes from "./PreguntasFrecuentes";
import Contact from "../../sections/Contact";
import FAQ from "../../sections/FAQ";

const Principal = () => {
  return (
    <main className="pt-16 relative z-10" id="main">
      <div className="sm:p-6 lg:p-8 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.6)] bg-neutral-800/30 border-white/15 border rounded-3xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-3xl">
        <Hero />
        <Portfolio />
        {/* <Formas /> */}
        <Precios />
        <Habilidades />
        {/* <Beneficios /> */}
        {/* <Nosotros /> */}
        <Contact />

        <FAQ />
      </div>
    </main>
  );
};

export default Principal;
