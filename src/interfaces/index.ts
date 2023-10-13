import { Task } from "../types/Task";

interface TodoFunctionProps {
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export interface CreateTodoButtonProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export interface TodoSearchProps {
  value: string | undefined;
  onChange: (value: string) => void;
}

export interface TodoItemProps extends TodoFunctionProps, Task {
  color: string;
}

export interface TodoListProps extends TodoFunctionProps {
  todos: Task[];
  onEmpty: string;
}
