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
  const [newTaskDescription, setNewTaskDescription] = useState("");

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
        haveRange: false,
        description: newTaskDescription,
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
      <div className="fixed bottom-0 right-0 p-4">
        <button onClick={() => setShowModal(true)}>
          <img className="w-29 h-20" src="/images/add.png" alt="Add task" />
        </button>
      </div>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
            <div className="bg-white rounded-lg shadow-lg p-6 z-20">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="new-task-text">New Task:</label>
                  <input
                    id="new-task-text"
                    type="text"
                    value={newTaskText}
                    onChange={(event) => setNewTaskText(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="new-task-description">
                    Task Description:
                  </label>
                  <input
                    id="new-task-description"
                    type="text"
                    value={newTaskDescription}
                    onChange={(event) =>
                      setNewTaskDescription(event.target.value)
                    }
                  />
                </div>
                <button type="submit">Add Task</button>
              </form>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

{
  /* <label className="flex justify-center items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={showDateRange}
              onChange={() => toggleButton()}
            />
            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div
              className="dot absolute top-1 bg-white w-6 h-6 rounded-full transition"
              style={{
                left: showDateRange ? "calc(100% - 1.65rem)" : "0.15rem",
              }}
            ></div>
          </div>
          <div className="ml-3 text-white font-medium">
            Add time to complete it?
          </div>
        </label> */
}

export default CreateTodoButton;
