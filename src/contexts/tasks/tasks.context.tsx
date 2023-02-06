import { createContext, FC, useEffect, useState } from "react"
import { ITaskJson, ITasksProviderProps } from "../../interfaces/interfaces"
import { TaskType } from "../../types/types";
import { updateStorage } from "../../utils/utils";


const initialTasks: ITaskJson = {
  tasks: [],
}


export const TasksContext = createContext({});


export const TasksProvider: FC<ITasksProviderProps> = ({children}) => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")!) || initialTasks.tasks);
  const [maxId, setMaxId] = useState(JSON.parse(localStorage.getItem("maxId")!) || 1);


  useEffect(() => {
    if (tasks.length > 0) { 
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    localStorage.setItem("maxId", JSON.stringify(maxId));
  }, [tasks, maxId])
  
  const updateStatus = (tasks: TaskType[], id: number, newStatus: string): void => {
    const changedTask = tasks.find((task) => task.id === id);
    changedTask!.status = newStatus;

    tasks = tasks.filter((task: TaskType) => task.id !== id);
    tasks.push(changedTask!);
    updateStorage("tasks", tasks);
    setTasks(tasks);
  }

  const addTask = (tasks: TaskType[], task:TaskType): void => {
    setMaxId(maxId + 1);
    tasks.push({...task, id:maxId});
    
    updateStorage("tasks", tasks);
    updateStorage("maxId", maxId);
    setTasks(tasks);
  }

  const removeTask = (tasks: TaskType[], task:TaskType): void => {
    tasks = tasks.filter(t => t !== task);
    updateStorage("tasks", tasks);
    setTasks(tasks);
  }


  const value = {tasks, maxId, setTasks, updateStatus, removeTask, addTask, setMaxId};

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}