import { Button, Dialog, DialogActions, 
  DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { Container } from "@mui/system"
import CloseIcon from '@mui/icons-material/Close';
import { useContext, useState } from "react"
import { initialStrings } from "../../constants/constants"
import { TasksContext } from "../../contexts/tasks/tasks.context"
import { IColumnProps } from "../../interfaces/interfaces"
import { TasksContextType, TaskType } from "../../types/types"
import { AddTaskFields } from "../add-task-fields/add-task-fields.component"
import { Task } from "../task/task.component"


export const Column = ({ name }: IColumnProps) => { 
  const { tasks, addTask, maxId } = useContext(TasksContext) as TasksContextType;
  const [open, setOpen] = useState(false);
  const [openRequired, setOpenRequired] = useState(false);
  const initialFormInput: TaskType = { ...initialStrings, id: maxId};
  const [formInput, setFormInput] = useState(initialFormInput);
  
  const handleCloseRequired = () => {
    setOpenRequired(false);
  }

  const handleAddTask = () => {
    if(formInput.name === "" || formInput.description === "" || formInput.status === ""){
      setOpenRequired(true)
    } else {
      addTask(tasks, formInput);
      setFormInput(initialFormInput);
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
              <AddTaskFields setFormInput={setFormInput} formInput={formInput}/>
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