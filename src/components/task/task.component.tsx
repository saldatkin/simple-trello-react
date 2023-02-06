import { Box, Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { FC, useContext, useState } from "react"
import { ITaskProps } from "../../interfaces/interfaces"
import { StatusInput } from "../status-input/status-input.component";
import { TasksContextType } from "../../types/types";
import { TasksContext } from "../../contexts/tasks/tasks.context";



export const Task: FC<ITaskProps> = ({ task }: ITaskProps) => {
  const { tasks, removeTask } = useContext(TasksContext) as TasksContextType;
  const [isHovered, setIsHovered] = useState(false);

  const { name, description, status, id } = task;

  const handleRemoveTask = () => {
    removeTask(tasks, task);
  }


  return(
    <Box className="task" 
         sx={{ 
            position:'relative',
            p:1, 
            mb:1,
            border: "2px pink solid", 
            borderRadius: 2,
         }}>
      <h4>{name.toLocaleUpperCase()}</h4>
      <p 
        onMouseOver={() => setIsHovered(true)} 
        onMouseOut={() => setIsHovered(false)} 
        className="task__description">
        { isHovered || description.length < 20 
                          ? description 
                          : description.slice(0, 20).trim().concat('...') }
      </p>
      <Button 
          onClickCapture={handleRemoveTask}
          sx={{ 
            position:'absolute', 
            top:2, 
            right:2,
            p:0, 
            m:0, 
            minWidth:24 
          }} onClick={handleRemoveTask}>
        <CloseIcon sx={{ width:16}} />
      </Button>
      <Box sx={{ width: '100%'}}>
        <StatusInput id={id} status={status}/>
      </Box>
    </Box>
  )
}