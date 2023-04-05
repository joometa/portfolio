import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../public/animation.json";

export function Animation() {
  return (
    <>
      <Lottie loop animationData={lottieJson} play />
    </>
  );
}
