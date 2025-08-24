import React from "react";
// import Lottie from "./Lottie";

const Hero = () => {
  return (
    <div
      id="hero"
      className="mx-10 min-h-screen grid grid-cols-3 justify-center items-center gap-3 p-5 font-figtree"
    >
      <div className="izquierda col-span-2">
        <h1 className="font-extrabold  text-4xl mb-5 font-figtree">
          Necesitas tres cosas:{" "}
        </h1>
        <ul className="text-6xl">
          <li>1ro. Que cargue rápido</li>
          <li>2do. Que ande</li>
          <li>3ro. Que no se rompa.</li>
        </ul>
      </div>

      <div className="border rounded-2xl  w-full h-full flex flex-col justify-center derecha p-8 bg-linear-to-bl from-violet-500 to-fuchsia-500">
        <div className="">
          <span className="bg-black text-white px-4 py-2 rounded-3xl">
            • comienza hoy
          </span>
        </div>
        <h1 className="mt-20 font-bold text-5xl mb-5">
          <span className="font-cardo text-3xl">Unite a...</span>
          <br />
          CRMODE
        </h1>
        <p>Simplifica todo, una subscripción, sin contratos, ni quilombos</p>
        <button
          type="button"
          class="w-full py-3 mt-5 active:scale-95 transition text-sm text-gray rounded-lg bg-white"
        >
          <p class="mb-0.5">Ver precios</p>
        </button>
      </div>
      <div>{/* <Lottie /> */}</div>
    </div>
  );
};

export default Hero;
