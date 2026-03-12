import { useRef } from "react";
import Accordion from "../../components/Accordion";
import HeroSection from "../../components/HeroSection";

function TgEnt() {
  const accordionRef = useRef(null);
  return (
    <>
      <HeroSection
        upperText="UNIFIED COMMAND"
        lowerText="BECAUSE SECONDS SAVE LIVES"
        src="/videos/tg-ent-hero.mp4"
      />
      <Accordion forwardRef={accordionRef} />
    </>
  );
}

export default TgEnt;
