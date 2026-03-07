import Overlay from "./filters/Overlay";
import PrimaryButton from "./PrimaryButton";

function GetInTouch() {
  return (
    <div className="relative wrapper flex flex-col py-8">
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-gray-1 via-gray-1/1 to-transparent z-10" />
      <Overlay className="z-0 " opacity={1} src="/overlay/contact-us.png" />
      <div className="flex-between py-8 ">
        <div>
          <h3 className="text-gray-6">LEARN MORE</h3>
          <h2 className=" text-2xl">GET IN TOUCH</h2>
        </div>

        <p className="text-description text-sm w-[35%]">
          Supplying LGUs and enterprises with Tier-1 tactical gear and advanced
          rescue infrastructure.
        </p>

        <a href="/contact-us">
          <PrimaryButton className={"z-30 px-10"} label={"CONTACT T3CK"} />
        </a>
      </div>
      <div className="w-full relative opacity-80">
        <img className="h-full w-auto" src="/contact.png" alt="" />
        <Overlay src="" />
      </div>
    </div>
  );
}

export default GetInTouch;
