const mongoose = require("mongoose");

// Define the Task schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  assignedTo: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["todo", "inProgress", "completed"],
    default: "todo",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Task model
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
