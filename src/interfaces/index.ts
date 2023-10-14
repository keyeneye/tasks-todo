import { Range } from "react-date-range";

import { Task } from "../types/Task";
import { OnChangeType } from "../types/Calendar";

export interface TitlesProps {
  title: string;
}

interface TodoFunctionProps {
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export interface CreateTodoButtonProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  editTask: boolean | undefined;
  taskToEdit: Task | undefined;
}

export interface TodoSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export interface TodoItemProps extends TodoFunctionProps, Task {
  color: string;
}

export interface TodoListProps extends TodoFunctionProps {
  todos: Task[];
  onEmpty: string;
}

export interface CalendarProps {
  dateRange: Range[];
  onChangeFunc?: OnChangeType;
  editableDateInputs?: boolean;
  selectionColor?: string;
}
