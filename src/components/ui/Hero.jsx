import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto h-screen bg-primary grid grid-cols-3 justify-center items-center gap-3 p-5 font-figtree">
      <div className="izquierda col-span-2">
        <h1 className="font-extrabold  text-6xl mb-5 font-figtree">
          Necesitas tres cosas:{" "}
        </h1>
        <ul className="text-3xl">
          <li>1ro. Que cargue rápido</li>
          <li>2do. Que ande</li>
          <li>3ro. Que no se rompa.</li>
        </ul>
      </div>

      <div className="border rounded-2xl m-5 h-full flex flex-col justify-center derecha p-5 bg-linear-to-bl from-violet-500 to-fuchsia-500">
        <h1 className="mx-auto font-cardo text-5xl mb-5">CRMODE</h1>
        <p>
          A veces la cosa más fácil es la más dificl, no complicarsela es un
          requisito hoy en día para logra metas. Simplificar los precesos y
          hacerte la vida menos complicada con el desarrollo, es mi propuesta.
        </p>
        <button
          type="button"
          class="w-full py-3 mt-5 active:scale-95 transition text-sm text-white rounded-full bg-indigo-500"
        >
          <p class="mb-0.5">Como Lograrlo!</p>
        </button>
      </div>
    </div>
  );
};

export default Hero;
