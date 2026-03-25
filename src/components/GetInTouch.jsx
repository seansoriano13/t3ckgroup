import { Link } from "react-router";
import Overlay from "./filters/Overlay";
import PrimaryButton from "./PrimaryButton";

function GetInTouch() {
  return (
    <div className="relative wrapper flex flex-col py-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-gray-1 via-gray-1/1 to-transparent z-10" />
      <Overlay className="z-0 " opacity={1} src="/overlay/contact-us.png" />
      <div className="flex flex-col lg:flex-row justify-between items-center py-8 gap-6 text-center lg:text-left z-20">
        <div>
          <h3 className="text-gray-6">LEARN MORE</h3>
          <h2 className=" text-2xl lg:text-3xl">GET IN TOUCH</h2>
        </div>

        <p className="text-description text-sm w-full lg:w-[35%]">
          Supplying LGUs and enterprises with Tier-1 tactical gear and advanced
          rescue infrastructure.
        </p>

        <Link to="/contact-us">
          <PrimaryButton className={"z-30 px-10 py-4 w-full sm:w-auto"} label={"CONTACT T3CK"} />
        </Link>
      </div>
      <div className="w-full relative opacity-80">
        <img className="h-full w-auto" src="/contact.png" alt="" />
        <Overlay src="" />
      </div>
    </div>
  );
}

export default GetInTouch;
