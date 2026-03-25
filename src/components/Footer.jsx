import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

import { getActiveTab } from "../utils/getActiveTab.js";
import { Link, useLocation } from "react-router";
import { footerData } from "../data/footer/footerData.js";
import Grainient from "./filters/Grainient.jsx";

function Footer() {
  const formatSubLabel = (label) =>
    label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();
  const location = useLocation();
  const pathname = location.pathname;
  const activeTab = getActiveTab(pathname);

  const { links } = footerData[activeTab] || [];

  return (
    <div className="relative overflow-hidden">
      <div className="wrapper relative py-12 lg:py-8 px-6 lg:px-16 grid gap-12 grid-cols-1 lg:grid-cols-[35%_65%] z-10">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
          <img className="w-48 lg:w-auto" src="/main-logo-w-text.png" alt="" />
          <p className="text-description text-xs">
            Engineered for survival. Providing elite tactical, rescue, and
            infrastructure solutions for national defense and local resilience.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Link to="/request-a-quote" className="w-full sm:w-auto">
              <PrimaryButton className={"text-sm"} label={"REQUEST A QUOTE"} />
            </Link>
            <SecondaryButton className={"text-sm"} label={"CONTACT T3CK"} />
          </div>
          <p className="text-gray-a5 text-sm mt-4 lg:mt-0">
            @ 2026 T3CKGROUP. ALL RIGHTS RESERVED.
          </p>
          <div className="grid gap-6 text-sm text-center lg:text-left">
            {/* ADDRESS SECTION */}
            <div>
              <p>ADDRESS</p>
              <p className="text-description text-xs">
                No. 8 Lt. Amb. F. Neri Ave. Blue Mountain Subd. Sta. Cruz,
                Antipolo City
              </p>
            </div>

            {/* PHONE SECTION */}
            <div>
              <p>PHONE</p>
              <div className="text-description text-xs flex flex-wrap justify-center lg:justify-start gap-x-2 gap-y-1 items-center">
                <span>09063678910 (Globe)</span>
                <span className="hidden sm:inline">|</span>
                <span>09063678910 (Smart)</span>
                <span className="hidden sm:inline">|</span>
                <span>0286362892 (Landline)</span>
              </div>
            </div>

            {/* EMAIL SECTION */}
            <div>
              <p>EMAIL</p>
              <p className="text-description text-xs">informe@t3ckgroup.com</p>
            </div>
          </div>
        </div>
        {/* LINKS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 lg:gap-y-6">
          {links?.map((link, i) => {
            const isMain = activeTab === "main";
            return (
              <div
                key={i}
                className={`flex flex-col gap-6 ${isMain && "col-span-2"}`}
              >
                {/* CATEGORY TITLE */}
                <div>{link.title}</div>
                <ul className="grid gap-3 text-sm text-description ">
                  {link?.links.map((link, i) => (
                    // LINK LISTS
                    <li key={i} className="">
                      <Link
                        className={`hover:text-red-8 ${isMain && "uppercase"}`}
                        to={link.href}
                      >
                        {formatSubLabel(link.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative pt-10 lg:pt-20 w-full h-32 lg:h-auto z-10 opacity-40 flex items-end overflow-hidden">
        <img className="w-full object-cover min-w-[600px]" src="/footer-logo.png" alt="" />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Grainient
          color1="#030508"
          color2="#030508"
          color3="#ff8040"
          timeSpeed={0.2}
          colorBalance={-0.32}
          warpStrength={0}
          warpFrequency={0}
          warpSpeed={0}
          warpAmplitude={5}
          blendAngle={-180}
          blendSoftness={0.46}
          rotationAmount={0}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.15}
          gamma={1.15}
          saturation={1.05}
          centerX={-0.78}
          centerY={0.3}
          zoom={1.55}
        />
      </div>
    </div>
  );
}

export default Footer;
