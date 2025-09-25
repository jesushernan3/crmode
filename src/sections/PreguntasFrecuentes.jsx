import React from "react";
import FAQ from "./FAQ";

export default function PreguntasFrecuentes() {
  return (
    <section>
      <h2 className="max-w-[670px] p-10 text-center text-6xl">
        Preguntas <span className="font-ephesis">Frecuentes</span>
      </h2>

      <div className="flex">
        <FAQ />
        <div className="basis-1/3 ring-2 ring-blue-500 bg-radial/longer from-slate-500 to-blue-400 rounded-xl max-h-92 p-6 flex flex-col justify-between">
          <div>imagen</div>
          <div>
            <h3 className="text-5xl text-white uppercase">
              agenda una llamada de 15min.
            </h3>
          </div>
          <button className="bg-white text-xl p-3 rounded-md">
            agendar llamada
          </button>
          <div>
            <div className="">
              mejor email? <br />
              <span>hola@crmode.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
