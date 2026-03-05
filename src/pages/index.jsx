import GetInTouch from "../components/GetInTouch";
import FieldOperations from "../components/FieldOperations";
import HeroSection from "../components/HeroSection";
import MissionPartners from "../components/MissionPartners";
import OurCompany from "../components/OurCompany";
import StrategicAcquisitions from "../components/StrategicAcquisitions";

export default function Home() {
  return (
    <>
      <HeroSection src="/videos/tg-main-hero.mp4" />
      <MissionPartners />
      <StrategicAcquisitions />
      <OurCompany />
      <FieldOperations />
      <GetInTouch />
    </>
  );
}
