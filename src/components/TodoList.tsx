import { TodoListProps } from "../interfaces";
import { cardColors } from "../utils/cardColors";
import TodoItem from "./TodoItem";

/**
 * A component that displays a list of todo items.
 *
 * @component
 * @param {Object[]} todos - An array of todo items.
 * @param {number} todos[].id - The unique identifier of the todo item.
 * @param {string} todos[].text - The text content of the todo item.
 * @param {boolean} todos[].completed - The completion state of the todo item.
 * @param {function} onToggle - A callback function to toggle the completion state of a todo item.
 * @param {function} onDelete - A callback function to delete a todo item.
 */
function TodoList({ todos, onToggle, onDelete, onEmpty }: TodoListProps) {
  const randomColor: string =
    cardColors[Math.floor(Math.random() * cardColors.length)];
  return (
    <>
      {todos.length === 0 ? (
        <p>{onEmpty}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-10 md:place-items-center">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              onToggle={onToggle}
              onDelete={onDelete}
              color={randomColor}
              haveRange={todo.haveRange}
              initDate={todo.initDate}
              endDate={todo.endDate}
              description={todo.description}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default TodoList;
