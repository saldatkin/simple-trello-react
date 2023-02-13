import { Box, Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { FC, useContext } from "react"
import { ITaskProps } from "../../interfaces/interfaces"
import { StatusDropdown } from "../StatusDropdown/StatusDropdown";
import { TasksContextType } from "../../types/types";
import { TasksContext } from "../../contexts/tasks/tasks.context";

import './Task.styles.css'

export const Task: FC<ITaskProps> = ({ task }: ITaskProps) => {
  const { tasks, removeTask } = useContext(TasksContext) as TasksContextType;

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
        className="task__description">
        { description }
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
        <StatusDropdown id={id} status={status}/>
      </Box>
    </Box>
  )
}