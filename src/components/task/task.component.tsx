import { Box, Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { FC, useState } from "react"
import { ITaskProps } from "../../interfaces/interfaces"
import { StatusInput } from "../status-input/status-input.component";



export const Task: FC<ITaskProps> = ({ task, tasks, updateTasks }: ITaskProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { name, description, status, id } = task;

  const handleRemoveTask = () => {
    updateTasks(tasks, id, status)
  }


  return(
    <Box className="task" sx={{ border: "2px pink solid"}}>
      <h4 className="task__name">{name.toLocaleUpperCase()}</h4>
      <p 
        onMouseOver={() => setIsHovered(true)} 
        onMouseOut={() => setIsHovered(false)} 
        className="task__description">
        { isHovered ? description : description.slice(0, 20).trim().concat('...') }
      </p>
      <Button onClick={handleRemoveTask}>
        <CloseIcon/>
      </Button>
      <StatusInput id={id} updateTasks={updateTasks} tasks={tasks} status={status}/>
    </Box>
  )
}