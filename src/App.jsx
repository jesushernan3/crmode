import { useState } from "react";
import "./App.css";
import Inicio from "./pages/Inicio/Inicio";
import Footer from "./components/ui/Footer";
import { ReactLenis } from "lenis/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  return (
    <ReactLenis>
      <Inicio />
      <Footer />
    </ReactLenis>
  );
}

export default App;
