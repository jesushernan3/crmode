import React from "react";
import AccordionMenu from "../components/ui/AccordionMenu";
import PreguntasFrecuentes from "../data/PreguntasFrecuentas";

const FAQ = () => {
  // const preguntas = PreguntasFrecuentes.map((preguntas) => {
  //   return (
  //     <AccordionMenu
  //       id={preguntas.id}
  //       title={preguntas.title}
  //       answer={preguntas.answer}
  //     />
  //   );
  // });
  return (
    <section
      id="faq"
      className="py-16 sm:py-20 px-5 sm:px-8 border-t-4 border-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-5xl sm:text-6xl font-extrabold tracking-tight text-center mb-12 sm:mb-16 js-glitch"
          style={{ transform: "translate(0px)" }}
        >
          PREGUNTAS FRECUENTES
        </h2>
        <div className="space-y-4">
          {/* Item 1 */}
          <div className="border-4 border-white bg-black">
            <button
              id="faq-btn-1"
              className="w-full p-6 sm:p-8 flex items-start justify-between gap-6 text-left"
              aria-expanded="false"
              aria-controls="faq-panel-1"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  ¿Cómo funciona la suscripción?
                </h3>
                <p className="text-sm sm:text-base font-semibold opacity-70 mt-1">
                  Un precio mensual claro. Pausa o cancela en cualquier momento.
                </p>
              </div>
              {/* Lucide: chevron-down */}
              <svg
                className="js-accordion-icon w-6 h-6 shrink-0 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{ transition: "transform .2s ease" }}
              >
                <path
                  d="M6 9l6 6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              id="faq-panel-1"
              role="region"
              aria-labelledby="faq-btn-1"
              className="px-6 sm:px-8 pb-6 sm:pb-8"
              style={{
                maxHeight: 0,
                overflow: "hidden",
                transition: "max-height .3s ease, opacity .2s ease",
                opacity: ".8",
              }}
            >
              <p className="text-base sm:text-lg font-semibold">
                Suscríbete para empezar a enviar solicitudes de inmediato.
                Trabajaremos en ellas según el ritmo del plan que elijas. Puedes
                pausar cuando te convenga o cancelar en cualquier momento sin
                penalizaciones.
              </p>
            </div>
          </div>
          {/* Item 2 */}
          <div className="border-4 border-white bg-black">
            <button
              id="faq-btn-2"
              className="w-full p-6 sm:p-8 flex items-start justify-between gap-6 text-left"
              aria-expanded="false"
              aria-controls="faq-panel-2"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  ¿Cuál es el tiempo de entrega típico?
                </h3>
                <p className="text-sm sm:text-base font-semibold opacity-70 mt-1">
                  Depende del alcance y la complejidad.
                </p>
              </div>
              {/* Lucide: chevron-down */}
              <svg
                className="js-accordion-icon w-6 h-6 shrink-0 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{ transition: "transform .2s ease" }}
              >
                <path
                  d="M6 9l6 6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              id="faq-panel-2"
              role="region"
              aria-labelledby="faq-btn-2"
              className="px-6 sm:px-8 pb-6 sm:pb-8"
              style={{
                maxHeight: 0,
                overflow: "hidden",
                transition: "max-height .3s ease, opacity .2s ease",
                opacity: ".8",
              }}
            >
              <p className="text-base sm:text-lg font-semibold">
                Las actualizaciones pequeñas llegan en 1–3 días. Las funciones
                grandes, páginas o trabajo de marca suelen entregarse
                semanalmente por lotes, alineados con el ritmo de tu plan.
              </p>
            </div>
          </div>
          {/* Item 3 */}
          <div className="border-4 border-white bg-black">
            <button
              id="faq-btn-3"
              className="w-full p-6 sm:p-8 flex items-start justify-between gap-6 text-left"
              aria-expanded="false"
              aria-controls="faq-panel-3"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  ¿Qué puedo solicitar?
                </h3>
                <p className="text-sm sm:text-base font-semibold opacity-70 mt-1">
                  Diseño, desarrollo y estrategia.
                </p>
              </div>
              {/* Lucide: chevron-down */}
              <svg
                className="js-accordion-icon w-6 h-6 shrink-0 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{ transition: "transform .2s ease" }}
              >
                <path
                  d="M6 9l6 6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              id="faq-panel-3"
              role="region"
              aria-labelledby="faq-btn-3"
              className="px-6 sm:px-8 pb-6 sm:pb-8"
              style={{
                maxHeight: 0,
                overflow: "hidden",
                transition: "max-height .3s ease, opacity .2s ease",
                opacity: ".8",
              }}
            >
              <p className="text-base sm:text-lg font-semibold">
                Desde landing pages, sistemas de diseño e identidad de marca
                hasta desarrollos front‑end, animaciones, integraciones y
                auditorías. Si es producto o web, está dentro del alcance.
              </p>
            </div>
          </div>
          {/* Item 4 */}
          <div className="border-4 border-white bg-black">
            <button
              id="faq-btn-4"
              className="w-full p-6 sm:p-8 flex items-start justify-between gap-6 text-left"
              aria-expanded="false"
              aria-controls="faq-panel-4"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  ¿Cómo funcionan las pausas y las cancelaciones?
                </h3>
                <p className="text-sm sm:text-base font-semibold opacity-70 mt-1">
                  Sin contratos. Sin letra pequeña.
                </p>
              </div>
              {/* Lucide: chevron-down */}
              <svg
                className="js-accordion-icon w-6 h-6 shrink-0 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{ transition: "transform .2s ease" }}
              >
                <path
                  d="M6 9l6 6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              id="faq-panel-4"
              role="region"
              aria-labelledby="faq-btn-4"
              className="px-6 sm:px-8 pb-6 sm:pb-8"
              style={{
                maxHeight: 0,
                overflow: "hidden",
                transition: "max-height .3s ease, opacity .2s ease",
                opacity: ".8",
              }}
            >
              <p className="text-base sm:text-lg font-semibold">
                Pausa cuando quieras y tu tiempo no utilizado se conserva.
                Cancela cuando termines: tu acceso se mantiene activo hasta el
                final del periodo de facturación actual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
