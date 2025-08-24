import { React } from "react";
import Navbar from "../components/ui/Navbar";

import Precios from "./Precios";
// import Portfolio from "./Portfolio";
// import Nosotros from "./Nosotros";
import Hero from "../components/ui/Hero";
import Formas from "./Formas";
import Beneficios from "./Beneficios";
import PreguntasFrecuentes from "./PreguntasFrecuentes";

const Inicio = () => {
  return (
    <div className="w-full pl-[5%] pr-[5%]" id="inicio">
      <div className="shadow-both-sides">
        <Navbar />
        <Hero />
        <Formas />
        <Precios />
        <Beneficios />
        {/* <Portfolio /> */}
        {/* <Nosotros /> */}
        <PreguntasFrecuentes />
      </div>
    </div>
  );
};

export default Inicio;
