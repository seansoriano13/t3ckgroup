import { useRef } from "react";
import Accordion from "../../components/Accordion";
import HeroSection from "../../components/HeroSection";
import ProductSpotlight from "../../components/ProductSpotlight";
import GetInTouch from "../../components/GetInTouch";

function TggtOpc() {
  const accordionRef = useRef(null);
  return (
    <>
      <HeroSection
        scrollToRef={accordionRef}
        upperText="STRATEGIC CAPABILITIES"
        lowerText="ON A GLOBAL SCALE"
        src={"/videos/tggt-opc-hero.mp4"}
      />
      <ProductSpotlight />
      <Accordion forwardRef={accordionRef} />
      <GetInTouch />
    </>
  );
}

export default TggtOpc;
