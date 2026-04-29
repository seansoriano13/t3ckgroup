import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryButton from "./PrimaryButton.jsx";
import SmallBanner from "./SmallBanner.jsx";
import gsap from "gsap";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import NavDropDown from "./NavDropDown.jsx";
import useMegaMenu from "../utils/useMegaMenu.jsx";
import { navData } from "../data/nav/navData.js";
import { useLocation } from "react-router";
import { getActiveTab } from "../utils/getActiveTab.js";
import { Link } from "react-router";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu.jsx";

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
  const navRef = useRef();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // CURRENT TAB
  const location = useLocation();
  const pathname = location.pathname;
  const activeTab = getActiveTab(pathname);

  const navDropDownRef = useRef();

  const { activeMenu, handleMouseEnter, handleMouseLeave } = useMegaMenu();

  useGSAP(
    () => {
      const nav = navRef.current;
      const banner = nav.querySelector(".banner");

      ScrollTrigger.create({
        start: "top -80",
        onEnter: () => {
          gsap.to(".banner", {
            height: 0,
            opacity: 0,
            paddingTop: 0,
            paddingBottom: 0,
            minHeight: 0,
            overflow: "hidden",
            duration: 0.2,
          });
          gsap.to(nav, {
            backgroundColor: "var(--color-gray-1)",
            duration: 0.2,
          });
        },
        onLeaveBack: () => {
          gsap.to(".banner", {
            height: "auto",
            opacity: 1,
            duration: 0.2,
            onComplete: () => gsap.set(".banner", { clearProps: "all" }),
          });
          gsap.to(nav, {
            backgroundColor: "transparent",
            duration: 0.2,
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
        <SmallBanner activeTab={activeTab} className="banner hidden md:flex flex-wrap items-center justify-between lg:justify-between bg-red-1 px-4 lg:px-8" />
        <div onMouseLeave={handleMouseLeave} className="w-full relative">
          <div className="wrapper py-2 flex justify-between items-center">
            <Link className="hover:scale-110 transition-all" to="/">
              <img
                className="w-10 md:w-14 lg:w-14 h-auto"
                src="/main-logo.svg"
                alt="Logo"
              />
            </Link>

            <ul className="hidden lg:flex items-center gap-4 uppercase">
              {navLinks.map((navLink, i) => (
                <li
                  key={i}
                  onMouseEnter={() => handleMouseEnter(navLink.menuKey)}
                  className="flex items-center justify-center group relative list-none py-4"
                >
                  {navLink.href ? (
                    <Link
                      to={navLink.href}
                      className="cursor-pointer relative z-10 block p-4 text-xs text-gray-12 hover:text-red-9 hover:bg-gray-a2 transition-all"
                    >
                      {navLink.label}
                      {navLinkBorder()}
                    </Link>
                  ) : (
                    <button
                      className="cursor-pointer relative z-10 block p-4 text-xs text-gray-12 hover:text-red-9 hover:bg-gray-a2 transition-all uppercase font-inherit"
                    >
                      {navLink.label}
                      {navLinkBorder()}
                    </button>
                  )}
                  {(i === 3 && activeTab === 'main') && (
                    <div className="w-px h-6 ml-2 bg-gray-12 opacity-40"></div>
                  )}
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex items-center justify-center">
              <Link to="/contact-us">
                <PrimaryButton
                  className={"py-3 text-xs"}
                  label={"Contact Us"}
                />
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden py-2 px-4 text-gray-12 hover:text-white transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          <div className="hidden lg:block">
            <NavDropDown
              ref={navDropDownRef}
              activeMenu={activeMenu}
              activeTab={activeTab}
            />
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeTab={activeTab}
      />
      <div
        ref={backdropRef}
        className="dropdown-backdrop opacity-0 pointer-events-none"
      ></div>
    </>
  );
}

export default Navbar;
