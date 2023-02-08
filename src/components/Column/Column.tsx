import { Button, Dialog, DialogActions, 
  DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { Container } from "@mui/system"
import CloseIcon from '@mui/icons-material/Close';
import { useContext, useState } from "react"
import { INITIAL_STRINGS } from "../../constants/constants"
import { TasksContext } from "../../contexts/tasks/tasks.context"
import { IColumnProps } from "../../interfaces/interfaces"
import { TasksContextType, TaskType } from "../../types/types"
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { isFormIncomplete } from "../../utils/utils";
import { AddTaskForm } from "../AddTaskForm/AddTaskForm";
import { Task } from "../Task/Task";


export const Column = ({ name }: IColumnProps) => { 
  const { tasks, addTask, maxId } = useContext(TasksContext) as TasksContextType;
  const [open, setOpen] = useState<boolean>(false);

  //const queryClient = useQueryClient();

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
      // const oldTasks = queryClient.getQueryData(['tasks']) as TaskType[];
      // const oldMaxId = queryClient.getQueryData(['maxId']) as number || 0;

      // if(oldTasks.length){
      //   queryClient.setQueryData(['tasks'], [...oldTasks, formInput]);
      // } else{
      //   queryClient.setQueryData(['tasks'], [formInput])
      // }
      addTask(tasks, formInput);
      //queryClient.setQueryData(['maxId'], oldMaxId + 1);
      setFormInput({ ...INITIAL_STRINGS, id: /* queryClient.getQueryData(["*/maxId/*"])!*/ });
      setOpen(false);
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  //let tasks = queryClient.getQueryData(["tasks"]) as TaskType[];

  
  return(
    <Container disableGutters
      sx={{
        p:1,
        width:{  xs: "100%",sm: "90%", md: "80%", lg: "25%", xl: "25%",},
        minHeight:{  xs: "30vh",sm: "30vh", md: "70vh", lg: "80vh", xl: "80vh",},
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
            .reverse()
        }
      </div>
      <Button type="submit" onClick={handleClickOpen} variant="outlined" size="small">
          + Add task
      </Button>
      <div>
        <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
          <DialogTitle>
            Add task
            <Button 
              onClickCapture={handleClose}
              sx={{ 
                position:'absolute', 
                top:4, 
                right:4,
                minWidth:48 
              }}>
              <CloseIcon sx={{ width:32}} />
            </Button>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add task, please fill fields below
            </DialogContentText>
            <Container sx={{ mt:2, display:'flex', flexDirection:'column', gap:3 }}>
              <AddTaskForm setFormInput={setFormInput} formInput={formInput}/>
              <Button 
                type="submit" 
                onClick={handleAddTask} 
                variant="contained" 
                size="large">
                  Add task
              </Button>
            </Container>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
      <Dialog onClose={handleCloseRequired} open={openRequired}>
        <DialogTitle>
          Your task has empty fields
        </DialogTitle>
        <DialogContent>
          Please, fill all the fields.
        </DialogContent>
      </Dialog>
    </Container>
  )
}