import React from "react";
import Noisy from "./Noisy";
import PrimaryButton from "./PrimaryButton";
import Overlay from "./filters/Overlay";

function HeroSection({
  src = "/videos/tg-main-hero.mp4",
  upperText = "GEAR YOU TRUST",
  lowerText = "WHEN IT MATTERS MOST",
}) {
  return (
    <section className="relative h-screen">
      <video
        autoPlay
        muted
        playsInline
        loop
        className="w-full h-screen object-cover opacity-30 "
      >
        <source src={src} type="video/mp4" />
      </video>

      <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center z-20">
        <h1 className="wrapper text-5xl text-center font-tactic">
          {upperText} <br /> {lowerText}
        </h1>

        <div>
          <PrimaryButton className={"py-5"} label={"EXPLORE CAPABILITIES"} />
        </div>
      </div>
      <Overlay className="z-0" opacity={0.2} src="/overlay/noisy.png" />
    </section>
  );
}

export default HeroSection;
