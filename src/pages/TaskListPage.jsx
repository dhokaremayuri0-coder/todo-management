import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ToDoRow from "../components/ToDoRow/ToDoRow";
import "./TaskListPage.css";

export default function TaskListPage(props) {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");

  const tasks = props.tasks;

  const filteredTasks = tasks.filter(function (task) {
    return task.taskName.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="TaskListPage">
      <h2>
        ToDo List <span className="taskCount">{tasks.length}</span>
      </h2>

      <p>Manage all tasks within this workspace</p>

      <div className="searchBox">
        <input
          type="text"
          placeholder="Search Task"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />

        <button>Search</button>

        <button onClick={() => navigate("/task/add")}>Add Task</button>
      </div>

      <h3>☷ &nbsp; List</h3>

      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>ToDo Name</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Progress</th>
            </tr>
          </thead>

          <tbody>
            {filteredTasks.map(function (task) {
              return (
                <ToDoRow
                  key={task.id}
                  task={task}
                  onView={() => navigate("/task/" + task.id)}
                />
              );
            })}

            {filteredTasks.length === 0 && (
              <tr>
                <td colSpan="6">No tasks found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
