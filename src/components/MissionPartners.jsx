import React from "react";
import { missionPartnersImage } from "../../data/missionPartnersImage";

const partners = missionPartnersImage;

function MissionPartners() {
  return (
    <section>
      <div className="wrapper p-6">
        <h3 className="text-gray-a6">Mission Partners</h3>
      </div>
      <div>
        <div className="bg-background flex gap-20 overflow-hidden py-6 filter grayscale-25 border border-r-0 border-l-0 border-gray-a6">
          {partners.map((partner, i) => (
            <img
              key={i}
              className="h-20 w-auto"
              src={partner.src}
              alt={partner.alt}
            />
          ))}{" "}
        </div>
      </div>
    </section>
  );
}

export default MissionPartners;
