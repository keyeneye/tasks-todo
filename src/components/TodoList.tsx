import { TodoListProps } from "../interfaces";
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
  return (
    <>
      {todos.length === 0 ? (
        <p>{onEmpty}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              task={todo.text}
              completed={todo.completed}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default TodoList;
