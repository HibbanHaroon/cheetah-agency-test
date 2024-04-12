"use client";

import React, { useState } from "react";
import ChevronIcon from "../../../public/icons/ChevronIcon";
import ListIcon from "../../../public/icons/ListIcon";
import Task from "../Task";
import { useAppContext } from "@/context/store";

function TodoAccordion() {
  const { taskList, setTaskList } = useAppContext();

  return (
    <details className="mt-10 w-full h-60 group" open>
      <summary className="p-3 list-none flex flex-row items-center justify-between cursor-pointer rounded-md ring-primary-light ring-1 hover:ring-primary backdrop-brightness-75 backdrop-blur-sm shadow-md">
        <div className="flex h-5 items-center justify-center">
          <ListIcon></ListIcon>
          <h3 className="ml-2 text-sm select-none whitespace-nowrap">
            Your Todos
          </h3>
        </div>
        <div className="flex h-4 justify-end group-open:rotate-180">
          <ChevronIcon></ChevronIcon>
        </div>
      </summary>
      <div>
        <div className="mt-2 w-full flex flex-col opacity-95 rounded-md bg-white">
          <div>
            {/* <p className="text-sm text-black select-none">No Task Today</p> */}
            <Task></Task>
            <Task></Task>
          </div>
        </div>
      </div>
    </details>
  );
}

export default TodoAccordion;
