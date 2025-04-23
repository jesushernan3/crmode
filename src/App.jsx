import { useRef, React } from "react";
import "./App.css";
import Inicio from "./pages/Inicio/Inicio";
import Footer from "./components/ui/Footer";
// import { ReactLenis } from "lenis/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  const preciosRef = (useRef < HTMLDivElement) | (null > null);
  return (
    <>
      {/* <ReactLenis> */}
      <Inicio />
      <Footer />
      {/* </ReactLenis> */}
    </>
  );
}

export default App;
