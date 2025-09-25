import React from "react";
// import Lottie from "./Lottie";

const Hero = () => {
  return (
    // ...::: HERO SECTION :::...
    <section className="min-h-[88vh] flex relative items-center justify-center">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
        <h1 className="leading-none mb-8">
          <span
            className="block text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tight js-glitch"
            style={{ transform: "translate(0px)" }}
          >
            SIN
          </span>
          <span
            className="block text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tight js-glitch"
            style={{ color: "rgb(178, 108, 255)", transform: "translate(0px)" }}
          >
            ADORNOS
          </span>
          <span
            className="block text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tight js-glitch"
            style={{ transform: "translate(0px)" }}
          >
            DISEÑO
          </span>
        </h1>
        {/* Typewriter */}
        <div className="mx-auto max-w-3xl mb-12">
          <div
            className="inline-block text-2xl sm:text-3xl font-semibold tracking-tight js-typewriter"
            style={{
              borderRight: "4px solid #B26CFF",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-10 sm:px-12 py-5 sm:py-6 text-lg sm:text-xl font-extrabold border-4 border-white text-black transition flex items-center justify-center gap-3"
            style={{ backgroundColor: "#B26CFF" }}
          >
            VER TRABAJOS
            {/* Lucide: arrow-up-right */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </button>
          <button
            className="px-10 sm:px-12 py-5 sm:py-6 text-lg sm:text-xl font-extrabold border-4 border-white bg-black transition hover:bg-white hover:text-black flex items-center justify-center gap-3"
            style={{ color: "#B26CFF" }}
          >
            CONTRÁTAME
            {/* Lucide: bolt */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
            </svg>
          </button>
        </div>
      </div>
      {/* Floating brutal bits */}
      <div
        className="absolute top-1/4 left-[18%] w-4 h-4 js-flash"
        style={{ backgroundColor: "#B26CFF" }}
      />
      <div className="absolute top-3/4 right-[22%] w-6 h-6 bg-white" />
      <div
        className="absolute top-1/2 right-[30%] w-2 h-2 js-flash"
        style={{ backgroundColor: "#B26CFF" }}
      />
    </section>
  );
};

export default Hero;
