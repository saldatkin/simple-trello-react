import { Container, Button, Dialog, DialogContent, DialogTitle } from "@mui/material"
import { useContext, useState } from "react";
import { initialStrings } from "../../constants/constants";
import { TasksContext } from "../../contexts/tasks/tasks.context";
import { TasksContextType, TaskType } from "../../types/types";
import { AddTaskFields } from "../../components/add-task-fields/add-task-fields.component";


export const AddTask = () => {
  const { tasks, addTask, maxId } = useContext(TasksContext) as TasksContextType;
  const initialFormInput: TaskType = { ...initialStrings, id: 1 + maxId};
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
    if(formInput.name === "" || formInput.description === "" || formInput.status === ""){
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
          <AddTaskFields setFormInput={setFormInput} formInput={formInput}/>
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