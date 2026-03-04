import { fieldOperations } from "../../data/fieldOps";

function FieldOperationsCard() {
  return (
    <div className="flex gap-6">
      {fieldOperations.map((fieldOps, i) => (
        <div
          key={i}
          className="bg-gray-4 border-b-3 border-gray-a6 first:border-red-6 first:opacity-100 opacity-70"
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
      ))}
    </div>
  );
}

export default FieldOperationsCard;
