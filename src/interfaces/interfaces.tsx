import { TaskType } from "../types/types";

export interface ITaskProps {
  task: TaskType,
  tasks: TaskType[],
  updateTasks:(tasks: TaskType[], id: number, newStatus:string) => void
}

export interface IStatusInputProps {
  id:number,
  status: string,
  tasks: TaskType[],
  updateTasks: (tasks: TaskType[], id: number, newStatus:string) => void
}

export interface IColumnProps {
  key: number,
  name: string,
  tasks: TaskType[],
  updateTasks:(tasks: TaskType[], id: number, newStatus:string) => void
}

export interface ITaskJson {
  tasks: TaskType[]
}

export interface ITasksAction {
  type: string,
  payload: TaskType[]
}

