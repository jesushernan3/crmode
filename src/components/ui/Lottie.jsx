import React from "react";
import { useLottie, useLottieInteractivity } from "lottie-react";
// import Dot from "../../assets/lotties/Animation - 1751215208989.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const style = {
  height: 200,
  border: "solid",
};

const options = {
  animationData: Dot,
  autoPlay: true,
};

const Lottie = () => {
  const lottieObj = useLottie(options, style);

  return (
    <div>
      <h1 className="bg-cyan-950 text-8xl overflow-hidden">
        esto es un lottie
      </h1>
      <div></div>
    </div>
  );
};

export default Lottie;
