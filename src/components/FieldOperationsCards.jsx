import { useState } from "react";
import { fieldOperations } from "../data/fieldOperationsData.js";
import SecondaryButton from "../components/SecondaryButton";
import { formatCardDate } from "../utils/formatCardDate.js";

function FieldOperationsCards() {
  const [selectedId, setSelectedId] = useState(null);

  const handleMouseEnter = (id) => {
    setSelectedId(id);
  };

  const handleMouseLeave = () => {
    setSelectedId(null);
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      {fieldOperations.map((fieldOps) => {
        const isSelected = selectedId === fieldOps.id;
        return (
          <div
            key={fieldOps.id}
            onMouseEnter={() => handleMouseEnter(fieldOps.id)}
            onMouseLeave={handleMouseLeave}
            className={`bg-transparent border border-gray-6  ${isSelected ? "border-b-red-6 " : "border-b-gray-a6 "} transition-all`}
          >
            <div className="relative transition-colors bg-gray-1">
              <img
                className={` transition-opacity h-80 w-full ${isSelected ? "opacity-40" : "opacity-60"} object-cover`}
                src={fieldOps.image.poster}
                alt={`${fieldOps.title} image`}
              />
              {isSelected && (
                <div className="absolute-center z-20">
                  <a href={`/main/field-operations/${fieldOps.id}`}>
                    <SecondaryButton label={"VIEW"} />
                  </a>
                </div>
              )}
            </div>

            <div className="py-8 px-6">
              <p className="text-xs text-red-8">
                {formatCardDate(fieldOps.startDate, fieldOps.endDate)}
              </p>
              <a href={`/main/field-operations/${fieldOps.id}`}>
                <p className="text-lg hover:text-red-8 hover:underline">
                  {fieldOps.title}
                </p>
              </a>
              <p className="text-xs text-description">
                {fieldOps.description.card}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FieldOperationsCards;
