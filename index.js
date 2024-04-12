const express = require("express");
const mongoose = require("mongoose");
const Task = require("./models/task.model");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// GET - Fetching all the tasks
app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET :id - Fetching a task corresponding the given id
app.get("/api/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST - Creating a new task
app.post("/api/tasks", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT - Updating a task corresponding the given id
app.put("/api/task/:id", async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndUpdate(id, req.body);

  if (!task) {
    return res.status(404).json({ message: "Task not Found" });
  }

  const updatedTask = await Task.findById(id);
  res.status(200).json(updatedTask);
});

// DELETE - Deleting a task corresponding the given id
app.delete("/api/task/:id", async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndDelete(id);

  if (!task) {
    return res.status(404).json({ message: "Task not Found" });
  }

  res.status(200).json({ message: "Task deleted successfully" });
});

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const cluster = process.env.MONGODB_CLUSTER;
const database = process.env.MONGODB_DATABASE;

const connectionString = `mongodb+srv://${username}:${password}@${cluster}/${database}?retryWrites=true&w=majority`;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connected to Database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
