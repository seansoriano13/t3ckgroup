import Overlay from "../../components/filters/Overlay";
import Noisy from "../../components/Noisy";
import PrimaryButton from "../../components/PrimaryButton";
import Grainient from "../../components/Grainient";

function ContactUs() {
  const focusStyle = "focus:outline-none focus:border-b-gray-10";
  const inputStyle = `h-12 placeholder:text-sm border-b border-gray-a6 ${focusStyle}`;

  return (
    <>
      <div className="relative h-full py-40 z-10">
        <div className="absolute inset-0">
          <Grainient
            color1="#030508"
            color2="#516179"
            color3="#641210"
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>
        {/* TOP BORDER */}
        <div className="wrapper relative grid gap-20">
          <div className="grid gap-3">
            <p className="text-description">01 TG</p>
            <hr className="border-gray-a6" />
          </div>

          {/* HEADER TITLE */}
          <h1 className="absolute top-6 left-10 text-center text-[125px] leading-40 text-gray-a3">
            PARTNER WITH US
          </h1>

          {/* INPUTS */}
          <div className="justify-self-center grid gap-6 top-30 px-8 py-10 backdrop-blur-xs bg-gray-a1 w-166.25 border border-gray-a6">
            <div className="grid gap-1">
              <h2 className="text-2xl">Partner With Us</h2>

              <p className=" text-xs text-description">
                Ready to scale your operations with our mission-critical
                expertise and infrastructure?
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <input
                placeholder="Full Name"
                className={inputStyle}
                type="text"
              />
              <input
                placeholder="Professional Email Address"
                className={inputStyle}
                type="email"
              />
              <input
                placeholder="Contact Number"
                className={inputStyle}
                type="phone"
              />
              <input
                placeholder="Designation / Role"
                className={inputStyle}
                type="text"
              />
              <input placeholder="Role" className={inputStyle} type="text" />
              <input placeholder="Company" className={inputStyle} type="text" />
              <textarea
                placeholder="Message"
                className={`h-18 col-span-2 placeholder:text-sm border-b border-gray-a6 ${focusStyle}`}
              ></textarea>
            </div>
            <PrimaryButton label={"SUBMIT"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
