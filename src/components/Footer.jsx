import { companyBranches } from "../../data/companyBranches";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import Overlay from "../components/filters/Overlay";
import { navData } from "../../data/navData";

function Footer() {
  const formatSubLabel = (label) =>
    label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();

  return (
    <div className="relative ">
      <Overlay className="z-0" opacity={0.15} src="/overlay/footer.jpg" />
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
              <div className="text-description text-xs">
                <span>09063678910 (Globe)</span>
                <span> | </span>
                <span>09063678910 (Smart)</span>
                <span> | </span>
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
        <div className="grid grid-cols-5 gap-y-6">
          {companyBranches.map((branch, i) => {
            const branchLinks = navData[branch.id]?.links || [];

            return (
              <div key={i} className="grid gap-6">
                <div className="">{branch.abbreviation}</div>
                <ul className="grid gap-3 text-sm text-description ">
                  {branchLinks.map((link, i) => (
                    <li key={i} className="">
                      <a className="hover:text-red-8" href={link.href}>
                        {formatSubLabel(link.label)}
                      </a>{" "}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative pt-20 w-full h-auto ">
        <img className="w-full object-cover" src="/footer-logo.png" alt="" />
      </div>
    </div>
  );
}

export default Footer;
