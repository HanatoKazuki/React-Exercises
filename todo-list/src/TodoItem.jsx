export default function TodoItem({ label, isCompleted }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <button
          className={`btn btn-sm btn-${isCompleted ? "success" : "light"}`}
        >
          <i className={`bi bi${isCompleted ? "-check" : ""}-square`}></i>
        </button>
        <span
          className={`ms-2 ${isCompleted ? "text-decoration-line-through" : ""}`}
        >
          {label}
        </span>
      </div>
      <div>
        <button className="btn btn-sm btn-danger">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

// {`bi bi${isCompleted ? '-check' : ''}-square`} this is a ternary operator
// In JSX, the ternary operator (condition ? expressionIfTrue : expressionIfFalse) is a concise,
// single-line JavaScript expression used for conditional rendering.
// Because standard if...else statements cannot be placed directly inside JSX tags,
// developers use the ternary operator inside curly braces {} to dynamically choose which UI elements, text, or props to display
// It works like if else
