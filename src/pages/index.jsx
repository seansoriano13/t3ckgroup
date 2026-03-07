import GetInTouch from "../components/GetInTouch";
import FieldOperations from "../components/FieldOperations";
import HeroSection from "../components/HeroSection";
import MissionPartners from "../components/MissionPartners";
import OurCompany from "../components/OurCompany";
import StrategicAcquisitions from "../components/StrategicAcquisitions";

import { useRef } from "react";
import MissionAndVision from "../components/MissionAndVision";

export default function Home() {
  const ourCompanyRef = useRef(null);

  return (
    <>
      <HeroSection scrollToRef={ourCompanyRef} src="/videos/tg-main-hero.mp4" />
      <MissionPartners />
      <StrategicAcquisitions />
      <OurCompany forwardRef={ourCompanyRef} />
      <MissionAndVision />
      <FieldOperations />
      <GetInTouch />
    </>
  );
}
