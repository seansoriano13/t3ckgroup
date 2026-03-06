import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import Overlay from "../components/filters/Overlay";

import { getActiveTab } from "../utils/getActiveTab.js";
import { useLocation } from "react-router";
import { footerData } from "../data/footer/footerData.js";

function Footer() {
  const formatSubLabel = (label) =>
    label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();
  const location = useLocation();
  const pathname = location.pathname;
  const activeTab = getActiveTab(pathname);

  const { links } = footerData[activeTab] || [];

  return (
    <div className="relative ">
      <Overlay className="z-0" opacity={0.1} src="/overlay/footer.jpg" />
      <div className="wrapper relative py-8 px-16 grid gap-12 grid-cols-[35%_65%]">
        <div className="grid gap-4">
          <img src="/main-logo-w-text.png" alt="" />
          <p className="text-description text-xs">
            Engineered for survival. Providing elite tactical, rescue, and
            infrastructure solutions for national defense and local resilience.
          </p>
          <div className="flex gap-4">
            <PrimaryButton className={"text-sm"} label={"REQUEST A QUOTE"} />
            <SecondaryButton label={"CONTACT T3CK"} />
          </div>
          <p className="text-gray-a5 text-sm">
            @ 2026 T3CKGROUP. ALL RIGHTS RESERVED.
          </p>
          <div className="grid gap-6 text-sm">
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
              <div className="text-description text-xs grid grid-flow-col auto-cols-max gap-1 items-center">
                <span>09063678910 (Globe)</span>
                <span>|</span>
                <span>09063678910 (Smart)</span>
                <span>|</span>
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
        <div className="grid grid-cols-5 gap-y-6">
          {links?.map((link, i) => (
            <div key={i} className="flex flex-col gap-6">
              <div>{link.title}</div>
              <ul className="grid gap-3 text-sm text-description ">
                {link?.links.map((link, i) => (
                  <li key={i} className="">
                    <a
                      className={`hover:text-red-8 ${activeTab === "main" && "uppercase"}`}
                      href={link.href}
                    >
                      {formatSubLabel(link.label)}
                    </a>{" "}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="relative pt-20 w-full h-auto ">
        <img className="w-full object-cover" src="/footer-logo.png" alt="" />
      </div>
    </div>
  );
}

export default Footer;
