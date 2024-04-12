"use client";

import React from "react";
import { useAppContext } from "@/context/store";
import Task from "../Task";
import ChevronIcon from "../../../public/icons/ChevronIcon";
import ListIcon from "../../../public/icons/ListIcon";

function TodoAccordion() {
  const { taskList, setTaskList } = useAppContext();

  const updateTask = (id, updatedContent) => {
    updatedContent.trim();
    setTaskList(
      taskList.map((task) =>
        task.id === id
          ? {
              ...task,
              content: updatedContent,
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const toggleCrossed = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "Pending" ? "Completed" : "Pending",
            }
          : task
      )
    );
  };

  return (
    <details className="mt-10 w-full h-60 group" open>
      <summary className="p-3 list-none flex flex-row items-center justify-between cursor-pointer rounded-md ring-primary-light ring-1 hover:ring-primary backdrop-brightness-75 backdrop-blur-sm shadow-md">
        <div className="flex h-6 items-center justify-center">
          <ListIcon></ListIcon>
          <h3 className="ml-2 text-sm select-none whitespace-nowrap">
            Your Todos
          </h3>
        </div>
        <div className="flex h-4 justify-end group-open:rotate-180">
          <ChevronIcon></ChevronIcon>
        </div>
      </summary>
      <div className="mt-2 w-full h-60 flex flex-col items-start bg-neutral opacity-95 rounded-md bg-neutra overflow-y-auto">
        {taskList.length == [] ? (
          <p className="text-sm self-center text-black select-none flex-grow flex items-center justify-center">
            No Task Today
          </p>
        ) : (
          taskList.map((task) => (
            <Task
              key={task.id}
              task={task}
              updateTask={updateTask}
              deleteTask={deleteTask}
              toggleCrossed={toggleCrossed}
            />
          ))
        )}
      </div>
    </details>
  );
}

export default TodoAccordion;
