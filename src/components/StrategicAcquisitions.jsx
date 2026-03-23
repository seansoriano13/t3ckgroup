import { strategicAcquisitionData } from "../data/strategicAcquisitionData.js";
import Overlay from "./filters/Overlay.jsx";
import SecondaryButton from "./SecondaryButton";

function StrategicAcquisitionsCard({ logo, alt, description, link }) {
  return (
    <div className="border-r border-gray-a6 last:border-0 p-12 grid gap-6 ">
      <div className="w-full h-20  flex-center">
        <img className="object-contain" src={logo} alt={alt} />
      </div>
      <p className="text-sm text-center text-description">{description}</p>
      <div className="flex-center">
        <a href={link || "#"}>
          <SecondaryButton
            className={"py-4 px-7 text-xs"}
            label={"READ MORE"}
          />
        </a>
      </div>
    </div>
  );
}

function StrategicAcquisitions() {
  return (
    <section className="w-full h-full relative py-12">
      <div className="wrapper grid gap-6">
        <h2 className=" text-center text-4xl">STRATEGIC PARTNERSHIPS</h2>
        <div className=" grid grid-cols-4 border border-gray-a6 ">
          {strategicAcquisitionData.map((acquisition, i) => (
            <StrategicAcquisitionsCard
              key={i}
              logo={acquisition.logo}
              alt={acquisition.alt}
              description={acquisition.description}
              link={acquisition.link}
            />
          ))}
        </div>
      </div>
      <Overlay src="/overlay/strategic-acquisition.png" />
    </section>
  );
}

export default StrategicAcquisitions;
