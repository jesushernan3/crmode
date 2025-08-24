import React from "react";
import TileEffectCard from "../components/ui/TileEffectCard";

const Formas = () => {
  return (
    <section id="formas">
      <div>
        <h2 className="max-w-[670px] text-5xl w-200 mx-auto text-center">
          La forma en que el diseño{" "}
          <span className="font-ephesis">debería haberse hecho</span> en primer
          lugar
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <TileEffectCard
          title={"Subscribirce"}
          text={"Suscríbete a un plan y solicita tantos diseños como quieras."}
          backgroundgradient={"blue-gradient"}
        />
        <TileEffectCard
          title={"Pedido"}
          text={
            "Solicita lo que quieras, desde aplicaciones móviles hasta logotipos."
          }
          backgroundgradient={"pink-gradient"}
        />
        <TileEffectCard
          title={"Recibir"}
          text={"Receive your design within two business days on average."}
          backgroundgradient={"green-gradient"}
        />
      </div>
    </section>
  );
};

export default Formas;
