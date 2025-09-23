import { React } from "react";
// import Navbar from "../components/ui/Navbar";
import Header from "../components/layout/Header";
import Precios from "./Precios";
import Portfolio from "./Portfolio";
import Nosotros from "./Nosotros";
import Hero from "../components/ui/Hero";
import Formas from "./Formas";
import Beneficios from "./Beneficios";
import PreguntasFrecuentes from "./PreguntasFrecuentes";
import Contact from "./Contact";

const Inicio = () => {
  return (
    <div
      className="max-w-7xl sm:px-6 lg:px-8 lg:py-10 mr-auto ml-auto pt-6 pr-4 pb-6 pl-4"
      id="inicio"
    >
      <div className="sm:p-6 lg:p-8 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.6)] bg-neutral-800/30 border-white/15 border rounded-3xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-3xl">
        {/* <Navbar /> */}
        <Header />
        <Hero />
        <Portfolio />
        <Formas />
        <Precios />
        <Beneficios />
        <Nosotros />
        <Contact />
        <PreguntasFrecuentes />
      </div>
    </div>
  );
};

export default Inicio;
