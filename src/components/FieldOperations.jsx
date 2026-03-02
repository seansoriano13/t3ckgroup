import React from "react";
import FieldOperationsCard from "./FieldOperationsCard";

function FieldOperations() {
  return (
    <div className="wrapper grid gap-6 py-16">
      <div>
        <h4 className="text-gray-6">ACTIVITIES</h4>
        <h3 className="text-2xl">FIELD OPERATIONS</h3>
      </div>
      <div>
        <FieldOperationsCard />
      </div>
    </div>
  );
}

export default FieldOperations;
