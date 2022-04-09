import Card from "./Card";
import "./ErrorModal.scss";

function ErrorModal({ title, message, onConfirm }) {
  return (
    <div className="backdrop">
      <Card className="modal">
        <header className="modal-header">
          <h2>{title}</h2>
        </header>
        <div className="modal-content">
          <p>{message}</p>
        </div>
        <footer className="modal-footer">
          <button onClick={onConfirm}>Okay</button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
