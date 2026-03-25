import { useRef } from "react";
import Accordion from "../../components/Accordion";
import HeroSection from "../../components/HeroSection";
import ProductSpotlight from "../../components/ProductSpotlight";
import GetInTouch from "../../components/GetInTouch";
import { productSpotlightData } from "../../data/productSpotlightData";

function T3ckTrading() {
  const accordionRef = useRef(null);
  return (
    <>
      <HeroSection
        scrollToRef={accordionRef}
        upperText="HEAVY LIFTING"
        lowerText="INFRASTRUCTURE"
        src={""}
      />
      <ProductSpotlight data={productSpotlightData.t3ckTrading} />
      <Accordion forwardRef={accordionRef} />
      <GetInTouch />
    </>
  );
}

export default T3ckTrading;
