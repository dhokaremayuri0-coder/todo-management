import { useNavigate, useParams } from "react-router-dom";
import ToDoBadge from "../components/ToDoBadge/ToDoBadge";
import ToDoProgress from "../components/ToDoProgress/ToDoProgress";
import "./TaskDetails.css";

export default function TaskDetails(props) {
  const navigate = useNavigate();
  const params = useParams();

  const task = props.tasks.find(function (item) {
    return item.id.toString() === params.id;
  });

  if (!task) {
    return (
      <div className="TaskDetails">
        <h2>Task not found</h2>

        <button onClick={() => navigate("/")}>Back to ToDo List</button>
      </div>
    );
  }

  return (
    <div className="TaskDetails">
      <h2>{task.taskName}</h2>

      <p>{task.taskDescription || "No description provided."}</p>

      <div>
        <strong>Status: </strong>
        <ToDoBadge badgeType={task.taskStatus} />
      </div>

      <div>
        <strong>Priority: </strong>
        <ToDoBadge badgeType={task.taskPriority} />
      </div>

      <p>
        <strong>Start Date: </strong>
        {task.startDate || "-"}
      </p>

      <p>
        <strong>End Date: </strong>
        {task.endDate || "-"}
      </p>

      <div>
        <strong>Progress: </strong>
        <ToDoProgress percentage={task.taskProgress} />
      </div>

      <button onClick={() => navigate("/")}>Back to ToDo List</button>
    </div>
  );
}
