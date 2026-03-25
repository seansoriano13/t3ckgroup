import SpotlightCard from "./SpotlightCard";
import ColorBlends from "../components/filters/ColorBlends";

const cardStyle = "bg-gray-1";

function MissionAndVision() {
  return (
    <div className="wrapper grid gap-6 py-22">
      <SpotlightCard className={cardStyle} spotlightColor="#b9d1fc2d">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 lg:p-12 grid gap-4 lg:gap-2 relative order-2 lg:order-1">
            <h3 className="text-2xl  z-10">OUR MISSION</h3>
            <p className="text-xs text-gray-11  z-10">
              To Provide high-quality equipment for sport climbing,
              work-at-height, and rescue professionals, including personal
              protective equipment (PPE), advanced rescue systems, and support
              services to assist clients in need.
            </p>
            <div className="absolute inset-0 z-0">
              <ColorBlends
                rotation={185}
                speed={0.1}
                colors={["#090303", "#383e4e", "#182332"]}
                transparent
                autoRotate={0}
                scale={0.7}
                frequency={1}
                warpStrength={1.1}
                mouseInfluence={0}
                parallax={0}
                noise={0.2}
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              className="object-top object-cover h-64 lg:h-50 w-full opacity-80"
              src="/mission-vision/rescue.jpg"
              alt=""
            />
          </div>
        </div>
      </SpotlightCard>
      <SpotlightCard className={cardStyle} spotlightColor="#b9d1fc2d">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <img
              className="object-cover h-64 lg:h-50 w-full opacity-80"
              src="/mission-vision/vision.jpg"
              alt=""
            />
          </div>
          <div className="p-8 lg:p-12 grid gap-4 lg:gap-2 relative">
            <div className="absolute inset-0 z-0">
              <ColorBlends
                rotation={185}
                speed={0.1}
                colors={["#090303", "#501b0d", "#030508"]}
                transparent
                autoRotate={0}
                scale={0.7}
                frequency={1}
                warpStrength={1.1}
                mouseInfluence={0}
                parallax={0}
                noise={0.2}
              />
            </div>
            <h3 className="text-2xl  z-10">OUR VISION</h3>
            <p className="text-xs text-gray-11  z-10">
              To be recognized as a leading distributor of technical gear, sport
              climbing equipment, PPE, and rescue systems, commited to
              exceptional service in an environment that nurtures innovation,
              professionalism, and teamwork
            </p>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}

export default MissionAndVision;
