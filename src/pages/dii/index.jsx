import { useRef } from "react";
import HeroSection from "../../components/HeroSection";
import Accordion from "../../components/Accordion";

function Dii() {
  const accordionRef = useRef(null);
  return (
    <>
      <HeroSection
        upperText="TACTICAL INTELLIGENCE"
        lowerText="FOR CRISIS READINESS"
        src="/videos/dii-hero.mp4"
      />
      <Accordion forwardRef={accordionRef} />
    </>
  );
}

export default Dii;
