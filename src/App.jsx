import { useRef, React } from "react";
import "./App.css";
import Principal from "./components/layout/Principal";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <div
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>
      <Header />

      <Principal />
      <Footer />
    </>
  );
}

export default App;
