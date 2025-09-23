import React from "react";
import Navbar from "../ui/Navbar";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <a
          href="#home"
          className="text-xl md:text-xl text-white tracking-tight font-geist font-light uppercase hover:opacity-90 transition"
          style={{}}
        >
          CRMODE
        </a>
      </div>

      <Navbar />

      <div className="flex items-center gap-2">
        <a
          href="#contact"
          className="hidden sm:inline-flex gap-2 hover:bg-white transition shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] items-center font-medium text-slate-900 font-geist bg-white/90 rounded-full pt-2 pr-4 pb-2 pl-4"
        >
          Subscribite
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-lucide="send"
            className="lucide lucide-send h-4 w-4"
          >
            <path d="M14.536 21.686a.5.5 0 0 0 .937-.24l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
            <path d="m21.854 2.147-10.94 10.939" className="" />
          </svg>
        </a>
        <button
          aria-label="Open menu"
          data-mobile-open=""
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-lucide="menu"
            className="lucide lucide-menu h-5 w-5 text-white"
          >
            <path d="M4 12h16" />
            <path d="M4 18h16" />
            <path d="M4 6h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div data-mobile-panel="" className="fixed inset-0 z-50 hidden">
        <div
          data-mobile-overlay=""
          className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 transition-opacity"
        />
        <div
          data-mobile-sheet=""
          className="ml-auto h-full w-[88%] max-w-sm bg-slate-950/95 ring-1 ring-white/10 shadow-2xl translate-x-full transition-transform"
        >
          <div className="flex items-center justify-between px-4 py-4">
            <span className="text-sm text-slate-200 font-geist tracking-tight">
              Menu
            </span>
            <button
              aria-label="Close menu"
              data-mobile-close=""
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="x"
                className="lucide lucide-x h-5 w-5 text-white"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <div className="px-4 pb-6">
            <nav className="space-y-1">
              <a
                href="#work"
                data-nav-link-mobile=""
                className="group flex items-center justify-between rounded-xl px-3 py-3 text-slate-200 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <span className="font-geist">Work</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="arrow-right"
                  className="lucide lucide-arrow-right h-4 w-4 opacity-80 group-hover:translate-x-0.5 transition"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="#capabilities"
                data-nav-link-mobile=""
                className="group flex items-center justify-between rounded-xl px-3 py-3 text-slate-200 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <span className="font-geist">Capabilities</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="arrow-right"
                  className="lucide lucide-arrow-right h-4 w-4 opacity-80 group-hover:translate-x-0.5 transition"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="#about"
                data-nav-link-mobile=""
                className="group flex items-center justify-between rounded-xl px-3 py-3 text-slate-200 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <span className="font-geist">About</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="arrow-right"
                  className="lucide lucide-arrow-right h-4 w-4 opacity-80 group-hover:translate-x-0.5 transition"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                data-nav-link-mobile=""
                className="group flex items-center justify-between rounded-xl px-3 py-3 text-slate-200 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <span className="font-geist">Contact</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="arrow-right"
                  className="lucide lucide-arrow-right h-4 w-4 opacity-80 group-hover:translate-x-0.5 transition"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </nav>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-geist font-medium hover:bg-white/90 transition shadow"
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
                  data-lucide="arrow-up-right"
                  className="lucide lucide-arrow-up-right h-3.5 w-3.5"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
