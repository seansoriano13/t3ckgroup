import { useRef } from "react";
import Accordion from "../../components/Accordion";
import HeroSection from "../../components/HeroSection";
import ProductSpotlight from "../../components/ProductSpotlight";
import GetInTouch from "../../components/GetInTouch";
import { productSpotlightData } from "../../data/productSpotlightData";

function TgEnt() {
  const accordionRef = useRef(null);
  return (
    <>
      <HeroSection
        scrollToRef={accordionRef}
        upperText="CONSUMER GRADE"
        lowerText="TACTICAL SUPPLY"
        src={""}
      />
      <ProductSpotlight data={productSpotlightData.tgEnt} />
      <Accordion forwardRef={accordionRef} />
      <GetInTouch />
    </>
  );
}

export default TgEnt;
