import { navData } from "../../data/navData.js";
import Noisy from "./Noisy.jsx";
import PrimaryButton from "./PrimaryButton.jsx";

const mainLinks = navData.main.links;

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
  return (
    <nav className="z-100 fixed w-full">
      <div className="wrapper py-6 bg-transparent flex justify-between">
        <a href="/">
          {" "}
          <img src="/main-logo.svg" alt="" />
        </a>

        <ul className="flex-center gap-4">
          {mainLinks.map((mainLink, i) => {
            return (
              <li
                key={i}
                className="group relative p-4 hover:bg-gray-a2 text-sm text-gray-12 hover:text-red-9 transition-all"
              >
                <a href={`${mainLink.href}`}> {mainLink.label}</a>
                {navLinkBorder()}
              </li>
            );
          })}
        </ul>
        <div className="flex-center">
          <PrimaryButton label={"Contact Us"} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
