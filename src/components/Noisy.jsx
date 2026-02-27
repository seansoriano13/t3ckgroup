import React from "react";

function Noisy() {
  return (
    <svg className="absolute">
      <filter id="noise" x="0%" y="0%" width="100%" height="1">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="4"
          numOctaves="2"
          result="turbulence"
        />
        <feColorMatrix
          in="turbulence"
          type="luminanceToAlpha"
          result="alphaNoise"
        />

        <feComponentTransfer in="alphaNoise" result="alphaNoiseAdjusted">
          <feFuncA type="linear" slope=".75" />{" "}
        </feComponentTransfer>

        <feBlend
          in="SourceGraphic"
          in2="alphaNoiseAdjusted"
          mode="overlay"
          result="blended"
        />
      </filter>
    </svg>
  );
}

export default Noisy;
