import "./styles.css";

export function Card(props) {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>10:15:24</small>
    </div>
  );
}
