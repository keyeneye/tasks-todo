import { useState } from "react";

import { addDays, parseISO } from "date-fns";

import TaskFrom from "../TaskFrom";
import Calendar from "../../utils/Calendar";
import TextButton from "../../utils/Buttons/Text";
import { CardTextStyle } from "../../utils/Texts";
import { TodoItemProps } from "../../interfaces";
import DeleteModal from "../DeleteModal";
/**
 * Renders a single todo item.
 * @param {Object} props - The props object.
 * @param {string} props.id - The unique identifier of the todo item.
 * @param {string} props.text - The task to display.
 * @param {boolean} props.completed - Whether the task is completed or not.
 * @param {Function} props.onToggle - The function to call when the task is toggled.
 * @param {Function} props.onDelete - The function to call when the task is deleted.
 * @param {string} props.color - The background color of the todo item.
 * @param {boolean} props.haveRange - Whether the todo item has a date range or not.
 * @param {string} props.initDate - The initial date of the date range.
 * @param {string} props.endDate - The end date of the date range.
 * @param {string} props.description - The description of the todo item.
 * @returns {JSX.Element} - The rendered todo item.
 */

function TodoItem({
  id,
  text,
  completed,
  onToggle,
  onDelete,
  color,
  haveRange,
  initDate,
  endDate,
  description,
  prioritary,
  task,
  setTasks,
  tasks,
}: TodoItemProps) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dateRange = [
    {
      startDate: initDate ? parseISO(initDate) : new Date(),
      endDate: endDate ? parseISO(endDate) : addDays(new Date(), 7),
      key: "selection",
    },
  ];

  return (
    <>
      <div
        className={`p-5 sm:w-full rounded-md shadow-md min-w-fit max-w-sm mx-auto my-4 flex flex-col justify-between ${
          prioritary ? "border-4 border-red-500" : ""
        }`}
        style={{ backgroundColor: color }}
      >
        <label className="flex justify-center items-center cursor-pointer">
          <img
            src={completed ? "/images/cross.png" : "/images/check.png"}
            alt="checkbox"
            className="mr-2 w-8 h-8"
            onClick={() => onToggle(id)}
            style={{ cursor: "pointer" }}
          />
        </label>
        <div className="my-2">
          <div className="mb-2 flex justify-center">
            <span
              className="text-white mr-5 font-bold ml-3"
              style={CardTextStyle(completed)}
            >
              {text}
            </span>
          </div>
          {description && (
            <div className="flex justify-center p-2">
              <span
                className="text-white font-light max-w-sm break-words"
                style={CardTextStyle(completed)}
              >
                {description}
              </span>
            </div>
          )}
          {haveRange && (
            <div className="my-4 flex justify-center">
              <Calendar dateRange={dateRange} />
            </div>
          )}
        </div>
        <div className="flex items-center justify-around w-full">
          <TextButton
            buttonText="Edit Task"
            onClick={() => setShowEditModal(true)}
          />
          <TextButton
            buttonText="Delete"
            onClick={() => setShowDeleteModal(true)}
          />
        </div>
      </div>
      <DeleteModal
        id={id}
        onDelete={onDelete}
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
      />
      <TaskFrom
        setShowModal={setShowEditModal}
        showModal={showEditModal}
        editTask={true}
        taskToEdit={task}
        setTasks={setTasks}
        tasks={tasks}
      />
    </>
  );
}

export default TodoItem;
