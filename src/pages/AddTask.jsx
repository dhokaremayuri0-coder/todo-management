import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BadgeType } from "../Constant/ToDoConstant";
import "./AddTask.css";

export default function AddTask(props) {
  const navigate = useNavigate();

  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState(BadgeType.notStarted);
  const [taskPriority, setTaskPriority] = useState(BadgeType.medium);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [taskProgress, setTaskProgress] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();

    const newTask = {
      taskName: taskName,
      taskDescription: taskDescription,
      taskStatus: taskStatus,
      taskPriority: taskPriority,
      startDate: startDate,
      endDate: endDate,
      taskProgress: Number(taskProgress),
    };

    props.onAddTask(newTask);

    navigate("/");
  }

  return (
    <div className="AddTask">
      <h2>Add Task</h2>
      <p>Create a new task for your workspace</p>

      <form className="taskForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label>Task Name</label>
          <input
            type="text"
            value={taskName}
            onChange={(event) => setTaskName(event.target.value)}
            placeholder="Enter task name"
            required
          />
        </div>

        <div className="formGroup">
          <label>Description</label>
          <textarea
            value={taskDescription}
            onChange={(event) => setTaskDescription(event.target.value)}
            placeholder="Enter task description"
          />
        </div>

        <div className="formGroup">
          <label>Status</label>
          <select
            value={taskStatus}
            onChange={(event) => setTaskStatus(event.target.value)}
          >
            <option value={BadgeType.notStarted}>Not Started</option>
            <option value={BadgeType.onTrack}>On Track</option>
            <option value={BadgeType.atRisk}>At Risk</option>
            <option value={BadgeType.delayed}>Delayed</option>
            <option value={BadgeType.onHold}>On Hold</option>
          </select>
        </div>

        <div className="formGroup">
          <label>Priority</label>
          <select
            value={taskPriority}
            onChange={(event) => setTaskPriority(event.target.value)}
          >
            <option value={BadgeType.low}>Low</option>
            <option value={BadgeType.medium}>Medium</option>
            <option value={BadgeType.high}>High</option>
            <option value={BadgeType.urgent}>Urgent</option>
          </select>
        </div>

        <div className="formGroup">
          <label>Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />
        </div>

        <div className="formGroup">
          <label>End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
          />
        </div>

        <div className="formGroup">
          <label>Progress: {taskProgress}%</label>
          <input
            type="range"
            min="0"
            max="100"
            value={taskProgress}
            onChange={(event) => setTaskProgress(event.target.value)}
          />
        </div>

        <button type="submit">Save Task</button>

        <button type="button" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  );
}
