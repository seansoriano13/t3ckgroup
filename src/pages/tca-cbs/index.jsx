import { useRef } from "react";
import Accordion from "../../components/Accordion";
import HeroSection from "../../components/HeroSection";

function TcaCbs() {
  const accordionRef = useRef(null);
  return (
    <>
      <HeroSection
        upperText="BUILDING EXPERIENCES"
        lowerText="ENGINEERED TO LAST"
        src="/videos/tca-cbs-hero.mp4"
      />
      <Accordion forwardRef={accordionRef} />
    </>
  );
}

export default TcaCbs;
