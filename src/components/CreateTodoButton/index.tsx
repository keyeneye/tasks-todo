import { useState } from "react";
import PropTypes from "prop-types";

import { CreateTodoButtonProps } from "../../interfaces";
import TaskFrom from "../TaskFrom";

/**
 * Renders a button that opens a modal to create a new todo task.
 * @param {Object} props - Component props.
 * @param {Array} props.tasks - Array of todo tasks.
 * @param {Function} props.setTasks - Function to update the array of todo tasks.
 * @returns {JSX.Element} - Rendered component.
 */

function CreateTodoButton({
  tasks,
  setTasks,
  editTask,
  taskToEdit,
}: CreateTodoButtonProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 right-0 p-4">
        <button onClick={() => setShowModal(true)}>
          <img className="w-29 h-20" src="/images/add.png" alt="Add task" />
        </button>
      </div>
      <TaskFrom
        editTask={editTask}
        taskToEdit={taskToEdit}
        tasks={tasks}
        setTasks={setTasks}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}

CreateTodoButton.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  taskToEdit: PropTypes.object,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default CreateTodoButton;
