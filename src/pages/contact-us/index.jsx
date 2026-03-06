import { useLocation } from "react-router";
import Grainient from "../../components/filters/Grainient";
import PrimaryButton from "../../components/PrimaryButton";
import { getActiveTab } from "../../utils/getActiveTab";
import { formContents } from "../../data/formContents";

function ContactUs() {
  const focusStyle = "focus:outline-none focus:border-b-gray-10";
  const inputStyle = `h-12 placeholder:text-sm border-b border-gray-a6 ${focusStyle}`;

  const location = useLocation();
  const pathname = location.pathname;
  const activeTab = getActiveTab(pathname);

  const formContentData = formContents[activeTab] || {};
  const backgroundText = formContentData.backgroundText;
  const formTitle = formContentData.formTitle;
  const formDescription = formContentData.formDescription;
  const { sections = [] } = formContentData;

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
            {backgroundText}
          </h1>

          {/* INPUTS */}
          <div className="justify-self-center grid gap-8 top-30 px-8 py-10 drop-shadow-2xl backdrop-blur-xs bg-gray-a1 w-166.25 border border-gray-a6">
            <div className="grid gap-1">
              <h2 className="text-2xl">{formTitle}</h2>
              <p className="text-xs text-description">{formDescription}</p>
            </div>

            <div className="grid gap-8">
              {sections?.map((section) => (
                <div className="grid gap-6" key={section.id}>
                  <h3>{section.title}</h3>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    {section.fields.map((field) => {
                      if (field.textArea) {
                        return (
                          <textarea
                            key={field.name}
                            placeholder={field.placeholder}
                            className={`h-18 col-span-${field.gridSpan} placeholder:text-sm border-b border-gray-a6 ${focusStyle}`}
                          />
                        );
                      }

                      return (
                        <input
                          key={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          className={`col-span-${field.gridSpan} ${inputStyle}`}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <PrimaryButton label={formContentData.submitLabel || "SUBMIT"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
