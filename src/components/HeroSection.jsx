import React from "react";
import Noisy from "./Noisy";
import PrimaryButton from "./PrimaryButton";
import Overlay from "./filters/Overlay";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

function HeroSection({
  scrollToRef,
  src = "/videos/tg-main-hero.mp4",
  upperText = "GEAR YOU TRUST",
  lowerText = "WHEN IT MATTERS MOST",
}) {
  const scrollWithOffset = (ref, offset = 96) => {
    const elementTop =
      ref.current.getBoundingClientRect().top + window.pageYOffset;
    const targetPosition = elementTop - offset;

    gsap.to(window, {
      scrollTo: targetPosition,
      duration: 0.6, // adjust speed
      ease: "power2.out",
    });
  };
  return (
    <section className="relative h-screen">
      <video
        autoPlay
        muted
        playsInline
        loop
        className="w-full h-screen object-cover opacity-40 "
      >
        <source src={src} type="video/mp4" />
      </video>

      <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center z-20">
        <h1 className="wrapper text-[clamp(1rem,6vw,2.25rem)] sm:text-4xl mt-30 md:mt-0 md:text-5xl text-center font-tactic tracking-tight w-full px-4 text-nowrap">
          {upperText} <br /> {lowerText}
        </h1>

        <div onClick={() => scrollWithOffset(scrollToRef, 96)}>
          <PrimaryButton className={"py-5"} label={"EXPLORE CAPABILITIES"} />
        </div>
      </div>
      <Overlay className="z-0" opacity={0.4} src="/overlay/noisy.png" />
    </section>
  );
}

export default HeroSection;
