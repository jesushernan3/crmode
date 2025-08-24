import React from "react";

import FAQ from "./FAQ";

export default function PreguntasFrecuentes() {
  return (
    <section className="bg-gradient-to-r from-indigo-300 to-blue-600 h-screen flex">
      <FAQ />
      <div className="basis-1/3">
        <div>imagen</div>
        <div>subtitulo</div>
        <button>call to acction</button>
        <div>prefer email</div>
      </div>
    </section>
  );
}
