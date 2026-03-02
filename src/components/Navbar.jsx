import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navData } from "../../data/navData.js";
import Noisy from "./Noisy.jsx";
import PrimaryButton from "./PrimaryButton.jsx";
import SmallBanner from "./SmallBanner.jsx";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function navLinkBorder() {
  return (
    <div className="opacity-0 group-hover:opacity-100">
      <div className="absolute top-0 left-0 w-2 h-px bg-gray-12"></div>
      <div className="absolute top-0 right-0 w-2 h-px bg-gray-12"></div>

      <div className="absolute bottom-0 left-0 w-2 h-px bg-gray-12"></div>
      <div className="absolute bottom-0 right-0 w-2 h-px bg-gray-12"></div>

      <div className="absolute top-0 left-0 w-px h-2 bg-gray-12"></div>
      <div className="absolute bottom-0 left-0 w-px h-2 bg-gray-12"></div>

      <div className="absolute top-0 right-0 w-px h-2 bg-gray-12"></div>
      <div className="absolute bottom-0 right-0 w-px h-2 bg-gray-12"></div>
    </div>
  );
}

function Navbar() {
  const navRef = useRef();

  useGSAP(
    () => {
      gsap.to(navRef.current, {
        yPercent: 0,
        backgroundColor: "var(--color-gray-1)",
        duration: 0.2,
        scrollTrigger: {
          trigger: "body",
          start: "top -50",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: navRef },
  );

  const mainLinks = navData.main.links;
  return (
    <>
      <SmallBanner />
      <nav ref={navRef} className="z-100 sticky w-full top-0">
        <div className="wrapper py-6 bg-transparent flex justify-between">
          <a href="/">
            {" "}
            <img src="/main-logo.svg" alt="" />
          </a>

          <ul className="flex-center gap-4">
            {mainLinks.map((mainLink, i) => {
              return (
                <li key={i} className="group relative list-none">
                  <a
                    href={mainLink.href}
                    className="
      relative z-10 block p-4 
      text-sm text-gray-12 hover:text-red-9 
      hover:bg-gray-a2 transition-all
    "
                  >
                    {mainLink.label}

                    {/* Keep the border inside so it stays relative to the link container */}
                    <div className="pointer-events-none">{navLinkBorder()}</div>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex-center">
            <PrimaryButton label={"Contact Us"} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
