import "../styles/status.css";

function StatusBar({ status }) {
  return <div className={`status-bar ${status.type}`}>{status.message}</div>;
}

export default StatusBar;
