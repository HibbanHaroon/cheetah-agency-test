"use client";

import React, { useEffect } from "react";
import { useAppContext } from "@/context/store";
import Task from "../Task";
import ChevronIcon from "../../../public/icons/ChevronIcon";
import ListIcon from "../../../public/icons/ListIcon";
import {
  deleteTaskById,
  getTaskById,
  getTasks,
  updateTaskById,
} from "@/lib/service";

function TodoAccordion() {
  const { taskList, setTaskList } = useAppContext();

  useEffect(() => {
    const fetchData = async () => {
      viewTasks();
    };

    fetchData();
  }, []);

  const viewTasks = async () => {
    const tasksResponse = await getTasks();

    if (tasksResponse.success === false) {
      console.log("Something went wrong");
      // display error in snackbar
    } else {
      setTaskList(tasksResponse.data.response);
    }
  };

  const updateTask = async (id, content, status) => {
    content.trim();

    const data = {
      content: `${content}`,
      status: `${status}`,
    };

    const updateResponse = await updateTaskById(id, data);

    if (updateResponse.success === true) {
      console.log("Task Updated Successfully.");
      viewTasks();
    } else {
      console.log("Something went wrong!");
      // display error in snackbar
    }
  };

  const deleteTask = async (id) => {
    const deleteResponse = await deleteTaskById(id);
    console.log(deleteResponse);

    if (deleteResponse.success === true) {
      console.log("Task Deleted Successfully.");
      viewTasks();
    } else {
      console.log("Something went wrong!");
      // display error in snackbar
    }
  };

  const statusChanged = async (id) => {
    const taskResponse = await getTaskById(id);
    console.log(taskResponse);

    if (taskResponse.success === false) {
      console.log("Something went wrong!");
      // display error in snackbar
    } else {
      const task = taskResponse.data;
      const status = task.status === "Pending" ? "Completed" : "Pending";

      updateTask(id, task.content, status);
    }
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
        {taskList.length == 0 ? (
          <p className="text-sm self-center text-black select-none flex-grow flex items-center justify-center">
            No Task Today
          </p>
        ) : (
          taskList.map((task) => (
            <Task
              key={task._id}
              task={task}
              updateTask={updateTask}
              deleteTask={deleteTask}
              statusChanged={statusChanged}
            />
          ))
        )}
      </div>
    </details>
  );
}

export default TodoAccordion;
