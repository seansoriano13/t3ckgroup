import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryButton from "./PrimaryButton.jsx";
import SmallBanner from "./SmallBanner.jsx";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import NavDropDown from "./NavDropDown.jsx";
import useMegaMenu from "../utils/useMegaMenu.jsx";
import { navData } from "../data/nav/navData.js";
import { useLocation } from "react-router";
import { getActiveTab } from "../utils/getActiveTab.js";

gsap.registerPlugin(ScrollTrigger);

function navLinkBorder() {
  return (
    <div className="opacity-0 group-hover:opacity-100 pointer-events-none">
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
  const location = useLocation();
  const pathname = location.pathname;
  const navRef = useRef();

  const navDropDownRef = useRef();
  const activeTab = getActiveTab(pathname);
  const { activeMenu, handleMouseEnter, handleMouseLeave } = useMegaMenu();

  useGSAP(
    () => {
      const nav = navRef.current;

      ScrollTrigger.create({
        start: "top -80",
        onEnter: () => {
          gsap.to(nav, {
            y: -24,
            backgroundColor: "var(--color-gray-1)",
            duration: 0.1,
          });
        },
        onLeaveBack: () => {
          gsap.to(nav, {
            y: 0,
            backgroundColor: "transparent",
            duration: 0.1,
          });
        },
      });
    },
    { scope: navRef },
  );

  useGSAP(
    () => {
      if (activeMenu) {
        gsap.to(navDropDownRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.2,
        });

        // Show blur backdrop
        gsap.to(backdropRef.current, {
          autoAlpha: 1,
          duration: 0.2,
        });
        gsap.set(navRef.current, {
          backgroundColor: "var(--color-gray-1)",
        });
      } else {
        gsap.to(navDropDownRef.current, {
          autoAlpha: 0,
          y: -10,
          duration: 0.2,
        });
        // Hide blur backdrop
        gsap.to(backdropRef.current, {
          autoAlpha: 0,
          duration: 0.2,
        });
      }
    },
    { scope: navDropDownRef, dependencies: [activeMenu] },
  );

  const navLinks = navData[activeTab]?.links || [];
  const backdropRef = useRef();

  return (
    <>
      <nav ref={navRef} className="z-100 fixed w-full top-0 transition-colors">
        <SmallBanner className="banner" />
        <div onMouseLeave={handleMouseLeave} className="w-full relative">
          <div className="wrapper py-2 flex justify-between items-center">
            <a className="hover:scale-110 transition-all" href="/">
              <img className="w-14 h-auto" src="/main-logo.svg" alt="Logo" />
            </a>

            <ul className="flex-center gap-4 uppercase">
              {navLinks.map((navLink, i) => (
                <li
                  key={i}
                  onMouseEnter={() => handleMouseEnter(navLink.menuKey)}
                  className="group relative list-none py-4"
                >
                  <a
                    href={navLink.href}
                    className="cursor-pointer relative z-10 block p-4 text-xs text-gray-12 hover:text-red-9 hover:bg-gray-a2 transition-all"
                  >
                    {navLink.label}
                    {navLinkBorder()}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex-center">
              <PrimaryButton className={"py-3 text-xs"} label={"Contact Us"} />
            </div>
          </div>

          <NavDropDown
            ref={navDropDownRef}
            activeMenu={activeMenu}
            activeTab={activeTab}
          />
        </div>
      </nav>
      <div
        ref={backdropRef}
        className="dropdown-backdrop opacity-0 pointer-events-none"
      ></div>
    </>
  );
}

export default Navbar;
