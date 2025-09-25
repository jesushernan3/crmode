export default function Habilidades() {
  return (
    <section
      className="py-16 sm:py-20 px-5 sm:px-8"
      style={{ backgroundColor: "#B26CFF", color: "#0A0A0A" }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-center mb-12 sm:mb-16">
          CAPACIDADES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="border-4 border-black bg-black text-white p-6 sm:p-8">
            <h3
              className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-5 flex items-center gap-3"
              style={{ color: "#B26CFF" }}
            >
              {/* Lucide: layout-dashboard */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 -mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 3h7v7H3zM14 3h7v4h-7zM14 9h7v12h-7zM3 12h7v9H3z" />
              </svg>
              DISEÑO
            </h3>
            <ul className="space-y-2.5 text-base sm:text-lg font-semibold">
              <li>UI/UX BRUTALISTA</li>
              <li>SISTEMAS DE IDENTIDAD</li>
              <li>DISEÑOS EXPERIMENTALES</li>
              <li>GRÁFICOS EN MOVIMIENTO</li>
            </ul>
          </div>
          <div className="border-4 border-black bg-black text-white p-6 sm:p-8">
            <h3
              className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-5 flex items-center gap-3"
              style={{ color: "#B26CFF" }}
            >
              {/* Lucide: code-2 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 -mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M18 16l4-4-4-4M6 8l-4 4 4 4M14 4l-4 16" />
              </svg>
              DESARROLLO
            </h3>
            <ul className="space-y-2.5 text-base sm:text-lg font-semibold">
              <li>REACT / NEXT.JS</li>
              <li>INTEGRACIÓN WEB3</li>
              <li>ANIMACIONES A MEDIDA</li>
              <li>OPTIMIZACIÓN DE RENDIMIENTO</li>
            </ul>
          </div>
          <div className="border-4 border-black bg-black text-white p-6 sm:p-8">
            <h3
              className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-5 flex items-center gap-3"
              style={{ color: "#B26CFF" }}
            >
              {/* Lucide: compass */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 -mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm3.5 6.5l-2 6-6 2 2-6 6-2z" />
              </svg>
              ESTRATEGIA
            </h3>
            <ul className="space-y-2.5 text-base sm:text-lg font-semibold">
              <li>POSICIONAMIENTO DE MARCA</li>
              <li>INVESTIGACIÓN DE USUARIO</li>
              <li>TRANSFORMACIÓN DIGITAL</li>
              <li>CRECIMIENTO ACELERADO</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
