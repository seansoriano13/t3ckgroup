import { forwardRef } from "react";
import { navData } from "../data/nav/navData";

const NavDropDown = forwardRef(({ activeMenu, activeTab }, ref) => {
  const navDropDownData = navData[activeTab] || {};
  const megaMenuData = navDropDownData.megaMenu || {};
  const megaMenu = megaMenuData[activeMenu] || {};
  const { leftPanel = {}, rightPanel = [] } = megaMenu;
  const { title, description } = leftPanel;

  return (
    <div
      ref={ref}
      className="navDropDown absolute top-full left-0 w-full z-100 py-12 bg-gray-1 opacity-0 invisible"
    >
      <div className="wrapper mx-auto max-w-7xl">
        <div className="grid grid-cols-[40%_60%] gap-8">
          <div className="w-75 grid gap-6 pr-8">
            <p className="text-xs uppercase">{title}</p>
            <p className="text-xs text-description">{description}</p>
          </div>

          <div className="grid grid-cols-3">
            {rightPanel.map((column, colIndex) => (
              <div key={colIndex} className="relative flex flex-col gap-6">
                <img
                  className="absolute -top-8 -left-8 opacity-50"
                  src={column.icon}
                  alt=""
                />
                <div className="text-xs text-gray-7 uppercase">
                  {column.title}
                </div>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-12 hover:text-red-9 transition-colors block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default NavDropDown;
