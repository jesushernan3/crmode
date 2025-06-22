import React from "react";
import TileEffectCard from "../components/ui/TileEffectCard";

const Formas = () => {
  return (
    <section id="formas" className="p-10">
      <div>
        <h2 className="text-5xl">
          La forma en que el diseño debería haberse hecho en primer lugar
        </h2>
        <p>
          CrMoDe reemplaza a trabajadores independientes poco confiables y
          agencias costosas por una tarifa mensual fija, con diseños entregados
          tan rápido que no querrás ir a ningún otro lado.
        </p>
      </div>
      <div className="flex justify-between">
        <TileEffectCard />
        <TileEffectCard />
        <TileEffectCard />
      </div>
    </section>
  );
};

export default Formas;
