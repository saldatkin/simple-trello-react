import { Container, Button, Dialog, DialogContent, DialogTitle } from "@mui/material"
import { useContext, useState } from "react";
import { INITIAL_STRINGS } from "../../constants/constants";
import { TasksContext } from "../../contexts/tasks/tasks.context";
import { TasksContextType, TaskType } from "../../types/types";
import { AddTaskForm } from "../../components/AddTaskForm/AddTaskForm";
import { ModalMessage } from "../../components/ModalMessage/ModalMessage";



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
          <ModalMessage 
            open={openRequired}
            handleClose={handleCloseRequired}
            title={'Your task has empty fields'}
            description={'Please, fill all the fields.'} />
          <ModalMessage 
            open={openSuccess}
            handleClose={handleCloseSuccess}
            title={'Your task was successfully added!'}/>
        </Container>
      </form>
    </>
  )  
}