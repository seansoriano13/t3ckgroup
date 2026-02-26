import { navData } from "../../data/navData.js";
import Noisy from "./Noisy.jsx";
import PrimaryButton from "./PrimaryButton.jsx";

const mainLinks = navData.main.links;

function navLinkBorder() {
  return (
    <div className="opacity-0 group-hover:opacity-100 transition-all">
      <div class="absolute top-0 left-0 w-2 h-px bg-gray-12"></div>
      <div class="absolute top-0 right-0 w-2 h-px bg-gray-12"></div>

      <div class="absolute bottom-0 left-0 w-2 h-px bg-gray-12"></div>
      <div class="absolute bottom-0 right-0 w-2 h-px bg-gray-12"></div>

      <div class="absolute top-0 left-0 w-px h-2 bg-gray-12"></div>
      <div class="absolute bottom-0 left-0 w-px h-2 bg-gray-12"></div>

      <div class="absolute top-0 right-0 w-px h-2 bg-gray-12"></div>
      <div class="absolute bottom-0 right-0 w-px h-2 bg-gray-12"></div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="z-100 relative wrapper py-6 bg-transparent text-gray-12 flex justify-between">
      <img src="/main-logo.svg" alt="" />

      <ul className="flex-center gap-4">
        {mainLinks.map((mainLink) => {
          return (
            <li className="group relative p-4 hover:bg-gray-a2 text-gray-11 hover:text-gray-12">
              {mainLink.label}
              {navLinkBorder()}
            </li>
          );
        })}
      </ul>
      <div className="flex-center">
        <PrimaryButton label={"Contact Us"} />
      </div>
    </nav>
  );
}

export default Navbar;
