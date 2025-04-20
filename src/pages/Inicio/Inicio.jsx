import React from "react";
import Navbar from "../../components/ui/Navbar";
import Precios from "../Precios/Precios";
import Portfolio from "../Portfolio/Portfolio";
import Nosotros from "../QuienesSomos/Nosotros";

const Inicio = () => {
  return (
    <div className="w-full">
      <Navbar />
      <section className="h-screen bg-[#bea0f2] flex justify-center items-center font-[cardo]">
        <div className="text-center">
          <p className="font-extrabold  text-4xl mb-5">
            Vamos derecho al grano!
          </p>
          <p className="text-6xl">¿Que Precisas?</p>
        </div>
      </section>
      <section className="min-h-[500px] flex justify-center items-center">
        <p>
          Designjoy reemplaza a trabajadores independientes poco confiables y
          agencias costosas por una tarifa mensual fija, con diseños entregados
          tan rápido que no querrás ir a ningún otro lado.
        </p>
      </section>
      <Precios />
      <Portfolio />
      <Nosotros />
    </div>
  );
};

export default Inicio;
