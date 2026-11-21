import { BadgeType } from "../../Constant/ToDoConstant";
import "./ToDoBadge.css";

export default function ToDoBadge(props) {
  const badgeType = props.badgeType;

  switch (badgeType) {
    case BadgeType.low:
      return <span className="badge low">Low</span>;

    case BadgeType.medium:
      return <span className="badge medium">Medium</span>;

    case BadgeType.high:
      return <span className="badge high">High</span>;

    case BadgeType.urgent:
      return <span className="badge urgent">Urgent</span>;

    case BadgeType.notStarted:
      return <span className="badge not-started">Not Started</span>;

    case BadgeType.onTrack:
      return <span className="badge on-track">On Track</span>;

    case BadgeType.atRisk:
      return <span className="badge at-risk">At Risk</span>;

    case BadgeType.delayed:
      return <span className="badge delayed">Delayed</span>;

    case BadgeType.onHold:
      return <span className="badge on-hold">On Hold</span>;

    default:
      return <span className="badge">{badgeType}</span>;
  }
}
