import { Dispatch, ReactNode, SetStateAction } from "react";
import { TaskType } from "../types/types";

export interface ITaskProps {
  task: TaskType,
}

export interface IStatusDropdownProps {
  id:number,
  status: string,
}

export interface IColumnProps {
  key: number,
  name: string,
}

export interface ITaskJson {
  tasks: TaskType[]
}

export interface ITasksAction {
  type: string,
  payload: TaskType[]
}

export interface ITasksProviderProps {
  children: ReactNode;
}

export interface IAddTaskFieldsProps {
  formInput: TaskType,
  setFormInput: Dispatch<SetStateAction<TaskType>>
}