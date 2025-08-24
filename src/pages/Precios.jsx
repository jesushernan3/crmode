import React from "react";

const Precios = () => {
  return (
    <section id="precios" className="min-h-[600px]">
      <h2 className="max-w-[670px] p-10 text-center text-6xl">
        Una Subscripción,{" "}
        <span className="font-ephesis">Infinitas Posibilidades</span>
      </h2>

      <div className="flex justify-between">
        <div className="basis-1/3">
          <div className="border rounded-2xl  w-full h-full flex flex-col justify-center derecha mr-10 p-8 bg-white">
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
            <p>
              Simplifica todo, una subscripción, sin contratos, ni quilombos
            </p>
            <button
              type="button"
              class="w-full py-3 mt-5 active:scale-95 transition text-sm text-gray rounded-lg bg-white"
            >
              <p class="mb-0.5">Ver precios</p>
            </button>
          </div>
        </div>
        <div className="basis-2/3">
          <div className="ml-5 bg-black text-white rounded-2xl p-10">
            <div className="flex justify-between p-10 m-10 border-b-2 border-dotted">
              <div>
                <p className="text-3xl">Club Mensual</p>
              </div>
              <div className="flex items-center text-gray-600 px-5 py-2 border-gray-600 border-1 rounded-sm text-sm">
                <p>cancela cuando quieras</p>
              </div>
            </div>
            <div>
              <p>
                <span className="text-8xl">u$499</span>/mes
              </p>
            </div>
            <div
              id="precio-caja-incluye"
              className="dark-gray-gradient rounded-sm p-5 flex justify-between text-sm inset-ring mt-3"
            >
              <div className="caja-izquierda">
                <ul>
                  <li>Una solicitud a la vez</li>
                  <li>Entrega promedio en 48 horas</li>
                  <li>Marcas ilimitadas</li>
                </ul>
              </div>
              <div className="caja-derecha">
                <ul>
                  <li>Fotos de archivo ilimitadas</li>
                  <li>Pausa o cancela en cualquier momento</li>
                  <li>Opcion 3</li>
                  <li>Opcion 4</li>
                </ul>
              </div>
            </div>
            <button className="dark-gray-gradient p-3 mt-5 rounded-sm">
              Comienza hoy!
            </button>
          </div>
        </div>
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
