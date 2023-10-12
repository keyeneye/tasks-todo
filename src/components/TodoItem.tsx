import { TodoItemProps } from "../interfaces";

/**
 * Renders a single todo item.
 * @param {Object} props - The props object.
 * @param {string} props.task - The task to display.
 * @param {boolean} props.completed - Whether the task is completed or not.
 * @param {Function} props.onToggle - The function to call when the task is toggled.
 * @param {Function} props.onDelete - The function to call when the task is deleted.
 * @returns {JSX.Element} - The rendered todo item.
 */

function TodoItem({ id, task, completed, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {task}
      </span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
