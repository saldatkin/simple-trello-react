import { Button } from "@mui/material"
import { useContext, useEffect, useState } from "react"
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
  const [isMorePressed, setisMorePressed] = useState<boolean>(false);
  const [openRequired, setOpenRequired] = useState<boolean>(false);
  const [formInput, setFormInput] = useState<TaskType>({ ...INITIAL_STRINGS, id: maxId });


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

  const handleCloseRequired = () => { setOpenRequired(false) }

  const handleClickMoreTasks = () => { setisMorePressed(!isMorePressed) }

  const handleClickOpen = () => { setOpen(true) };

  const handleClose = () => { setOpen(false) };

  const filteredTasks = tasks
    .filter((task: TaskType):boolean => task.status === name)
    .map((task: TaskType) => {
      return(
        <Task key={task.id} task={task}/>
      )
    })
    .reverse()

  useEffect(() => {
    if(window.innerWidth > 900){
      const root = document.getElementById('root') as HTMLElement;
      root.scrollIntoView({ behavior: 'smooth', block: "end" });
    }
  }, [isMorePressed])
  
  useEffect(() => {
    const root = document.getElementById('root') as HTMLElement;
    root.scrollIntoView({ behavior: 'smooth', block: "start" });
  }, [])


  return(
    <ResponsiveContainer>
      <h3 className="title">{name}</h3>
      <div>
        { isMorePressed ? filteredTasks : filteredTasks.slice(0, 6) }
      </div>
      <Button type="submit" onClick={handleClickOpen} variant="outlined" size="small">
        + Add task
      </Button>
      {
        filteredTasks.length > 6 && 
        <>
          {
            isMorePressed ? 
            (<Button type="submit" onClick={handleClickMoreTasks} variant="contained" size="small">
              show less
            </Button>) : 
            (<Button type="submit" onClick={handleClickMoreTasks} variant="outlined" size="small">
              show all tasks
            </Button>)
          }
          
        </>
        
      }
      <div>
        <ModalAddTask open={open} handleClose={handleClose} 
          handleAddTask={handleAddTask} 
          setFormInput={setFormInput} 
          formInput={{...formInput, status: name}}/>
      </div>
      <ModalMessage open={openRequired} handleClose={handleCloseRequired}
        title={'Your task has empty fields'}
        description={'Please, fill all the fields.'} />
    </ResponsiveContainer>
  )
}