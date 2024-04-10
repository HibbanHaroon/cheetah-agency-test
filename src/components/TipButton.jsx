import React from "react";

function TipButton({ tipPercent }) {
  return (
    <div>
      <button
        type="button"
        className="w-full text-white bg-primary hover:bg-neutral hover:text-primary font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-0 hover:border-none"
      >
        {tipPercent}
      </button>
    </div>
  );
}

export default TipButton;
