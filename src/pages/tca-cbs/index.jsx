import { useRef } from "react";
import Accordion from "../../components/Accordion";
import HeroSection from "../../components/HeroSection";
import ServicesSlider from "../../components/ServicesSlider";
import GetInTouch from "../../components/GetInTouch";
import { tcaServicesData } from "../../data/tcaServicesData";

function TcaCbs() {
  const accordionRef = useRef(null);
  return (
    <>
      <HeroSection
        scrollToRef={accordionRef}
        upperText="HEAVY ENGINEERING"
        lowerText="INFRASTRUCTURE"
        src={""}
      />
      <ServicesSlider data={tcaServicesData} />
      <Accordion forwardRef={accordionRef} />
      <GetInTouch />
    </>
  );
}

export default TcaCbs;
