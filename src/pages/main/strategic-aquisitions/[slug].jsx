import { Link, useLocation, useParams } from "react-router";
import ColorBlends from "../../../components/filters/ColorBlends";
import { Circle } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import SecondaryButton from "../../../components/SecondaryButton";
import { strategicAcquisitionData } from "../../../data/strategicAcquisitionData";
import { BreadCrumbs } from "../../../components/BreadCrumbs";

function StrategicAcquisitionsDetail() {
  const location = useLocation();
  const breadcrumbs = BreadCrumbs(location.pathname);
  const { slug } = useParams();

  const companyData = strategicAcquisitionData.find((i) => i.id === slug);
  const companyDetails = companyData?.details || [];
  const company = companyDetails?.company;
  const logo = companyDetails?.logo;
  const description = companyDetails?.fullDescription || [];
  const companyLink = companyDetails.companyLink;
  const youtubeId = companyDetails?.youtubeId;
  const branchLabel = companyDetails?.branchLabel;
  const branchLink = companyDetails?.branchLink;

  return (
    <>
      <div className="min-h-screen relative pt-30 pb-13">
        <div className="wrapper relative z-10 grid gap-6">
          <div className="grid gap-4">
            <div>
              {/* BREADCRUMBS */}
              {breadcrumbs}
            </div>
            {/* TITLE */}
            <h1 className="uppercase text-3xl">STRATEGIC PARTNER: {company}</h1>
          </div>
          {/* CONTENT GRID 2*/}
          <div className=" grid grid-cols-2 gap-2">
            {/* LEFT */}
            <div className="grid gap-6 px-10 py-8 border border-gray-6">
              <div className="justify-self-center w-40 h-20 flex items-center justify-center overflow-hidden rounded">
                {/* LOGO */}
                <img
                  className="max-w-full max-h-full object-contain"
                  src={logo}
                  alt="Logo placeholder"
                />
              </div>
              <div className="grid gap-6 text-xs text-description text-justify">
                {description.map((description) => (
                  <p>{description}</p>
                ))}
              </div>
              <div className="justify-self-end">
                <Link
                  className="text-xs flex-center text-gray-11 hover:text-red-8"
                  to={companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW
                  <ArrowUpRight />
                </Link>
              </div>
            </div>
            {/* RIGHT */}
            <div className="px-10 py-12 border border-gray-6">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={company}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          {/* BUTTON */}
          <div className="justify-self-center">
            <Link to={branchLink}>
              <SecondaryButton label={branchLabel} />
            </Link>
          </div>
        </div>

        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <ColorBlends
            rotation={265}
            speed={0.05}
            colors={["#030508", "#1d2229", "#030508"]}
            transparent={false}
            autoRotate={0}
            scale={0.5}
            frequency={1.7}
            warpStrength={1.1}
            mouseInfluence={0}
            parallax={0}
            noise={0}
          />
        </div>
      </div>
    </>
  );
}

export default StrategicAcquisitionsDetail;
