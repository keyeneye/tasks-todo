/**
 * Renders a component that displays the number of todos.
 * @param {Object} props - The props object.
 * @param {number} props.count - The number of todos completed.
 * @param {number} props.total - The total number of todos.
 *
 * @returns {JSX.Element} - The JSX element that displays the number of todos.
 */
function TodoCounter({ count = 0, total = 0 }) {
  const message = `You've completed ${count} task${
    count !== 1 ? "s" : ""
  } out of ${total}`;

  return (
    <div className="flex justify-center mb-4">
      <p>{message}</p>
    </div>
  );
}

export default TodoCounter;
