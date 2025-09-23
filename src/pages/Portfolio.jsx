import React from "react";

const Portfolio = () => {
  return (
    <section
      id="work"
      className="max-w-7xl sm:px-6 sm:py-16 scroll-mt-20 bg-black/10 rounded-2xl mt-8 mr-auto mb-8 ml-auto pt-12 pr-4 pb-12 pl-4"
    >
      <div className="flex items-end justify-between mb-6 sm:mb-10">
        <div className="">
          <p className="text-[11px] sm:text-xs uppercase text-slate-300/80 tracking-widest font-geist">
            (03) Trabajos Selecionados
          </p>
          <h3
            className="sm:text-4xl text-3xl font-light text-white tracking-tight font-geist mt-2"
            style={{}}
          >
            Desarrollos que estamos orgullos
          </h3>
        </div>
        <a
          href="#"
          className="hidden sm:inline-flex items-center gap-2 ring-1 ring-white/15 hover:bg-white/15 transition text-sm text-slate-200 font-geist bg-white/10 rounded-full pt-2 pr-4 pb-2 pl-4"
        >
          Mirar Portfolio
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
            data-lucide="arrow-up-right"
            className="lucide lucide-arrow-up-right h-4 w-4"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <a
          href="#"
          className="group relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5 shadow-sm"
        >
          <img
            src="https://images.unsplash.com/photo-1755448078772-826798e578e0?w=800&q=80"
            alt="Dashboard project"
            className="h-56 sm:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{
              transition: "outline 0.1s ease-in-out",
              outline: "rgb(245, 158, 11) solid 2px",
              outlineOffset: 2,
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-xs text-white/70 font-geist">SaaS • Product</p>
            <div className="mt-1 flex items-center justify-between">
              <h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">
                Cloud Analytics
              </h4>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-900">
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
                  data-lucide="arrow-right"
                  className="lucide lucide-arrow-right h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </a>
        <a
          href="#"
          className="group relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5 shadow-sm"
        >
          <img
            src="https://images.unsplash.com/photo-1536518995813-74991465de09?w=800&q=80"
            alt="Dev tools"
            className="h-56 sm:h-64 w-full transition-transform duration-500 group-hover:scale-105 object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-xs text-white/70 font-geist">
              Platform • Website
            </p>
            <div className="mt-1 flex items-center justify-between">
              <h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">
                Boltshift Launch
              </h4>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-900">
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
                  data-lucide="arrow-right"
                  className="lucide lucide-arrow-right h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </a>
        <a
          href="#"
          className="group relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5 shadow-sm"
        >
          <img
            src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fa2f3307-381a-408e-a80b-3c11044dc0b2_800w.jpg"
            alt="Minimal brand"
            className="h-56 sm:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-xs text-white/70 font-geist">
              Identity • Campaign
            </p>
            <div className="mt-1 flex items-center justify-between">
              <h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">
                Quotient Rebrand
              </h4>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-900">
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
                  data-lucide="arrow-right"
                  className="lucide lucide-arrow-right h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </a>
      </div>
      <div className="mt-8 sm:mt-10 flex justify-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 ring-1 ring-white/15 hover:bg-white/15 transition text-sm text-slate-200 font-geist bg-white/10 rounded-full pt-3 pr-5 pb-3 pl-5"
        >
          Todo mi trabajo
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
            data-lucide="external-link"
            className="lucide lucide-external-link h-4 w-4"
          >
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
