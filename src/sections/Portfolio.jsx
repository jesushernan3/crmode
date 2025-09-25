import React from "react";

const Portfolio = () => {
  return (
    <section className="py-16 sm:py-20 px-5 sm:px-8">
      <h2
        className="text-5xl sm:text-6xl font-extrabold tracking-tight text-center mb-12 sm:mb-16 js-glitch"
        style={{ transform: "translate(0px)" }}
      >
        TRABAJOS SELECCIONADOS
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Card 1 */}
        <div className="group border-4 border-white bg-black transition cursor-pointer hover:bg-white hover:text-black">
          <div className="p-6 sm:p-8">
            <div className="w-full h-56 sm:h-64 bg-white mb-6 flex items-center justify-center">
              <div
                className="text-5xl sm:text-6xl font-extrabold group-hover:text-black"
                style={{ color: "#B26CFF" }}
              >
                01
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              EXCHANGE CRIPTO
            </h3>
            <p className="text-base sm:text-lg font-semibold">
              WEB3 / FINTECH / UX BRUTAL
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="group border-4 border-white bg-black transition cursor-pointer hover:bg-white hover:text-black">
          <div className="p-6 sm:p-8">
            <div
              className="w-full h-56 sm:h-64 mb-6 flex items-center justify-center"
              style={{ backgroundColor: "#B26CFF" }}
            >
              <div className="text-5xl sm:text-6xl font-extrabold text-black">
                02
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              STARTUP TECNOLÓGICA
            </h3>
            <p className="text-base sm:text-lg font-semibold">
              MARCA / IDENTIDAD / HARDCORE
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="group border-4 border-white bg-black transition cursor-pointer hover:bg-white hover:text-black">
          <div className="p-6 sm:p-8">
            <div className="w-full h-56 sm:h-64 bg-white mb-6 flex items-center justify-center">
              <div
                className="text-5xl sm:text-6xl font-extrabold group-hover:text-black"
                style={{ color: "#B26CFF" }}
              >
                03
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              AGENCIA CREATIVA
            </h3>
            <p className="text-base sm:text-lg font-semibold">
              WEB / ANIMACIÓN / EXTREMO
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="group border-4 border-white bg-black transition cursor-pointer hover:bg-white hover:text-black">
          <div className="p-6 sm:p-8">
            <div
              className="w-full h-56 sm:h-64 mb-6 flex items-center justify-center"
              style={{ backgroundColor: "#B26CFF" }}
            >
              <div className="text-5xl sm:text-6xl font-extrabold text-black">
                04
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              PLATAFORMA NFT
            </h3>
            <p className="text-base sm:text-lg font-semibold">
              BLOCKCHAIN / UI / SIN FILTRO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
