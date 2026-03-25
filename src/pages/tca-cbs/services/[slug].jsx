import { Link, useLocation, useParams } from "react-router";
import ColorBlends from "../../../components/filters/ColorBlends";
import SecondaryButton from "../../../components/SecondaryButton";
import { BreadCrumbs } from "../../../components/BreadCrumbs";
import { useEffect } from "react";
import { tcaServicesData } from "../../../data/tcaServicesData";

function ServiceDetail() {
  const location = useLocation();
  const breadcrumbs = BreadCrumbs(location.pathname);
  const { slug } = useParams();

  const serviceData = tcaServicesData.find((i) => i.id === slug);
  const details = serviceData?.details || {};
  const description = details?.fullDescription || [];
  const deliverables = details?.deliverables || [];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!serviceData) return <div className="text-white pt-40 text-center">Service Not Found</div>;

  return (
    <>
      <div className="min-h-screen relative pt-30 pb-13">
        <div className="wrapper relative z-10 grid gap-6">
          <div className="grid gap-4">
            <div>
              {breadcrumbs}
            </div>
            <h1 className="uppercase text-2xl lg:text-3xl text-center lg:text-left">
              CAPABILITY: {serviceData.title}
            </h1>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-2">
            {/* LEFT - Context & Deliverables */}
            <div className="grid gap-10 px-6 lg:px-10 py-10 border border-gray-6 bg-gray-1/30 backdrop-blur-sm">
              <div className="grid gap-6 text-sm text-description text-justify leading-relaxed">
                {description.map((desc, idx) => (
                  <p key={idx}>{desc}</p>
                ))}
              </div>
              
              <div className="border-t border-gray-6 pt-6">
                <h3 className="text-xs font-bold tracking-widest text-white mb-6 uppercase">Key Deliverables</h3>
                <ul className="grid gap-4">
                  {deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-xs text-gray-a11 group">
                      <div className="w-1 h-1 bg-red-9 rounded-full shrink-0 group-hover:scale-150 transition-transform"></div>
                      <span className="tracking-wide uppercase">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* RIGHT - Media/Gallery */}
            <div className="border border-gray-6 flex flex-col min-h-[400px] overflow-hidden">
              <div className="w-full h-full relative group">
                <img 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  src={details.heroImage} 
                  alt="Service Visualization" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                   <p className="text-xs text-red-9 font-bold tracking-widest uppercase">CONFIDENTIAL</p>
                   <p className="text-lg text-white font-tactic">REFERENCE ARCHITECTURE</p>
                </div>
              </div>
            </div>
          </div>

          <div className="justify-self-center mt-6">
            <Link to={details.branchLink}>
              <SecondaryButton label={details.branchLabel} />
            </Link>
          </div>
        </div>

        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none">
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

export default ServiceDetail;
