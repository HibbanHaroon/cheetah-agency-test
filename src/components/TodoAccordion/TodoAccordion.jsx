import React from "react";
import ChevronIcon from "../../../public/icons/ChevronIcon";
import ListIcon from "../../../public/icons/ListIcon";

function TodoAccordion() {
  return (
    <details className="mt-10 w-full h-60 group" open>
      <summary className="p-3 list-none flex flex-row items-center justify-between cursor-pointer rounded-md ring-gray ring-1 backdrop-blur-sm">
        <div className="flex items-center justify-center">
          <ListIcon></ListIcon>
          <h3 className="ml-2 text-sm select-none">Your Todos</h3>
        </div>
        <div className="flex h-4 justify-end group-open:rotate-180">
          <ChevronIcon></ChevronIcon>
        </div>
      </summary>
      <div>
        <div className="mt-2 p-10 w-full flex flex-col items-center justify-center opacity-95 rounded-md bg-white">
          <div>
            <p className="text-sm text-black select-none">No Task Today</p>
          </div>
        </div>
      </div>
    </details>
  );
}

export default TodoAccordion;
