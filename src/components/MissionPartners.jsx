import React from "react";
import { missionPartnersImage } from "../data/missionPartnersImage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const partners = missionPartnersImage;

gsap.registerPlugin(useGSAP);

function MissionPartners() {
  const partnersRef = useRef();
  useGSAP(
    () => {
      const track = partnersRef.current;
      gsap.to(track, {
        ease: "none",
        xPercent: -50,
        duration: 160,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % (track.scrollWidth / 2)),
        },
      });
    },
    { scope: partnersRef },
  );
  return (
    <section className="overflow-hidden">
      <div className="wrapper p-6">
        <h3 className="text-gray-a6">Mission Partners</h3>
      </div>
      <div className=" w-full bg-background border border-r-0 border-l-0 border-gray-a6">
        <div
          className="flex gap-20 overflow-hidden py-6 filter grayscale-25 w-max"
          ref={partnersRef}
        >
          {[...partners, ...partners].map((partner, i) => (
            <img
              key={i}
              className="partners h-20 w-20 object-cover pointer-events-none"
              src={partner.src}
              alt={partner.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionPartners;
