import { useRef, React } from "react";
import "./App.css";
import Inicio from "./pages/Inicio";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
// import { ReactLenis } from "lenis/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  // const preciosRef = (useRef < HTMLDivElement) | (null > null);
  return (
    <>
      <Header />
      {/* <ReactLenis> */}
      <Inicio />
      <Footer />
      {/* </ReactLenis> */}
    </>
  );
}

export default App;
