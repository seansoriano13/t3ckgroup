import React from "react";

function HeroSection() {
  return (
    <div className="z-10 absolute inset-0">
      <img
        className="object-cover w-full h-screen opacity-30"
        src="/hero-main.png"
        alt=""
      />
    </div>
  );
}

export default HeroSection;
