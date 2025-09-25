import React from "react";

const Precios = () => {
  return (
    <section
      id="subscriptions"
      className="py-16 sm:py-20 px-5 sm:px-8 border-t-4 border-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-5xl sm:text-6xl font-extrabold tracking-tight text-center mb-4 js-glitch"
          style={{ transform: "translate(0px)" }}
        >
          SUSCRIPCIONES
        </h2>
        <p className="text-center text-lg sm:text-2xl font-semibold mb-12 sm:mb-16">
          Diseño y desarrollo mensuales productizados — pausa o cancela en
          cualquier momento
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Starter */}
          <div className="border-4 border-white bg-black flex flex-col">
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  BÁSICO
                </h3>
              </div>
              <div className="mb-6">
                <div className="flex items-end gap-2">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                    $2,500
                  </span>
                  <span className="text-base sm:text-lg font-semibold opacity-80">
                    /mes
                  </span>
                </div>
              </div>
              <div className="h-px w-full bg-white/20 mb-6" />
              <ul className="space-y-3 text-base sm:text-lg font-semibold">
                <li className="flex items-center gap-3">
                  {/* Lucide: check */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Una solicitud a la vez
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Entrega semanal
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Soporte por correo electrónico
                </li>
              </ul>
            </div>
            <div className="mt-auto p-6 sm:p-8">
              <button
                className="w-full px-6 py-4 text-lg font-extrabold border-4 border-white text-black"
                style={{ backgroundColor: "#B26CFF" }}
              >
                SUSCRIBIRSE
              </button>
            </div>
          </div>
          {/* Pro */}
          <div
            className="border-4 border-black"
            style={{ backgroundColor: "#B26CFF", color: "#0A0A0A" }}
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  PRO
                </h3>
                <span className="px-2.5 py-1 text-xs font-semibold border-2 border-black">
                  POPULAR
                </span>
              </div>
              <div className="mb-6">
                <div className="flex items-end gap-2">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                    $5,000
                  </span>
                  <span className="text-base sm:text-lg font-semibold opacity-90">
                    /mes
                  </span>
                </div>
              </div>
              <div
                className="h-px w-full"
                style={{ backgroundColor: "rgba(10,10,10,0.2)" }}
              />
              <ul className="space-y-3 text-base sm:text-lg font-semibold mt-6">
                <li className="flex items-center gap-3">
                  {/* Lucide: check */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Dos solicitudes en paralelo
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Entrega dos veces por semana
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Soporte prioritario
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Llamada de estrategia mensual
                </li>
              </ul>
            </div>
            <div className="p-6 sm:p-8">
              <button className="w-full px-6 py-4 text-lg font-extrabold border-4 border-black text-white bg-black">
                SUSCRIBIRSE
              </button>
            </div>
          </div>
          {/* Enterprise */}
          <div className="border-4 border-white bg-black flex flex-col">
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  EMPRESA
                </h3>
              </div>
              <div className="mb-6">
                <div className="flex items-end gap-2">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                    Personalizado
                  </span>
                  <span className="text-base sm:text-lg font-semibold opacity-80">
                    /mes
                  </span>
                </div>
              </div>
              <div className="h-px w-full bg-white/20 mb-6" />
              <ul className="space-y-3 text-base sm:text-lg font-semibold">
                <li className="flex items-center gap-3">
                  {/* Lucide: check */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Solicitudes ilimitadas
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Entrega diaria
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Canal de Slack compartido
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Equipo dedicado
                </li>
              </ul>
            </div>
            <div className="mt-auto p-6 sm:p-8">
              <button
                className="w-full px-6 py-4 text-lg font-extrabold border-4 border-white bg-black hover:bg-white hover:text-black transition"
                style={{ color: "#B26CFF" }}
              >
                CONTACTAR A VENTAS
              </button>
            </div>
          </div>
        </div>
        <p className="text-center text-sm sm:text-base font-semibold mt-6 opacity-70">
          Sin contratos. Cancela en cualquier momento. El tiempo no utilizado se
          conserva cuando pauses.
        </p>
      </div>
    </section>
  );
};

export default Precios;

{
  /* <div class="max-w-80 overflow-hidden rounded-lg shadow">
  <div class="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 text-white">
    <h3 class="text-xl font-bold">Premium</h3>
    <div class="mt-4 flex items-baseline">
      <span class="text-4xl font-bold">$49</span>
      <span class="ml-1">/month</span>
    </div>
  </div>
  <div class="bg-white p-6">
    <p class="mb-6 text-gray-600">
      Everything you need for advanced projects and teams.
    </p>
    <ul class="mb-6 space-y-1 text-sm text-gray-500">
      <li class="flex items-start">
        <svg
          class="mt-0.5 mr-2 h-5 w-5 text-purple-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span>Unlimited everything</span>
      </li>
      <li class="flex items-start">
        <svg
          class="mt-0.5 mr-2 h-5 w-5 text-purple-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span>24/7 support</span>
      </li>
      <li class="flex items-start">
        <svg
          class="mt-0.5 mr-2 h-5 w-5 text-purple-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span>Advanced analytics</span>
      </li>
      <li class="flex items-start">
        <svg
          class="mt-0.5 mr-2 h-5 w-5 text-purple-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span>Custom integrations</span>
      </li>
      <li class="flex items-start">
        <svg
          class="mt-0.5 mr-2 h-5 w-5 text-purple-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span>Service level agreement</span>
      </li>
      <li class="flex items-start">
        <svg
          class="mt-0.5 mr-2 h-5 w-5 text-purple-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span>Dedicated account manager</span>
      </li>
    </ul>
    <button class="w-full rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 px-4 py-2 text-sm text-white transition-opacity hover:opacity-90">
      Get Premium
    </button>
  </div>
</div>; */
}
