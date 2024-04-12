const express = require("express");
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/product.controller");
const router = express.Router();

// GET - Fetching all the tasks
router.get("/", getTasks);

// GET :id - Fetching a task corresponding the given id
router.get("/:id", getTask);

// POST - Creating a new task
router.post("/", createTask);

// PUT - Updating a task corresponding the given id and returning that updating
router.put("/:id", updateTask);

// DELETE - Deleting a task corresponding the given id
router.delete("/:id", deleteTask);

module.exports = router;
