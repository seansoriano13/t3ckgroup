import { useRef } from "react";
import HeroSection from "../../components/HeroSection";
import Accordion from "../../components/Accordion";

function T3cktrading() {
  const accordionRef = useRef(null);
  return (
    <>
      <HeroSection
        upperText="MISSION CRITICAL SUPPLY"
        lowerText="DRIVING LOCAL PROGRESS"
        src={"/videos/t3cktrading-hero.mp4"}
      />
      <Accordion forwardRef={accordionRef} />
    </>
  );
}

export default T3cktrading;
