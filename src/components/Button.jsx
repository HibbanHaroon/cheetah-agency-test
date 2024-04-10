import React from "react";

function Button({ text, backgroundColor = "bg-primary" }) {
  return (
    <div>
      <button
        type="button"
        className={`w-full text-white hover:text-primary ${backgroundColor} hover:bg-neutral font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 focus:outline-0 border-none hover:border-non`}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
