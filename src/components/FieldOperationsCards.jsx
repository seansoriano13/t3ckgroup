import { useState } from "react";
import { fieldOperations } from "../data/fieldOps";

function FieldOperationsCards() {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="flex gap-6">
      {fieldOperations.map((fieldOps, i) => {
        const isSelected = fieldOps.id === selectedId;

        return (
          <div
            key={i}
            onClick={() => handleSelect(fieldOps.id)}
            className={`cursor-pointer bg-gray-4 border-b-3  ${isSelected ? "border-red-6 opacity-100" : "border-gray-a6 opacity-70"} `}
          >
            <img
              className="h-80 w-full opacity-80 object-cover"
              src={fieldOps.image}
              alt=""
            />
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
