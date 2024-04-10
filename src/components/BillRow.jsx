import React from "react";

function BillRow({ label }) {
  return (
    <div className="flex flex-row justify-between">
      <div className="p-3 flex flex-col justify-center">
        <p className="text-start text-white">{label}</p>
        <p className="text-start text-gray">/ person</p>
      </div>
      <div className="p-3 flex flex-row justify-center">
        <p className="text-secondary font-semibold text-4xl">$0.00</p>
      </div>
    </div>
  );
}

export default BillRow;
