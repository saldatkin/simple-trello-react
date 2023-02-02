export type ColumnType = {
  key: number,
  name: string,
}

export type NavbarItemType = {
  id: number,
  name: string,
  route: string,
}

export type TaskType = {
  id: number,
  name: string,
  status: string,
  description: string
}

export type TasksContextType = {
  tasks: TaskType[],
  maxId: number,
  setTasks: (tasks: TaskType[]) => void,
  addTask:(tasks: TaskType[], task: TaskType) => void,
  removeTask:(tasks: TaskType[], task: TaskType) => void,
  updateStatus: (tasks: TaskType[], id: number, newStatus: string) => void,
  setMaxId: (newMaxId: number) => void
}


