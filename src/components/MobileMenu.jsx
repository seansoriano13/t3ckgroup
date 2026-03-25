import { useState } from "react";
import { Link } from "react-router";
import { navData } from "../data/nav/navData.js";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import PrimaryButton from "./PrimaryButton.jsx";
import SmallBanner from "./SmallBanner.jsx";

const MobileMenu = ({ isOpen, onClose, activeTab }) => {
  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (menuKey) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  const navLinks = navData[activeTab]?.links || [];
  const megaMenuData = navData[activeTab]?.megaMenu || {};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-gray-1 overflow-y-auto flex flex-col transition-transform duration-300">
      <div className="flex justify-between items-center p-4 border-b border-gray-4">
        <Link to="/" onClick={onClose}>
          <img className="w-10 h-auto" src="/main-logo.svg" alt="Logo" />
        </Link>
        <button onClick={onClose} className="p-2 text-gray-12 hover:text-red-9">
          <X className="w-8 h-8" />
        </button>
      </div>
      
      <div className="flex-1 flex flex-col p-4 gap-4">
        {navLinks.map((link, i) => {
          const hasMegaMenu = !!megaMenuData[link.menuKey];
          const isOpenAcc = openAccordions[link.menuKey];

          return (
            <div key={i} className="flex flex-col border-b border-gray-4 py-2">
              {hasMegaMenu ? (
                <>
                  <div className="flex justify-between items-center w-full py-2">
                    {link.href ? (
                      <Link 
                        to={link.href} 
                        onClick={onClose}
                        className="text-left text-sm uppercase font-bold text-gray-12 flex-1 hover:text-white underline underline-offset-4 decoration-gray-6 hover:decoration-white transition-all"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <span className="text-left text-sm uppercase font-bold text-gray-12 flex-1">
                        {link.label}
                      </span>
                    )}
                    <button 
                      onClick={() => toggleAccordion(link.menuKey)}
                      className="p-2 -mr-2 text-gray-12 hover:text-red-9 transition-colors"
                      aria-label="Toggle sub-menu"
                    >
                      {isOpenAcc ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                  </div>
                  {isOpenAcc && (
                    <div className="flex flex-col gap-4 pl-4 pt-4 pb-2">
                       {megaMenuData[link.menuKey]?.rightPanel?.map((panel, idx) => (
                         <div key={idx} className="flex flex-col gap-2">
                           <p className="text-xs text-red-9 font-bold uppercase">{panel.title}</p>
                           {panel.links?.map((subLink, subIdx) => (
                             <Link
                               key={subIdx}
                               to={subLink.href}
                               onClick={onClose}
                               className="text-sm text-gray-11 hover:text-white py-1"
                             >
                               {subLink.label}
                             </Link>
                           ))}
                         </div>
                       ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.href || "/"}
                  onClick={onClose}
                  className="flex justify-between items-center w-full text-left text-sm uppercase font-bold text-gray-12 py-2"
                >
                  {link.label}
                </Link>
              )}
            </div>
          );
        })}
      </div>

      <div className="p-4 border-t border-gray-4 mt-auto">
        <SmallBanner className="flex-col items-start gap-4 mb-6 md:hidden" />
        <Link to="/contact-us" onClick={onClose} className="block w-full">
          <PrimaryButton className={"w-full py-4 text-center justify-center"} label={"Contact Us"} />
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
