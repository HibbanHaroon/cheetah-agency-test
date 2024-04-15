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
import { saveOrderList } from "@/lib/redis";
import { toastMessage } from "@/utils/toastMessage";

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
  const { taskList, setTaskList, orderList, setOrderList } = useAppContext();
  const [draggedIndex, setDraggedIndex] = useState(null);

  // This useEffect will be run only once due to empty dependency list, and will fetch the viewTasks when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      viewTasks();
    };

    fetchData();
  }, []);

  const viewTasks = async () => {
    const response = await getTasks();

    if (response.success === false) {
      console.log("Something went wrong");
      toastMessage("Something went wrong", "❌");
    } else {
      setTaskList(response.data.taskList);
      setOrderList(response.data.orderList);
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
      // To fetch the taskList upon update
      viewTasks();
    } else {
      console.log("Something went wrong!");
      toastMessage("Something went wrong", "❌");
    }
  };

  const deleteTask = async (id) => {
    const deleteResponse = await deleteTaskById(id);

    if (deleteResponse.success === true) {
      console.log("Task Deleted Successfully.");
      toastMessage("Task Deleted!", "✅");
      // To fetch the taskList upon deletion
      viewTasks();

      // Only delete will have an effect on the orderList, update function will update the tasks and not the list.
      // Changing the order of the list upon deletion
      const index = orderList.indexOf(id);
      setOrderList(orderList.splice(index, 1));
    } else {
      console.log("Something went wrong!");
      toastMessage("Something went wrong", "❌");
    }
  };

  const statusChanged = async (id) => {
    const taskResponse = await getTaskById(id);

    if (taskResponse.success === false) {
      console.log("Something went wrong!");
      toastMessage("Something went wrong", "❌");
    } else {
      const task = taskResponse.data;
      const status = task.status === "Pending" ? "Completed" : "Pending";

      updateTask(id, task.content, status);
    }
  };

  const handleDragEnd = async (result) => {
    setDraggedIndex(null);

    if (!result.destination) return;

    // Order List has tasks id inside in order
    // Moving the id from the previous position(source), to the dropped position(destination) and adding it back to the orderList
    const [movedTaskId] = orderList.splice(result.source.index, 1);
    orderList.splice(result.destination.index, 0, movedTaskId);
    setOrderList(orderList);

    // Saving the order list in redis
    await saveOrderList(orderList);
  };

  return (
    <details className="mt-10 w-full h-60 group" open>
      <summary className="p-3 list-none flex flex-row items-center justify-between cursor-pointer rounded-md ring-primary-light ring-1 hover:ring-primary backdrop-brightness-75 backdrop-blur-sm shadow-md transition duration-200 ease">
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
                  orderList.map((taskId, index) => (
                    <Draggable
                      key={taskId}
                      draggableId={taskId}
                      index={index}
                      isDragDisabled={
                        draggedIndex !== null && draggedIndex !== index
                      }
                    >
                      {(provided, snapshot) => (
                        <Task
                          key={taskId}
                          task={taskList.find((task) => task._id === taskId)}
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
