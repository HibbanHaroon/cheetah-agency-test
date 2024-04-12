const express = require("express");
const mongoose = require("mongoose");
const Task = require("./models/task.model");
const taskRoute = require("./routes/task.route");

const app = express();

// Configuring it to use JSON in the request body
app.use(express.json());

// Configuring it to use Form URL Encoded in the request body
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/tasks", taskRoute);

app.get("/", (req, res) => {
  res.send(
    "Welcome to Todo List Api! <br>Here lies the backend for the project Todo List App made for the skill assessment test in Cheetah Agency."
  );
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
