import "./ToDoProgress.css"

export default function ToDoProgress(props) {
  const percentage = props.percentage;


  return (
    <div className="progress">
      <div className="track">
        <div className={percentage >= 50 ? "fill green" : "fill red"}></div>
      </div>

      <span className="percent">{percentage}%</span>
    </div>
  );
}
