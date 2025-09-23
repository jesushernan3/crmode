import { useRef, React } from "react";
import "./App.css";
import Inicio from "./pages/Inicio";
import Footer from "./components/layout/Footer";
// import Header from "./components/layout/Header";
// import { ReactLenis } from "lenis/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  // const preciosRef = (useRef < HTMLDivElement) | (null > null);

  return (
    <>
      <div
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.1) 1px,transparent 1px),linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>
      {/* <Header /> */}

      {/* <ReactLenis> */}
      <Inicio />
      <Footer />
      {/* </ReactLenis> */}
    </>
  );
}

export default App;
