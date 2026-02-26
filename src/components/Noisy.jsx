import React from "react";

function Noisy() {
  return (
    <svg className="absolute w-0 h-0">
      <filter id="noise" x="0%" y="0" width="100%" height="1">
        <feTurbulence type="fractalNoise" baseFrequency="4" numOctaves="3" />
        <feColorMatrix type="luminanceToAlpha" />
        <feBlend in="SourceGraphic" in2="composite" mode="color-burn" />
      </filter>
    </svg>
  );
}

export default Noisy;
