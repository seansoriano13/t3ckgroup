import React from "react";
import FieldOperationsCards from "./FieldOperationsCards";

function FieldOperations() {
  // Future Improvements: Instead of FieldOperationsCards rendering all cards, make it one card, then do the map here
  return (
    <div className="wrapper grid gap-6 py-16">
      <div>
        <h4 className="text-gray-6">ACTIVITIES</h4>
        <h3 className="text-2xl">FIELD OPERATIONS</h3>
      </div>
      <div>
        <FieldOperationsCards />
      </div>
    </div>
  );
}

export default FieldOperations;
