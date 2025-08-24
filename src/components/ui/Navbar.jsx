import React, { useRef } from "react";
import Logo from "../../assets/imgs/logos/CrMoDe_Logo-01.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="shadow-both-sides flex justify-between px-5 py-2">
        <div className="flex gap-3">
          <img src={Logo} alt="logo" className="w-12" />{" "}
          <p className="font-[figtree] font-bold text-base">CrMoDe</p>
        </div>
        <div className="flex gap-4">
          <Link to="portfolio" smooth={true} duration={500}>
            Muestras
          </Link>
          <Link to="nosotros" smooth={true} duration={500}>
            Nosotros
          </Link>
          <Link to="precios" smooth={true} duration={500}>
            Precios
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
