const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "Please provide task content"],
    },
    status: {
      type: String,
      required: [true, "Please provide task status"],
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
