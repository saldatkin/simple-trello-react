import { Container } from "@mui/system";
import { ColumnType, TaskType } from "../../types/types"
import { Column } from "../column/column.component";

import { useState } from "react"
import { ITaskJson } from "../../interfaces/interfaces"
import tasksJson from '../../tasks.json';


export const COLUMN_ARRAY: ColumnType[] = [
  {
    key: 1,
    name: 'todo',
  },
  {
    key: 2,
    name: 'in progress',
  },
  {
    key: 3,
    name: 'code review',
  },
  {
    key: 4,
    name: 'done',
  },
]

const initialTasks: ITaskJson = {
  tasks: JSON.parse(localStorage.getItem("tasks") || '') || tasksJson.tasks
}





export const Columns = () => {
  let [tasks, setTasks] = useState<TaskType[]>(initialTasks.tasks);


  const updateTasks = (tasks: TaskType[], id: number, newStatus: string) => {
    const changedTask = tasks.find((task) => task.id === id);
    changedTask!.status = newStatus;
    tasks = tasks.filter((task: TaskType) => task.id !== id);
    tasks.push(changedTask!);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTasks(tasks);
  }

  return(
    <>
      <h1>Columns</h1>
      {
        <Container disableGutters 
          sx={{
          margin:0,
          padding:0,
          display: 'flex',
          gap:1
        }}>
          {
            COLUMN_ARRAY.map((column: ColumnType) => {
              const { key, name } = column;
              return <Column updateTasks={updateTasks} tasks={tasks} key={key} name={name}/>
            })
          }
        </Container>
      }
    </>
  )
}