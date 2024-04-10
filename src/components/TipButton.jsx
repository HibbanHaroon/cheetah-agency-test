import React from "react";

function TipButton({ tipPercent }) {
  return (
    <div>
      <button
        type="button"
        className="w-full text-white bg-primary hover:bg-primary font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-0 hover:border-primary"
      >
        {tipPercent}
      </button>
    </div>
  );
}

export default TipButton;
