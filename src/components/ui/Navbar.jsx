import React, { useRef } from "react";
import Logo from "../../assets/imgs/logos/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <button
        className="px-4 py-2 text-lg font-semibold border-2 border-white hover:bg-white hover:text-black transition js-glitch tracking-tight"
        style={{ transform: "translate(0px)" }}
      >
        TRABAJOS
      </button>
      <button className="px-4 py-2 text-lg font-semibold border-2 border-white hover:bg-white hover:text-black transition js-glitch tracking-tight">
        INFORMACIÓN
      </button>
      <button
        className="px-4 py-2 text-lg font-semibold border-2 border-white hover:bg-white hover:text-black transition js-glitch tracking-tight"
        style={{ transform: "translate(0px)" }}
      >
        CONTACTO
      </button>
    </nav>
    // <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200/90">
    //   <Link
    //     href="#capabilities"
    //     data-nav-link=""
    //     class="relative transition hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-white/90 after:transition-all after:duration-300 hover:after:w-full font-geist"
    //   >
    //     trabajos
    //   </Link>
    //   <Link
    //     href="#about"
    //     data-nav-link=""
    //     class="relative transition hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-white/90 after:transition-all after:duration-300 hover:after:w-full font-geist"
    //   >
    //     sobre mi
    //   </Link>
    //   <Link
    //     href="#contact"
    //     data-nav-link=""
    //     class="relative transition hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-white/90 after:transition-all after:duration-300 hover:after:w-full font-geist"
    //   >
    //     como funciona
    //   </Link>
    //   {/* <div className="flex justify-center items-center px-5 py-2">
    //     <div className="nav-left flex gap-4 text-2xl">
    //       <Link to="subcripcion" smooth={true} duration={500}>
    //         Subscripción
    //       </Link>
    //     </div>

    //     <div className="logo flex mx-10">
    //       <img src={Logo} alt="logo" className="w-22" />{" "}
    //     </div>

    //     <div className="nav-right  text-2xl text-right">
    //       <Link to="precios" smooth={true} duration={500}>
    //         Soluciones
    //       </Link>
    //     </div>

    //   </div> */}
    // </nav>
  );
};

export default Navbar;
