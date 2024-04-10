import React from "react";

function Textfield({ label, icon, placeholder }) {
  return (
    <>
      <div>
        {label && (
          <label className="mt-2 flex justify-start text-sm font-medium leading-6 text-gray">
            {label}
          </label>
        )}
        <div className="relative mt-1 rounded-md shadow-sm">
          {icon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
              <span className="text-gray sm:text-sm">{icon}</span>
            </div>
          )}
          <input
            type="text"
            className="flex w-full rounded-md border-0 text-right py-1.5 pl-7 pr-2 bg-neutral-light text-primary placeholder:text-gray hover:ring-1 hover:ring-secondary focus:ring-2 focus:ring-offset focus:outline-0 focus:ring-secondary sm:text-sm sm:leading-6"
            placeholder={placeholder}
          />
        </div>
      </div>
    </>
  );
}

export default Textfield;
