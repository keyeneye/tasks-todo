import { Range } from "react-date-range";

import { Task } from "../types/Task";
import { OnChangeType } from "../types/Calendar";

export interface TitlesProps {
  title: string;
}

interface TodoFunctionProps {
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  setTasks?: React.Dispatch<React.SetStateAction<Task[]>>;
}

export interface CreateTodoButtonProps {
  tasks?: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  editTask: boolean | undefined;
  taskToEdit?: Task | undefined;
}

export interface TodoSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export interface TodoItemProps extends TodoFunctionProps, Task {
  color: string;
  task: Task;
  tasks?: Task[];
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
  isPrioritary?: boolean;
  haveRange?: boolean;
}

export interface DeleteModalProps {
  showDeleteModal: boolean;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  onDelete: (id: number) => void;
  id: number;
}

export interface TaskFormProps {
  tasks?: Task[];
  editTask: boolean | undefined;
  taskToEdit: Task | undefined;
  setTasks?: React.Dispatch<React.SetStateAction<Task[]>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PrioritaryModalProps {
  showPrioritaryModal: boolean;
  setShowPrioritaryModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CheckboxInputProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}
