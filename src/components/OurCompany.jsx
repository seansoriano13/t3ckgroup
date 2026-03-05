import gsap from "gsap";
import { companyBranches } from "../data/companyBranches.js";
import TacticalText from "./filters/TacticalText.jsx";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function OurCompany() {
  const frameRef = useRef();

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".items");
      const leftImages = gsap.utils.toArray(".left-img");
      const frame = frameRef.current;

      gsap.set(leftImages, { opacity: 0 });
      gsap.set(items, { height: "3rem", opacity: 0.5 });

      // Set first list to open
      gsap.set(leftImages[0], { opacity: 1 });
      gsap.set(items[0], { height: "auto", opacity: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: frame,
          start: "top 96px",
          end: "+=3000",
          pin: true,
          scrub: 1,
          // markers: true,
        },
      });

      items.forEach((item, i) => {
        if (i === 0) return;

        tl.to(items[i - 1], { height: "3rem", opacity: 0.5 })
          .to(leftImages[i - 1], { opacity: 0 }, "<")

          .to(item, { fontSize: "18px", height: "auto", opacity: 1 }, "<")
          .to(leftImages[i], { opacity: 1 }, "<")

          .to({}, { duration: 0.5 });
      });
    },
    { scope: frameRef },
  );

  return (
    <section
      ref={frameRef}
      className="grid grid-cols-2 h-screen-nav overflow-hidden justify-center"
    >
      {/* LEFT SIDE*/}
      <div className="relative h-screen-nav overflow-hidden">
        {companyBranches.map((branch, i) => (
          <div
            key={branch.id}
            className={`left-img absolute inset-0 transition-opacity duration-500 
        ${i === 0 ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <img
              className="h-full w-full object-cover opacity-80"
              src={branch.mainImage}
              alt={branch.title}
            />
            <div className="absolute bottom-0 p-8">
              <p className="text-gray-6 text-4xl">EST. 2015</p>
              <div className="text-8xl">
                <TacticalText className="text-red-9">T3CK</TacticalText>
                <TacticalText className="text-gray-12">GROUP</TacticalText>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <ol className="h-screen-nav px-8 py-8 flex flex-col gap-4 ">
        {companyBranches.map((branch, i) => (
          <li key={i} className="items flex h-12 overflow-hidden">
            {/* first:h-auto */}
            <div className="right flex gap-4 border-t border-gray-a6 pt-2">
              <div className="pt-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm">{branch.number}</span>
                  <div className="h-1 w-1 bg-red-9"></div>
                </div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm">{branch.title}</div>
                <p className="text-gray-a7 text-xs">{branch.subtitle}</p>
                <p className="text-description text-xs">{branch.description}</p>
                <img className="h-40 w-auto" src={branch.contentImage} alt="" />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default OurCompany;
