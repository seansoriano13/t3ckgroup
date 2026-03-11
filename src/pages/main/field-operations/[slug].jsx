import { useLocation, useParams } from "react-router";
import { BreadCrumbs } from "../../../components/BreadCrumbs";
import { fieldOperations } from "../../../data/fieldOperationsData.js";
import { Clock7, MapPlus, Star, View } from "lucide-react"; // 1. Consolidated imports
import { formatDateTime } from "../../../utils/formatCardDate.js";
import PrimaryButton from "../../../components/PrimaryButton";

// 2. Extracted the repetitive Section Header to kill nesting
// eslint-disable-next-line no-unused-vars
const DetailsSection = ({ title, Icon, children }) => (
  <div>
    <div className="flex-between border-b border-gray-6 pb-3">
      <div className="font-tactic text-lg">{title}</div>
      <Icon className="w-5 h-5" />
    </div>
    {children}
  </div>
);

function FieldOperationDetails() {
  const location = useLocation();
  const breadCrumbs = BreadCrumbs(location.pathname);
  const { slug } = useParams();

  const fieldOpsData = fieldOperations.find((i) => i.id === slug);

  if (!fieldOpsData) {
    return (
      <div className="wrapper py-30 text-center">Operation not found.</div>
    );
  }

  const address = encodeURIComponent(fieldOpsData.location);

  const src = `https://maps.google.com/maps?q=${address}&output=embed`;

  return (
    <div className="relative">
      {/* --- HERO BANNER --- */}
      <div className="relative pt-30 pb-13">
        <img
          className="pointer-events-none absolute top-0 left-0 w-full h-full object-cover opacity-30"
          src={fieldOpsData.image.banner}
          alt={`${fieldOpsData.title} image`}
        />

        <div className="wrapper relative z-10 grid gap-12">
          <div>
            <div>{breadCrumbs}</div>
            <h1 className="text-4xl">{fieldOpsData.title}</h1>
            <p className="text-sm text-description">{fieldOpsData.subtitle}</p>
          </div>

          <div className="text-xs text-description w-1/2">
            {fieldOpsData.description.details}
          </div>
        </div>
      </div>

      {/* --- CONTENT GRID --- */}
      <div className="wrapper relative grid grid-cols-[60%_40%]">
        <div className="grid py-8">
          <div className="grid gap-6">
            {/* WHEN */}
            <DetailsSection title="WHEN" Icon={Clock7}>
              <div className="grid gap-2 py-3">
                <div className="flex-between">
                  <div className="text-sm text-description">START</div>
                  <span>{formatDateTime(fieldOpsData.startDate)}</span>
                </div>
                <div className="flex-between">
                  <div className="text-sm text-description">END</div>
                  <span>{formatDateTime(fieldOpsData.endDate)}</span>
                </div>
              </div>
            </DetailsSection>

            {/* HIGHLIGHTS */}
            <DetailsSection title="HIGHLIGHTS" Icon={Star}>
              <div className="grid gap-2 py-3">
                <ul className="list-disc pl-4">
                  {/* 5. Added the required 'key' prop to prevent React console errors */}
                  {fieldOpsData.highlights?.map((highlight, index) => (
                    <li key={index} className="">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </DetailsSection>

            {/* WHERE */}
            <DetailsSection title="WHERE" Icon={MapPlus}>
              <div className="grid gap-2 py-3">{fieldOpsData.location}</div>
              <div className="border border-gray-6 p-6">
                <iframe
                  title={fieldOpsData.title}
                  width="100%"
                  height="200"
                  className="border-0 min-h-50"
                  src={src}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </DetailsSection>

            {/* CTA */}
            <div className="justify-self-center">
              <PrimaryButton label="REGISTER NOW" />
            </div>
          </div>
        </div>

        {/* --- POSTER SIDEBAR --- */}
        <div className=" h-auto w-full p-8 flex flex-col gap-4">
          <DetailsSection title="POSTER" Icon={View}>
            <div className="p-4 border border-gray-6 flex justify-center mt-6">
              <img
                className="opacity-80 w-full h-auto object-contain"
                src={fieldOpsData.image.poster}
                alt={`${fieldOpsData.title} poster`}
              />
            </div>
          </DetailsSection>
        </div>
      </div>
    </div>
  );
}

export default FieldOperationDetails;
