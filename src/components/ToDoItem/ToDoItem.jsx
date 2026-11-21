import { BadgeType } from "../Constant/ToDoConstant";
import ToDoBadge from "./ToDoBadge/ToDoBadge";
import ToDoProgress from "./ToDoProgress/ToDoProgress";

export default function ToDoItem() {
  return (
    <div className="container">
      <div className="card">
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
            <tr>
              <td>FY Sales Planning</td>

              <td>
                <ToDoBadge badgeType={BadgeType.onTrack} />
              </td>

              <td>
                <ToDoBadge badgeType={BadgeType.low} />
              </td>

              <td>Nov 12</td>
              <td>Dec 27</td>

              <td>
                <ToDoProgress percentage={10} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
