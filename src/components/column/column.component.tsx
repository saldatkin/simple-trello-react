import { Container } from "@mui/system"
import { IColumnProps } from "../../interfaces/interfaces"
import { TaskType } from "../../types/types"
import { Task } from "../task/task.component"





export const Column = ({ name, tasks, updateTasks }: IColumnProps) => {  
  return(
    <Container disableGutters
      sx={{
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
                <Task updateTasks={updateTasks} tasks={tasks} task={task}/>
              )
            })
        }
      </div>
    </Container>
  )
}