import { ArrowUp } from "lucide-react";
import { useNavbarHeight } from "../../../../utils/useNavbarHeight";
import { ArrowDown } from "lucide-react";
import { Search } from "lucide-react";
import PrimaryButton from "../../../../components/PrimaryButton";
import { Plus } from "lucide-react";
import { useState } from "react";

function CommandCenters() {
  const navHeight = useNavbarHeight();
  const [openFilters, setOpenFilters] = useState({
    mission: true,
    equipments: true,
    others: false,
  });

  const toggleFilter = (key) => {
    setOpenFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
        <div className="flex flex-col gap-4 mt-10 w-64 shrink-0">
          <div>
            <div onClick={() => toggleFilter('mission')} className="flex-between pt-2 border-t border-gray-6 cursor-pointer hover:text-white transition-colors">
              <div className="font-bold text-sm tracking-widest">MISSION</div>
              {openFilters.mission ? <ArrowUp size={15} /> : <ArrowDown size={15} />}
            </div>
            {openFilters.mission && (
              <ul className="flex flex-col gap-2 pt-4 pb-2">
                <li className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="cssr"
                    className="peer w-4 h-4 bg-gray-1 border border-gray-6 rounded checked:bg-gray-1 checked:border-gray-6 accent-white cursor-pointer"
                  />
                  <label htmlFor="cssr" className="cursor-pointer text-sm text-gray-11 hover:text-white transition-colors">
                    CSSR ELSAR
                  </label>
                </li>
                <li className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="road"
                    className="peer w-4 h-4 bg-gray-1 border border-gray-6 rounded checked:bg-gray-1 checked:border-gray-6 accent-white cursor-pointer"
                  />
                  <label htmlFor="road" className="cursor-pointer text-sm text-gray-11 hover:text-white transition-colors">
                    ROAD RESCUE
                  </label>
                </li>
                <li className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="wasar"
                    className="peer w-4 h-4 bg-gray-1 border border-gray-6 rounded checked:bg-gray-1 checked:border-gray-6 accent-white cursor-pointer"
                  />
                  <label htmlFor="wasar" className="cursor-pointer text-sm text-gray-11 hover:text-white transition-colors">
                    WASAR RESCUE
                  </label>
                </li>
                <li className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="wilderness"
                    className="peer w-4 h-4 bg-gray-1 border border-gray-6 rounded checked:bg-gray-1 checked:border-gray-6 accent-white cursor-pointer"
                  />
                  <label htmlFor="wilderness" className="cursor-pointer text-sm text-gray-11 hover:text-white transition-colors">
                    WILDERNESS RESCUE
                  </label>
                </li>
              </ul>
            )}
          </div>

          <div>
            <div onClick={() => toggleFilter('equipments')} className="flex-between pt-2 border-t border-gray-6 cursor-pointer hover:text-white transition-colors">
              <div className="font-bold text-sm tracking-widest">EQUIPMENTS</div>
              {openFilters.equipments ? <ArrowUp size={15} /> : <ArrowDown size={15} />}
            </div>
            {openFilters.equipments && (
              <ul className="flex flex-col gap-2 pt-4 pb-2">
                <li className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="extrication"
                    className="peer w-4 h-4 bg-gray-1 border border-gray-6 rounded checked:bg-gray-1 checked:border-gray-6 accent-white cursor-pointer"
                  />
                  <label htmlFor="extrication" className="cursor-pointer text-sm text-gray-11 hover:text-white transition-colors">
                    EXTRICATION TOOLS
                  </label>
                </li>
                <li className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="shoring"
                    className="peer w-4 h-4 bg-gray-1 border border-gray-6 rounded checked:bg-gray-1 checked:border-gray-6 accent-white cursor-pointer"
                  />
                  <label htmlFor="shoring" className="cursor-pointer text-sm text-gray-11 hover:text-white transition-colors">
                    SHORING STABILIZER
                  </label>
                </li>
                <li className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="wasar-equip"
                    className="peer w-4 h-4 bg-gray-1 border border-gray-6 rounded checked:bg-gray-1 checked:border-gray-6 accent-white cursor-pointer"
                  />
                  <label htmlFor="wasar-equip" className="cursor-pointer text-sm text-gray-11 hover:text-white transition-colors">
                    WASAR RESCUE
                  </label>
                </li>
                <li className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="lifting"
                    className="peer w-4 h-4 bg-gray-1 border border-gray-6 rounded checked:bg-gray-1 checked:border-gray-6 accent-white cursor-pointer"
                  />
                  <label htmlFor="lifting" className="cursor-pointer text-sm text-gray-11 hover:text-white transition-colors">
                    LIFTING BAG
                  </label>
                </li>
              </ul>
            )}
          </div>

          <div>
            <div onClick={() => toggleFilter('others')} className="flex-between pt-2 border-t border-gray-6 cursor-pointer hover:text-white transition-colors">
              <div className="font-bold text-sm tracking-widest">OTHERS</div>
              {openFilters.others ? <ArrowUp size={15} /> : <ArrowDown size={15} />}
            </div>
            {openFilters.others && (
              <div className="pt-4 pb-2 text-xs text-gray-8">No other filters available.</div>
            )}
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
