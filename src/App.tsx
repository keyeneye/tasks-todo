import { useState } from "react";

import TodoCounter from "./components/TodoCounter";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import CreateTodoButton from "./components/CreateTodoButton";

import { defaultTasksData } from "./utils/defaultTasksData";

import { Task } from "./types/Task";

import "./App.css";

function App() {
  const [defaultTasks, setDefaultTasks] = useState<Task[]>(defaultTasksData);
  const [searchValue, setSearchValue] = useState("");

  function onToggleTask(id: number) {
    setDefaultTasks(
      defaultTasks.map((task: Task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  }

  function onDeleteTask(id: number) {
    setDefaultTasks(defaultTasks.filter((task: Task) => task.id !== id));
  }

  function filterTasks(inputValue: string) {
    setSearchValue(inputValue);
  }

  const filteredTasks = defaultTasks.filter((task: Task) =>
    task.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="flex sm:justify-center flex-col justify-center px-6 py-12 lg:px-8">
      <TodoCounter
        total={defaultTasks.length}
        count={defaultTasks.filter((task: Task) => task.completed).length}
      />
      <TodoSearch value={searchValue} onChange={filterTasks} />
      <TodoList
        todos={filteredTasks}
        onEmpty="No hay tareas"
        onToggle={onToggleTask}
        onDelete={onDeleteTask}
        setTasks={setDefaultTasks}
      />
      <div>
        <CreateTodoButton
          tasks={defaultTasks}
          setTasks={setDefaultTasks}
          editTask={false}
        />
      </div>
    </div>
  );
}

export default App;
