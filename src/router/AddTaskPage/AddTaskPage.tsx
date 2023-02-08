import { Container, Button, Dialog, DialogContent, DialogTitle } from "@mui/material"
import { useContext, useState } from "react";
import { INITIAL_STRINGS } from "../../constants/constants";
import { TasksContext } from "../../contexts/tasks/tasks.context";
import { TasksContextType, TaskType } from "../../types/types";
import { AddTaskForm } from "../../components/AddTaskForm/AddTaskForm";


export const AddTask = () => {
  const { tasks, addTask, maxId } = useContext(TasksContext) as TasksContextType;
  const initialFormInput: TaskType = { ...INITIAL_STRINGS, id: maxId};
  const [formInput, setFormInput] = useState(initialFormInput); 
  const [openRequired, setOpenRequired] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleCloseRequired = () => {
    setOpenRequired(false);
  }
  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  }
  
  const handleAddTask = () => {
    const isAnyFieldEmpty = formInput.name === "" || formInput.description === "" || formInput.status === "";
    if(isAnyFieldEmpty){
      setOpenRequired(true);
    } else {
      addTask(tasks, formInput);
      setOpenSuccess(true);
      setFormInput(initialFormInput);
    }
  }


  return(
    <> 
      <h1>
        Add task
      </h1>
      <form>
        <Container disableGutters sx={{ mt:2, display:'flex', flexDirection:'column', gap:3 }}>
          <AddTaskForm setFormInput={setFormInput} formInput={formInput}/>
          <Button 
            type="submit" 
            onClick={handleAddTask} 
            variant="contained" 
            size="large">
              Add task
          </Button>
          <Dialog onClose={handleCloseRequired} open={openRequired}>
            <DialogTitle>
              Your task has empty fields
            </DialogTitle>
            <DialogContent>
              Please, fill all the fields.
            </DialogContent>
          </Dialog>
          <Dialog onClose={handleCloseSuccess} open={openSuccess}>
            <DialogTitle>
              <strong>Your task was successfully added!</strong>
            </DialogTitle>
          </Dialog>
        </Container>
      </form>
    </>
  )  
}