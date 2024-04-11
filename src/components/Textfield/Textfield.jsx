import React from "react";
import PlusIcon from "../../../public/icons/PlusIcon";

function Textfield() {
  return (
    <div className="relative w-full rounded-md shadow-sm mt-8">
      <input
        type="text"
        className="flex w-full rounded-md border-0 py-2 pl-3 pr-11 bg-white text-black placeholder:text-gray hover:ring-1 hover:ring-primary-light focus:ring-2 focus:ring-offset focus:outline-0 focus:ring-primary sm:text-sm sm:leading-6"
        placeholder="Add new task"
      />
      <div className="m-1 w-8 h-8 absolute inset-y-0 end-0 flex items-center px-1 bg-primary-light rounded-md cursor-pointer hover:bg-primary-dark">
        <PlusIcon></PlusIcon>
      </div>
    </div>
  );
}

export default Textfield;
