import GetInTouch from "../components/GetInTouch";
import FieldOperations from "../components/FieldOperations";
import HeroSection from "../components/HeroSection";
import MissionPartners from "../components/MissionPartners";
import Accordion from "../components/Accordion";
import StrategicAcquisitions from "../components/StrategicAcquisitions";

import { useRef } from "react";
import MissionAndVision from "../components/MissionAndVision";

export default function Home() {
  const accordionRef = useRef(null);

  return (
    <>
      <HeroSection scrollToRef={accordionRef} src="/videos/tg-main-hero.mp4" />
      <MissionPartners />
      <StrategicAcquisitions />
      <Accordion forwardRef={accordionRef} />
      <MissionAndVision />
      <FieldOperations />
      <GetInTouch />
    </>
  );
}
