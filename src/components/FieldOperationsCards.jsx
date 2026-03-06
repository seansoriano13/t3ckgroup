import { useState } from "react";
import { fieldOperations } from "../data/fieldOps";
import SecondaryButton from "../components/SecondaryButton";

function FieldOperationsCards() {
  const [selectedId, setSelectedId] = useState(null);

  const handleMouseEnter = (id) => {
    setSelectedId(id);
  };

  const handleMouseLeave = () => {
    setSelectedId(null);
  };

  return (
    <div className="flex gap-6">
      {fieldOperations.map((fieldOps, i) => {
        const isSelected = selectedId === fieldOps.id;
        return (
          <div
            key={i}
            onMouseEnter={() => handleMouseEnter(fieldOps.id)}
            onMouseLeave={handleMouseLeave}
            className={`bg-gray-4 border-b-3  ${isSelected ? "border-red-6 " : "border-gray-a6 "} transition-all`}
          >
            <div className="relative transition-colors bg-gray-1">
              <img
                className={` transition-opacity h-80 w-full ${isSelected ? "opacity-40" : "opacity-80"} object-cover`}
                src={fieldOps.image}
                alt=""
              />
              {isSelected && (
                <div className="absolute-center z-20">
                  <SecondaryButton label={"VIEW"} />
                </div>
              )}
            </div>

            <div className="py-8 px-6">
              <p className="text-xs text-red-8">{fieldOps.dateRange}</p>
              <p className="text-lg">{fieldOps.title}</p>
              <p className="text-sm text-description">{fieldOps.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FieldOperationsCards;
