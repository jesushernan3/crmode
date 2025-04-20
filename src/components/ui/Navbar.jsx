import React from "react";
import Logo from "../../assets/imgs/logos/CrMoDe_Logo-01.png";

const Navbar = () => {
  return (
    <div>
      <div className="bg-[#bea0f2] flex justify-between px-10 py-2">
        <div className="flex gap-3">
          <img src={Logo} alt="logo" className="w-12" />{" "}
          <p className="font-[figtree] font-bold text-base">CrMoDe</p>
        </div>
        <div className="flex gap-4">
          <a href="#portfolio">Muestras</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#precios">Precios</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
