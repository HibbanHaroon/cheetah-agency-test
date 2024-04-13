"use client";

import React, { useState } from "react";
import { useAppContext } from "@/context/store";
import PlusIcon from "../../../public/icons/PlusIcon";
import { createTask } from "@/lib/service";
import { toastMessage } from "@/utils/ToastMessage";

function Textfield() {
  const { taskList, setTaskList } = useAppContext();
  const [taskContent, setTaskContent] = useState("");

  const addTask = async () => {
    if (taskContent.trim() !== "") {
      const task = {
        content: `${taskContent}`,
        status: "Pending",
      };

      const createResponse = await createTask(task);
      if (createResponse) {
        console.log("Added Task successfully.");
        setTaskList([...taskList, createResponse]);
        toastMessage("Task Added!", "✅");
      }

      setTaskContent("");
    }
  };

  return (
    <div className="relative w-full rounded-md shadow-sm mt-8">
      <input
        type="text"
        id="main-textfield"
        className="flex w-full rounded-md border-0 py-2 pl-3 pr-11 bg-white text-black placeholder:text-gray hover:ring-1 hover:ring-primary-light focus:ring-2 focus:ring-offset focus:outline-0 focus:ring-primary sm:text-sm sm:leading-6 transition duration-200 ease"
        placeholder="Add new task"
        onInput={(e) => setTaskContent(e.target.value)}
        onKeyDown={(e) =>
          e.key === "Enter" &&
          (e.preventDefault(),
          addTask(),
          setTaskContent(""),
          (document.getElementById("main-textfield").value = ""))
        }
      />
      <div
        className="m-1 w-8 h-8 absolute inset-y-0 end-0 flex items-center px-1 bg-primary-light rounded-md cursor-pointer hover:bg-primary-dark transition duration-200 ease"
        onClick={(e) => {
          e.preventDefault(),
            addTask(),
            setTaskContent(""),
            (document.getElementById("main-textfield").value = "");
        }}
      >
        <PlusIcon></PlusIcon>
      </div>
    </div>
  );
}

export default Textfield;
