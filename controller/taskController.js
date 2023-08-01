const Task = require("../models/task");

const taskController = {
  // Create a new task
  createTask: async (req, res) => {
    try {
      const { title, description, dueDate, assignedTo, status } = req.body;
      const newTask = new Task({
        title,
        description,
        dueDate,
        assignedTo,
        status,
      });
      const savedTask = await newTask.save();
      res.status(201).json(savedTask);
    } catch (error) {
      console.error("Error creating task:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // Get all tasks
  getAllTasks: async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (error) {
      console.error("Error getting tasks:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // Get a single task by ID
  getTaskById: async (req, res) => {
    try {
      const taskId = req.params.id;
      const task = await Task.findById(taskId);
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.json(task);
    } catch (error) {
      console.error("Error getting task:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // Update a task by ID
  updateTaskById: async (req, res) => {
    try {
      const taskId = req.params.id;
      const updates = req.body;
      const updatedTask = await Task.findByIdAndUpdate(taskId, updates, {
        new: true, // Return the updated task
      });
      if (!updatedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.json(updatedTask);
    } catch (error) {
      console.error("Error updating task:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // Delete a task by ID
  deleteTaskById: async (req, res) => {
    try {
      const taskId = req.params.id;
      const deletedTask = await Task.findByIdAndDelete(taskId);
      if (!deletedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.json({ message: "Task deleted successfully" });
    } catch (error) {
      console.error("Error deleting task:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = taskController;
