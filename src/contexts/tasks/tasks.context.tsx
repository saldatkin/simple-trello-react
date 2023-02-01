import { createContext, FC, useState } from "react"
import { ITaskJson, ITasksProviderProps } from "../../interfaces/interfaces"
import tasksJson from '../../tasks.json'
import { TaskType } from "../../types/types";
import { updateStorage } from "../../utils/utils";

const initialTasks: ITaskJson = {
  tasks: JSON.parse(localStorage.getItem("tasks") || '') || tasksJson.tasks,
}


export const TasksContext = createContext({});


export const TasksProvider: FC<ITasksProviderProps> = ({children}) => {
  const [tasks, setTasks] = useState(initialTasks.tasks)

  
  const updateStatus = (tasks: TaskType[], id: number, newStatus: string) => {
    const changedTask = tasks.find((task) => task.id === id);
    changedTask!.status = newStatus;

    tasks = tasks.filter((task: TaskType) => task.id !== id);
    tasks.push(changedTask!);
    updateStorage("tasks", tasks);
    setTasks(tasks);
  }

  const addTask = (tasks: TaskType[], task:TaskType) => {
    tasks.push(task);
    updateStorage("tasks", tasks);
    setTasks(tasks);
  }

  const removeTask = (tasks: TaskType[], task:TaskType) => {
    tasks = tasks.filter(t => t !== task);
    updateStorage("tasks", tasks);
    setTasks(tasks);
  }


  const value = {tasks, setTasks, updateStatus, removeTask};

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}