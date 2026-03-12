import { useRef } from "react";
import Accordion from "../../components/Accordion";
import HeroSection from "../../components/HeroSection";

function TggtOpc() {
  const accordionRef = useRef(null);
  return (
    <>
      <HeroSection
        upperText="STRATEGIC CAPABILITIES"
        lowerText="ON A GLOBAL SCALE"
        src={"/videos/tggt-opc-hero.mp4"}
      />
      <Accordion forwardRef={accordionRef} />
    </>
  );
}

export default TggtOpc;
