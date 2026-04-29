import { X, Plus, Minus, ArrowLeft, ArrowRight } from "lucide-react";
import { useCartStore } from "../store/useStore";
import { useState } from "react";
import { Img } from "react-image";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";

function ProductDetailModal({ product, isOpen, onClose }) {
  const { addToCart, openCartModal } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    onClose();
  };

  const incrementQty = () => setQuantity((prev) => prev + 1);
  const decrementQty = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/60 z-[999] backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* MODAL */}
      <div className="fixed top-10 right-10 h-[calc(100vh-80px)] w-[90%] max-w-lg bg-gray-1 border-l border-gray-3 z-1000 flex flex-col shadow-2xl overflow-y-auto">
        {/* HEADER */}
        <div className="flex-between border-b border-gray-3 p-6 shrink-0 sticky top-0 bg-gray-1 z-10">
          <div className="flex items-center gap-3">
            <h2 className="text-gray-a6 text-xs font-bold tracking-widest">
              TECH SPECS
            </h2>
          </div>

          <SecondaryButton
            onClick={onClose}
            label="CLOSE"
            className={"text-[10px] py-2! "}
          />
        </div>

        {/* CONTENT */}
        <div className="flex-1 p-6 flex flex-col gap-6 content-start items-center">
          <div className="w-full flex justify-end">
            {product?.brandImage && (
              <img
                className="h-5 object-contain"
                src={product.brandImage}
                alt="brand"
              />
            )}
          </div>

          <div className="w-full grid gap-2">
            <h3 className="text-2xl text-white font-bold leading-tight">
              {product?.name || "The Penetrator"}
            </h3>
            <p className="text-xs text-description leading-relaxed max-w-lg">
              {product?.description ||
                "The IMPACTOR is a manual percussion system that can be used as a pointer or concrete crusher. It is also equipped with a claw hammer, and a sheet metal cutting head."}
            </p>
          </div>

          {/* IMAGE CANVAS WITH ARROWS */}
          <div className="w-full max-w-sm flex items-center gap-4">
            <button className="text-gray-8 hover:text-white transition-colors shrink-0">
              <ArrowLeft size={32} />
            </button>

            <div className="flex-1 bg-gray-2 aspect-square flex-center p-8 overflow-hidden">
              <Img
                src={product?.image}
                className="w-full h-full object-cover"
                loader={
                  <div className="w-full h-full bg-gray-3 animate-pulse" />
                }
                unloader={
                  <span className="text-[10px] text-gray-8">
                    No Image Available
                  </span>
                }
              />
            </div>

            <button className="text-gray-8 hover:text-white transition-colors shrink-0">
              <ArrowRight size={32} />
            </button>
          </div>

          {/* SPECS GRID - Aligned with image canvas flex-1 */}
          <div className="w-full max-w-sm px-[48px]">
            <div className="grid grid-cols-2 gap-2">
              <div className="border border-gray-6 bg-gray-1 p-3 text-center flex flex-col justify-center min-h-[60px]">
                <p className="text-[9px] text-gray-8 uppercase mb-1 font-bold">
                  Impact Stroke
                </p>
                <p className="text-xs text-white font-bold">
                  {product?.impactStroke || "442 mm"}
                </p>
              </div>
              <div className="border border-gray-6 bg-gray-1 p-3 text-center flex flex-col justify-center min-h-[60px]">
                <p className="text-[9px] text-gray-8 uppercase mb-1 font-bold">
                  Hammer Height
                </p>
                <p className="text-xs text-white font-bold">
                  {product?.hammerHeight || "7.7 kg"}
                </p>
              </div>
              <div className="border border-gray-6 bg-gray-1 p-3 text-center flex flex-col justify-center min-h-[60px]">
                <p className="text-[9px] text-gray-8 uppercase mb-1 font-bold">
                  Total Weight
                </p>
                <p className="text-xs text-white font-bold">
                  {product?.weight || "19.6 kg"}
                </p>
              </div>
              <div className="border border-gray-6 bg-gray-1 p-3 text-center flex flex-col justify-center min-h-[60px]">
                <p className="text-[9px] text-gray-8 uppercase mb-1 font-bold">
                  Dimensions
                </p>
                <p className="text-xs text-white font-bold">
                  {product?.dimensions || "782 X 72 X 70 mm"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t border-gray-6 p-6 shrink-0 flex items-center justify-between mt-auto sticky bottom-0 bg-gray-1 z-10">
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-white font-bold tracking-tighter">
              QUANTITY
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={decrementQty}
                className="w-8 h-8 border border-gray-6 flex-center text-gray-8 hover:text-white transition-colors bg-gray-1"
              >
                <Minus size={14} />
              </button>
              <div className="w-12 h-10 border border-gray-6 flex-center text-red-9 font-bold text-sm bg-gray-1">
                {quantity}
              </div>
              <button
                onClick={incrementQty}
                className="w-8 h-8 border border-gray-6 flex-center text-gray-8 hover:text-white transition-colors bg-gray-1"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          <PrimaryButton label={"Add to Inquiry"} onClick={handleAddToCart} />
        </div>
      </div>
    </>
  );
}

export default ProductDetailModal;
