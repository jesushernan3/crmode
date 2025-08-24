import React from "react";
import Carrousel from "../components/ui/Carrousel";

const Beneficios = () => {
  return (
    <section id="beneficios" className="bg-emerald-300 shadow-both-sides">
      <div>
        <div>
          <p>beneficios de la membresía</p>
          <p>
            CrMoDe reemplaza a trabajadores independientes poco confiables y
            agencias costosas por una tarifa mensual fija, con diseños
            entregados tan rápido que no querrás ir a ningún otro lado.
          </p>
          <div>
            <Carrousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
