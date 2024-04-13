"use server";

const API_URL = "http://localhost:8080/api";

export async function getTasks() {
  try {
    const response = await fetch(`${API_URL}/tasks`);
    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }
    const result = await response.json();
    return {
      success: true,
      data: {
        response: result,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: { status: "Error", message: error.message },
    };
  }
}

export async function createTask(task) {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
    return await response.json();
  } catch (error) {
    return { status: "Error", message: error.message };
  }
}

export async function getTaskById(taskId) {
  try {
    const response = await fetch(`${API_URL}/tasks/${taskId}`);
    if (!response.ok) {
      throw new Error("Task not found");
    }
    const result = await response.json();
    console.log("result", result);
    return { success: true, data: result };
  } catch (error) {
    return {
      success: false,
      error: { status: "Error", message: error.message },
    };
  }
}

export async function updateTaskById(taskId, updatedData) {
  try {
    const response = await fetch(`${API_URL}/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      throw new Error("Failed to update task");
    } else {
      const result = await response.json();
      return {
        success: true,
        message: result,
      };
    }
  } catch (error) {
    return { status: "Error", message: error.message };
  }
}

export async function deleteTaskById(taskId) {
  try {
    const response = await fetch(`${API_URL}/tasks/${taskId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete task");
    } else {
      const result = await response.json();
      return {
        success: true,
        message: result,
      };
    }
  } catch (error) {
    return { status: "Error", message: error.message };
  }
}
