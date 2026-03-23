import { useLocation } from "react-router";
import PrimaryButton from "./PrimaryButton";
import { getActiveTab } from "../utils/getActiveTab";
import { productSpotlightData } from "../data/productSpotlightData.js";
import { useState } from "react";
import Noisy from "./Noisy.jsx";

function ProductSpotlight() {
  // CURRENT TAB
  const location = useLocation();
  const pathname = location.pathname;
  const activeTab = getActiveTab(pathname);
  const productSpotlightContents = productSpotlightData[activeTab] || {};

  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const productFeatures = productSpotlightContents?.features?.options;

  console.log(productFeatures);
  return (
    <div className="min-h-screen-nav">
      <div className="wrapper py-12 grid justify-center">
        <div className="grid grid-cols-2 gap-27">
          {/* LEFT */}
          <div className="grid gap-10">
            <div className="grid gap-3">
              <p className="text-xs text-gray-7">
                {productSpotlightContents.category}
              </p>
              <h1 className=" text-6xl">{productSpotlightContents.title}</h1>
              <p className="w-3/4 text-description text-sm ">
                {productSpotlightContents.description}
              </p>
            </div>
            <div className="justify-self-center w-110 h-70">
              {/* PRODUCT */}
              <img
                className="w-full h-full object-fill"
                src={productSpotlightContents.mainProductImage}
                alt=""
              />
            </div>
          </div>
          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            <p className="text-sm text-gray-7 text-center uppercase">
              {productSpotlightContents?.features.title}
            </p>

            <div className="p-8 grid gap-5 border border-gray-6">
              {/* 1. THE LIST: Map through features and apply active state styling */}
              <div className="grid gap-4">
                {productFeatures.map((productFeature, index) => {
                  const isActive = activeFeatureIndex === index;

                  return (
                    <div
                      key={productFeature.id}
                      onClick={() => setActiveFeatureIndex(index)}
                      className={`filter-[url(#noise)] py-3 px-4 flex gap-8 border-t border-l border-b-0 border-gray-6 border-r-0 cursor-pointer transition-all duration-300 ${isActive && "bg-red-9"}`}
                    >
                      <span className="text-sm">{productFeature.id}</span>
                      <span className="text-sm font-semibold tracking-wider">
                        {productFeature.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* 2. THE DISPLAY: Dynamically show the data based on activeFeatureIndex */}
              <div className="mt-4">
                {productFeatures[activeFeatureIndex] && (
                  <div className="grid grid-cols-2 items-center gap-6 justify-center">
                    <p className="px-6 text-sm text-gray-400 leading-relaxed text-center">
                      {productFeatures[activeFeatureIndex].description}
                    </p>
                    <div className="w-full h-32 overflow-hidden border border-gray-800">
                      <img
                        className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
                        src={productFeatures[activeFeatureIndex].featureImage}
                        alt={productFeatures[activeFeatureIndex].label}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-center">
          <PrimaryButton className={"px-7 py-4"} label={"EXPLORE MORE"} />
        </div>
      </div>
    </div>
  );
}

export default ProductSpotlight;
