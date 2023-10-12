/**
 * A component that allows users to search for tasks by entering text.
 * @param {Object} props - The component props.
 * @param {string} props.value - The current value of the search input.
 * @param {function} props.onChange - A callback function to handle changes to the search input.
 */

import { TodoSearchProps } from "../interfaces";

function TodoSearch({ value, onChange }: TodoSearchProps) {
  return (
    <div className="flex justify-center items-center">
      <input
        id="todo-search"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search for tasks"
        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
}

export default TodoSearch;
