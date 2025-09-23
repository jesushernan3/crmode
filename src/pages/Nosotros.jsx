import React from "react";

const Nosotros = () => {
  return (
    <section
      id="about"
      className="max-w-7xl sm:px-6 sm:py-16 scroll-mt-20 bg-black/10 rounded-2xl mt-8 mr-auto mb-8 ml-auto pt-12 pr-4 pb-12 pl-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: About Content */}
        <div className="lg:col-span-8">
          <p className="text-[11px] sm:text-xs uppercase text-slate-300/80 tracking-widest font-geist">
            (02) Sobre mi
          </p>
          <h3 className="sm:text-4xl text-3xl font-light text-white tracking-tight font-geist mt-2 mb-6">
            Desarrollamos tu presencia digital completa
          </h3>
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300/90 font-geist text-base mb-4">
              No somos una agencia tradicional. Somos tu equipo de desarrollo en
              la nube - siempre disponible, sin contratos complicados, sin
              sorpresas desagradables.
            </p>
            <p className="text-slate-300/90 font-geist text-base mb-6">
              Creamos sitios web, tiendas online, aplicaciones y sistemas que
              realmente funcionan para tu negocio. Todo con una suscripción
              simple y transparente.
            </p>
          </div>
          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/5 rounded-2xl p-4 ring-1 ring-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 mb-2 text-orange-300"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <h4 className="text-white font-geist font-medium text-sm mb-1">
                Diseño Web
              </h4>
              <p className="text-slate-400 text-xs font-geist">
                UI/UX moderno y conversion optimizada
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-4 ring-1 ring-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 mb-2 text-orange-300"
              >
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x={8} y={2} width={8} height={4} rx={1} ry={1} />
              </svg>
              <h4 className="text-white font-geist font-medium text-sm mb-1">
                E-commerce
              </h4>
              <p className="text-slate-400 text-xs font-geist">
                Tiendas online que venden 24/7
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-4 ring-1 ring-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 mb-2 text-orange-300"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
                <line x1={12} y1="22.08" x2={12} y2={12} />
              </svg>
              <h4 className="text-white font-geist font-medium text-sm mb-1">
                Aplicaciones
              </h4>
              <p className="text-slate-400 text-xs font-geist">
                Web apps y MVPs escalables
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-4 ring-1 ring-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 mb-2 text-orange-300"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1={3} y1={6} x2={21} y2={6} />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <h4 className="text-white font-geist font-medium text-sm mb-1">
                Branding
              </h4>
              <p className="text-slate-400 text-xs font-geist">
                Identidad visual coherente
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-4 ring-1 ring-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 mb-2 text-orange-300"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              <h4 className="text-white font-geist font-medium text-sm mb-1">
                SEO &amp; Marketing
              </h4>
              <p className="text-slate-400 text-xs font-geist">
                Visibilidad y tráfico orgánico
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-4 ring-1 ring-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 mb-2 text-orange-300"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <h4 className="text-white font-geist font-medium text-sm mb-1">
                Mantenimiento
              </h4>
              <p className="text-slate-400 text-xs font-geist">
                Actualizaciones y soporte continuo
              </p>
            </div>
          </div>
        </div>
        {/* Right: Stats & Team */}
        <div className="lg:col-span-4">
          <div className="bg-white/5 rounded-3xl p-6 ring-1 ring-white/10 mb-6">
            <h4 className="text-white font-geist font-medium text-lg mb-4">
              Por qué elegir CRMODE
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-orange-500/20">
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
                    className="h-4 w-4 text-orange-300"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-geist text-sm font-medium">
                    Sin sorpresas
                  </p>
                  <p className="text-slate-400 text-xs font-geist">
                    Precio fijo mensual, sin costos ocultos
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-orange-500/20">
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
                    className="h-4 w-4 text-orange-300"
                  >
                    <path d="M12 6v6l4 2" />
                    <circle cx={12} cy={12} r={10} />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-geist text-sm font-medium">
                    Entregas rápidas
                  </p>
                  <p className="text-slate-400 text-xs font-geist">
                    Primeras versiones en 1-2 semanas
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-orange-500/20">
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
                    className="h-4 w-4 text-orange-300"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="m19 8 2 2-2 2" />
                    <path d="m17 12h4" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-geist text-sm font-medium">
                    Escalabilidad
                  </p>
                  <p className="text-slate-400 text-xs font-geist">
                    Crece con tu negocio sin problemas
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-2xl p-4 ring-1 ring-white/10 text-center">
              <div className="text-2xl font-light text-white font-geist mb-1">
                50+
              </div>
              <div className="text-xs text-slate-400 font-geist">
                Proyectos completados
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-4 ring-1 ring-white/10 text-center">
              <div className="text-2xl font-light text-white font-geist mb-1">
                98%
              </div>
              <div className="text-xs text-slate-400 font-geist">
                Satisfacción cliente
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
