import React from "react";
import Carousel from "../components/ui/Carrousel";

const Beneficios = () => {
  return (
    <section id="beneficios" className="shadow-both-sides">
      <h2 className="max-w-[670px] p-10 text-center text-6xl">
        Es el famoso,{" "}
        <span className="font-ephesis">"no hay vuelta atrás"</span>
      </h2>

      <div>
        <div>
          <p className="max-w-[670px] mx-auto text-center text-gray-500">
            CrMoDe reemplaza a trabajadores independientes poco confiables y
            agencias costosas por una tarifa mensual fija, con diseños
            entregados tan rápido que no querrás ir a ningún otro lado.
          </p>
          <div>
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
