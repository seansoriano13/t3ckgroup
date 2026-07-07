import PrimaryButton from "./PrimaryButton";
import { useState } from "react";
import DarkVeil from "./filters/DarkVeil.jsx";
import ProductDetailModal from "./ProductDetailModal";
import { useNavigate } from "react-router";

function ProductSpotlight({ data }) {
  const navigate = useNavigate();
  const productSpotlightContents = data || {};

  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productFeatures = productSpotlightContents?.features?.options || [];

  const handleExploreMore = () => {
    if (productSpotlightContents.ctaLink && window.location.pathname !== productSpotlightContents.ctaLink) {
      navigate(productSpotlightContents.ctaLink, {
        state: { openModalWithProductId: productSpotlightContents.productId || "spotlight-product" }
      });
    } else {
      setIsModalOpen(true);
    }
  };

  const productForModal = {
    id: productSpotlightContents.productId || "spotlight-product",
    name: productSpotlightContents.title,
    description: productSpotlightContents.description,
    image: productSpotlightContents.mainProductImage,
    category: productSpotlightContents.category,
  };

  return (
    <div className="relative min-h-screen-nav">
      {/* DarkVeil background - Wrapped in a strict absolute div */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <DarkVeil
          hueShift={-120}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      {/* Page content */}
      <div className="wrapper py-20 lg:py-30 grid gap-4 justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-27">
          {/* LEFT */}
          <div className="grid gap-10">
            <div className="grid gap-2">
              <p className="text-xs text-gray-7 text-center lg:text-left">
                {productSpotlightContents.category}
              </p>
              <h1 className="text-3xl lg:text-4xl text-center lg:text-left">{productSpotlightContents.title}</h1>
              <p className="w-full lg:w-3/4 text-description text-xs text-center lg:text-left mx-auto lg:mx-0">
                {productSpotlightContents.description}
              </p>
            </div>
            <div className="justify-self-center w-80 h-56 mt-4">
              <img
                className="w-full h-full object-contain"
                src={productSpotlightContents.mainProductImage}
                alt=""
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-3 px-0 lg:px-6">
            <p className="text-xs text-gray-7 text-center uppercase">
              {productSpotlightContents?.features.title}
            </p>

            <div className="p-6 grid gap-4 border border-gray-6">
              <div className="grid gap-3">
                {productFeatures.map((productFeature, index) => {
                  const isActive = activeFeatureIndex === index;

                  return (
                    <div
                      key={productFeature.id}
                      onClick={() => setActiveFeatureIndex(index)}
                      className={`filter-[url(#noise)] py-2 px-3 flex gap-6 border-t border-l border-b-0 border-gray-6 border-r-0 cursor-pointer transition-all duration-300 ${
                        isActive && "bg-red-9"
                      }`}
                    >
                      <span className="text-xs">{productFeature.id}</span>
                      <span className="text-xs font-semibold tracking-wider">
                        {productFeature.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-3">
                {productFeatures[activeFeatureIndex] && (
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 justify-center">
                    <p className="px-4 text-xs text-gray-400 leading-relaxed text-center">
                      {productFeatures[activeFeatureIndex].description}
                    </p>
                    <div className="w-full h-24 overflow-hidden border border-gray-800">
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

        <div className="flex-center mt-10">
          <PrimaryButton className="px-7 py-4" label="EXPLORE MORE" onClick={handleExploreMore} />
        </div>
      </div>

      <ProductDetailModal
        product={productForModal}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default ProductSpotlight;
