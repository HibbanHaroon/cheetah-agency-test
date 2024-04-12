"use client";

import React, { useState } from "react";
import CheckCircleIcon from "../../../public/icons/CheckCircleIcon";
import DotIcon from "../../../public/icons/DotIcon";
import { useAppContext } from "@/context/store";

function Task() {
  const { taskList, setTaskList } = useAppContext();
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  return (
    <div
      className="relative group w-full rounded-t-md border-b-2 border-primary-light"
      onMouseEnter={() => setShowAdditionalInfo(true)}
      onMouseLeave={() => setShowAdditionalInfo(false)}
    >
      <div className="m-1 w-8 h-8 absolute inset-y-0 start-0 flex items-center px-1 cursor-pointer">
        <CheckCircleIcon></CheckCircleIcon>
      </div>
      <input
        type="text"
        className="flex w-full border-0 py-2 pl-11 pr-11 bg-neutral text-black placeholder:text-gray focus:outline-2 focus:outline-primary sm:text-sm sm:leading-6"
        placeholder="Add new task"
      />
      <div className="m-1 w-8 h-8 absolute inset-y-0 end-0 flex items-center px-1 cursor-grab">
        <DotIcon></DotIcon>
      </div>
      {showAdditionalInfo && (
        <div className="hidden group-hover:block flex flex-col inset-x-0 top-full bg-neutral-light p-3">
          <p className="m-1 px-2 text-sm text-black">
            <strong>Completed: </strong>Pending
          </p>
          <p className="m-1 px-2 text-sm text-black">
            <strong>Created At: </strong>5/31/2023 1:55PM
          </p>
          <button className="mt-2 p-2 w-full rounded-md bg-red-light hover:bg-red-dark hover:text-white text-red">
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default Task;
