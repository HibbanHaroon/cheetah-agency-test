"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
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

// Dyanmically importing disables loading react-beautiful-dnd modules in the SSR mode.
const DragDropContext = dynamic(
  () =>
    import("react-beautiful-dnd").then((mod) => {
      return mod.DragDropContext;
    }),
  { ssr: false }
);
const Droppable = dynamic(
  () =>
    import("react-beautiful-dnd").then((mod) => {
      return mod.Droppable;
    }),
  { ssr: false }
);
const Draggable = dynamic(
  () =>
    import("react-beautiful-dnd").then((mod) => {
      return mod.Draggable;
    }),
  { ssr: false }
);

function TodoAccordion() {
  const { taskList, setTaskList } = useAppContext();
  const [draggedIndex, setDraggedIndex] = useState(null);

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

  const handleDragEnd = (result) => {
    setDraggedIndex(null);

    if (!result.destination) return;

    // const updatedGoals = Array.from(goals);
    // const [movedGoal] = updatedGoals.splice(result.source.index, 1);
    // updatedGoals.splice(result.destination.index, 0, movedGoal);
    // setGoals(updatedGoals);
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
      <div className="task-list">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="task-list" type="group" direction="vertical">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="mt-2 w-full h-60 flex flex-col items-start bg-neutral opacity-95 rounded-md bg-neutra overflow-y-auto"
              >
                {taskList.length == 0 ? (
                  <p className="text-sm self-center text-black select-none flex-grow flex items-center justify-center">
                    No Task Today
                  </p>
                ) : (
                  taskList.map((task, index) => (
                    <Draggable
                      key={task._id}
                      draggableId={task._id}
                      index={index}
                      isDragDisabled={
                        draggedIndex !== null && draggedIndex !== index
                      }
                    >
                      {(provided, snapshot) => (
                        <Task
                          key={task._id}
                          task={task}
                          index={index}
                          updateTask={updateTask}
                          deleteTask={deleteTask}
                          statusChanged={statusChanged}
                          provided={provided}
                          snapshot={snapshot}
                        />
                      )}
                    </Draggable>
                  ))
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </details>
  );
}

export default TodoAccordion;
