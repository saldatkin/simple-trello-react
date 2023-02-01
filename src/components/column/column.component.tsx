import { Container } from "@mui/system"
import { useContext } from "react"
import { TasksContext } from "../../contexts/tasks/tasks.context"
import { IColumnProps } from "../../interfaces/interfaces"
import { TasksContextType, TaskType } from "../../types/types"
import { Task } from "../task/task.component"


export const Column = ({ name }: IColumnProps) => {  
  const { tasks } = useContext(TasksContext) as TasksContextType;

  
  return(
    <Container disableGutters
      sx={{
      p:1,
      width:"25%",
      minHeight:'80vh',
      flexGrow:1,
      border:"2px solid black",
      borderRadius:"8px"
    }}>
      <h3 className="title">{name}</h3>
      <div>
        {
          tasks
            .filter((task: TaskType):boolean => task.status === name)
            .map((task: TaskType) => {
              return(
                <Task key={task.id} task={task}/>
              )
            })
        }
      </div>
    </Container>
  )
}