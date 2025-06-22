import { useRef, React } from "react";
import Precios from "./Precios";
import Portfolio from "./Portfolio";
import Nosotros from "./Nosotros";
import Hero from "../components/ui/Hero";
import Formas from "./Formas";

const Inicio = () => {
  return (
    <div className="w-full">
      <Hero />
      <Formas />
      <Precios />
      <Portfolio />
      <Nosotros />
    </div>
  );
};

export default Inicio;
