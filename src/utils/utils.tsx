import { TaskType } from "../types/types";

export const updateStorage = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
}

export const isFormIncomplete = (formInput: TaskType): boolean => {
  return (formInput.name.trim() === "" || formInput.description.trim() === "" || formInput.status.trim() === "");
}
