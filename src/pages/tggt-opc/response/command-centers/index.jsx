import { ArrowUp } from "lucide-react";
import { useNavbarHeight } from "../../../../utils/useNavbarHeight";
import { ArrowDown } from "lucide-react";
import { Search } from "lucide-react";
import PrimaryButton from "../../../../components/PrimaryButton";
import { Plus } from "lucide-react";

function CommandCenters() {
  const navHeight = useNavbarHeight();

  return (
    <>
      <div className="relative py-5" style={{ marginTop: `${navHeight}px` }}>
        {/* Container spacing so designs are not covered by the fixed nav */}
        <div className="wrapper py-10 flex-center">
          <h1 className="w-90 text-3xl text-center font-tactic text-white">
            SEARCH AND RESCUE
          </h1>
        </div>
        <img
          className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-20"
          src="/stock-photos/search-and-rescue.jpg"
        />
      </div>
      <div className="wrapper flex gap-8 py-12">
        {/* FILTER, MAKE IT COMPONENT AND DYNAMIC AND APPLY DROPDOWN FUNCTION*/}
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex-between pt-2 border-t border-gray-6 cursor-pointer">
              <div>MISSION</div>
              <ArrowUp size={15} />
            </div>
            <ul className="flex flex-col gap-2 pt-2">
              <li className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="cssr"
                  className="peer w-4 h-4 bg-gray-1 border border-gray-6 rounded checked:bg-gray-1 checked:border-gray-6 accent-white"
                />
                <label htmlFor="cssr" className="cursor-pointer">
                  CSSR ELSAR
                </label>
              </li>
              <li className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="road"
                  className="peer w-4 h-4 bg-gray-1 border border-gray-6 rounded checked:bg-gray-1 checked:border-gray-6 accent-white"
                />
                <label htmlFor="road" className="cursor-pointer">
                  ROAD RESCUE
                </label>
              </li>
              <li className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="wasar"
                  className="peer w-4 h-4 bg-gray-1 border border-gray-6 rounded checked:bg-gray-1 checked:border-gray-6 accent-white"
                />
                <label htmlFor="wasar" className="cursor-pointer">
                  WASAR RESCUE
                </label>
              </li>
              <li className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="wilderness"
                  className="peer w-4 h-4 bg-gray-1 border border-gray-6 rounded checked:bg-gray-1 checked:border-gray-6 accent-white"
                />
                <label htmlFor="wilderness" className="cursor-pointer">
                  WILDERNESS RESCUE
                </label>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex-between pt-2 border-t border-gray-6 cursor-pointer">
              <div>EQUIPMENTS</div>
              <ArrowUp size={15} />
            </div>
            <ul className="flex flex-col gap-2 pt-2">
              <li className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="extrication"
                  className="peer w-4 h-4 bg-gray-1 border border-gray-6 rounded checked:bg-gray-1 checked:border-gray-6 accent-white"
                />
                <label htmlFor="extrication" className="cursor-pointer">
                  EXTRICATION TOOLS
                </label>
              </li>
              <li className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="shoring"
                  className="peer w-4 h-4 bg-gray-1 border border-gray-6 rounded checked:bg-gray-1 checked:border-gray-6 accent-white"
                />
                <label htmlFor="shoring" className="cursor-pointer">
                  SHORING STABILIZER
                </label>
              </li>
              <li className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="wasar-equip"
                  className="peer w-4 h-4 bg-gray-1 border border-gray-6 rounded checked:bg-gray-1 checked:border-gray-6 accent-white"
                />
                <label htmlFor="wasar-equip" className="cursor-pointer">
                  WASAR RESCUE
                </label>
              </li>
              <li className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="lifting"
                  className="peer w-4 h-4 bg-gray-1 border border-gray-6 rounded checked:bg-gray-1 checked:border-gray-6 accent-white"
                />
                <label htmlFor="lifting" className="cursor-pointer">
                  LIFTING BAG
                </label>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex-between pt-2 border-t border-gray-6 cursor-pointer">
              <div>OTHERS</div>
              <ArrowDown size={15} />
            </div>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="grid gap-8">
          <div className="flex relative ">
            <input
              className="text-gray-10 border-b border-gray-6 py-2 outline-none focus:border-gray-10 transition-colors"
              type="text"
              name=""
              id=""
              placeholder="Search"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-6" />
          </div>
          {/* PRODUCT CARD COMPONENT */}
          <div className="grid gap-2 w-fit border border-gray-6 p-6">
            <div className="relative flex-center bg-gray-a2 w-50 h-50 p-6 ">
              <img
                className="object-cover w-full h-full"
                src="https://images.cdn-files-a.com/uploads/6982347/800_643ba5c465463.png"
                alt=""
              />
              <img
                className="absolute top-3 right-3"
                src="/product-logo/idex.png"
                alt=""
              />
            </div>
            <div>
              <p className="text-sm text-gray-8">SCORPE</p>
              <p>The Penetrator</p>
              <p className="text-xs text-gray-6">SKU: FEG-PN-11</p>
            </div>
            <PrimaryButton
              className={"text-xs py-2! px-2!"}
              icon={<Plus size={20} />}
              label={"ADD TO CART"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CommandCenters;
