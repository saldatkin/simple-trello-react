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
  setTasks: (tasks: TaskType[]) => void,
  removeTask:(tasks: TaskType[], task: TaskType) => void,
  updateStatus: (tasks: TaskType[], id: number, newStatus: string) => void
}


