import { useRef } from "react";
import Accordion from "../../components/Accordion";
import HeroSection from "../../components/HeroSection";

function Eeoc() {
  const accordionRef = useRef(null);
  return (
    <>
      <HeroSection
        upperText="UNIFIED COMMAND"
        lowerText="BECAUSE SECONDS SAVE LIVES"
      />
      <Accordion forwardRef={accordionRef} />
    </>
  );
}

export default Eeoc;
