import cors from "cors";
import express from "express";
import sequelize from "./db.js";
import { TaskList } from "./taskList.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

const taskList = new TaskList();

// Get all tasks
app.get("/api/tasks", async (req, res) => {
  try {
    res.json(await taskList.getAll());
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
});

// Get tasks by name
app.get("/api/tasks/name/:name", async (req, res) => {
  try {
    res.json(await taskList.getByName(req.params.name));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a task
app.post("/api/tasks", async (req, res) => {
  try {
    const task = await taskList.add(
      req.body.taskName,
      req.body.taskDescription,
      req.body.taskStatus,
      req.body.taskPriority,
      req.body.startDate,
      req.body.endDate,
      req.body.taskProgress,
    );

    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a task
app.put("/api/tasks/:id", async (req, res) => {
  try {
    const task = await taskList.update(
      req.params.id,
      req.body.taskName,
      req.body.taskDescription,
      req.body.taskStatus,
      req.body.taskPriority,
      req.body.startDate,
      req.body.endDate,
      req.body.taskProgress,
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Partially update a task
app.patch("/api/tasks/:id", async (req, res) => {
  try {
    const task = await taskList.patch(req.params.id, req.body);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a task
app.delete("/api/tasks/:id", async (req, res) => {
  try {
    const task = await taskList.delete(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start server
const PORT = 3000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL connected successfully!");

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to start server:", error.message);
  }
}

startServer();
