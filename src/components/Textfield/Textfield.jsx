"use client";

import React, { useState } from "react";
import { useAppContext } from "@/context/store";
import PlusIcon from "../../../public/icons/PlusIcon";

function Textfield() {
  const { taskList, setTaskList } = useAppContext();
  const [taskContent, setTaskContent] = useState("");

  const addTask = () => {
    if (taskContent.trim() !== "") {
      const currentDate = new Date();

      const formattedDate = `${currentDate.getDate()}/${
        currentDate.getMonth() + 1
      }/${currentDate.getFullYear()}, ${currentDate.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      })}`;

      const formattedId = `${currentDate.getHours()}${currentDate.getMinutes()}${currentDate.getSeconds()}${currentDate.getMilliseconds()}`;

      setTaskList([
        {
          id: formattedId,
          content: taskContent,
          createdAt: formattedDate,
          status: "Pending",
        },
        ...taskList,
      ]);

      setTaskContent("");
    }
  };

  return (
    <div className="relative w-full rounded-md shadow-sm mt-8">
      <input
        type="text"
        id="main-textfield"
        className="flex w-full rounded-md border-0 py-2 pl-3 pr-11 bg-white text-black placeholder:text-gray hover:ring-1 hover:ring-primary-light focus:ring-2 focus:ring-offset focus:outline-0 focus:ring-primary sm:text-sm sm:leading-6"
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
        className="m-1 w-8 h-8 absolute inset-y-0 end-0 flex items-center px-1 bg-primary-light rounded-md cursor-pointer hover:bg-primary-dark"
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
