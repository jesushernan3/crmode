import React from "react";
// import Lottie from "./Lottie";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 scroll-mt-24 mt-10 items-end"
    >
      {/* Left: Copy */}
      <div className="lg:col-span-7 xl:col-span-8 relative z-10">
        <div className="max-w-2xl lg:max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[0.95]">
            <span
              className="block font-light text-white tracking-tighter font-geist"
              style={{
                animation: "fadeUp .7s ease-out both",
                animationDelay: ".05s",
                willChange: "opacity, transform",
                filter: "blur(0)",
              }}
            >
              webs
            </span>
            <span
              className="block font-light text-white/70 tracking-tighter font-geist"
              style={{
                animation: "fadeUp .7s ease-out both",
                animationDelay: ".15s",
                willChange: "opacity, transform",
              }}
            >
              sin DRAMA
            </span>
            <span
              className="block bg-clip-text font-light text-transparent tracking-tighter font-geist bg-gradient-to-b from-white to-white/70"
              style={{
                animation: "fadeUp .7s ease-out both",
                animationDelay: ".25s",
                willChange: "opacity, transform",
              }}
            >
              sin contratos, ni sorpresas
            </span>
          </h1>
          <p
            className="sm:text-lg text-base text-slate-200/90 font-geist mt-6"
            style={{
              animation: "fadeUp .7s ease-out both",
              animationDelay: ".35s",
              willChange: "opacity, transform",
            }}
          >
            La única suscripción que hace crecer tu negocio (sin spoilers)
          </p>
          <div className="flex flex-wrap gap-3 mt-6 items-center">
            <div
              className="inline-flex gap-1.5 ring-1 ring-white/15 shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] transition-all duration-300 bg-black/30 rounded-full pt-1 pr-2.5 pb-1 pl-2.5 items-center"
              style={{
                animation: "fadeUp .7s ease-out both",
                animationDelay: ".45s",
                willChange: "opacity, transform",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="trending-up"
                className="lucide lucide-trending-up h-3.5 w-3.5 text-orange-300"
              >
                <path d="M16 7h6v6" className="" />
                <path d="m22 7-8.5 8.5-5-5L2 17" />
              </svg>
              <span className="text-white font-medium font-geist text-xs">
                +23% avg. activation lift
              </span>
            </div>
            <div
              className="inline-flex gap-1.5 ring-1 ring-white/15 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 bg-black/30 rounded-full pt-1 pr-2.5 pb-1 pl-2.5 items-center"
              style={{
                animation: "fadeUp .7s ease-out both",
                animationDelay: ".55s",
                willChange: "opacity, transform",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="map-pin"
                className="lucide lucide-map-pin h-3.5 w-3.5 text-orange-300"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx={12} cy={10} r={3} />
              </svg>
              <span className="text-slate-100 font-geist text-xs">
                Monserrat, CABA, Argentina • Remote-friendly
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Copy */}
      <div className="lg:col-span-5 xl:col-span-4 relative z-10">
        <div
          className="relative sm:p-6 lg:p-7 ring-1 ring-white/10 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] h-full bg-slate-900/70 rounded-3xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-xl"
          style={{
            animation: "fadeUp .75s ease-out both",
            animationDelay: ".65s",
            willChange: "opacity, transform",
          }}
        >
          <h3
            className="sm:text-2xl text-xl font-light text-white tracking-tighter font-geist"
            style={{}}
          >
            Availability &amp; Contact
          </h3>
          <p className="text-sm text-slate-300/80 font-geist mt-1">
            Booking limited projects each quarter. Replies within 24h.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-3"></div>
          <div className="flex mt-6 items-end justify-between">
            <div className="">
              <div
                className="text-xl text-white tracking-tighter font-geist font-light"
                style={{}}
              >
                From S$900
                <span className="text-sm font-medium text-slate-300 font-geist">
                  {" "}
                  / day
                </span>
              </div>
              <div className="text-[10px] text-slate-400/80 font-geist">
                Projects &amp; retainers available
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex gap-2 hover:bg-white/90 transition font-medium text-slate-900 bg-white rounded-full pt-2 pr-4 pb-2 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] items-center text-sm font-geist"
            >
              Start a project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="arrow-right"
                className="lucide lucide-arrow-right h-3.5 w-3.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="izquierda col-span-2">
        <h1 className="font-extrabold  text-4xl mb-5 font-figtree">
          Necesitas tres cosas:{" "}
        </h1>
        <ul className="text-6xl">
          <li>1ro. Que cargue rápido</li>
          <li>2do. Que ande</li>
          <li>3ro. Que no se rompa.</li>
        </ul>
      </div> */}

      {/* <div className="border rounded-2xl  w-full h-full flex flex-col justify-center derecha p-8 bg-linear-to-bl from-violet-500 to-fuchsia-500">
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
      </div> */}
      <div>{/* <Lottie /> */}</div>
    </div>
  );
};

export default Hero;
