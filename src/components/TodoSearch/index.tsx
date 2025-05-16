/**
 * A component that allows users to search for tasks by entering text.
 * @param {Object} props - The component props.
 * @param {string} props.value - The current value of the search input.
 * @param {function} props.onChange - A callback function to handle changes to the search input.
 */

import { TodoSearchProps } from "../../interfaces";
import TextInput from "../../utils/Inputs/Text";

function TodoSearch({ value, onChange }: TodoSearchProps) {
  return (
    <div className="flex justify-center items-center">
      <TextInput
        value={value}
        onChange={onChange}
        placeholder="Search for tasks"
      />
    </div>
  );
}

export default TodoSearch;
