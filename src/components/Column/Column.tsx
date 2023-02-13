import { Button } from "@mui/material"
import { useContext, useState } from "react"
import { INITIAL_STRINGS } from "../../constants/constants"
import { TasksContext } from "../../contexts/tasks/tasks.context"
import { IColumnProps } from "../../interfaces/interfaces"
import { TasksContextType, TaskType } from "../../types/types"
import { isFormIncomplete } from "../../utils/utils";
import { Task } from "../Task/Task";
import { ModalMessage } from "../ModalMessage/ModalMessage";
import { ModalAddTask } from "../ModalAddTask/ModalAddTask";
import { ResponsiveContainer } from "../ResponsiveContainer/ResponsiveContainer"


export const Column = ({ name }: IColumnProps) => { 
  const { tasks, addTask, maxId } = useContext(TasksContext) as TasksContextType;
  const [open, setOpen] = useState<boolean>(false);
  const [openRequired, setOpenRequired] = useState<boolean>(false);
  const [formInput, setFormInput] = useState<TaskType>({ ...INITIAL_STRINGS, id: /*queryClient.getQueryData(['*/maxId/*'])!*/});

  
  const handleCloseRequired = () => {
    setOpenRequired(false);
  }

  const handleAddTask = () => {
    const isAnyFieldEmpty = isFormIncomplete(formInput);
    
    if(isAnyFieldEmpty){
      setOpenRequired(true)
    } else {
      addTask(tasks, formInput);
      setFormInput({ ...INITIAL_STRINGS, id: maxId });
      setOpen(false);
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  
  return(
    <ResponsiveContainer>
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
            .reverse()
        }
      </div>
      <Button type="submit" onClick={handleClickOpen} variant="outlined" size="small">
          + Add task
      </Button>
      <div>
        <ModalAddTask open={open} handleClose={handleClose} 
          handleAddTask={handleAddTask} 
          setFormInput={setFormInput} 
          formInput={formInput}/>
      </div>
      <ModalMessage open={openRequired} handleClose={handleCloseRequired}
        title={'Your task has empty fields'}
        description={'Please, fill all the fields.'} />
    </ResponsiveContainer>
  )
}