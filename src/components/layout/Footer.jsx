import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-gray-800 min-h-25 text-white">
      <div className="basis-2/3 bg-amber-300">
        <img src="https://picsum.photos/200/300" alt="image" />
        <h2>
          Vea si Designjoy es la opción adecuada para usted (totalmente lo es)
        </h2>
        <p>
          Programe una visita guiada rápida de 15 minutos a través de Designjoy.
        </p>
        <img src="https://picsum.photos/400/300" alt="" />
        <ul className="text-sm flex justify-between">
          <li>Headquartered in Villa Yacanto de Calamuchita, Cordoba</li>
          <li>Terminos del Servicio</li>
          <li>Política de pricavidad</li>
        </ul>
      </div>
      <div className="basis-1/3 bg-indigo-500">derecha</div>
    </div>
  );
};

export default Footer;
