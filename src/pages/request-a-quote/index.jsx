import { useLocation } from "react-router";
import { formContents } from "../../data/formContents";
import { getActiveTab } from "../../utils/getActiveTab";
import Grainient from "../../components/filters/Grainient";
import { Form } from "../../components/Form";

function RequestAQuote() {
  const location = useLocation();
  const pathname = location.pathname;
  const activeTab = getActiveTab(pathname);

  const formContentData = formContents[activeTab] || {};
  const backgroundText = formContentData.backgroundText;
  const formTitle = formContentData.formTitle;
  const submitLabel = formContentData.submitLabel;
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
        <div className="wrapper relative grid gap-16">
          <div className="grid gap-3">
            <p className="text-description">01 TG</p>
            <hr className="border-gray-a6" />
          </div>

          {/* BACKGROUND TITLE and FORM */}
          <Form
            backgroundText={backgroundText}
            formTitle={formTitle}
            formDescription={formDescription}
            sections={sections}
            submitLabel={submitLabel}
          />
        </div>
      </div>
    </>
  );
}

export default RequestAQuote;
