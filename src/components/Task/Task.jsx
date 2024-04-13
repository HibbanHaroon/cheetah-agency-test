"use client";

import React, { useState, useEffect } from "react";
import CheckCircleIcon from "../../../public/icons/CheckCircleIcon";
import DotIcon from "../../../public/icons/DotIcon";
import { convertDateTime } from "@/utils/convertDateTime";
import { useAppContext } from "@/context/store";

function Task({
  task,
  updateTask,
  deleteTask,
  statusChanged,
  provided,
  snapshot,
}) {
  // Global state of hoveredAllowed is necessary for other Task components in the TodoAccordion to know
  // that hovered is not allowed while dragging
  const { hoveredAllowed, setHoveredAllowed } = useAppContext();
  const [updatedTaskContent, setUpdatedTaskContent] = useState(task.content);
  const [isHovered, setIsHovered] = useState(false);

  // Custom styling hover dragging
  const getItemStyle = (isDragging, draggableStyle) => ({
    boxShadow: isDragging
      ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      : "none",
    ...draggableStyle,
  });

  // Hovered is not allowed when dragging a Task... as Additional Information div containing status and createdAt is shown.
  useEffect(() => {
    if (snapshot.isDragging) {
      setHoveredAllowed(false);
    } else {
      setHoveredAllowed(true);
    }
  }, [snapshot.isDragging]);

  useEffect(() => {
    if (!snapshot.isDragging && isHovered && hoveredAllowed) {
      document.getElementById("info").style.display = "block";
    }
  }, [isHovered]);

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        className="relative w-full rounded-t-md border-b-2 border-primary-light"
        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
      >
        <div
          className="m-1 w-8 absolute inset-y-0 start-0 flex item-center px-1 cursor-pointer hover:scale-110 transition duration-200 ease"
          onClick={() => {
            statusChanged(task._id);
          }}
        >
          {task.status === "Pending" ? (
            <CheckCircleIcon
              fill="none"
              strokeWidth={1.5}
              stroke="#7c6f5a"
            ></CheckCircleIcon>
          ) : (
            <CheckCircleIcon
              fill="#7c6f5a"
              strokeWidth={1.5}
              stroke="none"
            ></CheckCircleIcon>
          )}
        </div>
        <input
          type="text"
          className="flex w-full border-0 py-2 pl-11 pr-11 bg-neutral text-black placeholder:text-gray rounded-t-md focus:outline-2 focus:outline-primary sm:text-sm sm:leading-6"
          placeholder="Add new task"
          value={updatedTaskContent}
          onInput={(e) => {
            const updatedContent = e.target.value;
            setUpdatedTaskContent(updatedContent);
            updateTask(task._id, updatedContent, task.status);
          }}
        />
        <div
          {...provided.dragHandleProps}
          className="drag-icon-container m-1 w-8 absolute inset-y-0 end-0 flex items-center px-1 cursor-grab hover:scale-110 transition duration-200 ease"
        >
          <DotIcon></DotIcon>
        </div>
      </div>
      {/* When the Task is not being dragged, hovered is allowed and the current task is being hovered 
      only then display the additional information div */}
      {!snapshot.isDragging && isHovered && hoveredAllowed && (
        <div
          id="info"
          className="hidden flex flex-col inset-x-0 top-full bg-neutral-light p-3"
        >
          <p className="m-1 px-2 text-sm text-black">
            <strong>Status: </strong>
            {task.status}
          </p>
          <p className="m-1 px-2 text-sm text-black">
            <strong>Created At: </strong>
            {convertDateTime(task.createdAt)}
          </p>
          <button
            className="mt-2 p-2 w-full rounded-md bg-red-light hover:bg-red-dark hover:text-white text-red transition duration-200 ease"
            onClick={() => {
              deleteTask(task._id);
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default Task;
