import { TodoItemProps } from "../interfaces";

import { DateRange } from "react-date-range";
import { addDays, parseISO } from "date-fns";

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
}: TodoItemProps) {
  const dateRange = [
    {
      startDate: initDate ? parseISO(initDate) : new Date(),
      endDate: endDate ? parseISO(endDate) : addDays(new Date(), 7),
      key: "selection",
    },
  ];
  return (
    <div
      className={`p-4 sm:w-full rounded-md shadow-md min-w-fit max-w-sm mx-auto my-4 flex flex-col justify-between`}
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
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {text}
          </span>
        </div>
        {description && (
          <div className="flex justify-center p-2">
            <span
              style={{ textDecoration: completed ? "line-through" : "none" }}
              className="text-white font-light"
            >
              {description}
            </span>
          </div>
        )}
        {haveRange && (
          <div className="shadow-lg my-5 flex justify-center">
            <DateRange
              editableDateInputs={false}
              moveRangeOnFirstSelection={false}
              ranges={dateRange}
              rangeColors={["#7b11d1"]}
              className="w-full"
              onChange={() => {}}
            />
          </div>
        )}
      </div>
      <div className="flex items-center justify-center w-full">
        <button
          className="bg-violet-600 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
