import React from "react";

const Contact = () => {
  return (
    <section className="py-16 sm:py-20 px-5 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 js-glitch">
          ¿LISTO PARA CONSTRUIR?
        </h2>
        <p className="text-xl sm:text-2xl font-semibold mb-10">
          CREEMOS ALGO SIN COMPROMISOS
        </p>
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 justify-center">
          <div className="border-4 border-white bg-black p-8">
            <h3
              className="text-xl sm:text-2xl font-extrabold tracking-tight mb-3"
              style={{ color: "#B26CFF" }}
            >
              CORREO
            </h3>
            <p className="text-base sm:text-lg font-semibold select-all">
              HELLO@BRUTAL.DEV
            </p>
          </div>
          <div
            className="border-4 border-white p-8 text-black"
            style={{ backgroundColor: "#B26CFF" }}
          >
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-3 flex items-center justify-center gap-2">
              AGENDAR
              {/* Lucide: calendar */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 -mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
              </svg>
            </h3>
            <p className="text-base sm:text-lg font-semibold">
              RESERVAR UNA LLAMADA
            </p>
          </div>
        </div>
      </div>
    </section>

    // <section
    //   id="contact"
    //   className="max-w-7xl sm:px-6 sm:py-16 scroll-mt-20 bg-black/10 rounded-2xl mt-8 mr-auto mb-8 ml-auto pt-12 pr-4 pb-12 pl-4"
    // >
    //   <div className="text-center mb-10">
    //     <p className="text-[11px] sm:text-xs uppercase text-slate-300/80 tracking-widest font-geist">
    //       (05) Cómo funciona
    //     </p>
    //     <h3 className="sm:text-4xl text-3xl font-light text-white tracking-tight font-geist mt-2 mb-4">
    //       Empezar es súper fácil
    //     </h3>
    //     <p className="text-slate-300/80 font-geist max-w-2xl mx-auto">
    //       Sin reuniones eternas, sin propuestas complicadas. Solo 3 pasos para
    //       tener tu proyecto en marcha.
    //     </p>
    //   </div>
    //   {/* Process Steps */}
    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    //     <div className="bg-white/5 rounded-3xl p-6 ring-1 ring-white/10 text-center relative">
    //       <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-orange-500/20">
    //         <span className="font-geist font-medium text-lg text-orange-300">
    //           1
    //         </span>
    //       </div>
    //       <h4 className="text-white font-geist font-medium text-lg mb-2">
    //         Cuéntanos tu idea
    //       </h4>
    //       <p className="text-slate-400 text-sm font-geist">
    //         Completa un formulario simple o agenda una llamada de 15 minutos.
    //         Sin compromisos.
    //       </p>
    //     </div>
    //     <div className="bg-white/5 rounded-3xl p-6 ring-1 ring-white/10 text-center relative">
    //       <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-orange-500/20">
    //         <span className="font-geist font-medium text-lg text-orange-300">
    //           2
    //         </span>
    //       </div>
    //       <h4 className="text-white font-geist font-medium text-lg mb-2">
    //         Elige tu plan
    //       </h4>
    //       <p className="text-slate-400 text-sm font-geist">
    //         Te recomendamos el mejor plan según tu proyecto y objetivos. Precio
    //         fijo, sin sorpresas.
    //       </p>
    //     </div>
    //     <div className="bg-white/5 rounded-3xl p-6 ring-1 ring-white/10 text-center relative">
    //       <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-orange-500/20">
    //         <span className="font-geist font-medium text-lg text-orange-300">
    //           3
    //         </span>
    //       </div>
    //       <h4 className="text-white font-geist font-medium text-lg mb-2">
    //         Empezamos a crear
    //       </h4>
    //       <p className="text-slate-400 text-sm font-geist">
    //         En 48 horas ya estamos trabajando. Actualizaciones constantes y
    //         entregas semanales.
    //       </p>
    //     </div>
    //   </div>
    //   {/* Contact Form */}
    //   <div className="max-w-2xl mx-auto">
    //     <div className="bg-white/5 rounded-3xl p-8 ring-1 ring-white/10">
    //       <h4 className="text-2xl font-light text-white tracking-tight font-geist mb-6 text-center">
    //         ¿Listo para empezar?
    //       </h4>
    //       <form className="space-y-6">
    //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //           <div>
    //             <label
    //               htmlFor="name"
    //               className="block text-sm font-medium text-slate-200 font-geist mb-2"
    //             >
    //               Nombre
    //             </label>
    //             <input
    //               type="text"
    //               id="name"
    //               name="name"
    //               className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition font-geist focus:ring-orange-500/40 focus:border-orange-500/40"
    //               placeholder="Tu nombre"
    //             />
    //           </div>
    //           <div>
    //             <label
    //               htmlFor="email"
    //               className="block text-sm font-medium text-slate-200 font-geist mb-2"
    //             >
    //               Email
    //             </label>
    //             <input
    //               type="email"
    //               id="email"
    //               name="email"
    //               className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition font-geist focus:ring-orange-500/40 focus:border-orange-500/40"
    //               placeholder="tu@email.com"
    //             />
    //           </div>
    //         </div>
    //         <div>
    //           <label
    //             htmlFor="project_type"
    //             className="block text-sm font-medium text-slate-200 font-geist mb-2"
    //           >
    //             Tipo de proyecto
    //           </label>
    //           <select
    //             id="project_type"
    //             name="project_type"
    //             className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 transition font-geist focus:ring-orange-500/40 focus:border-orange-500/40"
    //           >
    //             <option value="">Selecciona una opción</option>
    //             <option value="website">Sitio web corporativo</option>
    //             <option value="ecommerce">Tienda online</option>
    //             <option value="app">Aplicación web</option>
    //             <option value="redesign">Rediseño existente</option>
    //             <option value="other">Otro</option>
    //           </select>
    //         </div>
    //         <div>
    //           <label
    //             htmlFor="budget"
    //             className="block text-sm font-medium text-slate-200 font-geist mb-2"
    //           >
    //             Presupuesto aproximado
    //           </label>
    //           <select
    //             id="budget"
    //             name="budget"
    //             className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 transition font-geist focus:ring-orange-500/40 focus:border-orange-500/40"
    //           >
    //             <option value="">Selecciona un rango</option>
    //             <option value="under-1k">Menos de $1,000</option>
    //             <option value="1k-3k">$1,000 - $3,000</option>
    //             <option value="3k-5k">$3,000 - $5,000</option>
    //             <option value="5k-10k">$5,000 - $10,000</option>
    //             <option value="10k-plus">$10,000+</option>
    //           </select>
    //         </div>
    //         <div>
    //           <label
    //             htmlFor="message"
    //             className="block text-sm font-medium text-slate-200 font-geist mb-2"
    //           >
    //             Cuéntanos más sobre tu proyecto
    //           </label>
    //           <textarea
    //             id="message"
    //             name="message"
    //             rows={4}
    //             className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition font-geist resize-none focus:ring-orange-500/40 focus:border-orange-500/40"
    //             placeholder="Describe tu proyecto, objetivos, timeline, etc."
    //             defaultValue={""}
    //           />
    //         </div>
    //         <button
    //           type="submit"
    //           className="w-full text-white font-medium py-4 px-6 rounded-xl transition duration-200 font-geist flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400"
    //         >
    //           Enviar propuesta gratuita
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width={18}
    //             height={18}
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="1.5"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             className="h-4 w-4"
    //           >
    //             <path d="M14.536 21.686a.5.5 0 0 0 .937-.24l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
    //             <path d="m21.854 2.147-10.94 10.939" />
    //           </svg>
    //         </button>
    //       </form>
    //       <div className="mt-8 pt-8 border-t border-white/10">
    //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
    //           <div>
    //             <h5 className="text-white font-geist font-medium mb-2">
    //               ¿Prefieres hablar directo?
    //             </h5>
    //             <p className="text-slate-400 text-sm font-geist mb-3">
    //               Agenda una llamada de 15 minutos, sin compromisos.
    //             </p>
    //             <a
    //               href="#"
    //               className="inline-flex items-center gap-2 transition font-geist text-sm text-orange-300 hover:text-orange-200"
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width={16}
    //                 height={16}
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 strokeWidth="1.5"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 className="h-4 w-4"
    //               >
    //                 <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    //               </svg>
    //               Agendar llamada
    //             </a>
    //           </div>
    //           <div>
    //             <h5 className="text-white font-geist font-medium mb-2">
    //               Respuesta garantizada
    //             </h5>
    //             <p className="text-slate-400 text-sm font-geist mb-3">
    //               Te respondemos en menos de 24 horas, incluso fines de semana.
    //             </p>
    //             <div className="flex items-center justify-center md:justify-start gap-2">
    //               <div className="w-2 h-2 rounded-full animate-pulse bg-orange-400" />
    //               <span className="text-slate-300 text-sm font-geist">
    //                 Online ahora
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Contact;
