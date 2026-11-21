import ToDoBadge from "../ToDoBadge/ToDoBadge";
import ToDoProgress from "../ToDoProgress/ToDoProgress";

export default function ToDoRow(props) {
  const task = props.task;

  return (
    <tr>
      <td>
        <span onClick={props.onView} style={{ cursor: "pointer" }}>
          {task.taskName}
        </span>
      </td>

      <td>
        <ToDoBadge badgeType={task.taskStatus} />
      </td>

      <td>
        <ToDoBadge badgeType={task.taskPriority} />
      </td>

      <td>{task.startDate || "-"}</td>

      <td>{task.endDate || "-"}</td>

      <td>
        <ToDoProgress percentage={task.taskProgress} />
      </td>
    </tr>
  );
}
