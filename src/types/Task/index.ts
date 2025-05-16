export type Task = {
  id: number;
  text: string;
  completed: boolean;
  haveRange: boolean;
  initDate?: string | null;
  endDate?: string | null;
  description?: string | null;
  prioritary?: boolean;
  color: string;
};
