import { useState } from "react";
import { CreateTodoButtonProps } from "../interfaces";

/**
 * Renders a button that opens a modal to create a new todo task.
 * @param {Object} props - Component props.
 * @param {Array} props.tasks - Array of todo tasks.
 * @param {Function} props.setTasks - Function to update the array of todo tasks.
 * @returns {JSX.Element} - Rendered component.
 */

function CreateTodoButton({ tasks, setTasks }: CreateTodoButtonProps) {
  const [showModal, setShowModal] = useState(false);
  const [newTaskText, setNewTaskText] = useState("");

  /**
   * Handles submitting the new task to the array of tasks.
   * @param {Event} event - Submit event.
   */
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        text: newTaskText,
        completed: false,
      },
    ]);
    setShowModal(false);
    setNewTaskText("");
  }

  /**
   * Hides the modal and clears the input.
   */
  function handleCancel() {
    setShowModal(false);
    setNewTaskText("");
  }

  return (
    <>
      <button onClick={() => setShowModal(true)}>Create Todo</button>
      {showModal && (
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="new-task">New Task:</label>
            <input
              id="new-task"
              type="text"
              value={newTaskText}
              onChange={(event) => setNewTaskText(event.target.value)}
            />
            <button type="submit">Add Task</button>
          </form>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </>
  );
}

export default CreateTodoButton;
